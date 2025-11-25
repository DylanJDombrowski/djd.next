// src/app/(site)/blog/page.tsx
import { Metadata } from "next";
import SubstackPosts from "@/components/substack/substack-posts";
import SubscribeWidget from "@/components/substack/subscribe-widget";

export const metadata: Metadata = {
  title: "Blog | Dylan J. Dombrowski",
  description:
    "Thoughts on software, business, and life. Read my latest posts on Substack.",
};

export default function BlogPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I write about software development, business, and life on Substack.
              Subscribe to get my latest posts delivered to your inbox.
            </p>
          </div>

          <div className="mb-12">
            <SubscribeWidget />
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Latest Posts</h2>
            <SubstackPosts limit={6} showViewAll={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
