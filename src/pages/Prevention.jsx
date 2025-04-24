import React from 'react';
import { FaFirstAid, FaHome, FaPhone, FaMapMarkedAlt } from 'react-icons/fa';
import './Prevention.css';

const Prevention = () => {
  const preventionTips = [
    {
      icon: <FaFirstAid className="prevention-icon" />,
      title: 'Kit de Emergência',
      items: [
        'Água (1 galão por pessoa por dia)',
        'Alimentos não perecíveis',
        'Lanterna e pilhas extras',
        'Kit de primeiros socorros',
        'Medicamentos essenciais',
        'Documentos importantes',
        'Rádio portátil',
        'Dinheiro em espécie'
      ]
    },
    {
      icon: <FaHome className="prevention-icon" />,
      title: 'Preparação da Casa',
      items: [
        'Verifique a estrutura da casa',
        'Proteja janelas e portas',
        'Mantenha árvores podadas',
        'Tenha extintores de incêndio',
        'Instale detectores de fumaça',
        'Conheça os pontos de gás e água'
      ]
    },
    {
      icon: <FaPhone className="prevention-icon" />,
      title: 'Contatos de Emergência',
      items: [
        'Defesa Civil: 199',
        'Bombeiros: 193',
        'Polícia: 190',
        'SAMU: 192',
        'Centro de Zoonoses',
        'Hospitais próximos'
      ]
    },
    {
      icon: <FaMapMarkedAlt className="prevention-icon" />,
      title: 'Plano de Evacuação',
      items: [
        'Conheça as rotas de fuga',
        'Defina pontos de encontro',
        'Tenha um plano para pets',
        'Saiba onde ficam os abrigos',
        'Mantenha o tanque do carro cheio',
        'Tenha mapas da região'
      ]
    }
  ];

  return (
    <div className="prevention-page">
      <h1 className="page-title">Prevenção e Preparação</h1>
      <div className="prevention-grid">
        {preventionTips.map((tip, index) => (
          <div key={index} className="prevention-card">
            <div className="prevention-header">
              {tip.icon}
              <h2>{tip.title}</h2>
            </div>
            <ul className="prevention-list">
              {tip.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prevention; 