import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Send welcome email
    await resend.emails.send({
      from: "Dylan <dylan@dylanjdombrowski.com>",
      to: email,
      subject: "Welcome to Our Newsletter",
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

    return NextResponse.json({ status: "success" });
  } catch (error) {
    console.error("Welcome email error:", error);
    return NextResponse.json(
      { error: "Failed to send welcome email" },
      { status: 500 }
    );
  }
}
