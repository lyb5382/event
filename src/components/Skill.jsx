import React, { useEffect } from 'react'
import('./css/Skill.css')
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skill = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 120,
      once: false
    })
  })
  const skills = ['html', 'node', 'js', 'python', 'react']
  return (
    <section className='skill'>
      <div className='t-wrap'>
        <h1>Skill title</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, facilis?</p>
        <ul className='skills'>
          {skills.map((skill, i) => (<li key={i}>{skill}</li>))}
        </ul>
      </div>
    </section>
  )
}

export default Skill