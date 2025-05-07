import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PromoSection from "@/components/PromoSection";
import TopUpSection from "@/components/TopUpSection";
import VoucherSection from "@/components/VoucherSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />
        <VoucherSection />
        <TopUpSection />
        <FAQ />
        <PromoSection />
      </main>
      <Footer />
    </div>
  );
}
