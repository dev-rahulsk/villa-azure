import {
  CarFront,
  ChefHat,
  ShieldCheck,
  Snowflake,
  Waves,
  WashingMachine,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { ICON_STRIP } from "@/features/amenities/data/content";

const ICONS: Record<string, LucideIcon> = {
  Waves,
  Wifi,
  Snowflake,
  ChefHat,
  WashingMachine,
  ShieldCheck,
  CarFront,
};

export function IconStrip() {
  return (
    <section className="border-villa-primary/10 border-b bg-white">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 divide-x divide-y divide-[rgba(14,44,80,0.06)] px-6 py-12 sm:grid-cols-4 md:px-[30px] lg:grid-cols-7 lg:divide-y-0">
        {ICON_STRIP.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 px-4 text-center"
            >
              <Icon className="text-villa-primary size-[34px]" strokeWidth={1.3} />
              <div className="text-villa-primary text-[11px] font-semibold tracking-[0.5px] uppercase">
                {item.title}
              </div>
              <p className="text-[11px] leading-[1.6] font-light text-[#6a7784]">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
