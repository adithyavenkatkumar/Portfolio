import React from 'react';
import { motion } from 'framer-motion';
import { certificationsData } from '../data/portfolioData';
import { FaAws, FaDocker, FaCogs, FaAward, FaExternalLinkAlt, FaCheckCircle, FaShieldAlt, FaGraduationCap, FaUsers, FaCloud } from 'react-icons/fa';

const iconMap = {
  FaAws,
  FaDocker,
  FaCogs,
  FaCloud,
  FaGraduationCap,
  FaUsers
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-matcha-100/40 dark:bg-matcha-950/20">
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
            <FaAward className="w-3.5 h-3.5 text-matcha-500" />
            <span>VERIFIED CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            Cloud Certifications & Credentials
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            Industry-recognized cloud infrastructure, OCI Generative AI, and university activity credentials.
          </p>
        </motion.div>

        {/* Certifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || FaShieldAlt;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-nordic-cardDark p-6 sm:p-8 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 group hover:border-matcha-400/60"
              >
                <div>
                  {/* Badge Icon & Status Pill */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 flex items-center justify-center font-bold text-xl shadow-xs group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-matcha-50 dark:bg-matcha-950 text-matcha-700 dark:text-matcha-300 text-[11px] font-mono font-bold border border-matcha-200/60 dark:border-matcha-800/40">
                      <FaCheckCircle className="w-3 h-3 text-matcha-500" />
                      <span>{cert.status}</span>
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg font-extrabold text-nordic-charcoal dark:text-white group-hover:text-matcha-600 dark:group-hover:text-matcha-300 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="mt-1 flex items-center justify-between text-xs font-semibold text-matcha-600 dark:text-matcha-300">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-matcha-500">{cert.issueDate}</span>
                  </div>

                  {/* Credential ID */}
                  <div className="mt-3 p-2.5 rounded-xl bg-matcha-50/70 dark:bg-matcha-950/40 border border-matcha-200/50 dark:border-nordic-borderDark text-[11px] font-mono text-matcha-600 dark:text-matcha-400">
                    <span className="opacity-75">ID: </span>
                    <span className="font-bold text-nordic-charcoal dark:text-white">{cert.credentialId}</span>
                  </div>

                  {/* Skill Chips */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-matcha-100/60 dark:bg-matcha-900/40 text-matcha-700 dark:text-matcha-200 text-[11px] font-mono font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification Links */}
                <div className="mt-6 pt-4 border-t border-matcha-100 dark:border-nordic-borderDark flex items-center justify-between gap-2">
                  {cert.secondaryUrl ? (
                    <a
                      href={cert.secondaryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-matcha-700 dark:text-matcha-300 hover:underline"
                    >
                      <span>{cert.secondaryUrlLabel || "Certificate"}</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                  ) : <span />}

                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-matcha-600 dark:text-matcha-300 hover:underline"
                  >
                    <span>Verify Credential</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
