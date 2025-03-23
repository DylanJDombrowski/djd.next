// src/app/(site)/blog/[slug]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { postQuery, relatedPostsQuery } from "@/lib/queries";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { portableTextComponents } from "@/lib/portableTextComponents";
import { formatDate } from "@/lib/utils";
import NewsletterForm from "@/components/forms/newsletter-form";
import { PortableText as PortableTextType, Post } from "@/types";
import Link from "next/link";
import CategoryIcon from "@/components/blog/category-icon";
import { getImageUrl } from "@/lib/image";

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

// Function to get related posts based on categories
async function getRelatedPosts(
  slug: string,
  categories: string[] = []
): Promise<Post[]> {
  if (!categories.length) return [];

  try {
    // You need to create a relatedPostsQuery in your lib/queries.ts file
    return await sanityFetch<Post[]>({
      query: relatedPostsQuery,
      params: { slug, categories },
    });
  } catch (error) {
    console.error("Error fetching related posts:", error);
    return [];
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

    // Get related posts based on categories
    const relatedPosts = await getRelatedPosts(
      params.slug,
      post.categories || []
    );

    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="md:flex gap-8">
            {/* Main Content */}
            <div className="md:w-8/12">
              <header className="mb-8">
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category) => (
                      <Link
                        key={category}
                        href={`/blog?category=${encodeURIComponent(category)}`}
                        className="text-sm px-3 py-1 rounded-full bg-navy/10 text-navy hover:bg-navy/20 transition flex items-center"
                      >
                        <CategoryIcon category={category} size="sm" />
                        <span className="ml-1">{category}</span>
                      </Link>
                    ))}
                  </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {post.title}
                </h1>

                <div className="text-navy/70 mb-8 flex items-center">
                  <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center text-white text-xs font-bold mr-2">
                    DJ
                  </div>
                  <span>Dylan J. Dombrowski</span>
                  <span className="mx-2">•</span>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
              </header>

              {post.mainImage && (
                <div className="mb-10 rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={
                      typeof post.mainImage === "string"
                        ? post.mainImage
                        : getImageUrl(post.mainImage)!
                    }
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

              {/* Share buttons */}
              <div className="flex items-center mb-12 space-x-4">
                <span className="text-navy/80 text-sm">Share this post:</span>
                <button className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white">
                  {/* Facebook icon */}
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white">
                  {/* Twitter icon */}
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center text-white">
                  {/* LinkedIn icon */}
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:w-4/12 mt-12 md:mt-0">
              {/* Author bio */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-navy flex items-center justify-center text-white font-bold mr-4">
                    DJ
                  </div>
                  <div>
                    <h4 className="font-bold">Dylan J. Dombrowski</h4>
                    <p className="text-sm text-navy/70">
                      Full Stack Developer & IT Professional
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Sharing insights from my experiences in tech, business
                  strategies, and personal journey.
                </p>
                <Link
                  href="/about"
                  className="text-orange hover:underline text-sm"
                >
                  Learn more about me →
                </Link>
              </div>

              {/* Newsletter signup */}
              <div className="bg-gradient-to-br from-navy/10 to-orange/10 p-6 rounded-lg shadow-inner mb-6">
                <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
                <p className="text-sm text-navy/80 mb-4">
                  Get notified when I publish new articles.
                </p>
                <NewsletterForm />
              </div>

              {/* Related posts */}
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                <div className="space-y-4">
                  {relatedPosts.length > 0 ? (
                    relatedPosts.slice(0, 3).map((relatedPost) => (
                      <div key={relatedPost._id} className="flex items-center">
                        {relatedPost.mainImage && (
                          <div className="w-16 h-16 rounded overflow-hidden mr-3 flex-shrink-0">
                            <div className="relative w-full h-full">
                              <Image
                                src={getImageUrl(relatedPost.mainImage)!}
                                alt={relatedPost.title}
                                fill
                                className="object-cover"
                                sizes="64px"
                              />
                            </div>
                          </div>
                        )}
                        <div>
                          <Link
                            href={`/blog/${typeof relatedPost.slug === "string" ? relatedPost.slug : relatedPost.slug.current}`}
                            className="font-medium hover:text-orange transition-colors text-sm line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-gray-500">
                            {formatDate(relatedPost.publishedAt)}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-navy/70">
                      No related posts found
                    </p>
                  )}
                </div>
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
