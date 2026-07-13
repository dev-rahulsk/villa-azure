import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/constants/site";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className }: LogoProps) {
  const isLight = variant === "light";

  return (
    <Link href="/" className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading text-[18px] font-semibold tracking-[4px]",
          isLight ? "text-white" : "text-villa-primary",
        )}
      >
        {SITE.logoPrimary}
      </span>
      <span
        className={cn(
          "font-script mt-[-4px] ml-3 text-[27px]",
          isLight ? "text-[#5fa0da]" : "text-[#2f6fb0]",
        )}
      >
        {SITE.logoScript}
      </span>
      <span className="text-villa-accent mt-[1px] text-[8px] tracking-[3px] uppercase">
        {SITE.tagline}
      </span>
    </Link>
  );
}
