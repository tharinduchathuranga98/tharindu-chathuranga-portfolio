import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagramSquare  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">THARINDU</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.facebook.com/tharindu.chathurang/"><FaFacebook /></a>
        <a href="https://www.instagram.com/_tharinduchathuranga_/"><FaInstagramSquare /></a>
      </div>

      <div className="footer_copyright">
        <small>Tharindu Chathuranga. All rights reserved</small>
      </div>
    </footer>

    
  )
}

export default Footer
