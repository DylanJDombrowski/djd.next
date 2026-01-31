import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL('https://dylanjdombrowski.com'),
  title: {
    default: "Dylan J. Dombrowski - Full-Stack Developer",
    template: "%s | Dylan J. Dombrowski"
  },
  description: "Full-stack developer building web applications for businesses and startups. From SaaS platforms to client websites, I turn ideas into polished products.",
  keywords: ["web development", "full-stack developer", "freelance developer", "SaaS development", "Next.js developer", "React", "TypeScript", "Supabase", "web applications"],
  authors: [{ name: "Dylan J. Dombrowski" }],
  creator: "Dylan J. Dombrowski",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dylanjdombrowski.com",
    siteName: "Dylan J. Dombrowski",
    title: "Dylan J. Dombrowski - Full-Stack Developer",
    description: "Full-stack developer building web applications for businesses and startups. View my portfolio and get in touch for your next project.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dylan J. Dombrowski - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dylan J. Dombrowski - Full-Stack Developer",
    description: "Full-stack developer building web applications for businesses and startups.",
    creator: "@dylandombro",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Your Google Analytics measurement ID
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
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
              <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
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
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
