import React, { useRef } from 'react';
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com';
import { SiFiverr } from "react-icons/si";


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0zb15wr', 'template_3xc41cm', form.current, 'MYqHLZF031UyLCmlf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>tchathurangaedu@gmail.com</h5>
            <a href="mailto:tchathurangaedu@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+94769101169</h5>
            <a href="https://wa.me/qr/7TYBF2SWYIM2O1" target='_blank'>Send a message</a>
          </article>
          <article className="contact_option">
            <SiFiverr  className='contact_option-icon'/>
            <h4>Fiverr</h4>
            <h5>Tharindu</h5>
            <a href="https://www.fiverr.com/marimax110?up_rollout=true" target='_blank'>Send a message</a>
          </article>
        
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <input type="text" name='subject' placeholder='Subject' required/>
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button className="btn btn-primary" type='submit'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
