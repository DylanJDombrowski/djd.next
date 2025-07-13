import { ReactNode } from "react";

// Project type
export interface Project {
  _id: string;
  title: string;
  slug: string;
  description: string;
  body: string;
  mainImage?: string | null;
  client?: string;
  projectDate?: string;
  technologies?: string[];
  projectUrl?: string;
}

export interface Service {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  body: string;
  keyFeatures?: string[];
  icon?: ReactNode;
}

export interface HomeContent {
  featuredServices: Service[];
}

export function getSlugString(slug: { current: string } | string): string {
  if (typeof slug === "string") return slug;
  return slug.current;
}