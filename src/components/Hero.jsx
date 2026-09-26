import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollUtils';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaTerminal, FaCode, FaCloud, FaLaptopCode, FaCheckCircle, FaLeaf } from 'react-icons/fa';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect logic
  useEffect(() => {
    const currentTitle = personalInfo.dynamicTitles[titleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % personalInfo.dynamicTitles.length);
      } else {
        const nextChar = isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Decorative Nordic Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-matcha-200/25 dark:bg-matcha-900/25 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-matcha-300/20 dark:bg-matcha-800/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Main Hero Bento Grid */}
        <div className="grid grid-cols-12 gap-6">

          {/* Bento Card 1: Main Introduction (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-8 bg-white dark:bg-nordic-cardDark p-8 sm:p-10 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between"
          >
            <div>
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-matcha-100/80 dark:bg-matcha-900/60 border border-matcha-200 dark:border-matcha-800/60 mb-6">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-matcha-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-matcha-500"></span>
                </span>
                <span className="text-xs font-bold text-matcha-700 dark:text-matcha-300">
                  {personalInfo.status}
                </span>
              </div>

              {/* Title & Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-nordic-charcoal dark:text-white leading-[1.15]">
                Hey, I'm <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-matcha-600 via-matcha-500 to-matcha-400 dark:from-matcha-300 dark:via-matcha-200 dark:to-matcha-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Typing Effect Subtitle */}
              <div className="mt-4 h-10 flex items-center">
                <span className="text-lg sm:text-xl font-semibold text-matcha-700 dark:text-matcha-200">
                  Specializing in{' '}
                </span>
                <span className="ml-2 text-lg sm:text-xl font-mono font-bold text-matcha-600 dark:text-matcha-300 border-r-2 border-matcha-500 pr-1 animate-pulse">
                  {displayText}
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-matcha-700/80 dark:text-matcha-200/80 max-w-xl leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>

            {/* CTA Buttons & Social Links */}
            <div className="mt-8 pt-6 border-t border-matcha-100 dark:border-nordic-borderDark flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-matcha-600 dark:bg-matcha-400 text-white dark:text-nordic-moss font-bold text-xs sm:text-sm shadow-sm hover:bg-matcha-700 dark:hover:bg-matcha-300 transition-all duration-300"
                >
                  <span>Explore Work</span>
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 rounded-2xl bg-matcha-50 dark:bg-matcha-950/60 text-nordic-charcoal dark:text-matcha-100 font-bold text-xs sm:text-sm border border-matcha-200/80 dark:border-nordic-borderDark hover:bg-matcha-100 dark:hover:bg-matcha-900/40 transition-colors"
                >
                  Contact Me
                </button>
              </div>

              {/* Quick Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-matcha-50 dark:bg-matcha-900/50 text-matcha-700 dark:text-matcha-200 hover:text-matcha-500 border border-matcha-200/60 dark:border-nordic-borderDark transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-matcha-50 dark:bg-matcha-900/50 text-matcha-700 dark:text-matcha-200 hover:text-matcha-500 border border-matcha-200/60 dark:border-nordic-borderDark transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.email}
                  className="p-2.5 rounded-xl bg-matcha-50 dark:bg-matcha-900/50 text-matcha-700 dark:text-matcha-200 hover:text-matcha-500 border border-matcha-200/60 dark:border-nordic-borderDark transition-colors"
                >
                  <FaEnvelope className="w-4 h-4" />
                </a>
              </div>
            </div>

          </motion.div>

          {/* Bento Card 2: Terminal Interactive Card (Medium) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-12 lg:col-span-4 bg-white dark:bg-nordic-cardDark p-6 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between"
          >
            {/* Terminal Window Header */}
            <div>
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-matcha-100 dark:border-nordic-borderDark">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-matcha-400"></span>
                  <span className="w-3 h-3 rounded-full bg-matcha-300"></span>
                  <span className="w-3 h-3 rounded-full bg-matcha-200"></span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-matcha-500">
                  <FaTerminal className="w-3 h-3" />
                  <span>cloud@avk ~</span>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="font-mono text-xs space-y-2 text-nordic-charcoal dark:text-matcha-100 bg-matcha-50/60 dark:bg-[#121b17] p-4 rounded-2xl border border-matcha-200/60 dark:border-nordic-borderDark overflow-x-auto">
                <p><span className="text-matcha-600 dark:text-matcha-300 font-semibold">const</span> cloudEngineer = &#123;</p>
                <p className="pl-4"><span className="text-matcha-500">name</span>: <span className="text-matcha-700 dark:text-matcha-200">"Adithya"</span>,</p>
                <p className="pl-4"><span className="text-matcha-500">role</span>: <span className="text-matcha-700 dark:text-matcha-200">"Cloud & Frontend"</span>,</p>
                <p className="pl-4"><span className="text-matcha-500">status</span>: <span className="text-matcha-700 dark:text-matcha-200">"Postgrad / VIT-AP 2026"</span>,</p>
                <p className="pl-4"><span className="text-matcha-500">cloud</span>: [<span className="text-matcha-600 dark:text-matcha-300">"Linux"</span>, <span className="text-matcha-600 dark:text-matcha-300">"Azure"</span>, <span className="text-matcha-600 dark:text-matcha-300">"Docker"</span>, <span className="text-matcha-600 dark:text-matcha-300">"K8s"</span>],</p>
                <p className="pl-4"><span className="text-matcha-500">tools</span>: [<span className="text-matcha-600 dark:text-matcha-300">"Git"</span>, <span className="text-matcha-600 dark:text-matcha-300">"GitHub"</span>, <span className="text-matcha-600 dark:text-matcha-300">"React"</span>]</p>
                <p>&#125;;</p>
                <p className="text-matcha-400 pt-2">// Built with React 18 & Tailwind ☁️</p>
              </div>
            </div>

            {/* Micro Highlights */}
            <div className="mt-4 pt-4 border-t border-matcha-100 dark:border-nordic-borderDark space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-matcha-700 dark:text-matcha-200">
                <FaCheckCircle className="w-3.5 h-3.5 text-matcha-500 shrink-0" />
                <span>Linux, Azure, Docker & Kubernetes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-matcha-700 dark:text-matcha-200">
                <FaCheckCircle className="w-3.5 h-3.5 text-matcha-500 shrink-0" />
                <span>Git, GitHub & React Frontend</span>
              </div>
            </div>

          </motion.div>

          {/* Bento Row: 3 Quick Focus Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {/* Focus Card 1 */}
            <div className="bg-white dark:bg-nordic-cardDark p-6 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 shrink-0">
                <FaCloud className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-matcha-500 uppercase tracking-wider block font-bold">Cloud & DevOps</span>
                <span className="text-sm font-extrabold text-nordic-charcoal dark:text-white">Linux, Azure, Docker & K8s</span>
              </div>
            </div>

            {/* Focus Card 2 */}
            <div className="bg-white dark:bg-nordic-cardDark p-6 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 shrink-0">
                <FaLaptopCode className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-matcha-500 uppercase tracking-wider block font-bold">Frontend Engineering</span>
                <span className="text-sm font-extrabold text-nordic-charcoal dark:text-white">React 18 & TailwindCSS</span>
              </div>
            </div>

            {/* Focus Card 3 */}
            <div className="bg-white dark:bg-nordic-cardDark p-6 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 shrink-0">
                <FaLeaf className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-matcha-500 uppercase tracking-wider block font-bold">Career Level</span>
                <span className="text-sm font-extrabold text-nordic-charcoal dark:text-white">Postgraduate / VIT-AP 2026</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
