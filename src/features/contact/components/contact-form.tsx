"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, Send, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactFormSchema, CONTACT_SUBJECTS, type ContactFormValues } from "@/features/contact/schema";
import { submitContactForm } from "@/services/contact.service";

function Field({
  icon: Icon,
  children,
}: {
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <div className="border-villa-primary/15 flex items-center gap-2.5 rounded-[2px] border px-3.5 py-1">
      <Icon className="size-4 shrink-0 text-[#9aa6b2]" strokeWidth={1.6} />
      {children}
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[11.5px] text-red-600">{message}</p>;
}

const bareInputClass =
  "h-auto border-0 bg-transparent p-0 shadow-none focus-visible:ring-0";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "" as ContactFormValues["subject"],
      message: "",
      agreeToPrivacy: false,
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
  });

  const onSubmit = form.handleSubmit((values) => {
    mutation.mutate(values, {
      onSuccess: () => form.reset(),
    });
  });

  return (
    <div className="rounded-[2px] bg-white p-8 shadow-[0_18px_40px_-30px_rgba(14,44,80,0.5)] md:p-10">
      <h2 className="font-heading text-villa-primary text-center text-[26px] font-semibold md:text-[28px]">
        Send Us a Message
      </h2>
      <span className="bg-villa-accent mx-auto my-3.5 block h-0.5 w-[50px]" />

      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Field icon={User}>
              <Input
                placeholder="First Name"
                className={bareInputClass}
                {...form.register("firstName")}
              />
            </Field>
            <FieldError message={form.formState.errors.firstName?.message} />
          </div>
          <div>
            <Field icon={User}>
              <Input
                placeholder="Last Name"
                className={bareInputClass}
                {...form.register("lastName")}
              />
            </Field>
            <FieldError message={form.formState.errors.lastName?.message} />
          </div>
        </div>

        <div>
          <Field icon={Mail}>
            <Input
              type="email"
              placeholder="Email Address"
              className={bareInputClass}
              {...form.register("email")}
            />
          </Field>
          <FieldError message={form.formState.errors.email?.message} />
        </div>

        <div>
          <Field icon={Phone}>
            <Input
              type="tel"
              placeholder="Phone Number"
              className={bareInputClass}
              {...form.register("phone")}
            />
          </Field>
        </div>

        <div>
          <Controller
            control={form.control}
            name="subject"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className="border-villa-primary/15 h-auto w-full rounded-[2px] px-3.5 py-3">
                  <SelectValue placeholder="How can we help you?">
                    {(value: string | null) =>
                      CONTACT_SUBJECTS.find((subject) => subject.value === value)
                        ?.label ?? "How can we help you?"
                    }
                  </SelectValue>
                  {/* value starts as "" (not undefined) so Base UI's Select stays
                      controlled from first render instead of flipping modes */}
                </SelectTrigger>
                <SelectContent>
                  {CONTACT_SUBJECTS.map((subject) => (
                    <SelectItem key={subject.value} value={subject.value}>
                      {subject.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <FieldError message={form.formState.errors.subject?.message} />
        </div>

        <div>
          <Textarea
            placeholder="Your Message"
            rows={4}
            className="border-villa-primary/15 resize-none rounded-[2px]"
            {...form.register("message")}
          />
          <FieldError message={form.formState.errors.message?.message} />
        </div>

        <div>
          <label className="flex items-center gap-2.5 text-[12.5px] text-[#5c6975]">
            <Controller
              control={form.control}
              name="agreeToPrivacy"
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
            I agree to the <span className="text-villa-accent font-medium">privacy policy</span>.
          </label>
          <FieldError message={form.formState.errors.agreeToPrivacy?.message} />
        </div>

        {mutation.isError && (
          <p className="text-[12.5px] text-red-600">
            Something went wrong sending your message. Please try again.
          </p>
        )}
        {mutation.isSuccess && (
          <p className="text-[12.5px] text-green-700">
            Thanks — your message has been sent. We&apos;ll be in touch soon!
          </p>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-villa-primary flex w-full items-center justify-center gap-2.5 rounded-[2px] py-4 text-[12px] font-medium tracking-[1.6px] text-white uppercase disabled:opacity-60"
        >
          {mutation.isPending ? "Sending…" : "Send Message"}
          <Send className="size-4" strokeWidth={1.8} />
        </button>
      </form>
    </div>
  );
}
