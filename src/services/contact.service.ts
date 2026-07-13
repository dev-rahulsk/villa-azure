import { apiClient } from "@/services/api-client";
import type { ContactFormValues } from "@/features/contact/schema";

export async function submitContactForm(values: ContactFormValues) {
  const { data } = await apiClient.post("/contact", values);
  return data;
}
