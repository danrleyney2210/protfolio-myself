import styled from "styled-components";

export const Wrapper = styled.section`
`

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  .service {
    background: ${ props => props.theme.color_bg_variant};
    border-radius: 0 0 2rem 2rem;
    border: 1px solid ${ props => props.theme.color_primary };
    height: fit-content;
    transition: ${ props => props.theme.transition};

    &:hover {
      background-color: transparent;
      border-color: ${ props => props.theme.color_primary_variant};
      cursor: default;
    };

    .service_head{
      background-color: ${ props => props.theme.color_primary};
      padding: 2rem;
      border-radius: 0 0 2rem 2rem;
      box-shadow: 0 2rem 1rem rgba(0 ,0, 0, 0.1);

      h3 {
        color: ${ props => props.theme.color_bg };
        font-size: 1rem;
        text-align: center;
      }
    }

    .service_list {
      padding: 2rem;

      li {
        display: flex;
        gap: 1rem;
        margin-bottom: 0.8rem;

        p {
          font-size: 0.9rem;
        }

        .service_list_icon {
          color: ${ props => props.theme.color_primary };
          margin-top: 2px;
        }
      }
    }


  }

  @media( max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .service {
      height: auto;

    }
  }

  @media( max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    .service {
      height: auto;
      
    }
  }

 
`

