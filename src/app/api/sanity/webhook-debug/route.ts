// src/app/api/sanity/webhook-debug/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Clone the request to read the body
    const clonedRequest = request.clone();
    const bodyText = await clonedRequest.text();

    // Log all headers
    const headers = Object.fromEntries(Array.from(request.headers.entries()));
    console.log("All headers:", JSON.stringify(headers, null, 2));

    // Log the secret we're using
    console.log("Our secret:", process.env.SANITY_WEBHOOK_SECRET);

    // Log the webhook body
    console.log("Webhook body:", bodyText);

    // Always return success for testing
    return NextResponse.json({
      success: true,
      message: "Debug endpoint - webhook received successfully",
    });
  } catch (error) {
    console.error("Error in debug endpoint:", error);
    return NextResponse.json({ success: false, error: String(error) });
  }
}
