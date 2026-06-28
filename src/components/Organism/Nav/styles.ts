import styled from "styled-components";



export const Wrapper = styled.nav`
  background-color: rgba(0,0,0, 0.5);
  width: max-content;
  display: block;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  .language-content {
    cursor: pointer;
    height: 30px;
    width: 50px;
    background-color: rgba(0,0,0, 0.5);
    position: absolute;
    top: -30px;
    left: 45%;
    border-radius: 100px 100px 0 0 ;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    gap: 0.4rem;
    padding: 0.6rem 1rem;
  }
`

/* Itens que ficam escondidos no mobile (vão para o submenu dos 3 pontinhos) */
export const DesktopOnly = styled.div`
  display: contents;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

/* Container do botão "mais" (3 pontinhos), só aparece no mobile */
export const MoreWrapper = styled.div`
  position: relative;
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`

export const MoreButton = styled.button<{ isActive: boolean }>`
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  cursor: pointer;
  font-size: 1.1rem;
  background-color: ${(props) => (props.isActive ? props.theme.color_primary : 'transparent')};
  color: ${(props) => (props.isActive ? props.theme.color_white : props.theme.color_light)};
`

export const SubMenu = styled.div`
  position: absolute;
  bottom: calc(100% + 0.8rem);
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border-radius: 1.2rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 56px;
  animation: fadeUp 200ms ease;

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

export const SubItem = styled.a`
  padding: 0.7rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.color_light};
  font-size: 1.2rem;

  &:hover {
    color: ${(props) => props.theme.color_white};
    background-color: rgba(255, 255, 255, 0.08);
  }
`

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
`

interface ILinkProps {
  isActive: boolean
}

export const Link = styled.a<ILinkProps>`
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: ${(props) => props.isActive ? props.theme.color_white : props.theme.color_light};
  background-color: ${(props) => props.isActive ? props.theme.color_primary : 'transparent'};
  font-size: 1.1rem;

  &:hover {
    /* background-color: rgba(0,0,0, 0.2); */
  }
`