import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollUtils';
import { FaGithub, FaLinkedin, FaEnvelope, FaCloud } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-nordic-charcoal dark:bg-[#0b100e] text-matcha-200/80 py-16 border-t border-matcha-700/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-matcha-700/30">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-matcha-500 to-matcha-300 p-[2px]">
                <div className="w-full h-full bg-nordic-charcoal rounded-[10px] flex items-center justify-center font-extrabold text-matcha-300 text-xs overflow-hidden relative">
                  {personalInfo.logoUrl ? (
                    <img 
                      src={personalInfo.logoUrl} 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover rounded-[8px]" 
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                  ) : null}
                  <div className={`w-full h-full flex items-center justify-center ${personalInfo.logoUrl ? 'hidden' : ''}`}>
                    <FaCloud className="w-3.5 h-3.5 text-matcha-400" />
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-sm text-matcha-200/70 max-w-sm">
              {personalInfo.title} • Scalable Cloud & DevOps Solutions.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-4">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-matcha-300 transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
          <div className="md:col-span-3 flex md:justify-end gap-3">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-2xl bg-matcha-800/50 text-matcha-200 hover:text-white hover:bg-matcha-700/60 transition-colors border border-matcha-700/40"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-2xl bg-matcha-800/50 text-matcha-200 hover:text-white hover:bg-matcha-700/60 transition-colors border border-matcha-700/40"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socialLinks.email}
              aria-label="Email"
              className="p-2.5 rounded-2xl bg-matcha-800/50 text-matcha-200 hover:text-white hover:bg-matcha-700/60 transition-colors border border-matcha-700/40"
            >
              <FaEnvelope className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-matcha-300/60 gap-4">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 font-mono">
            <span>Built with</span>
            <FaCloud className="w-3.5 h-3.5 text-matcha-400" />
            <span>React 18 • Vite • TailwindCSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
