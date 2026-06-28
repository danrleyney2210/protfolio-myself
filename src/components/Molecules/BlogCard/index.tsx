import React from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { FiClock, FiCalendar, FiArrowRight, FiFeather } from "react-icons/fi";
import { BlogPost, getLocalizedContent } from "../../../data/blogPosts";
import { categoryConfig } from "../../../data/blogCategories";

type Props = {
  post: BlogPost;
  highlighted?: boolean;
};

export const BlogCard = ({ post, highlighted }: Props) => {
  const { t, i18n } = useTranslation();
  const config = categoryConfig[post.category];
  const { title, excerpt } = getLocalizedContent(post, i18n.language);

  const formattedDate = new Date(post.date).toLocaleDateString(i18n.language, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <S.Card to={`/blog/${post.slug}`} featured={highlighted}>
      <S.Cover
        className="cover"
        gradient={config.gradient}
        image={post.cover}
      >
        <S.Badge color={config.color}>
          {t(`Blog.categories.${config.labelKey}`)}
        </S.Badge>
        {!post.cover && <FiFeather className="cover_icon" />}
      </S.Cover>

      <S.Body className="body">
        <S.Meta>
          <span>
            <FiCalendar /> {formattedDate}
          </span>
          <span>
            <FiClock /> {post.readTime} {t("Blog.minRead")}
          </span>
        </S.Meta>
        <S.Title className="title">{title}</S.Title>
        <S.Excerpt className="excerpt">{excerpt}</S.Excerpt>
        <S.ReadMore>
          {t("Blog.readMore")} <FiArrowRight />
        </S.ReadMore>
      </S.Body>
    </S.Card>
  );
};
