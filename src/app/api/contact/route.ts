import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 },
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `New Message from ${name} — Portfolio Contact`,
      text: `New Contact Message

Name: ${name}
Email: ${email}
Message: ${message}

---
Sent from your portfolio contact form.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Name</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #374151;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #374151;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; color: #374151; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}
