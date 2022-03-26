import React from 'react'
import "./services.css";
import {FcCheckmark} from 'react-icons/fc';
const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>
           <ul className='service_list'>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
           
           </ul>
        </article>
        {/* web development */}
        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
           <ul className='service_list'>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
           
           </ul>
        </article>
        {/* Content Creation */}
        <article className='service'>
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
           <ul className='service_list'>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
           
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
            <li>
              <FcCheckmark className='service_list_icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, dolores.</p>
            </li>
           
           </ul>
        </article>
      </div>
    </section>
  )
}

export default services