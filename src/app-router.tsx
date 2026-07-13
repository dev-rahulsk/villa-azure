import { QueryProvider } from "@/providers/query-provider";
import type { ComponentType } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Loader } from "@/components/layout/loader";
import HomePage from "@/app/page";
import TheVillaPage from "@/app/the-villa/page";
import AccommodationsPage from "@/app/accommodations/page";
import AmenitiesPage from "@/app/amenities/page";
import GalleryPage from "@/app/gallery/page";
import GuestInfoPage from "@/app/guest-info/page";
import ContactPage from "@/app/contact/page";
import NotFound from "@/app/not-found";
import { usePathname } from "next/navigation";

const routes: Record<string, ComponentType> = {
  "/": HomePage,
  "/the-villa": TheVillaPage,
  "/accommodations": AccommodationsPage,
  "/amenities": AmenitiesPage,
  "/gallery": GalleryPage,
  "/guest-info": GuestInfoPage,
  "/contact": ContactPage,
};

export function App() {
  const pathname = usePathname();
  const Page = routes[pathname] ?? NotFound;

  return (
    <div className="font-sans bg-villa-bg text-[#22303d] min-h-full">
      <Loader />
      <QueryProvider>
        <Header />
        <main className="flex-1">
          <Page />
        </main>
        <Footer />
      </QueryProvider>
    </div>
  );
}
