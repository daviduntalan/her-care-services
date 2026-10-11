<?php

declare(strict_types=1);
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: no-store');

function json_response(int $status, array $data): never
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

function clean_value(mixed $value, int $max = 500): string
{
    $text = trim((string)$value);
    $text = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $text) ?? '';
    return function_exists('mb_substr') ? mb_substr($text, 0, $max) : substr($text, 0, $max);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(405, ['ok' => false, 'message' => 'POST requests only.']);
}

$config = require __DIR__ . '/config.php';
$payments = $config['payments'] ?? [];

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    json_response(400, ['ok' => false, 'message' => 'Invalid JSON request.']);
}

$reference = clean_value($data['reference'] ?? '', 80);
$packageId = clean_value($data['packageId'] ?? '', 80);
$packageName = clean_value($data['packageName'] ?? '', 180);
$service = clean_value($data['service'] ?? '', 180);
$midwife = clean_value($data['midwife'] ?? '', 180);
$clientEmail = clean_value($data['clientEmail'] ?? '', 200);

if ($reference === '' || $packageId === '' || $packageName === '' || $service === '' || $midwife === '') {
    json_response(422, ['ok' => false, 'message' => 'Missing booking information for payment.']);
}
if ($clientEmail !== '' && !filter_var($clientEmail, FILTER_VALIDATE_EMAIL)) {
    json_response(422, ['ok' => false, 'message' => 'Invalid client email address.']);
}

// Server-side prices prevent a client from changing the payable amount in JavaScript.
$packagePrices = [
    'basic-prenatal' => 250.00,
    'prenatal-plus' => 500.00,
    'prenatal-tetanus' => 750.00, // Base service fee only; any vaccine cost is separate.
    'postpartum' => 250.00,
    'new-mom' => 450.00,
    'child-vac-package-1' => 1500.00,
    'child-vac-package-2' => 2500.00,
    'child-vac-package-3' => 2000.00,
    'child-vac-package-4' => 1500.00,
];

if (!array_key_exists($packageId, $packagePrices)) {
    json_response(422, ['ok' => false, 'message' => 'Unknown service package.']);
}

$total = $packagePrices[$packageId];
$midwifePercent = (float)($payments['midwife_share_percent'] ?? 80);
$companyPercent = (float)($payments['company_share_percent'] ?? 20);
if (abs(($midwifePercent + $companyPercent) - 100.0) > 0.001) {
    json_response(500, ['ok' => false, 'message' => 'Payment split must total 100%. Check config.php.']);
}

$midwifeShare = round($total * ($midwifePercent / 100), 2);
$companyShare = round($total - $midwifeShare, 2);

$baseResponse = [
    'ok' => true,
    'reference' => $reference,
    'currency' => 'PHP',
    'total' => $total,
    'totalLabel' => '₱' . number_format($total, 2),
    'midwifeShare' => $midwifeShare,
    'midwifeShareLabel' => '₱' . number_format($midwifeShare, 2),
    'companyShare' => $companyShare,
    'companyShareLabel' => '₱' . number_format($companyShare, 2),
    'midwifePercent' => $midwifePercent,
    'companyPercent' => $companyPercent,
    'settlementMode' => (string)($payments['settlement_mode'] ?? 'ledger'),
];

$mode = strtolower((string)($payments['mode'] ?? 'demo'));
if ($mode === 'demo') {
    $query = http_build_query([
        'reference' => $reference,
        'package' => $packageName,
        'amount' => number_format($total, 2, '.', ''),
        'midwife' => number_format($midwifeShare, 2, '.', ''),
        'company' => number_format($companyShare, 2, '.', ''),
        'email' => $clientEmail,
    ]);
    json_response(200, $baseResponse + [
        'mode' => 'demo',
        'provider' => 'HER CARE Demo Gateway',
        'paymentUrl' => 'payment-demo.php?' . $query,
        'message' => 'Demo checkout created. No real money will move.',
    ]);
}

if ($mode !== 'paymongo') {
    json_response(500, ['ok' => false, 'message' => 'Unsupported payment mode in config.php.']);
}

$secretKey = trim((string)($payments['paymongo_secret_key'] ?? ''));
if ($secretKey === '' || str_starts_with($secretKey, 'YOUR_')) {
    json_response(500, ['ok' => false, 'message' => 'PayMongo is selected but paymongo_secret_key is not configured.']);
}
if (!function_exists('curl_init')) {
    json_response(500, ['ok' => false, 'message' => 'PHP cURL is required for PayMongo. Enable the cURL extension.']);
}

$payload = [
    'amount' => (int)round($total * 100),
    'currency' => 'PHP',
    'description' => "HER CARE {$packageName} — {$reference}",
    'remarks' => "Service: {$service}; Midwife: {$midwife}",
    'metadata' => [
        'booking_reference' => $reference,
        'package_id' => $packageId,
        'midwife' => $midwife,
        'midwife_share_percent' => (string)$midwifePercent,
        'company_share_percent' => (string)$companyPercent,
        'midwife_share_php' => number_format($midwifeShare, 2, '.', ''),
        'company_share_php' => number_format($companyShare, 2, '.', ''),
    ],
];

$ch = curl_init('https://api.paymongo.com/v1/payment_links');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_CONNECTTIMEOUT => 12,
    CURLOPT_TIMEOUT => 25,
    CURLOPT_HTTPHEADER => [
        'Accept: application/json',
        'Content-Type: application/json',
        'Authorization: Basic ' . base64_encode($secretKey . ':'),
    ],
]);
$output = curl_exec($ch);
$error = curl_error($ch);
$status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($output === false || $error !== '') {
    json_response(502, ['ok' => false, 'message' => 'PayMongo connection failed: ' . $error]);
}
$decoded = json_decode($output, true);
if ($status < 200 || $status >= 300 || !is_array($decoded)) {
    $providerMessage = '';
    if (is_array($decoded)) {
        $providerMessage = clean_value($decoded['errors'][0]['detail'] ?? $decoded['message'] ?? '', 500);
    }
    json_response(502, ['ok' => false, 'message' => 'PayMongo could not create the payment link.' . ($providerMessage ? ' ' . $providerMessage : '')]);
}

// Response shapes can evolve; search known URL fields recursively.
$findUrl = function (mixed $node) use (&$findUrl): ?string {
    if (!is_array($node)) return null;
    foreach (['checkout_url', 'checkoutUrl', 'payment_url', 'paymentUrl', 'url'] as $key) {
        if (!empty($node[$key]) && is_string($node[$key]) && preg_match('~^https://~i', $node[$key])) {
            return $node[$key];
        }
    }
    foreach ($node as $value) {
        if (is_array($value)) {
            $found = $findUrl($value);
            if ($found) return $found;
        }
    }
    return null;
};

$paymentUrl = $findUrl($decoded);
if (!$paymentUrl) {
    json_response(502, ['ok' => false, 'message' => 'PayMongo created a response, but HER CARE could not find the hosted checkout URL. Review the current Payment Links API response.']);
}

json_response(200, $baseResponse + [
    'mode' => 'paymongo',
    'provider' => 'PayMongo',
    'paymentUrl' => $paymentUrl,
    'message' => 'PayMongo payment link created.',
]);
