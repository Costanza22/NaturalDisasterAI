import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { FaWater, FaExclamationTriangle, FaUmbrella, FaLifeRing, FaPhone, FaHospital } from 'react-icons/fa';
import './DisasterTemplate.css';

const Inundacao = () => {
  const [chartData, setChartData] = useState({
    labels: ['Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'],
    datasets: [{
      label: 'Inundações por Região (2023)',
      data: [25, 18, 12, 30, 15],
      backgroundColor: [
        'rgba(52, 152, 219, 0.8)',
        'rgba(46, 204, 113, 0.8)',
        'rgba(155, 89, 182, 0.8)',
        'rgba(52, 73, 94, 0.8)',
        'rgba(241, 196, 15, 0.8)'
      ],
      borderColor: [
        'rgba(52, 152, 219, 1)',
        'rgba(46, 204, 113, 1)',
        'rgba(155, 89, 182, 1)',
        'rgba(52, 73, 94, 1)',
        'rgba(241, 196, 15, 1)'
      ],
      borderWidth: 1
    }]
  });

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Inundações por Região do Brasil'
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
      <div className="disaster-header" style={{ backgroundColor: '#3498db' }}>
        <FaWater className="disaster-icon" />
        <h1>Inundações</h1>
      </div>

      <div className="disaster-content">
        <div className="disaster-description">
          <h2>O que são Inundações?</h2>
          <p>
            Inundações são fenômenos naturais que ocorrem quando há um excesso de água 
            em áreas normalmente secas. Podem ser causadas por chuvas intensas, rompimento 
            de barragens ou transbordamento de rios. No Brasil, as inundações são comuns 
            em várias regiões, especialmente durante o período de chuvas.
          </p>
          <div className="image-gallery">
            <img src="/images/inundacao1.jpg" alt="Área inundada" className="disaster-image" />
            <img src="/images/inundacao2.jpg" alt="Ruas alagadas" className="disaster-image" />
          </div>
        </div>

        <div className="disaster-prevention">
          <h2>Prevenção</h2>
          <ul>
            <li><FaUmbrella /> Mantenha bueiros e sistemas de drenagem limpos</li>
            <li><FaExclamationTriangle /> Evite construir em áreas de risco</li>
            <li>Mantenha um plano de evacuação familiar</li>
            <li>Tenha um kit de emergência preparado</li>
            <li>Monitore alertas meteorológicos</li>
          </ul>
        </div>

        <div className="disaster-response">
          <h2>Como Responder</h2>
          <ul>
            <li><FaLifeRing /> Evite áreas alagadas</li>
            <li>Não tente atravessar ruas inundadas</li>
            <li>Desligue a energia elétrica se a água entrar em casa</li>
            <li>Mantenha-se em local seguro e elevado</li>
            <li>Siga as orientações das autoridades</li>
          </ul>
        </div>

        <div className="disaster-chart">
          <h2>Estatísticas</h2>
          <Bar data={chartData} options={chartOptions} />
        </div>

        <div className="emergency-contacts">
          <h2>Contatos de Emergência</h2>
          <ul>
            <li><FaPhone /> Defesa Civil: 199</li>
            <li><FaHospital /> SAMU: 192</li>
            <li><FaPhone /> Bombeiros: 193</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inundacao; 