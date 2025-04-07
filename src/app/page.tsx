// src/app/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { featuredContentQuery } from "@/lib/queries";
import ServiceCard from "@/components/services/service-card";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";
import Link from "next/link";
import { Post, Service, HomeContent, getSlugString } from "@/types";
import ScrollIndicator from "@/components/home/scroll-indicator";
import ScrollAnimation from "@/components/home/scroll-animation";
import FloatingCTA from "@/components/mobile/floating-cta";

export const metadata: Metadata = {
  title: "Dylan J. Dombrowski - Web Developer & IT Consultant",
  description:
    "Professional web development and IT consulting services specializing in building modern, responsive websites and applications.",
};

async function getHomeContent() {
  return sanityFetch<HomeContent>({ query: featuredContentQuery });
}

export default async function HomePage() {
  const { featuredServices, recentPosts } = await getHomeContent();

  return (
    <main>
      <ScrollIndicator />
      <ScrollAnimation />
      <FloatingCTA />

      {/* Hero Section */}
      <section
        id="hero"
        className="py-24 bg-gradient-to-br from-navy to-navy/90 text-white relative overflow-hidden"
      >
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 0 10 L 40 10 M 10 0 L 10 40"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block"></div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Technology Solutions <br className="hidden md:block" />
              That <span className="text-orange">Deliver</span> Results
            </h1>

            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
              I build modern web applications that help small and medium
              businesses solve real challenges, reduce costs, and drive growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/services"
                className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-md transition transform hover:-translate-y-1 shadow-lg"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-transparent hover:bg-white/20 text-white font-bold py-3 px-8 rounded-md border border-white transition hover:shadow-lg"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative wave element */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16"
          >
            <path
              fill="white"
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"
              opacity="0.05"
            ></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      {featuredServices?.length > 0 && (
        <section id="services" className="py-20 bg-beige/20 relative">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="dots"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="3" cy="3" r="1.5" fill="#333" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy animate-fade-in-up">
                Professional Services
              </h2>
              <p className="text-lg text-navy/80">
                I deliver custom technology solutions that solve real business
                problems. Each service is tailored to meet your specific needs
                and challenges.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service: Service) => (
                <div
                  key={service._id}
                  className="transform transition duration-300 hover:-translate-y-2"
                >
                  <ServiceCard
                    title={service.title}
                    description={service.shortDescription}
                    slug={getSlugString(service.slug)}
                    icon={service.icon}
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-white hover:bg-orange/10 text-orange font-medium py-3 px-6 rounded-md border border-orange/20 transition shadow-sm hover:shadow"
              >
                <span>View all services</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Me Section */}
      <section id="why-me" className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                Why Choose Me
              </h2>
              <p className="text-lg text-navy/80 mb-8">
                I bring a unique blend of technical expertise and business
                acumen to every project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Benefit 1 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 text-orange mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 8-6 4 6 4V8Z" />
                    <rect x="2" y="6" width="14" height="12" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">
                  Fast Delivery
                </h3>
                <p className="text-navy/70">
                  I work efficiently to deliver projects on time without
                  sacrificing quality.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 text-orange mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m12 16 4-4-4-4" />
                    <path d="M8 12h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">
                  Modern Technology
                </h3>
                <p className="text-navy/70">
                  I use the latest (but reliable) technologies to build fast,
                  reliable, and scalable solutions.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange/10 text-orange mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M8 13h2" />
                    <path d="M8 17h2" />
                    <path d="M14 13h2" />
                    <path d="M14 17h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy">
                  Clear Communication
                </h3>
                <p className="text-navy/70">
                  I keep you informed throughout the project with regular
                  updates and clear explanations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {recentPosts?.length > 0 && (
        <section id="blog" className="py-20 bg-gray-50 relative">
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
                Insights & Thoughts
              </h2>
              <p className="text-lg text-navy/80">
                I share my knowledge, experiences, and insights on technology,
                development, and digital strategy through my regularly updated
                blog.
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4">
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
                className="inline-flex items-center gap-2 bg-white hover:bg-orange/10 text-orange font-medium py-3 px-6 rounded-md border border-orange/20 transition shadow-sm hover:shadow"
              >
                <span>Read all articles</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-beige/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy">
              Client Testimonials
            </h2>
            <p className="text-lg text-navy/80">
              Don&apos;t just take my word for it. Here&apos;s what clients have
              to say about working with me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-orange"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-navy/80 mb-4">
                &quot;Dylan delivered our website with exceptional skill and
                insight. He attentively listened to our needs, provided prompt
                solutions with creative additions, and helped us structure our
                data effectively. His work has helped us build a robust
                following and share information efficiently. He's always
                diligent with responses and a pleasure to work with.&quot;
              </p>
              <div className="font-medium">
                <p className="text-navy">Rodney Coffey</p>
                <p className="text-navy/60 text-sm">
                  Business Development Director
                </p>
                <a
                  href="https://www.linkedin.com/in/dylanjdombrowski/details/recommendations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange hover:underline text-sm mt-1 inline-block"
                >
                  View on LinkedIn →
                </a>
              </div>
            </div>

            {/* You can add more testimonials here as you collect them */}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-16 bg-navy text-white">
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
              className="inline-block bg-orange hover:bg-orange/90 text-white font-bold py-4 px-8 rounded-md transition transform hover:-translate-y-1 hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
