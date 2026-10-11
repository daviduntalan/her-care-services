<?php

/**
 * HER CARE notification configuration.
 *
 * IMPORTANT:
 * 1) Change admin_email before deploying.
 * 2) For local XAMPP, PHP mail() usually needs mail-server configuration.
 *    You can instead set email.driver to 'smtp' and enter SMTP credentials below.
 * 3) Never commit real SMTP passwords or SMS API keys to a public repository.
 */
return [
    'admin_email' => '202120035@psu.palawan.edu.ph',

    'email' => [
        // 'mail' uses PHP mail(); 'smtp' uses the small SMTP client bundled with this project.
        'driver' => 'smtp',
        'from_name' => 'HER CARE',
        'from_email' => '202120035@psu.palawan.edu.ph',

        // Used only when driver = 'smtp'. Example for Gmail: smtp.gmail.com / 587 / tls.
        'smtp' => [
            'host' => 'smtp.gmail.com',
            'port' => 587,
            'encryption' => 'tls', // tls, ssl, or none
            'username' => '202120035@psu.palawan.edu.ph',
            'password' => getenv('HERCARE_SMTP_PASSWORD') ?: '',
            'timeout' => 15,
        ],
    ],

    'sms' => [
        // Optional Philippine SMS delivery through Semaphore.
        // When disabled or if SMS delivery fails, HER CARE falls back to the client's email.
        'enabled' => false,
        'provider' => 'semaphore',
        'api_key' => '',
        'sender_name' => '', // Must be an active sender name on your provider account.
    ],

    'payments' => [
        // demo = safe presentation/testing checkout; paymongo = creates a real/test PayMongo Payment Link.
        'mode' => 'demo',
        // 'mode' => 'paymongo',
        'provider' => 'paymongo',
        'currency' => 'PHP',
        'paymongo_secret_key' => getenv('PAYMONGO_SECRET_KEY') ?: '',
        'midwife_share_percent' => 80,
        'company_share_percent' => 20,
        // Standard Payment Links collect into the HER CARE merchant account; this project records the 80/20 ledger split.
        // Automatic direct settlement to midwife sub-accounts requires a platform payment-splitting product/account.
        'settlement_mode' => 'ledger',
    ],
];
