import { Clock } from "lucide-react";
import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactForm } from "@/features/contact/components/contact-form";
import { GetInTouch } from "@/features/contact/components/get-in-touch";
import { FaqSection } from "@/features/contact/components/faq-section";
import { HERO_IMAGE } from "@/features/contact/data/content";

export default function ContactPage() {
  return (
    <>
      <SplitHero
        title="CONTACT US"
        titleMaxRem={3.6}
        subtitleItalic="We'd Love to Hear From You"
        description="Have a question or ready to plan your escape? Our team is here to help make your stay at Villa Azure unforgettable. Reach out to us anytime — we can't wait to welcome you!"
        image={HERO_IMAGE}
        imageAlt="Villa Azure"
      />

      <div className="mx-auto max-w-[1280px] px-6 pt-12 pb-10 md:px-[30px]">
        <div className="text-villa-primary -mt-4 mb-8 flex items-center gap-3.5 text-[13px] font-semibold md:hidden">
          <div className="bg-villa-primary flex size-11 items-center justify-center rounded-full">
            <Clock className="size-5 text-[#e6c789]" strokeWidth={1.5} />
          </div>
          We typically respond within 24 hours.
        </div>
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-10">
            <ContactForm />
            <FaqSection />
          </div>
          <GetInTouch />
        </div>
      </div>

      <CtaBand
        variant="light"
        heading="Let's Start Planning Your Escape"
        lightBgClass="bg-[#f2ede4]"
        copy="Reach out today and let us help you create unforgettable memories at Villa Azure."
      />
    </>
  );
}
