import styled from "styled-components";

export const Wrapper = styled.section``;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  .about_me {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 2rem;
    background: linear-gradient(
      45deg,
      transparent,
      ${(props) => props.theme.color_primary},
      transparent
    );
    display: grid;
    place-items: center;

    .about_me_img {
      border-radius: 2rem;
      overflow: hidden;
      transform: rotate(10deg);
      transition: ${(props) => props.theme.transition};

      &:hover {
        transform: rotate(0);
      }
    }
  }

  .about_content {
    p {
      margin: 2rem 0 2.6rem;
      color: ${ props => props.theme.color_light};
    }

    .about_cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;

      .about_card {
        background: ${(props) => props.theme.color_bg_variant};
        border: 1px solid transparent;
        border-radius: 1rem;
        padding: 2rem;
        text-align: center;
        transition: ${(props) => props.theme.transition};
        cursor: pointer;

        &:hover {
          background: transparent;
          background-color: ${(props) => props.theme.color_primary_variant};
        }

        .about_icon {
          color: ${(props) => props.theme.color_primary};
          font-size: 1.4rem;
          margin-bottom: 1rem;

          h5 {
            font-size: 0.95rem;
          }

          small {
            font-size: 0.7rem;
            color: ${(props) => props.theme.color_light};
          }
        }
      }
    }
  }

  @media(max-width:1024px) {
    grid-template-columns: 1fr;
    gap: 0;

    .about_me {
      width: 50%;
      margin: 2rem auto 4rem;
    }

    .about_content {
      p {
        margin: 1rem 0  1.5rem;
      }
    }
  }

  @media(max-width: 600px) {
    .about_me {
      width: 65%;
      margin: 0 atuo 3rem;
    }

    .about_content {
      text-align: center;

      p {
        margin: 1.5rem 0;
      }
      .about_cards {
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
      }
    }
  }
`;
