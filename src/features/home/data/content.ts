import { villaImage } from "@/lib/constants/images";

export const HERO_IMAGE = villaImage("RDP08046.jpg");
export const ABOUT_IMAGE = villaImage("RDP08018.jpg");

export const HIGHLIGHTS = [
  {
    icon: "BedDouble" as const,
    title: "3 Bedrooms",
    detail: "Sleeps up to 6 Guests",
  },
  {
    icon: "ShowerHead" as const,
    title: "3.5 Bathrooms",
    detail: "Modern & Spacious",
  },
  {
    icon: "Waves" as const,
    title: "Private Plunge Pool",
    detail: "Relax & Rejuvenate",
  },
  {
    icon: "MapPin" as const,
    title: "Great Location",
    detail: "Close to Beaches & More",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Safe & Secure",
    detail: "Gated Community",
  },
];

export const GLIMPSE_IMAGES = [
  villaImage("RDP07963.jpg"),
  villaImage("RDP08046.jpg"),
  villaImage("RDP08028.jpg"),
  villaImage("RDP07996.jpg"),
  villaImage("RDP08073.jpg"),
];

export const LOCAL_COLUMNS = [
  {
    icon: "UtensilsCrossed" as const,
    title: "Dining & Local Flavors",
    detail:
      "From beachside bites to local favorites, there's something for every taste.",
    linkLabel: "View Our Guide →",
    href: "/guest-info",
  },
  {
    icon: "ShoppingBag" as const,
    title: "Conveniences Nearby",
    detail:
      "Supermarkets, services, and essentials are just minutes away for your convenience.",
    linkLabel: "Learn More →",
    href: "/guest-info",
  },
];
