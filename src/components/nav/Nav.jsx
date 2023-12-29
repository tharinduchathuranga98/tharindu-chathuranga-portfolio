import React from 'react'
import './nav.css'
import { FaHome, FaUser,FaBook, FaServicestack  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('# ')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBook /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaServicestack /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail /></a>
    </nav>
  )
}

export default Nav
