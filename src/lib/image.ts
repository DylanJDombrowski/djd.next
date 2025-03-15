// src/lib/image.ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

// Define a more specific type for Sanity images
interface SanityImageSource {
  asset?: {
    _ref?: string;
  };
  [key: string]: any; // Allow other properties but specify the required ones
}

export function urlForImage(source: SanityImageSource) {
  if (!source?.asset?._ref) {
    return {
      url: () => null,
      width: () => 0,
      height: () => 0,
      format: () => "",
    };
  }

  return builder.image(source);
}
