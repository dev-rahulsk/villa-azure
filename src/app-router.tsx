import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { QueryProvider } from "@/providers/query-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Loader } from "@/components/layout/loader";
import HomePage from "@/pages/HomePage";
import TheVillaPage from "@/pages/TheVillaPage";
import AccommodationsPage from "@/pages/AccommodationsPage";
import AmenitiesPage from "@/pages/AmenitiesPage";
import GalleryPage from "@/pages/GalleryPage";
import GuestInfoPage from "@/pages/GuestInfoPage";
import ContactPage from "@/pages/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

export function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-villa-bg text-[#22303d] min-h-full">
        <Loader />
        <ScrollToTop />
        <QueryProvider>
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/the-villa" element={<TheVillaPage />} />
              <Route path="/accommodations" element={<AccommodationsPage />} />
              <Route path="/amenities" element={<AmenitiesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/guest-info" element={<GuestInfoPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </QueryProvider>
      </div>
    </BrowserRouter>
  );
}
