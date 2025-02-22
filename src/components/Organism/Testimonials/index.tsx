import React from "react";
import * as S from "./styles";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTranslation } from "react-i18next";

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

export const Testimonials = () => {
  const { t } = useTranslation();

  const data: IDataProps[] = [
    {
      avatar: AVATAR1,
      name: t('Testimonials.mardoqueu.name'),
      occupation: t('Testimonials.mardoqueu.occupation'),
      review: t('Testimonials.mardoqueu.review'),
    },
    {
      avatar: AVATAR2,
      name: t('Testimonials.luan.name'),
      occupation: t('Testimonials.luan.occupation'),
      review: t('Testimonials.luan.review'),
    },
    {
      avatar: AVATAR3,
      name: t('Testimonials.kenny.name'),
      occupation: t('Testimonials.kenny.occupation'),
      review: t('Testimonials.kenny.review'),
    },
    {
      avatar: AVATAR4,
      name: t('Testimonials.lucas.name'),
      occupation: t('Testimonials.lucas.occupation'),
      review: t('Testimonials.lucas.review'),
    },
  ];

  return (
    <S.Wrapper id="testimonials">
      <h5>{t('Testimonials.title')}</h5>
      <h2>{t('Testimonials.subtitle')}</h2>

      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i} className="testimonial">
            <div className="client_avatar">
              <img src={item.avatar} alt={`Avatar ${item.name}`} />
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
