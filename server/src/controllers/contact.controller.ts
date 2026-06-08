import { contactService } from "../services/contact.service.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { contactSchema } from "../validators/contact.validator.js";
import { getParam } from "../utils/params.js";

export const contactController = {
  // Public
  submit: asyncHandler(async (req, res) => {
    const input = contactSchema.parse(req.body);
    const message = await contactService.submit(input);
    res.status(201).json({ id: message.id });
  }),

  // Admin
  getAll: asyncHandler(async (_req, res) => {
    const messages = await contactService.getAll();
    res.json(messages);
  }),

  getById: asyncHandler(async (req, res) => {
    const message = await contactService.getById(getParam(req, "id"));
    if (!message) {
      res.status(404).json({ error: "Message not found" });
      return;
    }
    res.json(message);
  }),

  markRead: asyncHandler(async (req, res) => {
    const message = await contactService.markRead(getParam(req, "id"));
    res.json(message);
  }),

  remove: asyncHandler(async (req, res) => {
    await contactService.remove(getParam(req, "id"));
    res.status(204).send();
  }),
};
