"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Code2, Users, Loader2, Mail, MapPin, Send, Globe } from "lucide-react";
import { portfolioData } from "../lib/data";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, subject: false, message: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleBlur = (field: keyof typeof formData) => {
    if (field === 'email') {
      setErrors({ ...errors, email: !validateEmail(formData.email) });
    } else {
      setErrors({ ...errors, [field]: formData[field].trim() === "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all
    const newErrors = {
      name: formData.name.trim() === "",
      email: !validateEmail(formData.email),
      subject: formData.subject.trim() === "",
      message: formData.message.trim() === ""
    };
    
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setIsSubmitting(true);
      try {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"
        );
        setShowToast(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        alert("Une erreur est survenue lors de l'envoi du message.");
      } finally {
        setIsSubmitting(false);
      }
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  const getInputClass = (field: keyof typeof formData) => {
    const base = "w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 transition-colors focus:outline-none focus:ring-2";
    if (errors[field]) return `${base} border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900/40`;
    if (formData[field] && !errors[field]) return `${base} border-emerald-500 focus:border-emerald-500 focus:ring-emerald-200 dark:focus:ring-emerald-900/40`;
    return `${base} border-slate-200 dark:border-slate-700 focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-indigo-100 dark:focus:ring-indigo-900/40`;
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Colonne de gauche (Coordonnées) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6">
                Discutons de votre projet
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez une question ou que vous souhaitiez me proposer un projet, n'hésitez pas à me contacter !
              </p>
            </div>

            <div className="space-y-6">
              <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center group">
                <div className="w-12 h-12 rounded-full bg-[#08090D] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-[#ffffff] transition-all shadow-sm">
                  <Mail size={20} />
                </div>
                <span className="ml-4 text-lg font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {portfolioData.personalInfo.email}
                </span>
              </a>
              
              <div className="flex items-center group cursor-default">
                <div className="w-12 h-12 rounded-full bg-[#08090D] dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-[#ffffff] transition-all shadow-sm">
                  <MapPin size={20} />
                </div>
                <span className="ml-4 text-lg font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {portfolioData.personalInfo.location}
                </span>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                Réseaux Sociaux
              </p>
              <div className="flex space-x-4">
                <a href={portfolioData.socials.github} className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-indigo-600 hover:border-indigo-600 transition-all">
                  <Code2 size={18} />
                </a>
                <a href={portfolioData.socials.linkedin} className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-sky-600 hover:border-sky-600 transition-all">
                  <Users size={18} />
                </a>
                <a href={portfolioData.socials.twitter} className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-sky-400 hover:border-sky-400 transition-all">
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Colonne de droite (Formulaire) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-100 dark:border-slate-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Nom complet</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={() => handleBlur('name')}
                  className={getInputClass('name')}
                  placeholder="Jean Dupont"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={() => handleBlur('email')}
                  className={getInputClass('email')}
                  placeholder="jean.dupont@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sujet</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onBlur={() => handleBlur('subject')}
                  className={getInputClass('subject')}
                  placeholder="Proposition de mission"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onBlur={() => handleBlur('message')}
                  className={getInputClass('message')}
                  placeholder="Décrivez votre projet ici..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-[#ffffff] font-semibold transition-all shadow-lg shadow-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin mr-2" size={20} />
                ) : (
                  <Send className="mr-2" size={20} />
                )}
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Notification Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 bg-emerald-500 text-[#ffffff] px-6 py-4 rounded-xl shadow-2xl flex items-center z-[100]"
          >
            <CheckCircle size={24} className="mr-3" />
            <div>
              <h4 className="font-bold">Message envoyé !</h4>
              <p className="text-sm text-emerald-100">Je vous répondrai dans les plus brefs délais.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
