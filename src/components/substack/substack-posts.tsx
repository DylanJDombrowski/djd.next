// src/components/substack/substack-posts.tsx
import Link from "next/link";
import { getSubstackPosts } from "@/lib/substack";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SubstackPostsProps {
  limit?: number;
  showViewAll?: boolean;
}

export default async function SubstackPosts({ limit = 3, showViewAll = true }: SubstackPostsProps) {
  const posts = await getSubstackPosts(limit);

  if (posts.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No posts available at the moment.</p>
        <Button asChild className="mt-4 bg-orange hover:bg-orange/90">
          <Link
            href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Substack <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card key={post.guid} className="hover:border-orange/50 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange transition-colors"
                >
                  {post.title}
                </Link>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {new Date(post.pubDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.contentSnippet}
              </p>
              <Link
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-medium hover:underline inline-flex items-center gap-1"
              >
                Read on Substack <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-8 text-center">
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website"
              target="_blank"
              rel="noopener noreferrer"
            >
              View all posts on Substack <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
