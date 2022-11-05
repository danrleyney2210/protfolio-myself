import styled from "styled-components";

export const Wrapper = styled.section``

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;

  .portfolio_item {
    background-color: ${ props => props.theme.color_bg_variant};
    padding: 1.3rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${ props => props.theme.transition};

    &:hover {
      border-color: ${ props => props.theme.color_bg_variant};
      background: transparent;
    }

    .portfolio_item_image {
      border-radius: 1.5rem;
      overflow: hidden;
    }

    .portfolio_item_cta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
    }

    h3 {
      margin: 1.2rem 0 2rem;
    }
  }


  @media(max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
  }

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
 
`