import React from 'react';
import { Link } from 'react-router-dom';
import { FaWind, FaWater, FaFire, FaMountain, FaArrowRight } from 'react-icons/fa';
import './Disasters.css';

const Disasters = () => {
  const disasterInfo = [
    {
      icon: <FaWind className="disaster-icon" />,
      title: 'Furacões',
      description: 'Furacões são tempestades tropicais intensas que se formam sobre oceanos quentes. Podem causar ventos extremamente fortes, chuvas torrenciais e inundações costeiras.',
      tips: [
        'Monitore os alertas meteorológicos',
        'Tenha um kit de emergência preparado',
        'Conheça as rotas de evacuação',
        'Proteja janelas e portas'
      ],
      hurricanes: [
        { name: 'Katrina', path: '/katrina' },
        { name: 'Irma', path: '/irma' },
        { name: 'Harvey', path: '/harvey' }
      ]
    },
    {
      icon: <FaWater className="disaster-icon" />,
      title: 'Inundações',
      description: 'Inundações ocorrem quando há acúmulo excessivo de água em áreas normalmente secas. Podem ser causadas por chuvas intensas, rompimento de barragens ou marés altas.',
      tips: [
        'Evite áreas baixas durante chuvas fortes',
        'Não tente atravessar ruas alagadas',
        'Desligue a energia elétrica se necessário',
        'Mantenha documentos importantes em local seguro'
      ],
      floods: [
        { name: 'Brasil 2011', path: '/brasil' },
        { name: 'Tailândia 2011', path: '/tailandia' },
        { name: 'Alemanha 2021', path: '/alemanha' }
      ]
    },
    {
      icon: <FaFire className="disaster-icon" />,
      title: 'Incêndios Florestais',
      description: 'Incêndios florestais são queimadas que se espalham rapidamente em áreas de vegetação. Podem ser causados por fatores naturais ou ação humana.',
      tips: [
        'Mantenha uma zona de segurança ao redor da casa',
        'Tenha um plano de evacuação',
        'Monitore os alertas de incêndio',
        'Evite atividades que possam causar faíscas'
      ]
    },
    {
      icon: <FaMountain className="disaster-icon" />,
      title: 'Terremotos',
      description: 'Terremotos são movimentos bruscos da crosta terrestre causados por falhas geológicas. Podem causar danos estruturais e deslizamentos de terra.',
      tips: [
        'Identifique locais seguros em sua casa',
        'Proteja-se sob móveis resistentes',
        'Mantenha um kit de emergência',
        'Conheça os procedimentos de evacuação'
      ],
      earthquakes: [
        { name: 'Haiti 2010', path: '/haiti' },
        { name: 'Japão 2011', path: '/japao' },
        { name: 'Nepal 2015', path: '/nepal' }
      ]
    }
  ];

  return (
    <div className="disasters-page">
      <h1 className="page-title">Desastres Naturais</h1>
      <div className="disasters-grid">
        {disasterInfo.map((disaster, index) => (
          <div key={index} className="disaster-card">
            <div className="disaster-header">
              {disaster.icon}
              <h2>{disaster.title}</h2>
            </div>
            <p className="disaster-description">{disaster.description}</p>
            <div className="disaster-tips">
              <h3>Dicas de Prevenção:</h3>
              <ul>
                {disaster.tips.map((tip, tipIndex) => (
                  <li key={tipIndex}>{tip}</li>
                ))}
              </ul>
            </div>
            {disaster.hurricanes && (
              <div className="hurricane-navigation">
                <h3>Casos Históricos:</h3>
                <div className="hurricane-links">
                  {disaster.hurricanes.map((hurricane, hIndex) => (
                    <Link key={hIndex} to={hurricane.path} className="hurricane-link">
                      {hurricane.name} <FaArrowRight className="arrow-icon" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {disaster.earthquakes && (
              <div className="hurricane-navigation">
                <h3>Casos Históricos:</h3>
                <div className="hurricane-links">
                  {disaster.earthquakes.map((earthquake, eIndex) => (
                    <Link key={eIndex} to={earthquake.path} className="hurricane-link">
                      {earthquake.name} <FaArrowRight className="arrow-icon" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {disaster.floods && (
              <div className="hurricane-navigation">
                <h3>Casos Históricos:</h3>
                <div className="hurricane-links">
                  {disaster.floods.map((flood, fIndex) => (
                    <Link key={fIndex} to={flood.path} className="hurricane-link">
                      {flood.name} <FaArrowRight className="arrow-icon" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Disasters; 