export type SEOAction =
  | "monitor"
  | "investigate"
  | "update"
  | "create"
  | "consolidate"
  | "fix-technical";

export type SEOQueueStatus = "new" | "review" | "approved" | "rejected" | "executed";

export type SearchPerformanceSnapshot = {
  date: string;
  query: string;
  page: string;
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  country?: string;
  device?: string;
};

export type SEOOpportunity = {
  id: string;
  action: SEOAction;
  status: SEOQueueStatus;
  url?: string;
  query?: string;
  reason: string;
  evidence: string[];
  relatedRoutes: string[];
  createdAt: string;
};
