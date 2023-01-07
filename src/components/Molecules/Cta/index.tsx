import React from 'react'
import * as S from './styles'
import CV from '../../../assets/cv.pdf'
import { useTranslation } from 'react-i18next'

export const Cta = () => {
  const [t] = useTranslation('default')

  return (
    <S.Wrapper className='cta'>
      <a href={CV} className="btn">{t('Download')} CV</a>
      <a href="#contact" className='btn btn-primary'>{t('Contact')}</a>
    </S.Wrapper>
  )
}

