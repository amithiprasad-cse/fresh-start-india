import { useState } from "react";
import ProductCard, { type Product } from "./ProductCard";

import tomato from "@/assets/products/tomato.jpg";
import potato from "@/assets/products/potato.jpg";
import onion from "@/assets/products/onion.jpg";
import banana from "@/assets/products/banana.jpg";
import apple from "@/assets/products/apple.jpg";
import mango from "@/assets/products/mango.jpg";
import grapes from "@/assets/products/grapes.jpg";
import carrot from "@/assets/products/carrot.jpg";
import cabbage from "@/assets/products/cabbage.jpg";
import spinach from "@/assets/products/spinach.jpg";
import cauliflower from "@/assets/products/cauliflower.jpg";
import brinjal from "@/assets/products/brinjal.jpg";
import capsicum from "@/assets/products/capsicum.jpg";
import peas from "@/assets/products/peas.jpg";
import pomegranate from "@/assets/products/pomegranate.jpg";
import watermelon from "@/assets/products/watermelon.jpg";

const fruits: Product[] = [
  { name: "Tomato", image: tomato, quantity: "1 kg", marketPrice: 40, ourPrice: 25, tag: "Rescued Produce" },
  { name: "Banana", image: banana, quantity: "1 dozen", marketPrice: 50, ourPrice: 30, tag: "Rescued Produce" },
  { name: "Apple", image: apple, quantity: "1 kg", marketPrice: 180, ourPrice: 120, tag: "Rescued Produce" },
  { name: "Mango (Alphonso)", image: mango, quantity: "1 kg", marketPrice: 250, ourPrice: 160, tag: "Rescued Produce" },
  { name: "Grapes", image: grapes, quantity: "1 kg", marketPrice: 80, ourPrice: 50, tag: "Rescued Produce" },
  { name: "Pomegranate", image: pomegranate, quantity: "1 kg", marketPrice: 150, ourPrice: 95, tag: "Rescued Produce" },
  { name: "Watermelon", image: watermelon, quantity: "1 kg", marketPrice: 30, ourPrice: 18, tag: "Rescued Produce" },
];

const vegetables: Product[] = [
  { name: "Potato", image: potato, quantity: "1 kg", marketPrice: 30, ourPrice: 18, tag: "Rescued Produce" },
  { name: "Onion", image: onion, quantity: "1 kg", marketPrice: 35, ourPrice: 20, tag: "Rescued Produce" },
  { name: "Carrot", image: carrot, quantity: "1 kg", marketPrice: 45, ourPrice: 28, tag: "Rescued Produce" },
  { name: "Cabbage", image: cabbage, quantity: "1 kg", marketPrice: 25, ourPrice: 15, tag: "Rescued Produce" },
  { name: "Spinach (Palak)", image: spinach, quantity: "1 bunch", marketPrice: 30, ourPrice: 18, tag: "Rescued Produce" },
  { name: "Cauliflower", image: cauliflower, quantity: "1 kg", marketPrice: 35, ourPrice: 22, tag: "Rescued Produce" },
  { name: "Brinjal", image: brinjal, quantity: "1 kg", marketPrice: 40, ourPrice: 24, tag: "Rescued Produce" },
  { name: "Capsicum", image: capsicum, quantity: "1 kg", marketPrice: 60, ourPrice: 38, tag: "Rescued Produce" },
  { name: "Green Peas", image: peas, quantity: "1 kg", marketPrice: 80, ourPrice: 50, tag: "Rescued Produce" },
];

const ProductSection = () => {
  const [tab, setTab] = useState<"fruits" | "vegetables">("fruits");
  const items = tab === "fruits" ? fruits : vegetables;

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Rescued Produce</h2>
        <p className="text-muted-foreground text-center max-w-lg mx-auto mb-10">Fresh fruits and vegetables rescued from waste — at prices that help your wallet and the planet.</p>

        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setTab("fruits")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === "fruits" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}
          >
            🍎 Fruits
          </button>
          <button
            onClick={() => setTab("vegetables")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-colors ${tab === "vegetables" ? "bg-primary text-primary-foreground shadow-lg" : "bg-secondary text-secondary-foreground hover:bg-primary/10"}`}
          >
            🥦 Vegetables
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {items.map((p, i) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
