import { Upload, PackageCheck, Sprout } from "lucide-react";

const steps = [
  { icon: Upload, title: "Upload Surplus", desc: "Farmers & retailers upload their surplus produce through our platform." },
  { icon: PackageCheck, title: "Collect, Clean & Sort", desc: "We collect the produce, clean and sort by quality — fresh vs. waste." },
  { icon: Sprout, title: "Sell or Convert", desc: "Fresh produce sold at low prices. Waste converted into organic fertilizers." },
];

const HowItWorks = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-14">A simple 3-step process from farm surplus to your doorstep.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <div key={i} className="relative text-center group">
            {i < 2 && <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/30" />}
            <div className="w-24 h-24 mx-auto mb-5 rounded-2xl bg-success-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="inline-block mb-2 text-xs font-bold bg-primary text-primary-foreground rounded-full w-7 h-7 leading-7">
              {i + 1}
            </span>
            <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
