"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code2, X } from "lucide-react";
import Image from "next/image";

import { portfolioData } from "../lib/data";

const categories = ["Tous", "Web", "Mobile", "UI/UX", "Backend"];

export default function Projects() {
  const projects = portfolioData.projects;
  const [filter, setFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = filter === "Tous" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Mes Réalisations
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? "bg-indigo-600 text-[#ffffff] shadow-md"
                    : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-indigo-600 hover:text-indigo-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-700 cursor-pointer hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div onClick={(e) => e.stopPropagation()} className="flex items-center space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <Code2 size={16} className="mr-1" /> Code
                      </a>
                    )}
                    {project.demoLink && (
                      <a href={project.demoLink} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                        <ExternalLink size={16} className="mr-1" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="relative w-[96vw] max-w-7xl bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[96vh] overflow-y-auto flex flex-col"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 text-[#ffffff] rounded-full z-20 transition-colors"
                aria-label="Fermer"
              >
                <X size={20} />
              </button>
              
              <div className="w-full shrink-0 border-b border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded-t-2xl overflow-hidden shadow-inner">
                <div className="w-full h-8 bg-slate-200 dark:bg-slate-800 flex items-center px-4 space-x-2 z-10 border-b border-slate-300 dark:border-slate-700">
                  <div className="w-3 h-3 rounded-full bg-red-400 shrink-0"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400 shrink-0"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0"></div>
                </div>
                
                {selectedProject.iframeSrc ? (
                  <div className="relative h-[65vh] min-h-[400px] w-full bg-white dark:bg-slate-800">
                    <iframe 
                      src={selectedProject.iframeSrc} 
                      title={selectedProject.title}
                      className="w-full h-full"
                      style={{ border: "none" }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="relative h-[50vh] min-h-[300px] w-full bg-white dark:bg-slate-800">
                    <Image 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      fill 
                      sizes="(max-width: 1200px) 100vw, 800px"
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-4">
                  {selectedProject.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag: string) => (
                    <span key={tag} className="text-sm font-semibold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">À propos du projet</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Défis & Apprentissages</h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                      {selectedProject.challenges}
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex gap-4">
                  {selectedProject.demoLink && (
                    <a href={selectedProject.demoLink} className="flex-1 flex items-center justify-center px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-[#ffffff] rounded-xl font-medium transition-colors">
                      <ExternalLink size={18} className="mr-2" /> Voir le projet
                    </a>
                  )}
                  {selectedProject.githubLink && (
                    <a href={selectedProject.githubLink} className="flex-1 flex items-center justify-center px-4 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl font-medium transition-colors">
                      <Code2 size={18} className="mr-2" /> Code source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
