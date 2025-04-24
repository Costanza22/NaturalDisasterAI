import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">NaturalDisasterAI</span>
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/disasters" className="nav-item">Desastres</Link>
          <Link to="/prevention" className="nav-item">Prevenção</Link>
          <Link to="/about" className="nav-item">Sobre</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 