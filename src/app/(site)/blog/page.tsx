import { sanityFetch } from "@/lib/sanity";
import { postsQuery, categoriesQuery } from "@/lib/queries";
import { Metadata } from "next";
import BlogPageClient from "@/components/blog/blog-client";
import { Category, Post } from "@/types";

export const metadata: Metadata = {
  title: "Blog | Dylan J. Dombrowski",
  description:
    "Web development insights, philosophy, personal growth, and more.",
};

// Function to fetch all posts and categories
async function getAllContent() {
  try {
    // Fetch posts and categories in parallel
    const [postsData, categoriesData] = await Promise.all([
      sanityFetch<Post[]>({ query: postsQuery }),
      sanityFetch<Category[]>({ query: categoriesQuery }),
    ]);

    return {
      posts: postsData
        ? postsData.map((post: Post) => ({
            ...post,
            mainImage: post.mainImage || null,
          }))
        : [],
      categories: categoriesData || [],
    };
  } catch (error) {
    console.error("Error fetching blog content:", error);
    return { posts: [], categories: [] };
  }
}

export default async function BlogPage() {
  const { posts, categories } = await getAllContent();

  // Pass data to the client component with empty arrays as fallbacks
  return <BlogPageClient posts={posts || []} categories={categories || []} />;
}
