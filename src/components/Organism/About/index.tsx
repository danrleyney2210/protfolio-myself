import React from "react";
import * as S from "./styles";
import ME from "../../../assets/eu.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { useTranslation } from "react-i18next";
import CV from '../../../assets/cv.pdf'

export const About = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper id="about">
      <h5>{t('About.title')}</h5>
      <h2>{t('About.subtitle')}</h2>

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
              <h5>{t('About.experience.title')}</h5>
              <small>{t('About.experience.years')}</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>{t('About.clients.title')}</h5>
              <small>{t('About.clients.count')}</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>{t('About.projects.title')}</h5>
              <small>{t('About.projects.count')}</small>
            </article>
          </div>
          <p>
            {t('About.description.intro')}
          </p>

          <p>
            {t('About.description.education')}
          </p>

          <p>
            {t('About.description.personal')}
          </p>

          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="#contact" className="btn btn-primary">
              {t('About.buttons.contact')}
            </a>

            <a href={CV} className="btn">
              {t('About.buttons.download')} CV
            </a>
          </div>
        </div>
      </S.AboutContainer>
    </S.Wrapper>
  );
};
