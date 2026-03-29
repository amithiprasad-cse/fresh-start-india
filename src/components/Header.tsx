import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    en: { products: "Products", fertilizers: "Fertilizers", sell: "Sell Surplus", impact: "Impact" },
    hi: { products: "उत्पाद", fertilizers: "उर्वरक", sell: "अधिशेष बेचें", impact: "प्रभाव" },
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-2 font-heading font-bold text-xl text-primary">
          <Leaf className="h-6 w-6" />
          <span>FarmSave</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#products" className="text-foreground/70 hover:text-primary transition-colors">{t[lang].products}</a>
          <a href="#fertilizers" className="text-foreground/70 hover:text-primary transition-colors">{t[lang].fertilizers}</a>
          <a href="#impact" className="text-foreground/70 hover:text-primary transition-colors">{t[lang].impact}</a>
          <a href="#sell" className="text-foreground/70 hover:text-primary transition-colors">{t[lang].sell}</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="text-xs font-medium px-2.5 py-1.5 rounded-full border bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            {lang === "en" ? "🇮🇳 हिंदी" : "🇬🇧 English"}
          </button>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t bg-card px-4 py-4 flex flex-col gap-3 text-sm font-medium">
          <a href="#products" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-primary">{t[lang].products}</a>
          <a href="#fertilizers" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-primary">{t[lang].fertilizers}</a>
          <a href="#impact" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-primary">{t[lang].impact}</a>
          <a href="#sell" onClick={() => setMenuOpen(false)} className="text-foreground/70 hover:text-primary">{t[lang].sell}</a>
        </nav>
      )}
    </header>
  );
};

export default Header;
