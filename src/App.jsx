import { useState } from 'react'
import Hero from './components/hero'
import HowItWorks from './components/howItWorks'
import WhyChooseUs from './components/whyChooseUs'
import Testimonials from './components/testimonials'
import ContactForm from './components/contactForm'

function App() {
  return (
    <>
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
    </>
  )
}

export default App
