// src/components/analytics/page-view-tracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Define types for the gtag function
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (
      command: string,
      targetId: string,
      configOrEventParams?: Record<string, unknown>
    ) => void;
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
      const url = searchParams.toString()
        ? `${pathname}?${searchParams.toString()}`
        : pathname;

      window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "", {
        page_path: url,
      });
    }
  }, [pathname, searchParams]);

  return null;
}
