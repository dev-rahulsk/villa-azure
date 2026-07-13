import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants/site";

const MIN_VISIBLE_MS = 1400;
const FADE_MS = 500;
const SESSION_KEY = "villa-loader-shown";

function hasShownLoader() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markLoaderShown() {
  try {
    window.sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Storage can be unavailable in some browser/privacy modes. The timer
    // should still run so the loader never blocks the page.
  }
}

export function Loader() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return true;
    return !hasShownLoader();
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (!visible) return;

    markLoaderShown();

    const fadeTimer = window.setTimeout(() => {
      setFading(true);
    }, MIN_VISIBLE_MS);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, MIN_VISIBLE_MS + FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      id="villa-loader"
      className="bg-villa-bg fixed inset-0 z-[100] flex items-center justify-center overflow-hidden font-sans"
      style={{
        opacity: fading ? 0 : 1,
        transition: `opacity ${FADE_MS}ms ease`,
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-20 opacity-50 [animation:ldr-wave_3s_linear_infinite]"
        style={{
          background:
            "radial-gradient(circle at 28px 54px, transparent 22px, rgba(125,180,230,.18) 23px, transparent 24px)",
          backgroundSize: "56px 80px",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 -scale-y-100 opacity-40 [animation:ldr-wave_4s_linear_infinite]"
        style={{
          background:
            "radial-gradient(circle at 28px 54px, transparent 22px, rgba(191,154,90,.16) 23px, transparent 24px)",
          backgroundSize: "56px 80px",
        }}
      />

      <div className="text-center [animation:ldr-breathe_3.2s_ease-in-out_infinite] px-6">
        <div
          className="font-heading text-villa-primary pl-3 font-semibold [animation:ldr-in_.8s_ease_both]"
          style={{
            fontSize: "clamp(1.5rem, 8vw, 2.75rem)",
            letterSpacing: "clamp(0.25rem, 2vw, 0.75rem)",
          }}
        >
          {SITE.logoPrimary}
        </div>
        <div
          className="font-script mt-1 leading-[0.8] text-[#2f6fb0] [animation:ldr-in_.8s_ease_.12s_both]"
          style={{ fontSize: "clamp(2.25rem, 12vw, 4.25rem)" }}
        >
          {SITE.logoScript}
        </div>
        <div className="text-villa-accent mt-[18px] pl-1.5 text-[11px] tracking-[3px] uppercase sm:text-[13px] sm:tracking-[6px] [animation:ldr-in_.8s_ease_.24s_both]">
          {SITE.tagline}
        </div>
        <div className="mt-[34px] flex justify-center gap-[11px] [animation:ldr-in_.8s_ease_.36s_both]">
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_infinite]" />
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_.18s_infinite]" />
          <span className="bg-villa-accent size-[9px] rounded-full [animation:ldr-dot_1.4s_ease-in-out_.36s_infinite]" />
        </div>
      </div>
    </div>
  );
}
