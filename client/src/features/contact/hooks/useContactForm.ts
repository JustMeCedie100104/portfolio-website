import { useMutation } from "@tanstack/react-query";
import { contactApi } from "../api/contactApi";
import type { ContactFormInput } from "../types";

export function useContactForm() {
  return useMutation({
    mutationFn: (input: ContactFormInput) => contactApi.submit(input),
  });
}
