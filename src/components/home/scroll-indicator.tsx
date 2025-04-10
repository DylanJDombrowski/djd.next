// components/home/scroll-indicator.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = [
      "hero",
      "services",
      "why-me",
      "blog",
      "testimonials",
      "contact",
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active section
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define sections
  const navigationSections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "why-me", label: "Why Me" },
    { id: "blog", label: "Blog" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="relative flex flex-col items-center">
        {/* Vertical line connecting the dots - make it clearly visible */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 z-0"></div>

        {/* Navigation dots */}
        <div className="flex flex-col items-center space-y-8 py-2 relative z-10">
          {navigationSections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="z-10 group relative flex items-center justify-center w-6 h-6"
              aria-label={`Navigate to ${section.label} section`}
            >
              {/* Larger hit area */}
              <div className="absolute inset-0 rounded-full hover:bg-gray-200/20"></div>

              {/* Visible dot with border */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                  activeSection === section.id
                    ? "bg-orange border-orange scale-110"
                    : "bg-white border-gray-400 hover:border-gray-600"
                }`}
              ></div>

              {/* Tooltip with section name */}
              <span className="absolute right-8 transform bg-navy text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {section.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
