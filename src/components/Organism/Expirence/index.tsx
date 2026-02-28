import React from "react";
import * as S from "./styles";
import {
  SiJavascript, SiReact, SiTypescript, SiNextdotjs, SiBootstrap,
  SiStorybook, SiHtml5, SiCss3, SiSass, SiGit,
  SiNodedotjs, SiExpress, SiMysql, SiNestjs, SiPrisma, SiAmazonaws,
  SiOpenai
} from "react-icons/si";
import { FaBrain, FaRobot, FaMobileAlt, FaMagic, FaCogs, FaNetworkWired } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export const Expirence = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper id="experience">
      <h5>{t('Skill')}</h5>
      <h2>{t('My technologies')}</h2>

      <S.ExperienceContainer className="container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiJavascript className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiReact className="experience_details_icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiTypescript className="experience_details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiNextdotjs className="experience_details_icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <FaMobileAlt className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiBootstrap className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiStorybook className="experience_details_icon" />
              <div>
                <h4>Storybook</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiHtml5 className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiCss3 className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiSass className="experience_details_icon" />
              <div>
                <h4>Sass</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiGit className="experience_details_icon" />
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
              <SiNodedotjs className="experience_details_icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiExpress className="experience_details_icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiMysql className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiNestjs className="experience_details_icon" />
              <div>
                <h4>Nest JS</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiPrisma className="experience_details_icon" />
              <div>
                <h4>Prisma</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiAmazonaws className="experience_details_icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_ai">
          <h3>AI & Automation</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaRobot className="experience_details_icon" />
              <div>
                <h4>Claude AI / Claude Code</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <FaMagic className="experience_details_icon" />
              <div>
                <h4>AI-Assisted Development</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <FaBrain className="experience_details_icon" />
              <div>
                <h4>Prompt Engineering</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <FaCogs className="experience_details_icon" />
              <div>
                <h4>n8n / Workflow Automation</h4>
                <small className="text-light">{t('Intermediary')}</small>
              </div>
            </article>

            <article className="experience_details">
              <SiOpenai className="experience_details_icon" />
              <div>
                <h4>OpenAI API / LLM Integration</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>

            <article className="experience_details">
              <FaNetworkWired className="experience_details_icon" />
              <div>
                <h4>Vibe Coding & AI Monitoring</h4>
                <small className="text-light">{t('Advanced')}</small>
              </div>
            </article>
          </div>
        </div>
      </S.ExperienceContainer>
    </S.Wrapper>
  );
};
