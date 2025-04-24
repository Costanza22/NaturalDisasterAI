import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Katrina = () => {
  // Dados históricos do Furacão Katrina
  const windSpeedData = [
    { date: '23/08', speed: 120 },
    { date: '24/08', speed: 130 },
    { date: '25/08', speed: 175 },
    { date: '26/08', speed: 160 },
    { date: '27/08', speed: 150 },
    { date: '28/08', speed: 140 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Categoria',
      value: '5',
      description: 'Máxima intensidade - Escala Saffir-Simpson'
    },
    {
      icon: <FaBuilding />,
      title: 'Danos Estruturais',
      value: '300.000+',
      description: 'Casas destruídas ou severamente danificadas'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '1.833',
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
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Katrina_2005-08-28_1700Z.jpg/1200px-Katrina_2005-08-28_1700Z.jpg" alt="Furacão Katrina" className="hurricane-image" />
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
          <h2>O Furacão e Seu Impacto</h2>
          <p>
            O Furacão Katrina foi um dos desastres naturais mais devastadores da história dos Estados Unidos.
            Atingiu a costa do Golfo em 29 de agosto de 2005, causando destruição massiva em Nova Orleans e áreas vizinhas.
            Os diques que protegiam a cidade falharam, resultando em inundações catastróficas.
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
            <li>Inundação de 80% de Nova Orleans</li>
            <li>Colapso do sistema de diques</li>
            <li>Interrupção dos serviços básicos</li>
            <li>Evacuação em massa da população</li>
            <li>Danos à infraestrutura crítica</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da manutenção da infraestrutura de proteção</li>
            <li>Necessidade de planos de evacuação mais eficientes</li>
            <li>Melhoria nos sistemas de alerta precoce</li>
            <li>Preparação para desastres em grande escala</li>
            <li>Coordenação entre agências de resposta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Katrina; 