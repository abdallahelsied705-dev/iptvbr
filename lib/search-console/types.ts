export type SearchAnalyticsDimension =
  | "query"
  | "page"
  | "country"
  | "device"
  | "searchAppearance";

export type SearchAnalyticsRequest = {
  siteUrl: string;
  startDate: string;
  endDate: string;
  dimensions: SearchAnalyticsDimension[];
  rowLimit?: number;
};

export type SearchAnalyticsRow = {
  keys: string[];
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
};

export type SearchConsoleAdapter = {
  query(request: SearchAnalyticsRequest): Promise<SearchAnalyticsRow[]>;
};
