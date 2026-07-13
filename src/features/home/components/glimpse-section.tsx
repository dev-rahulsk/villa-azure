import Image from "@/components/ui/image";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/section-heading";
import { GLIMPSE_IMAGES, HERO_IMAGE } from "@/features/home/data/content";

export function GlimpseSection() {
  return (
    <section className="pt-5 pb-16 md:pb-20">
      <div className="mx-auto max-w-[1280px] px-6 md:px-[30px]">
        <SectionHeading title="A Glimpse of Villa Azure" className="mb-8" />
        <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5">
          {GLIMPSE_IMAGES.map((src, index) => (
            <div key={src + index} className="relative h-[160px] overflow-hidden rounded-[2px] md:h-[210px]">
              <Image
                src={src}
                alt="Villa Azure"
                fill
                loading={src === HERO_IMAGE ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 20vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/gallery"
            className="bg-villa-primary inline-block rounded-[2px] px-8 py-[14px] text-[12px] font-medium tracking-[1.6px] text-white uppercase"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
