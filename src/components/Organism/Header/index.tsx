import React, { useState } from 'react'
import { Cta } from '../../Molecules/Cta'
import * as S from './styles'
import Ney from '../../../assets/eu.png'
import { HeaderSocial } from '../../Molecules/HeaderSocial'
import { ChangeLanguage } from '../../Atomos/ChangeLanguage'

import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t } = useTranslation()
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)

  return (
    <>
      <S.Wrapper>
        <S.HeaderContainer className="container">
          <ChangeLanguage
            setIsOpenLanguage={(value: boolean) => setIsOpenLanguage(value)}
            isOpenLanguage={isOpenLanguage}
          />
          <h5>{t('hello')}, {t('I am')}</h5>
          <h1>Danrley Ney</h1>
          <h5 className='text-alight'>{t('SoftwareEngineer')} </h5>
          <Cta />
          <HeaderSocial />
          <div className='me'>
            <img src={Ney} alt="" />
          </div>
          <a href="#contact" className='scroll__down'>Scroll Down</a>
        </S.HeaderContainer>
      </S.Wrapper>

      {isOpenLanguage && <S.OverlayLanguage onClick={() => setIsOpenLanguage(false)} />}

    </>
  )
}
