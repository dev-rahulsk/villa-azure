"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants/site";
import { Logo } from "@/components/layout/logo";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const header = (
    <header className="bg-villa-bg/95 border-villa-primary/10 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="relative z-50 mx-auto flex max-w-[1280px] items-center justify-between gap-5 px-6 py-3 md:px-[30px]">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex xl:gap-[22px]">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-villa-primary text-[11.5px] tracking-[1.3px] uppercase",
                  isActive
                    ? "border-villa-accent border-b-2 pb-[3px] font-semibold"
                    : "font-medium",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
          className="text-villa-primary lg:hidden"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
    </header>
  );

  const mobileMenu = mobileOpen
    ? createPortal(
        <nav className="bg-villa-bg animate-in fade-in fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 duration-200 lg:hidden">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-villa-primary text-[16px] tracking-[2px] uppercase",
                  isActive
                    ? "border-villa-accent border-b-2 pb-1 font-semibold"
                    : "font-medium",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>,
        document.body,
      )
    : null;

  return (
    <>
      {header}
      {mobileMenu}
    </>
  );
}
