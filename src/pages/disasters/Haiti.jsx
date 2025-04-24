import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Haiti = () => {
  // Dados históricos do Terremoto do Haiti
  const magnitudeData = [
    { date: '12/01', magnitude: 7.0 },
    { date: '12/01', magnitude: 5.9 },
    { date: '13/01', magnitude: 5.5 },
    { date: '20/01', magnitude: 6.1 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Magnitude',
      value: '7.0',
      description: 'Escala Richter - Epicentro próximo a Porto Príncipe'
    },
    {
      icon: <FaBuilding />,
      title: 'Danos Estruturais',
      value: '250.000+',
      description: 'Edifícios destruídos ou severamente danificados'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '316.000',
      description: 'Estimativa oficial do governo haitiano'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 7,8 bilhões',
      description: 'Cerca de 120% do PIB do Haiti na época'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/2010_Haiti_earthquake_damage.jpg/800px-2010_Haiti_earthquake_damage.jpg" alt="Terremoto do Haiti 2010" className="hurricane-image" />
          Terremoto do Haiti 2010
        </h1>
        <p className="subtitle">12 de Janeiro de 2010</p>
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
            O terremoto do Haiti de 2010 foi um dos desastres naturais mais devastadores da história moderna.
            Ocorreu em 12 de janeiro de 2010, com epicentro a aproximadamente 25 km da capital Porto Príncipe.
            O tremor principal teve magnitude 7.0 na escala Richter e foi seguido por várias réplicas significativas.
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

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Destruição massiva da infraestrutura de Porto Príncipe</li>
            <li>Colapso do Palácio Presidencial e da Catedral de Porto Príncipe</li>
            <li>Interrupção dos serviços básicos (água, eletricidade, comunicações)</li>
            <li>Crise humanitária sem precedentes</li>
            <li>Deslocamento de mais de 1,5 milhão de pessoas</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância da construção anti-sísmica em áreas de risco</li>
            <li>Necessidade de planos de contingência mais robustos</li>
            <li>Valor da cooperação internacional em desastres</li>
            <li>Importância da preparação comunitária</li>
            <li>Necessidade de sistemas de alerta precoce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Haiti; 