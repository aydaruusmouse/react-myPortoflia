import React from 'react'
import "./portofolia.css";
import Me from '../../assets/desktop-preview.jpg';
import Landig  from '../../assets/Happines.png';
import Boritino from '../../assets/Boritona.png';
const portofolia = () => {
    const style={
        height: 185
    }
  return (
    <section id="portofolia">
       <h5>My Recent Work</h5>
       <h2>Portofolia</h2>
       <div className="container portofolia-container">
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Me} alt="me" />   
            </div>
             <h3>Portofolia title</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com/aydaruusmouse/INSURE" className='btn' target='_blank'>Github</a>
             <a href="https://insure11.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Landig} alt="me" />   
            </div>
             <h3>Happines Landing Page</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com/aydaruusmouse/INSURE" className='btn' target='_blank'>Github</a>
             <a href="https://happiness1.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Me} alt="me" />   
            </div>
             <h3>Portofolia title</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com" className='btn' target='_blank'>Github</a>
             <a href="https://www.behance.net/gallery/121125565/Gamelore-App-Case-Study-UXUI-Design/modules/689180295" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Boritino} alt="me" style={style} />   
            </div>
             <h3>Portofolia title</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com" className='btn' target='_blank'>Github</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Me} alt="me" />   
            </div>
             <h3>Portofolia title</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com" className='btn' target='_blank'>Github</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
          <article className="portofolia-item">
             <div className="portofolia-item-image">
                 <img src={Me} alt="me" />   
            </div>
             <h3>Portofolia title</h3>
             <div className="portofolia-item-cta">
             <a href="https://github.com" className='btn' target='_blank'>Github</a>
             <a href="https://dribble.com" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
          </article>
       </div>
    </section>
  )
}

export default portofolia