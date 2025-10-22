import React from 'react'
import { About } from '../../components/Organism/About'
import { Contact } from '../../components/Organism/Contact'
import { Expirence } from '../../components/Organism/Expirence'
import { Footer } from '../../components/Organism/Footer'
import { Header } from '../../components/Organism/Header'
import { Nav } from '../../components/Organism/Nav'
import { Portfolio } from '../../components/Organism/Portfolio'
import { Services } from '../../components/Organism/Services'
import { Testimonials } from '../../components/Organism/Testimonials'
import { Articles } from '../../components/Organism/Articles'

export const Home = () => {
  return (
    <>
      <Header />
      <Nav />
      <Portfolio />
      <Articles />
      <About />
      <Expirence />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
