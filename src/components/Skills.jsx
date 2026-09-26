import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import {
  FaReact, FaHtml5, FaNodeJs, FaPython, FaAws, FaDocker, FaBrain, FaGitAlt, FaCogs, FaTasks, FaLaptopCode, FaCheck, FaTerminal, FaGithub, FaLinux
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiFramer, SiRedux, SiGraphql, SiGithubactions, SiPytorch, SiPostgresql, SiRedis, SiJest, SiKubernetes, SiLinux, SiDocker, SiGit, SiGithub
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

const iconMap = {
  FaReact, FaHtml5, FaNodeJs, FaPython, FaAws, FaDocker, FaBrain, FaGitAlt, FaCogs, FaTasks, FaTerminal, FaGithub, FaLinux,
  SiTypescript, SiTailwindcss, SiFramer, SiRedux, SiGraphql, SiGithubactions, SiPytorch, SiPostgresql, SiRedis, SiJest,
  SiKubernetes, SiLinux, SiDocker, SiGit, SiGithub, VscAzure,
  SiOpenai: FaBrain
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#f7f9f5] dark:bg-[#101714]">
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
            <FaLaptopCode className="w-3.5 h-3.5 text-matcha-500" />
            <span>TECHNICAL TOOLING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            Tech Stack
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            A comprehensive breakdown of cloud infrastructure, frontend frameworks, and core engineering stack.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.categories.map((category, catIdx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="bg-white dark:bg-nordic-cardDark p-6 sm:p-8 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-nordic-charcoal dark:text-white mb-6 flex items-center gap-3 pb-3 border-b border-matcha-100 dark:border-nordic-borderDark">
                  <span className="w-2.5 h-6 rounded-full bg-gradient-to-b from-matcha-600 to-matcha-400"></span>
                  <span>{category.name}</span>
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || FaCheck;
                    return (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-matcha-50/60 dark:bg-matcha-950/40 border border-matcha-200/60 dark:border-nordic-borderDark flex items-center justify-between hover:border-matcha-400 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 rounded-xl bg-white dark:bg-nordic-cardDark text-matcha-600 dark:text-matcha-300 shadow-xs border border-matcha-200/60 dark:border-matcha-800/40 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-4 h-4" />
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-nordic-charcoal dark:text-matcha-100">
                            {skill.name}
                          </span>
                        </div>

                        <span className="px-2.5 py-1 rounded-lg bg-matcha-100 dark:bg-matcha-900/60 text-matcha-700 dark:text-matcha-300 font-mono text-[11px] font-bold">
                          {skill.tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
