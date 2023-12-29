import React from 'react'
import './services.css'
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
   <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service_list">
          <li><FaCheck className='service_list-icon'/><p>UI/UX Audit: I deeply analyze and optimize your existing UI designs to meet customer needs.</p></li>
          <li><FaCheck className='service_list-icon'/><p>Mobile app UI/UX Design: I build visually pleasing and functional user interfaces for Android and iOS devices.</p></li>
          <li><FaCheck className='service_list-icon'/><p>Web App UI/UX Design: Build effective and user-friendly web apps users can rely on leveraging multiple tech stacks.</p></li>

        </ul>
      </article>

      <article className="service">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className="service_list">
          <li><FaCheck className='service_list-icon'/><p>React: Develop interactive and dynamic user interfaces using React.js.</p></li>
          <li><FaCheck className='service_list-icon'/><p>HTML & CSS: Apply modern CSS techniques to create visually appealing and responsive designs.</p></li>
          <li><FaCheck className='service_list-icon'/><p>Flutter: Design beautiful and natively compiled applications for mobile, web, and desktop from a single codebase.</p></li>
          <li><FaCheck className='service_list-icon'/><p>Angular: Build robust and scalable web applications using Angular.</p></li>

        </ul>
      </article>

      <article className="service">
        <div className="service_head">
          <h3>FIVEM Development</h3>
        </div>

        <ul className="service_list">
          <li><FaCheck className='service_list-icon'/><p>I will create a fully professional fivem server for you</p></li>
          <li><FaCheck className='service_list-icon'/><p>I will provide you with a fully complete fivem qbcore server</p></li>
          <li><FaCheck className='service_list-icon'/><p>Adding Scripts and customizing scripts for your needs</p></li>
          <li><FaCheck className='service_list-icon'/><p>Adding custom Vehicles and optimizing.</p></li>
          <li><FaCheck className='service_list-icon'/><p>Adding custom MLO, Config for the scripts and optimizing.</p></li>

        </ul>
      </article>
    </div>
   </section>
  )
}

export default Services
