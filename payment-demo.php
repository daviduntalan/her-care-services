<?php
$reference = htmlspecialchars((string)($_GET['reference'] ?? 'HC-DEMO'), ENT_QUOTES, 'UTF-8');
$package = htmlspecialchars((string)($_GET['package'] ?? 'HER CARE Service'), ENT_QUOTES, 'UTF-8');
$amount = number_format((float)($_GET['amount'] ?? 0), 2);
$midwife = number_format((float)($_GET['midwife'] ?? 0), 2);
$company = number_format((float)($_GET['company'] ?? 0), 2);
$email = htmlspecialchars((string)($_GET['email'] ?? ''), ENT_QUOTES, 'UTF-8');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HER CARE Demo Checkout</title>
  <style>
    *{box-sizing:border-box}body{margin:0;font-family:Arial,sans-serif;background:#f7f2ee;color:#273632;min-height:100vh;display:grid;place-items:center;padding:24px}.card{width:min(560px,100%);background:#fff;border:1px solid #e7ddd4;border-radius:24px;padding:28px;box-shadow:0 22px 60px rgba(80,64,54,.12)}.brand{font-weight:800;letter-spacing:.08em;color:#b96558}.demo{display:inline-block;margin-left:8px;font-size:.72rem;background:#fff1ed;color:#b96558;padding:5px 8px;border-radius:999px}.amount{font-size:2.5rem;font-weight:800;margin:14px 0}.meta{background:#fbf7f2;padding:14px;border-radius:14px;margin:16px 0}.meta div{display:flex;justify-content:space-between;gap:20px;padding:6px 0}.methods{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:20px 0}.method{border:1px solid #ddd7d0;border-radius:12px;padding:12px;text-align:center;font-weight:700}.split{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:16px 0}.split div{background:#eff5f1;border-radius:12px;padding:12px}.split span{display:block;font-size:.75rem;color:#6e7b77}.split strong{display:block;margin-top:4px}.btn{width:100%;border:0;border-radius:999px;padding:14px;background:#d88878;color:white;font-weight:800;cursor:pointer}.note{font-size:.78rem;color:#6e7b77;text-align:center;margin-top:12px}.success{display:none;background:#eff5f1;padding:14px;border-radius:12px;margin-top:14px;color:#3f6251}
  </style>
</head>
<body>
  <main class="card">
    <div><span class="brand">HER CARE</span><span class="demo">DEMO CHECKOUT</span></div>
    <h1><?= $package ?></h1>
    <p>Booking reference: <strong><?= $reference ?></strong></p>
    <?php if ($email): ?><p>Receipt email: <?= $email ?></p><?php endif; ?>
    <div class="amount">₱<?= $amount ?></div>
    <div class="methods"><div class="method">GCash</div><div class="method">Maya</div><div class="method">Card</div><div class="method">QR Ph</div></div>
    <div class="meta"><div><span>Partner payout</span><strong>Handled internally by HER CARE</strong></div></div>
    <div class="meta"><div><span>Status</span><strong>Demo only</strong></div><div><span>Real money moved</span><strong>No</strong></div></div>
    <button class="btn" id="completePayment">Complete Demo Payment</button>
    <div class="success" id="success">Demo payment marked successful. Returning to HER CARE…</div>
    <p class="note">This page is for project testing/presentation only. It does not process a real payment.</p>
  </main>
  <script>
    document.getElementById('completePayment').addEventListener('click', function () {
      const payment = {
        reference: <?= json_encode(htmlspecialchars_decode($reference, ENT_QUOTES)) ?>,
        amount: <?= json_encode((float)($_GET['amount'] ?? 0)) ?>,
        midwifeShare: <?= json_encode((float)($_GET['midwife'] ?? 0)) ?>,
        companyShare: <?= json_encode((float)($_GET['company'] ?? 0)) ?>,
        paidAt: new Date().toISOString(),
        mode: 'demo'
      };
      const existing = JSON.parse(localStorage.getItem('hercareDemoPayments') || '[]');
      existing.push(payment);
      localStorage.setItem('hercareDemoPayments', JSON.stringify(existing));
      document.getElementById('success').style.display = 'block';
      this.disabled = true;
      setTimeout(function () {
        window.location.href = 'index.html?payment=success&reference=' + encodeURIComponent(payment.reference) + '#booking';
      }, 900);
    });
  </script>
</body>
</html>
