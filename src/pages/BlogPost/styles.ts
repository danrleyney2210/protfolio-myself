import styled from "styled-components";
import { Link } from "react-router-dom";

export const Page = styled.main`
  min-height: 100vh;
  padding-bottom: 5rem;
`;

export const Hero = styled.header<{ gradient: string; image?: string }>`
  position: relative;
  padding: 5rem 0;
  margin-bottom: 3rem;
  background: ${(props) => (props.image ? `url(${props.image})` : props.gradient)};
  background-size: cover;
  background-position: center;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(31, 31, 56, 0.55) 0%,
      rgba(31, 31, 56, 0.92) 100%
    );
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`;

export const Badge = styled.span<{ color: string }>`
  display: inline-block;
  background: ${(props) => props.color};
  color: #0c0c1d;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.85rem;
  border-radius: 2rem;
  margin-bottom: 1.2rem;
`;

export const Title = styled.h1`
  font-size: 2.6rem;
  line-height: 1.2;
  color: ${(props) => props.theme.color_white};
  margin-bottom: 1.2rem;

  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Meta = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.2rem;
  color: ${(props) => props.theme.color_light};
  font-size: 0.85rem;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
`;

export const Article = styled.article`
  max-width: 760px;
  margin: 0 auto;

  p {
    color: rgba(255, 255, 255, 0.82);
    font-size: 1.05rem;
    line-height: 1.85;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: ${(props) => props.theme.color_white};
    font-size: 1.6rem;
    margin: 2.5rem 0 1rem;
    text-align: left;
  }

  ul {
    margin: 0 0 1.6rem;
    padding-left: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }

  li {
    position: relative;
    padding-left: 1.6rem;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.7;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.65rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${(props) => props.theme.color_primary};
    }
  }

  blockquote {
    margin: 2rem 0;
    padding: 1.2rem 1.6rem;
    border-left: 3px solid ${(props) => props.theme.color_primary};
    background: rgba(77, 181, 255, 0.07);
    border-radius: 0 0.6rem 0.6rem 0;
    font-style: italic;
    font-size: 1.1rem;
    color: ${(props) => props.theme.color_white};
  }

  pre {
    background: #14142b;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 0.75rem;
    padding: 1.2rem 1.4rem;
    overflow-x: auto;
    margin: 0 0 1.8rem;

    code {
      font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
      font-size: 0.85rem;
      line-height: 1.6;
      color: #c9d1d9;
      white-space: pre;
    }
  }

  figure {
    margin: 2rem 0;

    img {
      border-radius: 0.75rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: #0c0c1d;
    }

    figcaption {
      margin-top: 0.7rem;
      text-align: center;
      font-size: 0.82rem;
      font-style: italic;
      color: ${(props) => props.theme.color_light};
    }
  }
`;

export const Tags = styled.div`
  max-width: 760px;
  margin: 2.5rem auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;

  span {
    background: rgba(255, 255, 255, 0.06);
    color: ${(props) => props.theme.color_light};
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    padding: 0.3rem 0.85rem;
    font-size: 0.78rem;
  }
`;

export const Related = styled.section`
  max-width: 980px;
  margin: 4rem auto 0;

  h2 {
    text-align: left;
    color: ${(props) => props.theme.color_white};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin: 2.5rem auto 0;
  max-width: 760px;
  font-weight: 600;
  color: ${(props) => props.theme.color_primary};

  &:hover {
    gap: 0.7rem;
  }
`;

export const NotFound = styled.div`
  max-width: 600px;
  margin: 6rem auto;
  text-align: center;
  color: ${(props) => props.theme.color_light};

  h1 {
    color: ${(props) => props.theme.color_white};
    margin-bottom: 1rem;
  }

  a {
    display: inline-block;
    margin-top: 1.5rem;
  }
`;
