// src/app/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Code2, Zap, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Dylan J. Dombrowski - Builder, Developer, Human",
  description:
    "Building software that matters. Currently focused on Billable, a time-tracking SaaS for freelancers. Available for web development projects.",
};

const latestPosts = getSortedPostsData().slice(0, 2);

export default async function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section - You + Billable */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              Open to side projects
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m Dylan.{" "}
              <span className="text-orange">I build things</span> that solve real problems.
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Developer passionate about building, growing, and healing through technology.
              Currently shipping <span className="font-semibold text-foreground">Billable</span>,
              a time-tracking SaaS for freelancers who are tired of losing billable hours.
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="bg-orange hover:bg-orange/90">
                <Link href="https://trybillable.com" target="_blank" rel="noopener noreferrer">
                  Try Billable <ArrowRight className="ml-2 h-4 w-4" />
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

      {/* Billable Feature Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 hover:border-orange/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl mb-2">Billable</CardTitle>
                    <CardDescription className="text-lg">
                      Time tracking and invoicing, simplified
                    </CardDescription>
                  </div>
                  <Badge className="bg-orange hover:bg-orange/90">Current Focus</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-muted-foreground">
                  Built for freelancers and consultants who know the pain of tracking hours across
                  multiple projects. Billable helps you capture every billable minute and get paid faster.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange/10 p-2 rounded-lg">
                      <Zap className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Fast tracking</h3>
                      <p className="text-sm text-muted-foreground">Start and stop timers with one click</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange/10 p-2 rounded-lg">
                      <Code2 className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Clean invoices</h3>
                      <p className="text-sm text-muted-foreground">Professional invoices in seconds</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-orange/10 p-2 rounded-lg">
                      <Heart className="h-5 w-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Made with care</h3>
                      <p className="text-sm text-muted-foreground">Built by a freelancer, for freelancers</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button asChild className="bg-orange hover:bg-orange/90">
                    <Link href="https://trybillable.com" target="_blank" rel="noopener noreferrer">
                      Visit Billable
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/blog/why-i-built-billable">
                      Read the story
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Recent Writing */}
      {latestPosts.length > 0 && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-3">Recent Writing</h2>
                <p className="text-muted-foreground">
                  Thoughts on building software, freelancing, and shipping products
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {latestPosts.map(({ slug, title, summary }) => (
                  <Card key={slug} className="hover:border-orange/50 transition-colors">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        <Link href={`/blog/${slug}`} className="hover:text-orange transition-colors">
                          {title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{summary}</p>
                      <Link
                        href={`/blog/${slug}`}
                        className="text-orange font-medium hover:underline inline-flex items-center gap-1"
                      >
                        Read more <ArrowRight className="h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button asChild variant="outline">
                  <Link href="/blog">
                    View all posts
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

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
              These days, I&apos;m working in corporate tech while building Billable on the side.
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
      <section className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Let&apos;s build something together</h2>
            <p className="text-lg opacity-90">
              Need help with a web project? Want to chat about an idea? I&apos;m available for
              freelance work and always happy to connect.
            </p>
            <Button asChild size="lg" variant="secondary" className="bg-orange hover:bg-orange/90 text-white">
              <Link href="/contact">
                Get in touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
