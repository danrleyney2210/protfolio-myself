import styled from "styled-components";

export const Wrapper = styled.section``;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  > div {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 1.8rem;
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: ${(props) => props.theme.transition};

    &:hover {
      background: rgba(255, 255, 255, 0.05);
      border-color: rgba(255, 255, 255, 0.14);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    }

    h3 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: ${(props) => props.theme.color_primary};
      font-size: 1rem;
    }

    .experience_content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 1.2rem;

      .experience_details {
        display: flex;
        gap: 0.6rem;

        h4 {
          font-size: 0.82rem;
          font-weight: 500;
        }

        small {
          font-size: 0.7rem;
        }

        .experience_details_icon {
          margin-top: 4px;
          color: ${(props) => props.theme.color_primary};
          font-size: 0.9rem;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;

    > div {
      padding: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;

    > div {
      padding: 1.5rem 1rem;
    }
  }
`;
