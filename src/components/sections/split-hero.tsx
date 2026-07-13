import Image from "next/image";
import type { ReactNode } from "react";
import { heroImageMaskStyle } from "@/lib/constants/hero-mask";

interface SplitHeroProps {
  eyebrow?: string;
  title: ReactNode;
  titleMaxRem?: number;
  subtitleScript?: string;
  subtitleItalic?: string;
  description: string | string[];
  image: string;
  imageAlt: string;
  minHeightClass?: string;
}

export function SplitHero({
  eyebrow,
  title,
  titleMaxRem = 3.5,
  subtitleScript,
  subtitleItalic,
  description,
  image,
  imageAlt,
  minHeightClass = "min-h-[560px]",
}: SplitHeroProps) {
  const paragraphs = Array.isArray(description) ? description : [description];

  return (
    <section
      className={`from-villa-wash to-villa-bg relative flex ${minHeightClass} items-center overflow-hidden bg-gradient-to-b`}
    >
      <div className="absolute inset-0 md:hidden">
        <Image
          src={image}
          alt={imageAlt}
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
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          sizes="62vw"
          className="object-cover"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-14 md:px-[30px] md:py-[70px]">
        <div className="max-w-[470px]">
          {eyebrow && (
            <p className="text-villa-accent mb-3 text-[12px] font-semibold tracking-[3px] uppercase">
              {eyebrow}
            </p>
          )}
          <h1
            className="font-heading font-semibold text-white md:text-villa-primary"
            style={{
              fontSize: `clamp(1.7rem, 6vw, ${titleMaxRem}rem)`,
              lineHeight: 1.05,
            }}
          >
            {title}
          </h1>
          {subtitleScript && (
            <p className="font-script text-villa-accent my-2 text-[28px] md:text-[34px]">
              {subtitleScript}
            </p>
          )}
          {subtitleItalic && (
            <p className="font-heading text-villa-accent my-2 text-[22px] italic md:text-[26px]">
              {subtitleItalic}
            </p>
          )}
          <span className="bg-villa-accent my-5 block h-0.5 w-[60px]" />
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-4 text-[14px] leading-[1.95] font-light text-white/85 last:mb-0 md:text-[#4a5763]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
