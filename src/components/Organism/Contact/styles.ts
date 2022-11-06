import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;

`;

export const ContactContianer = styled.section`
  width: 58%;
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  .contact_options {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    .contact_option_icon {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    a {
      margin-top: 0.7rem;
      display: inline-block;
      font-size: 0.8rem;
    }

    .contact_option {
      background: ${(props) => props.theme.color_bg_variant};
      padding: 1.2rem;
      border-radius: 1.2rem;
      text-align: center;
      border: 1px solid transparent;
      transition: ${(props) => props.theme.transition};

      &:hover {
        background: transparent;
        border-color: ${(props) => props.theme.color_primary_variant};
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    input,
    textarea {
      width: 100%;
      padding: 1.5rem;
      border-radius: 0.5rem;
      background: transparent;
      border: 2px solid ${(props) => props.theme.color_primary_variant};
      resize: none;
      color: ${(props) => props.theme.color_white};
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    width: ${(props) => props.theme.container_width_sm};
  }
`;

export const Modal = styled.div`
  padding: 1.4rem;
  text-align: center;
  max-width: 300px;
  border-radius: 6px;
  position: absolute;
  
  top: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => props.theme.color_primary_variant};
  color: ${(props) => props.theme.color_white};
`;
