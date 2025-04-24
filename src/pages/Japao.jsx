import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Japao = () => {
  // Dados das réplicas do terremoto
  const seismicData = [
    { date: '11/03', magnitude: 9.0 },
    { date: '11/03', magnitude: 7.4 },
    { date: '11/03', magnitude: 7.2 },
    { date: '12/03', magnitude: 6.8 },
    { date: '13/03', magnitude: 6.2 },
    { date: '14/03', magnitude: 6.0 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Magnitude',
      value: '9.0',
      description: 'Escala Richter - 4º maior terremoto registrado'
    },
    {
      icon: <FaBuilding />,
      title: 'Tsunami',
      value: '40.5m',
      description: 'Altura máxima da onda registrada'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas',
      value: '19.759',
      description: 'Entre mortos e desaparecidos'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 235 bi',
      description: 'O desastre natural mais caro da história'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Tsunami_damage_in_Japan.jpg/800px-Tsunami_damage_in_Japan.jpg" alt="Terremoto do Japão" className="hurricane-image" />
          Terremoto do Japão 2011
        </h1>
        <p className="subtitle">11 de Março de 2011</p>
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
            O Grande Terremoto do Leste do Japão foi um dos mais poderosos já registrados na história.
            O tremor gerou um devastador tsunami que atingiu a costa japonesa e causou o acidente nuclear
            de Fukushima, resultando em uma tripla catástrofe sem precedentes.
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
            <li>Tsunami devastador com ondas de até 40 metros</li>
            <li>Acidente nuclear na usina de Fukushima</li>
            <li>Destruição de mais de 120.000 edificações</li>
            <li>Deslocamento de mais de 450.000 pessoas</li>
            <li>Impacto na cadeia global de suprimentos</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância de barreiras tsunami mais altas</li>
            <li>Revisão da segurança nuclear global</li>
            <li>Eficácia do sistema de alerta precoce</li>
            <li>Preparação para múltiplos desastres simultâneos</li>
            <li>Resiliência da sociedade japonesa</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Japao; 