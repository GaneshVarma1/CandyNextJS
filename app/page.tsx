"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/product-card";
import { Header } from "@/components/layout/header";
import { CandyEmoji } from "@/components/candy-emoji"; // Using your existing CandyEmoji component
import { featuredCandies } from "@/lib/data";
import { useRouter } from "next/navigation";
import { FooterMinimal } from "@/components/FooterMinimal";
import { Slider } from "@/components/Slider";

const candyEmojis = ["🍬", "🍭", "🍫", "🧁", "🍪"];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Header />
      {/* Floating Candy Animation */}
      <div className="fixed w-full h-full pointer-events-none">
        {candyEmojis.map((emoji, index) => (
          <CandyEmoji key={index} emoji={emoji} />
        ))}
      </div>

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Best{" "}
            <motion.span
              className="ml-2"
              animate={{
                rotate: [0, 15, -15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                ease: "easeInOut",
              }}
            >
              🍭
            </motion.span>{" "}
            Candy Store in the World!
          </motion.h1>

          {/* Paragraph with Animated Underline */}
          <motion.p
            className="text-xl text-gray-600 mb-8 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="relative">
              Indulge in our
              <motion.svg
                className="absolute left-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 300 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <path d="M0 15 Q150 0 300 15" stroke="#ec4899" />
              </motion.svg>
            </span>{" "}
            ✨ enchanting world of sweets & treats 🍬🍫—where every bite is pure
            magic! 🌟
          </motion.p>

          {/* Shop Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              size="lg"
              className="bg-pink-500 hover:bg-pink-600"
              onClick={() => router.push("/shop")}
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
        <Slider />
        {/* Featured Products */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Treats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCandies.map((candy) => (
              <ProductCard key={candy.id} product={candy} />
            ))}
          </div>
        </section>
      </main>
      <FooterMinimal />
    </div>
  );
}
