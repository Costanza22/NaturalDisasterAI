import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign, FaRadiation, FaWaveSquare } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import './Katrina.css';

const Japan2011 = () => {
  // Dados do terremoto principal e réplicas
  const magnitudeData = [
    { date: '11/03', magnitude: 9.0 },
    { date: '11/03', magnitude: 7.9 },
    { date: '11/03', magnitude: 7.7 },
    { date: '12/03', magnitude: 6.8 },
    { date: '13/03', magnitude: 6.6 }
  ];

  // Dados da altura das ondas do tsunami
  const tsunamiData = [
    { location: 'Miyako', height: 40.5 },
    { location: 'Kamaishi', height: 38.9 },
    { location: 'Ofunato', height: 23.6 },
    { location: 'Sendai', height: 19.5 },
    { location: 'Soma', height: 9.3 }
  ];

  // Dados de deslocamento da costa
  const displacementData = [
    { location: 'Oshika Peninsula', displacement: 5.3 },
    { location: 'Ishinomaki', displacement: 4.1 },
    { location: 'Sendai', displacement: 3.3 },
    { location: 'Fukushima', displacement: 2.8 }
  ];

  const stats = [
    {
      icon: <FaExclamationTriangle />,
      title: 'Magnitude',
      value: '9.0',
      description: 'Escala Richter - Um dos maiores terremotos já registrados'
    },
    {
      icon: <FaWaveSquare />,
      title: 'Altura Máxima do Tsunami',
      value: '40.5m',
      description: 'Registrada em Miyako, Iwate'
    },
    {
      icon: <FaUsers />,
      title: 'Vítimas Fatais',
      value: '15.899',
      description: 'Incluindo desaparecidos'
    },
    {
      icon: <FaBuilding />,
      title: 'Edifícios Destruídos',
      value: '129.225',
      description: 'Danos totais ou parciais'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 360 bilhões',
      description: 'O desastre natural mais caro da história'
    },
    {
      icon: <FaRadiation />,
      title: 'Nível INES',
      value: '7',
      description: 'Acidente nuclear de Fukushima Daiichi'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2011_Tohoku_earthquake_and_tsunami_cleanup_in_Ofunato_2011-04-10.jpg/800px-2011_Tohoku_earthquake_and_tsunami_cleanup_in_Ofunato_2011-04-10.jpg" 
            alt="Terremoto e Tsunami do Japão 2011" 
            className="hurricane-image" 
          />
          Terremoto e Tsunami do Japão 2011
        </h1>
        <p className="subtitle">11 de Março de 2011 - Grande Terremoto do Leste do Japão</p>
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
            O Grande Terremoto do Leste do Japão, ocorrido em 11 de março de 2011, foi um dos mais poderosos
            terremotos já registrados na história. Com magnitude 9.0, o terremoto gerou um devastador tsunami
            que atingiu a costa nordeste do Japão, causando destruição em massa e o acidente nuclear de Fukushima.
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
          <h2>Altura do Tsunami por Localidade</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={tsunamiData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis label={{ value: 'Altura (m)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="height" fill="#8884d8" name="Altura do Tsunami" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-section">
          <h2>Deslocamento Horizontal da Costa</h2>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={displacementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" />
                <YAxis label={{ value: 'Deslocamento (m)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="displacement" fill="#82ca9d" name="Deslocamento" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="impact-section">
          <h2>Impactos Principais</h2>
          <ul>
            <li>Destruição massiva da infraestrutura costeira</li>
            <li>Acidente nuclear de Fukushima Daiichi (INES Nível 7)</li>
            <li>Deslocamento do eixo terrestre em aproximadamente 10 cm</li>
            <li>Encurtamento do dia em 1.8 microssegundos</li>
            <li>Deslocamento da ilha principal do Japão em 2.4 metros</li>
            <li>Evacuação de mais de 470.000 pessoas</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Importância de sistemas de alerta precoce mais robustos</li>
            <li>Necessidade de revisão dos padrões de segurança nuclear</li>
            <li>Valor da preparação comunitária e exercícios regulares</li>
            <li>Importância da engenharia anti-sísmica e anti-tsunami</li>
            <li>Necessidade de planos de evacuação mais eficientes</li>
            <li>Importância da cooperação internacional em desastres</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Japan2011; 