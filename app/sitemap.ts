import type { MetadataRoute } from "next";
import { isRoutePublished, routes } from "@/config/routes";
import { isPreview } from "@/lib/seo/environment";

export const revalidate = 60;

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreview) return [];

  return routes
    .filter((item) => item.indexable && isRoutePublished(item))
    .map((item) => ({
      url: item.canonical,
      lastModified: item.publishedAt ? new Date(item.publishedAt) : new Date("2026-09-19"),
      changeFrequency: item.slug === "/" ? "weekly" as const : item.type === "blog" ? "monthly" as const : "weekly" as const,
      priority: item.slug === "/" ? 1 : item.type === "money" ? 0.9 : item.type === "blog" ? 0.75 : 0.8,
    }));
}
