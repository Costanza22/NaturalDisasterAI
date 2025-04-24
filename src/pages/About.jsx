import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <img 
          src="https://ufpr.br/wp-content/uploads/2015/11/ufpr_alta.jpg"
          alt="UFPR Logo"
          className="ufpr-logo"
        />
        <h1>Sobre o Projeto</h1>
        <div className="subtitle">Sistema de Monitoramento de Desastres Naturais</div>
        
        <div className="author-info">
          <h2>Autora</h2>
          <div className="author-name">Costanza Pasquotto Assef</div>
          <div className="institution">Universidade Federal do Paraná (UFPR)</div>
          <div className="project-type">Projeto de Inteligência Artificial</div>
        </div>
      </header>

      <div className="about-content">
        <section className="mission-section">
          <h2>Nossa Missão</h2>
          <p>
            Desenvolver uma plataforma inovadora que utiliza inteligência artificial 
            para monitorar, analisar e prever eventos de desastres naturais, contribuindo para 
            a prevenção e mitigação de seus impactos. Este projeto é parte do curso de 
            Inteligência Artificial da UFPR, buscando aplicar tecnologias avançadas para 
            proteger comunidades e reduzir os danos causados por desastres naturais.
          </p>
        </section>

        <section className="technologies-section">
          <h2>Tecnologias Utilizadas</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <h3>React.js</h3>
              <p>Framework moderno para desenvolvimento de interfaces interativas</p>
            </div>
            <div className="tech-card">
              <h3>Inteligência Artificial</h3>
              <p>Algoritmos avançados para análise preditiva de desastres</p>
            </div>
            <div className="tech-card">
              <h3>Análise de Dados</h3>
              <p>Processamento e visualização de dados ambientais e meteorológicos</p>
            </div>
            <div className="tech-card">
              <h3>APIs de Monitoramento</h3>
              <p>Integração com fontes de dados em tempo real</p>
            </div>
          </div>
        </section>

        <section className="features-section">
          <h2>Funcionalidades</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Monitoramento em Tempo Real</h3>
              <p>Gráficos e mapas interativos para acompanhamento de eventos</p>
            </div>
            <div className="feature-card">
              <h3>Análise de Riscos</h3>
              <p>Avaliação detalhada de áreas vulneráveis a desastres naturais</p>
            </div>
            <div className="feature-card">
              <h3>Sistema de Alertas</h3>
              <p>Notificações baseadas em previsões e análises de risco</p>
            </div>
          </div>
        </section>

        <section className="acknowledgments-section">
          <h2>Agradecimentos</h2>
          <p>
            Agradeço à Universidade Federal do Paraná (UFPR) e aos professores do curso 
            de Inteligência Artificial pelo suporte e orientação no desenvolvimento 
            deste projeto. Este trabalho representa um importante passo na aplicação 
            de tecnologias avançadas para a proteção e segurança da sociedade.
          </p>
        </section>

        <section className="contact-section">
          <h2>Contato</h2>
          <div className="contact-info">
            <p>Costanza Pasquotto Assef</p>
            <p>Universidade Federal do Paraná</p>
            <p>Email: costanza.assef@ufpr.br</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About; 