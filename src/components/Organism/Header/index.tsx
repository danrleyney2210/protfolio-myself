import React from 'react'
import { Cta } from '../../Molecules/Cta'
import * as S from './styles'
import ME from '../../../assets/ney.png'
import { HeaderSocial } from '../../Molecules/HeaderSocial'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContainer className="container">
        <h5>Olá, eu sou</h5>
        <h1>Danrley Ney</h1>
        <h5 className='text-alight'>Full stack Developer </h5>
        <Cta />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}
