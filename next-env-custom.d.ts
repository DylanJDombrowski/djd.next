// next-env-custom.d.ts
import "next";
import { Metadata } from "next";

// This augments the Next.js types to correctly handle params in page components and metadata functions
declare module "next" {
  interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[]>;
  }
}
