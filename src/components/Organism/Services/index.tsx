import React from 'react'
import * as S from './styles'
import { BiCheck } from 'react-icons/bi'
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();

  return (
    <S.Wrapper id='services'>
      <h5>{t('Services.title')}</h5>
      <h2>{t('Services.subtitle')}</h2>

      <S.ServicesContainer className='container'>
        <article className='service'>
          <div className="service_head">
            <h3>{t('Services.qualifications.title')}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.qualifications.items.graduation')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.qualifications.items.masters')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.qualifications.items.frontend')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.qualifications.items.mobile')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.qualifications.items.tech')}</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>{t('Services.collaboration.title')}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.collaboration.items.development')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.collaboration.items.apps')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.collaboration.items.maintenance')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.collaboration.items.apis')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.collaboration.items.architecture')}</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>{t('Services.plus.title')}</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.plus.items.communication')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.plus.items.professional')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.plus.items.english')}</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>{t('Services.plus.items.discipline')}</p>
            </li>
          </ul>
        </article>
      </S.ServicesContainer>
    </S.Wrapper>
  )
}

