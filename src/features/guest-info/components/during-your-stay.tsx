import {
  Droplet,
  Lightbulb,
  LifeBuoy,
  Trash2,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { DURING_STAY } from "@/features/guest-info/data/content";

const ICONS: Record<string, LucideIcon> = {
  Lightbulb,
  Zap,
  Droplet,
  Trash2,
  Waves,
  LifeBuoy,
};

export function DuringYourStay() {
  return (
    <section className="mt-10 bg-[#f2ede4] py-14">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[30px]">
        <SectionHeading title="During Your Stay" className="mb-10" />
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {DURING_STAY.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div key={item.title} className="flex flex-col items-center gap-2.5 text-center">
                <Icon className="text-villa-primary size-[34px]" strokeWidth={1.3} />
                <div className="text-villa-primary text-[11.5px] font-semibold tracking-[0.6px] uppercase">
                  {item.title}
                </div>
                <p className="text-[11px] leading-[1.6] font-light text-[#6a7784]">
                  {item.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
