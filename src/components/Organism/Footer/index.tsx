import React from 'react'
import * as S from './styles'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

export const Footer = () => {
  return (
    <S.Wrapper>
      <footer>
        <a href="#" className='footer_logo'>DANRLEY</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_social">
          <a href='#'><FaFacebookF/></a>
          <a href='https://www.instagram.com/danrley_ney/'><FiInstagram/></a>
          <a href='https://twitter.com/danrleyney'><FiTwitter/></a>
        </div>

        <div className='footer_copyright'>
          <small>&copy; Danrley Santos. All rights reserved</small>
        </div>
      </footer>
    </S.Wrapper>
  )
}

