import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { FaAward, FaUsers, FaFolder } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years working</small>
            </article>

            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>30+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

           

            
          </div>
          <p>
              I am Tharindu Chathuranga, a dynamic 4th-year
              Software Engineering undergraduate at SLIIT. Endowed
              with an entrepreneurial spirit, I bring to the table a
              combination of energy, competence, and a relentless
              drive for success. My profile is marked by outstanding
              strategic planning, creative thinking, and innovative
              skills, making me a valuable asset in any professional
              environment. As I navigate through my academic
              journey, I am committed to leveraging my expertise to
              contribute meaningfully to the world of software
              engineering.

            </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
