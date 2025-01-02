"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CandyProduct } from "@/lib/types";
import { useCartStore } from "@/lib/stores/cart-store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductQuantity } from "./product-quantity";

interface ProductCardProps {
  product: CandyProduct;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem, items } = useCartStore();
  const router = useRouter();
  const cartItem = items.find((item) => item.id === product.id);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden bg-white/50 backdrop-blur-sm border-2 hover:border-pink-300 transition-all">
        <div className="relative">
          <div className="absolute top-2 right-2 z-10">
            <Badge variant="secondary" className="bg-white/90">
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {product.rating}
            </Badge>
          </div>
          <div className="relative h-48 overflow-hidden">
            <motion.img 
              src={product.image} 
              alt={product.name}
              className="object-cover w-full h-full"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
            />
            {isHovered && (
              <motion.div 
                className="absolute inset-0 bg-black/20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <Button 
                  variant="secondary" 
                  className="bg-white hover:bg-white/90"
                  onClick={() => router.push(`/product/${product.id}`)}
                >
                  Quick View
                </Button>
              </motion.div>
            )}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-pink-500">
              ${product.price.toFixed(2)}
            </span>
            {cartItem ? (
              <ProductQuantity 
                product={product} 
                quantity={cartItem.quantity} 
                onUpdate={(quantity) => addItem({ ...product, quantity })}
              />
            ) : (
              <Button 
                onClick={() => addItem({ ...product, quantity: 1 })}
                className="bg-pink-500 hover:bg-pink-600"
              >
                Add to Cart
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}