import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message, date, time } = await req.json();

    // Validate inputs
    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required." },
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

    const topic = message || "Not specified";

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Scheduling" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      subject: `📅 Call Scheduled by ${name} — ${date} at ${time}`,
      text: `New Call Scheduled

Name: ${name}
Email: ${email}
Date: ${date}
Time: ${time}
Topic: ${topic}

---
Scheduled from your portfolio scheduling page.`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 24px;">
            <div style="display: inline-block; width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #22c55e, #10b981); display: flex; align-items: center; justify-content: center; margin: 0 auto;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
          </div>
          <h2 style="color: #059669; text-align: center; margin-bottom: 20px;">📅 New Call Scheduled</h2>
          <table style="width: 100%; border-collapse: collapse; background: #f9fafb; border-radius: 8px; overflow: hidden;">
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151; width: 120px;">Name</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #374151;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #374151;">
                <a href="mailto:${email}" style="color: #2563eb;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Date</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #059669; font-weight: 600;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: bold; color: #374151;">Time</td>
              <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; color: #059669; font-weight: 600;">${time}</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: bold; color: #374151; vertical-align: top;">Topic</td>
              <td style="padding: 12px 16px; color: #374151; white-space: pre-wrap;">${topic}</td>
            </tr>
          </table>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 20px; text-align: center;">
            Don't forget to prepare for your call with ${name}!
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Call scheduled successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Schedule error:", error);
    return NextResponse.json(
      { error: "Failed to schedule call. Please try again later." },
      { status: 500 },
    );
  }
}
