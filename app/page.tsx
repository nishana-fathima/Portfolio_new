import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() { return <main><Hero /><About /><Skills /><section id="experience" className="px-6 py-24 lg:px-10 lg:py-32"><div className="mx-auto max-w-6xl"><p className="eyebrow">03 / experience</p><div className="mt-10 border-t border-white/10"><div className="grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[.35fr_1fr_.8fr] sm:gap-10"><span className="font-mono text-xs uppercase tracking-[.15em] text-cyan-300">2+ years</span><div><h2 className="text-2xl tracking-[-.04em] text-white">Full Stack Developer</h2><p className="mt-2 text-sm text-white/40">Professional experience</p></div><p className="leading-6 text-white/50">Building scalable web applications, intuitive interfaces, and reliable backend systems across the MERN stack.</p></div></div></div></section><Projects /><Contact /><Footer /></main>; }
