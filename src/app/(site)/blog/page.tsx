// src/app/(site)/blog/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { postsQuery } from "@/lib/queries";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";
import NewsletterForm from "@/components/forms/newsletter-form";
import { urlForImage } from "@/lib/image";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Dylan J. Dombrowski",
  description:
    "Web development insights, technical tutorials, and thoughts on software development and IT consulting.",
};

interface Post {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage: any;
  publishedAt: string;
  categories: string[];
}

async function getAllPosts() {
  const posts = await sanityFetch<Post[]>({ query: postsQuery });
  console.log("Fetched posts:", posts); // Add this for debugging
  return posts;
}

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-navy/80">
              Thoughts, tutorials, and insights on web development, software
              engineering, and my journey in tech.
            </p>
          </div>

          {/* Featured post if available */}
          {posts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-semibold mb-6">Featured Post</h2>
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    {posts[0].mainImage && (
                      <div className="h-64 md:h-full relative">
                        <img
                          src={posts[0].mainImage}
                          alt={posts[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {posts[0].categories?.map((category) => (
                        <span
                          key={category}
                          className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      {posts[0].title}
                    </h3>
                    <p className="text-navy/70 mb-2">
                      {formatDate(posts[0].publishedAt)}
                    </p>
                    <p className="mb-4">{posts[0].excerpt}</p>
                    <a
                      href={`/blog/${posts[0].slug}`}
                      className="text-orange hover:underline font-medium"
                    >
                      Read Full Post →
                    </a>
                  </div>
                </div>
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
                Get notified about new posts, tutorials, and insights directly
                in your inbox.
              </p>
            </div>
            <NewsletterForm />
          </div>

          {/* All posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">All Posts</h2>

            {/* Category filter (simplified version) */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2">
                <button className="px-4 py-2 rounded-full bg-navy text-white">
                  All
                </button>
                <button className="px-4 py-2 rounded-full bg-white border border-navy/20 text-navy hover:bg-navy/10">
                  Tutorials
                </button>
                <button className="px-4 py-2 rounded-full bg-white border border-navy/20 text-navy hover:bg-navy/10">
                  Case Studies
                </button>
                <button className="px-4 py-2 rounded-full bg-white border border-navy/20 text-navy hover:bg-navy/10">
                  Insights
                </button>
                <button className="px-4 py-2 rounded-full bg-white border border-navy/20 text-navy hover:bg-navy/10">
                  Personal
                </button>
              </div>
            </div>

            {/* Posts grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.slice(1).map((post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt}
                  slug={post.slug}
                  mainImage={post.mainImage}
                  publishedAt={post.publishedAt}
                  categories={post.categories}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
