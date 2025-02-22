import React from "react";
import * as S from "./styles";
import ME from "../../../assets/eu.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import CV from '../../../assets/cv.pdf'


export const About = () => {
  const [t] = useTranslation('default')

  return (
    <S.Wrapper id="about">
      <h5>{t('Come and meet me')}</h5>
      <h2>{t('About me')}</h2>

      <S.AboutContainer className="container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>{t('Experience')}</h5>
              <small>8+ {t('Years Working')}</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>{t('Clients')}</h5>
              <small>+7 {t('Worldwide')}</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>{t('Projects')}</h5>
              <small>10+ {t('Completed')}</small>
            </article>
          </div>
          <p>
            {t('My name is')}
          </p>

          <p>
            {t('I am a graduate')}
          </p>

          <p>
            {t('I love working')}
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#contact" className="btn btn-primary">
              {t('Get in touch')}
            </a>



            <a href={CV} className="btn">{t('Download')} CV</a>
          </div>

        </div>
      </S.AboutContainer>
    </S.Wrapper>
  );
};
