// src/lib/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    _id: "billable-saas",
    title: "Billable",
    slug: "billable-saas",
    description:
      "A time-tracking and invoicing SaaS built for freelancers. It solves the real-world problem of losing billable hours by providing a simple, professional way to track work and get paid faster.",
    body: "",
    mainImage: "/images/services-approach.jpg", // Placeholder - replace with a screenshot of Billable
    projectUrl: "https://trybillable.com",
    client: "Personal SaaS Project",
    projectDate: "2025-09-01T00:00:00.000Z",
    technologies: ["Next.js", "Supabase", "Stripe", "TypeScript"],
  },
  {
    _id: "miami-valley-xpress-project",
    title: "Miami Valley Xpress",
    slug: "miami-valley-xpress-project",
    description:
      "A full-fledged roster management system for a youth softball organization. What started as a simple informational website evolved into a tool that simplifies team management so they can spend more time on the field.",
    body: "",
    mainImage: "/images/mvx.png",
    projectUrl: "https://www.miamivalleyxpress.com/", // Link to the live site if available
    client: "Miami Valley Xpress",
    projectDate: "2024-02-08T00:00:00.000Z",
    technologies: ["Angular", "Supabase", "Resend", "TypeScript"],
  },
  {
    _id: "iron-pillar-app",
    title: "IronPillar",
    slug: "iron-pillar-app",
    description:
      "A React Native mobile application designed to gamify fitness. The app encourages users to stay consistent with their workouts by adding game-like mechanics and progress tracking.",
    body: "",
    mainImage: null, // Add a screenshot when you have one
    projectUrl: "https://github.com/DylanJDombrowski/IronPillar", // Link to GitHub repo
    client: "Personal Project",
    projectDate: "2023-11-15T00:00:00.000Z",
    technologies: ["React Native", "Firebase", "Expo"],
  },
  {
    _id: "trysideline-saas",
    title: "TrySideline",
    slug: "trysideline-saas",
    description:
      "An incomplete SaaS project aimed at team management. This project was a valuable learning experience in navigating the legal complexities of software development, particularly around user data privacy.",
    body: "",
    mainImage: null,
    projectUrl: null,
    client: "Personal Project (Archived)",
    projectDate: "2023-05-20T00:00:00.000Z",
    technologies: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
  },
];
