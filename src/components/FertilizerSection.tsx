import ProductCard, { type Product } from "./ProductCard";
import compost from "@/assets/products/compost.jpg";
import vermicompost from "@/assets/products/vermicompost.jpg";
import liquidFertilizer from "@/assets/products/liquid-fertilizer.jpg";
import { Leaf, IndianRupee, HeartPulse, TreePine } from "lucide-react";

const fertilizers: Product[] = [
  { name: "Organic Compost", image: compost, quantity: "5 kg", marketPrice: 20, ourPrice: 12, tag: "Recycled Waste" },
  { name: "Vermicompost", image: vermicompost, quantity: "5 kg", marketPrice: 30, ourPrice: 18, tag: "Recycled Waste" },
  { name: "Liquid Bio Fertilizer", image: liquidFertilizer, quantity: "1 L", marketPrice: 120, ourPrice: 75, tag: "Recycled Waste" },
  { name: "Fruit Waste Compost", image: compost, quantity: "5 kg", marketPrice: 25, ourPrice: 15, tag: "Recycled Waste" },
  { name: "Vegetable Peel Fertilizer", image: vermicompost, quantity: "5 kg", marketPrice: 22, ourPrice: 14, tag: "Recycled Waste" },
];

const benefits = [
  { icon: Leaf, label: "100% Organic" },
  { icon: IndianRupee, label: "Low Cost" },
  { icon: HeartPulse, label: "Improves Soil Health" },
  { icon: TreePine, label: "Eco-Friendly" },
];

const FertilizerSection = () => (
  <section id="fertilizers" className="section-padding">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Organic Fertilizers</h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">Made from recycled food waste — premium quality, planet-friendly prices.</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-16">
        {fertilizers.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>

      {/* Benefits */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {benefits.map((b, i) => (
          <div key={i} className="bg-success-light rounded-2xl p-6 text-center">
            <b.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
            <p className="font-heading font-semibold text-sm">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FertilizerSection;
