"use client";

import { Button } from "@/components/ui/button";
import { CandyProduct } from "@/lib/types";

interface ProductQuantityProps {
  product: CandyProduct;
  quantity: number;
  onUpdate: (quantity: number) => void;
}

export function ProductQuantity({ quantity, onUpdate }: ProductQuantityProps) {
  return (
    <div className="flex items-center space-x-2">
      <Button 
        size="icon" 
        variant="outline"
        onClick={() => onUpdate(-1)}
      >
        -
      </Button>
      <span className="font-semibold">{quantity}</span>
      <Button 
        size="icon"
        variant="outline"
        onClick={() => onUpdate(1)}
      >
        +
      </Button>
    </div>
  );
}