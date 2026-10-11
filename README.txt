HER CARE — LOCATION FILTER + MIDWIFE PARTNERS + PAYMENT GATEWAY
================================================================

WHAT THIS VERSION ADDS
----------------------
1. "Be Part of Us" button and midwife partner application form.
2. Applicant details are emailed to the HER CARE administrator.
3. The applying midwife receives an acknowledgement email.
4. Applicant location uses Region → Province (where applicable) → City/Municipality → Barangay.
5. Partner terms shown on the website:
      80% of listed service fee → midwife
      20% of listed service fee → HER CARE
6. Booking checkout integration with two modes:
      demo      = safe project/demo checkout, no real money
      paymongo  = creates a PayMongo Payment Link from the PHP backend
7. Payment amounts are derived server-side from the package ID rather than trusting a price sent by JavaScript.
8. The internal 80/20 allocation is returned by the payment endpoint and recorded with the booking/payment data.

IMPORTANT PAYMENT DISTINCTION
-----------------------------
The included standard PayMongo Payment Link flow COLLECTS the payment into the HER CARE
merchant account and records the 80/20 split as an internal ledger allocation.

For automatic direct settlement between HER CARE and individual midwife accounts, you need
a platform/marketplace payment-splitting product and verified connected/sub-merchant accounts.
PayMongo Platforms supports payment splitting, but the account relationship and merchant IDs
must be activated/configured with PayMongo before development.

This project therefore defaults to a safe ledger split:
  - the client pays the listed service fee;
  - the system calculates 80% midwife / 20% HER CARE;
  - HER CARE can settle the midwife share manually until a platform split account is enabled.

The displayed 80/20 example is based on the listed service fee before gateway fees, refunds,
and taxes. Final business/accounting policy should specify how those items are handled.

FILES
-----
index.html          Website, partner application, booking/payment UI
styles.css          Existing design + partner/payment styles
app.js              Location filters, partner form, booking, payment flow
notify.php          Booking/question emails + midwife application emails
smtp_mailer.php     SMTP helper
config.php          Email, SMS and payment settings
create_payment.php  Secure server-side payment-link creator + 80/20 calculator
payment-demo.php    Safe demo checkout for presentation/testing

RUNNING LOCALLY WITH XAMPP
--------------------------
1. Copy this whole folder to:
      C:\xampp\htdocs\her-care\

2. Start Apache in XAMPP.

3. Open:
      http://localhost/her-care/

Do not open index.html through file:// if you want email/payment PHP features to work.

EMAIL SETUP
-----------
Keep your working SMTP configuration in config.php.
Example Gmail setup:

    'driver' => 'smtp',
    'from_email' => 'YOUR_HERCARE_EMAIL@gmail.com',
    'smtp' => [
        'host' => 'smtp.gmail.com',
        'port' => 587,
        'encryption' => 'tls',
        'username' => 'YOUR_HERCARE_EMAIL@gmail.com',
        'password' => 'YOUR_GOOGLE_APP_PASSWORD',
        'timeout' => 15,
    ],

Never publish config.php with real passwords/API keys.

PAYMENT MODE A — DEMO (DEFAULT)
-------------------------------
config.php:

    'payments' => [
        'mode' => 'demo',
        'provider' => 'paymongo',
        'currency' => 'PHP',
        'paymongo_secret_key' => 'YOUR_PAYMONGO_SECRET_KEY',
        'midwife_share_percent' => 80,
        'company_share_percent' => 20,
        'settlement_mode' => 'ledger',
    ],

After a booking is sent successfully, HER CARE generates a Demo Checkout button.
The demo page lets you present GCash, Maya, Card and QR Ph options visually, but it does not
move real money. Completing the demo stores a local demo payment record in the browser.

PAYMENT MODE B — PAYMONGO PAYMENT LINKS
---------------------------------------
1. Create/activate a PayMongo account.
2. Get a TEST secret key first from the PayMongo developer settings.
3. In config.php change:

      'mode' => 'paymongo',
      'paymongo_secret_key' => 'sk_test_...',

4. Submit a booking through HER CARE.
5. create_payment.php creates the Payment Link on the server and returns the hosted checkout URL.

Important:
- Keep the secret key only in config.php/PHP. Never place it in app.js or index.html.
- Test with sk_test_... before using a live key.
- Payment Links do not automatically send the 80% directly to a midwife in this project.
- For real automatic split settlement, use PayMongo Platforms/payment splitting after obtaining
  the required platform relationship and child/connected merchant identifiers.
- For production payment status, configure PayMongo webhooks and treat the paid webhook as the
  source of truth. This prototype does not mark live PayMongo payments paid in a database.

MIDWIFE PARTNER APPLICATION
---------------------------
The Be Part of Us form collects:
- Full name
- Email and contact number
- PRC / Midwifery License No.
- Years of practice
- Preferred availability
- Services offered
- Primary Region / Province / City-Municipality / Barangay
- Professional introduction
- Verification consent

Do not collect credential scans/IDs through the public email form. Request supporting documents
later through a secured onboarding process.

The application is sent to the same admin_email configured in config.php.
The applicant also receives an email acknowledgement.

80/20 EXAMPLES
--------------
Basic Prenatal Visit ₱500:
  Midwife:  ₱400
  HER CARE: ₱100

Prenatal Plus ₱750:
  Midwife:  ₱600
  HER CARE: ₱150

Postpartum Home Visit ₱600:
  Midwife:  ₱480
  HER CARE: ₱120

New Mom Care Package ₱1,000:
  Midwife:  ₱800
  HER CARE: ₱200

Prenatal + Tetanus Immunization uses the ₱850 base service fee for online payment/split.
Any separate vaccine cost is excluded from the current online amount and should be handled by
the final business policy.

PRODUCTION NOTES
----------------
This is still a project/prototype foundation. Before handling real maternal-health bookings,
professional credentials, home addresses, and real money, add at minimum:
- HTTPS
- a secured database
- admin and midwife authenticated dashboards
- server-side booking/schedule locking
- payment webhook verification and payment-status records
- audit logs
- refund/cancellation policy
- payout ledger and reconciliation
- credential verification workflow
- privacy/consent and data-retention rules
- appropriate Philippine regulatory, healthcare, tax, and data-privacy review
