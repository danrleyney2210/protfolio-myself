import React from 'react'
import * as S from './styles'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsDiscord } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'

export const HeaderSocial = () => {
  return (
    <S.Wrapper>
      <a href="https://www.linkedin.com/in/danrley-ney/" target="_black">
        <BsLinkedin />
      </a>
      <a href="https://github.com/danrleyney2210" target="_black">
        <FaGithub />
      </a>
      <a href="https://discord.com/" target="_black">
        <BsDiscord />
      </a>
      <a href="https://instagram.com" target="_black">
        <GrInstagram />
      </a>
    </S.Wrapper>
  )
}

