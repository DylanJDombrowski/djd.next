// src/app/(site)/blog/[slug]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { postQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { formatDate } from "@/lib/utils";
import NewsletterForm from "@/components/forms/newsletter-form";
import { PortableText as PortableTextType } from "@/types";
import Link from "next/link";

// Define type for post data
interface BlogPost {
  excerpt: string;
  _id: string;
  title: string;
  slug: string;
  body: PortableTextType;
  mainImage?: string;
  publishedAt: string;
  categories?: string[];
  series?: {
    _id: string;
    title: string;
    slug: string;
  };
}

// Generate static paths
export async function generateStaticParams() {
  const query = `*[_type == "post"] { "slug": slug.current }`;
  const posts = await sanityFetch<Array<{ slug: string }>>({ query });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This function gets post data - defined separately to avoid params issues
async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    return await sanityFetch<BlogPost>({
      query: postQuery,
      params: { slug },
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const post = await getPost(params.slug);

    if (!post) {
      return {
        title: "Post Not Found | Dylan J. Dombrowski",
      };
    }

    return {
      title: `${post.title} | Blog | Dylan J. Dombrowski`,
      description:
        post.excerpt || `Read about ${post.title} by Dylan J. Dombrowski`,
    };
  } catch (error) {
    console.error("Error generating metadata for post:", error);
    return {
      title: "Blog | Dylan J. Dombrowski",
    };
  }
}

// Main component
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const post = await getPost(params.slug);

    if (!post) {
      notFound();
    }

    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Page content remains the same... */}
            <header className="mb-8">
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="text-sm px-3 py-1 rounded-full bg-navy/10 text-navy"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {post.title}
              </h1>

              <div className="text-navy/70 mb-8">
                {formatDate(post.publishedAt)}
              </div>
            </header>

            {post.mainImage && (
              <div className="mb-10 rounded-lg overflow-hidden">
                <Image
                  src={post.mainImage}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-auto"
                />
              </div>
            )}

            <article className="prose prose-lg max-w-none mb-12">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </article>

            {/* Series navigation (if part of a series) */}
            {post.series && (
              <div className="mb-12 bg-beige p-6 rounded-lg">
                <p className="font-medium mb-2">
                  This post is part of the series:
                </p>
                <h3 className="text-xl font-bold mb-4">
                  <Link
                    href={`/series/${post.series.slug}`}
                    className="text-navy hover:text-orange"
                  >
                    {post.series.title}
                  </Link>
                </h3>

                <Link
                  href={`/series/${post.series.slug}`}
                  className="text-orange hover:underline"
                >
                  View all posts in this series →
                </Link>
              </div>
            )}

            {/* Newsletter signup */}
            <div className="mb-12 border border-gray-200 p-8 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  Enjoyed this article?
                </h3>
                <p className="text-navy/80">
                  Subscribe to get notified when I publish new content.
                </p>
              </div>
              <NewsletterForm />
            </div>

            {/* Author bio */}
            <div className="flex items-center p-6 bg-gray-50 rounded-lg">
              <div className="mr-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  {/* Fallback if image is missing */}
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    DJ
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold">Dylan J. Dombrowski</h4>
                <p className="text-sm text-navy/70">
                  Full Stack Developer & IT Professional with experience in
                  React, Angular, and AWS.
                </p>
                <Link
                  href="/about"
                  className="text-sm text-orange hover:underline"
                >
                  Learn more about me →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
}
