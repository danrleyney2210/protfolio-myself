import styled from "styled-components";

export const Wrapper = styled.section``

export const ServicesGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`

export const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 2rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  transition: ${props => props.theme.transition};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  &:hover {
    padding-left: 0.5rem;
  }

  @media(max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  min-width: 3rem;
  border-radius: 0.75rem;
  background: ${props => props.theme.color_primary_variant};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.2rem;
    color: ${props => props.theme.color_primary};
  }
`

export const ServiceContent = styled.div`
  flex: 1;

  h3 {
    color: ${props => props.theme.color_white};
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0 0 0.3rem 0;
  }

  p {
    color: ${props => props.theme.color_light};
    font-size: 0.8rem;
    line-height: 1.6;
    margin: 0 0 0.75rem 0;
    max-width: 520px;
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;

    span {
      color: ${props => props.theme.color_primary};
      font-size: 0.7rem;
      font-weight: 500;
      padding: 0.2rem 0.65rem;
      border: 1px solid ${props => props.theme.color_primary_variant};
      border-radius: 2rem;
      background: transparent;
    }
  }
`

