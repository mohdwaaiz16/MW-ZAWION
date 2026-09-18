import { CustomCursor } from './components/Interaction/CustomCursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      {/* Global Interactions */}
      <CustomCursor />
      
      {/* Main Layout wrapper goes here */}
      <div className="min-h-screen bg-mw-black text-mw-offwhite selection:bg-mw-purple selection:text-mw-offwhite">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
