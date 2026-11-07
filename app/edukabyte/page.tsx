'use client';

import { useState } from 'react';
import BackgroundParticles from '../src/components/backgroundParticles';
import EdukaNavbar from '../src/components/edukabyte/EdukaNavbar';
import EdukaHero from '../src/components/edukabyte/EdukaHero';
import ProductCardsSection from '../src/components/edukabyte/ProductCardsSection';
import GraphicMotionShowcase from '../src/components/edukabyte/GraphicMotionShowcase';
import SchoolImpactCalculator from '../src/components/edukabyte/SchoolImpactCalculator';
import EdukaArchitectureSection from '../src/components/edukabyte/EdukaArchitectureSection';
import EdukaOrderSection from '../src/components/edukabyte/EdukaOrderSection';
import ProductDetailModal from '../src/components/edukabyte/ProductDetailModal';
import EdukaFooter from '../src/components/edukabyte/EdukaFooter';
import { EdukaProduct } from '../src/library/edukabyteData';

export default function EdukaByteHomePage() {
  const [selectedProduct, setSelectedProduct] = useState<EdukaProduct | null>(null);
  const [simulationTarget, setSimulationTarget] = useState<string>('cbt');
  const [orderProductId, setOrderProductId] = useState<string | null>(null);

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

  const handleOrderProduct = (productId?: string) => {
    if (productId) {
      setOrderProductId(productId);
    }
    scrollToSection('pesan');
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-zinc-100 selection:text-zinc-950 relative overflow-x-hidden">
      <BackgroundParticles />

      {/* Top Architectural Navbar */}
      <EdukaNavbar onOrderClick={handleOrderProduct} />

      {/* Hero Section with Interactive Topology Schematic */}
      <EdukaHero
        onExploreClick={() => scrollToSection('produk')}
        onSimulationClick={() => scrollToSection('simulasi')}
        onOrderClick={handleOrderProduct}
      />

      {/* Product Catalog & Spec Cards (CBT EdukaByte, PustakaKita, DS Education) */}
      <ProductCardsSection
        onSelectProduct={(product) => setSelectedProduct(product)}
        onSimulationClick={handleLaunchSimulation}
        onOrderProduct={handleOrderProduct}
      />

      {/* Interactive System Telemetry Simulator */}
      <GraphicMotionShowcase initialTab={simulationTarget} />

      {/* Budget & Time Efficiency Simulator */}
      <SchoolImpactCalculator />

      {/* Self-Hosted Architecture & Sovereignty */}
      <EdukaArchitectureSection />

      {/* Direct School Order & Procurement Configurator (rovsgame771@gmail.com) */}
      <EdukaOrderSection selectedProductId={orderProductId} />

      {/* Product Specification Sheet Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSimulationClick={(pId) => {
          setSelectedProduct(null);
          handleLaunchSimulation(pId);
        }}
        onOrderProduct={(pId) => {
          setSelectedProduct(null);
          handleOrderProduct(pId);
        }}
      />

      {/* Footer */}
      <EdukaFooter />
    </div>
  );
}
