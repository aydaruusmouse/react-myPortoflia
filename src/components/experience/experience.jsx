import React from 'react'
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs";

const experience = () => {
  return (
        <section id="experience">
          <h5>What Skills I have</h5>
          <h2>My Experrience</h2>

          <div className="container experience_container">
              <div className="experience_frontend">
              <h3>Frontend Development</h3> 
              <div className="experience_content">
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>HTML5</h4>
                      <small className='text-light'>Experienced</small>                   
                      </div>
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>CSS3</h4>
                      <small className='text-light'>Experienced</small> 
                      </div>        
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>Javascript</h4>
                      <small className='text-light'>Experienced</small>        
                      </div>
                                
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>Bootstrap</h4>
                      <small className='text-light'>Experienced</small>   
                      </div>          
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>Tailwind</h4>
                      <small className='text-light'>Experienced</small>    
                      </div>
                                    
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>React</h4>
                      <small className='text-light'>Experienced</small>       
                      </div>
                                 
                </article>   
                <article className='experience_details'>
                      <BsPatchCheckFill className='experience_details_icons'/>
                      <div>
                      <h4>MaterialUi</h4>
                      <small className='text-light'>Experienced</small>     
                      </div>
                                   
                </article>   
              </div> 
              </div>
          <div className="experienced-backend">
            <h3>Backend Development</h3> 
            <div className="experience_content">
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>NodeJs</h4>
                    <small className='text-light'>Experienced</small>        
                    </div>
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>PHP</h4>
                    <small className='text-light'>Experienced</small>  
                    </div>
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>Mysql SQL</h4>
                    <small className='text-light'>Experienced</small>      
                    </div>
                                 
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>Express</h4>
                    <small className='text-light'>Experienced</small>   
                    </div>
                                 
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>Mangoodb</h4>
                    <small className='text-light'>Intermediate</small>   
                    </div>
                                   
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <dir>
                    <h4>C#</h4>
                    <small className='text-light'>Intermediate</small>      
                    </dir>
                                
              </article>   
              <article className='experience_details'>
                    <BsPatchCheckFill className='experience_details_icons'/>
                    <div>
                    <h4>Java</h4>
                    <small className='text-light'>Intermediate</small>        
                    </div>
           
              </article>   
            </div> 
            
            </div>
            </div>
          
        </section>
  )
}

export default experience