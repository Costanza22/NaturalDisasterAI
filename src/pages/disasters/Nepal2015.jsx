import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign, FaMountain, FaLandmark } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Katrina.css';

const Nepal2015 = () => {
  // Dados do terremoto principal e réplicas
  const magnitudeData = [
    { date: '25/04', magnitude: 7.8 },
    { date: '26/04', magnitude: 6.7 },
    { date: '26/04', magnitude: 6.9 },
    { date: '12/05', magnitude: 7.3 },
    { date: '12/05', magnitude: 6.3 }
  ];

  // Dados de deslizamentos de terra
  const landslideData = [
    { location: 'Langtang Valley', deaths: 310 },
    { location: 'Sindhupalchok', deaths: 156 },
    { location: 'Gorkha', deaths: 98 },
    { location: 'Dhading', deaths: 76 }
  ];

  // Dados de danos a patrimônios culturais
  const heritageData = [
    { site: 'Dharahara Tower', status: 'Destruído' },
    { site: 'Durbar Square', status: 'Danificado' },
    { site: 'Templo Kasthamandap', status: 'Destruído' },
    { site: 'Templo Taleju', status: 'Danificado' }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Magnitude',
      value: '7.8',
      description: 'Escala Richter - Epicentro em Gorkha'
    },
    {
      icon: <FaMountain />,
      title: 'Altura do Epicentro',
      value: '8.2 km',
      description: 'Profundidade do hipocentro'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '8.964',
      description: 'Incluindo feridos e desaparecidos'
    },
    {
      icon: <FaBuilding />,
      title: 'Edifícios Destruídos',
      value: '600.000+',
      description: 'Principalmente em áreas rurais'
    },
    {
      icon: <FaLandmark />,
      title: 'Patrimônios Danificados',
      value: '750+',
      description: 'Sítios históricos e culturais'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 10 bilhões',
      description: 'Cerca de 50% do PIB do Nepal'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Dharahara_after_earthquake.jpg/800px-Dharahara_after_earthquake.jpg" 
            alt="Terremoto do Nepal 2015" 
            className="hurricane-image" 
          />
          Terremoto do Nepal 2015
        </h1>
        <p className="subtitle">25 de Abril de 2015 - O Terremoto de Gorkha</p>
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
            O terremoto de Gorkha, ocorrido em 25 de abril de 2015, foi o pior desastre natural a atingir o Nepal
            em mais de 80 anos. Com magnitude 7.8, o terremoto causou destruição generalizada, especialmente em
            Katmandu e nas regiões montanhosas, afetando seriamente a infraestrutura e o patrimônio cultural do país.
          </p>
        </div>

        <div className="chart-section">
          <h2>Magnitude das Réplicas</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={magnitudeData}>
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

        <div className="chart-section">
          <h2>Vítimas por Deslizamentos de Terra</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={landslideData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis label={{ value: 'Vítimas Fatais', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="deaths" fill="#8884d8" name="Vítimas" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Destruição de mais de 600.000 edifícios</li>
            <li>Danos a 750+ sítios históricos e culturais</li>
            <li>Deslizamentos de terra em áreas montanhosas</li>
            <li>Interrupção do turismo, principal fonte de renda</li>
            <li>Danos à infraestrutura de transporte</li>
            <li>Crise humanitária com mais de 2.8 milhões de desabrigados</li>
          </ul>
        </div>

        <div className="heritage-section">
          <h2>Patrimônios Culturais Afetados</h2>
          <ul>
            {heritageData.map((site, index) => (
              <li key={index}>
                <strong>{site.site}:</strong> {site.status}
              </li>
            ))}
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da preservação de patrimônios culturais</li>
            <li>Necessidade de construção anti-sísmica em áreas montanhosas</li>
            <li>Valor da preparação comunitária em regiões remotas</li>
            <li>Importância da resposta internacional coordenada</li>
            <li>Necessidade de sistemas de alerta precoce em áreas montanhosas</li>
            <li>Importância da documentação e preservação digital de patrimônios</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nepal2015; 