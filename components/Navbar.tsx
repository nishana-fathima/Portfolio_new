"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const links = ["about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7 }} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a href="#home" className="font-mono text-sm font-bold tracking-[.2em] text-white">NF<span className="text-violet-400">.</span></a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => <a key={link} href={`#${link}`} className="text-[11px] font-medium uppercase tracking-[.16em] text-white/45 transition hover:text-white">{link}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-cyan-200 sm:flex">Let&apos;s talk <ArrowUpRight size={14} /></a>
        <button type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="rounded-full p-2 text-white md:hidden">{open ? <X size={19} /> : <Menu size={19} />}</button>
      </nav>
      <AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-5 rounded-2xl p-5 md:hidden">{links.map((link) => <a key={link} href={`#${link}`} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[.18em] text-white/60">{link}</a>)}</motion.div>}</AnimatePresence>
    </motion.header>
  );
}
