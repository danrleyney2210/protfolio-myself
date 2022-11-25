import React from "react";
import * as S from "./styles";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import AVATAR1 from "../../../assets/mardoque.jpeg";
import AVATAR2 from "../../../assets/avatar2.jpg";
import AVATAR3 from "../../../assets/avatar3.jpg";
import AVATAR4 from "../../../assets/lucas.png";

interface IDataProps {
  avatar: any;
  name: string;
  occupation: string;
  review: string;
}

const data: IDataProps[] = [
  {
    avatar: AVATAR1,
    name: "Mardoqueu Sousa",
    occupation:
      "Fullstack Software Engineer | Spring Boot | API REST | Hibernate | Nexus | Java | SQL",
    review:
      "Conheci Danrley no instituto federal, ele possui uma habilidade de adaptação impar em aprender novas tecnologias de programação como também é um excelente docente. Sempre foi bastante proativo como também possui intensa paixão pelo campo de tecnologia, costumava ficar até tarde no trabalho para bater metas e os nossos coordenadores nunca duvidavam de sua capacidade profissional e garra pela área de tecnologia da informação.",
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
    name: "Lucas Marques",
    occupation:
      "Quality Assurance Engineer/Master in Electrical Engineering - UFPI",
    review:
      "Grande profissional! Além de realizar uma ótima entrega do ponto de vista técnico, estabelece uma boa comunicação e dinâmica para o desenvolvimento do projeto, além de ser um grande desenvolvedor que sempre cumpre as suas metas estabelecidas, Recomendo!",
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
            <span>{item.occupation}</span>
            <small className="client_review">{item.review}</small>
          </SwiperSlide>
      ))}
      </Swiper>
    </S.Wrapper>
  );
};
