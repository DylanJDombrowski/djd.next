// src/app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import SubstackPosts from "@/components/substack/substack-posts";
import FeaturedProjects from "@/components/projects/featured-projects";
import SidelineSpotlight from "@/components/projects/sideline-spotlight";

export const metadata: Metadata = {
  title: "Dylan J. Dombrowski - Full-Stack Developer",
  description:
    "Full-stack developer building web applications for businesses and startups. View my portfolio and get in touch for your next project.",
};

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - Simplified, Project-Focused */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Available for projects
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m Dylan.{" "}
              <span className="text-orange">I build things.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Full-stack developer crafting web applications for businesses and startups.
              From SaaS platforms to client websites, I turn ideas into polished products.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
                <Link href="#projects">
                  View my work <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Featured Projects */}
      <div id="projects">
        <FeaturedProjects />
      </div>

      {/* Sideline Spotlight - Special SaaS Section */}
      <SidelineSpotlight />

      <Separator className="max-w-5xl mx-auto" />

      {/* Latest Writing - Demoted */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-3">Latest Writing</h2>
              <p className="text-muted-foreground">
                Thoughts on software, business, and life
              </p>
            </div>

            <SubstackPosts limit={2} showViewAll={true} />
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
