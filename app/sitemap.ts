import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap { const base = "https://nishana.dev"; return [{ url: base, lastModified: new Date() }, ...projects.map((project) => ({ url: `${base}/projects/${project.slug}`, lastModified: new Date() }))]; }
