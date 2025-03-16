// src/app/(site)/unsubscribe-confirmation/page.tsx
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unsubscribed | Dylan J. Dombrowski",
  description: "You have been successfully unsubscribed from our newsletter.",
};

export default function UnsubscribeConfirmationPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // Convert to string explicitly and handle all potential cases
  const emailParam = searchParams.email;
  const email =
    typeof emailParam === "string"
      ? emailParam
      : Array.isArray(emailParam)
        ? emailParam[0]
        : "";

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-bold mb-4">Unsubscribed Successfully</h1>

          <p className="text-gray-600 mb-6">
            {email ? (
              <>
                <span className="font-medium">{email}</span> has been
                successfully unsubscribed from our newsletter.
              </>
            ) : (
              <>You have been successfully unsubscribed from our newsletter.</>
            )}
          </p>

          <p className="text-gray-600 mb-8">
            We&apos;re sorry to see you go. If you&apos;d like to share any
            feedback about why you unsubscribed, feel free to contact us.
          </p>

          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full bg-navy hover:bg-navy/90 text-white font-medium py-2 px-4 rounded"
            >
              Return to Homepage
            </Link>

            <Link
              href="/contact"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
