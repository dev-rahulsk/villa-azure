function exploreImage(filename: string) {
  return `/images/explore-st-ann/${filename}`;
}

export const HERO_IMAGE = exploreImage("hero.jpg");
export const DINING_IMAGE = exploreImage("dining.jpg");
export const ATTRACTIONS_IMAGE = exploreImage("attractions.jpg");

export const HERO_DESCRIPTION =
  "From breathtaking beaches and natural wonders to local flavors and rich culture, St. Ann has something for everyone. Let us be your guide to unforgettable experiences just minutes from Villa Azure.";

export const DINING = {
  intro:
    "Whether you're craving authentic Jamaican flavors, fresh seafood, or international cuisine, you'll find an excellent selection of restaurants just minutes from Villa Azure.",
  items: [
    {
      name: "Scotchies",
      detail: "Famous for authentic Jamaican jerk chicken and pork.",
    },
    {
      name: "Bamboo Blu",
      detail: "Beachfront dining with spectacular ocean views.",
    },
    {
      name: "Uncorked",
      detail: "Wine bar and bistro offering international dishes and fine wines.",
    },
    {
      name: "Plantation Smokehouse",
      detail: "Caribbean-inspired barbecue, seafood, and live entertainment.",
    },
    {
      name: "CrisNic Lobster Deck",
      detail: "Fresh lobster and authentic Jamaican seafood in a rustic beachfront setting.",
    },
    {
      name: "Miss T's Kitchen",
      detail: "Traditional Jamaican home-style cooking in Ocho Rios.",
    },
    {
      name: "Papi Chulo's",
      detail: "A casual, vibrant spot serving Mexican-inspired favorites, cocktails, and flavorful comfort food.",
    },
    {
      name: "Golden Phoenix",
      detail: "Elegant dining featuring authentic Chinese cuisine with a modern touch.",
    },
    {
      name: "Bettino's Al Mare",
      detail: "Upscale Italian cuisine in an elegant setting.",
    },
  ],
};

export const ATTRACTIONS = {
  intro:
    "Explore the best of St. Ann with unforgettable adventures, breathtaking scenery, and world-famous natural attractions—all just a short drive from Villa Azure.",
  items: [
    {
      name: "Zipline Adventures",
      detail: "Soar through the rainforest canopy and take in stunning panoramic views.",
    },
    {
      name: "ATV Off-Road Tours",
      detail: "Ride through rugged trails, lush hills, and scenic countryside.",
    },
    {
      name: "Beautiful Beaches",
      detail: "Relax on pristine shores with crystal-clear Caribbean waters.",
    },
    {
      name: "Dunn's River Falls",
      detail: "Iconic waterfall climbing adventure.",
    },
    {
      name: "Blue Hole",
      detail: "Stunning natural swimming spot and cliff jumping.",
    },
    {
      name: "Mystic Mountain",
      detail: "Bobsled rides, sky explorer chairlift, and amazing rainforest views.",
    },
    {
      name: "Chukka Caribbean Adventures",
      detail: "Exciting activities including ziplining, horseback riding, and ocean adventures.",
    },
    {
      name: "Green Grotto Caves",
      detail: "Fascinating limestone caves rich in history and natural beauty.",
    },
    {
      name: "Sandals Golf & Country Club",
      detail: "Championship golf course with spectacular coastal views.",
    },
  ],
};
