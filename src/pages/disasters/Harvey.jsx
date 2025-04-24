import React from 'react';
import { FaWind, FaWater, FaExclamationTriangle, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Harvey = () => {
  // Dados históricos do Furacão Harvey
  const windSpeedData = [
    { date: '17/08', speed: 35 },
    { date: '18/08', speed: 45 },
    { date: '19/08', speed: 65 },
    { date: '20/08', speed: 85 },
    { date: '24/08', speed: 130 },
    { date: '25/08', speed: 175 },
    { date: '26/08', speed: 120 },
    { date: '27/08', speed: 70 }
  ];

  const stats = [
    {
      icon: <FaWind />,
      title: 'Velocidade Máxima do Vento',
      value: '215 km/h',
      description: 'Categoria 4 na escala Saffir-Simpson'
    },
    {
      icon: <FaWater />,
      title: 'Precipitação Total',
      value: '1.539 mm',
      description: 'Recorde de chuva para um ciclone tropical nos EUA'
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Vítimas Fatais',
      value: '108',
      description: 'Principalmente no Texas'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 125 bilhões',
      description: 'Empatado com Katrina como o mais custoso'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Harvey_2017-08-25_2337Z.jpg" alt="Furacão Harvey" className="hurricane-image" />
          Furacão Harvey
        </h1>
        <p className="subtitle">17 de Agosto - 1 de Setembro de 2017</p>
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
            O Furacão Harvey foi um ciclone tropical devastador que causou inundações catastróficas
            no sudeste do Texas. Foi o primeiro furacão importante a atingir os Estados Unidos desde
            Wilma em 2005. Harvey é notável por ter estacionado sobre o Texas por vários dias,
            despejando quantidades recordes de chuva e causando inundações sem precedentes.
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
            <li>Inundações extremas em Houston e arredores</li>
            <li>Mais de 300.000 estruturas inundadas</li>
            <li>Mais de 40.000 pessoas deslocadas</li>
            <li>Interrupção da produção de petróleo no Golfo do México</li>
            <li>Danos significativos à infraestrutura urbana</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Necessidade de melhor planejamento urbano em áreas propensas a inundações</li>
            <li>Importância de sistemas de drenagem mais eficientes</li>
            <li>Valor da preparação da comunidade para eventos extremos</li>
            <li>Necessidade de políticas de desenvolvimento mais sustentáveis</li>
            <li>Importância da preservação de áreas naturais de absorção de água</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Harvey; 