import type { SEOAction, SEOOpportunity, SearchPerformanceSnapshot } from "./types";

export function classifySearchOpportunity(row: SearchPerformanceSnapshot): SEOAction {
  if (!row.page) return "monitor";

  if (row.position <= 20 && row.impressions >= 100 && row.ctr < 0.02) {
    return "investigate";
  }

  if (row.position <= 10 && row.impressions >= 250) {
    return "monitor";
  }

  return "monitor";
}

export function buildOpportunity(row: SearchPerformanceSnapshot): SEOOpportunity {
  const action = classifySearchOpportunity(row);

  return {
    id: `gsc-${row.date}-${row.page}-${row.query}`.replace(/[^a-z0-9-]+/gi, "-").slice(0, 180),
    action,
    status: "new",
    url: row.page,
    query: row.query,
    reason:
      action === "investigate"
        ? "Meaningful impressions with a comparatively low CTR; inspect intent, SERP context, title and snippet before editing."
        : "No immediate action triggered by the current rule set.",
    evidence: [
      `Impressions: ${row.impressions}`,
      `Clicks: ${row.clicks}`,
      `CTR: ${(row.ctr * 100).toFixed(2)}%`,
      `Average position: ${row.position.toFixed(1)}`,
    ],
    relatedRoutes: [row.page],
    createdAt: row.date,
  };
}
