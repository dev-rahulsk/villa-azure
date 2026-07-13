import Image from "@/components/ui/image";
import { Compass, CarFront, ShoppingBag, UtensilsCrossed, Waves, type LucideIcon } from "lucide-react";
import { LOCAL_INFO_IMAGE, LOCAL_INFO_ITEMS } from "@/features/guest-info/data/content";

const ICONS: Record<string, LucideIcon> = {
  UtensilsCrossed,
  Waves,
  ShoppingBag,
  CarFront,
};

export function HelpfulLocalInfo() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-16 md:px-[30px]">
      <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1fr_1.2fr_0.9fr]">
        <div className="relative h-[220px] w-full overflow-hidden rounded-[2px] lg:h-[300px]">
          <Image
            src={LOCAL_INFO_IMAGE}
            alt="North Coast of Jamaica"
            fill
            sizes="(min-width: 1024px) 30vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-villa-primary text-[26px] font-semibold md:text-[28px]">
            Helpful Local Information
          </h2>
          <span className="bg-villa-accent my-4 block h-0.5 w-[50px]" />
          <p className="mb-5 text-[13px] leading-[1.85] font-light text-[#4a5763]">
            Villa Azure is perfectly located on Jamaica&apos;s North Coast.
            Here are a few tips to help you enjoy everything the area has to
            offer.
          </p>
          <div className="flex flex-col gap-3.5">
            {LOCAL_INFO_ITEMS.map((item) => {
              const Icon = ICONS[item.icon];
              return (
                <div key={item.title} className="flex gap-3">
                  <Icon className="text-villa-accent mt-0.5 size-5 shrink-0" strokeWidth={1.5} />
                  <div>
                    <span className="text-villa-primary text-[12px] font-semibold tracking-[0.6px] uppercase">
                      {item.title}
                    </span>
                    <p className="text-[12px] leading-[1.6] font-light text-[#6a7784]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rounded-[2px] bg-[#eef2f7] p-7.5 text-center">
          <Compass className="text-villa-primary mx-auto mb-3.5 size-10" strokeWidth={1.2} />
          <p className="text-[13px] leading-[1.8] font-light text-[#4a5763]">
            A comprehensive Guest Guidebook is available in the villa with
            more tips, recommendations, and important information.
          </p>
        </div>
      </div>
    </section>
  );
}
