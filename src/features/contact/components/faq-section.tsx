import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/features/contact/data/content";

export function FaqSection() {
  return (
    <div>
      <h2 className="font-heading text-villa-primary mb-6 text-[26px] font-semibold md:text-[30px]">
        Frequently Asked Questions
      </h2>
      <Accordion className="flex flex-col gap-3">
        {FAQS.map((faq) => (
          <AccordionItem
            key={faq.question}
            value={faq.question}
            className="rounded-[2px] border-0 bg-white px-5 shadow-[0_12px_30px_-26px_rgba(14,44,80,0.5)]"
          >
            <AccordionTrigger className="text-villa-primary py-4.5 text-[13.5px] font-medium no-underline hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[13px] leading-[1.7] font-light text-[#5c6975]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
