import React from 'react';
import { motion } from 'framer-motion';
import { aboutData, personalInfo } from '../data/portfolioData';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaFileDownload, FaUserCheck, FaCloud, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const About = ({ onOpenResumeModal }) => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-matcha-100/40 dark:bg-matcha-950/20">
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
            <FaUserCheck className="w-3.5 h-3.5 text-matcha-500" />
            <span>BACKGROUND & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            About
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            {aboutData.headline}
          </p>
        </motion.div>

        {/* About Bento Grid */}
        <div className="grid grid-cols-12 gap-6 mb-16">

          {/* Bio Bento Card (Wide) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-7 bg-white dark:bg-nordic-cardDark p-8 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-nordic-charcoal dark:text-white pb-3 border-b border-matcha-100 dark:border-nordic-borderDark">
                Background & Engineering Focus
              </h3>
              {aboutData.bioParagraphs.map((paragraph, idx) => (
                <p key={idx} className="text-xs sm:text-sm text-matcha-700/90 dark:text-matcha-200/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="pt-4 border-t border-matcha-100 dark:border-nordic-borderDark">
              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-matcha-600 dark:bg-matcha-400 text-white dark:text-nordic-moss font-bold text-xs sm:text-sm shadow-sm hover:bg-matcha-700 dark:hover:bg-matcha-300 transition-all duration-300"
              >
                <FaFileDownload className="w-4 h-4 text-matcha-200 dark:text-nordic-moss" />
                <span>Preview / Download CV</span>
              </button>
            </div>
          </motion.div>

          {/* Stats Bento Grid (Right) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {aboutData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-nordic-cardDark border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-center items-center text-center group hover:border-matcha-400/60 transition-all duration-300"
              >
                <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-matcha-600 to-matcha-400 dark:from-matcha-300 dark:to-matcha-200 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-bold text-matcha-600/80 dark:text-matcha-300/80 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Education Bento Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-2xl bg-matcha-600 text-white shadow-sm">
              <FaGraduationCap className="w-6 h-6 text-matcha-200" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-nordic-charcoal dark:text-white">Education Background</h3>
              <p className="text-xs text-matcha-600/80 dark:text-matcha-300/80">Academic credentials & achievements</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutData.education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white dark:bg-nordic-cardDark p-6 sm:p-8 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-matcha-100 dark:bg-matcha-900/60 text-matcha-700 dark:text-matcha-300 text-xs font-bold">
                      <FaCalendarAlt className="w-3 h-3 text-matcha-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-xs font-mono font-bold text-matcha-600 dark:text-matcha-300 bg-matcha-50 dark:bg-matcha-900/40 px-2.5 py-1 rounded-lg border border-matcha-200/50 dark:border-matcha-800/40">
                      {item.grade}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-nordic-charcoal dark:text-white">
                    {item.degree}
                  </h4>

                  <p className="text-sm font-semibold text-matcha-700 dark:text-matcha-200 mt-1">
                    <span>{item.institution}</span>
                  </p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-matcha-700/80 dark:text-matcha-200/80 flex items-start gap-2">
                        <FaCheckCircle className="w-3.5 h-3.5 text-matcha-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
