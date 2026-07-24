"use client";

import { motion } from "framer-motion";
import FloatingOrbs from "./FloatingOrbs";
import ParticleField from "./ParticleField";
import GradientText from "./GradientText";
import ProfilePhoto from "./ProfilePhoto";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <FloatingOrbs />
      <ParticleField />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <ProfilePhoto />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.215, 0.61, 0.355, 1] }}
        >
          <GradientText text="NISHANA FATHIMA" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent-purple" />
            <span className="text-sm font-mono tracking-[0.25em] uppercase text-white/50">
              Full Stack Developer
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-accent-cyan" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="max-w-md text-lg text-white/40 leading-relaxed"
          >
            Crafting modern web experiences with clean code and creative design.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-2 flex gap-4"
        >
          <button className="group relative overflow-hidden rounded-full border border-accent-purple/40 bg-accent-purple/10 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-accent-purple/70 hover:bg-accent-purple/20 hover:text-white">
            <span className="relative z-10">View Projects</span>
          </button>
          <button className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white/50 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80">
            Contact Me
          </button>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
