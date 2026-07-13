import { villaImage } from "@/lib/constants/images";

export const HERO_IMAGE = villaImage("RDP08004.jpg");
export const LOCAL_INFO_IMAGE = villaImage("RDP08073.jpg");

export const DURING_STAY = [
  {
    icon: "Lightbulb" as const,
    title: "Security",
    detail: "The villa is in a secure, gated community with 24/7 security.",
  },
  {
    icon: "Zap" as const,
    title: "Energy Saving",
    detail: "Please turn off lights and AC when not in use.",
  },
  {
    icon: "Droplet" as const,
    title: "Water Conservation",
    detail: "Jamaica is precious! Please help us conserve water.",
  },
  {
    icon: "Trash2" as const,
    title: "Trash Disposal",
    detail: "Place all trash in bags and use the bins provided outside.",
  },
  {
    icon: "Waves" as const,
    title: "Pool Safety",
    detail: "No diving. Children must be supervised at all times around the pool.",
  },
  {
    icon: "LifeBuoy" as const,
    title: "Need Something?",
    detail: "We're here to help! Don't hesitate to reach out with any questions.",
  },
];

export const LOCAL_INFO_ITEMS = [
  {
    icon: "UtensilsCrossed" as const,
    title: "Dining",
    detail:
      "From beachfront restaurants to local favorites, we've got recommendations for every taste.",
  },
  {
    icon: "Waves" as const,
    title: "Beaches",
    detail: "Discover beautiful beaches just minutes away.",
  },
  {
    icon: "ShoppingBag" as const,
    title: "Groceries",
    detail: "Supermarkets and local shops are nearby for all your essentials.",
  },
  {
    icon: "CarFront" as const,
    title: "Transportation",
    detail:
      "Taxis, car rentals, and tour services can be arranged to make exploring easy.",
  },
];
