// src/app/api/contact/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Initialize clients
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      );
    }

    // Format email content
    const formattedMessage = `
Name: ${name}
Email: ${email}
Subject: ${subject || "Website Contact Form"}

Message:
${message}
    `.trim();

    // Try to store in Supabase first
    let dbStored = false;
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

      dbStored = !error;
      if (error) {
        console.warn(
          "Supabase storage failed, falling back to email only:",
          error
        );
      }
    } catch (dbError) {
      console.warn(
        "Supabase storage error, falling back to email only:",
        dbError
      );
    }

    // Send notification email (as primary method or fallback)
    try {
      await resend.emails.send({
        from: "Contact Form <dylan@dylanjdombrowski.com>",
        to: "dyland601@gmail.com", // Your personal email
        subject: `DJD Contact: ${subject || "Website Inquiry"}`,
        text: formattedMessage,
        replyTo: email,
      });
    } catch (emailError) {
      console.error("Email notification failed:", emailError);

      // If both database and email failed, return error
      if (!dbStored) {
        return NextResponse.json(
          {
            error:
              "Failed to process your request. Please try again later or contact directly via email.",
          },
          { status: 500 }
        );
      }
    }

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
