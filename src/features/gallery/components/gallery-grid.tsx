"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GALLERY_SECTIONS, type GalleryImage } from "@/features/gallery/data/content";
import {
  Dialog,
  DialogPopup,
  DialogClose,
} from "@/components/ui/dialog";

export function GalleryGrid() {
  const [activeKey, setActiveKey] = useState<string>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const sections =
    activeKey === "all"
      ? GALLERY_SECTIONS
      : GALLERY_SECTIONS.filter((section) => section.key === activeKey);

  const images: GalleryImage[] = sections.flatMap((section) => section.images);
  const sectionStartIndexes = sections.map((_, sectionIndex) =>
    sections
      .slice(0, sectionIndex)
      .reduce((sum, section) => sum + section.images.length, 0),
  );

  const showPrev = () =>
    setSelectedIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setSelectedIndex((i) => (i === null ? i : (i + 1) % images.length));

  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-12 pb-10 md:px-[30px]">
      <div className="mb-9 flex flex-wrap gap-3">
        <FilterPill
          label="All"
          active={activeKey === "all"}
          onClick={() => setActiveKey("all")}
        />
        {GALLERY_SECTIONS.map((section) => (
          <FilterPill
            key={section.key}
            label={section.label}
            active={activeKey === section.key}
            onClick={() => setActiveKey(section.key)}
          />
        ))}
      </div>

      {sections.map((section, sectionIndex) => {
        const startIndex = sectionStartIndexes[sectionIndex];

        return (
          <div key={section.key} className="mb-10">
            <div className="mb-4 flex items-center gap-4">
              <h3 className="text-villa-primary text-[13px] font-semibold tracking-[2px] uppercase">
                {section.label}
              </h3>
              <span className="bg-villa-accent h-px w-[60px]" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {section.images.map((image, index) => (
                <button
                  key={`${section.key}-${index}`}
                  type="button"
                  onClick={() => setSelectedIndex(startIndex + index)}
                  className="relative block h-[150px] w-full cursor-zoom-in overflow-hidden rounded-[2px] p-0 sm:h-[190px]"
                >
                  <Image
                    src={image.src}
                    alt={image.caption ?? `${section.label} photo`}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="object-cover"
                  />
                  {image.caption && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(9,24,44,0.7)] to-transparent to-55%" />
                      <span className="absolute bottom-3.5 left-4 text-[12px] font-semibold tracking-[1.4px] text-white uppercase">
                        {image.caption}
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        );
      })}

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedIndex(null);
        }}
      >
        <DialogPopup
          className="h-[90vh] w-[92vw] max-w-[1200px] bg-transparent"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPrev();
            if (event.key === "ArrowRight") showNext();
          }}
        >
          {selectedIndex !== null && (
            <>
              <div className="relative h-full w-full">
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].caption ?? "Gallery photo"}
                  fill
                  sizes="92vw"
                  className="object-contain"
                />
              </div>
              {images[selectedIndex].caption && (
                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[13px] font-semibold tracking-[1.4px] text-white uppercase">
                  {images[selectedIndex].caption}
                </span>
              )}
              <button
                type="button"
                onClick={showPrev}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:left-4"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute top-1/2 right-2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 md:right-4"
              >
                <ChevronRight className="size-6" />
              </button>
            </>
          )}
          <DialogClose />
        </DialogPopup>
      </Dialog>
    </section>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-[3px] px-[22px] py-[11px] text-[11.5px] font-medium tracking-[1.2px] uppercase",
        active
          ? "bg-villa-primary text-white"
          : "border-villa-primary/15 text-villa-primary border bg-white",
      )}
    >
      {label}
    </button>
  );
}
