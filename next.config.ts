import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add Sanity's CDN domain
  },
  typescript: {
    ignoreBuildErrors: true, // Ignore errors in TypeScript build
  },
};

export default nextConfig;
