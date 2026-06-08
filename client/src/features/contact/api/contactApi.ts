import { apiFetch } from "@/lib/api";
import type { ContactFormInput } from "../types";

export const contactApi = {
  submit: (input: ContactFormInput) =>
    apiFetch<{ id: string }>("/contact", {
      method: "POST",
      body: JSON.stringify(input),
    }),
};
