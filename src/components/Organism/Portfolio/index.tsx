import React from "react";
import { AiOutlineStop } from 'react-icons/ai'
import * as S from "./styles";
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
  dscription?: string | any
  status?: string
  demo?: string
}

export const Portfolio = () => {
  const { t } = useTranslation()


  const data: IDataProps[] = [
    {
      id: 1,
      image: IMG12,
      title: "Bloom",
      dscription: t('projectBloom'),
      demo: "https://www.bloombyimpact.com/",
      status: 'Produção'
    },
    {
      id: 1,
      image: IMG10,
      title: "Dexaki",
      dscription: t('projectSaas'),
      demo: "https://www.dexaki.com",
      status: 'Produção'
    },
    {
      id: 2,
      image: IMG8,
      title: "Coin Synch",
      dscription: t('contribution'),
      demo: "https://coin-synch-a88d4swwl-danrleyney2210.vercel.app/",
      github: "https://github.com/danrleyney2210/CoinSynch",
      status: 'Produção'
    },
    {
      id: 3,
      image: IMG1,
      title: "Open Solo",
      dscription: t('contribution'),
      demo: "https://opensolo.com/",
      status: 'Produção'
    },
    {
      id: 4,
      image: IMG2,
      title: "Neo estech",
      dscription: t('contribution'),
      demo: "https://app.neoestech.com.br/auth/login",
      status: 'Produção'
    },
    {
      id: 5,
      image: IMG11,
      title: "AREPI",
      dscription: t('contribution'),
      demo: "https://www.aprepi.com",
      status: 'Produção'
    },
    {
      id: 6,
      image: IMG3,
      title: "Just Travel",
      dscription: t('ChallengeJusTravel'),
      github: "https://github.com/danrleyney2210/challenge_logoipsum",
      demo: "https://challenge-logoipsum.vercel.app/",
      status: 'Live Demo'
    },
    {
      id: 7,
      image: IMG4,
      title: "PokeRub",
      dscription: t('ProjectRecube'),
      github: "https://github.com/danrleyney2210/rubcube_desafio",
      status: 'Produção'
    },
    {
      id: 8,
      image: IMG5,
      title: "Beta Store",
      dscription: t('ApplicationEducation'),
      github: "https://github.com/danrleyney2210/betastore_front",
      demo: "https://betastore-front.vercel.app/",
      status: 'Live Demo'
    },
    {
      id: 9,
      image: IMG6,
      title: "Landing Page",
      dscription: t('ProjectConvert'),
      github: "https://github.com/danrleyney2210/landing-page-01/tree/master",
      demo: "https://metodo-mais-views.vercel.app/",
      status: 'Live Demo'
    },
    {
      id: 10,
      image: IMG7,
      title: t('NeuralNetworks'),
      dscription: t('MasterEngineer'),
      github: "https://github.com/danrleyney2210/Redes_Neurais_em_R",
      status: 'Produção'
    },

    {
      id: 11,
      image: IMG9,
      title: 'Star Wars',
      dscription: t('starWras'),
      github: "https://github.com/danrleyney2210/start-wars-app",
      demo: "https://start-wars-app.vercel.app/",
      status: 'Produção'
    },

  ];

  return (
    <S.Wrapper id="portfolio">
      <h5>{t('Work')}</h5>
      <h2>{t('Portfolio')}</h2>

      <S.PortfolioContainer className="container">
        {data.map((item) => (
          <article key={item.id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="content_description">
              <h3>{item.title}</h3>
              <p>{item.dscription}</p>
            </div>
            <div className="portfolio_item_cta">
              {
                item.github ? (
                  <a href={item.github} className="btn" target={'_blank'}>Github</a>
                ) : (
                  <S.LinkProject>
                    Github
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
                  >
                    {item.status}
                  </a>
                ) : (
                  <S.LinkProject>
                    {item.status}
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
