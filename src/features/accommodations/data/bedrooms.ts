import { villaImage } from "@/lib/constants/images";

export interface Bedroom {
  slug: string;
  name: string;
  image: string;
  description: string;
  features: string[];
}

export const BEDROOMS: Bedroom[] = [
  {
    slug: "master-bedroom",
    name: "Master Bedroom",
    image: villaImage("RDP07996.jpg"),
    description:
      "Unwind in the spacious master suite featuring a king bed, ensuite bathroom, walk-in closet, Smart TV, and direct access to the pool and garden view.",
    features: [
      "King Bed",
      "Ensuite Bathroom (Walk-in Shower)",
      "Walk-in Closet",
      "Smart TV",
      "Pool & Garden View",
      "Air Conditioning",
    ],
  },
  {
    slug: "bedroom-2",
    name: "Bedroom 2",
    image: villaImage("RDP07981.jpg"),
    description:
      "A serene space with a king bed and ensuite bathroom, perfect for relaxation after a day of sun and adventure.",
    features: [
      "King Bed",
      "Ensuite Bathroom (Walk-in Shower)",
      "Closet",
      "Smart TV",
      "Ocean View",
      "Air Conditioning",
    ],
  },
  {
    slug: "bedroom-3",
    name: "Bedroom 3",
    image: villaImage("RDP07963.jpg"),
    description:
      "Comfortable and inviting with a queen bed and ensuite bathroom, offering the perfect retreat for family or friends.",
    features: [
      "Queen Bed",
      "Ensuite Bathroom (Walk-in Shower)",
      "Closet",
      "Smart TV",
      "Ocean View",
      "Air Conditioning",
    ],
  },
];

export const ENSUITE_IMAGES = [
  villaImage("RDP07993.jpg"),
  villaImage("RDP07978.jpg"),
  villaImage("RDP07974.jpg"),
];

export const HERO_IMAGE = villaImage("RDP07963.jpg");
export const CTA_IMAGE = villaImage("RDP08072.jpg");

export const HERO_STATS = [
  {
    icon: "Users" as const,
    title: "Up to 6 Guests",
    detail: "Perfect for families, couples & friends",
  },
  {
    icon: "BedDouble" as const,
    title: "3 Bedrooms",
    detail: "Each with ensuite bathroom",
  },
  {
    icon: "Snowflake" as const,
    title: "Air Conditioned",
    detail: "Cool comfort in every room",
  },
  {
    icon: "Wifi" as const,
    title: "Free High-Speed Wi-Fi",
    detail: "Stay connected throughout your stay",
  },
];
