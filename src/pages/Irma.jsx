import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Irma = () => {
  // Dados históricos do Furacão Irma
  const windSpeedData = [
    { date: '30/08', speed: 110 },
    { date: '31/08', speed: 130 },
    { date: '01/09', speed: 185 },
    { date: '02/09', speed: 180 },
    { date: '03/09', speed: 175 },
    { date: '04/09', speed: 170 }
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
      value: '90%',
      description: 'Edifícios danificados em Barbuda'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '134',
      description: 'Mortes confirmadas'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 77 bilhões',
      description: 'Um dos furacões mais caros do Atlântico'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Irma_2017-09-05_1706Z.jpg" alt="Furacão Irma" className="hurricane-image" />
          Furacão Irma
        </h1>
        <p className="subtitle">30 de Agosto - 12 de Setembro de 2017</p>
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
            O Furacão Irma foi um dos furacões mais poderosos já registrados no Oceano Atlântico.
            Atingiu várias ilhas do Caribe e a Flórida em setembro de 2017, causando destruição generalizada.
            Manteve ventos de categoria 5 por 37 horas, um recorde para o Atlântico.
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
            <li>Destruição quase total da ilha de Barbuda</li>
            <li>Danos severos em São Martinho e Ilhas Virgens</li>
            <li>Inundações extensas na Flórida</li>
            <li>Interrupção de energia para milhões de pessoas</li>
            <li>Evacuação em massa na Flórida</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da evacuação precoce</li>
            <li>Necessidade de infraestrutura mais resiliente</li>
            <li>Melhoria nos sistemas de alerta</li>
            <li>Preparação para múltiplos impactos simultâneos</li>
            <li>Coordenação internacional em desastres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Irma; 