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
  projectUrl?: string | null;
  // New fields for portfolio showcase
  featured?: boolean;
  order?: number;
  status?: "live" | "building" | "concept";
  tagline?: string;
  features?: string[];
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

export interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string | null;
  client?: string;
  date?: string;
  technologies?: string[];
}

export function getSlugString(slug: { current: string } | string): string {
  if (typeof slug === "string") return slug;
  return slug.current;
}
