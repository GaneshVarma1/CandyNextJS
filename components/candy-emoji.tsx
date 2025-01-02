"use client";

import { motion } from "framer-motion";

interface CandyEmojiProps {
  emoji: string;
}

export function CandyEmoji({ emoji }: CandyEmojiProps) {
  return (
    <motion.div
      className="absolute text-4xl"
      initial={{ 
        x: Math.random() * window.innerWidth,
        y: -50 
      }}
      animate={{
        y: window.innerHeight + 50,
        x: Math.random() * window.innerWidth,
        rotate: 360
      }}
      transition={{
        duration: Math.random() * 5 + 5,
        repeat: Infinity,
        ease: "linear",
        delay: Math.random() * 5
      }}
    >
      {emoji}
    </motion.div>
  );
}