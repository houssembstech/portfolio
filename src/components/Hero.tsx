"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, Code2 } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolioData } from "../lib/data";

const roles = portfolioData.personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let ticker = setInterval(() => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setText(currentRole.substring(0, text.length - 1));
      } else {
        setText(currentRole.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, isDeleting ? 40 : 80);
    return () => clearInterval(ticker);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]" id="hero">
      


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center relative z-10 w-full">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A78BFA] blur-md opacity-30 animate-pulse"></div>
          <img 
            src={portfolioData.personalInfo.profileImage} 
            alt={portfolioData.personalInfo.name} 
            className="relative w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[#22D3EE]/50 shadow-[0_0_30px_rgba(34,211,238,0.3)] object-cover"
          />
        </motion.div>

        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full border border-[#22D3EE]/40 bg-[#0B1520]/80 px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#22D3EE] backdrop-blur-md mb-8"
        >
          <span className="flex w-2 h-2 rounded-full bg-[#22D3EE] mr-3 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
          Disponible pour opportunités
        </motion.div>
        
        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#ffffff] leading-tight mb-4"
        >
          Salut, moi c'est {portfolioData.personalInfo.name}.<br />
          <span className="bg-gradient-to-r from-[#22D3EE] via-[#818CF8] to-[#C084FC] bg-clip-text text-transparent inline-block min-h-[1.3em] pt-2">
            {text}
            <span className="inline-block w-[4px] h-[0.9em] bg-[#A78BFA] ml-2 animate-pulse align-middle"></span>
          </span>
        </motion.h1>
        
        {/* Paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg leading-relaxed text-[#94A3B8] max-w-2xl mx-auto mt-2 mb-10 font-medium"
        >
          Passionné par l’innovation digitale, je transforme des idées complexes en expériences web, mobiles et AR/VR fluides et performantes. Mon profil allie expertise technique, créativité visuelle et gestion de projets.
        </motion.p>
        
        {/* Fake Input Container & Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full max-w-xl mx-auto mb-10"
        >
          <div className="bg-[#0B0F19] rounded-2xl px-6 py-4 flex items-center justify-start border border-[#22D3EE]/30 shadow-[0_0_40px_rgba(34,211,238,0.15)] backdrop-blur-sm mb-6 w-full text-left overflow-hidden">
            <Sparkles className="text-[#22D3EE] mr-3 shrink-0" size={20} />
            <input 
              type="text" 
              readOnly 
              value="npm run dev -- Start building the future..." 
              className="w-full bg-transparent text-[#94A3B8] font-mono text-sm focus:outline-none pointer-events-none truncate"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#22D3EE] hover:bg-[#06b6d4] text-[#08090D] font-bold rounded-full px-6 py-2.5 text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] flex items-center"
            >
              <Code2 className="mr-2" size={16} /> Explorer mes projets
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#A78BFA]/40 bg-[#4c1d95]/30 hover:bg-[#4c1d95]/50 text-[#c4b5fd] rounded-full px-6 py-2.5 text-sm transition-all flex items-center backdrop-blur-md"
            >
              <Mail className="mr-2" size={16} /> Me contacter
            </button>
          </div>
        </motion.div>
        
        {/* Built With Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6"
        >
          <p className="text-[10px] tracking-widest text-[#94A3B8] font-bold uppercase mb-4">Compétences Clés</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
            {['React', 'Next.js', 'TailwindCSS', 'Node.js', 'Figma', 'UI/UX', 'AR/VR'].map(tech => (
              <span key={tech} className="bg-[#111622] border border-[#334155]/60 hover:border-[#475569] text-[#E2E8F0] transition-colors text-xs px-3 py-1.5 rounded-lg cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
