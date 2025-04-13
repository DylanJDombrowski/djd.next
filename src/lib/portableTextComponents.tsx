// src/lib/portableTextComponents.tsx
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "./image";
import { PortableTextComponents } from "@portabletext/react";

interface PortableTextLinkValue {
  href: string;
  [key: string]: unknown;
}

interface PortableTextImageObject {
  asset: {
    _ref: string;
    [key: string]: unknown;
  };
  alt?: string;
  caption?: string;
  [key: string]: unknown;
}

interface PortableTextCodeBlock {
  language?: string;
  code: string;
  filename?: string;
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    // Headings with improved typography and spacing
    h1: ({ children }) => (
      <h1 className="text-3xl md:text-4xl font-bold mt-12 mb-6 text-gray-900 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-gray-900 border-b border-gray-200 pb-2">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-gray-900">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-bold mt-6 mb-3 text-gray-900">
        {children}
      </h4>
    ),
    // Normal paragraph with better line height and spacing
    normal: ({ children }) => (
      <p className="mb-6 text-gray-800 leading-relaxed text-lg">{children}</p>
    ),
    // Blockquote with distinctive styling
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-orange-500 pl-6 py-4 my-8 bg-orange-50 rounded-r-lg italic text-gray-700">
        {children}
      </blockquote>
    ),
  },

  // Lists with proper spacing and styling
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-8 mb-6 space-y-2 text-gray-800">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-8 mb-6 space-y-2 text-gray-800">
        {children}
      </ol>
    ),
  },

  // List items with proper spacing
  listItem: {
    bullet: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="pl-2 leading-relaxed">{children}</li>
    ),
  },

  // Enhanced image display with figure/figcaption
  types: {
    image: ({ value }: { value: PortableTextImageObject }) => {
      if (!value?.asset?._ref) {
        return null;
      }

      const imageUrl = urlForImage(value).url();
      if (!imageUrl) {
        return null;
      }

      return (
        <figure className="my-12 relative">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={imageUrl}
              alt={value.alt || ""}
              width={800}
              height={450}
              className="w-full h-auto"
            />
          </div>
          {value.caption && (
            <figcaption className="text-sm text-gray-600 mt-3 text-center italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },

    // Code block styling with syntax highlighting background
    code: ({ value }: { value: PortableTextCodeBlock }) => {
      return (
        <div className="my-8 rounded-lg overflow-hidden bg-gray-900 text-gray-100">
          {value.filename && (
            <div className="px-4 py-2 bg-gray-800 border-b border-gray-700 text-sm font-mono">
              {value.filename}
            </div>
          )}
          <pre className="p-4 overflow-x-auto">
            <code className="text-sm font-mono">{value.code}</code>
          </pre>
        </div>
      );
    },
  },

  // Text formatting and links
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
          className="text-orange-600 hover:text-orange-800 underline decoration-orange-300 decoration-2 underline-offset-2 transition-colors duration-200"
        >
          {children}
        </Link>
      );
    },

    // Better styling for strong text
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),

    // Better styling for emphasized text
    em: ({ children }) => <em className="italic text-gray-800">{children}</em>,

    // Code styling for inline code
    code: ({ children }) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded font-mono text-sm">
        {children}
      </code>
    ),
  },
};
