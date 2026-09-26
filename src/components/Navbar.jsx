import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollUtils';
import { FaBars, FaTimes, FaCloud, FaPaperPlane, FaSearch } from 'react-icons/fa';

const Navbar = ({ activeSection, onOpenPalette }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId, 80);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#f7f9f5]/85 dark:bg-[#101714]/85 backdrop-blur-md shadow-sm border-b border-matcha-200/50 dark:border-nordic-borderDark/80 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <button 
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-matcha-600 via-matcha-500 to-matcha-400 p-[2px] shadow-sm group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#f7f9f5] dark:bg-nordic-cardDark rounded-[14px] flex items-center justify-center font-extrabold text-matcha-600 dark:text-matcha-300 text-sm overflow-hidden relative">
              {personalInfo.logoUrl ? (
                <img 
                  src={personalInfo.logoUrl} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover rounded-[12px]" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }
                  }}
                />
              ) : null}
              <div className={`w-full h-full flex items-center justify-center ${personalInfo.logoUrl ? 'hidden' : ''}`}>
                <FaCloud className="w-4 h-4 text-matcha-500" />
              </div>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-extrabold tracking-tight text-nordic-charcoal dark:text-white group-hover:text-matcha-500 dark:group-hover:text-matcha-300 transition-colors">
              {personalInfo.firstName}
            </span>
            <span className="block text-[10px] font-mono tracking-widest text-matcha-500/80 dark:text-matcha-400 uppercase">
              Cloud & DevOps
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-matcha-100/60 dark:bg-nordic-cardDark/80 p-1.5 rounded-full border border-matcha-200/60 dark:border-nordic-borderDark/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus:outline-none ${
                  isActive 
                    ? 'text-white dark:text-nordic-moss font-bold shadow-sm' 
                    : 'text-matcha-700 dark:text-matcha-200 hover:text-matcha-600 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-gradient-to-r from-matcha-600 to-matcha-500 dark:from-matcha-300 dark:to-matcha-400 rounded-full z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions (Cmd+K Palette, Dark Mode Toggle, CTA) */}
        <div className="flex items-center gap-2.5">
          
          {/* Command Palette Trigger Button */}
          <button
            onClick={onOpenPalette}
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-2xl bg-matcha-100/70 dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-300 hover:bg-matcha-200/60 dark:hover:bg-nordic-borderDark transition-colors text-xs font-mono border border-matcha-200/60 dark:border-nordic-borderDark"
          >
            <FaSearch className="w-3 h-3 text-matcha-500" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-nordic-moss text-[10px] border border-matcha-200 dark:border-nordic-borderDark font-mono text-matcha-600 dark:text-matcha-300">
              ⌘K
            </kbd>
          </button>

          {/* Quick Contact CTA Button */}
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-matcha-600 to-matcha-500 hover:from-matcha-500 hover:to-matcha-600 rounded-2xl shadow-sm transition-all duration-300 active:scale-95"
          >
            <FaPaperPlane className="text-matcha-200 w-3 h-3" />
            <span>Get In Touch</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2.5 rounded-2xl bg-matcha-100 dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-300 border border-matcha-200 dark:border-nordic-borderDark"
          >
            {mobileMenuOpen ? <FaTimes className="w-5 h-5 text-matcha-500" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#f7f9f5]/95 dark:bg-[#101714]/95 backdrop-blur-xl border-b border-matcha-200 dark:border-nordic-borderDark px-4 pt-3 pb-6 shadow-xl space-y-2"
          >
            <button
              onClick={() => {
                onOpenPalette();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center gap-2 px-4 py-3 rounded-2xl bg-matcha-100/70 dark:bg-nordic-cardDark text-matcha-700 dark:text-matcha-200 text-sm font-semibold border border-matcha-200/60 dark:border-nordic-borderDark"
            >
              <FaSearch className="w-4 h-4 text-matcha-500" />
              <span>Search Portfolio (Cmd + K)...</span>
            </button>

            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300 font-bold border-l-4 border-matcha-500'
                        : 'text-nordic-charcoal dark:text-matcha-100 hover:bg-matcha-50 dark:hover:bg-nordic-cardDark'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-matcha-500"></span>}
                  </button>
                );
              })}
              <div className="pt-3">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-matcha-600 to-matcha-500 text-white font-bold text-sm shadow-sm"
                >
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Get In Touch</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
