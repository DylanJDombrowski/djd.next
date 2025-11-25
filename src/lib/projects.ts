// src/lib/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
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
];
