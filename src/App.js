import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeContent from './components/HomeContent';
import Disasters from './pages/Disasters';
import Prevention from './pages/Prevention';
import Katrina from './pages/Katrina';
import Irma from './pages/Irma';
import Harvey from './pages/Harvey';
import Haiti from './pages/Haiti';
import Japao from './pages/Japao';
import Nepal from './pages/Nepal';
import Brasil from './pages/Brasil';
import Tailandia from './pages/Tailandia';
import Alemanha from './pages/Alemanha';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HomeContent />
            </>
          } />
          <Route path="/disasters" element={<Disasters />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/katrina" element={<Katrina />} />
          <Route path="/irma" element={<Irma />} />
          <Route path="/harvey" element={<Harvey />} />
          <Route path="/haiti" element={<Haiti />} />
          <Route path="/japao" element={<Japao />} />
          <Route path="/nepal" element={<Nepal />} />
          <Route path="/brasil" element={<Brasil />} />
          <Route path="/tailandia" element={<Tailandia />} />
          <Route path="/alemanha" element={<Alemanha />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
