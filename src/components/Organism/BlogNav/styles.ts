import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(31, 31, 56, 0.7);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: ${(props) => props.theme.color_white};

  &:hover {
    color: ${(props) => props.theme.color_white};
  }

  span.dot {
    color: ${(props) => props.theme.color_primary};
  }
`;

export const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1.1rem;
  border-radius: 2rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: ${(props) => props.theme.color_light};
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.03);
  transition: ${(props) => props.theme.transition};

  svg {
    font-size: 1rem;
  }

  &:hover {
    color: ${(props) => props.theme.color_white};
    border-color: ${(props) => props.theme.color_primary};
    background: rgba(77, 181, 255, 0.08);
  }
`;
