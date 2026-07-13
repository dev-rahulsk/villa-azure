import { villaImage } from "@/lib/constants/images";

export const HERO_IMAGE = villaImage("RDP08045.jpg");
export const GET_IN_TOUCH_IMAGE = villaImage("RDP08073.jpg");

export const CONTACT_DETAILS = [
  {
    icon: "Phone" as const,
    label: "Phone",
    value: "+1 (876) 123-4567",
    detail: "Available 8:00 AM – 8:00 PM EST",
  },
  {
    icon: "Mail" as const,
    label: "Email",
    value: "info@villaazure.com",
    detail: "We'll get back to you within 24 hours.",
  },
  {
    icon: "MapPin" as const,
    label: "Address",
    value: "Drax Hall, St. Ann, Jamaica",
    detail: "North Coast of Jamaica",
  },
  {
    icon: "Clock" as const,
    label: "Office Hours",
    value: "Monday – Sunday",
    detail: "8:00 AM – 8:00 PM EST",
  },
];

export const FAQS = [
  {
    question: "How do I book a stay at Villa Azure?",
    answer:
      "Reach out through this contact form, email, or phone, and our team will help you check availability and complete your booking.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Cancellation terms depend on how far in advance you cancel. Contact us directly and we'll walk you through the details for your dates.",
  },
  {
    question: "What time is check-in and check-out?",
    answer:
      "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available on request.",
  },
];
