"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)",
          filter: "blur(30px)",
          transform: "scale(1.3)",
          animation: "pulse-glow 4s ease-in-out infinite",
        }}
      />

      <div
        className="relative rounded-full p-[3px]"
        style={{
          background:
            "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4, #a855f7)",
          backgroundSize: "300% 300%",
          animation: "gradient-shift 4s ease infinite",
        }}
      >
        <div className="relative h-28 w-28 overflow-hidden rounded-full bg-background sm:h-32 sm:w-32 md:h-36 md:w-36">
          <Image
            src="/WhatsApp Image 2026-07-18 at 1.03.58 PM.jpeg"
            alt="Nishana"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </motion.div>
  );
}
