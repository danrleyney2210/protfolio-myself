import React from 'react'
import * as S from './styles'
import { useTranslation } from 'react-i18next'

export const Cta = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper className='cta'>
      <a href='#about' className="btn">{t('About me')}</a>
      <a href="#contact" className='btn btn-primary'>{t('Contact')}</a>
    </S.Wrapper>
  )
}

