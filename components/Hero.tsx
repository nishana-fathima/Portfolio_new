"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, GitBranch, Mail, Network } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  const x = useMotionValue(0); const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 }); const smoothY = useSpring(y, { stiffness: 80, damping: 20 });
  useEffect(() => { const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); }; window.addEventListener("mousemove", move); return () => window.removeEventListener("mousemove", move); }, [x, y]);
  return (
    <section id="home" className="relative flex min-h-[760px] items-center overflow-hidden px-6 pb-20 pt-36 sm:min-h-screen lg:px-10">
      <div className="site-grid pointer-events-none absolute inset-0" /><div className="grain pointer-events-none absolute inset-0" />
      <motion.div style={{ left: smoothX, top: smoothY }} className="pointer-events-none fixed z-0 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl md:block" />
      <div className="pointer-events-none absolute -right-28 top-32 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px]" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-end gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }} className="mb-8 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[.2em] text-cyan-300"><span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_#22d3ee]" /> available for meaningful work</motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .35 }} className="mb-5 font-mono text-xs uppercase tracking-[.2em] text-white/45">Hello, I&apos;m Nishana Fathima</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .8 }} className="max-w-4xl text-[clamp(3.4rem,9vw,8.5rem)] font-semibold leading-[.88] tracking-[-.07em] text-white">Building digital <span className="text-gradient">experiences</span> that matter.</motion.h1>
          <div className="mt-9 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-7 text-white/50">Full Stack Developer building scalable web applications, intuitive interfaces, and reliable backend systems with the MERN stack.</p>
            <div className="flex shrink-0 items-center gap-3"><a href="#projects" className="group flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">Explore work <ArrowUpRight size={16} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a><a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-sm text-white/70 transition hover:border-white/40 hover:text-white">Contact</a></div>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mb-5">
          <div className="absolute -inset-5 rounded-[2rem] border border-violet-400/20" /><div className="absolute -inset-10 rounded-[2rem] border border-white/5" />
          <div className="relative aspect-[.86] overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5"><Image src="/WhatsApp Image 2026-07-18 at 1.03.58 PM.jpeg" alt="Nishana Fathima" fill priority className="object-cover grayscale-[.15] transition duration-700 hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-transparent to-transparent" /><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between"><span className="font-mono text-[10px] uppercase tracking-[.18em] text-white/60">02 / 05<br /><span className="text-white">full stack craft</span></span><span className="rounded-full border border-white/20 bg-black/20 p-2 text-cyan-200"><ArrowUpRight size={17} /></span></div></div>
          <div className="float absolute -bottom-6 -left-8 glass rounded-xl px-4 py-3 font-mono text-[10px] uppercase tracking-[.15em] text-white/60">React <span className="text-violet-300">+</span> Node <span className="text-cyan-300">+</span> ideas</div>
        </div>
      </div>
      <div className="absolute bottom-8 left-6 flex items-center gap-5 text-white/35 lg:left-10"><span className="font-mono text-[10px] uppercase tracking-[.2em]">Scroll to explore</span><ArrowDown size={15} className="pulse-line" /><div className="hidden gap-3 sm:flex"><a href={`mailto:shananishana9@gmail.com`} aria-label="Email Nishana"><Mail size={15} /></a><a href="#contact" aria-label="Source code"><GitBranch size={15} /></a><a href="#contact" aria-label="Professional network"><Network size={15} /></a></div></div>
    </section>
  );
}
