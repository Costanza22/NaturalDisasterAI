import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Harvey = () => {
  // Dados históricos do Furacão Harvey
  const windSpeedData = [
    { date: '17/08', speed: 100 },
    { date: '18/08', speed: 120 },
    { date: '19/08', speed: 130 },
    { date: '20/08', speed: 140 },
    { date: '21/08', speed: 150 },
    { date: '22/08', speed: 160 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Categoria',
      value: '4',
      description: 'Máxima intensidade - Escala Saffir-Simpson'
    },
    {
      icon: <FaBuilding />,
      title: 'Danos Estruturais',
      value: '200.000+',
      description: 'Edifícios danificados no Texas'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '107',
      description: 'Mortes confirmadas'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 125 bilhões',
      description: 'Um dos furacões mais caros da história'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Harvey_2017-08-25_2337Z.jpg" alt="Furacão Harvey" className="hurricane-image" />
          Furacão Harvey
        </h1>
        <p className="subtitle">17-30 de Agosto de 2017</p>
      </div>

      <div className="katrina-stats">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.title}</h3>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>

      <div className="katrina-content">
        <div className="info-section">
          <h2>O Furacão e Seu Impacto</h2>
          <p>
            O Furacão Harvey foi um dos furacões mais destrutivos da história dos Estados Unidos.
            Atingiu o Texas em agosto de 2017, causando chuvas torrenciais e inundações catastróficas.
            Ficou estacionário sobre a região por vários dias, resultando em precipitação recorde.
          </p>
        </div>

        <div className="chart-section">
          <h2>Velocidade do Vento</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={windSpeedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'km/h', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="speed" stroke="#ff6b6b" name="Velocidade" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Inundações recordes em Houston e arredores</li>
            <li>Mais de 1 metro de chuva em algumas áreas</li>
            <li>Interrupção da produção de petróleo no Golfo</li>
            <li>Evacuação de milhares de pessoas</li>
            <li>Danos extensos à infraestrutura</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância do planejamento urbano para enchentes</li>
            <li>Necessidade de sistemas de drenagem mais robustos</li>
            <li>Melhoria nos sistemas de alerta de enchentes</li>
            <li>Preparação para eventos climáticos extremos</li>
            <li>Coordenação entre agências de resposta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Harvey; 