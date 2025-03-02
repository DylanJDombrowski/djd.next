// src/lib/image.ts
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);

export function urlForImage(source: any) {
  if (!source?.asset?._ref) {
    return {
      url: () => "",
      width: () => 0,
      height: () => 0,
      format: () => "",
    };
  }

  return builder.image(source);
}
