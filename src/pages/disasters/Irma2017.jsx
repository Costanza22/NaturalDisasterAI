import React from 'react';
import { Line } from 'react-chartjs-2';
import { FaWind, FaExclamationTriangle, FaBuilding, FaHospital, FaUsers, FaDollarSign, FaGlobe } from 'react-icons/fa';
import './DisasterTemplate.css';

const Irma2017 = () => {
  const impactData = {
    labels: ['Mortes', 'Feridos', 'Desabrigados', 'Danos (US$ bilhões)'],
    datasets: [{
      label: 'Impacto do Furacão Irma',
      data: [134, 2000, 6000000, 77.2],
      backgroundColor: [
        'rgba(52, 152, 219, 0.8)',
        'rgba(46, 204, 113, 0.8)',
        'rgba(155, 89, 182, 0.8)',
        'rgba(241, 196, 15, 0.8)'
      ],
      borderColor: [
        'rgba(52, 152, 219, 1)',
        'rgba(46, 204, 113, 1)',
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
        text: 'Impacto do Furacão Irma (2017)'
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
        <FaWind className="disaster-icon" />
        <h1>Furacão Irma (2017)</h1>
      </div>

      <div className="disaster-content">
        <div className="disaster-description">
          <h2>O Desastre</h2>
          <p>
            O Furacão Irma foi um dos furacões mais poderosos já registrados no Atlântico, 
            atingindo a categoria 5 e causando devastação em várias ilhas do Caribe e 
            partes da Flórida em setembro de 2017. Foi o primeiro furacão a manter ventos 
            de 185 mph (298 km/h) por 37 horas consecutivas.
          </p>
          <div className="image-gallery">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Irma_2017-09-05_1706Z.jpg" 
                 alt="Imagem de satélite do Furacão Irma" 
                 className="disaster-image" />
            <img src="/images/irma2.jpg" alt="Danos causados pelo furacão" className="disaster-image" />
          </div>
        </div>

        <div className="disaster-details">
          <h2>Detalhes do Furacão</h2>
          <ul>
            <li><FaGlobe /> Data: 30 de agosto - 12 de setembro de 2017</li>
            <li><FaWind /> Categoria: 5 (máxima)</li>
            <li><FaExclamationTriangle /> Ventos máximos: 298 km/h</li>
            <li><FaDollarSign /> Danos estimados: US$ 77.2 bilhões</li>
          </ul>
        </div>

        <div className="disaster-impact">
          <h2>Impacto Humanitário</h2>
          <ul>
            <li><FaUsers /> Mortes: 134</li>
            <li><FaHospital /> Feridos: 2,000</li>
            <li>Desabrigados: 6 milhões</li>
            <li>Edifícios destruídos: 95% em Barbuda</li>
          </ul>
        </div>

        <div className="disaster-chart">
          <h2>Estatísticas do Impacto</h2>
          <Line data={impactData} options={chartOptions} />
        </div>

        <div className="disaster-response">
          <h2>Resposta Internacional</h2>
          <ul>
            <li>Maior evacuação em massa da história da Flórida</li>
            <li>Mobilização de equipes de resgate internacionais</li>
            <li>Ajuda humanitária de mais de 30 países</li>
            <li>Reconstrução de infraestrutura básica</li>
          </ul>
        </div>

        <div className="disaster-lessons">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância dos sistemas de alerta precoce</li>
            <li>Necessidade de evacuações planejadas</li>
            <li>Melhorias na infraestrutura de proteção</li>
            <li>Coordenação internacional em desastres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Irma2017; 