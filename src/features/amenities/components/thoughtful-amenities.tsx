import Image from "next/image";
import {
  BedDouble,
  ChefHat,
  ShowerHead,
  Sofa,
  Umbrella,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { THOUGHTFUL_AMENITIES } from "@/features/amenities/data/content";

const ICONS: Record<string, LucideIcon> = {
  Sofa,
  UtensilsCrossed,
  BedDouble,
  ShowerHead,
  ChefHat,
  Umbrella,
};

export function ThoughtfulAmenities() {
  return (
    <section className="py-16 pb-[76px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[30px]">
        <SectionHeading title="Thoughtful Amenities. Seamless Stays." className="mb-12" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-14 md:gap-y-9">
          {THOUGHTFUL_AMENITIES.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="relative h-[170px] w-full shrink-0 overflow-hidden rounded-[2px] lg:w-[270px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="270px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="bg-villa-primary mb-3 flex size-11 items-center justify-center rounded-full">
                    <Icon className="size-[22px] text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-villa-primary mb-2 text-[14px] font-semibold tracking-[1px] uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[12.5px] leading-[1.75] font-light text-[#5c6975]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
