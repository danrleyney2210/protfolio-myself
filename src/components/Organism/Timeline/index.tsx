import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { FaBuilding, FaRegCalendarAlt, FaGlobeEurope } from "react-icons/fa";

type Experience = {
  company: string;
  period: string;
  note?: string;
};

const experiences: Experience[] = [
  {
    company: "Instituto Eldorado",
    period: "Mar 2025 – Feb 2026",
    note: "International team based in Ireland",
  },
  { company: "DevMagic", period: "Apr 2024 – Feb 2025" },
  { company: "NHG Tech", period: "Mar 2021 – Mar 2024" },
  { company: "Intraversa", period: "Mar 2020 – Feb 2021" },
  { company: "Maida Health", period: "Mar 2019 – Feb 2020" },
  { company: "Maxia", period: "Feb 2018 – Feb 2019" },
];

const TimelineItem = ({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <S.Item
      ref={ref}
      side={index % 2 === 0 ? "left" : "right"}
      className={visible ? "visible" : ""}
      style={{ transitionDelay: `${(index % 2) * 120}ms` }}
    >
      <S.Dot className="dot" />
      <S.Content className="content">
        <span className="period">
          <FaRegCalendarAlt /> {experience.period}
        </span>
        <h4>
          <FaBuilding /> {experience.company}
        </h4>
        {experience.note && (
          <span className="note">
            <FaGlobeEurope /> {experience.note}
          </span>
        )}
      </S.Content>
    </S.Item>
  );
};

export const Timeline = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper id="timeline">
      <h5>{t("Timeline.subtitle")}</h5>
      <h2>{t("Timeline.title")}</h2>

      <S.Track className="container">
        {experiences.map((experience, index) => (
          <TimelineItem
            key={experience.company}
            experience={experience}
            index={index}
          />
        ))}
      </S.Track>
    </S.Wrapper>
  );
};
