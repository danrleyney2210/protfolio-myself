import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 4rem 0;
`

export const ProjectCount = styled.div`
  text-align: center;
  margin: 2rem 0;
  font-size: 1.1rem;
  color: ${props => props.theme.color_light};
  font-weight: 500;
`

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  .portfolio_item {
    background: ${props => props.theme.color_bg_variant};
    border-radius: 1.25rem;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: ${props => props.theme.transition};
    display: flex;
    flex-direction: column;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.35);
      border-color: rgba(255, 255, 255, 0.14);
    }

    .portfolio_item_image {
      height: 180px;
      overflow: hidden;
      margin: 0.75rem 0.75rem 0;
      border-radius: 0.75rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        transition: transform 0.4s ease;
      }

      &:hover img {
        transform: scale(1.05);
      }
    }

    .portfolio_item_content {
      padding: 1.2rem 1.2rem 0;
      flex: 1;
      display: flex;
      flex-direction: column;

      h3 {
        color: ${props => props.theme.color_white};
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0 0 0.4rem 0;
      }
    }

    .portfolio_item_description {
      color: ${props => props.theme.color_light};
      font-size: 0.82rem;
      line-height: 1.5;
      margin-bottom: 1rem;
    }

    .portfolio_item_stack {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: auto;
    }

    .portfolio_item_cta {
      display: flex;
      gap: 0.6rem;
      padding: 0.8rem 1.2rem 1.2rem;

      .btn {
        padding: 0.45rem 1.4rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 500;
        transition: ${props => props.theme.transition};
        text-align: center;
        font-size: 0.75rem;
        display: inline-block;
        white-space: nowrap;

        &:not(.btn-primary) {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.12);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            color: ${props => props.theme.color_white};
            border-color: rgba(255, 255, 255, 0.25);
          }
        }

        &.btn-primary {
          background: ${props => props.theme.color_primary};
          color: #fff;
          border: 1px solid ${props => props.theme.color_primary};

          &:hover {
            opacity: 0.85;
          }
        }
      }
    }
  }

  @media(max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`



const techColors: Record<string, { bg: string; color: string }> = {
  'React': { bg: 'rgba(97, 218, 251, 0.15)', color: '#61dafb' },
  'React Native': { bg: 'rgba(97, 218, 251, 0.15)', color: '#61dafb' },
  'TypeScript': { bg: 'rgba(49, 120, 198, 0.18)', color: '#3178c6' },
  'JavaScript': { bg: 'rgba(247, 223, 30, 0.14)', color: '#f0db4f' },
  'Node.js': { bg: 'rgba(104, 159, 56, 0.18)', color: '#8cc84b' },
  'MongoDB': { bg: 'rgba(77, 179, 61, 0.15)', color: '#4db33d' },
  'Tailwind CSS': { bg: 'rgba(56, 189, 248, 0.14)', color: '#38bdf8' },
  'Vue.js': { bg: 'rgba(65, 184, 131, 0.16)', color: '#42b883' },
  'CSS': { bg: 'rgba(38, 77, 228, 0.15)', color: '#264de4' },
  'HTML': { bg: 'rgba(228, 77, 38, 0.15)', color: '#e44d26' },
  'PostgreSQL': { bg: 'rgba(51, 103, 145, 0.18)', color: '#336791' },
  'Python': { bg: 'rgba(55, 118, 171, 0.18)', color: '#3776ab' },
  'R': { bg: 'rgba(39, 108, 194, 0.16)', color: '#276dc2' },
  'TensorFlow': { bg: 'rgba(255, 111, 0, 0.15)', color: '#ff6f00' },
  'SWAPI': { bg: 'rgba(255, 232, 31, 0.12)', color: '#ffe81f' },
};

const defaultTechColor = { bg: 'rgba(255, 255, 255, 0.08)', color: 'rgba(255, 255, 255, 0.7)' };

export const TechTag = styled.span<{ techName: string }>`
  background: ${props => (techColors[props.techName] || defaultTechColor).bg};
  color: ${props => (techColors[props.techName] || defaultTechColor).color};
  padding: 0.22rem 0.65rem;
  border-radius: 2rem;
  font-size: 0.7rem;
  font-weight: 600;
  border: none;
  white-space: nowrap;
`;

export const LinkProject = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.35);
  padding: 0.45rem 1.4rem;
  border-radius: 0.5rem;
  cursor: not-allowed;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: ${(props) => props.theme.transition};
  background: rgba(255, 255, 255, 0.03);
  font-size: 0.75rem;
  font-weight: 500;
  opacity: 0.5;
  white-space: nowrap;
`
