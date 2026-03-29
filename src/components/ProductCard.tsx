import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  name: string;
  image: string;
  quantity: string;
  marketPrice: number;
  ourPrice: number;
  tag: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const savings = Math.round(((product.marketPrice - product.ourPrice) / product.marketPrice) * 100);
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" width={512} height={512} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-semibold">{product.tag}</Badge>
        {savings > 0 && (
          <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground text-[10px] font-bold">Save {savings}%</Badge>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-heading font-semibold text-base mb-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground mb-2">{product.quantity}</p>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-muted-foreground line-through">₹{product.marketPrice}/{product.quantity.includes("dozen") ? "dozen" : "kg"}</span>
          <span className="text-lg font-heading font-bold text-primary">₹{product.ourPrice}/{product.quantity.includes("dozen") ? "dozen" : "kg"}</span>
        </div>
        <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl gap-2 text-xs font-semibold">
          <ShoppingCart className="h-3.5 w-3.5" /> Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
