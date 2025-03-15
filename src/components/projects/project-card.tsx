import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/image";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
  imageUrl?: any;
  client?: string;
  date?: string;
  technologies?: string[];
  isDark?: boolean;
}

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
  // Create a proper image URL from Sanity image reference
  const imageUrlString = imageUrl ? urlForImage(imageUrl).url() : null;

  return (
    <div
      className={`rounded-lg overflow-hidden border ${
        isDark
          ? "bg-navy/30 border-white/10 text-white"
          : "bg-white border-gray/10 text-navy"
      }`}
    >
      {imageUrlString ? (
        <div className="relative h-48 md:h-64">
          <Image
            src={imageUrlString}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
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
            {date}
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
