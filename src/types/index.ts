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
  slug: SanitySlug | { current: string };
  excerpt?: string;
  mainImage?: SanityImage | string;
  body: PortableText;
  publishedAt: string;
  categories?: string[];
  featured?: boolean;
  series?: {
    _id: string;
    title: string;
    slug: SanitySlug | { current: string };
  };
}

// Project type
export interface Project extends SanityDocument {
  title: string;
  slug: SanitySlug | { current: string };
  description: string;
  body: PortableText;
  mainImage?: SanityImage | string;
  projectImages?: SanityImage[];
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
  slug: SanitySlug | { current: string };
  description: string;
  mainImage?: SanityImage | string;
}

// Service type
export interface Service extends SanityDocument {
  title: string;
  slug: SanitySlug | { current: string };
  shortDescription: string;
  body: PortableText;
  features?: string[];
  mainImage?: SanityImage | string;
  icon?: SanityImage | string | null;
  ctaText?: string;
  order?: number;
  featured?: boolean;
  relatedProjects?: RelatedProject[];
}

// Series type
export interface Series extends SanityDocument {
  title: string;
  slug: SanitySlug | { current: string };
  description: string;
  mainImage?: SanityImage | string;
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
  slug: string | SanitySlug | { current: string };
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
  mainImage?: SanityImage | string | null;
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
