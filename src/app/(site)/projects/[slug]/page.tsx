// src/app/(site)/projects/[slug]/page.tsx
import { projects } from "@/lib/projects";
import { formatDate } from "@/lib/utils";
import { Project } from "@/types";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static paths
export async function generateStaticParams() {
  return projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found | Dylan J. Dombrowski",
    };
  }

  return {
    title: `${project.title} | Projects | Dylan J. Dombrowski`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p: Project) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            {project.client && <div className="text-orange font-medium mb-2">{project.client}</div>}

            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>

            {project.projectDate && <div className="text-navy/70 mb-6">{formatDate(project.projectDate)}</div>}

            <p className="text-lg text-navy/80 mb-6">{project.description}</p>

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech: string) => (
                  <span key={tech} className="text-sm px-3 py-1 rounded-full bg-navy/10 text-navy">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4 mt-8">
              {project.projectUrl && (
                <Link
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
                >
                  View Live Project
                </Link>
              )}
            </div>
          </div>

          {project.mainImage && (
            <div className="mb-12 rounded-lg overflow-hidden">
              <Image src={project.mainImage} alt={project.title} width={1200} height={675} className="w-full h-auto" />
            </div>
          )}

          <div className="mt-12 p-8 bg-beige rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Interested in a Similar Project?</h2>
            <p className="mb-6">Let&apos;s discuss how I can help you build something similar for your business.</p>

            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
