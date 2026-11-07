'use client';

import { useEffect, useRef, useState } from 'react';
import BackgroundParticles from './src/components/backgroundParticles';
import Navbar from './src/components/Navbar';
import ContactSection from './src/components/ContactSection';
import Footer from './src/components/Footer';
import HeroSection from './src/components/HeroSection';
import EdukaByteSpotlight from './src/components/EdukaByteSpotlight';
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
      const scrollY = window.scrollY + 160;

      if (contactRef.current && scrollY >= contactRef.current.offsetTop) {
        setActiveSection('contact');
      } else if (photographyRef.current && scrollY >= photographyRef.current.offsetTop) {
        setActiveSection('photography');
      } else if (projectsRef.current && scrollY >= projectsRef.current.offsetTop) {
        setActiveSection('projects');
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
      if (e.ctrlKey && ['s', 'p', 'u', 'S', 'P', 'U'].includes(e.key)) {
        e.preventDefault();
      }
      if (e.key === 'F12') {
        e.preventDefault();
      }
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C', 'i', 'j', 'c'].includes(e.key)) {
        e.preventDefault();
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('');
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 overflow-x-hidden font-sans selection:bg-zinc-100 selection:text-zinc-950">
      <BackgroundParticles />

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        refs={{ photographyRef, projectsRef, contactRef }}
      />

      <HeroSection scrollToRef={scrollToSection} refs={{ projectsRef, contactRef }} />

      <EdukaByteSpotlight />

      <ProjectsSection sectionRef={projectsRef} />

      <PhotographySection sectionRef={photographyRef} onSelectProject={setSelectedProject} />

      <ContactSection sectionRef={contactRef} />

      <Footer />

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}
