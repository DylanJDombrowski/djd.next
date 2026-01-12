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

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required fields" }, { status: 400 });
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
      to: "me@dylanjdombrowski.com", // Your email address
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
