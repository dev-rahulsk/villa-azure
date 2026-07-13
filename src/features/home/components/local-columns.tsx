import Link from "next/link";
import { ShoppingBag, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { LOCAL_COLUMNS } from "@/features/home/data/content";

const ICONS: Record<string, LucideIcon> = {
  UtensilsCrossed,
  ShoppingBag,
};

export function LocalColumns() {
  return (
    <section className="bg-[#f2ede4] py-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 px-6 md:px-[30px] lg:grid-cols-2 lg:gap-16">
        {LOCAL_COLUMNS.map((column) => {
          const Icon = ICONS[column.icon];
          return (
            <div key={column.title} className="flex gap-4.5">
              <Icon className="text-villa-primary size-10 shrink-0" strokeWidth={1.3} />
              <div>
                <h3 className="text-villa-primary mb-2 text-[14px] font-semibold tracking-[1.4px] uppercase">
                  {column.title}
                </h3>
                <p className="mb-3 text-[13px] leading-[1.8] font-light text-[#5c6975]">
                  {column.detail}
                </p>
                <Link
                  href={column.href}
                  className="text-villa-accent text-[12px] font-semibold tracking-[1.4px] uppercase"
                >
                  {column.linkLabel}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
