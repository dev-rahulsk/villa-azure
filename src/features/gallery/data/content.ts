import { villaImage } from "@/lib/constants/images";

export const HERO_IMAGE = villaImage("RDP08072.jpg");

export interface GalleryImage {
  src: string;
  caption?: string;
}

export interface GallerySection {
  key: string;
  label: string;
  images: GalleryImage[];
}

export const GALLERY_SECTIONS: GallerySection[] = [
  {
    key: "exterior",
    label: "Exterior",
    images: [
      { src: villaImage("RDP08061.jpg") },
      { src: villaImage("RDP07949.jpg") },
      { src: villaImage("RDP08004.jpg") },
      { src: villaImage("RDP07952.jpg") },
    ],
  },
  {
    key: "living-areas",
    label: "Living Areas",
    images: [
      { src: villaImage("RDP08021.jpg") },
      { src: villaImage("RDP08018.jpg") },
      { src: villaImage("RDP08024.jpg") },
      { src: villaImage("RDP08028.jpg") },
    ],
  },
  {
    key: "bedrooms",
    label: "Bedrooms",
    images: [
      { src: villaImage("RDP07996.jpg") },
      { src: villaImage("RDP07967.jpg") },
      { src: villaImage("RDP07985.jpg") },
      { src: villaImage("RDP07997.jpg") },
    ],
  },
  {
    key: "bathrooms",
    label: "Bathrooms",
    images: [
      { src: villaImage("RDP07993.jpg") },
      { src: villaImage("RDP07978.jpg") },
      { src: villaImage("RDP08035.jpg") },
      { src: villaImage("RDP07974.jpg") },
    ],
  },
  {
    key: "pool-outdoor",
    label: "Pool & Outdoor",
    images: [
      { src: villaImage("RDP08046.jpg") },
      { src: villaImage("RDP08045.jpg") },
      { src: villaImage("RDP08039.jpg") },
      { src: villaImage("RDP08054.jpg") },
    ],
  },
  {
    key: "shared-amenities",
    label: "Shared Amenities",
    images: [
      { src: villaImage("RDP08073.jpg"), caption: "Beaches" },
      { src: villaImage("RDP08072.jpg"), caption: "Resort Pool" },
      { src: villaImage("RDP08059.jpg"), caption: "Playground" },
      { src: villaImage("RDP08061.jpg"), caption: "Villa Entrance" },
    ],
  },
];
