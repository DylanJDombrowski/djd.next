// src/components/analytics/page-view-tracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Declare the gtag function types globally
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (
      pathname &&
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      // Construct the full URL including search parameters
      const url = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      // Send pageview to Google Analytics
      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
