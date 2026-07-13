import Image from "next/image";
import { Clock, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import {
  CONTACT_DETAILS,
  GET_IN_TOUCH_IMAGE,
} from "@/features/contact/data/content";

const ICONS: Record<string, LucideIcon> = {
  Phone,
  Mail,
  MapPin,
  Clock,
};

export function GetInTouch() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-[2px] bg-white p-8 shadow-[0_18px_40px_-30px_rgba(14,44,80,0.5)]">
        <h2 className="font-heading text-villa-primary text-center text-[24px] font-semibold">
          Get in Touch
        </h2>
        <span className="bg-villa-accent mx-auto my-3 block h-0.5 w-[50px]" />
        {CONTACT_DETAILS.map((item, index) => {
          const Icon = ICONS[item.icon];
          return (
            <div
              key={item.label}
              className={`flex gap-4 py-3.5 ${
                index < CONTACT_DETAILS.length - 1
                  ? "border-villa-primary/10 border-b"
                  : ""
              }`}
            >
              <div className="bg-villa-primary flex size-12 shrink-0 items-center justify-center rounded-full">
                <Icon className="size-5 text-white" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <div className="text-villa-primary text-[11px] font-semibold tracking-[0.8px] uppercase">
                  {item.label}
                </div>
                <div className="text-villa-accent text-[14px] font-medium break-words">
                  {item.value}
                </div>
                <div className="text-[11.5px] font-light text-[#6a7784]">
                  {item.detail}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-[2px] bg-[#dfeaf4]">
        <div className="relative h-[150px] w-full sm:h-[170px]">
          <Image
            src={GET_IN_TOUCH_IMAGE}
            alt="Villa Azure"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="px-7 py-6.5">
          <h3 className="font-heading text-villa-primary mb-3 text-[22px] leading-[1.1] font-semibold">
            We Can&apos;t Wait to Welcome You!
          </h3>
          <p className="text-[12.5px] leading-[1.75] font-light text-[#5c6975]">
            Your perfect escape is just a message away. Let&apos;s start
            planning your unforgettable Caribbean getaway.
          </p>
          <p className="font-script text-villa-accent mt-3 text-[22px]">
            See you in paradise!
          </p>
        </div>
      </div>
    </div>
  );
}
