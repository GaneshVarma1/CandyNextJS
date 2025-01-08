import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate truffles
  "https://images.unsplash.com/photo-1514481372798-c8b2f7e6f708?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hot chocolate with marshmallows
  "https://images.unsplash.com/photo-1542843137-8791a6904d14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Assorted chocolate bars
  "https://images.unsplash.com/photo-1548741487-18d363dc4469?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate cake
  "https://images.unsplash.com/photo-1611250503393-9424f314d265?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate festival booth
  "https://images.unsplash.com/photo-1590080875795-d1150371b9f3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Artisan chocolates
  "https://images.unsplash.com/photo-1588195547116-6a514230c4ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate truffles
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hot chocolate with marshmallows
  "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Assorted chocolate bars
  "https://images.unsplash.com/photo-1542843137-144e10cc010b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate cake
  "https://plus.unsplash.com/premium_photo-1675283825474-390ea83c0703?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate truffles
  "https://images.unsplash.com/photo-1514481372798-c8b2f7e6f708?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hot chocolate with marshmallows
  "https://images.unsplash.com/photo-1542843137-8791a6904d14?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Assorted chocolate bars
  "https://images.unsplash.com/photo-1548741487-18d363dc4469?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate cake
  "https://images.unsplash.com/photo-1611250503393-9424f314d265?q=80&w=2873&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate festival booth
  "https://images.unsplash.com/photo-1590080875795-d1150371b9f3?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Artisan chocolates
  "https://images.unsplash.com/photo-1588195547116-6a514230c4ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate truffles
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Hot chocolate with marshmallows
  "https://images.unsplash.com/photo-1461009312844-e80697a81cc7?q=80&w=2888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Assorted chocolate bars
  "https://images.unsplash.com/photo-1542843137-144e10cc010b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Chocolate cake
];
const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div className="flex-shrink-0 px-2 transition-all duration-300">
    <img
      src={src}
      alt={alt}
      className="w-[400px] h-[250px] rounded-xl object-cover"
    />
  </motion.div>
);

export const Slider = () => {
  return (
    <div className="relative py-16 overflow-hidden">
      <div className="flex flex-col gap-8">
        {/* First row */}
        <div className="relative h-[250px] overflow-hidden">
          <motion.div
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex absolute gap-4"
          >
            {[...images, ...images, ...images].map((image, index) => (
              <ImageComponent
                key={`row1-${index}`}
                src={image}
                alt={`Tech ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="relative h-[250px] overflow-hidden">
          <motion.div
            animate={{
              x: [-2400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex absolute gap-4"
          >
            {[...images, ...images, ...images].map((image, index) => (
              <ImageComponent
                key={`row2-${index}`}
                src={image}
                alt={`Tech ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
