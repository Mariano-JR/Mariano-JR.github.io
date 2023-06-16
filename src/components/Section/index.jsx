import React from 'react'
import foto from './profile-pic.png'
import Presentation from './Presentation'
import About from './About'
import Technologies from './Technologies'
import './Section.css'


export default function Section() {
  return (
    <section className='section'>
        <Presentation foto={foto} />
        <About />
        <Technologies />
    </section>
  )
}
