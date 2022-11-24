import React from "react";
import * as S from "./styles";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVATAR1 from "../../../assets/avatar1.jpg";
import AVATAR2 from "../../../assets/avatar2.jpg";
import AVATAR3 from "../../../assets/avatar3.jpg";
import AVATAR4 from "../../../assets/avatar4.jpg";

interface IDataProps {
  avatar: any;
  name: string;
  occupation: string;
  review: string;
}

const data: IDataProps[] = [
  {
    avatar: AVATAR1,
    name: "Heleno da Silva Souza",
    occupation:
      "Fullstack Software Engineer | Spring Boot | API REST | Hibernate | Nexus | Java | SQL",
    review:
      "Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.",
  },
  {
    avatar: AVATAR2,
    name: "Luan David Carrilho",
    occupation: "Software Developer | Dart | Flutter",
    review:
      "O Danrley possui fortes competências técnicas, possui qualidades enquanto pessoa, fundamentais em qualquer organização. Destaco a sua força de vontade, empatia, curiosidade e excelente capacidade de comunicação. Estudamos juntos e trabalhamos juntos em alguns projetos de softwares durante 5 anos e considero que ele tem todas as condições para evoluir rapidamente na sua carreira, recomendo-o vivamente para todas as funções que possam exigir skills técnicos na área de IT, perfil de liderança, resiliência e cultura de organização.",
  },
  {
    avatar: AVATAR3,
    name: "Kenny Wilker",
    occupation:
      "Developer | Java | Python | HTML | CSS | Javascript | Git/GitHub | Data Science & Analytics",
    review:
      "Extremamente apaixonado pelo que faz, muito atento aos detalhes e competente. Além das suas habilidades e experiências curriculares, ele constrói confiança nas suas relações profissionais e conduz suas atribuições com total maestria e sempre em busca de inovações.. Leva a informação de forma clara e eficiente a todos os públicos e níveis da organização. É sempre um prazer para mim dividir um convívio profissional com a Mardoqueu.",
  },
  {
    avatar: AVATAR4,
    name: "Danrley Santos",
    occupation:
      "Software Engineer | Front End | React, React Native, Next.js, Typescript, and Node.js",
    review:
      "Danrley possui fortes habilidades em programação, lógica de programação e desenvolvimento de aplicações utilizando melhores práticas do mercado. Possui experiência em sala de aula e aptidão em resolver problemas.",
  },
];

export const Testimonials = () => {
  return (
    <S.Wrapper id="testimonials">
      <h5>Indicações</h5>
      <h2>Recomendações</h2>

      <Swiper className='container testimonials_container'
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}            
            pagination={{ clickable: true }}
      >
      { data.map((item, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client_avatar">
              <img src={item.avatar} alt="Avatar One" />
            </div>
            <h5 className="client_name">{item.name}</h5>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
      ))}
      </Swiper>
    </S.Wrapper>
  );
};
