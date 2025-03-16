// src/lib/image.ts
import createImageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const imageBuilder = createImageUrlBuilder(client);

export const urlForImage = (source: SanityImageSource) => {
  // This is safe because the imageBuilder will handle the different types of SanityImageSource
  return imageBuilder.image(source);
};
