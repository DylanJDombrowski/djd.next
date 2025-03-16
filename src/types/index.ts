// src/types/index.ts
import { TypedObject } from "@portabletext/types";

// Base Sanity document type
export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt?: string;
  _updatedAt?: string;
  _rev?: string;
}

// Slug type
export interface SanitySlug {
  current: string;
  _type?: "slug";
}

// Type guard for SanitySlug
export function isSanitySlug(
  slug: SanitySlug | { current: string } | string
): slug is SanitySlug {
  return typeof slug !== "string" && "_type" in slug;
}

// Helper to get slug string regardless of type
export function getSlugString(
  slug: SanitySlug | { current: string } | string
): string {
  if (typeof slug === "string") return slug;
  return slug.current;
}

// Image type
export interface SanityImage {
  _type?: "image";
  asset: {
    _ref: string;
    _type?: "reference";
    url?: string;
  };
  alt?: string;
  caption?: string;
}

// Common portable text type
export type PortableText = TypedObject | TypedObject[];

// Post type
export interface Post extends SanityDocument {
  title: string;
  slug: string | SanitySlug | { current: string };
  excerpt?: string;
  mainImage?: string | SanityImage | null;
  body: PortableText;
  publishedAt: string;
  categories?: string[];
  featured?: boolean;
  series?: {
    _id: string;
    title: string;
    slug: string | SanitySlug | { current: string };
  };
}

// Project image type for gallery
export interface ProjectImage {
  asset?: {
    _ref: string;
    _type?: "reference";
  };
  caption?: string;
  alt?: string;
  _key?: string;
  url?: string;
}

// Project type
export interface Project extends SanityDocument {
  title: string;
  slug: string | SanitySlug | { current: string };
  description: string;
  body: PortableText;
  mainImage?: string | SanityImage | null;
  projectImages?: ProjectImage[];
  client?: string;
  projectDate?: string;
  technologies?: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

// Related project type (simplified)
export interface RelatedProject {
  _id: string;
  title: string;
  slug: string | SanitySlug | { current: string };
  description: string;
  mainImage?: string | SanityImage | null;
}

// Service type
export interface Service extends SanityDocument {
  title: string;
  slug: string | SanitySlug | { current: string };
  shortDescription: string;
  body: PortableText;
  features?: string[];
  mainImage?: string | SanityImage | null;
  icon?: string | SanityImage | null;
  ctaText?: string;
  order?: number;
  featured?: boolean;
  relatedProjects?: RelatedProject[];
}

// Series type
export interface Series extends SanityDocument {
  title: string;
  slug: string | SanitySlug | { current: string };
  description: string;
  mainImage?: string | SanityImage | null;
  status: "inProgress" | "completed" | "planned";
  posts: Post[];
  postCount: number;
}

// Component Props
export interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  mainImage?: string | SanityImage | null;
  publishedAt: string;
  categories?: string[];
}

export interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: string | SanityImage | null;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl?: string | null;
  client?: string;
  date?: string;
  technologies?: string[];
  isDark?: boolean;
}

export interface SeriesCardProps {
  title: string;
  description: string;
  slug: string;
  mainImage?: string | SanityImage | null;
  postCount: number;
  status: "inProgress" | "completed" | "planned";
}

// Newsletter form props
export interface NewsletterFormProps {
  darkMode?: boolean;
}

// Contact form data type
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// API response types
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

// Homepage content structure
export interface HomeContent {
  featuredServices: Service[];
  featuredProjects: Project[];
  recentPosts: Post[];
}
