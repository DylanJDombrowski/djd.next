// src/components/services/service-card.tsx
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/lib/image";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: string;
}

export default function ServiceCard({
  title,
  description,
  slug,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border border-gray/10 h-full flex flex-col">
      {icon && (
        <div className="w-12 h-12 bg-orange/10 rounded-full flex items-center justify-center mb-4">
          <img src={icon} alt={title} width={24} height={24} />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-navy/80 mb-4 flex-grow">{description}</p>
      <Link
        href={`/services/${slug}`} // Use slug directly
        className="text-orange hover:underline mt-auto inline-block"
      >
        Learn more →
      </Link>
    </div>
  );
}
