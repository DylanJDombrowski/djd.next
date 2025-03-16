// src/components/services/service-card.tsx
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/image";
import { ServiceCardProps } from "@/types";

export default function ServiceCard({
  title,
  description,
  slug,
  icon,
}: ServiceCardProps) {
  // Get the icon URL from any image source
  const iconUrl = getImageUrl(icon);

  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray/10 h-full flex flex-col">
      {iconUrl && (
        <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4">
          <img src={iconUrl} alt={title} width={24} height={24} />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-navy/80 mb-4 flex-grow">{description}</p>
      <Link
        href={`/services/${typeof slug === "string" ? slug : slug.current}`}
        className="text-orange hover:underline mt-auto inline-block"
      >
        Learn more →
      </Link>
    </div>
  );
}
