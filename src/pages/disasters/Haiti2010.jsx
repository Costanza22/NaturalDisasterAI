import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaExclamationTriangle, FaBuilding, FaHospital, FaUsers, FaDollarSign, FaGlobe } from 'react-icons/fa';
import './DisasterTemplate.css';

const Haiti2010 = () => {
  const impactData = {
    labels: ['Mortes', 'Feridos', 'Desabrigados', 'Edifícios Destruídos'],
    datasets: [{
      label: 'Impacto do Terremoto',
      data: [316000, 300000, 1500000, 250000],
      backgroundColor: [
        'rgba(231, 76, 60, 0.8)',
        'rgba(52, 152, 219, 0.8)',
        'rgba(155, 89, 182, 0.8)',
        'rgba(241, 196, 15, 0.8)'
      ],
      borderColor: [
        'rgba(231, 76, 60, 1)',
        'rgba(52, 152, 219, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(241, 196, 15, 1)'
      ],
      borderWidth: 1
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Impacto do Terremoto do Haiti (2010)'
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="disaster-page">
      <div className="disaster-header" style={{ backgroundColor: '#e74c3c' }}>
        <FaExclamationTriangle className="disaster-icon" />
        <h1>Terremoto do Haiti (2010)</h1>
      </div>

      <div className="disaster-content">
        <div className="disaster-description">
          <h2>O Desastre</h2>
          <p>
            O terremoto do Haiti de 2010 foi um desastre natural de magnitude 7.0 que atingiu 
            o país em 12 de janeiro de 2010. O epicentro foi localizado a cerca de 25 km da 
            capital Porto Príncipe, causando destruição generalizada e uma das maiores crises 
            humanitárias da história recente.
          </p>
          <div className="image-gallery">
            <img src="/images/haiti1.jpg" alt="Destruição em Porto Príncipe" className="disaster-image" />
            <img src="/images/haiti2.jpg" alt="Resgate de vítimas" className="disaster-image" />
          </div>
        </div>

        <div className="disaster-details">
          <h2>Detalhes do Terremoto</h2>
          <ul>
            <li><FaGlobe /> Data: 12 de janeiro de 2010</li>
            <li><FaExclamationTriangle /> Magnitude: 7.0</li>
            <li><FaBuilding /> Profundidade: 13 km</li>
            <li><FaDollarSign /> Danos estimados: US$ 7.8 bilhões</li>
          </ul>
        </div>

        <div className="disaster-impact">
          <h2>Impacto Humanitário</h2>
          <ul>
            <li><FaUsers /> Mortes: 316,000</li>
            <li><FaHospital /> Feridos: 300,000</li>
            <li>Desabrigados: 1.5 milhão</li>
            <li>Edifícios destruídos: 250,000</li>
          </ul>
        </div>

        <div className="disaster-chart">
          <h2>Estatísticas do Impacto</h2>
          <Line data={impactData} options={chartOptions} />
        </div>

        <div className="disaster-response">
          <h2>Resposta Internacional</h2>
          <ul>
            <li>Mobilização de mais de 50 países</li>
            <li>Envio de equipes de resgate e ajuda humanitária</li>
            <li>Doações internacionais superiores a US$ 13 bilhões</li>
            <li>Reconstrução de infraestrutura básica</li>
          </ul>
        </div>

        <div className="disaster-lessons">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da preparação para desastres</li>
            <li>Necessidade de construção anti-sísmica</li>
            <li>Coordenação internacional em crises humanitárias</li>
            <li>Planejamento urbano e gestão de riscos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Haiti2010; 