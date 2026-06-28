import React, { useEffect } from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FiArrowLeft, FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { BlogNav } from "../../components/Organism/BlogNav";
import { Footer } from "../../components/Organism/Footer";
import { BlogCard } from "../../components/Molecules/BlogCard";
import {
  ContentBlock,
  getLocalizedContent,
  getPostBySlug,
  getRelatedPosts,
} from "../../data/blogPosts";
import { categoryConfig } from "../../data/blogCategories";

const renderBlock = (block: ContentBlock, index: number) => {
  switch (block.type) {
    case "heading":
      return <h2 key={index}>{block.text}</h2>;
    case "paragraph":
      return <p key={index}>{block.text}</p>;
    case "list":
      return (
        <ul key={index}>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return <blockquote key={index}>{block.text}</blockquote>;
    case "code":
      return (
        <pre key={index}>
          <code>{block.code}</code>
        </pre>
      );
    case "image":
      return (
        <figure key={index}>
          <img src={block.src} alt={block.alt || ""} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return null;
  }
};

export const BlogPost = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const post = getPostBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <>
        <BlogNav backTo="/blog" />
        <S.NotFound className="container">
          <h1>{t("Blog.notFound.title")}</h1>
          <p>{t("Blog.notFound.description")}</p>
          <S.BackLink to="/blog">
            <FiArrowLeft /> {t("Blog.backToBlog")}
          </S.BackLink>
        </S.NotFound>
        <Footer />
      </>
    );
  }

  const config = categoryConfig[post.category];
  const related = getRelatedPosts(post);
  const { title, content } = getLocalizedContent(post, i18n.language);

  const formattedDate = new Date(post.date).toLocaleDateString(i18n.language, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <BlogNav backTo="/blog" />
      <S.Page>
        <S.Hero gradient={config.gradient} image={post.cover}>
          <S.HeroContent className="container">
            <S.Badge color={config.color}>
              {t(`Blog.categories.${config.labelKey}`)}
            </S.Badge>
            <S.Title>{title}</S.Title>
            <S.Meta>
              <span>
                <FiUser /> Danrley Ney
              </span>
              <span>
                <FiCalendar /> {formattedDate}
              </span>
              <span>
                <FiClock /> {post.readTime} {t("Blog.minRead")}
              </span>
            </S.Meta>
          </S.HeroContent>
        </S.Hero>

        <div className="container">
          <S.Article>{content.map(renderBlock)}</S.Article>

          {post.tags.length > 0 && (
            <S.Tags>
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </S.Tags>
          )}

          <S.BackLink to="/blog">
            <FiArrowLeft /> {t("Blog.backToBlog")}
          </S.BackLink>

          {related.length > 0 && (
            <S.Related>
              <h2>{t("Blog.relatedTitle")}</h2>
              <div className="grid">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </S.Related>
          )}
        </div>
      </S.Page>
      <Footer />
    </>
  );
};
