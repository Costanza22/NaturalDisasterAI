import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Nepal = () => {
  // Dados das réplicas do terremoto
  const seismicData = [
    { date: '25/04', magnitude: 7.8 },
    { date: '25/04', magnitude: 6.6 },
    { date: '26/04', magnitude: 6.7 },
    { date: '12/05', magnitude: 7.3 },
    { date: '12/05', magnitude: 6.3 },
    { date: '16/05', magnitude: 5.7 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Magnitude',
      value: '7.8',
      description: 'Escala Richter - Epicentro em Gorkha'
    },
    {
      icon: <FaBuilding />,
      title: 'Danos Estruturais',
      value: '800.000+',
      description: 'Edifícios destruídos ou danificados'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas',
      value: '8.857',
      description: 'Mortes confirmadas'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 10 bi',
      description: 'Cerca de 50% do PIB do Nepal'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nepal_Earthquake_2015_%2817012095737%29.jpg/800px-Nepal_Earthquake_2015_%2817012095737%29.jpg" alt="Terremoto do Nepal" className="hurricane-image" />
          Terremoto do Nepal 2015
        </h1>
        <p className="subtitle">25 de Abril de 2015</p>
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
          <h2>O Terremoto e Seu Impacto</h2>
          <p>
            O terremoto do Nepal de 2015 foi o pior desastre natural a atingir o país em 80 anos.
            O tremor causou avalanches no Monte Everest e destruiu diversos monumentos históricos,
            incluindo templos e palácios centenários no Vale de Katmandu.
          </p>
        </div>

        <div className="chart-section">
          <h2>Magnitude das Réplicas</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={seismicData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis label={{ value: 'Magnitude', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="magnitude" stroke="#ff6b6b" name="Magnitude" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Destruição de patrimônios históricos UNESCO</li>
            <li>Avalanches devastadoras no Monte Everest</li>
            <li>Milhões de pessoas desabrigadas</li>
            <li>Colapso da infraestrutura em áreas rurais</li>
            <li>Impacto severo no turismo</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Necessidade de construções antissísmicas</li>
            <li>Importância da preservação do patrimônio</li>
            <li>Preparação para desastres em áreas montanhosas</li>
            <li>Coordenação de ajuda internacional</li>
            <li>Reconstrução sustentável</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nepal; 