import { getSortedPostsData } from "@/lib/blog";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Dylan J. Dombrowski",
  description:
    "Thoughts on web development, freelancing, and building software.",
};

export default function BlogPage() {
  const allPosts = getSortedPostsData();

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-navy">
            Blog
          </h1>
          <p className="text-lg text-navy/80">
            Writing about my journey in tech, freelancing, and building products
            like Billable.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {allPosts.map(({ slug, title, publishedAt, summary }) => (
            <Link key={slug} href={`/blog/${slug}`} className="block group">
              <article className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h2 className="text-2xl font-bold text-navy group-hover:text-orange transition-colors">
                  {title}
                </h2>
                <p className="text-navy/80 mt-2">{summary}</p>
                <span className="text-orange font-semibold mt-4 inline-block">
                  Read more →
                </span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
