"use client";

import { ArrowUp, Code2, Users, Globe } from "lucide-react";
import { portfolioData } from "../lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1A1D27] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-sky-500">
              {portfolioData.personalInfo.initials}
            </span>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} Tous droits réservés.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a href={portfolioData.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <Code2 size={24} />
            </a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Users size={24} />
            </a>
            <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <Globe size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 md:right-12 p-3 bg-indigo-600 hover:bg-indigo-700 text-[#ffffff] rounded-full shadow-lg transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-slate-900"
        aria-label="Retour en haut"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
