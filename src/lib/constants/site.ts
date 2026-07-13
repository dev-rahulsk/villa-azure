export const SITE = {
  name: "Villa Azure",
  // Two-line wordmark treatment used by the Logo component: a tracked
  // small-caps line plus a script accent line underneath.
  logoPrimary: "VILLA",
  logoScript: "Azure",
  tagline: "Luxury by the Sea",
  phone: "+1 (876) 123-4567",
  email: "villaazureja@gmail.com",
  address: "Drax Hall, St. Ann, Jamaica",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/the-villa", label: "The Villa" },
  { href: "/accommodations", label: "Accommodations" },
  { href: "/amenities", label: "Amenities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/explore-st-ann", label: "Explore St Ann" },
  { href: "/guest-info", label: "Guest Info" },
  { href: "/contact", label: "Contact" },
] as const;

export const BOOK_YOUR_STAY_HREF = "/book-your-stay";

export const FOOTER_LINK_GROUPS = [
  {
    title: "Quick Links",
    links: [
      { href: "/the-villa", label: "The Villa" },
      { href: "/accommodations", label: "Accommodations" },
      { href: "/amenities", label: "Amenities" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  {
    title: "Explore",
    links: [
      { href: "/explore-st-ann", label: "Explore St Ann" },
      { href: "/guest-info", label: "Guest Info" },
      { href: "/contact", label: "Contact" },
    ],
  },
] as const;
