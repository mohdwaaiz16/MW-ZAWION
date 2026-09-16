import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

import LoadingSequence from './components/Loading/LoadingSequence';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';

import TheVoid from './sections/Act1/TheVoid';
import CinematicStory from './components/Story/CinematicStory';
import ServicesList from './sections/Services/ServicesList';
import SelectedWork from './sections/Act5/SelectedWork';
import CinematicPricing from './components/Pricing/CinematicPricing';
import ProjectEstimator from './components/Estimator/ProjectEstimator';
import TheHuman from './sections/Act6/TheHuman';
import Philosophy from './sections/Philosophy/Philosophy';
import FinalCTA from './components/Estimator/FinalCTA';

import CustomCursor from './components/Interaction/CustomCursor';
import FilmGrain from './components/Effects/FilmGrain';

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Handle scroll for GSAP
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-mw-black min-h-screen text-mw-white selection:bg-mw-accent selection:text-mw-black overflow-x-hidden">
      <CustomCursor />
      <FilmGrain />
      
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        <Navigation />
        
        <main>
          <TheVoid />
          <CinematicStory />
          <ServicesList />
          <SelectedWork />
          <CinematicPricing />
          <ProjectEstimator />
          <TheHuman />
          <Philosophy />
          <FinalCTA />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
