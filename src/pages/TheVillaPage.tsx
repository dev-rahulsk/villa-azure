import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { FeatureColumns } from "@/features/the-villa/components/feature-columns";
import { HomeDesignedSection } from "@/features/the-villa/components/home-designed-section";
import { ImageCardsSection } from "@/features/the-villa/components/image-cards-section";
import { HERO_IMAGE } from "@/features/the-villa/data/content";

export default function TheVillaPage() {
  return (
    <>
      <SplitHero
        eyebrow="The Villa"
        title={
          <>
            Modern Comfort.
            <br />
            Island Charm.
          </>
        }
        titleMaxRem={3.9}
        description={[
          "Villa Azure is a stylish 3-bedroom villa located on Jamaica's beautiful North Coast. Designed with relaxation and connection in mind, the villa blends contemporary comfort with tropical elegance.",
          "From the open-concept living spaces to the private outdoor areas, every detail has been thoughtfully curated to create the perfect home away from home.",
        ]}
        image={HERO_IMAGE}
        imageAlt="Villa Azure exterior"
      />
      <FeatureColumns />
      <HomeDesignedSection />
      <ImageCardsSection />
      <CtaBand
        heading="Your Home by the Sea Awaits"
        copy="Experience the perfect blend of luxury, comfort, and island charm at Villa Azure."
      />
    </>
  );
}
