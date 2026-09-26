/**
 * Utility function to smoothly scroll to a section by its element ID with offset for sticky navbar.
 * @param {string} elementId - Target element ID (without '#')
 * @param {number} offset - Pixel offset for top navbar height
 */
export const scrollToSection = (elementId, offset = 80) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Scrolls window smoothly back to the top of the document.
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
