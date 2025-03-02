// src/app/(site)/services/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { servicesQuery } from "@/lib/queries";
import ServiceCard from "@/components/services/service-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Dylan J. Dombrowski",
  description:
    "Professional web development and IT consulting services offered by Dylan J. Dombrowski.",
};

async function getServices() {
  return sanityFetch<any[]>({ query: servicesQuery });
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
          <p className="text-lg text-navy/80">
            I provide a range of professional web development and IT consulting
            services to help businesses solve complex technical challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service: any) => (
            <ServiceCard
              key={service._id}
              title={service.title}
              description={service.shortDescription}
              slug={service.slug}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
