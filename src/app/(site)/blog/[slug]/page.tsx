import { getPostData, getSortedPostsData } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostData(params.slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.frontmatter.title} | Blog`,
    description: post.frontmatter.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-gray-50/50">
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <article className="max-w-3xl mx-auto">
            {/* Post Header */}
            <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
              <div className="mb-6">
                <Link
                  href="/blog"
                  className="text-orange hover:text-orange/80 transition-colors font-semibold"
                >
                  ← Back to Blog
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
                {post.frontmatter.title}
              </h1>
              <p className="text-gray-500">
                Published on{" "}
                {new Date(post.frontmatter.publishedAt).toLocaleDateString(
                  "en-US",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>

            {/* Post Content */}
            <div className="bg-white p-8 rounded-lg shadow-sm prose prose-lg max-w-none">
              <MDXRemote source={post.content} />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
