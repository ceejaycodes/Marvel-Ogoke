import React from 'react'
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Connect from './Connect';
import Footer from './Footer';
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Home() {
  return (
      <>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Connect/>
      <Footer/>
      </>
      
  )
}
