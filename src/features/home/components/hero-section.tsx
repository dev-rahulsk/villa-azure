import Image from "next/image";
import { HERO_IMAGE } from "@/features/home/data/content";

export function HeroSection() {
  return (
    <header className="bg-villa-primary relative flex min-h-[560px] items-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Villa Azure"
        fill
        loading="eager"
        fetchPriority="high"
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[rgba(9,26,48,0.7)] md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[rgba(9,26,48,0.86)] via-[rgba(9,26,48,0.5)] via-40% to-[rgba(9,26,48,0)] md:block" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-14 md:px-[30px] md:py-[70px]">
        <div className="max-w-[560px] text-white">
          <p className="font-script text-[32px] leading-none text-[#e6c789] md:text-[40px]">
            Welcome to
          </p>
          <h1
            className="font-heading font-semibold whitespace-nowrap"
            style={{
              fontSize: "clamp(1.3rem, 6.4vw, 2.4rem)",
              letterSpacing: "0.06em",
              lineHeight: 0.98,
            }}
          >
            VILLA AZURE
          </h1>
          <div className="my-2 flex items-center gap-4">
            <span className="font-heading text-[20px] tracking-[10px] md:text-[24px] md:tracking-[12px]">
              JAMAICA
            </span>
            <span className="bg-villa-accent h-px w-[60px]" />
          </div>
          <p className="font-script mb-5 text-[26px] text-[#e6c789] md:text-[33px]">
            Luxury by the Sea
          </p>
          <p className="max-w-[460px] text-[15px] leading-[1.9] font-light text-white/90">
            A modern coastal retreat on Jamaica&apos;s beautiful North Coast.
            Relax in style, unwind in your private plunge pool, and enjoy easy
            access to beaches, dining, and unforgettable experiences.
          </p>
        </div>
      </div>
    </header>
  );
}
