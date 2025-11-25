// src/app/(site)/projects/page.tsx
import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/lib/projects";
import { Project } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Dylan J. Dombrowski",
  description: "Portfolio of web development and IT consulting projects by Dylan J. Dombrowski.",
};

export default async function ProjectsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-muted-foreground">
            A showcase of my recent work, including web development, application design, and IT consulting projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.description}
              slug={project.slug}
              imageUrl={project.mainImage}
              client={project.client}
              date={project.projectDate}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
