import { ArrowRight } from "lucide-react";

const steps = ["🗑️ Waste", "🚚 Collection", "⚙️ Processing", "🌱 Fertilizer", "👨‍🌾 Farmers"];

const WasteToValue = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">From Waste to Value</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
        Spoiled fruits and vegetables are converted into eco-friendly organic fertilizers, reducing waste and supporting sustainable farming.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-2 md:gap-3">
            <div className="bg-card rounded-2xl px-5 py-4 shadow-card font-heading font-semibold text-sm md:text-base whitespace-nowrap">
              {step}
            </div>
            {i < steps.length - 1 && <ArrowRight className="h-5 w-5 text-primary shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WasteToValue;
