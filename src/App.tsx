import { CustomCursor } from './components/Interaction/CustomCursor';
import { Navbar } from './components/Navigation/Navbar';
import { Footer } from './components/Navigation/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
