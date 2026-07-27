"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Server,
  Wrench,
  Database,
  Globe,
  Smartphone,
  Layout,
  Palette,
  Terminal,
  Cloud,
  GitBranch,
  Cpu,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
    },
  }),
};

const categories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "#a855f7",
    skills: [
      { name: "HTML / CSS", icon: Layout },
      { name: "JavaScript", icon: Globe },
      { name: "TypeScript", icon: Code2 },
      { name: "React", icon: Globe },
      { name: "Next.js", icon: Server },
      { name: "Tailwind CSS", icon: Palette },
      { name: "React Native", icon: Smartphone },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "#3b82f6",
    skills: [
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Python", icon: Terminal },
      { name: "REST APIs", icon: Globe },
      { name: "MongoDB", icon: Database },
      { name: "PostgreSQL", icon: Database },
      { name: "Firebase", icon: Cloud },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "#06b6d4",
    skills: [
      { name: "Git & GitHub", icon: GitBranch },
      { name: "VS Code", icon: Terminal },
      { name: "Docker", icon: Cpu },
      { name: "AWS", icon: Cloud },
      { name: "Vercel", icon: Cloud },
      { name: "Linux", icon: Terminal },
      { name: "Figma", icon: Palette },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative flex min-h-screen overflow-hidden px-6 py-24">
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
          className="absolute bottom-40 right-10 h-[350px] w-[350px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-16">
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
            My Skills
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Technologies I
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
              Work With
            </span>
          </h3>
        </motion.div>

        {/* Categories */}
        <div className="grid w-full gap-8 md:grid-cols-3">
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              custom={catIdx + 1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
            >
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon
                    className="h-5 w-5"
                    style={{ color: category.color }}
                  />
                </div>
                <h4
                  className="text-lg font-bold"
                  style={{ color: category.color }}
                >
                  {category.title}
                </h4>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3 transition-all hover:border-white/10 hover:bg-white/[0.05]"
                  >
                    <skill.icon
                      className="h-4 w-4 flex-shrink-0"
                      style={{ color: `${category.color}90` }}
                    />
                    <span className="text-sm font-medium text-white/60">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
