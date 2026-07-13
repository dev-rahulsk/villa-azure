import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { FOOTER_LINK_GROUPS, SITE } from "@/lib/constants/site";

export function Footer() {
  return (
    <footer className="bg-[#0a2444] text-white/80">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-9 px-6 py-14 sm:grid-cols-2 md:px-[30px] lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
        <div>
          <Logo variant="light" />
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="mb-4 text-[12px] tracking-[1.6px] text-white uppercase">
              {group.title}
            </h4>
            <div className="flex flex-col gap-2.5 text-[13px] font-light text-white/70">
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div>
          <h4 className="mb-4 text-[12px] tracking-[1.6px] text-white uppercase">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-[11px] text-[13px] font-light text-white/70">
            <div>{SITE.phone}</div>
            <div>{SITE.email}</div>
            <div>{SITE.address}</div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-[18px] text-center text-[12px] font-light text-white/50">
        © 2026 {SITE.name} Jamaica. All Rights Reserved.
      </div>
    </footer>
  );
}
