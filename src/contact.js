import React from 'react';
import './contact.css';

export default function Contact() {
  return (
    <div className='contact-main' id='contact'>
        <div className='contact-tag'>Contact <span>Me</span></div>
        <div className='contact-sec'  data-aos="zoom-in-right">
          <div className='dotpng'><img src='./image/dotdesing1.png'></img></div>
          <div className='dotpng1'><img src='./image/dotdesing3.png'></img></div>
          
          {/* <div className='contact-img'><img src='./image/contact3.png'></img></div> */}
          <div className='contact-info' data-aos="zoom-in-up">
            <h1>Contact Us</h1>
             <div className='call'>
              <div className='call-icon'><i class="fa-solid fa-phone"></i></div>
              <div className='call-info'>
              <h5>phone :</h5>
              <h4>+ 91 7802071030</h4>
               
              </div>
             </div>
             <div className='call'>
              <div className='call-icon'><i class="fa-solid fa-envelope"></i></div>
              <div className='call-info'>
              <h5>Email :</h5>
              <h4>ryb782080@gmail.com</h4>
              </div>
             </div>
             {/* <div className='call'>
              <div className='call-icon'><i class="fa-brands fa-linkedin-in"></i></div>
              <div className='call-info'>
                <h5>linkedin :</h5>
                <h4>dsfghjasdfgh</h4>
              </div>
             </div> */}
             <div className='call'>
              <div className='call-icon'><i class="fa-brands fa-whatsapp"></i></div>
              <div className='call-info'>
                <h5>Whatsapp :</h5>
                <h4>7802071030</h4>
              </div>
             </div>
             <div className='call'>
              <div className='call-icon'><i class="fa-solid fa-house"></i></div>
              <div className='call-info'>
                <h5>Location :</h5>
                <h4> krishna park, vatva, ahmedabad.</h4>
              </div>
             </div>
            
            </div>
        </div>
    </div>
  );
}
