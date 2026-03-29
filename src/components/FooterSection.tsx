import { Leaf, Mail, Phone, MapPin } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground section-padding">
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
            <Leaf className="h-6 w-6" />
            FarmSave
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Turning waste into value. We rescue surplus produce from farms and markets, sell fresh food at low prices, and convert waste into organic fertilizers.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#products" className="hover:text-primary-foreground transition-colors">Products</a></li>
            <li><a href="#fertilizers" className="hover:text-primary-foreground transition-colors">Fertilizers</a></li>
            <li><a href="#impact" className="hover:text-primary-foreground transition-colors">Our Impact</a></li>
            <li><a href="#sell" className="hover:text-primary-foreground transition-colors">Sell Surplus</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@farmsave.in</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
        © 2026 FarmSave. All rights reserved. 🌱 Turning waste into value.
      </div>
    </div>
  </footer>
);

export default FooterSection;
