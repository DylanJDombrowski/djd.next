// components/mobile/floating-cta.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    // First, check if localStorage is available (we're on the client side)
    if (typeof window !== "undefined") {
      try {
        // Check if the user has previously dismissed the CTA
        const dismissed = localStorage.getItem("ctaDismissed") === "true";
        setHasDismissed(dismissed);

        // If already dismissed, don't add scroll listener
        if (dismissed) return;

        const handleScroll = () => {
          // Show after scrolling 60% of the first viewport height
          const scrollThreshold = window.innerHeight * 0.6;

          if (window.scrollY > scrollThreshold) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };

        window.addEventListener("scroll", handleScroll);
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
      } catch (error) {
        // Handle any localStorage errors
        console.error("LocalStorage error:", error);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setHasDismissed(true);

    try {
      localStorage.setItem("ctaDismissed", "true");
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };

  // If the CTA has been dismissed or isn't yet visible, don't render anything
  if (hasDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-4 z-50 lg:hidden">
      <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 animate-fade-in">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-navy">
            Need a web development partner?
          </h3>
          <button
            onClick={handleDismiss}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="flex flex-col space-y-2">
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange/90 text-white font-bold py-2 px-4 rounded-md text-center"
          >
            Let&apos;s work together
          </Link>
          <button onClick={handleDismiss} className="text-navy/70 py-2">
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}
