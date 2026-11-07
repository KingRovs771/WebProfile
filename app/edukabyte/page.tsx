'use client';

import { useState } from 'react';
import EdukaNavbar from '../src/components/edukabyte/EdukaNavbar';
import EdukaHero from '../src/components/edukabyte/EdukaHero';
import ProductCardsSection from '../src/components/edukabyte/ProductCardsSection';
import GraphicMotionShowcase from '../src/components/edukabyte/GraphicMotionShowcase';
import SchoolImpactCalculator from '../src/components/edukabyte/SchoolImpactCalculator';
import EdukaArchitectureSection from '../src/components/edukabyte/EdukaArchitectureSection';
import ProductDetailModal from '../src/components/edukabyte/ProductDetailModal';
import EdukaFooter from '../src/components/edukabyte/EdukaFooter';
import { EdukaProduct, EDUKABYTE_PRODUCTS } from '../src/library/edukabyteData';

export default function EdukaByteHomePage() {
  const [selectedProduct, setSelectedProduct] = useState<EdukaProduct | null>(null);
  const [simulationTarget, setSimulationTarget] = useState<string>('cbt');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLaunchSimulation = (productId: string) => {
    setSimulationTarget(productId);
    scrollToSection('simulasi');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-sky-500 selection:text-white relative overflow-x-hidden">
      {/* Top Navbar */}
      <EdukaNavbar
        onContactClick={() => {
          const contactSection = document.getElementById('kalkulator-hemat');
          contactSection?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Section with Graphic Motion */}
      <EdukaHero
        onExploreClick={() => scrollToSection('produk')}
        onSimulationClick={() => scrollToSection('simulasi')}
      />

      {/* Flagship Product Cards Showcase (PustakaKita, CBT EdukaByte, DS Education) */}
      <ProductCardsSection
        onSelectProduct={(product) => setSelectedProduct(product)}
        onSimulationClick={handleLaunchSimulation}
      />

      {/* Interactive Graphic Motion Simulator */}
      <GraphicMotionShowcase initialTab={simulationTarget} />

      {/* School Savings & ROI Calculator */}
      <SchoolImpactCalculator />

      {/* Self-Hosted Architecture & Sovereignty */}
      <EdukaArchitectureSection />

      {/* Product Deep-Dive Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSimulationClick={(pId) => {
          setSelectedProduct(null);
          handleLaunchSimulation(pId);
        }}
      />

      {/* Footer */}
      <EdukaFooter />
    </div>
  );
}

