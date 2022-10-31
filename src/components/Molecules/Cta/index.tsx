import React from 'react'
import * as S from './styles'
import CV from '../../../assets/cv.pdf'

export const Cta = () => {
  return (
    <S.Wrapper className='cta'>
      <a href={CV} className="btn">Donwload CV</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </S.Wrapper>
  )
}

