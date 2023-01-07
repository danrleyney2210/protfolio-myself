import React, { useEffect } from 'react'
import * as S from './styles'
import { SlArrowDown } from 'react-icons/sl'
import { useContextSite } from '../../../context/Context'
import i18n from 'i18next'

type IProps = {
  setIsOpenLanguage: (value: boolean) => void
  isOpenLanguage: boolean
}

type TypeLanguage = 'en' | 'pt' | 'es'



const config = {
  en: {
    path: '/assets/eua.jpeg',
    name: 'English'
  },
  pt: {
    path: './assets/br.png',
    name: 'Português'
  },
  es: {
    path: '/assets/es.jpeg',
    name: 'Espanhol'
  }
}

export const ChangeLanguage = ({ setIsOpenLanguage, isOpenLanguage }: IProps) => {

  const { language, setLanguage } = useContextSite()

  const handleLanguage = (language: TypeLanguage) => {
    if (language === 'en') {
      localStorage.setItem('i18nextLng', 'en')
      i18n.changeLanguage('en')
    } else if (language === 'es') {
      localStorage.setItem('i18nextLng', 'es')
      i18n.changeLanguage('es')
    } else if (language === 'pt') {
      localStorage.setItem('i18nextLng', 'pt')
      i18n.changeLanguage('pt')
    }
    setLanguage(language)

  }

  useEffect(() => {
    console.log(language)
  }, [language])


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
              <S.Item onClick={() => handleLanguage('en')}>
                <S.Icon>
                  <img src={'/assets/eua.jpeg'} alt="" />
                </S.Icon>
                <span>English</span>
              </S.Item>
              <S.Item onClick={() => handleLanguage('pt')}>
                <S.Icon >
                  <img src={'/assets/br.png'} alt="" />
                </S.Icon>
                <span>Português</span>
              </S.Item>
              <S.Item onClick={() => handleLanguage('es')}>
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

