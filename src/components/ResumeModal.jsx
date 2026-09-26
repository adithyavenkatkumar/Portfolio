import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo, aboutData, skillsData, experienceData } from '../data/portfolioData';
import { FaTimes, FaFileDownload, FaPrint, FaGraduationCap, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const hasExperience = experienceData && experienceData.length > 0;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-nordic-moss/70 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white dark:bg-nordic-cardDark rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Controls */}
          <div className="p-6 bg-matcha-50/80 dark:bg-matcha-950/80 border-b border-matcha-200/80 dark:border-nordic-borderDark flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-matcha-600 text-white font-bold text-xs">
                PDF CV
              </div>
              <div>
                <h3 className="text-lg font-bold text-nordic-charcoal dark:text-white">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs text-matcha-500">
                  Adithya Venkat Kumar • Cloud Engineer & Frontend Developer
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-nordic-cardDark border border-matcha-200 dark:border-nordic-borderDark text-xs font-bold text-nordic-charcoal dark:text-white hover:border-matcha-400 transition-colors shadow-xs"
              >
                <FaPrint className="w-3.5 h-3.5 text-matcha-500" />
                <span>Print</span>
              </button>

              <a
                href={personalInfo.resumeUrl}
                download="Adithya_Venkat_Kumar_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-matcha-600 text-white font-bold text-xs hover:bg-matcha-700 transition-colors shadow-sm"
              >
                <FaFileDownload className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl text-matcha-500 hover:text-nordic-charcoal dark:hover:text-white transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-8 overflow-y-auto space-y-8 bg-white dark:bg-nordic-cardDark font-sans">
            
            {/* Resume Header */}
            <div className="pb-6 border-b border-matcha-200/80 dark:border-nordic-borderDark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-nordic-charcoal dark:text-white">
                  {personalInfo.name}
                </h1>
                <p className="text-base font-semibold text-matcha-600 dark:text-matcha-300 mt-1">
                  {personalInfo.title}
                </p>
              </div>

              <div className="space-y-1 text-xs text-matcha-700/80 dark:text-matcha-200/80 font-mono">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-3 h-3 text-matcha-500" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="w-3 h-3 text-matcha-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="w-3 h-3 text-matcha-500" />
                  <span>github.com/adithyavenkatkumar</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-matcha-600 dark:text-matcha-300 mb-2">
                Executive Summary
              </h2>
              <p className="text-xs sm:text-sm text-matcha-700/90 dark:text-matcha-200/90 leading-relaxed">
                {aboutData.headline} {aboutData.bioParagraphs[1]}
              </p>
            </div>

            {/* Optional Experience Section */}
            {hasExperience && (
              <div>
                <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-matcha-600 dark:text-matcha-300 mb-4 flex items-center gap-2">
                  <FaBriefcase className="w-3.5 h-3.5" />
                  <span>Work Experience</span>
                </h2>

                <div className="space-y-6">
                  {experienceData.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-bold text-nordic-charcoal dark:text-white">
                          {item.role} <span className="text-matcha-500 font-normal">@ {item.company}</span>
                        </h3>
                        <span className="text-xs font-mono text-matcha-500">{item.period} | {item.location}</span>
                      </div>
                      <p className="text-xs text-matcha-700/80 dark:text-matcha-200/80">{item.description}</p>
                      <ul className="space-y-1 pl-4">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-xs text-matcha-700/80 dark:text-matcha-200/80 list-disc">
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education Section */}
            <div>
              <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-matcha-600 dark:text-matcha-300 mb-4 flex items-center gap-2">
                <FaGraduationCap className="w-3.5 h-3.5" />
                <span>Education</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutData.education.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-2xl bg-matcha-50/50 dark:bg-matcha-950/40 border border-matcha-200/60 dark:border-nordic-borderDark">
                    <h3 className="text-sm font-bold text-nordic-charcoal dark:text-white">{edu.degree}</h3>
                    <p className="text-xs text-matcha-600 dark:text-matcha-300 font-semibold">{edu.institution}</p>
                    <p className="text-xs font-mono text-matcha-500 mt-1">{edu.period} • {edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ResumeModal;
