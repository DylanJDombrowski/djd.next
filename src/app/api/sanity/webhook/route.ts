// src/app/api/sanity/webhook/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { sanityFetch } from "@/lib/sanity";

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

// Webhook secret validation
const validateWebhook = (req: Request): boolean => {
  const secret = req.headers.get("x-sanity-webhook-secret");
  return secret === process.env.SANITY_WEBHOOK_SECRET;
};

export async function POST(request: Request) {
  // Validate webhook
  if (!validateWebhook(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Parse the webhook payload
    const payload = await request.json();
    const { _id: documentId, _type, sendNewsletter, slug } = payload;

    // Only process posts that have sendNewsletter set to true
    if (_type !== "post" || !sendNewsletter) {
      return NextResponse.json(
        { message: "Not a newsletter post" },
        { status: 200 }
      );
    }

    // Fetch full post details from Sanity
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
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    // Get active subscribers
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
      return NextResponse.json(
        { message: "No active subscribers" },
        { status: 200 }
      );
    }

    // Prepare post URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://dylanjdombrowski.com";
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    // Send emails in batches (to avoid rate limits)
    const batchSize = 20;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < subscribers.length; i += batchSize) {
      const batch = subscribers.slice(i, i + batchSize);

      // Process each subscriber in the batch
      const emailPromises = batch.map(async (subscriber) => {
        try {
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
    }

    // Update the document in Sanity to mark newsletter as sent
    // This prevents sending duplicate newsletters
    // Ideally, you'd use Sanity client here to update the document

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
