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
  isDark = false,
}: ProjectCardProps) {
  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        isDark
          ? "bg-navy/30 border-white/10 text-white"
          : "bg-white border-gray/10 text-navy"
      }`}
    >
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
        <div
          className={`h-48 md:h-64 ${isDark ? "bg-gray/20" : "bg-gray/10"}`}
        ></div>
      )}

      <div className="p-6">
        {client && (
          <div
            className={`text-sm mb-1 ${isDark ? "text-beige/70" : "text-navy/70"}`}
          >
            {client}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        <p className={`mb-4 ${isDark ? "text-beige/80" : "text-navy/80"}`}>
          {description}
        </p>

        {technologies && technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`text-xs px-2 py-1 rounded-full ${
                  isDark ? "bg-white/10 text-beige" : "bg-navy/10 text-navy"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {date && (
          <div
            className={`text-sm mb-4 ${isDark ? "text-beige/70" : "text-navy/70"}`}
          >
            {formatDate(date)}
          </div>
        )}

        <Link
          href={`/projects/${slug}`}
          className={`text-orange hover:underline inline-block ${isDark ? "text-orange" : ""}`}
        >
          View Case Study →
        </Link>
      </div>
    </div>
  );
}
