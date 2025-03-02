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
    const { data: existingSubscriber, error: checkError } = await supabaseAdmin
      .from("newsletter_subscriptions")
      .select("id, status")
      .eq("email", email)
      .single();

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

        return NextResponse.json(
          { message: "Your subscription has been reactivated" },
          { status: 200 }
        );
      }
    }

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

    // You could add email notification or welcome email here

    return NextResponse.json(
      { message: "Successfully subscribed" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
