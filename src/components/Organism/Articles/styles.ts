import styled from "styled-components";

export const Wrapper = styled.section``;

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  .article {
    background: ${(props) => props.theme.color_bg_variant};
    border-radius: 1rem;
    border: 1px solid ${(props) => props.theme.color_primary};
    padding: 1.5rem;
    transition: ${(props) => props.theme.transition};

    &:hover {
      background: transparent;
      border-color: ${(props) => props.theme.color_primary_variant};
    }

    .article_head {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-bottom: 0.75rem;

      h3 {
        font-size: 1rem;
      }

      .article_icon {
        color: ${(props) => props.theme.color_primary};
        font-size: 1.25rem;
      }
    }

    p {
      margin-bottom: 1rem;
      color: ${(props) => props.theme.color_light};
      min-height: 40px;
    }

    .actions {
      display: flex;
      gap: 0.5rem;
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: grid;
  place-items: center;
  text-align: center;
  padding: 3rem 1rem;
  background: ${(props) => props.theme.color_bg_variant};
  border: 1px dashed ${(props) => props.theme.color_primary_variant};
  border-radius: 1rem;

  .icon {
    font-size: 2rem;
    color: ${(props) => props.theme.color_primary};
    margin-bottom: 0.5rem;
  }
`;
