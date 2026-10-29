import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nishana Fathima | Full Stack Developer",
  description: "Portfolio of Nishana Fathima, a Full Stack Developer building thoughtful digital experiences with the MERN stack.",
  openGraph: { title: "Nishana Fathima | Full Stack Developer", description: "Full Stack Developer building thoughtful digital experiences.", type: "website" },
  twitter: { card: "summary_large_image", title: "Nishana Fathima | Full Stack Developer", description: "Full Stack Developer building thoughtful digital experiences." },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
