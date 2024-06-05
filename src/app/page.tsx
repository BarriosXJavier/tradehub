"use client";

import Homenav from "@/ui/dashboard/homenav";
import Footer from "@/ui/dashboard/footer";
import HeroSection from "@/ui/dashboard/hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Homenav />
      <HeroSection />
      <Footer />
    </div>
  );
}
