// src/app/api/sanity/webhook/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { sanityFetch } from "@/lib/sanity";
import crypto from "crypto";

// Initialize clients
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

// Define type for the post data returned from Sanity
interface SanityPost {
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  publishedAt: string;
  categories?: string[];
}

// Manual signature validation function
function validateSignature(
  signature: string,
  body: string,
  secret: string
): boolean {
  try {
    // Parse the signature header
    const [timestamp, signatureHash] = signature.split(",");
    const timestampValue = timestamp.split("=")[1];
    const hashValue = signatureHash.split("=")[1];

    // Create the message that was signed
    const message = `${timestampValue}.${body}`;

    // Create the HMAC hash
    const hmac = crypto.createHmac("sha256", secret);
    hmac.update(message);
    const computedHash = hmac.digest("hex");

    // Compare the computed hash with the provided hash
    return computedHash === hashValue;
  } catch (error) {
    console.error("Error validating signature:", error);
    return false;
  }
}

export async function POST(request: Request) {
  console.log("Webhook received at:", new Date().toISOString());

  // Read the request body as text for signature verification
  const bodyText = await request.text();

  // Get the signature from headers
  const signature = request.headers.get("sanity-webhook-signature");

  // Check if signature exists
  if (!signature) {
    console.log("No webhook signature found in headers");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Verify the signature manually
  const isValid = validateSignature(
    signature,
    bodyText,
    process.env.SANITY_WEBHOOK_SECRET || ""
  );

  if (!isValid) {
    console.log("Invalid webhook signature");
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  console.log("Webhook signature validated successfully");

  try {
    // Parse the webhook payload
    const payload = JSON.parse(bodyText);
    console.log("Webhook payload received:", JSON.stringify(payload));

    const { _id: documentId, _type, sendNewsletter } = payload;
    console.log(`Document type: ${_type}, sendNewsletter: ${sendNewsletter}`);

    // Only process posts that have sendNewsletter set to true
    if (_type !== "post" || !sendNewsletter) {
      console.log("Not a newsletter post, skipping");
      return NextResponse.json(
        { message: "Not a newsletter post" },
        { status: 200 }
      );
    }

    // Fetch full post details from Sanity
    console.log("Fetching post details from Sanity for document:", documentId);
    const postQuery = `
      *[_type == "post" && _id == $documentId][0] {
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "categories": categories[]->title
      }
    `;

    const post = await sanityFetch<SanityPost>({
      query: postQuery,
      params: { documentId },
    });

    if (!post) {
      console.log("Post not found in Sanity");
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    console.log("Post details retrieved:", post.title);

    // Get active subscribers
    console.log("Fetching active subscribers from Supabase");
    const { data: subscribers, error } = await supabaseAdmin
      .from("newsletter_subscriptions")
      .select("email")
      .eq("status", "active");

    if (error) {
      console.error("Error fetching subscribers:", error);
      return NextResponse.json(
        { message: "Error fetching subscribers" },
        { status: 500 }
      );
    }

    if (!subscribers || subscribers.length === 0) {
      console.log("No active subscribers found");
      return NextResponse.json(
        { message: "No active subscribers" },
        { status: 200 }
      );
    }

    console.log(`Found ${subscribers.length} active subscribers`);

    // Prepare post URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://dylanjdombrowski.com";
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    console.log("Post URL:", postUrl);

    // Send emails in batches (to avoid rate limits)
    const batchSize = 20;
    let successCount = 0;
    let errorCount = 0;

    console.log(`Sending emails in batches of ${batchSize}`);
    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);
      console.log(
        `Processing batch ${i / batchSize + 1} with ${batch.length} subscribers`
      );

      // Process each subscriber in the batch
      const emailPromises = batch.map(async (subscriber) => {
        try {
          console.log(`Sending email to ${subscriber.email}`);
          await resend.emails.send({
            from: "Dylan <dylan@dylanjdombrowski.com>",
            to: subscriber.email,
            subject: `New Post: ${post.title}`,
            html: `
              <!DOCTYPE html>
              <html>
                <head>
                  <meta charset="utf-8">
                  <title>${post.title}</title>
                  <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
                  <header style="text-align: center; margin-bottom: 20px;">
                    <h1 style="color: #33496a; margin-bottom: 10px;">${post.title}</h1>
                    <p style="color: #666; margin-top: 0;">
                      New post published on ${new Date(post.publishedAt).toLocaleDateString()}
                    </p>
                  </header>
                  
                  ${post.mainImage ? `<img src="${post.mainImage}" alt="" style="max-width: 100%; height: auto; margin-bottom: 20px;" />` : ""}
                  
                  <div style="margin-bottom: 30px;">
                    <p>${post.excerpt || "Check out my new blog post!"}</p>
                    <a href="${postUrl}" 
                       style="display: inline-block; background-color: #33496a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-top: 10px;">
                      Read the full post
                    </a>
                  </div>
                  
                  <footer style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center;">
                    <p>You're receiving this email because you subscribed to my newsletter.</p>
                    <p>
                      <a href="${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(subscriber.email)}" style="color: #333;">
                        Unsubscribe
                      </a>
                    </p>
                  </footer>
                </body>
              </html>
            `,
          });
          successCount++;
        } catch (err) {
          console.error(`Error sending to ${subscriber.email}:`, err);
          errorCount++;
        }
      });

      // Wait for the batch to complete
      await Promise.all(emailPromises);
      console.log(
        `Batch ${i / batchSize + 1} completed: ${successCount} sent, ${errorCount} failed`
      );
    }

    console.log(
      `Newsletter sending completed. Total: ${subscribers.length}, Success: ${successCount}, Failed: ${errorCount}`
    );

    return NextResponse.json({
      message: "Newsletter sent",
      stats: {
        total: subscribers.length,
        success: successCount,
        failed: errorCount,
      },
    });
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { message: "Error processing webhook" },
      { status: 500 }
    );
  }
}
