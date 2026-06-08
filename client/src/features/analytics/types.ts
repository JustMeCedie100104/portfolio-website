export interface PageView {
  path: string;
  count: number;
}

export interface AnalyticsSummary {
  totalViews: number;
  uniqueVisitors: number;
  topPages: PageView[];
  period: string;
}
