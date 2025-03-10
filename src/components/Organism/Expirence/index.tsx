import React from "react";
import * as S from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const Expirence = () => {
  const [t] = useTranslation('default')

  return (
    <S.Wrapper id="experience">
      <h5>{t('Skill')}</h5>
      <h2>{t('My technologies')}</h2>

      <S.ExperienceContainer className="container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Avançado</small>
              </div>
            </article>

            {/* <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Flutter</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article> */}

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Storybook</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Nest JS</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Prisma</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>AWS</h4>
                {/* <small className="text-light">{t('Advanced')}</small> */}
              </div>
            </article>
          </div>
        </div>
      </S.ExperienceContainer>
    </S.Wrapper>
  );
};
