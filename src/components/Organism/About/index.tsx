import React from "react";
import * as S from "./styles";
import ME from "../../../assets/eu.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <S.Wrapper id="about">
      <h5>Venha me Conhecer</h5>
      <h2>Sobre mim</h2>

      <S.AboutContainer className="container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>+7 Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Meu nome é Danrley Alves dos santos, Nasci em Teresina/PI, já passei
            por algumas empresas como: Maida Health, Max.ia, Healthyou e outros
            trabalhos como freelacer sendo programador.
          </p>

          <p>
            Fiz graduação em Ciência da computação, e logo em seguinda Mestrado
            em Engenharia de Computadores e sistema pela Universidade Estadual
            do Marnahão. Larguei o Doutorado e a sala de aula para dedicar-me e
            focar 100% em engenharia de Software e inteligência artificial.
          </p>

          <p>
            Eu amo trabalhar com pessoas comunicativas e que me ensinam ser um
            ser humano melhor. Acho surpreendente o que a tecnologia provoca na
            vida das pessoas e impactam diretamente na sociedade.
          </p>

          <a href="#contact" className="btn btn-primary">
            Entrar em contato
          </a>
        </div>
      </S.AboutContainer>
    </S.Wrapper>
  );
};
