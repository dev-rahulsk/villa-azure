import { BEDROOMS } from "@/features/accommodations/data/bedrooms";
import { BedroomCard } from "@/features/accommodations/components/bedroom-card";

export function BedroomsSection() {
  return (
    <section className="pt-12 pb-[70px]">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[30px]">
        <h2 className="font-heading text-villa-primary text-center text-[32px] font-semibold md:text-[40px]">
          Our Bedrooms
        </h2>
        <span className="bg-villa-accent mx-auto my-[14px] mb-11 block h-0.5 w-[56px]" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-[26px]">
          {BEDROOMS.map((bedroom) => (
            <BedroomCard key={bedroom.slug} bedroom={bedroom} />
          ))}
        </div>
      </div>
    </section>
  );
}
