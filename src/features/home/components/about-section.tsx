import Image from "next/image";
import Link from "next/link";
import { ABOUT_IMAGE } from "@/features/home/data/content";

export function AboutSection() {
  return (
    <section className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-[30px] md:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
      <div className="relative h-[300px] w-full overflow-hidden rounded-[2px] shadow-[0_28px_55px_-30px_rgba(14,44,80,0.4)] md:h-[440px]">
        <Image
          src={ABOUT_IMAGE}
          alt="Villa Azure open plan living"
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover"
        />
      </div>
      <div>
        <p className="text-villa-accent mb-3 text-[12px] font-semibold tracking-[3px] uppercase">
          About the Villa
        </p>
        <h2 className="font-heading text-villa-primary text-[30px] leading-[1.05] font-semibold md:text-[42px]">
          Your Home by the Sea
        </h2>
        <span className="bg-villa-accent my-5 block h-0.5 w-[60px]" />
        <p className="mb-7 text-[15px] leading-[2] font-light text-[#4a5763]">
          Villa Azure is a stylish and serene retreat designed for comfort and
          relaxation. With modern décor, spacious interiors, and thoughtful
          amenities, it&apos;s perfect for families, couples, or small groups
          seeking a memorable Jamaican escape.
        </p>
        <Link
          href="/the-villa"
          className="bg-villa-primary inline-block rounded-[2px] px-7 py-[14px] text-[12px] font-medium tracking-[1.6px] text-white uppercase"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
