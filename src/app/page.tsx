// src/app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import SubstackPosts from "@/components/substack/substack-posts";
import SubscribeWidget from "@/components/substack/subscribe-widget";

export const metadata: Metadata = {
  title: "Dylan J. Dombrowski - Developer & Writer",
  description:
    "Full-stack developer and writer sharing ideas about software, business, and life. Available for web development projects.",
};

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Open to side projects
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m Dylan.{" "}
              <span className="text-orange">Developer & Writer</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              I build software and share ideas about technology, business, and life.
              From pizza kitchens to full-stack development, I&apos;ve learned that great things
              come from curiosity, discipline, and shipping consistently.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
                <Link href="https://dylandombro.substack.com/?r=sisxq&utm_campaign=pub-share-checklist&utm_source=dylanjdombrowski&utm_medium=website" target="_blank" rel="noopener noreferrer">
                  Read my writing <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  Work with me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Latest Writing from Substack */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-3">Latest Writing</h2>
              <p className="text-muted-foreground">
                Thoughts on software, business, and life from my Substack
              </p>
            </div>

            <SubstackPosts limit={3} showViewAll={false} />

            <div className="mt-12">
              <SubscribeWidget />
            </div>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Quick About */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">A bit about me</h2>
            <p className="text-lg text-muted-foreground">
              I went from slinging pizzas in a family kitchen to building web applications.
              That journey taught me that whether you&apos;re crafting the perfect pie or shipping
              software, it&apos;s all about attention to detail and making something people actually want.
            </p>
            <p className="text-lg text-muted-foreground">
              These days, I&apos;m working in corporate tech while writing and building on the side.
              I love creating things that help people work better and live fuller lives.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">
                More about me
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Card className="border-2 border-orange/20">
              <CardContent className="pt-10 pb-10 space-y-6">
                <h2 className="text-3xl font-bold">Let&apos;s build something together</h2>
                <p className="text-lg text-muted-foreground">
                  Need help with a web project? Want to chat about an idea? I&apos;m available for
                  freelance work and always happy to connect.
                </p>
                <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
                  <Link href="/contact">
                    Get in touch
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
