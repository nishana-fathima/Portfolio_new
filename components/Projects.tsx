"use client";

import { motion } from "framer-motion";
import { ExternalLink, GitBranch, Layers, ShoppingBag, MessageCircle, BookOpen, LayoutDashboard } from "lucide-react";

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

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory, secure payments via Stripe, and an admin dashboard for managing products and orders.",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    icon: ShoppingBag,
    color: "#a855f7",
    live: "#",
    github: "#",
  },
  {
    title: "Chat Application",
    description:
      "Real-time messaging platform with WebSocket support, read receipts, typing indicators, and group chat functionality.",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    icon: MessageCircle,
    color: "#3b82f6",
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio CMS",
    description:
      "A headless CMS for managing portfolio content with a visual editor, image optimization, and automatic deployment hooks.",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Vercel"],
    icon: Layers,
    color: "#06b6d4",
    live: "#",
    github: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A modern blogging platform with markdown support, syntax highlighting, SEO optimization, and a clean reading experience.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    icon: BookOpen,
    color: "#a855f7",
    live: "#",
    github: "#",
  },
  {
    title: "Task Management Dashboard",
    description:
      "A Kanban-style project management tool with drag-and-drop, team collaboration, real-time updates, and analytics.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    icon: LayoutDashboard,
    color: "#3b82f6",
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative flex min-h-screen overflow-hidden px-6 py-24">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-20 -right-40 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute bottom-20 -left-40 h-[350px] w-[350px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)",
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
            Portfolio
          </h2>
          <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Featured
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
              Projects
            </span>
          </h3>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              custom={idx + 1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.06]"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: `${project.color}15` }}
              >
                <project.icon
                  className="h-6 w-6"
                  style={{ color: project.color }}
                />
              </div>

              {/* Title */}
              <h4 className="mb-2 text-lg font-bold text-white">
                {project.title}
              </h4>

              {/* Description */}
              <p className="mb-4 flex-1 text-sm leading-relaxed text-white/40">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  className="flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors hover:text-white"
                >
                  <GitBranch className="h-3.5 w-3.5" />
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
