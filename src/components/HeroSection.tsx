import heroImg from "@/assets/hero-market.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Indian fruit and vegetable market" className="absolute inset-0 w-full h-full object-cover" width={1920} height={800} />
    <div className="absolute inset-0 bg-gradient-to-r from-[hsl(150,30%,10%,0.82)] to-[hsl(145,40%,15%,0.6)]" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-medium backdrop-blur-sm border border-primary-foreground/20">
        🌱 Reducing Food Waste Across India
      </span>
      <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-4">
        Save Food,<br />Support Farmers
      </h1>
      <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mx-auto mb-8">
        Reducing food waste and creating sustainable value — fresh rescued produce at unbeatable prices.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-xl font-semibold shadow-lg">
          Buy Now
        </Button>
        <Button size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 py-6 rounded-xl font-semibold backdrop-blur-sm">
          Sell Surplus
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
