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
        {/* Vertical line connecting the dots */}
        <div className="absolute inset-0 w-0.5 bg-gray-300"></div>

        {/* Navigation dots */}
        <div className="flex flex-col items-center space-y-8 py-2">
          {navigationSections.map((section) => (
            <Link
              key={section.id}
              href={`#${section.id}`}
              className="z-10"
              aria-label={`Navigate to ${section.label} section`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-orange scale-110"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
              ></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
