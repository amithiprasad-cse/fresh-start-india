const items = [
  { name: "Tomato", market: 40, ours: 25 },
  { name: "Potato", market: 30, ours: 18 },
  { name: "Onion", market: 35, ours: 20 },
  { name: "Banana", market: 50, ours: 30 },
  { name: "Cabbage", market: 25, ours: 15 },
];

const PriceComparison = () => (
  <section className="section-padding section-alt">
    <div className="container mx-auto max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Why Buy From Us?</h2>
      <p className="text-muted-foreground text-center max-w-lg mx-auto mb-12">Same freshness, fraction of the cost. See how much you save.</p>

      <div className="space-y-5">
        {items.map((item) => {
          const pct = Math.round(((item.market - item.ours) / item.market) * 100);
          return (
            <div key={item.name} className="bg-card rounded-2xl p-5 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-semibold">{item.name}</span>
                <span className="text-xs font-bold bg-accent text-accent-foreground px-2.5 py-1 rounded-full">Save {pct}%</span>
              </div>
              <div className="flex items-center gap-4 text-sm mb-2">
                <span className="text-muted-foreground line-through">Market: ₹{item.market}/kg</span>
                <span className="font-bold text-primary">Ours: ₹{item.ours}/kg</span>
              </div>
              <div className="relative h-3 rounded-full bg-secondary overflow-hidden">
                <div className="absolute inset-y-0 left-0 bg-muted-foreground/30 rounded-full" style={{ width: "100%" }} />
                <div className="absolute inset-y-0 left-0 bg-primary rounded-full transition-all" style={{ width: `${(item.ours / item.market) * 100}%` }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default PriceComparison;
