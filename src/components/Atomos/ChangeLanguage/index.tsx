import React, { useEffect, useState } from 'react'
import * as S from './styles'
import { SlArrowDown } from 'react-icons/sl'
import { useContextSite } from '../../../context/Context'
import { useTranslation } from 'react-i18next'

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

  const { i18n } = useTranslation()
  const [language, setLanguage] = useState<TypeLanguage>(() => {
    const currentLang = i18n.language?.split('-')[0]
    return (['en', 'pt', 'es'].includes(currentLang) ? currentLang : 'en') as TypeLanguage
  })

  useEffect(() => {
    const currentLang = i18n.language?.split('-')[0]
    if (['en', 'pt', 'es'].includes(currentLang)) {
      setLanguage(currentLang as TypeLanguage)
    }
  }, [i18n.language])

  const handleLanguage = (language: TypeLanguage) => {
    i18n.changeLanguage(language)
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

