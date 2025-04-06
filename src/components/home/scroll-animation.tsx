// components/home/scroll-animation.tsx
"use client";

import { useEffect } from "react";

export default function ScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-fade").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".scroll-fade").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return null;
}
