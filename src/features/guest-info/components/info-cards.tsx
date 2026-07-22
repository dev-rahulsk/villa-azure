import { CalendarClock, Check, Map, MapPin, Phone } from "lucide-react";
import { GETTING_HERE } from "@/features/guest-info/data/content";

function IconBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-villa-primary mx-auto mb-4.5 flex size-14 items-center justify-center rounded-full">
      {children}
    </div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-villa-primary mb-4.5 text-center text-[13px] font-semibold tracking-[1px] uppercase">
      {children}
    </h3>
  );
}

export function InfoCards() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pt-12 pb-5 md:px-[30px]">
      <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-[2px] bg-white p-8 shadow-[0_16px_36px_-28px_rgba(14,44,80,0.5)]">
          <IconBadge>
            <CalendarClock className="size-[26px] text-white" strokeWidth={1.5} />
          </IconBadge>
          <CardTitle>Check-In / Check-Out</CardTitle>
          <div className="text-villa-primary text-[12px] font-semibold tracking-[1px] uppercase">
            Check-In
          </div>
          <div className="text-villa-accent mb-3 text-[16px] font-medium">3:00 PM</div>
          <div className="text-villa-primary text-[12px] font-semibold tracking-[1px] uppercase">
            Check-Out
          </div>
          <div className="text-villa-accent mb-3.5 text-[16px] font-medium">11:00 AM</div>
          <p className="text-[12px] leading-[1.7] font-light text-[#6a7784]">
            Early check-in or late check-out may be available upon request,
            subject to availability.
          </p>
        </div>

        <div className="rounded-[2px] bg-white p-8 shadow-[0_16px_36px_-28px_rgba(14,44,80,0.5)]">
          <IconBadge>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={1.5}>
              <path d="M3 11l9-7 9 7M5 10v9h14v-9M10 19v-5h4v5" />
            </svg>
          </IconBadge>
          <CardTitle>House Rules</CardTitle>
          <div className="flex flex-col gap-2 text-[12.5px] text-[#33404c]">
            {[
              "Maximum 6 guests allowed",
              "No smoking or vaping inside the villa",
              "No parties or events",
              "Quiet hours: 10:00 PM – 8:00 AM",
              "Not suitable for pets",
              "Respect neighbors & community",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-2">
                <Check className="text-villa-accent mt-0.5 size-3.5 shrink-0" strokeWidth={2.5} />
                {rule}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2px] bg-white p-8 text-center shadow-[0_16px_36px_-28px_rgba(14,44,80,0.5)]">
          <IconBadge>
            <MapPin className="size-[26px] text-white" strokeWidth={1.5} />
          </IconBadge>
          <CardTitle>Getting Here</CardTitle>
          <p className="text-villa-accent -mt-2.5 mb-4.5 text-[13px] font-medium">
            Find Villa Azure with ease.
          </p>
          <div className="text-villa-primary mb-1.5 text-[11px] font-semibold tracking-[1px] uppercase">
            Address
          </div>
          <p className="mb-4.5 text-[12.5px] leading-[1.6] font-light text-[#33404c]">
            {GETTING_HERE.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <a
            href={GETTING_HERE.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-villa-primary text-villa-primary mb-5 inline-flex w-full items-center justify-center gap-2 rounded-[2px] border px-4 py-2.5 text-[11px] font-semibold tracking-[1.2px] uppercase"
          >
            <Map className="size-4" strokeWidth={1.5} />
            Interactive Map
          </a>
          <div className="text-villa-primary mb-2.5 text-left text-[11px] font-semibold tracking-[1px] uppercase">
            Nearby Airports
          </div>
          <div className="flex flex-col gap-2.5 text-left text-[12px] leading-[1.6] font-light text-[#6a7784]">
            {GETTING_HERE.airports.map((airport) => (
              <div key={airport.name}>
                <span className="font-semibold text-[#33404c]">{airport.name}: </span>
                {airport.detail}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2px] bg-white p-8 shadow-[0_16px_36px_-28px_rgba(14,44,80,0.5)]">
          <IconBadge>
            <Phone className="size-[26px] text-white" strokeWidth={1.5} />
          </IconBadge>
          <CardTitle>Emergency Contacts</CardTitle>
          <div className="flex flex-col gap-2.5 text-[12.5px] text-[#33404c]">
            <div>
              <div className="text-villa-primary text-[11px] font-semibold tracking-[0.5px] uppercase">
                Police
              </div>
              <div className="text-villa-accent font-medium">119</div>
            </div>
            <div>
              <div className="text-villa-primary text-[11px] font-semibold tracking-[0.5px] uppercase">
                Fire / Ambulance
              </div>
              <div className="text-villa-accent font-medium">110</div>
            </div>
            <div>
              <div className="text-villa-primary text-[11px] font-semibold tracking-[0.5px] uppercase">
                Hospital
              </div>
              <div className="text-villa-accent mb-1 font-medium">
                St. Ann&apos;s Bay Regional Hospital
              </div>
              <div className="text-villa-accent font-medium">+1 (876) 972 0150</div>
              <div className="text-villa-accent font-medium">+1 (876) 972 0151</div>
              <div className="text-villa-accent font-medium">+1 (876) 972 0152</div>
            </div>
            <div>
              <div className="text-villa-primary text-[11px] font-semibold tracking-[0.5px] uppercase">
                Property Manager
              </div>
              <div className="text-villa-accent font-medium">+1 (658) 218 2181</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
