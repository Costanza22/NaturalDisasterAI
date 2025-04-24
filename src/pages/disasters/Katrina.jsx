import React from 'react';
import { FaWind, FaWater, FaExclamationTriangle, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Katrina = () => {
  // Dados históricos do Furacão Katrina
  const windSpeedData = [
    { date: '23/08', speed: 40 },
    { date: '24/08', speed: 65 },
    { date: '25/08', speed: 85 },
    { date: '26/08', speed: 100 },
    { date: '27/08', speed: 120 },
    { date: '28/08', speed: 175 },
    { date: '29/08', speed: 125 },
    { date: '30/08', speed: 75 }
  ];

  const stats = [
    {
      icon: <FaWind />,
      title: 'Velocidade Máxima do Vento',
      value: '280 km/h',
      description: 'Categoria 5 na escala Saffir-Simpson'
    },
    {
      icon: <FaWater />,
      title: 'Altura da Maré de Tempestade',
      value: '8.5 metros',
      description: 'Em algumas áreas de Nova Orleans'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Vítimas Fatais',
      value: '1.833',
      description: 'Confirmadas nos EUA'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 125 bilhões',
      description: 'Um dos desastres naturais mais caros da história'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Katrina_2005-08-28_1700Z.jpg/1200px-Katrina_2005-08-28_1700Z.jpg" 
            alt="Furacão Katrina" 
            className="hurricane-image" 
          />
          Furacão Katrina
        </h1>
        <p className="subtitle">23-30 de Agosto de 2005</p>
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
          <h2>Trajetória e Impacto</h2>
          <p>
            O Furacão Katrina foi um dos mais destrutivos e mortais furacões da história dos Estados Unidos.
            Formou-se sobre as Bahamas em 23 de agosto de 2005 e atingiu a costa do Golfo dos Estados Unidos
            em 29 de agosto, causando devastação generalizada, especialmente em Nova Orleans, Louisiana.
          </p>
        </div>

        <div className="chart-section">
          <h2>Evolução da Velocidade do Vento</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={windSpeedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'km/h', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="speed" stroke="#ff6b6b" name="Velocidade do Vento" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Inundação de 80% de Nova Orleans devido ao rompimento dos diques</li>
            <li>Mais de 1 milhão de pessoas deslocadas</li>
            <li>Destruição de mais de 300.000 casas</li>
            <li>Interrupção da produção de petróleo no Golfo do México</li>
            <li>Danos à infraestrutura de transporte e comunicação</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da manutenção adequada dos sistemas de proteção contra enchentes</li>
            <li>Necessidade de planos de evacuação mais eficientes</li>
            <li>Melhoria nos sistemas de alerta e comunicação</li>
            <li>Revisão dos protocolos de resposta a desastres</li>
            <li>Investimento em infraestrutura mais resiliente</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Katrina; 