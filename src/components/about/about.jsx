import React from 'react'
import "./about.css";
import Me from '../../assets/frame.jpg';
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderActive} from "react-icons/vsc";
const about = () => {
  return (
    <section id='about'>
    
      <h5>Let to know</h5>
      <h2>About Me.</h2>

      <div className="container about_container">
       <div className="about_me">
        <div className="about_image">
         <img src={Me} alt="me" className='aido-image'/>
        </div>  
      </div>  

      <div className="about_content">
       <div className="about_cards">
        <article className='about_card'>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small>3+ years Working</small>
        </article> 
        <article className='about_card'>
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>3+ years Working</small>
        </article> 
        <article className='about_card'>
          <VscFolderActive className='about_icon'/>
          <h5>Projects</h5>
          <small>3+ years Working</small>
        </article> 
        </div>  
        <p>I’m Aidarous Mouse  Innovative Front-end Developer with 3 years experience building and maintaining responsive websites in the recruiting industry. 
          Proficient in HTML, CSS, Sass, jQuery, JavaScript</p>
            <a href="#contacts"  className='btn btn-primary'>Lets Talk</a>
      </div>
      </div>
    </section>
  )
}

export default about