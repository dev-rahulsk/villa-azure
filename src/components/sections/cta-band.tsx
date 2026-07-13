import Image from "next/image";
// import Link from "next/link";
import { cn } from "@/lib/utils";
// import { BOOK_YOUR_STAY_HREF } from "@/lib/constants/site";

interface CtaBandProps {
  heading: string;
  copy: string;
  image?: string;
  imageAlt?: string;
  variant?: "image" | "primary" | "light";
  lightBgClass?: string;
  scriptText?: string;
}

export function CtaBand({
  heading,
  copy,
  image,
  imageAlt = "",
  variant = "primary",
  lightBgClass = "bg-[#dfeaf4]",
  scriptText = "We can't wait to welcome you!",
}: CtaBandProps) {
  const isImage = variant === "image";
  const isPrimary = variant === "primary";

  const textColor = isImage || isPrimary ? "text-white" : "text-villa-primary";
  const copyColor = isImage
    ? "text-white/85"
    : isPrimary
      ? "text-white/80"
      : "text-[#5c6975]";
  const scriptColor = isImage || isPrimary ? "text-[#e6c789]" : "text-villa-accent";

  return (
    <section
      className={cn(
        "relative overflow-hidden py-13 md:py-16",
        isPrimary && "bg-villa-primary",
        !isImage && !isPrimary && lightBgClass,
      )}
    >
      {isImage && image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,26,48,0.85)] to-[rgba(9,26,48,0.35)]" />
        </>
      )}
      <div className="relative mx-auto flex max-w-[1280px] flex-col items-start gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-[30px]">
        <div className="flex items-center gap-5 md:gap-6">
          <svg
            width="58"
            height="58"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--villa-accent)"
            strokeWidth={1}
            className="hidden shrink-0 sm:block"
          >
            <circle cx="12" cy="12" r="11" />
            <path
              d="M12 8c-2 0-3.5 1.5-4 3.5C9 11 10.5 11.5 12 13c1.5-1.5 3-2 4-1.5C15.5 9.5 14 8 12 8zM7 15c2 0 3.5.7 5 1.5 1.5-.8 3-1.5 5-1.5"
              strokeWidth={0.9}
            />
          </svg>
          <div className={textColor}>
            <h2 className="font-heading text-[26px] leading-[1.15] font-semibold md:text-[32px]">
              {heading}
            </h2>
            <p className={cn("mt-1.5 max-w-[440px] text-[13.5px] font-light", copyColor)}>
              {copy}
            </p>
          </div>
        </div>
        <div className="text-left md:text-center">
          {/* <Link
            href={BOOK_YOUR_STAY_HREF}
            className="bg-villa-accent inline-block rounded-[2px] px-8 py-[14px] text-[12px] font-medium tracking-[1.6px] text-white uppercase"
          >
            Book Your Stay
          </Link> */}
          {scriptText && (
            <p className={cn("font-script mt-2.5 text-[21px]", scriptColor)}>
              {scriptText}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
