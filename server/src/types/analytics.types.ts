export interface AnalyticsSummary {
  totalViews: number;
  uniqueVisitors: number;
  topPages: Array<{ path: string; count: number }>;
  period: string;
}

export interface TrackPageViewInput {
  path: string;
  visitorId?: string;
}
