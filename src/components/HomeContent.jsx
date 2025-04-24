import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './HomeContent.css';

const HomeContent = () => {
  const disasterData = [
    { year: '2018', count: 315, affected: 68.5 },
    { year: '2019', count: 396, affected: 95.2 },
    { year: '2020', count: 389, affected: 98.4 },
    { year: '2021', count: 432, affected: 101.8 },
    { year: '2022', count: 474, affected: 122.5 }
  ];

  const impactData = [
    { type: 'Inundações', impacto: 40 },
    { type: 'Furacões', impacto: 25 },
    { type: 'Terremotos', impacto: 20 },
    { type: 'Incêndios', impacto: 15 }
  ];

  return (
    <div className="home-content">
      <div className="statistics-section">
        <h2>Estatísticas Globais de Desastres Naturais</h2>
        <div className="charts-container">
          <div className="chart-wrapper">
            <h3>Ocorrências por Ano</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={disasterData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" name="Número de Desastres" />
                <Line type="monotone" dataKey="affected" stroke="#82ca9d" name="Milhões Afetados" />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-wrapper">
            <h3>Distribuição por Tipo</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={impactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="type" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="impacto" fill="#8884d8" name="Impacto %" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="highlights-section">
        <h2>Destaques</h2>
        <div className="highlights-grid">
          <div className="highlight-card">
            <img src="https://www.estadao.com.br/resizer/v2/YTPQKID7Y5AHDGDELVMCQZVX7I.jpg?quality=80&auth=dd5ed4c1530b9836669de3d6c54037df989ad5e6f2c0e2cbca0696154db482d8&width=380" alt="Furacão Katrina" />
            <h3>Furacão Katrina</h3>
            <p>Um dos furacões mais devastadores da história dos EUA</p>
          </div>
          <div className="highlight-card">
            <img src="https://s2-g1.glbimg.com/40oh17M3Uv8xY8WiFyxTYcxpdmU=/0x0:954x604/600x0/smart/filters:gifv():strip_icc()/s.glbimg.com/jo/g1/f/original/2011/07/04/carro_fica_pendurado_apos_deslizamento_de_terra_em_nova_friburgo_14-1_marcos_de_paula-agencia_estado.jpg" alt="Inundações no Brasil" />
            <h3>Inundações no Brasil</h3>
            <p>O maior desastre natural da história do Brasil</p>
          </div>
          <div className="highlight-card">
            <img src="https://www.cartacapital.com.br/wp-content/uploads/2024/06/000_34UT3L4.jpg" alt="Inundações na Alemanha" />
            <h3>Inundações na Alemanha</h3>
            <p>Uma das piores inundações da história europeia</p>
          </div>
        </div>
      </div>

      <div className="info-section">
        <h2>Como a IA Ajuda na Prevenção</h2>
        <div className="info-grid">
          <div className="info-card">
            <h3>Previsão Antecipada</h3>
            <p>Análise de dados meteorológicos em tempo real para prever desastres com antecedência</p>
          </div>
          <div className="info-card">
            <h3>Monitoramento Contínuo</h3>
            <p>Vigilância 24/7 de áreas de risco usando sensores e satélites</p>
          </div>
          <div className="info-card">
            <h3>Resposta Rápida</h3>
            <p>Coordenação eficiente de equipes de emergência baseada em dados</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent; 