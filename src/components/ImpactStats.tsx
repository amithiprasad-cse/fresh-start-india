import { TrendingDown, Truck, Apple, Recycle, Scale } from "lucide-react";

const stats = [
  { icon: TrendingDown, value: "40%", label: "India wastes 40% of food annually", color: "text-destructive" },
  { icon: Truck, value: "500+", label: "kg collected per day", color: "text-primary" },
  { icon: Apple, value: "70%", label: "Fresh usable produce", color: "text-primary" },
  { icon: Recycle, value: "30%", label: "Converted to fertilizers", color: "text-accent" },
  { icon: Scale, value: "320 kg", label: "Today's food saved", color: "text-primary" },
];

const ImpactStats = () => (
  <section id="impact" className="section-padding section-alt">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Our Impact</h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">Every kilogram rescued makes a difference for farmers, families, and the planet.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((s, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-shadow animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
            <s.icon className={`h-8 w-8 mx-auto mb-3 ${s.color}`} />
            <div className={`text-3xl font-heading font-extrabold mb-1 ${s.color}`}>{s.value}</div>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ImpactStats;
