import React from "react";
import * as S from "./styles";
import ME from "../../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export const About = () => {
  return (
    <S.Wrapper id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

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
              <small>+200 Worldwide</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium nesciunt doloremque similique eius quibusdam voluptatem
            asperiores. Iure quas animi recusandae, ducimus consequuntur amet
            cupiditate repellendus, neque commodi, voluptatibus distinctio
            facilis.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </S.AboutContainer>
    </S.Wrapper>
  );
};
