import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolioData';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#f7f9f5] dark:bg-[#101714]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-matcha-100 dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-300 text-xs font-bold mb-3 border border-matcha-200 dark:border-nordic-borderDark">
            <FaBriefcase className="w-3.5 h-3.5 text-matcha-500" />
            <span>CAREER PATH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            Work Experience & Timeline
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            Proven track record in engineering teams, startup platforms, and AI research labs.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-matcha-500 via-matcha-400 to-matcha-300 -translate-x-1/2 opacity-40" />

          <div className="space-y-12">
            {experienceData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Badge in Center */}
                  <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-nordic-cardDark border-4 border-matcha-500 dark:border-matcha-400 items-center justify-center shadow-sm z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-matcha-500 dark:bg-matcha-300"></span>
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="bg-white dark:bg-nordic-cardDark p-6 sm:p-8 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm hover:shadow-md transition-all duration-300 group hover:border-matcha-400/60">
                      
                      {/* Period Badge & Type */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-matcha-100 dark:bg-matcha-900/60 text-matcha-700 dark:text-matcha-300 text-xs font-bold">
                          <FaCalendarAlt className="w-3 h-3 text-matcha-500" />
                          <span>{item.period}</span>
                        </span>
                        <span className="text-xs font-semibold text-matcha-600 dark:text-matcha-300 bg-matcha-50 dark:bg-matcha-950 px-2.5 py-1 rounded-lg">
                          {item.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl font-bold text-nordic-charcoal dark:text-white group-hover:text-matcha-600 dark:group-hover:text-matcha-300 transition-colors">
                        {item.role}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-sm font-semibold text-matcha-700 dark:text-matcha-200">
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center gap-1 text-matcha-600 dark:text-matcha-300"
                        >
                          <span>{item.company}</span>
                          <FaExternalLinkAlt className="w-2.5 h-2.5" />
                        </a>
                        <span className="text-matcha-300">•</span>
                        <span className="text-xs text-matcha-500 dark:text-matcha-400 flex items-center gap-1">
                          <FaMapMarkerAlt className="w-3 h-3" />
                          {item.location}
                        </span>
                      </div>

                      {/* Brief Description */}
                      <p className="mt-3 text-xs sm:text-sm text-matcha-700/80 dark:text-matcha-200/80 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Bullet Achievements */}
                      <ul className="mt-4 space-y-2">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-xs text-matcha-700/80 dark:text-matcha-200/80 flex items-start gap-2">
                            <FaCheckCircle className="w-3.5 h-3.5 text-matcha-500 dark:text-matcha-400 mt-0.5 shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="mt-5 pt-4 border-t border-matcha-100 dark:border-nordic-borderDark flex flex-wrap gap-1.5">
                        {item.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg bg-matcha-50 dark:bg-matcha-900/40 text-matcha-700 dark:text-matcha-200 text-[11px] font-mono border border-matcha-200/60 dark:border-matcha-800/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
