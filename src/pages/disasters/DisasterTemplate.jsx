import React from 'react';
import { useParams } from 'react-router-dom';
import { disasterTypes } from '../../components/DisasterCards';
import './DisasterTemplate.css';

const DisasterTemplate = () => {
  const { disasterId } = useParams();
  const disaster = disasterTypes.find(d => d.id === disasterId);

  if (!disaster) {
    return <div>Desastre não encontrado</div>;
  }

  return (
    <div className="disaster-page">
      <div className="disaster-header" style={{ backgroundColor: disaster.color }}>
        <div className="disaster-icon">
          {disaster.icon}
        </div>
        <h1>{disaster.title}</h1>
      </div>
      
      <div className="disaster-content">
        <div className="disaster-description">
          <h2>Descrição</h2>
          <p>{disaster.description}</p>
        </div>

        <div className="disaster-prevention">
          <h2>Prevenção</h2>
          <ul>
            {disaster.prevention.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="disaster-response">
          <h2>Como Responder</h2>
          <ul>
            {disaster.response.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisasterTemplate; 