// src/app/(site)/services/page.tsx
import { sanityFetch } from "@/lib/sanity";
import { servicesQuery } from "@/lib/queries";
import ServiceCard from "@/components/services/service-card";
import { Metadata } from "next";
import { Service, getSlugString } from "@/types";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Dylan J. Dombrowski",
  description:
    "Professional web development and IT consulting services offered by Dylan J. Dombrowski.",
};

async function getServices() {
  return sanityFetch<Service[]>({ query: servicesQuery });
}

export default async function ServicesPage() {
  const services = await getServices();
  const featuredServices = services.filter((service) => service.featured);

  return (
    <div>
      {/* Hero Section with enhanced visual appeal */}
      <div className="bg-gradient-to-br from-navy/90 to-navy text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
          <div className="absolute -left-10 -bottom-10 w-64 h-64 bg-orange rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Expert Solutions for Complex Problems
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8">
              Providing professional web development and IT consulting services
              tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-lg font-medium transition"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-lg font-medium transition"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="py-16 md:py-24 bg-beige/30">
        <div className="container mx-auto px-4">
          <div className="md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-navy/10 rounded-lg"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/services-approach.jpg"
                    alt="My approach to services"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My Approach
              </h2>
              <p className="text-lg mb-4">
                I believe that successful projects start with a deep
                understanding of your business goals and challenges. By
                combining technical expertise with strategic thinking, I deliver
                solutions that drive real results.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Detailed Discovery
                  </h3>
                  <p>
                    Understanding your unique requirements before proposing
                    solutions
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Strategic Planning
                  </h3>
                  <p>Creating a clear roadmap with measurable milestones</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Expert Execution
                  </h3>
                  <p>
                    Implementing solutions with attention to detail and best
                    practices
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-orange/10 rounded-full flex items-center justify-center text-orange mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    Ongoing Support
                  </h3>
                  <p>Providing continued assistance and optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Services Section */}
      <div id="services" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">My Services</h2>
            <p className="text-lg text-navy/80 max-w-3xl mx-auto">
              I provide a range of professional web development and IT
              consulting services to help businesses solve complex technical
              challenges and achieve their goals.
            </p>
          </div>

          {/* Featured Services */}
          {featuredServices.length > 0 && (
            <div className="mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredServices.map((service) => (
                  <ServiceCard
                    key={service._id}
                    title={service.title}
                    description={service.shortDescription}
                    slug={getSlugString(service.slug)}
                    icon={service.icon}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Testimonial Section - Spotlight Design */}
      <div className="py-16 md:py-24 bg-navy text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client Success Story
            </h2>
            <div className="h-1 w-20 bg-orange mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 text-6xl text-orange opacity-20">
              &quot;
            </div>
            <div className="absolute -bottom-10 -right-10 text-6xl text-orange opacity-20">
              &quot;
            </div>

            {/* Main testimonial card */}
            <div className="bg-white/10 p-8 md:p-12 rounded-xl backdrop-blur-sm border border-white/10 shadow-xl relative z-10">
              <div className="md:flex items-start gap-8">
                {/* Profile section */}
                <div className="md:w-1/4 mb-6 md:mb-0 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-orange/20 flex items-center justify-center mb-4">
                    <span className="font-bold text-2xl">RC</span>
                  </div>
                  <div>
                    <p className="font-bold text-xl">Rodney Coffey</p>
                    <p className="text-white/70">
                      Business Development Director
                    </p>
                  </div>
                </div>

                {/* Testimonial content */}
                <div className="md:w-3/4">
                  <div className="text-orange text-5xl font-serif mb-6">
                    &quot;
                  </div>
                  <p className="text-xl italic leading-relaxed mb-6">
                    Dylan delivered our website with exceptional skill and
                    insight. He attentively listened to our needs, provided
                    prompt solutions with creative additions, and helped us
                    structure our data effectively. His work has helped us build
                    a robust following and share information efficiently.
                    He&apos;s always diligent with responses and a pleasure to
                    work with.
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-orange"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional visual elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange/30 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Process</h2>
            <p className="text-lg text-navy/80 max-w-3xl mx-auto">
              A transparent, collaborative approach designed to deliver
              exceptional results.
            </p>
          </div>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange/20 -translate-x-1/2 hidden md:block"></div>

            <div className="space-y-12 md:space-y-24 relative">
              {/* Step 1 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-16 text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">1. Discovery</h3>
                  <p className="text-navy/80">
                    I take the time to thoroughly understand your business
                    goals, challenges, and requirements before proposing any
                    solutions.
                  </p>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange rounded-full z-10 hidden md:flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 md:ml-6">
                    <div className="text-orange mb-2 md:hidden font-bold">
                      Step 1
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Initial consultation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Needs assessment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Research and analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">2. Strategy</h3>
                  <p className="text-navy/80">
                    Based on the discovery findings, I develop a comprehensive
                    strategy and project plan tailored to your specific needs.
                  </p>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange rounded-full z-10 hidden md:flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 md:mr-6">
                    <div className="text-orange mb-2 md:hidden font-bold">
                      Step 2
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Solution architecture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Technology selection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Detailed project planning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="md:flex items-center">
                <div className="md:w-1/2 md:pr-16 text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">3. Execution</h3>
                  <p className="text-navy/80">
                    With a solid plan in place, I implement the solution with
                    attention to detail, quality, and best practices.
                  </p>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange rounded-full z-10 hidden md:flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 md:ml-6">
                    <div className="text-orange mb-2 md:hidden font-bold">
                      Step 3
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Development and implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Regular progress updates</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Quality assurance testing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="md:flex items-center flex-row-reverse">
                <div className="md:w-1/2 md:pl-16 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-3">
                    4. Support & Optimization
                  </h3>
                  <p className="text-navy/80">
                    My commitment doesn&apos;t end at delivery. I provide
                    ongoing support and continuous improvement to ensure
                    long-term success.
                  </p>
                </div>
                <div className="md:w-1/2 relative">
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-orange rounded-full z-10 hidden md:flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 md:mr-6">
                    <div className="text-orange mb-2 md:hidden font-bold">
                      Step 4
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Training and documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Performance monitoring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-orange mr-2">•</span>
                        <span>Ongoing optimization</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-beige py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8">
              Let&apos;s discuss how I can help you achieve your business goals
              with tailored solutions that deliver real results.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange hover:bg-orange/90 text-white px-8 py-4 rounded-lg font-medium text-lg transition"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
