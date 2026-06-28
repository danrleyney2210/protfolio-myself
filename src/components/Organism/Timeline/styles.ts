import styled from "styled-components";

export const Wrapper = styled.section``;

export const Track = styled.div`
  position: relative;
  padding: 1rem 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      180deg,
      transparent,
      ${(props) => props.theme.color_primary},
      transparent
    );
  }

  @media (max-width: 768px) {
    &::before {
      left: 18px;
    }
  }
`;

export const Item = styled.div<{ side: "left" | "right" }>`
  position: relative;
  width: 50%;
  padding: 1rem 2.6rem;
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.6s ease, transform 0.6s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  ${(props) =>
    props.side === "left"
      ? `
    left: 0;
    text-align: right;

    .content { align-items: flex-end; }
    .dot { right: -9px; }
  `
      : `
    left: 50%;
    text-align: left;

    .content { align-items: flex-start; }
    .dot { left: -9px; }
  `}

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding: 0.6rem 0 0.6rem 3rem;

    .content {
      align-items: flex-start;
    }
    .dot {
      left: 11px;
      right: auto;
    }
  }
`;

export const Dot = styled.span`
  position: absolute;
  top: 1.9rem;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${(props) => props.theme.color_primary};
  border: 3px solid ${(props) => props.theme.color_bg};
  box-shadow: 0 0 0 4px ${(props) => props.theme.color_primary_variant};
  z-index: 1;
  transition: ${(props) => props.theme.transition};

  ${Item}:hover & {
    transform: scale(1.25);
    box-shadow: 0 0 0 7px ${(props) => props.theme.color_primary_variant};
  }
`;

export const Content = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.45rem;
  background: ${(props) => props.theme.color_bg_variant};
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1rem;
  padding: 1.1rem 1.3rem;
  transition: ${(props) => props.theme.transition};
  text-align: left;

  &:hover {
    transform: translateY(-4px);
    border-color: ${(props) => props.theme.color_primary};
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.3);
  }

  .period {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: ${(props) => props.theme.color_primary};
  }

  h4 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: ${(props) => props.theme.color_white};
  }

  .note {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.74rem;
    color: ${(props) => props.theme.color_light};
    font-style: italic;
  }
`;
