import { sanityFetch } from "@/lib/sanity";
import { seriesQuery } from "@/lib/queries";
import SeriesCard from "@/components/blog/series-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Series | Dylan J. Dombrowski",
  description:
    "Collections of related articles and tutorials organized by topic.",
};

interface Series {
  _id: string;
  title: string;
  slug: string;
  description: string;
  mainImage?: string;
  status: "inProgress" | "completed" | "planned";
  postCount: number;
}

async function getAllSeries() {
  return sanityFetch<Series[]>({ query: seriesQuery });
}

export default async function SeriesPage() {
  const allSeries = await getAllSeries();

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Series</h1>
            <p className="text-lg text-navy/80">
              Collections of related articles and tutorials organized by topic.
            </p>
          </div>

          {allSeries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allSeries.map((series) => (
                <SeriesCard
                  key={series._id}
                  title={series.title}
                  description={series.description}
                  slug={series.slug}
                  mainImage={series.mainImage}
                  postCount={series.postCount}
                  status={series.status}
                />
              ))}
            </div>
          ) : (
            <p className="text-center">No series available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
