import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import LoadingSequence from './components/Loading/LoadingSequence';
import GlobalNav from './components/Navigation/GlobalNav';
import Footer from './components/Navigation/Footer';
import PageTransition from './components/Transitions/PageTransition';

// Pages
import Home from './pages/Home';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Capabilities from './pages/Capabilities';
import Industries from './pages/Industries';
import Pricing from './pages/Pricing';
import Lab from './pages/Lab';
import Intelligence from './pages/Intelligence';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
import Links from './pages/Links';
import NotFound from './pages/NotFound';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="bg-mw-white min-h-screen text-mw-black selection:bg-mw-accent selection:text-mw-white overflow-x-hidden font-sans">
      <GlobalNav />
      
      {isLoading && <LoadingSequence onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'h-screen overflow-hidden' : ''}>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/work/:id" element={<ProjectDetail />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/lab" element={<Lab />} />
            <Route path="/intelligence" element={<Intelligence />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/links" element={<Links />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <Footer />
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
