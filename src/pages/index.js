import React from 'react'
import { Banner } from '../components/Banner/Banner'
import { Contact } from '../components/Contact/Contact'
import { Footer } from '../components/footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import { Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
