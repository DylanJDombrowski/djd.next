// src/app/(site)/now/page.tsx
import { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Code, Lightbulb, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "Now",
  description:
    "What Dylan J. Dombrowski is currently working on, learning, and focusing on.",
};

export default function NowPage() {
  // Update this date when you update the page content
  const lastUpdated = "December 2024";

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What I&apos;m Doing Now
            </h1>
            <p className="text-lg text-muted-foreground">
              A snapshot of what I&apos;m currently focused on in my work and life.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Current Focus */}
          <div className="space-y-6 mb-12">
            <Card className="border-2 border-orange/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg mt-1">
                    <Target className="h-6 w-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Primary Focus</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Working full-time in corporate tech while building my personal brand and writing
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Growing my <Link href="https://dylandombro.substack.com" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Substack</Link> newsletter about software, business, and life
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Open to freelance web development projects (maintaining 1 long-term client)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Current Projects */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg mt-1">
                    <Code className="h-6 w-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Building</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          <strong className="text-foreground">Miami Valley Xpress:</strong> Roster management system for youth softball organization
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          <strong className="text-foreground">IronPillar:</strong> React Native fitness app with gamification
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          This personal website - constantly iterating and improving
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Learning */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg mt-1">
                    <BookOpen className="h-6 w-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Learning</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Deep-diving into <strong className="text-foreground">Next.js 15</strong> and the latest React Server Components patterns
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Exploring better writing habits and consistent publishing on Substack
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Reading about building in public and personal branding for developers
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Excited About */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange/10 p-3 rounded-lg mt-1">
                    <Lightbulb className="h-6 w-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">Excited About</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          The intersection of development and writing - sharing what I learn
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Finding ways to help other developers through writing and open source
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange mt-1">•</span>
                        <span>
                          Growing my network and connecting with other builders
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <Card className="bg-secondary/30 border-2">
            <CardContent className="pt-6 text-center space-y-4">
              <p className="text-muted-foreground">
                Inspired by <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="text-orange hover:underline">Derek Sivers&apos; /now page movement</a>. This page helps me stay focused and share my current priorities with you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild className="bg-orange hover:bg-orange/90">
                  <Link href="https://dylandombro.substack.com" target="_blank" rel="noopener noreferrer">
                    Follow my writing <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">
                    Get in touch
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Update Reminder */}
          <p className="text-center text-sm text-muted-foreground mt-8">
            💡 Remember to update this page monthly to keep it fresh!
          </p>
        </div>
      </div>
    </div>
  );
}
