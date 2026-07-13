import { HeroSection } from "@/features/home/components/hero-section";
import { HighlightBar } from "@/features/home/components/highlight-bar";
import { AboutSection } from "@/features/home/components/about-section";
import { GlimpseSection } from "@/features/home/components/glimpse-section";
import { LocalColumns } from "@/features/home/components/local-columns";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightBar />
      <AboutSection />
      <GlimpseSection />
      <LocalColumns />
    </>
  );
}
