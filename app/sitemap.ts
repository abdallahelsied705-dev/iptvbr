import type { MetadataRoute } from "next";
import { routes } from "@/config/routes";
import { isPreview } from "@/lib/seo/environment";

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];

  return routes
    .filter((item) => item.indexable)
    .map((item) => ({
      url: item.canonical,
      lastModified: new Date("2026-09-19"),
      changeFrequency: item.slug === "/" ? "weekly" as const : item.type === "blog" ? "monthly" as const : "weekly" as const,
      priority: item.slug === "/" ? 1 : item.type === "money" ? 0.9 : item.type === "blog" ? 0.75 : 0.8,
    }));
}
