import { useState, useEffect } from 'react';

/**
 * Custom hook to track which section is currently in view (Scroll Spy).
 * @param {Array<string>} sectionIds - List of section IDs to monitor (e.g. ['home', 'about', 'experience'])
 * @param {number} offsetRatio - Fraction from top of viewport to calculate threshold (0 to 1)
 * @returns {string} activeSection - Current active section ID
 */
export const useSectionInView = (sectionIds = [], offsetRatio = 0.3) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    if (!sectionIds || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetRatio;

      // Special case: near top of page -> activate first section
      if (window.scrollY < 100) {
        setActiveSection(sectionIds[0]);
        return;
      }

      // Special case: reached bottom of page -> activate last section
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top - 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds, offsetRatio]);

  return activeSection;
};

export default useSectionInView;
