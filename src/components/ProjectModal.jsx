import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaStar, FaChartLine, FaCheckCircle, FaCogs, FaExclamationTriangle, FaNetworkWired, FaLongArrowAltRight } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

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

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white dark:bg-nordic-cardDark rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col my-auto"
        >
          {/* Header Image Banner */}
          <div className="relative aspect-video sm:aspect-[21/9] w-full overflow-hidden bg-matcha-100 dark:bg-matcha-950 shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nordic-charcoal/80 via-transparent to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-2xl bg-nordic-charcoal/70 backdrop-blur-md text-white hover:bg-nordic-charcoal transition-colors focus:outline-none"
            >
              <FaTimes className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-2">
              <div>
                <span className="px-3 py-1 rounded-full bg-matcha-600 text-white text-xs font-mono font-bold">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Tagline & Metrics */}
            <div>
              <p className="text-sm font-semibold text-matcha-600 dark:text-matcha-300 font-mono">
                {project.tagline}
              </p>
              <p className="mt-2 text-sm text-matcha-700/90 dark:text-matcha-200/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Metrics Banner */}
            {project.metrics && (
              <div className="p-4 rounded-2xl bg-matcha-50 dark:bg-matcha-950/60 border border-matcha-200/60 dark:border-matcha-800/40 flex items-center gap-3 text-xs sm:text-sm font-bold text-matcha-700 dark:text-matcha-300">
                <FaChartLine className="w-5 h-5 text-matcha-500 shrink-0" />
                <span>{project.metrics}</span>
              </div>
            )}

            {/* Option B: Cloud Architecture Visual Flow Diagram */}
            {project.architectureDiagram && (
              <div className="p-5 rounded-3xl bg-matcha-50/70 dark:bg-matcha-950/60 border border-matcha-200/80 dark:border-nordic-borderDark space-y-4">
                <div className="flex items-center gap-2 text-sm font-bold text-nordic-charcoal dark:text-white pb-2 border-b border-matcha-200/60 dark:border-nordic-borderDark">
                  <FaNetworkWired className="w-4 h-4 text-matcha-500" />
                  <span>Cloud Infrastructure & Flow Diagram</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                  {project.architectureDiagram.map((item, idx) => (
                    <div key={idx} className="relative p-3.5 rounded-2xl bg-white dark:bg-nordic-cardDark border border-matcha-200/60 dark:border-nordic-borderDark flex flex-col justify-between space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 uppercase">
                          {item.step}
                        </span>
                        {idx < project.architectureDiagram.length - 1 && (
                          <FaLongArrowAltRight className="hidden md:block w-4 h-4 text-matcha-400 absolute -right-3.5 top-1/2 -translate-y-1/2 z-10" />
                        )}
                      </div>

                      <p className="text-xs font-bold text-nordic-charcoal dark:text-white">
                        {item.node}
                      </p>

                      <p className="text-[11px] text-matcha-600/80 dark:text-matcha-300/80 leading-snug">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Detailed Architecture Breakdown */}
            {project.details && (
              <div className="space-y-6 pt-4 border-t border-matcha-100 dark:border-nordic-borderDark">
                
                {/* Problem Statement & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-matcha-50/50 dark:bg-matcha-950/40 border border-matcha-200/50 dark:border-nordic-borderDark">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-matcha-600 dark:text-matcha-300 font-bold mb-2 flex items-center gap-1.5">
                      <FaExclamationTriangle className="w-3.5 h-3.5 text-amber-500" />
                      <span>The Challenge</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-matcha-700/80 dark:text-matcha-200/80">
                      {project.details.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-matcha-50/50 dark:bg-matcha-950/40 border border-matcha-200/50 dark:border-nordic-borderDark">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-matcha-600 dark:text-matcha-300 font-bold mb-2 flex items-center gap-1.5">
                      <FaCheckCircle className="w-3.5 h-3.5 text-matcha-500" />
                      <span>Architectural Solution</span>
                    </h4>
                    <p className="text-xs sm:text-sm text-matcha-700/80 dark:text-matcha-200/80">
                      {project.details.solution}
                    </p>
                  </div>
                </div>

                {/* System Components */}
                {project.details.architecture && (
                  <div>
                    <h4 className="text-sm font-bold text-nordic-charcoal dark:text-white mb-3 flex items-center gap-2">
                      <FaCogs className="w-4 h-4 text-matcha-500" />
                      <span>System Architecture Components</span>
                    </h4>
                    <ul className="space-y-2">
                      {project.details.architecture.map((item, idx) => (
                        <li key={idx} className="p-3 rounded-xl bg-matcha-50/70 dark:bg-matcha-950/30 text-xs sm:text-sm text-matcha-700 dark:text-matcha-200 border border-matcha-200/40 dark:border-matcha-900/40 flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-matcha-500 mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}

            {/* Tech Stack Pills */}
            <div className="pt-4 border-t border-matcha-100 dark:border-nordic-borderDark">
              <span className="text-xs font-mono text-matcha-500 uppercase tracking-widest block mb-3">Tech Stack Used</span>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-700 dark:text-matcha-200 text-xs font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-matcha-50/60 dark:bg-matcha-950/60 border-t border-matcha-100 dark:border-nordic-borderDark flex items-center justify-between gap-4 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-nordic-cardDark border border-matcha-200 dark:border-nordic-borderDark text-nordic-charcoal dark:text-white font-bold text-xs hover:border-matcha-400 transition-colors shadow-xs"
            >
              <FaGithub className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-matcha-600 text-white font-bold text-xs hover:bg-matcha-700 transition-colors shadow-sm"
            >
              <span>Launch Live Demo</span>
              <FaExternalLinkAlt className="w-3 h-3" />
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
