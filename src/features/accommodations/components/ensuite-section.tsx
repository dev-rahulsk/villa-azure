import Image from "@/components/ui/image";
import { Link } from "react-router-dom";
import { ENSUITE_IMAGES } from "@/features/accommodations/data/bedrooms";

export function EnsuiteSection() {
  return (
    <section className="bg-white py-[70px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-11 px-6 md:px-[30px] lg:grid-cols-[0.85fr_2fr]">
        <div>
          <h2 className="font-heading text-villa-primary text-[28px] leading-[1.1] font-semibold md:text-[34px]">
            ENSUITE BATHROOMS
          </h2>
          <span className="bg-villa-accent my-[18px] block h-0.5 w-[56px] md:my-[18px] md:mb-[22px]" />
          <p className="mb-[26px] text-[14px] leading-[1.9] font-light text-[#4a5763]">
            Each bedroom features a private ensuite bathroom with modern
            finishes, quality linens, and premium toiletries to ensure your
            comfort and convenience.
          </p>
          <Link
            to="/amenities"
            className="border-villa-accent text-villa-primary inline-block rounded-[2px] border px-[26px] py-[13px] text-[12px] font-semibold tracking-[1.5px] uppercase"
          >
            View Amenities
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {ENSUITE_IMAGES.map((src) => (
            <div key={src} className="relative h-[180px] md:h-[250px]">
              <Image
                src={src}
                alt="Villa Azure ensuite bathroom"
                fill
                sizes="(min-width: 1024px) 22vw, 33vw"
                className="rounded-[2px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
