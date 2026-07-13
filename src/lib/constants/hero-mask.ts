/**
 * Feathered edge for the masked hero photo (right side, split-hero layout).
 * Uses a "smoothstep" curve (3t²-2t³) rather than a hand-picked ease: it has
 * exactly zero slope at both the start and end, so there's no kink where the
 * fade begins or where it finishes — the closest a CSS gradient can get to a
 * genuinely smooth dissolve. The box (see w-[62%] wrapper) extends slightly
 * left of the plain 60% split so the fade can begin a touch before the text
 * column ends, and the span is kept short so dark elements in the photo
 * (window frames, railings) don't linger half-visible for long.
 */
const HERO_IMAGE_MASK_GRADIENT =
  "linear-gradient(to right, " +
  "rgba(0,0,0,0) 0%, " +
  "rgba(0,0,0,0.03) 3%, " +
  "rgba(0,0,0,0.10) 6%, " +
  "rgba(0,0,0,0.22) 9%, " +
  "rgba(0,0,0,0.35) 12%, " +
  "rgba(0,0,0,0.5) 15%, " +
  "rgba(0,0,0,0.65) 18%, " +
  "rgba(0,0,0,0.78) 21%, " +
  "rgba(0,0,0,0.9) 24%, " +
  "rgba(0,0,0,0.97) 27%, " +
  "rgba(0,0,0,1) 30%)";

export const heroImageMaskStyle: React.CSSProperties = {
  maskImage: HERO_IMAGE_MASK_GRADIENT,
  WebkitMaskImage: HERO_IMAGE_MASK_GRADIENT,
};
