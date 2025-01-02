"use client";

import { CartItem as CartItemType } from "@/lib/types";
import { useCartStore } from "@/lib/stores/cart-store";
import { Button } from "@/components/ui/button";
import { ProductQuantity } from "@/components/product/product-quantity";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { addItem, removeItem } = useCartStore();

  return (
    <div className="flex gap-4 py-4">
      <div className="relative h-24 w-24 overflow-hidden rounded-md">
        <img
          src={item.image}
          alt={item.name}
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-sm text-muted-foreground">
            ${item.price.toFixed(2)}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <ProductQuantity
            product={item}
            quantity={item.quantity}
            onUpdate={(quantity) => addItem({ ...item, quantity })}
          />
          <Button
            variant="ghost"
            size="sm"
            className="text-red-500 hover:text-red-600"
            onClick={() => removeItem(item.id)}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
}