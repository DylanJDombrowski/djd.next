// src/lib/projects.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    _id: "miami-valley-xpress-project",
    title: "Miami Valley Xpress",
    slug: "miami-valley-xpress-project",
    description:
      "My first client. We have had many iterations of the site and systems behind it. What once started as a simple wordpress site has evolved into a full fledged roster management system, a tool that simplifies the softball team roster logic, so teams can spend more time on the field and less worrying about the hassle.",
    body: "Body text, not sure how this will look at the end.",
    mainImage: "", // Add a path to your image if you have one locally
    projectUrl: "https://www.dylanjdombrowski.com/projects/miami-valley-xpress-project",
    client: "Miami Valley Xpress",
    projectDate: "2024-02-08T00:00:00.000Z",
    technologies: ["Angular", "Supabase", "Resend", "TypeScript"],
  },
];
