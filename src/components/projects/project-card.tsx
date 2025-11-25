// src/components/projects/project-card.tsx
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { ProjectCardProps } from "@/types";

export default function ProjectCard({
  title,
  description,
  slug,
  imageUrl,
  client,
  date,
  technologies,
}: ProjectCardProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card text-card-foreground hover:border-orange/50 transition-colors">
      {imageUrl ? (
        <div className="relative h-48 md:h-64">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority={false}
          />
        </div>
      ) : (
        <div className="h-48 md:h-64 bg-muted"></div>
      )}

      <div className="p-6">
        {client && (
          <div className="text-sm mb-1 text-muted-foreground">
            {client}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className="mb-4 text-muted-foreground">
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {date && (
          <div className="text-sm mb-4 text-muted-foreground">
            {formatDate(date)}
          </div>
        )}

        <Link
          href={`/projects/${slug}`}
          className="text-orange hover:underline inline-block font-medium"
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}
