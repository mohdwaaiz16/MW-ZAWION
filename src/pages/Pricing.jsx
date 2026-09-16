import React, { useEffect } from 'react';
import CinematicPricing from '../components/Pricing/CinematicPricing';
import ProjectEstimator from '../components/Estimator/ProjectEstimator';

const Pricing = () => {
  useEffect(() => {
    document.title = "MW Zawion — Pricing";
  }, []);

  return (
    <div className="w-full bg-mw-black">
      <div className="absolute top-12 left-6 md:left-12 flex flex-col gap-1 z-10 pointer-events-none">
        <span className="text-mw-accent font-mono text-xs tracking-widest uppercase">EVERY BUILD HAS A SCALE.</span>
      </div>
      <CinematicPricing />
      <ProjectEstimator />
    </div>
  );
};

export default Pricing;
