// src/app/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { featuredContentQuery } from "@/lib/queries";
import ServiceCard from "@/components/services/service-card";
import ProjectCard from "@/components/projects/project-card";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";
import Link from "next/link";
import { Post, Project, Service, HomeContent, getSlugString } from "@/types";
import { getImageUrl } from "@/lib/image";

export const metadata: Metadata = {
  title: "Dylan J. Dombrowski - Web Developer & IT Consultant",
  description:
    "Professional web development and IT consulting services specializing in building modern, responsive websites and applications.",
};

async function getHomeContent() {
  return sanityFetch<HomeContent>({ query: featuredContentQuery });
}

export default async function HomePage() {
  const { featuredServices, featuredProjects, recentPosts } =
    await getHomeContent();

  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Web Developer & IT Consultant
            </h1>
            <p className="text-xl mb-8">
              Helping businesses build modern, responsive web applications and
              solve complex technical challenges.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-md border border-white transition"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {featuredServices?.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">Services</h2>
            <p className="text-lg text-navy/70 mb-12 text-center max-w-2xl mx-auto">
              Professional web development and IT consulting tailored to your
              business needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service: Service) => (
                <ServiceCard
                  key={service._id}
                  title={service.title}
                  description={service.shortDescription}
                  slug={getSlugString(service.slug)}
                  icon={service.icon}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block text-orange hover:text-orange/80 font-medium"
              >
                View all services →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {featuredProjects?.length > 0 && (
        <section className="py-16 bg-beige">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Featured Projects
            </h2>
            <p className="text-lg text-navy/70 mb-12 text-center max-w-2xl mx-auto">
              Recent work and case studies
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map((project: Project) => (
                <ProjectCard
                  key={project._id}
                  title={project.title}
                  description={project.description}
                  slug={getSlugString(project.slug)}
                  imageUrl={getImageUrl(project.mainImage)}
                  client={project.client}
                  technologies={project.technologies}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/projects"
                className="inline-block text-orange hover:text-orange/80 font-medium"
              >
                View all projects →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Section */}
      {recentPosts?.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Latest Insights
            </h2>
            <p className="text-lg text-navy/70 mb-12 text-center max-w-2xl mx-auto">
              Thoughts on technology, development, and business
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post: Post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt ?? ""}
                  slug={getSlugString(post.slug)}
                  mainImage={post.mainImage ?? null}
                  publishedAt={post.publishedAt}
                  categories={post.categories}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block text-orange hover:text-orange/80 font-medium"
              >
                View all posts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8">
              Let&apos;s discuss how I can help bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-3 px-6 rounded-md transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
