// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Initialize Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY!,
      response: token,
    }),
  });

  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  try {
    const { name, email, subject, message, turnstileToken } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required fields" }, { status: 400 });
    }

    // Verify Turnstile token
    if (!turnstileToken) {
      return NextResponse.json({ error: "Please complete the captcha verification" }, { status: 400 });
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      return NextResponse.json({ error: "Captcha verification failed. Please try again." }, { status: 400 });
    }

    const formattedMessage = `
Name: ${name}
Email: ${email}
Subject: ${subject || "Website Contact Form"}

Message:
${message}
    `.trim();

    // Send email via Gmail
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "dyland601@gmail.com", // Your email address
      subject: `Contact: ${subject || "Website Inquiry"}`,
      text: formattedMessage,
      replyTo: email,
    });

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
