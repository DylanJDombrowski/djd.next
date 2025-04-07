// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block mb-8">
          <div className="text-[120px] md:text-[180px] font-bold text-navy opacity-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            404
          </div>
          <div className="relative z-10">
            <div className="w-40 h-40 mx-auto relative">
              {/* Creative 404 illustration */}
              <svg
                className="w-full h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Computer screen */}
                <rect
                  x="40"
                  y="40"
                  width="120"
                  height="90"
                  rx="5"
                  fill="#33496a"
                />
                <rect
                  x="45"
                  y="45"
                  width="110"
                  height="80"
                  rx="3"
                  fill="#f2f2f2"
                />

                {/* Error message on screen */}
                <text
                  x="100"
                  y="75"
                  fontSize="16"
                  fontWeight="bold"
                  textAnchor="middle"
                  fill="#33496a"
                >
                  404
                </text>
                <text
                  x="100"
                  y="95"
                  fontSize="8"
                  textAnchor="middle"
                  fill="#666"
                >
                  Page Not Found
                </text>

                {/* Computer stand */}
                <path d="M85 130 L115 130 L110 150 L90 150 Z" fill="#33496a" />
                <rect
                  x="80"
                  y="150"
                  width="40"
                  height="5"
                  rx="2"
                  fill="#33496a"
                />

                {/* Question marks floating around */}
                <text
                  x="50"
                  y="40"
                  fontSize="20"
                  fill="#ffa500"
                  fontWeight="bold"
                >
                  ?
                </text>
                <text
                  x="150"
                  y="30"
                  fontSize="24"
                  fill="#ffa500"
                  fontWeight="bold"
                >
                  ?
                </text>
                <text
                  x="30"
                  y="100"
                  fontSize="22"
                  fill="#ffa500"
                  fontWeight="bold"
                >
                  ?
                </text>
                <text
                  x="160"
                  y="110"
                  fontSize="18"
                  fill="#ffa500"
                  fontWeight="bold"
                >
                  ?
                </text>
              </svg>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-navy">
          Page Not Found
        </h1>
        <p className="text-xl text-navy/70 mb-8 max-w-lg mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-navy hover:bg-navy/90 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange/90 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Services</h3>
            <p className="text-navy/70 mb-3">
              Explore the professional services I offer to help solve your
              technical challenges.
            </p>
            <Link href="/services" className="text-orange hover:underline">
              View Services →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Projects</h3>
            <p className="text-navy/70 mb-3">
              See examples of my previous work and case studies across various
              industries.
            </p>
            <Link href="/projects" className="text-orange hover:underline">
              View Projects →
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-2">Blog</h3>
            <p className="text-navy/70 mb-3">
              Read my latest insights on web development, technology, and
              business growth.
            </p>
            <Link href="/blog" className="text-orange hover:underline">
              Read Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
