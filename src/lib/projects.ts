// src/lib/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    _id: "sideline-app",
    title: "Sideline",
    slug: "sideline-app",
    description:
      "A SaaS platform that modernizes how youth sports organizations handle registration, payments, and team management. Sideline saves coaches time and organizations money with streamlined workflows.",
    tagline: "Youth sports management, simplified.",
    body: "",
    mainImage: "/images/projects/sideline-hero.png",
    projectUrl: "https://trysideline.com",
    client: "Personal SaaS",
    projectDate: "2025-01-01T00:00:00.000Z",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    featured: true,
    order: 1,
    status: "building",
    features: [
      "Online registration with digital signatures",
      "Payment processing at competitive rates",
      "One-click coach approval workflows",
      "Automatic roster updates",
    ],
  },
  {
    _id: "miami-valley-xpress-project",
    title: "Miami Valley Xpress",
    slug: "miami-valley-xpress-project",
    description:
      "A full-fledged roster management system for a youth softball organization. What started as a simple informational website evolved into a tool that simplifies team management so they can spend more time on the field.",
    body: "",
    mainImage: "/images/projects/mvx-hero.png",
    projectUrl: "https://www.miamivalleyxpress.com/",
    client: "Miami Valley Xpress",
    projectDate: "2024-02-08T00:00:00.000Z",
    technologies: ["Angular", "Supabase", "Resend", "TypeScript"],
    featured: true,
    order: 2,
    status: "live",
  },
  {
    _id: "trailhead-psychology",
    title: "Trailhead Psychology",
    slug: "trailhead-psychology",
    description:
      "A warm, inviting website for a psychology practice specializing in neurodivergent-affirming care. The design embraces nature-inspired elements and earthy tones, creating a calming digital presence.",
    body: "",
    mainImage: "/images/projects/trailhead-hero.png",
    projectUrl: "https://trailhead-psych.com",
    client: "Trailhead Psychology",
    projectDate: "2024-12-01T00:00:00.000Z",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    order: 3,
    status: "live",
  },
  {
    _id: "iron-pillar-app",
    title: "IronPillar",
    slug: "iron-pillar-app",
    description:
      "A React Native mobile application designed to gamify fitness. The app encourages users to stay consistent with their workouts by adding game-like mechanics and progress tracking.",
    body: "",
    mainImage: null,
    projectUrl: "https://github.com/DylanJDombrowski/IronPillar",
    client: "Personal Project",
    projectDate: "2023-11-15T00:00:00.000Z",
    technologies: ["React Native", "Firebase", "Expo"],
    featured: false,
  },
];

// Helper function to get featured projects sorted by order
export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}
