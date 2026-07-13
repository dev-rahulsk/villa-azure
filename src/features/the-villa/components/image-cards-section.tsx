import Image from "next/image";
import { IMAGE_CARDS } from "@/features/the-villa/data/content";

export function ImageCardsSection() {
  return (
    <section className="bg-[#f2ede4] py-16">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:grid-cols-3 md:px-[30px] md:gap-[26px]">
        {IMAGE_CARDS.map((card) => (
          <div key={card.title} className="text-center">
            <div className="relative mb-5 h-[200px] w-full overflow-hidden rounded-[2px] md:h-[230px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 640px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <h3 className="text-villa-primary mb-2.5 text-[14px] font-semibold tracking-[1.4px] uppercase">
              {card.title}
            </h3>
            <p className="text-[13px] leading-[1.8] font-light text-[#5c6975]">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
