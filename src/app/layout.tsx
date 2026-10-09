import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Développeur Full-Stack",
  description: "Portfolio professionnel de développeur full-stack, UI/UX enthusiast. Découvrez mes projets, compétences et parcours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased text-slate-800 bg-slate-50 min-h-screen flex flex-col relative">
        
        {/* Global Animated Multi-layered Background */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* Subtle Ambient Gradient */}
          <div className="absolute inset-0 bg-[#0A0E17]"></div>
          
          {/* Floating Animated Orbs */}
          <div className="absolute -left-[10%] top-[-10%] w-[50%] max-w-[600px] aspect-square bg-[#22D3EE]/10 rounded-full blur-[100px] animate-blob"></div>
          <div className="absolute top-[30%] -right-[10%] w-[50%] max-w-[600px] aspect-square bg-[#A78BFA]/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[10%] left-[20%] w-[50%] max-w-[600px] aspect-square bg-[#818CF8]/10 rounded-full blur-[100px] animate-blob animation-delay-4000"></div>
          
          {/* Infinite Scrolling Perspective Grid */}
          <div className="absolute inset-x-0 h-[200%] w-full animate-grid-pan opacity-60">
            <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
          </div>
        </div>
        
        <Navbar />
        <main className="flex-1 w-full relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
