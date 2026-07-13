import { SplitHero } from "@/components/sections/split-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { InfoCards } from "@/features/guest-info/components/info-cards";
import { DuringYourStay } from "@/features/guest-info/components/during-your-stay";
import { HelpfulLocalInfo } from "@/features/guest-info/components/helpful-local-info";
import { HERO_IMAGE } from "@/features/guest-info/data/content";

export default function GuestInfoPage() {
  return (
    <>
      <SplitHero
        title="GUEST INFORMATION"
        titleMaxRem={3.25}
        subtitleItalic="Everything You Need for a Comfortable Stay"
        description="We want your stay at Villa Azure to be as relaxing and enjoyable as possible. Here you'll find important information, house guidelines, and helpful tips to make the most of your time with us."
        image={HERO_IMAGE}
        imageAlt="Villa Azure interior"
      />
      <InfoCards />
      <DuringYourStay />
      <HelpfulLocalInfo />
      <CtaBand
        heading="We're Here to Make Your Stay Amazing"
        lightBgClass="bg-[#f2ede4]"
        copy="If you need anything during your stay, please don't hesitate to reach out. Sit back, relax and enjoy your time at Villa Azure!"
        variant="light"
      />
    </>
  );
}
