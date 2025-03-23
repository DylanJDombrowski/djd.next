// components/blog/category-icon.tsx
import React from "react";

interface CategoryIconProps {
  category: string;
  size?: "sm" | "md" | "lg";
}

export default function CategoryIcon({
  category,
  size = "md",
}: CategoryIconProps) {
  // Map categories to icons
  const iconMap: Record<string, string> = {
    AllBusiness: "💼",
    "Life Journey": "🛤️",
    Philosophy: "🧠",
    Fitness: "💪",
    Technology: "💻",
    // Default for any new categories
    default: "📝",
  };

  // Size classes
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  // Get icon or use fallback
  const icon = iconMap[category] || iconMap.default;

  return (
    <span className={`${sizeClasses[size]}`} role="img" aria-label={category}>
      {icon}
    </span>
  );
}
