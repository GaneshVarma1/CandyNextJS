"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FooterMinimal } from "@/components/FooterMinimal";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/lib/store";
import { CandyProduct } from "@/lib/types";
import { featuredCandies } from "@/lib/data";

export default function ProductPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false);
  const { addItem, items } = useCartStore();

  const product = featuredCandies.find(
    (candy) => candy.id === parseInt(params.id)
  );

  const relatedProducts = featuredCandies.filter(
    (candy) => candy.id !== parseInt(params.id)
  );

  const cartItem = items.find((item) => item.id === product?.id);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !product) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-full"
              />
            </div>
            <Badge
              variant="secondary"
              className="absolute top-4 right-4 bg-white/90"
            >
              <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
              {product.rating}
            </Badge>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-bold text-pink-500">
                ${product.price.toFixed(2)}
              </span>
              {cartItem ? (
                <div className="flex items-center space-x-4">
                  <Button
                    onClick={() => {
                      if (cartItem.quantity > 0) {
                        addItem({ ...product, quantity: -1 });
                      }
                    }}
                    variant="outline"
                  >
                    -
                  </Button>
                  <span className="font-semibold text-xl">
                    {cartItem.quantity}
                  </span>
                  <Button
                    onClick={() => addItem({ ...product, quantity: 1 })}
                    variant="outline"
                  >
                    +
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => addItem({ ...product, quantity: 1 })}
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold mb-8">Kids Also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((candy) => (
              <ProductCard key={candy.id} product={candy} />
            ))}
          </div>
        </section>
      </main>
      <FooterMinimal />
    </div>
  );
}
