import { UtensilsCrossed, Camera } from "lucide-react";
import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { InfoListSection } from "@/features/explore-st-ann/components/info-list-section";
import { CTA_IMAGE } from "@/features/accommodations/data/bedrooms";
import {
  ATTRACTIONS,
  ATTRACTIONS_IMAGE,
  DINING,
  DINING_IMAGE,
  HERO_DESCRIPTION,
  HERO_IMAGE,
} from "@/features/explore-st-ann/data/content";

export default function ExploreStAnnPage() {
  return (
    <>
      <SplitHero
        title="EXPLORE ST. ANN"
        titleMaxRem={3.9}
        subtitleScript="Adventure. Culture. Paradise."
        description={HERO_DESCRIPTION}
        image={HERO_IMAGE}
        imageAlt="Coastline of St. Ann, Jamaica"
      />
      <InfoListSection
        icon={UtensilsCrossed}
        title="Dining"
        intro={DINING.intro}
        items={DINING.items}
        image={DINING_IMAGE}
        imageAlt="Oceanview dining near Villa Azure"
        className="pt-12 pb-16 md:pb-20"
      />
      <InfoListSection
        icon={Camera}
        title="Local Attractions"
        intro={ATTRACTIONS.intro}
        items={ATTRACTIONS.items}
        image={ATTRACTIONS_IMAGE}
        imageAlt="Adventure activities in St. Ann, Jamaica"
        className="bg-[#f2ede4] py-16 md:py-20"
      />
      <CtaBand
        variant="image"
        image={CTA_IMAGE}
        imageAlt="Villa Azure terrace at dusk"
        heading="Endless Adventures Await You"
        copy="Make memories that will last a lifetime in the beautiful parish of St. Ann, Jamaica."
      />
    </>
  );
}
