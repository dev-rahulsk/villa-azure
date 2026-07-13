import { MapPin, ShieldCheck, Sofa, Users, Waves, type LucideIcon } from "lucide-react";
import { FEATURE_COLUMNS } from "@/features/the-villa/data/content";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck,
  MapPin,
  Sofa,
  Waves,
  Users,
};

export function FeatureColumns() {
  return (
    <section className="border-villa-primary/10 border-y bg-white py-12">
      <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-8 px-6 sm:grid-cols-3 md:px-[30px] lg:flex lg:flex-nowrap lg:justify-between lg:gap-3.5">
        {FEATURE_COLUMNS.map((feature, index) => {
          const Icon = ICONS[feature.icon];
          return (
            <div
              key={feature.title}
              className={`flex flex-1 flex-col items-center gap-3 px-3.5 text-center ${
                index > 0 ? "lg:border-villa-primary/10 lg:border-l" : ""
              }`}
            >
              <Icon className="text-villa-primary size-9" strokeWidth={1.3} />
              <div className="text-villa-primary text-[12.5px] font-semibold tracking-[1px] uppercase">
                {feature.title}
              </div>
              <p className="text-[12.5px] leading-[1.7] font-light text-[#6a7784]">
                {feature.detail}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
