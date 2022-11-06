import styled from "styled-components";

export const Wrapper = styled.div`

  footer {
    background-color: ${ props => props.theme.color_primary};
    padding: 3rem 0;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 7rem;

    a {
      color: ${ props => props.theme.color_bg};
    }

    .footer_logo {
      font-size: 2rem;
      font-weight: 500;
      margin-bottom: 2rem;
      display: inline-block;
    }

    .permalinks {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 2rem;
      margin: 0 auto 3rem;
    }

    .footer_social {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 4rem;

      a {
        background-color: ${ props => props.theme.color_bg};
        color: ${ props => props.theme.color_white};
        padding: 0.8rem;
        border-radius: 0.7rem;
        display: flex;
        border: 1px solid transparent;

        &:hover {
          background-color: transparent;
          color: ${ props => props.theme.color_bg};
          border-color: ${ props => props.theme.color_bg};
        }
      }
    }

    .footer_copyright {
      margin-bottom: 4rem;
      color: ${ props => props.theme.color_bg};
    }
  }

  @media (max-width:600px) {
    footer {
      .permalinks {
        flex-direction: column;
        gap: 1.5rem;
      }

      .footer_social {
        margin-bottom: 2.6rem;
      }
    }
  }
`