import styled from "styled-components";

export const Wrapper = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media (max-width: 1024px) {
    height: 68vh;
  }

  @media (max-width: 600px) {
    height: 100vh;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  /* background-color: red; */

  .me {
    background: linear-gradient(
      ${(props) => props.theme.color_primary},
      transparent
    );
    width: 22rem;
    height: 30rem;
    position: absolute;
    left: calc(50% - 11rem);
    margin-top: 4rem;
    border-radius: 12rem 12rem 0 0;
    overflow: hidden;
    padding: 5rem 1.5rem 1.5rem;

    display: flex;
    justify-content: center;
    /* align-items: center; */

    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
  }

  .scroll__down {
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 200;
  }

  @media (max-width: 600px) {
    .me {
      width: 18rem;
      margin-left: 40px;
      height: 20rem;
      display: flex;
      justify-content: center;
      align-items: center;
      /* margin: 0 auto; */

      img {
        margin-top: -100px;
        width: 210px;
        height: 210px;
      }
    }

    .scroll__down {
      /* display: none; */
    }
  }
`;

export const OverlayLanguage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
`;
