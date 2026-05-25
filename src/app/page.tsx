import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";
import AnimeCarousel from "@/components/AnimeCarousel";
import MemberSection from "@/components/MemberSection";
import BenefitsSection from "@/components/BenefitsSection";
import MangaSection from "@/components/MangaSection";
import PromoSection from "@/components/PromoSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <PricingSection />
      <AnimeCarousel />
      <MemberSection />
      <BenefitsSection />
      <MangaSection />
      <PromoSection />
      <FAQSection />
      <Footer />
    </main>
  );
}