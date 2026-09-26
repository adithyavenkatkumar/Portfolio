import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../data/portfolioData';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaStar, FaChartLine, FaInfoCircle } from 'react-icons/fa';

const Projects = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-matcha-100/40 dark:bg-matcha-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-matcha-100 dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-300 text-xs font-bold mb-3 border border-matcha-200 dark:border-nordic-borderDark">
            <FaFolderOpen className="w-3.5 h-3.5 text-matcha-500" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            Click any project card to view architectural details, challenges solved, and live links.
          </p>
        </motion.div>

        {/* Filter Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {projectsData.categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-2xl transition-all duration-300 focus:outline-none ${
                  isActive
                    ? 'bg-matcha-600 dark:bg-matcha-400 text-white dark:text-nordic-moss shadow-sm scale-105'
                    : 'bg-white dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-200 hover:bg-matcha-100 dark:hover:bg-matcha-900/40 border border-matcha-200/80 dark:border-nordic-borderDark'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject && onSelectProject(project)}
                className="group bg-white dark:bg-nordic-cardDark rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 cursor-pointer"
              >
                <div>
                  {/* Image Container with Hover Overlay */}
                  <div className="relative aspect-video overflow-hidden bg-matcha-100 dark:bg-matcha-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-matcha-600 text-white text-[11px] font-bold shadow-xs">
                        <FaStar className="w-3 h-3 text-matcha-200" />
                        <span>Featured</span>
                      </span>
                    )}

                    {/* Category Tag */}
                    <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-nordic-charcoal/80 backdrop-blur-md text-white text-[11px] font-mono font-medium">
                      {project.category}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold text-nordic-charcoal dark:text-white group-hover:text-matcha-600 dark:group-hover:text-matcha-300 transition-colors">
                        {project.title}
                      </h3>
                      <FaInfoCircle className="w-4 h-4 text-matcha-400 group-hover:text-matcha-600 dark:group-hover:text-matcha-300 transition-colors shrink-0 mt-1" />
                    </div>
                    
                    <p className="mt-2 text-xs font-semibold text-matcha-600 dark:text-matcha-300 font-mono">
                      {project.tagline}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-matcha-700/80 dark:text-matcha-200/80 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Metrics Banner */}
                    {project.metrics && (
                      <div className="mt-4 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-matcha-50 dark:bg-matcha-950/60 border border-matcha-200/60 dark:border-matcha-800/40 text-[11px] font-semibold text-matcha-700 dark:text-matcha-300">
                        <FaChartLine className="w-3.5 h-3.5 text-matcha-500" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer (Tech Stack + Links) */}
                <div className="px-6 pb-6 pt-2 border-t border-matcha-100 dark:border-nordic-borderDark flex flex-col gap-4">
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-matcha-50 dark:bg-matcha-900/40 text-matcha-700 dark:text-matcha-200 text-[11px] font-mono font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Links */}
                  <div className="flex items-center justify-between pt-2" onClick={(e) => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-matcha-700 dark:text-matcha-200 hover:text-matcha-500 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code Repo</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-matcha-600 dark:text-matcha-300 hover:underline"
                    >
                      <span>Live Demo</span>
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
