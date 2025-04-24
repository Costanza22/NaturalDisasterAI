import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DisasterPage.css';

const Brasil = () => {
  // Dados das chuvas
  const rainfallData = [
    { date: '11/01', rainfall: 180 },
    { date: '12/01', rainfall: 260 },
    { date: '13/01', rainfall: 140 },
    { date: '14/01', rainfall: 120 },
    { date: '15/01', rainfall: 90 },
    { date: '16/01', rainfall: 70 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Precipitação',
      value: '260mm',
      description: 'Volume em 24h - Região Serrana do RJ'
    },
    {
      icon: <FaBuilding />,
      title: 'Danos Estruturais',
      value: '14.000+',
      description: 'Edificações destruídas ou danificadas'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas',
      value: '916',
      description: 'Mortes confirmadas'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'R$ 4,8 bi',
      description: 'Prejuízos materiais estimados'
    }
  ];

  return (
    <div className="disaster-page">
      <div className="disaster-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Nova_Friburgo_-_Rio_de_Janeiro_-_Brasil_-_Desastre_Natural.jpg/800px-Nova_Friburgo_-_Rio_de_Janeiro_-_Brasil_-_Desastre_Natural.jpg" alt="Inundação no Brasil" className="disaster-image" />
          Inundação no Brasil 2011
        </h1>
        <p className="subtitle">11-12 de Janeiro de 2011</p>
      </div>

      <div className="disaster-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="disaster-content">
        <div className="info-section">
          <h2>A Inundação e Seu Impacto</h2>
          <p>
            O Megadesastre da Região Serrana do Rio de Janeiro foi o maior desastre natural da história do Brasil.
            Chuvas intensas causaram deslizamentos e inundações devastadoras em várias cidades, incluindo Nova Friburgo,
            Teresópolis e Petrópolis, resultando em centenas de mortes e destruição generalizada.
          </p>
        </div>

        <div className="chart-section">
          <h2>Volume de Chuva</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rainfallData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'mm', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="rainfall" stroke="#ff6b6b" name="Precipitação" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Deslizamentos de terra em larga escala</li>
            <li>Destruição de bairros inteiros</li>
            <li>Colapso da infraestrutura urbana</li>
            <li>Milhares de pessoas desabrigadas</li>
            <li>Isolamento de comunidades</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Necessidade de melhor planejamento urbano</li>
            <li>Importância do mapeamento de áreas de risco</li>
            <li>Fortalecimento dos sistemas de alerta</li>
            <li>Prevenção de ocupações em áreas perigosas</li>
            <li>Melhoria na resposta a desastres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Brasil; 