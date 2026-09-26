import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, projectsData, personalInfo } from '../data/portfolioData';
import { scrollToSection } from '../utils/scrollUtils';
import { FaSearch, FaTimes, FaFolder, FaCompass, FaGithub, FaLinkedin } from 'react-icons/fa';

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle global shortcut (Cmd + K / Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery('');
          setSelectedIndex(0);
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Build command palette options
  const sectionItems = navLinks.map(link => ({
    id: `nav-${link.id}`,
    type: 'Section',
    title: `Navigate to ${link.label}`,
    icon: FaCompass,
    action: () => {
      scrollToSection(link.id);
      onClose();
    }
  }));

  const projectItems = projectsData.projects.map(p => ({
    id: `proj-${p.id}`,
    type: 'Project',
    title: p.title,
    subtitle: p.category,
    icon: FaFolder,
    action: () => {
      scrollToSection('projects');
      onClose();
    }
  }));

  const actionItems = [
    {
      id: 'act-github',
      type: 'External',
      title: 'Open GitHub Profile',
      icon: FaGithub,
      action: () => {
        window.open(personalInfo.socialLinks.github, '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      type: 'External',
      title: 'Open LinkedIn Profile',
      icon: FaLinkedin,
      action: () => {
        window.open(personalInfo.socialLinks.linkedin, '_blank');
        onClose();
      }
    }
  ];

  const allItems = [...sectionItems, ...projectItems, ...actionItems];

  const filteredItems = query.trim() === ''
    ? allItems
    : allItems.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
        item.type.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-nordic-moss/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-white dark:bg-nordic-cardDark rounded-3xl border border-matcha-200/80 dark:border-nordic-borderDark shadow-2xl overflow-hidden z-10"
        >
          {/* Input Search Header */}
          <div className="flex items-center px-6 py-4 border-b border-matcha-100 dark:border-nordic-borderDark">
            <FaSearch className="w-5 h-5 text-matcha-500 mr-3 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSelectedIndex(0);
              }}
              placeholder="Search sections, projects, tech stack, or actions..."
              className="w-full bg-transparent text-nordic-charcoal dark:text-white placeholder-matcha-400 font-medium text-base focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-matcha-500 hover:text-nordic-charcoal dark:hover:text-white transition-colors"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-3 space-y-1">
            {filteredItems.length === 0 ? (
              <div className="p-8 text-center text-sm text-matcha-500">
                No matching results found for "<span className="font-semibold text-nordic-charcoal dark:text-white">{query}</span>"
              </div>
            ) : (
              filteredItems.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3.5 rounded-2xl text-left transition-all hover:bg-matcha-50 dark:hover:bg-matcha-900/40 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-matcha-100 dark:bg-matcha-900/60 text-matcha-600 dark:text-matcha-300">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-nordic-charcoal dark:text-white group-hover:text-matcha-600 dark:group-hover:text-matcha-300 transition-colors">
                          {item.title}
                        </span>
                        {item.subtitle && (
                          <span className="block text-xs font-mono text-matcha-500">
                            {item.subtitle}
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="px-2 py-0.5 rounded-md bg-matcha-100/70 dark:bg-matcha-900/60 text-[10px] font-mono font-bold text-matcha-600 dark:text-matcha-300">
                      {item.type}
                    </span>
                  </button>
                );
              })
            )}
          </div>

          {/* Command Footer Shortcut Hints */}
          <div className="px-6 py-3 bg-matcha-50/60 dark:bg-matcha-950/60 border-t border-matcha-100 dark:border-nordic-borderDark flex items-center justify-between text-xs font-mono text-matcha-500">
            <span>Navigation Shortcut</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white dark:bg-nordic-cardDark border border-matcha-200 dark:border-nordic-borderDark">ESC to exit</span>
              <span className="px-2 py-0.5 rounded bg-white dark:bg-nordic-cardDark border border-matcha-200 dark:border-nordic-borderDark">Cmd + K</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
