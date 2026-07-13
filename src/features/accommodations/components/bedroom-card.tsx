import Image from "next/image";
import { BedDouble, Check } from "lucide-react";
import type { Bedroom } from "@/features/accommodations/data/bedrooms";

export function BedroomCard({ bedroom }: { bedroom: Bedroom }) {
  return (
    <div className="shadow-[0_18px_40px_-28px_rgba(14,44,80,0.5)] overflow-hidden rounded-[2px] bg-white">
      <div className="relative h-[240px] w-full">
        <Image
          src={bedroom.image}
          alt={bedroom.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="px-6 pt-[26px] pb-[30px]">
        <div className="mb-3 flex items-center gap-2.5">
          <BedDouble className="text-villa-accent size-[22px]" strokeWidth={1.5} />
          <h3 className="text-villa-primary text-[15px] font-semibold tracking-[1px] uppercase">
            {bedroom.name}
          </h3>
        </div>
        <p className="mb-4 text-[13px] leading-[1.8] font-light text-[#5c6975]">
          {bedroom.description}
        </p>
        <div className="flex flex-col gap-1 text-[12.5px] text-[#33404c]">
          {bedroom.features.map((feature) => (
            <div key={feature} className="flex items-center gap-1.5">
              <Check className="text-villa-accent size-3.5 shrink-0" strokeWidth={2.5} />
              {feature}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
