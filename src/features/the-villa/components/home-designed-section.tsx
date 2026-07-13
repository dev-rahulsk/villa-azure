import Image from "@/components/ui/image";
import { Check } from "lucide-react";
import { ABOUT_IMAGE, HOME_CHECKLIST } from "@/features/the-villa/data/content";

export function HomeDesignedSection() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-[30px] md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div className="relative h-[300px] w-full overflow-hidden rounded-[2px] shadow-[0_28px_55px_-30px_rgba(14,44,80,0.4)] md:h-[440px]">
        <Image
          src={ABOUT_IMAGE}
          alt="Villa Azure living space"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="font-heading text-villa-primary text-[30px] leading-[1.05] font-semibold md:text-[42px]">
          A Home Designed for You
        </h2>
        <span className="bg-villa-accent my-5 block h-0.5 w-[60px]" />
        <p className="mb-6 text-[15px] leading-[2] font-light text-[#4a5763]">
          Villa Azure combines modern design with the laid-back spirit of
          island life. Whether you&apos;re sipping coffee on the terrace,
          taking a dip in the plunge pool, or gathering loved ones in the
          spacious living area, every moment here is yours to enjoy.
        </p>
        <div className="flex flex-col gap-3">
          {HOME_CHECKLIST.map((item) => (
            <div key={item} className="flex items-center gap-3 text-[14px] text-[#33404c]">
              <Check className="text-villa-accent size-[18px] shrink-0" strokeWidth={2.5} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
