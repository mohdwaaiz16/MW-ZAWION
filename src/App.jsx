import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';

import LoadingSequence from './components/Loading/LoadingSequence';
import GlobalNav from './components/Navigation/GlobalNav';
import ZawionCore from './components/Core/ZawionCore';
import PageTransition from './components/Transitions/PageTransition';
import EasterEgg from './components/Interaction/EasterEgg';
import CustomCursor from './components/Interaction/CustomCursor';
import FilmGrain from './components/Effects/FilmGrain';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Lab from './pages/Lab';
import Intelligence from './pages/Intelligence';
import About from './pages/About';
import Contact from './pages/Contact';

function AppContent() {
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]); // Re-init Lenis on route change if needed, or just let it persist

  return (
    <div className="bg-mw-black min-h-screen text-mw-white selection:bg-mw-accent selection:text-mw-black overflow-x-hidden">
      <CustomCursor />
      <FilmGrain />
      <ZawionCore />
      <EasterEgg />
      <GlobalNav />
      
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
