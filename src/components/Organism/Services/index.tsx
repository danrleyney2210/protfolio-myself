import React from 'react'
import * as S from './styles'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <S.Wrapper id='services'>
      <h5>O que eu Ofereço?</h5>
      <h2>Serviços</h2>

      <S.ServicesContainer className='container'>
        <article className='service'>
          <div className="service_head">
            <h3>Qualificações</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Graduado em Ciências da Computação.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Mestrado em Engenharia de Computadores e sistemas.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Desenvolvimento Front-End Web.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Desenvolvimento Front-End Mobile.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Técnico em Programação e tecnologia.</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Como posso colaborar ?</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Desenvolvimento web/Mobile e desktop.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Desenvolvimento de aplicativos, sistemas e sites para pequenas e grandes empresas.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Manutenção e melhorias em sistemas já desenvolvidos.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Consumo de APIs para integração com os sistemas.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Atuar na arquitetura e consultoria de aplicações web/mobile e desktop.</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Plus</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Fortes habilidades de comunicação com a capacidade de discutir qualquer problema com uma ampla variedade de indivíduos e grupos.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Capacidade de permanecer profissional em situações estressantes/disputas.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Habilidades de comunicação oral e escrita em inglês.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon' />
              <p>Excelente disciplina, foco e atenção aos detalhes.</p>
            </li>

          </ul>
        </article>
      </S.ServicesContainer>
    </S.Wrapper>
  )
}

