import React from "react";
import * as S from "./styles";
import { AiFillCheckCircle } from "react-icons/ai";

export const Expirence = () => {
  return (
    <S.Wrapper id="experience">
      <h5>What Skill I have</h5>
      <h2>My experience</h2>

      <S.ExperienceContainer className="container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Typescript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Next Js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>React Native</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <div className="experience_content">
            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <AiFillCheckCircle className="experience_details_icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </S.ExperienceContainer>
    </S.Wrapper>
  );
};
