import { CustomCursor } from './components/Interaction/CustomCursor';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Navigation/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      {/* Global Interactions */}
      <CustomCursor />
      
      {/* Main Layout wrapper */}
      <div className="min-h-screen bg-mw-black text-mw-offwhite selection:bg-mw-purple selection:text-mw-offwhite font-sans flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
