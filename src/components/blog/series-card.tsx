// src/components/blog/series-card.tsx
import Link from "next/link";
import Image from "next/image";

interface SeriesCardProps {
  title: string;
  description: string;
  slug: string;
  mainImage?: string;
  postCount: number;
  status?: "inProgress" | "completed" | "planned";
}

export default function SeriesCard({
  title,
  description,
  slug,
  mainImage,
  postCount,
  status = "inProgress",
}: SeriesCardProps) {
  // Status label styling
  const statusStyles = {
    inProgress: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    planned: "bg-orange-100 text-orange-800",
  };

  const statusLabel = {
    inProgress: "In Progress",
    completed: "Completed",
    planned: "Planned",
  };

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {mainImage && (
        <div className="relative h-48">
          <Image src={mainImage} alt={title} fill className="object-cover" />
        </div>
      )}

      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span
            className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}
          >
            {statusLabel[status]}
          </span>
          <span className="text-sm text-gray-600">
            {postCount} {postCount === 1 ? "post" : "posts"}
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <Link
          href={`/series/${slug}`}
          className="text-orange hover:underline inline-block"
        >
          View Series →
        </Link>
      </div>
    </div>
  );
}
