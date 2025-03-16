// src/lib/image.ts
import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";
import { SanityImage } from "@/types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: SanityImageSource) => {
  if (!source) {
    return {
      url: () => null,
    };
  }

  return imageBuilder.image(source);
};

// Helper function to get image URL as string
export const getImageUrl = (
  image: SanityImage | string | null | undefined
): string | null => {
  if (!image) return null;
  if (typeof image === "string") return image;

  try {
    return urlForImage(image).url();
  } catch (error) {
    console.error("Error getting image URL:", error);
    return null;
  }
};
