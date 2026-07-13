import Image from "@/components/ui/image";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "@/lib/constants/site";
import { villaImage } from "@/lib/constants/images";

export default function NotFoundPage() {
  const exploreLinks = NAV_LINKS.filter((link) => link.href !== "/");

  return (
    <div className="bg-villa-primary relative flex min-h-[640px] flex-1 items-center justify-center overflow-hidden">
      <Image
        src={villaImage("RDP08072.jpg")}
        alt="Villa Azure"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-[rgba(9,26,48,0.72)]" />

      <div className="relative mx-auto w-full max-w-[640px] px-6 py-20 text-center text-white md:px-[30px]">
        <p className="text-villa-accent text-[12px] font-semibold tracking-[4px] uppercase">
          Error 404
        </p>
        <p className="font-script text-[36px] leading-none text-[#e6c789] md:text-[44px]">
          Wrong Turn
        </p>
        <h1 className="font-heading mt-2 text-[30px] font-semibold md:text-[40px]">
          This Page Isn&apos;t on Our Map
        </h1>
        <span className="bg-villa-accent mx-auto my-5 block h-px w-[60px]" />
        <p className="mx-auto max-w-[440px] text-[14px] leading-[1.9] font-light text-white/85">
          The page you&apos;re looking for doesn&apos;t exist or may have
          moved. Let&apos;s get you back to paradise.
        </p>

        <Link
          to="/"
          className="bg-villa-accent mt-8 inline-block rounded-[2px] px-9 py-[14px] text-[12px] font-medium tracking-[1.6px] text-white uppercase"
        >
          Back to Home
        </Link>

        <div className="mt-12 border-t border-white/15 pt-8">
          <p className="mb-4 text-[11px] font-semibold tracking-[2.5px] text-white/60 uppercase">
            Or Explore
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[13px] font-light text-white/85 underline underline-offset-4 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
