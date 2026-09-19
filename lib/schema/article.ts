import type { RouteDefinition } from "@/config/routes";
import { siteConfig } from "@/config/site";

export function articleSchema(route: RouteDefinition) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: route.title,
    description: route.description,
    mainEntityOfPage: route.canonical,
    url: route.canonical,
    image: route.image ? `${siteConfig.url}${route.image}` : `${siteConfig.url}/images/hero/iptvbr-premium-living-room.webp`,
    datePublished: route.publishedAt ?? "2026-09-19",
    dateModified: route.publishedAt ?? "2026-09-19",
    inLanguage: siteConfig.language,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}
