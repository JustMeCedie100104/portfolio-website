import { analyticsService } from "../services/analytics.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { analyticsTrackSchema } from "../validators/project.validator.js";

export const analyticsController = {
  // Public — fire-and-forget tracking
  track: asyncHandler(async (req, res) => {
    const { path, visitorId } = analyticsTrackSchema.parse(req.body);
    await analyticsService.trackPageView(path, visitorId);
    res.status(204).send();
  }),

  // Admin — summary dashboard data
  getSummary: asyncHandler(async (_req, res) => {
    const summary = await analyticsService.getSummary();
    res.json(summary);
  }),
};
