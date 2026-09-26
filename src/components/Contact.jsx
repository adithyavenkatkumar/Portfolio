import React from 'react';
import { motion } from 'framer-motion';
import { contactData } from '../data/portfolioData';
import { FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-matcha-100/40 dark:bg-matcha-950/20">
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
            <FaEnvelope className="w-3.5 h-3.5 text-matcha-500" />
            <span>DIRECT CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-nordic-charcoal dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="mt-3 text-matcha-700/80 dark:text-matcha-200/80 text-base sm:text-lg">
            Discuss an engineering role, collaborative project, or cloud infrastructure inquiry.
          </p>
        </motion.div>

        {/* Centered Contact Info Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white dark:bg-nordic-cardDark p-8 sm:p-10 rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-sm space-y-8 text-center"
        >
          <div>
            <h3 className="text-2xl font-bold text-nordic-charcoal dark:text-white">
              Contact Details
            </h3>
            <p className="mt-2 text-sm text-matcha-700/80 dark:text-matcha-200/80">
              {contactData.availability}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-matcha-100 dark:border-nordic-borderDark text-left">
            
            {/* Direct Email */}
            <div className="p-4 rounded-2xl bg-matcha-50/60 dark:bg-matcha-950/60 border border-matcha-200/50 dark:border-nordic-borderDark flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 shrink-0">
                <FaEnvelope className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs font-mono text-matcha-500 uppercase tracking-wider block">Email</span>
                <a 
                  href={`mailto:${contactData.email}`} 
                  className="text-xs sm:text-sm font-bold text-nordic-charcoal dark:text-white hover:text-matcha-600 dark:hover:text-matcha-300 transition-colors block truncate"
                >
                  {contactData.email}
                </a>
              </div>
            </div>

            {/* Response Window */}
            <div className="p-4 rounded-2xl bg-matcha-50/60 dark:bg-matcha-950/60 border border-matcha-200/50 dark:border-nordic-borderDark flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 shrink-0">
                <FaClock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-matcha-500 uppercase tracking-wider block">Response Time</span>
                <span className="text-xs sm:text-sm font-bold text-nordic-charcoal dark:text-white">
                  {contactData.responseWindow}
                </span>
              </div>
            </div>

          </div>

          {/* Action Button */}
          <div className="pt-4">
            <a
              href={`mailto:${contactData.email}`}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-matcha-600 to-matcha-500 hover:from-matcha-500 hover:to-matcha-600 text-white font-bold text-sm shadow-md transition-all duration-300 active:scale-95"
            >
              <FaPaperPlane className="w-4 h-4 text-matcha-200" />
              <span>Send Direct Email</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
