import Image from "next/image";
import { BedDouble, Snowflake, Users, Wifi, type LucideIcon } from "lucide-react";
import { HERO_IMAGE, HERO_STATS } from "@/features/accommodations/data/bedrooms";
import { heroImageMaskStyle } from "@/lib/constants/hero-mask";

const STAT_ICONS: Record<string, LucideIcon> = {
  Users,
  BedDouble,
  Snowflake,
  Wifi,
};

export function HeroSection() {
  return (
    <section className="from-villa-wash to-villa-bg relative flex min-h-[560px] items-center overflow-hidden bg-gradient-to-b">
      <div className="absolute inset-0 md:hidden">
        <Image
          src={HERO_IMAGE}
          alt="Master bedroom at Villa Azure"
          fill
          loading="eager"
          fetchPriority="high"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(9,26,48,0.7)]" />
      </div>

      <div
        className="absolute inset-y-0 right-0 hidden w-[62%] md:block"
        style={heroImageMaskStyle}
      >
        <Image
          src={HERO_IMAGE}
          alt="Master bedroom at Villa Azure"
          fill
          loading="lazy"
          sizes="60vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-16 md:px-[30px] md:py-[74px]">
        <div className="max-w-[640px]">
          <h1 className="font-heading text-[clamp(1.65rem,6vw,3.5rem)] leading-none font-semibold text-white md:text-villa-primary">
            ACCOMMODATIONS
          </h1>
          <p className="font-script text-villa-accent my-2 text-[28px] md:my-[6px] md:text-[34px]">
            Rest. Relax. Recharge.
          </p>
          <span className="bg-villa-accent mb-6 block h-0.5 w-[60px]" />
          <p className="mb-9 max-w-[430px] text-[15px] leading-[2] font-light text-white/85 md:text-[#4a5763]">
            Villa Azure comfortably accommodates up to 6 guests in 3
            beautifully appointed bedrooms, each with its own ensuite
            bathroom, air conditioning, and thoughtful details for a restful
            stay.
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:gap-x-[30px]">
            {HERO_STATS.map((stat) => {
              const Icon = STAT_ICONS[stat.icon];
              return (
                <div key={stat.title} className="flex items-center gap-3">
                  <Icon
                    className="size-8 shrink-0 text-white md:text-villa-primary"
                    strokeWidth={1.4}
                  />
                  <div>
                    <div className="text-[11.5px] font-semibold tracking-[0.8px] text-white uppercase md:text-villa-primary">
                      {stat.title}
                    </div>
                    <div className="text-[11px] font-light text-white/75 md:text-[#6a7784]">
                      {stat.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
