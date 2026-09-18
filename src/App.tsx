import { CustomCursor } from './components/Interaction/CustomCursor';
import { Navbar } from './components/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Global Interactions */}
      <CustomCursor />
      
      {/* Main Layout wrapper */}
      <div className="min-h-screen bg-mw-black text-mw-offwhite selection:bg-mw-purple selection:text-mw-offwhite font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
