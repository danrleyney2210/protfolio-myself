import React from 'react'
import * as S from './styles'
import { FaCode, FaMobileAlt, FaServer, FaRocket } from 'react-icons/fa'
import { useTranslation } from "react-i18next";

interface IServiceData {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

export const Services = () => {
  const { t } = useTranslation();

  const services: IServiceData[] = [
    {
      icon: <FaCode />,
      title: 'Web Application',
      description: 'Modern, responsive web apps with React, Next.js, TypeScript and Tailwind CSS.',
      highlights: ['React / Next.js', 'TypeScript', 'REST & GraphQL', 'CI/CD'],
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile App',
      description: 'Cross-platform mobile experiences with React Native, published to both stores.',
      highlights: ['React Native', 'iOS & Android', 'Push notifications', 'Offline-first'],
    },
    {
      icon: <FaServer />,
      title: 'API Development',
      description: 'Scalable RESTful APIs, database design and third-party integrations.',
      highlights: ['Node.js / Express', 'PostgreSQL / MongoDB', 'Auth & Security', 'Microservices'],
    },
    {
      icon: <FaRocket />,
      title: 'SaaS Application',
      description: 'End-to-end SaaS products with auth, payments, dashboards and multi-tenancy.',
      highlights: ['Stripe payments', 'Multi-tenant', 'Admin panel', 'Analytics'],
    },
  ];

  return (
    <S.Wrapper id='services'>
      <h5>{t('Services.title')}</h5>
      <h2>{t('Services.subtitle')}</h2>

      <S.ServicesGrid className='container'>
        {services.map((service, index) => (
          <S.ServiceItem key={index}>
            <S.IconWrapper>{service.icon}</S.IconWrapper>
            <S.ServiceContent>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="highlights">
                {service.highlights.map((h, i) => (
                  <span key={i}>{h}</span>
                ))}
              </div>
            </S.ServiceContent>
          </S.ServiceItem>
        ))}
      </S.ServicesGrid>
    </S.Wrapper>
  )
}

