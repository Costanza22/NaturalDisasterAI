import React from 'react';
import { FaExclamationTriangle, FaBuilding, FaUsers, FaDollarSign } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Katrina.css';

const Haiti = () => {
  // Dados das réplicas do terremoto
  const seismicData = [
    { date: '12/01', magnitude: 7.0 },
    { date: '12/01', magnitude: 5.9 },
    { date: '13/01', magnitude: 5.5 },
    { date: '20/01', magnitude: 6.1 },
    { date: '03/02', magnitude: 4.9 },
    { date: '22/02', magnitude: 4.7 }
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
      title: 'Vítimas',
      value: '316.000',
      description: 'Estimativa oficial do governo haitiano'
    },
    {
      icon: <FaDollarSign />,
      title: 'Danos Econômicos',
      value: 'US$ 7,8 bi',
      description: 'Cerca de 120% do PIB do Haiti na época'
    }
  ];

  return (
    <div className="katrina-page">
      <div className="katrina-header">
        <h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Haiti_earthquake_damage_palace.jpg/800px-Haiti_earthquake_damage_palace.jpg" alt="Terremoto do Haiti" className="hurricane-image" />
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
            Com epicentro próximo à capital Porto Príncipe, o tremor causou destruição massiva em uma das nações
            mais pobres do hemisfério ocidental, resultando em uma crise humanitária sem precedentes.
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
            <li>Destruição do Palácio Nacional e principais edifícios governamentais</li>
            <li>Colapso de 80% das construções em Porto Príncipe</li>
            <li>Mais de 1,5 milhão de pessoas desabrigadas</li>
            <li>Colapso do sistema de saúde e infraestrutura básica</li>
            <li>Crise humanitária prolongada</li>
          </ul>
        </div>

        <div className="lessons-section">
          <h2>Lições Aprendidas</h2>
          <ul>
            <li>Necessidade de códigos de construção antissísmicos</li>
            <li>Importância da preparação para desastres em países vulneráveis</li>
            <li>Coordenação internacional em respostas humanitárias</li>
            <li>Reconstrução resiliente e sustentável</li>
            <li>Fortalecimento das instituições locais de resposta</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Haiti; 