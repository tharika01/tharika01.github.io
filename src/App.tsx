import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Starfield from './components/Starfield';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-ink text-neutral-300">
        <Starfield count={200} />
        <div className="relative z-10">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;