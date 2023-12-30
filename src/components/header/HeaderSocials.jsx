import React from 'react'
import { FaLinkedin,FaGithub  } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/tharindu-chathuranga-ab071618a/" target='_blank'><FaLinkedin /></a>
        <a href="https://github.com/tharinduChathutanga" target='_blank'><FaGithub /></a>
        <a href="https://www.fiverr.com/marimax110" target='_blank'><SiFiverr /></a>
    </div>
  )
}

export default HeaderSocials
