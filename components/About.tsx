"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-20 -left-40 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-20 -right-40 h-[350px] w-[350px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-16 lg:flex-row lg:items-start lg:gap-20">
        {/* Left — Photo */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-shrink-0 flex-col items-center gap-6"
        >
          <div className="relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(168,85,247,0.25) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)",
                filter: "blur(40px)",
                transform: "scale(1.2)",
                animation: "pulse-glow 4s ease-in-out infinite",
              }}
            />
            {/* Gradient border */}
            <div
              className="relative rounded-2xl p-[3px]"
              style={{
                background:
                  "linear-gradient(135deg, #a855f7, #3b82f6, #06b6d4, #a855f7)",
                backgroundSize: "300% 300%",
                animation: "gradient-shift 4s ease infinite",
              }}
            >
              <div className="relative h-72 w-56 overflow-hidden rounded-2xl bg-background sm:h-80 sm:w-64">
                <Image
                  src="/WhatsApp Image 2026-07-18 at 1.03.58 PM.jpeg"
                  alt="Nishana"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/70"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </motion.div>

        {/* Right — Content */}
        <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left">
          {/* Heading */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-3 lg:items-start"
          >
            <span className="h-px w-16 bg-gradient-to-r from-accent-purple to-accent-cyan" />
            <h2 className="text-sm font-mono tracking-[0.25em] uppercase text-white/50">
              About Me
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Turning Ideas Into
              <br />
              <span
                className="inline-block"
                style={{
                  background:
                    "linear-gradient(135deg, #a855f7 0%, #3b82f6 40%, #06b6d4 70%, #a855f7 100%)",
                  backgroundSize: "200% 200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "gradient-shift 6s ease infinite",
                }}
              >
                Digital Reality
              </span>
            </h3>

            <p className="max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
              I&apos;m a passionate Full Stack Developer with a love for creating
              beautiful, functional, and user-centered digital experiences. With
              expertise spanning both frontend and backend technologies, I bring
              ideas to life through clean code and thoughtful design.
            </p>

            <p className="max-w-lg text-base leading-relaxed text-white/45 sm:text-lg">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, and constantly
              pushing the boundaries of what&apos;s possible on the web. I believe
              in continuous learning and sharing knowledge with the community.
            </p>
          </motion.div>

          {/* Info cards */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid w-full max-w-lg grid-cols-2 gap-4"
          >
            {[
              { label: "Name", value: "Nishana Fathima" },
              { label: "Role", value: "Full Stack Developer" },
              { label: "Location", value: "India" },
              { label: "Focus", value: "Web & App Development" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
              >
                <span className="block text-xs font-mono tracking-wider uppercase text-accent-purple">
                  {item.label}
                </span>
                <span className="mt-1 block text-sm font-medium text-white/70">
                  {item.value}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            <a
              href="#contact"
              className="rounded-full border border-accent-purple/40 bg-accent-purple/10 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-accent-purple/70 hover:bg-accent-purple/20 hover:text-white"
            >
              Get In Touch
            </a>
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white/50 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10 hover:text-white/80"
            >
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
