// src/app/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-2">
            <CardContent className="pt-12 pb-12 space-y-6">
              {/* 404 Number */}
              <div className="text-8xl md:text-9xl font-bold text-orange/20">
                404
              </div>

              {/* Message */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">
                  Page Not Found
                </h1>
                <p className="text-lg text-muted-foreground max-w-md mx-auto">
                  Looks like you&apos;ve wandered off the beaten path. The page you&apos;re looking for doesn&apos;t exist.
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild className="bg-orange hover:bg-orange/90">
                  <Link href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://substack.com/@dylandombro?utm_campaign=profile&utm_medium=profile-page&utm_source=404" target="_blank" rel="noopener noreferrer">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read on Substack
                  </a>
                </Button>
              </div>

              {/* Helpful Links */}
              <div className="pt-8 border-t mt-8">
                <p className="text-sm text-muted-foreground mb-4">
                  Or try one of these pages:
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <Link href="/about" className="text-orange hover:underline">
                    About
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/projects" className="text-orange hover:underline">
                    Projects
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/uses" className="text-orange hover:underline">
                    Uses
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/now" className="text-orange hover:underline">
                    Now
                  </Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/contact" className="text-orange hover:underline">
                    Contact
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
