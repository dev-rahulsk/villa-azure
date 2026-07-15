import type { ContactFormValues } from "@/features/contact/schema";

export async function submitContactForm(values: ContactFormValues) {
  // Plain fetch with a string body (no explicit Content-Type) so the browser
  // sends this as a CORS "simple request" and skips the OPTIONS preflight —
  // the Apps Script Web App below doesn't handle preflight requests.
  const response = await fetch("https://script.google.com/macros/s/AKfycbytAgL0x9snX669wN_wIHg3eMI_UjOGQv-kTYVb2KgxGVtbKAWelXUfCbNhXjo0siUt/exec", {
    method: "POST",
    body: JSON.stringify(values),
  });

  const data = await response.json();

  if (!response.ok || data.status !== "success") {
    throw new Error(data.message ?? "Failed to submit contact form");
  }

  return data;
}
