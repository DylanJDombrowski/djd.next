// src/app/api/contact/route.ts
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Initialize Supabase
const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

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

    // Store submission in Supabase
    try {
      const { error } = await supabaseAdmin.from("contact_submissions").insert([
        {
          name,
          email,
          subject: subject || "Website Contact Form",
          message,
          status: "new",
        },
      ]);

      if (error) {
        console.warn("Supabase storage failed:", error);
      }
    } catch (err) {
      console.warn("Supabase insert error:", err);
    }

    // Send email via Gmail
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: "dyland601@gmail.com",
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
