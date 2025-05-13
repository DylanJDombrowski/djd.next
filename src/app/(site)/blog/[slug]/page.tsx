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
import ShareButtons from "@/components/blog/share-buttons";
import AdSenseAd from "@/components/ads/adsense-ad";

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

// This function gets post data
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

    // Prepare the absolute URL for sharing
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "https://dylanjdombrowski.com";
    const postUrl = `${baseUrl}/blog/${post.slug}`;

    return (
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs Navigation */}
          <div className="mb-6 text-sm text-gray-500">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link href="/" className="hover:text-navy">
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <Link href="/blog" className="hover:text-navy">
                      Blog
                    </Link>
                  </div>
                </li>
                <li aria-current="page">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 mx-1"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="text-gray-400 ml-1 md:ml-2 truncate max-w-[200px]">
                      {post.title}
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
          </div>

          <article className="bg-white rounded-lg shadow-sm overflow-hidden">
            {/* Header section with image */}
            <div className="p-6 md:p-8">
              <div className="max-w-4xl mx-auto">
                {/* Categories */}
                {post.categories && post.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((category: string) => (
                      <Link
                        key={category}
                        href={`/blog/topic/${encodeURIComponent(
                          category.toLowerCase().replace(/\s+/g, "-")
                        )}`}
                        className="text-sm px-3 py-1 rounded-full bg-navy/10 text-navy hover:bg-navy/20 transition flex items-center"
                      >
                        <CategoryIcon category={category} size="sm" />
                        <span className="ml-1">{category}</span>
                      </Link>
                    ))}
                  </div>
                )}

                {/* Title and metadata */}
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {post.title}
                </h1>

                <time
                  dateTime={post.publishedAt}
                  className="text-navy/60 text-sm block mb-4"
                >
                  {formatDate(post.publishedAt)}
                </time>

                {post.excerpt && (
                  <p className="text-lg text-gray-600 font-serif leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                )}

                {/* Image positioned after text content */}
                {post.mainImage && (
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md mb-6">
                    <Image
                      src={getImageUrl(post.mainImage)!}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 100vw"
                      priority
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              {/* Main Content Column */}
              <div className="w-full md:w-[740px] p-6 md:p-8">
                {/* Article content */}
                <div className="prose prose-lg max-w-none">
                  <PortableText
                    value={post.body}
                    components={portableTextComponents}
                  />
                </div>

                {/* Share buttons */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <ShareButtons title={post.title} url={postUrl} />
                </div>
              </div>

              {/* Sidebar */}
              <aside className="w-full md:w-[400px] bg-gray-50 p-6 md:p-8">
                <div className="md:sticky md:top-24 space-y-6">
                  {/* Author bio */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-navy flex items-center justify-center text-white text-sm font-bold mr-4 flex-shrink-0">
                        DJ
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">
                          Dylan J. Dombrowski
                        </h4>
                        <p className="text-navy/70 text-sm">
                          Full Stack Developer & IT Professional
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 text-sm">
                      Sharing insights from my experiences in tech, business
                      strategies, and personal journey.
                    </p>
                    <Link
                      href="/about"
                      className="text-orange hover:text-orange-700 inline-flex items-center font-medium text-sm"
                    >
                      Learn more about me
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>

                  {/* Newsletter signup */}
                  <div className="bg-gradient-to-br from-navy/10 to-orange/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
                    <p className="text-navy/80 mb-6 text-sm">
                      Get notified when I publish new articles.
                    </p>
                    <NewsletterForm />
                  </div>

                  {/* Related posts */}
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-bold mb-4">Related Posts</h3>
                    <div className="space-y-4">
                      {relatedPosts.length > 0 ? (
                        relatedPosts.slice(0, 3).map((relatedPost: Post) => (
                          <div
                            key={relatedPost._id}
                            className="flex items-start"
                          >
                            {relatedPost.mainImage && (
                              <div className="w-20 h-20 rounded-md overflow-hidden mr-4 flex-shrink-0">
                                <div className="relative w-full h-full">
                                  <Image
                                    src={getImageUrl(relatedPost.mainImage)!}
                                    alt={relatedPost.title}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                  />
                                </div>
                              </div>
                            )}
                            <div>
                              <Link
                                href={`/blog/${
                                  typeof relatedPost.slug === "string"
                                    ? relatedPost.slug
                                    : relatedPost.slug.current
                                }`}
                                className="font-medium text-gray-900 hover:text-orange transition-colors line-clamp-2"
                              >
                                {relatedPost.title}
                              </Link>
                              <p className="text-sm text-gray-500 mt-1">
                                {formatDate(relatedPost.publishedAt)}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-navy/70">No related posts found</p>
                      )}
                    </div>
                  </div>

                  {/* AdSense Ad */}
                  <AdSenseAd
                    clientId="7533527074451799"
                    adSlotId="2793935285"
                  />
                </div>
              </aside>
            </div>
          </article>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    notFound();
  }
}
