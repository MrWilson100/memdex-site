import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import NEARSection from "@/components/NEARSection";
import SolutionSection from "@/components/SolutionSection";
import AboutSection from "@/components/AboutSection";
import TransparencyBanner from "@/components/TransparencyBanner";
import RiskDisclosure from "@/components/RiskDisclosure";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <SolutionSection />
      <FeaturesGrid />
      <AboutSection />
      <NEARSection />
      <TransparencyBanner />
      <RiskDisclosure />
      <Footer />
    </main>
  );
}
