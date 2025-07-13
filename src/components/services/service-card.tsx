import Link from "next/link";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: ReactNode;
}

const ServiceCard = ({ title, description, slug, icon }: ServiceCardProps) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
      {icon && <div className="text-orange text-4xl mb-4">{icon}</div>}
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-navy/80 mb-6 flex-grow">{description}</p>
      <Link href={`/services/${slug}`} className="text-orange font-semibold hover:underline">
        Learn more →
      </Link>
    </div>
  );
};

export default ServiceCard;
