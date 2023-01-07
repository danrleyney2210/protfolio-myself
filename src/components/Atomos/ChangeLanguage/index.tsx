import React, { useState } from 'react'
import * as S from './styles'
import { SlArrowDown } from 'react-icons/sl'

type IProps = {
  setIsOpenLanguage: (value: boolean) => void
  isOpenLanguage: boolean
}

type TypeLanguage = 'Eua' | 'Br' | 'Es'


const config = {
  Eua: {
    path: '/assets/eua.jpeg',
    name: 'English'
  },
  Br: {
    path: './assets/br.png',
    name: 'Português'
  },
  Es: {
    path: '/assets/es.jpeg',
    name: 'Espanhol'
  }
}

export const ChangeLanguage = ({ setIsOpenLanguage, isOpenLanguage }: IProps) => {
  const [language, setLanguage] = useState<TypeLanguage>('Eua')

  const handleLanguage = (language: TypeLanguage) => {
    setLanguage(language)
  }


  return (
    <>
      <S.Container onClick={
        () => setIsOpenLanguage(!isOpenLanguage)}>
        <S.Icon>
          <img src={config[language].path} alt="" />
        </S.Icon>
        <span>{config[language].name}</span>
        <SlArrowDown />

        {
          isOpenLanguage && (
            <S.Menu>
              <S.Item onClick={() => handleLanguage('Eua')}>
                <S.Icon>
                  <img src={'/assets/eua.jpeg'} alt="" />
                </S.Icon>
                <span>English</span>
              </S.Item>
              <S.Item onClick={() => handleLanguage('Br')}>
                <S.Icon >
                  <img src={'/assets/br.png'} alt="" />
                </S.Icon>
                <span>Português</span>
              </S.Item>
              <S.Item onClick={() => handleLanguage('Es')}>
                <S.Icon>
                  <img src={'/assets/es.jpeg'} alt="" />
                </S.Icon>
                <span>Espanhol</span>
              </S.Item>
            </S.Menu>
          )
        }

      </S.Container>
    </>
  )
}

