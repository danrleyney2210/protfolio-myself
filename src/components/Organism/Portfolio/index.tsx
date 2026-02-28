import React, { useState } from "react";
import { AiOutlineStop } from 'react-icons/ai'
import * as S from "./styles";
import { NavTab } from "../../Atomos/NavTab";
import IMG1 from "../../../assets/openSolo.png";
import IMG2 from "../../../assets/neo.png";
import IMG3 from "../../../assets/justravel.png";
import IMG4 from "../../../assets/app00.png";
import IMG5 from "../../../assets/betastore.png";
import IMG6 from "../../../assets/view.png";
import IMG7 from "../../../assets/neural.png";
import IMG8 from "../../../assets/coinSynch.png";
import IMG9 from "../../../assets/star.png";
import IMG10 from "../../../assets/dexaki.png"
import IMG11 from "../../../assets/aprepi.png"
import IMG12 from "../../../assets/bloom.png"
import { useTranslation } from "react-i18next";

interface IDataProps {
  id: number,
  image: any,
  title: string,
  github?: string,
  description?: string | any
  status?: string
  demo?: string
  category: string[];
  stack: string[];
  year: string;
}

export const Portfolio = () => {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState('all');

  const data: IDataProps[] = [
    {
      id: 1,
      image: IMG12,
      title: "Bloom",
      description: t('projectBloom'),
      demo: "https://www.bloombyimpact.com/",
      status: 'Live',
      category: ['web', 'fullstack'],
      stack: ['React', 'Next.js', 'TypeScript', 'Styled-components', 'AWS', 'typeORM', 'Nest.js'],
      year: '2024'
    },
    {
      id: 2,
      image: IMG10,
      title: "Dexaki",
      description: t('projectSaas'),
      demo: "https://www.dexaki.com",
      status: 'Live',
      category: ['web', 'fullstack', 'mobile'],
      stack: ['React', 'React Native', 'TypeScript', 'Node.js', 'Prisma', 'Nest.js', 'AWS', 'Stripe', 'styled-components'],
      year: '2024'
    },
    {
      id: 3,
      image: IMG8,
      title: "Coin Synch",
      description: t('contribution'),
      demo: "https://coin-synch-a88d4swwl-danrleyney2210.vercel.app/",
      github: "https://github.com/danrleyney2210/CoinSynch",
      status: 'Live',
      category: ['web'],
      stack: ['React', 'TypeScript', 'Sass', 'Next.js'],
      year: '2024'
    },
    {
      id: 4,
      image: IMG1,
      title: "Open Solo",
      description: t('contribution'),
      demo: "https://opensolo.com/",
      status: 'Live',
      category: ['web', 'fullstack'],
      stack: ['React', 'TypeScript', 'styled-components', 'Java', 'Spring Boot', 'Nginx'],
      year: '2023'
    },
    {
      id: 5,
      image: IMG2,
      title: "Neo estech",
      description: t('contribution'),
      demo: "https://app.neoestech.com.br/auth/login",
      status: 'Live',
      category: ['web'],
      stack: ['React', 'TypeScript', 'PostgreSQL'],
      year: '2023'
    },
    {
      id: 6,
      image: IMG11,
      title: "AREPI",
      description: t('contribution'),
      demo: "https://www.aprepi.com",
      status: 'Live',
      category: ['web', 'fullstack'],
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Prisma', 'PostgreSQL', 'VPS', 'Coolify'],
      year: '2023'
    },
    {
      id: 7,
      image: IMG3,
      title: "Just Travel",
      description: t('ChallengeJusTravel'),
      github: "https://github.com/danrleyney2210/challenge_logoipsum",
      demo: "https://challenge-logoipsum.vercel.app/",
      status: 'Live Demo',
      category: ['web'],
      stack: ['React', 'JavaScript', 'styled-components', 'Next.js'],
      year: '2023'
    },
    {
      id: 8,
      image: IMG4,
      title: "PokeRub",
      description: t('ProjectRecube'),
      github: "https://github.com/danrleyney2210/rubcube_desafio",
      status: 'Production',
      category: ['mobile'],
      stack: ['React Native', 'TypeScript'],
      year: '2023'
    },
    {
      id: 9,
      image: IMG5,
      title: "Beta Store",
      description: t('ApplicationEducation'),
      github: "https://github.com/danrleyney2210/betastore_front",
      demo: "https://betastore-front.vercel.app/",
      status: 'Live Demo',
      category: ['web', 'fullstack'],
      stack: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      year: '2023'
    },
    {
      id: 10,
      image: IMG6,
      title: "Landing Page",
      description: t('ProjectConvert'),
      github: "https://github.com/danrleyney2210/landing-page-01/tree/master",
      demo: "https://metodo-mais-views.vercel.app/",
      status: 'Live Demo',
      category: ['web'],
      stack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      year: '2023'
    },
    {
      id: 11,
      image: IMG7,
      title: t('NeuralNetworks'),
      description: t('MasterEngineer'),
      github: "https://github.com/danrleyney2210/Redes_Neurais_em_R",
      status: 'Production',
      category: ['ai'],
      stack: ['R', 'Python', 'TensorFlow', 'Master Engineer'],
      year: '2022'
    },
    {
      id: 12,
      image: IMG9,
      title: 'Star Wars',
      description: t('starWras'),
      github: "https://github.com/danrleyney2210/start-wars-app",
      demo: "https://start-wars-app.vercel.app/",
      status: 'Production',
      category: ['web'],
      stack: ['React', 'JavaScript', 'SWAPI'],
      year: '2022'
    },
  ];

  const filteredData = activeTab === 'all'
    ? data
    : data.filter((item: IDataProps) => item.category.includes(activeTab));

  return (
    <S.Wrapper id="portfolio">
      <h5>{t('Work')}</h5>
      <h2>{t('Portfolio')}</h2>

      <S.ProjectCount>
        {activeTab === 'all'
          ? `I've worked on ${data.length} projects`
          : `Showing ${filteredData.length} ${activeTab} projects`
        }
      </S.ProjectCount>

      <NavTab activeTab={activeTab} onTabChange={setActiveTab} />

      <S.PortfolioContainer className="container">
        {filteredData.map((item) => (
          <article key={item.id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="portfolio_item_content">
              <h3>{item.title}</h3>
              <p className="portfolio_item_description">{item.description}</p>
              <div className="portfolio_item_stack">
                {item.stack.map((tech, index) => (
                  <S.TechTag key={index} techName={tech}>{tech}</S.TechTag>
                ))}
              </div>
            </div>
            <div className="portfolio_item_cta">
              {
                item.github ? (
                  <a href={item.github} className="btn" target={'_blank'} rel="noopener noreferrer">Source Code</a>
                ) : (
                  <S.LinkProject>
                    Source Code
                    <AiOutlineStop />
                  </S.LinkProject>
                )
              }

              {
                item.demo ? (
                  <a
                    href={item.demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <S.LinkProject>
                    Live Demo
                    <AiOutlineStop />
                  </S.LinkProject>
                )
              }
            </div>
          </article>
        ))}
      </S.PortfolioContainer>
    </S.Wrapper>
  );
};
