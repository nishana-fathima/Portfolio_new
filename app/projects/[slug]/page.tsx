import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} | Nishana Fathima`, description: project.description } : { title: "Project | Nishana Fathima" };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="min-h-screen px-6 pb-24 pt-32 lg:px-10"><div className="mx-auto max-w-5xl"><Link href="/#projects" className="inline-flex items-center gap-2 text-xs uppercase tracking-[.16em] text-white/45 transition hover:text-white"><ArrowLeft size={14} /> Back to projects</Link><div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_.9fr]"><div><p className="eyebrow">{project.number} / {project.category}</p><h1 className="mt-6 text-6xl font-semibold leading-[.9] tracking-[-.07em] text-white sm:text-8xl">{project.title}</h1><p className="mt-8 max-w-xl text-lg leading-8 text-white/55">{project.description}</p></div><div className="glass flex aspect-square items-center justify-center rounded-3xl"><project.icon size={100} strokeWidth={.7} className={project.accent === "cyan" ? "text-cyan-200/70" : project.accent === "lime" ? "text-lime-200/70" : "text-violet-200/70"} /></div></div><div className="mt-24 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-2"><Info title="The problem" text={project.problem} /><Info title="The solution" text={project.solution} /></div><div className="mt-20 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow">Build notes</p><h2 className="mt-5 text-3xl tracking-[-.05em] text-white">What went into it</h2></div><div className="grid gap-8 sm:grid-cols-2"><Info title="Role" text={project.role} /><div><h3 className="text-xs uppercase tracking-[.16em] text-white/35">Technologies</h3><div className="mt-4 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/60">{tech}</span>)}</div></div><div><h3 className="text-xs uppercase tracking-[.16em] text-white/35">Key features</h3><ul className="mt-4 space-y-3 text-sm leading-6 text-white/55">{project.features.map((feature) => <li key={feature}>↳ {feature}</li>)}</ul></div></div></div><Link href="/#contact" className="mt-20 inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm text-white transition hover:border-cyan-300 hover:text-cyan-200">Discuss a similar project <ArrowUpRight size={15} /></Link></div></main>;
}

function Info({ title, text }: { title: string; text: string }) { return <div><h2 className="text-xs uppercase tracking-[.16em] text-white/35">{title}</h2><p className="mt-4 max-w-lg text-lg leading-8 text-white/65">{text}</p></div>; }
