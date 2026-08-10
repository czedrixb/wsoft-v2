import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { first_name, last_name, email, phone, company, subject, message } = body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail address
      pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password (not your login password)
    },
  });

  const htmlBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #f1f5f9;
      font-family: 'Segoe UI', Arial, sans-serif;
    }
    .wrapper {
      max-width: 620px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    }
    .header {
      background: linear-gradient(135deg, #2376E9 0%, #02C7D0 100%);
      padding: 36px 40px 28px;
      text-align: center;
    }
    .header img {
      height: 36px;
      margin-bottom: 16px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      font-weight: 700;
      color: #ffffff;
      letter-spacing: 0.3px;
    }
    .header p {
      margin: 6px 0 0;
      font-size: 14px;
      color: rgba(255,255,255,0.85);
    }
    .body {
      padding: 36px 40px;
    }
    .greeting {
      font-size: 16px;
      color: #0f172a;
      margin-bottom: 24px;
      font-weight: 500;
    }
    .field-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin-bottom: 16px;
    }
    .field {
      background: #f8fafc;
      border-radius: 10px;
      padding: 14px 16px;
      border-left: 3px solid #2376E9;
      margin-bottom: 5px;
    }
    .field.full-width {
      grid-column: 1 / -1;
    }
    .field-label {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #94a3b8;
      margin-bottom: 4px;
    }
    .field-value {
      font-size: 15px;
      color: #1e293b;
      font-weight: 500;
      word-break: break-word;
    }
    .message-box {
      background: #f8fafc;
      border-radius: 10px;
      padding: 18px 20px;
      border-left: 3px solid #02C7D0;
      margin-top: 4px;
    }
    .message-box .field-label {
      color: #94a3b8;
    }
    .message-box .field-value {
      line-height: 1.65;
      white-space: pre-line;
    }
    .divider {
      height: 1px;
      background: #e2e8f0;
      margin: 28px 0;
    }
    .cta {
      text-align: center;
      margin-top: 20px;
    }
    .cta a {
      display: inline-block;
      background: linear-gradient(135deg, #2376E9, #02C7D0);
      color: #ffffff;
      text-decoration: none;
      padding: 12px 32px;
      border-radius: 24px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.3px;
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
    @media (max-width: 480px) {
      .field-grid { grid-template-columns: 1fr; }
      .field.full-width { grid-column: 1; }
      .body, .header, .footer { padding-left: 24px; padding-right: 24px; }
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>New Contact Form Submission</h1>
      <p>You have received a new message from your website</p>
    </div>

    <div class="body">
      <p class="greeting">Hello, here's what <strong>${first_name} ${last_name}</strong> sent you:</p>

      <div class="field-grid">
        <div class="field">
          <div class="field-label">First Name</div>
          <div class="field-value">${first_name}</div>
        </div>
        <div class="field">
          <div class="field-label">Last Name</div>
          <div class="field-value">${last_name}</div>
        </div>
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value">${email}</div>
        </div>
        <div class="field">
          <div class="field-label">Phone</div>
          <div class="field-value">${phone}</div>
        </div>
        ${company ? `
        <div class="field full-width">
          <div class="field-label">Company</div>
          <div class="field-value">${company}</div>
        </div>` : ""}
        ${subject ? `
        <div class="field full-width">
          <div class="field-label">Topic / Subject</div>
          <div class="field-value">${subject}</div>
        </div>` : ""}
      </div>

      <div class="message-box">
        <div class="field-label">Message</div>
        <div class="field-value">${message}</div>
      </div>

      <div class="divider"></div>

      <div class="cta">
        <a href="mailto:${email}">Reply to ${first_name}</a>
      </div>
    </div>

    <div class="footer">
      <p>This email was sent from the contact form at <a href="https://wsoft.space">wsoft.space</a></p>
      <p style="margin-top: 6px;">© ${new Date().getFullYear()} WSoft. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `"WSoft Contact Form" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECIPIENT_EMAIL || process.env.GMAIL_USER,
      replyTo: email,             // reply goes back to the sender
      subject: subject ? `[${subject}] — ${first_name} ${last_name}` : `New message from ${first_name} ${last_name}`,
      html: htmlBody,
    });
    console.log("✅ Email sent successfully");

    return { success: true };
  } catch (error) {
    console.error("❌ Gmail error code:", error.code);
  console.error("❌ Gmail error message:", error.message);
    console.error("Gmail send error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }
});