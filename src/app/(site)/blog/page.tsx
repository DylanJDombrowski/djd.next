// src/app/(site)/blog/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { postsQuery, seriesQuery } from "@/lib/queries";
import PostCard from "@/components/blog/post-card";
import SeriesCard from "@/components/blog/series-card";
import { Metadata } from "next";
import NewsletterForm from "@/components/forms/newsletter-form";
import { useState } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dylan J. Dombrowski",
  description:
    "Web development insights, philosophy, personal growth, and more.",
};

// Function to fetch all posts
async function getAllContent() {
  // Fetch posts and series in parallel
  const [posts, allSeries] = await Promise.all([
    sanityFetch<any[]>({ query: postsQuery }),
    sanityFetch<any[]>({ query: seriesQuery }),
  ]);

  console.log(`Fetched ${posts.length} posts and ${allSeries.length} series`);

  return {
    posts: posts.map((post) => ({
      ...post,
      mainImage: post.mainImage || null,
    })),
    series: allSeries,
  };
}

export default async function BlogPage() {
  const { posts, series } = await getAllContent();

  // Find featured post (either explicitly marked as featured or the most recent)
  const featuredPost = posts.find((post) => post.featured) || posts[0];
  // Regular posts (excluding the featured one)
  const regularPosts = posts.filter((post) => post._id !== featuredPost?._id);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-navy/80">
              Explorations in technology, personal growth, philosophy, and
              creative analysis.
            </p>
          </div>

          {/* Content navigation tabs */}
          <div className="flex mb-12 border-b border-gray-200">
            <a
              href="#all-content"
              className="px-6 py-3 text-lg font-medium border-b-2 border-orange -mb-px"
            >
              All Content
            </a>
            <a
              href="#series"
              className="px-6 py-3 text-lg font-medium text-gray-600 hover:text-navy"
            >
              Series
            </a>
            <a
              href="#topics"
              className="px-6 py-3 text-lg font-medium text-gray-600 hover:text-navy"
            >
              Topics
            </a>
          </div>

          {/* Featured post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    {featuredPost.mainImage && (
                      <div className="h-64 md:h-full relative">
                        <img
                          src={featuredPost.mainImage}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {featuredPost.categories?.map((category: any) => (
                        <span
                          key={category}
                          className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {featuredPost.title}
                    </h3>
                    <p className="text-navy/70 mb-2">
                      {new Date(featuredPost.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <p className="mb-4">{featuredPost.excerpt}</p>
                    <a
                      href={`/blog/${featuredPost.slug}`}
                      className="text-orange hover:underline font-medium"
                    >
                      Read Full Post →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Featured Series section */}
          {series.length > 0 && (
            <div className="mb-16" id="series">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Series Collections</h2>
                <Link href="/series" className="text-orange hover:underline">
                  View All Series →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {series.slice(0, 2).map((item) => (
                  <SeriesCard
                    key={item._id}
                    title={item.title}
                    description={item.description}
                    slug={item.slug}
                    mainImage={item.mainImage}
                    postCount={item.postCount}
                    status={item.status}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Newsletter signup */}
          <div className="mb-16 bg-beige p-8 rounded-lg">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-2">
                Subscribe to My Newsletter
              </h2>
              <p className="text-navy/80">
                Get notified about new posts on technology, philosophy, and
                personal growth.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {/* Browse by Topic section */}
          <div className="mb-16" id="topics">
            <h2 className="text-2xl font-semibold mb-6">Browse by Topic</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <TopicCard
                title="Technology"
                icon="💻"
                count={
                  posts.filter((p) => p.categories?.includes("Technology"))
                    .length
                }
              />
              <TopicCard
                title="Problem Solving"
                icon="🧩"
                count={
                  posts.filter((p) => p.categories?.includes("Problem Solving"))
                    .length
                }
              />
              <TopicCard
                title="Personal Growth"
                icon="🌱"
                count={
                  posts.filter((p) => p.categories?.includes("Personal Growth"))
                    .length
                }
              />
              <TopicCard
                title="Philosophy"
                icon="🧠"
                count={
                  posts.filter((p) => p.categories?.includes("Philosophy"))
                    .length
                }
              />
              <TopicCard
                title="Consciousness"
                icon="✨"
                count={
                  posts.filter((p) => p.categories?.includes("Consciousness"))
                    .length
                }
              />
              <TopicCard
                title="Music Analysis"
                icon="🎵"
                count={
                  posts.filter((p) => p.categories?.includes("Music")).length
                }
              />
              <TopicCard
                title="Shadow Work"
                icon="🌓"
                count={
                  posts.filter((p) => p.categories?.includes("Shadow Work"))
                    .length
                }
              />
              <TopicCard
                title="Life Journey"
                icon="🛤️"
                count={
                  posts.filter((p) => p.categories?.includes("Life Journey"))
                    .length
                }
              />
            </div>
          </div>

          {/* All posts */}
          <div className="mb-16" id="all-content">
            <h2 className="text-2xl font-semibold mb-6">All Posts</h2>

            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {regularPosts.map((post) => (
                  <PostCard
                    key={post._id}
                    title={post.title}
                    excerpt={post.excerpt || ""}
                    slug={post.slug}
                    mainImage={post.mainImage}
                    publishedAt={post.publishedAt}
                    categories={post.categories}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center py-8 bg-gray-50 rounded-lg">
                No additional posts to display.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple topic card component (defined inside the file for simplicity)
function TopicCard({
  title,
  icon,
  count,
}: {
  title: string;
  icon: string;
  count: number;
}) {
  return (
    <a
      href={`/blog/topic/${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition flex flex-col items-center text-center"
    >
      <span className="text-3xl mb-2">{icon}</span>
      <h3 className="font-medium mb-1">{title}</h3>
      <span className="text-sm text-gray-500">{count} posts</span>
    </a>
  );
}
