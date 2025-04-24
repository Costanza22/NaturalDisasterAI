import React from 'react';
import { FaWind, FaWater, FaExclamationTriangle, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Irma = () => {
  // Dados históricos do Furacão Irma
  const windSpeedData = [
    { date: '30/08', speed: 50 },
    { date: '31/08', speed: 85 },
    { date: '01/09', speed: 115 },
    { date: '02/09', speed: 140 },
    { date: '03/09', speed: 160 },
    { date: '04/09', speed: 185 },
    { date: '05/09', speed: 180 },
    { date: '06/09', speed: 170 }
  ];

  const stats = [
    {
      icon: <FaWind />,
      title: 'Velocidade Máxima do Vento',
      value: '295 km/h',
      description: 'Categoria 5 na escala Saffir-Simpson'
    },
    {
      icon: <FaWater />,
      title: 'Altura da Maré de Tempestade',
      value: '4.5 metros',
      description: 'Em áreas costeiras da Flórida'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Vítimas Fatais',
      value: '134',
      description: 'Em toda sua trajetória'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 77.3 bilhões',
      description: 'Um dos furacões mais caros da história'
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
          <h2>Trajetória e Impacto</h2>
          <p>
            O Furacão Irma foi um dos furacões mais poderosos já registrados no Oceano Atlântico.
            Atingiu intensidade máxima de categoria 5 e manteve ventos de 295 km/h por 37 horas.
            Causou destruição generalizada no Caribe e na Flórida, sendo um dos ciclones tropicais
            mais intensos já registrados em termos de ventos sustentados.
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
            <li>Devastação nas Ilhas Virgens e em Saint Martin</li>
            <li>Destruição significativa em Cuba</li>
            <li>Mais de 6 milhões de pessoas evacuadas na Flórida</li>
            <li>Danos extensivos à infraestrutura elétrica</li>
            <li>Inundações severas em Jacksonville e Charleston</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância de códigos de construção mais rigorosos</li>
            <li>Necessidade de melhor proteção da infraestrutura elétrica</li>
            <li>Eficácia dos sistemas de alerta antecipado</li>
            <li>Importância da coordenação entre diferentes jurisdições</li>
            <li>Valor dos planos de evacuação bem organizados</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Irma; 