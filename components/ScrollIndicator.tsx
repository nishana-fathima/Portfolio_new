"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div
        className="flex flex-col items-center gap-2 text-white/40"
        style={{ animation: "bounce-down 2s infinite" }}
      >
        <span className="text-xs tracking-[0.3em] uppercase font-mono">
          Scroll
        </span>
        <ChevronDown className="h-5 w-5" />
      </div>
    </motion.div>
  );
}
