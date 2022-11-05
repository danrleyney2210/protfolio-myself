import React from "react";
import * as S from "./styles";
import IMG1 from "../../../assets/portfolio1.jpg";
import IMG2 from "../../../assets/portfolio2.jpg";
import IMG3 from "../../../assets/portfolio3.jpg";
import IMG4 from "../../../assets/portfolio4.jpg";
import IMG5 from "../../../assets/portfolio5.png";

interface IDataProps {
  id: number,
  image: any,
  title: string,
  github: string,
  demo: string
}

const data: IDataProps[] = [
  {
    id: 1,
    image: IMG1,
    title: "Google Clone",
    github: "https://github.com/Mardoqueu/google-v1",
    demo: "https://google-v1-teal.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Movie App",
    github: "https://github.com/Mardoqueu/movie-app-v1",
    demo: "https://movie-app-v1-tawny.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Instagram Clone",
    github: "https://github.com/Mardoqueu/insta-v",
    demo: "https://insta-vercel.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Twitter Clone",
    github: "https://github.com/Mardoqueu/twitter",
    demo: "https://twitter-peach.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Help-desk Frontend",
    github: "https://github.com/Mardoqueu/helpdesk-front",
    demo: "https://helpdesk-front-tawny.vercel.app/login",
  },
  {
    id: 6,
    image: IMG5,
    title: "Help-desk Backend API",
    github: "https://github.com/Mardoqueu/helpdesk-backend",
    demo: "https://tindog-lake.vercel.app/",
  },
];

export const Portfolio = () => {
  return (
    <S.Wrapper id="portfolio">
      <h5>Mu Recent Work</h5>
      <h2>Portfólio</h2>

      <S.PortfolioContainer className="container">
        {data.map((item) => (
          <article key={item.id} className="portfolio_item">
            <div className="portfolio_item_image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio_item_cta">
              <a href={item.github} className="btn" target="_blank">
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                target="_blank"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </S.PortfolioContainer>
    </S.Wrapper>
  );
};
