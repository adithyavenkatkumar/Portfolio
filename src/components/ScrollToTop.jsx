import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToTop } from '../utils/scrollUtils';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-matcha-600 dark:bg-matcha-400 text-white dark:text-nordic-moss shadow-md hover:bg-matcha-700 dark:hover:bg-matcha-300 hover:scale-110 active:scale-95 transition-all duration-200 border border-white/20 focus:outline-none"
        >
          <FaArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
