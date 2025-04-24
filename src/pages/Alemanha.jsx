import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './DisasterPage.css';

const Alemanha = () => {
  // Dados das chuvas
  const rainfallData = [
    { date: '13/07', rainfall: 90 },
    { date: '14/07', rainfall: 148 },
    { date: '15/07', rainfall: 162 },
    { date: '16/07', rainfall: 85 },
    { date: '17/07', rainfall: 45 },
    { date: '18/07', rainfall: 30 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Precipitação',
      value: '162mm',
      description: 'Volume em 24h - Recorde histórico'
    },
    {
      icon: <FaBuilding />,
      title: 'Infraestrutura',
      value: '17.000+',
      description: 'Edifícios danificados na Renânia'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas',
      value: '242',
      description: 'Mortes confirmadas na Europa'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: '€33 bi',
      description: 'Uma das inundações mais caras da Europa'
    }
  ];

  return (
    <div className="disaster-page">
      <div className="disaster-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Flutkatastrophe_in_Bad_Neuenahr-Ahrweiler.jpg/800px-Flutkatastrophe_in_Bad_Neuenahr-Ahrweiler.jpg" alt="Inundação na Alemanha" className="disaster-image" />
          Inundação na Alemanha 2021
        </h1>
        <p className="subtitle">14-15 de Julho de 2021</p>
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
            As inundações na Europa em 2021 foram um evento extremo que afetou principalmente a Alemanha e países vizinhos.
            Chuvas recordes causaram o transbordamento de rios e rompimento de barragens, levando a uma das piores
            catástrofes naturais da história recente da Alemanha.
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
            <li>Destruição de pontes e estradas históricas</li>
            <li>Colapso de sistemas de comunicação</li>
            <li>Evacuação de milhares de residentes</li>
            <li>Danos à infraestrutura ferroviária</li>
            <li>Interrupção do fornecimento de energia</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Melhoria nos sistemas de alerta precoce</li>
            <li>Adaptação à mudança climática</li>
            <li>Modernização da infraestrutura de drenagem</li>
            <li>Importância da comunicação de emergência</li>
            <li>Preparação para eventos extremos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alemanha; 