import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Services from '../components/Services'
import HowWorks from '../components/HowWorks'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutUs />
        <Services />
        <HowWorks />
        <Testimonials />
    </div>
  )
}

export default Home