import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SellerForm = () => {
  const [form, setForm] = useState({ name: "", location: "", product: "", quantity: "", condition: "Fresh" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Pickup scheduled! We'll contact you shortly.");
    setForm({ name: "", location: "", product: "", quantity: "", condition: "Fresh" });
  };

  return (
    <section id="sell" className="section-padding">
      <div className="container mx-auto max-w-xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Sell Your Surplus</h2>
        <p className="text-muted-foreground text-center max-w-md mx-auto mb-10">Have extra produce? Schedule a free pickup and turn surplus into income.</p>

        <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-card p-6 md:p-8 space-y-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" placeholder="City / Village" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="product">Product Type</Label>
            <Input id="product" placeholder="e.g. Tomatoes, Bananas" value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} required className="mt-1.5" />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity (kg)</Label>
            <Input id="quantity" placeholder="e.g. 50" type="number" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} required className="mt-1.5" />
          </div>
          <div>
            <Label>Condition</Label>
            <div className="flex gap-3 mt-1.5">
              {["Fresh", "Slightly Spoiled"].map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setForm({ ...form, condition: c })}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${form.condition === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-semibold">
            Schedule Pickup
          </Button>
        </form>
      </div>
    </section>
  );
};

export default SellerForm;
