import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ImpactStats from "@/components/ImpactStats";
import HowItWorks from "@/components/HowItWorks";
import ProductSection from "@/components/ProductSection";
import PriceComparison from "@/components/PriceComparison";
import FertilizerSection from "@/components/FertilizerSection";
import WasteToValue from "@/components/WasteToValue";
import SellerForm from "@/components/SellerForm";
import Testimonials from "@/components/Testimonials";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <ImpactStats />
    <HowItWorks />
    <ProductSection />
    <PriceComparison />
    <FertilizerSection />
    <WasteToValue />
    <SellerForm />
    <Testimonials />
    <FooterSection />
  </div>
);

export default Index;
