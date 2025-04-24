import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DisasterPage.css';

const Tailandia = () => {
  // Dados das chuvas
  const rainfallData = [
    { date: 'Jul', rainfall: 350 },
    { date: 'Ago', rainfall: 420 },
    { date: 'Set', rainfall: 480 },
    { date: 'Out', rainfall: 520 },
    { date: 'Nov', rainfall: 380 },
    { date: 'Dez', rainfall: 290 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Duração',
      value: '175 dias',
      description: 'A mais longa inundação da história do país'
    },
    {
      icon: <FaBuilding />,
      title: 'Área Afetada',
      value: '65',
      description: 'Províncias atingidas de 77 totais'
    },
    {
      icon: <FaUsers />,
      title: 'Pessoas Afetadas',
      value: '13,6 mi',
      description: '20% da população do país'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 45,7 bi',
      description: 'Impacto significativo na economia global'
    }
  ];

  return (
    <div className="disaster-page">
      <div className="disaster-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/2011_flooding_in_Hat_Yai_01.jpg/800px-2011_flooding_in_Hat_Yai_01.jpg" alt="Inundação na Tailândia" className="disaster-image" />
          Inundação na Tailândia 2011
        </h1>
        <p className="subtitle">Julho a Dezembro de 2011</p>
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
            A Grande Inundação da Tailândia de 2011 foi uma das piores da história do país.
            Começou com fortes monções e foi agravada por cinco tempestades tropicais sucessivas.
            A inundação afetou principalmente a região do delta do rio Chao Phraya, incluindo Bangkok.
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
            <li>Paralisação da produção industrial global</li>
            <li>Escassez de HDs no mercado mundial</li>
            <li>Destruição de 25% da safra de arroz</li>
            <li>Inundação de sete parques industriais</li>
            <li>Impacto no turismo internacional</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Necessidade de melhor gestão de recursos hídricos</li>
            <li>Importância da diversificação da cadeia de suprimentos</li>
            <li>Fortalecimento da infraestrutura de drenagem</li>
            <li>Melhor planejamento de zonas industriais</li>
            <li>Preparação para eventos climáticos extremos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tailandia; 