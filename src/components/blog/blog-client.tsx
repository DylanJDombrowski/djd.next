"use client";

import { useState } from "react";
import PostCard from "@/components/blog/post-card";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/components/forms/newsletter-form";
import CategoryIcon from "@/components/blog/category-icon";
import { Category, getSlugString, Post } from "@/types";
import { getImageUrl } from "@/lib/image";

// Define types for server-fetched data
interface BlogPageProps {
  posts: Post[];
  categories: Category[];
}

export default function BlogPageClient({
  posts = [],
  categories = [],
}: BlogPageProps) {
  // Client-side state for category filtering
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter posts based on selected category with null check
  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories?.includes(selectedCategory))
    : posts;

  // Find featured post with null check
  const featuredPost =
    posts.length > 0 ? posts.find((post) => post.featured) || posts[0] : null;

  // Regular posts (excluding the featured one) with null check
  const regularPosts = featuredPost
    ? filteredPosts.filter((post) => post._id !== featuredPost._id)
    : filteredPosts;

  // Get post count per category with null check
  const categoryPostCounts = categories.map((category) => ({
    ...category,
    count: posts.filter(
      (post) => post.categories && post.categories.includes(category.title)
    ).length,
  }));

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="relative mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 text-navy">
              Insights & Experiences
            </h1>
            <p className="text-lg text-navy/80">
              Where technology meets philosophy, business perspectives, and
              personal journeys. I share stories from the IT trenches, digital
              transformation strategies, and thoughts on finding simplicity in
              our complex world.
            </p>
          </div>
        </div>

        {/* Main Content Area with Grid Layout */}
        <div className="md:flex gap-8">
          {/* Main Content Column */}
          <div className="md:w-8/12">
            {/* Featured Post - Taller and more prominent */}
            {featuredPost && (
              <div className="mb-10">
                <div className="flex items-center mb-4">
                  <span className="text-orange text-2xl mr-2">★</span>
                  <h2 className="text-2xl font-semibold">Featured</h2>
                </div>

                <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transition-all hover:shadow-xl">
                  {featuredPost.mainImage && (
                    <div className="h-96 relative">
                      <Image
                        src={getImageUrl(featuredPost.mainImage)!}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <div className="flex gap-2 mb-2">
                            {featuredPost.categories?.map(
                              (category: string) => (
                                <button
                                  key={category}
                                  onClick={() => setSelectedCategory(category)}
                                  className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition"
                                >
                                  {category}
                                </button>
                              )
                            )}
                          </div>
                          <h3 className="text-2xl font-bold mb-2">
                            <Link
                              href={`/blog/${getSlugString(featuredPost.slug)}`}
                              className="hover:text-orange transition-colors"
                            >
                              {featuredPost.title}
                            </Link>
                          </h3>
                          <p className="text-white/80 text-sm mb-1">
                            {new Date(
                              featuredPost.publishedAt
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="p-6">
                    <p className="mb-4 text-gray-700">{featuredPost.excerpt}</p>
                    <Link
                      href={`/blog/${getSlugString(featuredPost.slug)}`}
                      className="inline-block px-5 py-2 bg-orange text-white rounded-lg hover:bg-orange/90 transition shadow-sm hover:shadow"
                    >
                      Read Full Post →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Category title with filter indicator */}
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold border-b-2 border-orange pb-2">
                {selectedCategory ? (
                  <div className="flex items-center">
                    <CategoryIcon category={selectedCategory} />
                    <span className="ml-2">{selectedCategory} Posts</span>
                  </div>
                ) : (
                  "Latest Posts"
                )}
              </h2>

              {selectedCategory && (
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-navy hover:text-orange transition-colors text-sm flex items-center"
                >
                  Clear Filter <span className="ml-1">×</span>
                </button>
              )}
            </div>

            {/* Posts Grid - Redesigned */}
            {regularPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularPosts.map((post) => (
                  <PostCard
                    key={post._id}
                    title={post.title}
                    excerpt={post.excerpt || ""}
                    slug={getSlugString(post.slug)}
                    mainImage={post.mainImage}
                    publishedAt={post.publishedAt}
                    categories={post.categories}
                    onCategoryClick={setSelectedCategory}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">🔍</div>
                <p className="text-lg text-navy/80">
                  {selectedCategory
                    ? `No posts found in the ${selectedCategory} category.`
                    : "No posts to display."}
                </p>
              </div>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="md:w-4/12 mt-10 md:mt-0">
            {/* About the Blog */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold mr-3">
                  DJ
                </div>
                <div>
                  <h3 className="font-semibold">Dylan J. Dombrowski</h3>
                  <p className="text-sm text-gray-600">
                    IT Professional & Developer
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Sharing insights from my journey in technology, business
                strategies, and personal experiences.
              </p>
              <Link
                href="/about"
                className="text-orange hover:underline text-sm"
              >
                More about me →
              </Link>
            </div>

            {/* Categories List */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 mb-6">
              <h3 className="text-lg font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition
                    ${
                      !selectedCategory
                        ? "bg-navy text-white"
                        : "hover:bg-gray-100 text-navy"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🔍</span>
                      <span>All Posts</span>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy">
                      {posts.length}
                    </span>
                  </div>
                </button>
                {categoryPostCounts.map((category) => (
                  <button
                    key={category._id}
                    onClick={() => setSelectedCategory(category.title)}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition
                      ${
                        selectedCategory === category.title
                          ? "bg-navy text-white"
                          : "hover:bg-gray-100 text-navy"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <CategoryIcon category={category.title} size="sm" />
                        <span className="ml-2">{category.title}</span>
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy">
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter Signup - Compact Version */}
            <div className="bg-gradient-to-br from-navy/10 to-orange/10 p-6 rounded-xl shadow-inner mb-6">
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-sm text-navy/80 mb-4">
                Get notified when I publish new articles.
              </p>
              <NewsletterForm />
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
              <div className="space-y-4">
                {posts.slice(0, 4).map((post) => (
                  <div key={post._id} className="flex items-center">
                    {post.mainImage && (
                      <div className="w-12 h-12 rounded overflow-hidden mr-3 flex-shrink-0">
                        <div className="relative w-full h-full">
                          <Image
                            src={getImageUrl(post.mainImage)!}
                            alt={post.title}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                      </div>
                    )}
                    <div>
                      <Link
                        href={`/blog/${getSlugString(post.slug)}`}
                        className="font-medium hover:text-orange transition-colors text-sm line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
