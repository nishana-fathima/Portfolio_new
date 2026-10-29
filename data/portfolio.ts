import {
  Braces,
  Database,
  Globe2,
  Layout,
  Palette,
  Server,
  Terminal,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type SkillGroup = {
  title: string;
  eyebrow: string;
  icon: LucideIcon;
  accent: "violet" | "cyan" | "white";
  skills: string[];
};

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  role: string;
  tech: string[];
  features: string[];
  icon: LucideIcon;
  accent: "violet" | "cyan" | "lime";
  live?: string;
  github?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    eyebrow: "01 / interface",
    icon: Layout,
    accent: "violet",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "Backend",
    eyebrow: "02 / systems",
    icon: Server,
    accent: "cyan",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Authorization"],
  },
  {
    title: "Data & tools",
    eyebrow: "03 / workflow",
    icon: Database,
    accent: "white",
    skills: ["MongoDB", "Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

export const projects: Project[] = [
  {
    slug: "e-commerce-platform",
    number: "01",
    title: "E-Commerce Platform",
    category: "Commerce / full stack",
    description: "A full-stack commerce experience shaped around clear product discovery and dependable order workflows.",
    problem: "Customers need a faster way to browse a changing catalog while teams need a single place to manage products and orders.",
    solution: "A focused storefront paired with an admin dashboard, real-time inventory, secure Stripe payments, and a MongoDB-backed API.",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "Stripe", "MongoDB"],
    features: ["Product and order management", "Real-time inventory", "Secure payment flow", "Admin dashboard"],
    icon: Globe2,
    accent: "violet",
  },
  {
    slug: "chat-application",
    number: "02",
    title: "Chat Application",
    category: "Communication / realtime",
    description: "A realtime messaging platform designed to keep conversations immediate, legible, and easy to return to.",
    problem: "Distributed teams need messaging that communicates state clearly, from typing activity to read receipts and group context.",
    solution: "A React client connected to a Node and Socket.io service for realtime messages, presence signals, and group conversations.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Socket.io", "Express"],
    features: ["Realtime messaging", "Read receipts", "Typing indicators", "Group chat"],
    icon: Braces,
    accent: "cyan",
  },
  {
    slug: "portfolio-cms",
    number: "03",
    title: "Portfolio CMS",
    category: "Content / platform",
    description: "A content workspace for publishing portfolio work with less friction and more control over presentation.",
    problem: "A portfolio should be easy to keep current without trading away visual control or image quality.",
    solution: "A headless content system with a visual editor, image optimization, and deployment hooks connected to a Next.js frontend.",
    role: "Full Stack Developer",
    tech: ["Next.js", "PostgreSQL", "Tailwind", "Vercel"],
    features: ["Visual editing", "Image optimization", "Content management", "Deployment hooks"],
    icon: Palette,
    accent: "lime",
  },
  {
    slug: "blog-platform",
    number: "04",
    title: "Blog Platform",
    category: "Publishing / web",
    description: "A clean reading and publishing experience with a practical foundation for structured long-form content.",
    problem: "Readers should be able to move through long-form content without distractions, while authors retain a simple publishing workflow.",
    solution: "A React and Node platform with Markdown support, syntax highlighting, SEO structure, and a focused reading surface.",
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "MongoDB", "Tailwind"],
    features: ["Markdown support", "Syntax highlighting", "SEO structure", "Reading-focused UI"],
    icon: Terminal,
    accent: "violet",
  },
  {
    slug: "task-management-dashboard",
    number: "05",
    title: "Task Management Dashboard",
    category: "Productivity / dashboard",
    description: "A collaborative workspace for moving work forward with a clear visual overview of tasks and progress.",
    problem: "Teams need an actionable view of work that makes ownership, movement, and progress visible at a glance.",
    solution: "A Kanban-style dashboard with drag-and-drop workflows, collaboration, realtime updates, and analytics surfaces.",
    role: "Full Stack Developer",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    features: ["Kanban workflow", "Drag and drop", "Team collaboration", "Analytics"],
    icon: Wrench,
    accent: "cyan",
  },
];

export const experience = [
  {
    period: "2+ years",
    title: "Full Stack Developer",
    company: "Professional experience",
    description: "Building scalable web applications, intuitive interfaces, and reliable backend systems across the MERN stack.",
    technologies: ["React", "Node.js", "MongoDB", "Next.js"],
  },
];

export const contactEmail = "shananishana9@gmail.com"
