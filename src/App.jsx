import React, { useState } from 'react';
import useSectionInView from './hooks/useSectionInView';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import GithubWidget from './components/GithubWidget';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Interactive Overlays
import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';

const sectionIds = ['home', 'about', 'projects', 'skills', 'contact'];

const MainContent = () => {
  const activeSection = useSectionInView(sectionIds, 0.25);
  
  // Modals state
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f5] text-nordic-charcoal transition-colors duration-300">
      <Navbar 
        activeSection={activeSection} 
        onOpenPalette={() => setIsPaletteOpen(true)}
      />
      
      <main className="flex-grow">
        <Hero />
        <About onOpenResumeModal={() => setIsResumeModalOpen(true)} />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Skills />
        <Certifications />
        <GithubWidget />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />

      {/* Global Interactive Overlays */}
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
      />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
};

function App() {
  return <MainContent />;
}

export default App;
