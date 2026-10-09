"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { portfolioData } from "../lib/data";

export default function Timeline() {
  const experiences = portfolioData.experience;
  const education = portfolioData.education;

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* En-tête de section avec le style Monorepo */}
        <div className="text-center mb-20 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full border border-[#A78BFA]/40 bg-[#4c1d95]/20 px-5 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#A78BFA] backdrop-blur-md mb-6"
          >
            Évolution & Historique
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-extrabold text-[#ffffff] mb-4"
          >
            Mon Parcours
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Colonne : Expériences Professionnelles */}
          <div>
            <div className="flex items-center mb-10">
              <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] border border-[#22D3EE]/30 flex items-center justify-center mr-5 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                <Briefcase size={24} className="text-[#22D3EE]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#ffffff]">Expériences Pro</h3>
            </div>
            
            <div className="relative border-l-2 border-[#1A1D27] ml-6 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090D] border-4 border-[#22D3EE] shadow-[0_0_15px_rgba(34,211,238,0.6)]"></span>
                  
                  <div className="bg-[#0B0F19] backdrop-blur-sm p-7 rounded-2xl border border-[#1A1D27] hover:border-[#22D3EE]/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] group">
                    <div className="inline-flex items-center text-[#22D3EE] bg-[#22D3EE]/10 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#22D3EE]/20">
                       <Calendar size={14} className="mr-2" /> {exp.date}
                    </div>
                    <h4 className="text-xl font-bold text-[#ffffff] mb-1 group-hover:text-[#22D3EE] transition-colors">{exp.title}</h4>
                    <h5 className="text-md font-medium text-[#94A3B8] mb-5">{exp.organization}</h5>
                    <ul className="space-y-3 text-[#94A3B8] text-sm">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block mt-1 mr-3 text-[#22D3EE] opacity-70 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Colonne : Parcours Académique */}
          <div>
            <div className="flex items-center mb-10 mt-8 lg:mt-0">
              <div className="w-12 h-12 rounded-2xl bg-[#0B0F19] border border-[#A78BFA]/30 flex items-center justify-center mr-5 shadow-[0_0_20px_rgba(167,139,250,0.15)]">
                <GraduationCap size={24} className="text-[#A78BFA]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#ffffff]">Académique</h3>
            </div>
            
            <div className="relative border-l-2 border-[#1A1D27] ml-6 space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-10"
                >
                  <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#08090D] border-4 border-[#A78BFA] shadow-[0_0_15px_rgba(167,139,250,0.6)]"></span>
                  
                  <div className="bg-[#0B0F19] backdrop-blur-sm p-7 rounded-2xl border border-[#1A1D27] hover:border-[#A78BFA]/50 transition-colors shadow-lg hover:shadow-[0_0_30px_rgba(167,139,250,0.1)] group">
                    <div className="inline-flex items-center text-[#A78BFA] bg-[#A78BFA]/10 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-[#A78BFA]/20">
                       <Calendar size={14} className="mr-2" /> {edu.date}
                    </div>
                    <h4 className="text-xl font-bold text-[#ffffff] mb-1 group-hover:text-[#A78BFA] transition-colors">{edu.title}</h4>
                    <h5 className="text-md font-medium text-[#94A3B8] mb-5">{edu.organization}</h5>
                    <ul className="space-y-3 text-[#94A3B8] text-sm">
                      {edu.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block mt-1 mr-3 text-[#A78BFA] opacity-70 flex-shrink-0">▹</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
