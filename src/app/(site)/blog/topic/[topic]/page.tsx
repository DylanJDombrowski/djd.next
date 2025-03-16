// src/app/(site)/blog/topic/[topic]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";
import { getSlugString } from "@/types";

interface PostData {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  mainImage?: string;
  publishedAt: string;
  categories?: string[];
}

interface Props {
  params: { topic: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Convert slug to readable format
  const topicName = params.topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${topicName} | Blog | Dylan J. Dombrowski`,
    description: `Articles and insights related to ${topicName.toLowerCase()}.`,
  };
}

export default async function TopicPage({ params }: Props) {
  // Convert slug to readable format
  const topicName = params.topic
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Query for posts with this category
  const query = `
    *[_type == "post" && $topic in categories[]->title] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      "mainImage": mainImage.asset->url,
      publishedAt,
      "categories": categories[]->title
    }
  `;

  const posts = await sanityFetch<PostData[]>({
    query,
    params: { topic: topicName },
  });

  if (!posts || posts.length === 0) {
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">{topicName}</h1>
          <p className="text-center py-8 bg-gray-50 rounded-lg">
            No posts available for this topic yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">{topicName}</h1>
            <p className="text-lg text-navy/80">
              Exploring insights and ideas related to {topicName.toLowerCase()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
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
        </div>
      </div>
    </div>
  );
}
