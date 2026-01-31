// src/components/projects/featured-project-card.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types";

interface FeaturedProjectCardProps {
  project: Project;
  variant?: "hero" | "standard";
}

export default function FeaturedProjectCard({
  project,
  variant = "standard",
}: FeaturedProjectCardProps) {
  const isHero = variant === "hero";

  const statusBadge = project.status === "building" ? "Building" : "Live";
  const statusColor =
    project.status === "building"
      ? "bg-orange/10 text-orange border-orange/20"
      : "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-xl overflow-hidden border border-border bg-card text-card-foreground hover:border-orange/50 transition-all hover:shadow-lg"
    >
      {/* Image */}
      <div className={`relative ${isHero ? "h-64 md:h-80" : "h-48 md:h-64"}`}>
        {project.mainImage ? (
          <Image
            src={project.mainImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            priority={isHero}
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
            <span className="text-muted-foreground text-sm">
              Screenshot Coming Soon
            </span>
          </div>
        )}

        {/* Status Badge Overlay */}
        <div className="absolute top-4 left-4">
          <Badge className={statusColor}>{statusBadge}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className={`p-6 ${isHero ? "md:p-8" : ""}`}>
        {project.client && (
          <div className="text-sm mb-1 text-muted-foreground">
            {project.client}
          </div>
        )}

        <h3
          className={`font-semibold mb-2 group-hover:text-orange transition-colors ${
            isHero ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        {project.tagline && isHero && (
          <p className="text-lg text-orange mb-2">{project.tagline}</p>
        )}

        <p className="mb-4 text-muted-foreground line-clamp-2">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, isHero ? 6 : 4).map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
