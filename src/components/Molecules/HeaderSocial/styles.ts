import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  position: absolute;
  left: 0;
  bottom: 3rem;

  &:after {
    content: "";
    width: 1px;
    height: 2rem;
    background-color: ${ props => props.theme.color_primary};
  }

  @media(max-width: 600px) {
    /* display: none; */
  }
`