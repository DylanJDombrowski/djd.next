// src/lib/sanity.ts
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>; // Changed from 'any' to 'unknown'
  tags?: string[];
}): Promise<T> {
  try {
    console.log(`Fetching with params:`, params);
    const data = await client.fetch<T>(query, params, {
      cache: "force-cache",
      next: { tags },
    });
    return data;
  } catch (error) {
    console.error("Error fetching from Sanity:", error);
    throw error;
  }
}
