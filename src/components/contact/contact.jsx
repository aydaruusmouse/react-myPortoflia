import React, { useRef } from 'react';
import "./contact.css";
import {MdOutlineMail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {SiWhatsapp} from 'react-icons/si';
import emailjs from 'emailjs-com';
const Contact = () => {
  let form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cax4fyp', 'service_cax4fyp', form.current,
    'M186REkVKdFuwc0z1')
     
  };
  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me.</h2>
      <div className="container contact-container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineMail className='contact_option_icon'/>
          <h4>Email</h4>
          <h5>halalmedia9@gmail.com</h5>
          <a href="halalmedia9@gmail.com">Send a message.</a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className='contact_option_icon'/>
          <h4>Messenger</h4>
          <h5>halalmedia9@gmail.com</h5>
          <a href="halalmedia9@gmail.com">Send a message.</a>
          </article>
          <article className="contact_option">
            <SiWhatsapp className='contact_option_icon'/>
          <h4>WhatsApp</h4>
          <h5>halalmedia9@gmail.com</h5>
          <a href="halalmedia9@gmail.com">Send a message.</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
         <input type="text" name="name" placeholder='Enter your Name' required />
         <input type="email" name="email" id="email" placeholder='Enter your email' required />
         <textarea name="message" id="message" cols="30" rows="10" placeholder='Your Message'></textarea>
         <button className="btn btn-primary" type='submit'>Send Message.</button>
        </form>
      </div>
    </section>
  )
}

export default Contact