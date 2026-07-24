'use client';

import { useEffect, useRef, useState } from 'react';
import BackgroundParticles from './src/components/backgroundParticles';
import Navbar from './src/components/Navbar';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';
import HeroSection from './src/components/HeroSection';
import PhotographySection from './src/components/PhotographySection';
import ProjectModal from './src/components/ProjectModal';
import ProjectsSection from './src/components/ProjectsSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const photographyRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      if (contactRef.current && scrollY >= contactRef.current.offsetTop) {
        setActiveSection('contact');
      } else if (projectsRef.current && scrollY >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
      } else if (photographyRef.current && scrollY >= photographyRef.current.offsetTop) {
        setActiveSection('photography');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Image & source code protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('img') || target.classList.contains('no-select')) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block Ctrl+S, Ctrl+P, Ctrl+U
      if (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u' || e.key === 'S' || e.key === 'P' || e.key === 'U')) {
        e.preventDefault();
      }
      // Block F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
      }
      // Block Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Inspect elements)
      if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.key === 'i' || e.key === 'j' || e.key === 'c')) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText(''); // Clear clipboard if print screen was pressed
      }
    };

    window.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('dragstart', handleDragStart);
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('dragstart', handleDragStart);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden font-sans">
      <BackgroundParticles />

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} refs={{ photographyRef, projectsRef, contactRef }} />

      <HeroSection scrollToRef={scrollToSection} refs={{ projectsRef, contactRef }} />

      <PhotographySection sectionRef={photographyRef} onSelectProject={setSelectedProject} />

      <ProjectsSection sectionRef={projectsRef} />

      <ContactSection sectionRef={contactRef} />

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
