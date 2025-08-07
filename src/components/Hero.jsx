import React, { useEffect } from 'react'
import('./css/Hero.css')
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false
    })
  })
  return (
    <section className='hero'>
      <div className='t-wrap'>
        <h1 data-aos='fade-up'>Hero title</h1>
        <p data-aos='fade-up' data-aos-delay='i+100'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis?</p>
      </div>
    </section>
  )
}

export default Hero