import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  lede?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  title,
  lede,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={cn(isCentered && "text-center", className)}>
      <h2 className="font-heading text-villa-primary text-[32px] font-semibold md:text-[38px]">
        {title}
      </h2>
      <span
        className={cn(
          "bg-villa-accent mt-3 mb-3 block h-0.5 w-14",
          isCentered && "mx-auto",
        )}
      />
      {lede && (
        <p className="text-[13px] font-light text-[#6a7784]">{lede}</p>
      )}
    </div>
  );
}
