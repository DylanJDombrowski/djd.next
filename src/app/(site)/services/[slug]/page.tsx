// src/app/(site)/services/[slug]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { serviceQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import ProjectCard from "@/components/projects/project-card";
import { getImageUrl } from "@/lib/image";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { RelatedProject, Service } from "@/types";

// Generate static paths
export async function generateStaticParams() {
  const query = `*[_type == "service"] { "slug": slug.current }`;
  const services = await sanityFetch<Array<{ slug: string }>>({ query });

  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;

  try {
    const service = await getService(slug);

    if (!service) {
      return {
        title: "Service Not Found | Dylan J. Dombrowski",
      };
    }

    return {
      title: `${service.title} | Services | Dylan J. Dombrowski`,
      description: service.shortDescription,
    };
  } catch (error) {
    console.error("Error generating metadata for service:", error);
    return {
      title: "Service | Dylan J. Dombrowski",
    };
  }
}

async function getService(slug: string): Promise<Service | null> {
  try {
    return await sanityFetch<Service>({
      query: serviceQuery,
      params: { slug },
    });
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const service = await getService(params.slug);

    if (!service) {
      notFound();
    }

    // Get the image URL from the Sanity image object
    const mainImageUrl = service.mainImage
      ? getImageUrl(service.mainImage)
      : null;

    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-navy/80 mb-8">
                {service.shortDescription}
              </p>

              {service.features && service.features.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {mainImageUrl && (
              <div className="mb-12">
                <Image
                  src={mainImageUrl}
                  alt={service.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <div className="prose prose-lg max-w-none mb-12">
              <PortableText
                value={service.body}
                components={portableTextComponents}
              />
            </div>

            {service.relatedProjects && service.relatedProjects.length > 0 && (
              <div className="mt-16">
                <h2 className="text-2xl font-semibold mb-8">
                  Related Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {service.relatedProjects.map((project) => (
                    <ProjectCard
                      key={project._id}
                      title={project.title}
                      description={project.description}
                      slug={
                        typeof project.slug === "string"
                          ? project.slug
                          : project.slug.current
                      }
                      imageUrl={getImageUrl(project.mainImage)}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="mt-12 p-8 bg-beige rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Get Started?
              </h2>
              <p className="mb-6">
                Let&apos;s discuss how I can help you with your{" "}
                {service.title.toLowerCase()} needs.
              </p>

              <link
                href="/contact"
                className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
              >
                {service.ctaText || "Get in Touch"}
              </link>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading service:", error);
    notFound();
  }
}
