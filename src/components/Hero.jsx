import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/disasters');
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Inteligência Artificial para Prevenção de Desastres Naturais</h1>
        <p className="hero-subtitle">
          Utilizando tecnologia avançada para prever, monitorar e mitigar os impactos dos desastres naturais
        </p>
        <div className="hero-buttons">
          <button className="hero-button primary">Saiba Mais</button>
          <button className="hero-button secondary" onClick={handleExploreClick}>
            Explorar Desastres
          </button>
        </div>
      </div>
      <div className="hero-stats">
        <div className="stat-card">
          <h3>+1000</h3>
          <p>Alertas Precisos</p>
        </div>
        <div className="stat-card">
          <h3>24/7</h3>
          <p>Monitoramento</p>
        </div>
        <div className="stat-card">
          <h3>95%</h3>
          <p>Precisão</p>
        </div>
      </div>
    </div>
  );
};

export default Hero; 