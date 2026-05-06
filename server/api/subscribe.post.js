import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { email } = body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Invalid email address",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Newsletter Subscriber</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .wrapper {
      max-width: 560px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    }
    .header {
      background: linear-gradient(135deg, #2376E9 0%, #02C7D0 100%);
      padding: 36px 40px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.3px;
    }
    .header p {
      margin: 8px 0 0;
      font-size: 14px;
      color: rgba(255,255,255,0.85);
    }
    .body {
      padding: 36px 40px;
      text-align: center;
    }
    .icon {
      font-size: 48px;
      margin-bottom: 16px;
    }
    .body h2 {
      font-size: 18px;
      color: #0f172a;
      margin: 0 0 8px;
    }
    .body p {
      font-size: 14px;
      color: #64748b;
      margin: 0 0 28px;
      line-height: 1.6;
    }
    .email-badge {
      display: inline-block;
      background: #f0f9ff;
      border: 1.5px solid #2376E9;
      border-radius: 24px;
      padding: 10px 28px;
      font-size: 15px;
      font-weight: 600;
      color: #2376E9;
      word-break: break-all;
    }
    .divider {
      height: 1px;
      background: #e2e8f0;
      margin: 28px 0;
    }
    .meta {
      font-size: 12px;
      color: #94a3b8;
    }
    .footer {
      background: #0a1628;
      padding: 24px 40px;
      text-align: center;
    }
    .footer p {
      margin: 0;
      font-size: 12px;
      color: #64748b;
      line-height: 1.6;
    }
    .footer a {
      color: #2376E9;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Newsletter Subscriber</h1>
      <p>Someone just subscribed to your newsletter</p>
    </div>

    <div class="body">
      <div class="icon">📬</div>
      <h2>You have a new subscriber!</h2>
      <p>The following email address has signed up<br/>to receive updates from WSoft.</p>

      <div class="email-badge">${email}</div>

      <div class="divider"></div>

      <p class="meta">Subscribed on ${new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}</p>
    </div>

    <div class="footer">
      <p>This notification was sent from <a href="https://wsoft.space">wsoft.space</a></p>
      <p style="margin-top: 6px;">© ${new Date().getFullYear()} WSoft. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `"WSoft Newsletter" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      subject: `New Newsletter Subscriber: ${email}`,
      html: htmlBody,
    });

    return { success: true };
  } catch (error) {
    console.error("❌ Gmail error:", error.message);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send notification",
    });
  }
});