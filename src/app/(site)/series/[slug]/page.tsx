// src/app/(site)/series/[slug]/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { singleSeriesQuery } from "@/lib/queries";
import PostCard from "@/components/blog/post-card";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getSlugString } from "@/types";

interface SeriesPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  mainImage?: string;
  publishedAt: string;
}

interface Series {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainImage?: string;
  status: "inProgress" | "completed" | "planned";
  posts: SeriesPost[];
}

// Generate static paths
export async function generateStaticParams() {
  const query = `*[_type == "series"] { "slug": slug.current }`;
  const series = await sanityFetch<Array<{ slug: string }>>({ query });

  return series.map((item) => ({
    slug: item.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const series = await getSeries(params.slug);

  if (!series) {
    return {
      title: "Series Not Found | Dylan J. Dombrowski",
    };
  }

  return {
    title: `${series.title} | Series | Dylan J. Dombrowski`,
    description: series.description,
  };
}

async function getSeries(slug: string): Promise<Series | null> {
  return sanityFetch<Series>({
    query: singleSeriesQuery,
    params: { slug },
  });
}

export default async function SeriesPage({
  params,
}: {
  params: { slug: string };
}) {
  const series = await getSeries(params.slug);

  if (!series) {
    notFound();
  }

  // Status label styling
  const statusStyles = {
    inProgress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    planned: "bg-orange-100 text-orange-800",
  };

  const statusLabel = {
    inProgress: "In Progress",
    completed: "Completed",
    planned: "Planned",
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            {series.mainImage && (
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-8">
                <Image
                  src={series.mainImage}
                  alt={series.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="mb-6">
              <span
                className={`inline-block text-sm px-3 py-1 rounded-full ${statusStyles[series.status]}`}
              >
                {statusLabel[series.status]}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {series.title}
            </h1>

            <p className="text-lg text-navy/80 mb-8">{series.description}</p>

            <div className="bg-beige p-6 rounded-lg mb-8">
              <h2 className="text-xl font-semibold mb-3">In This Series</h2>
              <p>
                {series.posts.length}{" "}
                {series.posts.length === 1 ? "post" : "posts"} in this
                collection
              </p>
            </div>
          </div>

          {series.posts.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {series.posts.map((post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  excerpt={post.excerpt || ""}
                  slug={post.slug}
                  mainImage={post.mainImage}
                  publishedAt={post.publishedAt}
                  categories={[]}
                />
              ))}
            </div>
          ) : (
            <p className="text-center">No posts in this series yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
