// src/components/projects/sideline-spotlight.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function SidelineSpotlight() {
  // Get Sideline project data
  const sideline = projects.find((p) => p._id === "sideline-app");

  if (!sideline) return null;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange/5 via-background to-orange/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image/Screenshot */}
            <div className="flex-1 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-orange/20">
                {sideline.mainImage ? (
                  <div className="relative aspect-video">
                    <Image
                      src={sideline.mainImage}
                      alt={sideline.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-orange mb-2">
                        Sideline
                      </div>
                      <span className="text-muted-foreground text-sm">
                        Screenshot Coming Soon
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <Badge className="bg-orange/10 text-orange border-orange/20">
                Currently Building
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold">{sideline.title}</h2>

              {sideline.tagline && (
                <p className="text-xl text-muted-foreground">
                  {sideline.tagline}
                </p>
              )}

              <p className="text-lg text-muted-foreground">
                {sideline.description}
              </p>

              {sideline.features && sideline.features.length > 0 && (
                <ul className="space-y-3">
                  {sideline.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-orange mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-orange hover:bg-orange/90"
                >
                  <Link href="/projects/sideline-app">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                {sideline.projectUrl && (
                  <Button asChild variant="outline" size="lg">
                    <Link
                      href={sideline.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Site
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
