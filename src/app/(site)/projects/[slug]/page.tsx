// src/app/(site)/projects/[slug]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { projectQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { urlForImage } from "@/lib/image";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { formatDate } from "@/lib/utils";

// Define type for project data
interface Project {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  body: any;
  mainImage?: any;
  projectImages?: any[];
  client?: string;
  projectDate?: string;
  technologies?: string[];
  projectUrl?: string;
  githubUrl?: string;
}

// Generate static paths
export async function generateStaticParams() {
  const query = `*[_type == "project"] { "slug": slug.current }`;
  const projects = await sanityFetch<Array<{ slug: string }>>({ query });

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Instead of directly accessing params.slug, we need to await the params
  // This is the approach recommended by Next.js
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  try {
    const project = await getProject(slug);

    if (!project) {
      return {
        title: "Project Not Found | Dylan J. Dombrowski",
      };
    }

    return {
      title: `${project.title} | Projects | Dylan J. Dombrowski`,
      description: project.description,
    };
  } catch (error) {
    console.error("Error generating metadata for project:", error);
    return {
      title: "Projects | Dylan J. Dombrowski",
    };
  }
}

async function getProject(slug: string): Promise<Project> {
  return sanityFetch<Project>({
    query: projectQuery,
    params: { slug },
  });
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  // Also await params here
  const resolvedParams = await Promise.resolve(params);
  const slug = resolvedParams.slug;

  try {
    const project = await getProject(slug);

    if (!project) {
      notFound();
    }
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              {project.client && (
                <div className="text-orange font-medium mb-2">
                  {project.client}
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {project.title}
              </h1>

              {project.projectDate && (
                <div className="text-navy/70 mb-6">
                  {formatDate(project.projectDate)}
                </div>
              )}

              <p className="text-lg text-navy/80 mb-6">{project.description}</p>

              {project.technologies && project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-navy/10 text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4 mt-8">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
                  >
                    View Live Project
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent hover:bg-navy/10 text-navy font-bold py-3 px-6 rounded-md border border-navy transition"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </div>

            {project.mainImage && (
              <div className="mb-12 rounded-lg overflow-hidden">
                <Image
                  src={urlForImage(project.mainImage).url()}
                  alt={project.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none mb-12">
              <PortableText
                value={project.body}
                components={portableTextComponents}
              />
            </div>

            {project.projectImages && project.projectImages.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-8">Project Gallery</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.projectImages.map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <Image
                        src={urlForImage(image).url()}
                        alt={`${project.title} image ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />

                      {image.caption && (
                        <div className="p-4 text-sm text-navy/70">
                          {image.caption}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 p-8 bg-beige rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Interested in a Similar Project?
              </h2>
              <p className="mb-6">
                Let's discuss how I can help you build something similar for
                your business.
              </p>

              <a
                href="/contact"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading project:", error);
    notFound();
  }
}
