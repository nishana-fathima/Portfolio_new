"use client";

import { motion } from "framer-motion";

export default function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -40, 20, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 -right-20 h-[450px] w-[450px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -25, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-20 left-1/3 h-[400px] w-[400px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.35) 0%, rgba(6,182,212,0) 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -20, 15, 0],
          scale: [1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
