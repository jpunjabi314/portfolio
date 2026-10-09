import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/experience", "/projects"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}
