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
      const scrollY = window.scrollY + 100;

      if (photographyRef.current && scrollY >= photographyRef.current.offsetTop - 100) {
        setActiveSection('photography');
      } else if (projectsRef.current && scrollY >= projectsRef.current.offsetTop - 100) {
        setActiveSection('projects');
      } else if (contactRef.current && scrollY >= contactRef.current.offsetTop - 100) {
        setActiveSection('contact');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
