"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.5 + i * 0.06,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export default function GradientText({ text }: { text: string }) {
  const letters = text.split("");

  return (
    <h1 className="flex flex-wrap justify-center gap-x-1">
      {letters.map((letter, i) => (
        <motion.span
          key={`${letter}-${i}`}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          className="inline-block text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            background:
              "linear-gradient(135deg, #a855f7 0%, #3b82f6 40%, #06b6d4 70%, #a855f7 100%)",
            backgroundSize: "200% 200%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: "gradient-shift 6s ease infinite",
            perspective: "500px",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}
