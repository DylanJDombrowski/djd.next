import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Script from "next/script";
import { Suspense } from "react";
import PageViewTracker from "@/components/analytics/page-view-tracker";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dylan J. Dombrowski - Developer & Consultant",
  description:
    "Professional web development and IT consulting services by Dylan J. Dombrowski.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Your Google Analytics measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-beige text-navy min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-grow">
          {children}
          <Analytics />
        </main>
        <Footer />

        {/* Google Analytics Script */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
            <Suspense fallback={null}>
              <PageViewTracker />
            </Suspense>
          </>
        )}
        {/* <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7533527074451799"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </html>
  );
}
