// src/components/layout/navigation.tsx
"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={cn("text-navy/80 hover:text-orange transition-colors duration-300 font-medium", pathname === href && "text-orange")}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
