"use client";

import { motion } from "framer-motion";
import { Code2, Heart, Lightbulb } from "lucide-react";
import { portfolioData } from "../lib/data";

export default function About() {
  const values = [
    {
      icon: <Code2 size={24} className="text-indigo-600 dark:text-indigo-400" />,
      title: "Code Propre & Maintenable",
      description: "J'écris un code clair, documenté et structuré, respectant les principes SOLID et de clean architecture.",
    },
    {
      icon: <Heart size={24} className="text-sky-600 dark:text-sky-400" />,
      title: "Approche Orientée Utilisateur",
      description: "Chaque décision technique ou design est guidée par l'objectif d'offrir la meilleure expérience possible à l'utilisateur final.",
    },
    {
      icon: <Lightbulb size={24} className="text-emerald-600 dark:text-emerald-400" />,
      title: "Apprentissage Continu",
      description: "Toujours en veille technologique, j'explore en permanence de nouveaux outils et frameworks pour rester à la pointe.",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Mon Parcours
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                {portfolioData.personalInfo.about}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-700 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-3 bg-slate-50 dark:bg-slate-900/50 rounded-xl">
                    {value.icon}
                  </div>
                  <div className="ml-5">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
