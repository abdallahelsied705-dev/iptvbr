import type { SEOOpportunity } from "@/lib/seo-ops/types";

/**
 * Empty by design: production opportunities are expected to come from Search Console
 * or another verified data source after launch. No fabricated query data is stored.
 */
export const seoOpportunityQueue: SEOOpportunity[] = [];
