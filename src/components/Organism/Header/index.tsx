import React from 'react'
import { Cta } from '../../Molecules/Cta'
import * as S from './styles'
import ME from '../../../assets/me.png'

export const Header = () => {
  return (
    <S.Wrapper>
      <S.HeaderContainer className="container">
        <h5>Hello I'm</h5>
        <h1>Danrley Ney</h1>
        <h5 className='text-alight'>Full stack Developer </h5>
        <Cta />

        <div className='me'>
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </S.HeaderContainer>
    </S.Wrapper>
  )
}
