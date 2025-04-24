import React from 'react';
import { Link } from 'react-router-dom';
import { FaWind, FaFire, FaWater, FaGlobeAmericas } from 'react-icons/fa';
import './DisasterCards.css';

const disasters = [
  {
    id: 1,
    title: 'Terremotos',
    description: 'Monitoramento sísmico em tempo real e previsão de atividades tectônicas.',
    icon: <FaGlobeAmericas className="disaster-icon" />,
    color: '#FF6B6B',
    disasters: [
      { name: 'Haiti 2010', path: '/haiti' },
      { name: 'Japão 2011', path: '/japao' },
      { name: 'Nepal 2015', path: '/nepal' }
    ]
  },
  {
    id: 2,
    title: 'Furacões',
    description: 'Rastreamento e previsão de tempestades tropicais e furacões.',
    icon: <FaWind className="disaster-icon" />,
    color: '#4ECDC4',
    disasters: [
      { name: 'Katrina', path: '/katrina' },
      { name: 'Irma', path: '/irma' },
      { name: 'Harvey', path: '/harvey' }
    ]
  },
  {
    id: 3,
    title: 'Inundações',
    description: 'Sistema de alerta precoce para enchentes e alagamentos.',
    icon: <FaWater className="disaster-icon" />,
    color: '#45B7D1',
    disasters: [
      { name: 'Brasil 2011', path: '/inundacao-brasil' },
      { name: 'Tailândia 2011', path: '/inundacao-tailandia' },
      { name: 'Alemanha 2021', path: '/inundacao-alemanha' }
    ]
  },
  {
    id: 4,
    title: 'Incêndios',
    description: 'Detecção e monitoramento de incêndios florestais.',
    icon: <FaFire className="disaster-icon" />,
    color: '#FFA07A',
    disasters: [
      { name: 'Austrália 2019', path: '/incendio-australia' },
      { name: 'Amazônia 2019', path: '/incendio-amazonia' },
      { name: 'Califórnia 2020', path: '/incendio-california' }
    ]
  }
];

const DisasterCards = () => {
  return (
    <div className="disaster-cards-container">
      <h2 className="section-title">Tipos de Desastres Monitorados</h2>
      <div className="cards-grid">
        {disasters.map((disaster) => (
          <div 
            key={disaster.id} 
            className="disaster-card"
            style={{ '--card-color': disaster.color }}
          >
            <div className="card-icon">{disaster.icon}</div>
            <h3 className="card-title">{disaster.title}</h3>
            <p className="card-description">{disaster.description}</p>
            {disaster.disasters && (
              <div className="disaster-links">
                <h4>Casos Históricos:</h4>
                {disaster.disasters.map((item, index) => (
                  <Link key={index} to={item.path} className="disaster-link">
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisasterCards; 