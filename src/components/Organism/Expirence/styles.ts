import styled from "styled-components";

export const Wrapper = styled.section``;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  > div {
    background: ${(props) => props.theme.color_bg_variant};
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${(props) => props.theme.transition};

    &:hover {
      background: transparent;
      border-color: ${(props) => props.theme.color_primary_variant};
      cursor: default;
    }

    h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: ${(props) => props.theme.color_primary};
    }

    .experience_content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;

      .experience_details {
        display: flex;
        gap: 1rem;

        .experience_details_icon {
          margin-top: 6px;
          color: ${(props) => props.theme.color_primary};
        }
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    > div {
      width: 80%;
      padding: 2rem;
      margin: 0 auto;

      .experience_content {
        padding: 1rem;
      }
    }
  }

  @media (max-width: 600px) {
    gap: 1rem;

    > div {
      width: 100%;
      padding: 2rem 1rem;
    }
  }
`;
