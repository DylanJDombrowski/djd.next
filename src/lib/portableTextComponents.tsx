// src/lib/portableTextComponents.tsx - UPDATED
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "./image";
import { PortableTextComponents } from "@portabletext/react";

// Define more specific types for portableText
interface PortableTextImageValue {
  asset?: {
    _ref?: string;
  };
  alt?: string;
  caption?: string;
}

interface PortableTextLinkValue {
  href: string;
  [key: string]: unknown;
}

export const portableTextComponents: PortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlForImage(value).url();
      if (!imageUrl) {
        return null;
      }

      return (
        <div className="my-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={value.alt || ""}
            width={800}
            height={450}
            className="w-full h-auto"
          />
          {value.caption && (
            <div className="text-sm text-navy/70 mt-2">{value.caption}</div>
          )}
        </div>
      );
    },
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: PortableTextLinkValue;
    }) => {
      if (!value?.href) return <>{children}</>;
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="text-orange hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
};
