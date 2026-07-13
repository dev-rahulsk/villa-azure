import Image from "@/components/ui/image";
import type { LucideIcon } from "lucide-react";

interface InfoListSectionProps {
  icon: LucideIcon;
  title: string;
  intro: string;
  items: { name: string; detail: string }[];
  image: string;
  imageAlt: string;
  className?: string;
}

export function InfoListSection({
  icon: Icon,
  title,
  intro,
  items,
  image,
  imageAlt,
  className,
}: InfoListSectionProps) {
  return (
    <section className={className}>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 md:px-[30px] lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div>
          <div className="mb-1 flex items-center gap-3">
            <Icon className="text-villa-accent size-8" strokeWidth={1.3} />
            <h2 className="font-heading text-villa-primary text-[26px] font-semibold uppercase md:text-[30px]">
              {title}
            </h2>
          </div>
          <span className="bg-villa-accent mt-2 mb-4 block h-0.5 w-[60px]" />
          <p className="mb-7 max-w-[520px] text-[13.5px] leading-[1.9] font-light text-[#4a5763]">
            {intro}
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {items.map((item) => (
              <p key={item.name} className="text-[13px] leading-[1.7] font-light text-[#33404c]">
                <span className="text-villa-primary font-semibold">{item.name}</span> —{" "}
                {item.detail}
              </p>
            ))}
          </div>
        </div>
        <div className="relative h-[280px] w-full overflow-hidden rounded-[2px] shadow-[0_28px_55px_-30px_rgba(14,44,80,0.4)] lg:h-full lg:min-h-[380px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            loading="lazy"
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
