"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/stores/cart-store";

export default function SuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { items, removeItem } = useCartStore();

  useEffect(() => {
    // Clear cart after successful payment
    items.forEach(item => removeItem(item.id));
  }, [items, removeItem]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank you for your order!</h1>
        <p className="text-gray-600 mb-8">
          Your payment was successful and your order is being processed.
        </p>
        <Button
          onClick={() => router.push("/")}
          className="bg-pink-500 hover:bg-pink-600"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );
}