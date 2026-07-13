import { z } from "zod";

export const CONTACT_SUBJECTS = [
  { value: "general", label: "General Inquiry" },
  { value: "booking", label: "Booking Question" },
  { value: "amenities", label: "Amenities & Services" },
  { value: "other", label: "Something Else" },
] as const;

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
  phone: z.string().optional(),
  subject: z.enum(CONTACT_SUBJECTS.map((s) => s.value) as [string, ...string[]], {
    message: "Please select a topic.",
  }),
  message: z.string().min(10, "Message must be at least 10 characters."),
  agreeToPrivacy: z
    .boolean()
    .refine((value) => value === true, "You must agree to the privacy policy."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
