import {
  BedDouble,
  MapPin,
  ShieldCheck,
  ShowerHead,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { HIGHLIGHTS } from "@/features/home/data/content";

const ICONS: Record<string, LucideIcon> = {
  BedDouble,
  ShowerHead,
  Waves,
  MapPin,
  ShieldCheck,
};

export function HighlightBar() {
  return (
    <section className="border-villa-primary/10 border-b bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 px-6 py-12 sm:grid-cols-3 md:px-[30px] lg:flex lg:flex-nowrap lg:justify-between">
        {HIGHLIGHTS.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <div
              key={item.title}
              className={`flex flex-1 flex-col items-center gap-2.5 px-3 text-center ${
                index > 0 ? "lg:border-villa-primary/10 lg:border-l" : ""
              }`}
            >
              <Icon className="text-villa-primary size-[38px]" strokeWidth={1.4} />
              <div className="text-villa-primary text-[13px] font-semibold tracking-[1.4px] uppercase">
                {item.title}
              </div>
              <div className="text-[12px] font-light text-[#6a7784]">
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
