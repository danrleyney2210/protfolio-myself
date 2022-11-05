import React from 'react'
import * as S from './styles'
import { BiCheck } from 'react-icons/bi'

export const Services = () => {
  return (
    <S.Wrapper id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <S.ServicesContainer className='container'>
        <article className='service'>
          <div className="service_head">
            <h3>Ui/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Ui/UX Design</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicig alit.</p>
            </li>
          </ul>
        </article>
      </S.ServicesContainer>
    </S.Wrapper>
  )
}

