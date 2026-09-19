import type { SearchAnalyticsRequest, SearchAnalyticsRow, SearchConsoleAdapter } from "./types";

/**
 * Placeholder adapter. It intentionally does not make network requests.
 * A verified Search Console integration can implement this interface without
 * changing the SEO opportunity engine.
 */
export function createNoopSearchConsoleAdapter(): SearchConsoleAdapter {
  return {
    async query(_request: SearchAnalyticsRequest): Promise<SearchAnalyticsRow[]> {
      void _request;
      return [];
    },
  };
}
