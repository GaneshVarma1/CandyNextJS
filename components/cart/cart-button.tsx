"use client";

import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cart-store";
import { CartDrawer } from "./cart-drawer";

export function CartButton() {
  const [open, setOpen] = useState(false);
  const { getTotalItems, getTotalPrice } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  return (
    <>
      <Button 
        variant="outline" 
        className="relative"
        onClick={() => setOpen(true)}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        <span>
          Cart ({totalItems}) ${totalPrice.toFixed(2)}
        </span>
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {totalItems}
          </span>
        )}
      </Button>
      <CartDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}