import { HeroSection } from "@/features/accommodations/components/hero-section";
import { BedroomsSection } from "@/features/accommodations/components/bedrooms-section";
import { EnsuiteSection } from "@/features/accommodations/components/ensuite-section";
import { CtaBand } from "@/components/sections/cta-band";
import { CTA_IMAGE } from "@/features/accommodations/data/bedrooms";

export default function AccommodationsPage() {
  return (
    <>
      <HeroSection />
      <BedroomsSection />
      <EnsuiteSection />
      <CtaBand
        variant="image"
        image={CTA_IMAGE}
        imageAlt="Villa Azure pool at dusk"
        heading="Your Perfect Stay Awaits"
        copy="Comfortable spaces, modern amenities, and breathtaking views."
      />
    </>
  );
}
