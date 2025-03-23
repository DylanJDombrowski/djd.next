// components/blog/post-card.tsx
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import CategoryIcon from "@/components/blog/category-icon";
import { SanityImage } from "@/types";
import { getImageUrl } from "@/lib/image";

interface PostCardProps {
  title: string;
  excerpt: string;
  slug: string;
  mainImage: string | SanityImage | null | undefined;
  publishedAt: string;
  categories?: string[];
  onCategoryClick?: (category: string) => void;
}

export default function PostCard({
  title,
  excerpt,
  slug,
  mainImage,
  publishedAt,
  categories,
  onCategoryClick,
}: PostCardProps) {
  // Helper function to get image URL regardless of type
  const getImageSrc = (
    image: string | SanityImage | null | undefined
  ): string | null => {
    if (!image) return null;
    if (typeof image === "string") return image;
    return getImageUrl(image);
  };

  const imageSrc = getImageSrc(mainImage);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 transition-all hover:shadow-lg h-full flex flex-col">
      {imageSrc && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryClick && onCategoryClick(category)}
                className="text-xs px-2 py-1 rounded-full bg-navy/10 text-navy hover:bg-navy/20 transition flex items-center"
              >
                <CategoryIcon category={category} size="sm" />
                <span className="ml-1">{category}</span>
              </button>
            ))}
          </div>
        )}

        <h3 className="text-xl font-semibold mb-2 hover:text-orange transition-colors">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>

        <p className="text-navy/60 text-sm mb-2">{formatDate(publishedAt)}</p>

        <p className="text-gray-700 mb-4 flex-grow">{excerpt}</p>

        <Link
          href={`/blog/${slug}`}
          className="text-orange hover:text-orange/80 font-medium inline-flex items-center transition-colors mt-auto"
        >
          Read Post <span className="ml-1">→</span>
        </Link>
      </div>
    </div>
  );
}
