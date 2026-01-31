// src/components/projects/featured-projects.tsx
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/projects";
import FeaturedProjectCard from "./featured-project-card";
import { Button } from "@/components/ui/button";

export default function FeaturedProjects() {
  const projects = getFeaturedProjects();

  if (projects.length === 0) return null;

  // First project (Sideline) gets hero treatment, rest are standard
  const heroProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg">
              Recent work I&apos;m proud of
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Hero Project - Full Width */}
            <div className="md:col-span-2">
              <FeaturedProjectCard project={heroProject} variant="hero" />
            </div>

            {/* Other Projects - Side by Side */}
            {otherProjects.map((project) => (
              <FeaturedProjectCard
                key={project._id}
                project={project}
                variant="standard"
              />
            ))}
          </div>

          {/* View All Link */}
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
