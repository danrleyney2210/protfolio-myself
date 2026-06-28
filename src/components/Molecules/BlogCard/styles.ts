import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled(Link) <{ featured?: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.color_bg_variant};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.25rem;
  overflow: hidden;
  color: inherit;
  transition: ${(props) => props.theme.transition};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
    border-color: rgba(255, 255, 255, 0.16);
    color: inherit;
  }

  ${(props) =>
    props.featured &&
    `
    @media (min-width: 850px) {
      grid-column: 1 / -1;
      flex-direction: row;

      .cover {
        width: 45%;
        min-height: 320px;
      }
      .body {
        width: 55%;
        justify-content: center;
        padding: 2rem;
      }
      .title {
        font-size: 1.6rem;
        -webkit-line-clamp: 3;
      }
      .excerpt {
        font-size: 0.95rem;
        -webkit-line-clamp: 4;
      }
    }
  `}
`;

export const Cover = styled.div<{ gradient: string; image?: string }>`
  position: relative;
  height: 190px;
  background: ${(props) =>
    props.image ? `url(${props.image})` : props.gradient};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end;
  padding: 1rem;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.35) 100%
    );
  }

  .cover_icon {
    position: relative;
    z-index: 1;
    font-size: 2.4rem;
    color: rgba(255, 255, 255, 0.85);
    margin: auto;
  }
`;

export const Badge = styled.span<{ color: string }>`
  position: relative;
  z-index: 1;
  background: ${(props) => props.color};
  color: #0c0c1d;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.25rem 0.7rem;
  border-radius: 2rem;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.3rem;
  flex: 1;
`;

export const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.75rem;
  color: ${(props) => props.theme.color_light};

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
  }
`;

export const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  line-height: 1.35;
  color: ${(props) => props.theme.color_white};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const Excerpt = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: ${(props) => props.theme.color_light};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const ReadMore = styled.span`
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${(props) => props.theme.color_primary};
  transition: ${(props) => props.theme.transition};

  ${Card}:hover & {
    gap: 0.7rem;
  }
`;
