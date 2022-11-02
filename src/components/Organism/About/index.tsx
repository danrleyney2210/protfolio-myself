import React from 'react'
import * as S from './styles'
import ME from '../../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'

export const About = () => {
  return (
    <S.Wrapper id='about'>
      <h5>Get to Know</h5>
      <h2>About  Me</h2>

      <S.AboutContainer className='container'>
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_acards">
            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Experience</h5>
              <small>4+  Years Working</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Clients</h5>
              <small>+200 Worldwide</small>
            </article>

            <article className='about_card'>
              <FaAward className='about_icons'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
        </div>
      </S.AboutContainer>
    </S.Wrapper>
  )
}

