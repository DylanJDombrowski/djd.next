// src/components/blog/post-card.tsx
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { PostCardProps, SanityImage } from "@/types";
import { getImageUrl } from "@/lib/image";

export default function PostCard({
  title,
  excerpt,
  slug,
  mainImage,
  publishedAt,
  categories,
}: PostCardProps) {
  // Get the image URL from any image source
  const imageUrl = getImageUrl(mainImage);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray/10 h-full flex flex-col">
      {imageUrl ? (
        <div className="h-48 relative">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="h-48 bg-gray/10"></div>
      )}

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
