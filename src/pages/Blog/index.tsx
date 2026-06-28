import React, { useMemo, useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { BlogNav } from "../../components/Organism/BlogNav";
import { Footer } from "../../components/Organism/Footer";
import { BlogCard } from "../../components/Molecules/BlogCard";
import { blogPosts, BlogCategory } from "../../data/blogPosts";
import { blogCategories, categoryConfig } from "../../data/blogCategories";

type Filter = "all" | BlogCategory;

export const Blog = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");

  const posts = useMemo(() => {
    const sorted = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    return filter === "all"
      ? sorted
      : sorted.filter((post) => post.category === filter);
  }, [filter]);

  const featured =
    filter === "all" ? posts.find((post) => post.featured) : undefined;
  const rest = featured
    ? posts.filter((post) => post.slug !== featured.slug)
    : posts;

  const restLabel =
    filter === "all"
      ? t("Blog.latest")
      : t(`Blog.categories.${categoryConfig[filter].labelKey}`);

  return (
    <>
      <BlogNav />
      <S.Page>
        <S.Hero className="container">
          <span className="kicker">{t("Blog.kicker")}</span>
          <h1>{t("Blog.title")}</h1>
          <p>{t("Blog.subtitle")}</p>
        </S.Hero>

        <div className="container">
          <S.Filters>
            <S.FilterButton
              active={filter === "all"}
              onClick={() => setFilter("all")}
            >
              {t("Blog.categories.all")}
            </S.FilterButton>
            {blogCategories.map((category) => (
              <S.FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {t(`Blog.categories.${categoryConfig[category].labelKey}`)}
              </S.FilterButton>
            ))}
          </S.Filters>

          {posts.length === 0 ? (
            <S.Empty>{t("Blog.empty")}</S.Empty>
          ) : (
            <>
              {featured && (
                <S.Section>
                  <S.SectionHeader>
                    <h2>{t("Blog.featured")}</h2>
                    <span className="line" />
                  </S.SectionHeader>
                  <BlogCard post={featured} highlighted />
                </S.Section>
              )}

              {rest.length > 0 && (
                <S.Section>
                  <S.SectionHeader>
                    <h2>{restLabel}</h2>
                    <span className="line" />
                    <span className="count">{rest.length}</span>
                  </S.SectionHeader>
                  <S.Grid>
                    {rest.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </S.Grid>
                </S.Section>
              )}
            </>
          )}
        </div>
      </S.Page>
      <Footer />
    </>
  );
};
