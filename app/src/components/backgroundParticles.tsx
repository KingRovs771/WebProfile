'use client';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden bg-[#09090b]">
      {/* Subtle architectural grid with radial mask */}
      <div
        className="absolute inset-0 bg-architectural-grid"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 15%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 15%, black 30%, transparent 100%)',
        }}
      />

      {/* Top atmospheric studio light (neutral alabaster/warm silver, zero neon blue) */}
      <div
        className="absolute -top-48 left-1/2 -translate-x-1/2 w-[960px] h-[420px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #ffffff 0%, #a1a1aa 45%, transparent 75%)',
        }}
      />

      {/* Vertical structural guide lines on wide viewports */}
      <div className="max-w-7xl mx-auto h-full border-x border-white/[0.04] flex justify-between">
        <div className="h-full w-px bg-white/[0.02] hidden lg:block" />
        <div className="h-full w-px bg-white/[0.02] hidden lg:block" />
        <div className="h-full w-px bg-white/[0.02] hidden lg:block" />
      </div>
    </div>
  );
};

export default BackgroundParticles;
