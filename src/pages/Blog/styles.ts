import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  padding-bottom: 6rem;
`;

export const Hero = styled.section`
  margin-top: 3.5rem;
  text-align: center;

  .kicker {
    color: ${(props) => props.theme.color_primary};
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    font-size: 3rem;
    margin: 0.5rem 0 1rem;
    color: ${(props) => props.theme.color_white};
  }

  p {
    max-width: 620px;
    margin: 0 auto;
    color: ${(props) => props.theme.color_light};
    font-size: 1.05rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.1rem;
    }
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 2.5rem 0;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.55rem 1.3rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};
  border: 1px solid
    ${(props) =>
    props.active ? props.theme.color_primary : "rgba(255,255,255,0.12)"};
  background: ${(props) =>
    props.active ? props.theme.color_primary : "rgba(255,255,255,0.03)"};
  color: ${(props) =>
    props.active ? "#0c0c1d" : props.theme.color_light};

  &:hover {
    border-color: ${(props) => props.theme.color_primary};
    color: ${(props) => (props.active ? "#0c0c1d" : props.theme.color_white)};
  }
`;

export const Section = styled.section`
  margin-bottom: 3rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.4rem;

  h2 {
    font-size: 0.95rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: ${(props) => props.theme.color_white};
    white-space: nowrap;
  }

  .line {
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
  }

  .count {
    font-size: 0.78rem;
    font-weight: 600;
    color: ${(props) => props.theme.color_light};
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
    padding: 0.15rem 0.7rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  align-items: stretch;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Empty = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 1rem;
  color: ${(props) => props.theme.color_light};
  border: 1px dashed ${(props) => props.theme.color_primary_variant};
  border-radius: 1rem;
`;
