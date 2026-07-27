"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "nishana@example.com",
    color: "#a855f7",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    color: "#3b82f6",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    color: "#06b6d4",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen overflow-hidden px-6 py-24">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-40 -left-40 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 h-[350px] w-[350px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-16">
        {/* Section Header */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="h-px w-16 bg-gradient-to-r from-accent-purple to-accent-cyan" />
          <h2 className="text-sm font-mono tracking-[0.25em] uppercase text-white/50">
            Get In Touch
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Let&apos;s
            <span
              className="mx-2 inline-block"
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
              Connect
            </span>
          </h3>
        </motion.div>

        <div className="grid w-full gap-10 lg:grid-cols-2">
          {/* Left — Contact Info */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <p className="max-w-md text-base leading-relaxed text-white/40 lg:text-lg">
              Have a project in mind or just want to chat? Feel free to reach
              out. I&apos;m always open to discussing new projects and
              opportunities.
            </p>

            <div className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <item.icon
                      className="h-5 w-5"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <span className="block text-xs font-mono tracking-wider uppercase text-white/40">
                      {item.label}
                    </span>
                    <span className="block text-sm font-medium text-white/70">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <form className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-mono tracking-wider uppercase text-white/40"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-accent-purple/50 focus:bg-white/[0.07]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-mono tracking-wider uppercase text-white/40"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-accent-purple/50 focus:bg-white/[0.07]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="subject"
                  className="text-xs font-mono tracking-wider uppercase text-white/40"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-accent-purple/50 focus:bg-white/[0.07]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono tracking-wider uppercase text-white/40"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/20 outline-none transition-all focus:border-accent-purple/50 focus:bg-white/[0.07]"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full border border-accent-purple/40 bg-accent-purple/10 px-8 py-3 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:border-accent-purple/70 hover:bg-accent-purple/20 hover:text-white"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
