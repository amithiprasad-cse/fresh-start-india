import { Star } from "lucide-react";

const testimonials = [
  { name: "Ramesh Kumar", role: "Farmer, UP", text: "FarmSave helped me sell produce that would have rotted. My income increased by 30%!", stars: 5 },
  { name: "Priya Sharma", role: "Customer, Delhi", text: "Fresh vegetables at half the price! I save ₹500 every week on groceries.", stars: 5 },
  { name: "Sunil Patil", role: "Retailer, Mumbai", text: "Instead of dumping unsold stock, I now earn from it. Great initiative!", stars: 5 },
];

const Testimonials = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Trusted by Thousands</h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">See what farmers and customers are saying.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card rounded-2xl p-6 shadow-card">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.stars }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
