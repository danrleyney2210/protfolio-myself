import styled from "styled-components";

export const Wrapper = styled.section`
  .testimonials_container {
    width: 40%;
    padding-bottom: 4rem;

  .client_avatar {
    width: 4rem;
    aspect-ratio: 1/1;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.4rem solid  ${ props => props.theme.color_primary_variant };

  }

  .testimonial {
    background: ${ props => props.theme.color_bg_variant};
    text-align: center;
    padding: 2rem;
    border-radius: 2rem;
    user-select: none;

    .client_review {
      color: ${ props => props.theme.color_light};
      font-weight: 300;
      display: block;
      width: 80%;
      margin: 0.8rem auto 0;
    }
  }
  
  .swiper-pagination-clickable {
    .swiper-pagination-bullet {
      background-color: ${ props => props.theme.color_primary };
    }
  }

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: ${ props => props.theme.container_width_sm };


    .client_review {
      width: ${ props => props.theme.container_width_sm };
    }
  }
  }
`

