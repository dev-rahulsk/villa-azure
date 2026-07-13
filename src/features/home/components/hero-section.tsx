"use client";

import { useEffect, useState } from "react";
import Image from "@/components/ui/image";
import { HERO_IMAGES } from "@/features/home/data/content";

const SLIDE_DURATION_MS = 6000;

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (HERO_IMAGES.length <= 1) return;
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_IMAGES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="bg-villa-primary relative flex min-h-[560px] items-center overflow-hidden">
      {HERO_IMAGES.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt="Villa Azure"
          fill
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : undefined}
          sizes="100vw"
          className="object-cover opacity-90 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === activeIndex ? 0.9 : 0 }}
        />
      ))}
      <div className="absolute inset-0 bg-[rgba(9,26,48,0.7)] md:hidden" />
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[rgba(9,26,48,0.86)] via-[rgba(9,26,48,0.5)] via-40% to-[rgba(9,26,48,0)] md:block" />
      <div className="relative mx-auto w-full max-w-[1280px] px-6 py-14 md:px-[30px] md:py-[70px]">
        <div className="animate-in fade-in slide-in-from-bottom-6 max-w-[560px] text-white duration-700 ease-out">
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
