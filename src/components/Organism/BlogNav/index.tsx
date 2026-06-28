import React from "react";
import * as S from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { useTranslation } from "react-i18next";

type Props = {
  backTo?: string;
};

export const BlogNav = ({ backTo = "/" }: Props) => {
  const { t } = useTranslation();

  return (
    <S.Wrapper>
      <S.Container className="container">
        <S.Brand to="/blog">
          Danrley Ney<span className="dot">.</span>blog
        </S.Brand>
        <S.BackLink to={backTo}>
          <FiArrowLeft /> {t("Blog.back")}
        </S.BackLink>
      </S.Container>
    </S.Wrapper>
  );
};
