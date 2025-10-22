import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { FiFileText, FiDownload, FiExternalLink } from "react-icons/fi";
import ColoniaPDF from "./colonia_artificial.pdf";
import MusicoterapiaPDF from "./musicoterapia.pdf";
import RenotePDF from "./Revista_Novas_Tecnologias_na_Educação__RENOTE_.pdf";

type Article = {
  id: string;
  title: string;
  description: string;
  file?: string;
};

export const Articles = () => {
  const { t } = useTranslation();

  const articles: Article[] = [
    {
      id: "colonia-artificial",
      title: "Artificial Colony Optimization",
      description:
        "Research article introducing artificial colony optimization techniques and practical applications in computational intelligence.",
      file: ColoniaPDF,
    },
    {
      id: "musicoterapia",
      title: "Computer Music Therapy for People with Dysorthographia Problems",
      description: `Article published in an international journal`,
      file: MusicoterapiaPDF,
    },
    {
      id: "renote-novas-tecnologias",
      title: "Protótipo CNC",
      description:
        "Article published in RINOTE discussing approaches and impacts of new technologies applied to the teaching-learning process.",
      file: RenotePDF,
    },
  ];

  return (
    <S.Wrapper id="articles">
      <h5>{t("Articles.title")}</h5>
      <h2>{t("Articles.subtitle")}</h2>

      <S.ArticlesContainer className="container">
        {articles.length === 0 && (
          <S.EmptyState>
            <FiFileText className="icon" />
            <h3>{t("Articles.empty.title")}</h3>
            <p className="text-alight">{t("Articles.empty.description")}</p>
          </S.EmptyState>
        )}

        {articles.map((item) => (
          <article key={item.id} className="article">
            <div className="article_head">
              <FiFileText className="article_icon" />
              <h3>{item.title}</h3>
            </div>
            <p className="text-alight">{item.description}</p>

            {item.file && (
              <div className="actions">
                <a href={item.file} target="_blank" rel="noreferrer" className="btn">
                  <FiExternalLink /> {t("Articles.cta.view")}
                </a>
                <a href={item.file} download className="btn btn-primary">
                  <FiDownload /> {t("Articles.cta.download")}
                </a>
              </div>
            )}
          </article>
        ))}
      </S.ArticlesContainer>
    </S.Wrapper>
  );
};
