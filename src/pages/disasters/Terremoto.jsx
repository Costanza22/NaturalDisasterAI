import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FaEarthquake, FaExclamationTriangle, FaBuilding, FaHome, FaHospital, FaPhone } from 'react-icons/fa';
import './DisasterTemplate.css';

const Terremoto = () => {
  const [chartData, setChartData] = useState({
    labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [{
      label: 'Terremotos por Ano (Magnitude > 5.0)',
      data: [12, 15, 8, 10, 14, 9],
      borderColor: '#e74c3c',
      backgroundColor: 'rgba(231, 76, 60, 0.1)',
      tension: 0.4
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
        text: 'Ocorrências de Terremotos no Brasil'
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
        <FaEarthquake className="disaster-icon" />
        <h1>Terremotos</h1>
      </div>

      <div className="disaster-content">
        <div className="disaster-description">
          <h2>O que são Terremotos?</h2>
          <p>
            Terremotos são vibrações bruscas da superfície terrestre, resultantes de movimentos 
            nas placas tectônicas ou atividades vulcânicas. No Brasil, embora raros, podem ocorrer 
            terremotos de baixa a média intensidade, principalmente nas regiões Norte e Nordeste.
          </p>
          <div className="image-gallery">
            <img src="/images/terremoto1.jpg" alt="Efeitos de um terremoto" className="disaster-image" />
            <img src="/images/terremoto2.jpg" alt="Danos causados por terremoto" className="disaster-image" />
          </div>
        </div>

        <div className="disaster-prevention">
          <h2>Prevenção</h2>
          <ul>
            <li><FaBuilding /> Construa em áreas geologicamente estáveis</li>
            <li><FaHome /> Siga as normas de construção anti-sísmicas</li>
            <li><FaExclamationTriangle /> Mantenha um kit de emergência sempre à mão</li>
            <li>Identifique pontos seguros em sua casa</li>
            <li>Participe de simulações de evacuação</li>
          </ul>
        </div>

        <div className="disaster-response">
          <h2>Como Responder</h2>
          <ul>
            <li>Mantenha a calma e proteja-se</li>
            <li>Procure abrigo sob móveis resistentes</li>
            <li>Afaste-se de janelas e objetos que possam cair</li>
            <li>Não use elevadores durante o tremor</li>
            <li>Após o tremor, verifique vazamentos de gás e danos estruturais</li>
          </ul>
        </div>

        <div className="disaster-chart">
          <h2>Estatísticas</h2>
          <Line data={chartData} options={chartOptions} />
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

export default Terremoto; 