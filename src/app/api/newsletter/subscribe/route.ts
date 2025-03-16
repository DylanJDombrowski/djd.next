// src/app/api/newsletter/subscribe/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with service role key for admin operations
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingSubscriber } = await supabaseAdmin
      .from("newsletter_subscriptions")
      .select("id, status")
      .eq("email", email)
      .single();

    // Flag to track if we should send a welcome email
    let shouldSendWelcome = false;

    // If already subscribed
    if (existingSubscriber) {
      if (existingSubscriber.status === "active") {
        return NextResponse.json(
          { message: "You are already subscribed" },
          { status: 200 }
        );
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabaseAdmin
          .from("newsletter_subscriptions")
          .update({ status: "active" })
          .eq("id", existingSubscriber.id);

        if (updateError) {
          console.error("Error updating subscription:", updateError);
          return NextResponse.json(
            { error: "Failed to reactivate subscription" },
            { status: 500 }
          );
        }

        // Send welcome email to reactivated subscribers
        shouldSendWelcome = true;
      }
    } else {
      // New subscription
      const { error: insertError } = await supabaseAdmin
        .from("newsletter_subscriptions")
        .insert([
          {
            email,
            status: "active",
            subscribed_at: new Date().toISOString(),
          },
        ]);

      if (insertError) {
        console.error("Error inserting subscription:", insertError);
        return NextResponse.json(
          { error: "Failed to subscribe" },
          { status: 500 }
        );
      }

      // Send welcome email to new subscribers
      shouldSendWelcome = true;
    }

    // Send welcome email if needed
    if (shouldSendWelcome) {
      try {
        // Option 1: Call the welcome endpoint directly
        await fetch(
          new URL("/api/newsletter/welcome", request.url).toString(),
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
          }
        );

        // Option 2 (alternative): Send the email directly from here
        /*
        await resend.emails.send({
          from: "Dylan <dylan@dylanjdombrowski.com>",
          to: email,
          subject: "Welcome to My Newsletter",
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <title>Welcome to My Newsletter</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
              </head>
              <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                <header style="text-align: center; margin-bottom: 20px;">
                  <h1 style="color: #33496a; margin-bottom: 10px;">Welcome to My Newsletter!</h1>
                </header>
                
                <p>Thank you for subscribing to my newsletter! I'm excited to share insights about web development, philosophy, personal growth, and more.</p>
                
                <p>You'll receive updates whenever I publish new content that I think you'll find valuable.</p>
                
                <p>Feel free to reply to this email if you have any questions or topics you'd like me to cover.</p>
                
                <p>Best regards,<br>Dylan J. Dombrowski</p>
                
                <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;">
                  <p>
                    If you no longer wish to receive these emails, you can 
                    <a href="${process.env.NEXT_PUBLIC_BASE_URL || "https://dylanjdombrowski.com"}/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: #333;">
                      unsubscribe here
                    </a>.
                  </p>
                  <p>&copy; ${new Date().getFullYear()} Dylan J. Dombrowski. All rights reserved.</p>
                </footer>
              </body>
            </html>
          `,
        });
        */
      } catch (emailError) {
        console.error("Error sending welcome email:", emailError);
        // Continue even if welcome email fails - don't block the subscription
      }
    }

    // Return appropriate message
    const message = existingSubscriber
      ? "Your subscription has been reactivated"
      : "Successfully subscribed";

    return NextResponse.json(
      { message },
      { status: existingSubscriber ? 200 : 201 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
