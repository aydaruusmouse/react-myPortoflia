import React, { useState } from 'react';
import "./testemonia.css";
// Import Swiper styles

import Clients from './testimonial.js';

const Testemonia = () => {
  const [Testi, setTesti] = useState(Clients)
 console.log(Testi);
  return (
    <section id="testemonia">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials-container">
          {Clients.map(({id, img, title, desc})=>{
                 return <article className="testimonials" key={id}>
                  <div className="cleint-avatar">
                    <img src={img} alt="" />
                  
                   </div>
                   <small className="cleint_review">
                   <h5 className="cleint_profile">{title}</h5>
                     {desc}
                   </small>
             </article>
          })}
        
      </div>
    </section>
  )
}

export default Testemonia