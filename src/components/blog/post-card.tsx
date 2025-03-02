// src/components/blog/post-card.tsx
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  mainImage: string | null;
  publishedAt?: string;
  categories?: string[];
}

export default function PostCard({
  title,
  excerpt,
  slug,
  mainImage,
  publishedAt,
  categories,
}: PostCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200/10 h-full flex flex-col">
      <div className="relative h-48">
        {mainImage ? (
          <Image src={mainImage} alt={title} fill className="object-cover" />
        ) : (
          <div className="h-full w-full bg-gray-200/10"></div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-2">
            {categories.map((category) => (
              <span
                key={category}
                className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {publishedAt && (
          <div className="text-sm text-navy/70 mb-2">
            {formatDate(publishedAt)}
          </div>
        )}

        <p className="text-navy/80 mb-4 flex-grow">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="text-orange hover:underline mt-auto inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
