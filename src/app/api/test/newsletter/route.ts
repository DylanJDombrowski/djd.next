// src/app/api/test/newsletter/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { sanityFetch } from "@/lib/sanity";

// Initialize clients
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface SanityPost {
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  publishedAt: string;
  categories?: string[];
}

const resend = new Resend(process.env.RESEND_API_KEY);

// This is a test-only endpoint not for production use
export async function GET(request: Request) {
  // Only allow in development environment
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { error: "Test endpoint not available in production" },
      { status: 403 }
    );
  }

  try {
    // Get post ID from query parameter
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("postId");
    const testEmail = searchParams.get("email") || "your@email.com"; // Default to your email

    if (!postId) {
      return NextResponse.json(
        { error: "Post ID is required" },
        { status: 400 }
      );
    }

    console.log(
      `Testing newsletter for post: ${postId}, sending to: ${testEmail}`
    );

    // Fetch post details from Sanity
    const postQuery = `
      *[_type == "post" && _id == $postId][0] {
        title,
        "slug": slug.current,
        excerpt,
        "mainImage": mainImage.asset->url,
        publishedAt,
        "categories": categories[]->title
      }
    `;

    console.log("Fetching post data from Sanity");
    const post = await sanityFetch<SanityPost>({
      query: postQuery,
      params: { postId },
    });

    if (!post) {
      console.log("Post not found");
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    console.log("Post data:", post);

    // Prepare post URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    console.log(`Sending test email to ${testEmail}`);

    // Send a test email
    const result = await resend.emails.send({
      from: "Dylan <dylan@dylanjdombrowski.com>",
      to: testEmail,
      subject: `[TEST] New Post: ${post.title}`,
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
              <p style="background-color: #ffeb3b; padding: 10px; border-radius: 4px;">
                This is a TEST email from your local development environment
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
              <p>This is a test email for development purposes.</p>
              <p>
                <a href="${baseUrl}/api/newsletter/unsubscribe?email=${encodeURIComponent(testEmail)}" style="color: #333;">
                  Unsubscribe
                </a>
              </p>
            </footer>
          </body>
        </html>
      `,
    });

    console.log("Email sent result:", result);

    return NextResponse.json({
      message: "Test email sent successfully",
      emailId: result,
      sentTo: testEmail,
      post: {
        id: postId,
        title: post.title,
        slug: post.slug,
      },
    });
  } catch (error) {
    console.error("Error sending test email:", error);
    return NextResponse.json(
      { error: "Failed to send test email" },
      { status: 500 }
    );
  }
}
