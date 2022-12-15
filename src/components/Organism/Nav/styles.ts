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
`

interface ILinkProps {
  isActive: boolean
}

export const Link = styled.a<ILinkProps>`
  padding: 0.9rem;
  border-radius: 50%;
  display: flex;
  color: ${ (props) => props.isActive ? props.theme.color_white : props.theme.color_light };
  background-color: ${ (props) => props.isActive ? props.theme.color_primary : 'transparent' };
  font-size: 1.1rem;

  &:hover {
    /* background-color: rgba(0,0,0, 0.2); */
  }
`