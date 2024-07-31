
import './readmore.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Readmore() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='abm-main'>
      <div className='rd-header'>
      <div className='brand-title2' data-aos="zoom-in-right"><h4><span>R</span>uchi yadav</h4> </div>
     {/* toggle start here */}
    
  {/* <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-bars"></i></button>

<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 id="offcanvasRightLabel"></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  
        <a href='#ab-more' className='rd-headtag1'>About Me</a>
        <a href='#edu' className='rd-headtag1'>Education</a>
        <a href='#pnd' className='rd-headtag2'>Personal Detail</a>
     
  </div>
</div> */}
{/* toggle end here */}
      <div className='rd-headtag'>
        <a href='#ab-more' className='rd-headtag1'>About Me</a>
        <a href='#edu' className='rd-headtag1'>Education</a>
        <a href='#pnd' className='rd-headtag2'>Personal Detail</a>
      </div>
      </div>
      <div className='about-more' id='ab-more'>
        <div className='abpng'><img src='/image/dotdesing1.png'></img></div>
        <div className='abpng2'><img src='/image/dotdesing1.png'></img></div>
        <div className='abm-paragraph'>
          <div className='abm-tag1'>About <span>Me</span></div>
          <p  data-aos="zoom-in">As a passionate and dedicated frontend developer, I am excited to bring my skills and creativity to the ever-evolving world of web development. With a strong foundation in HTML, CSS, Bootstrap, and JavaScript, My journey into the world of frontend development began during my college years, where I discovered the thrill of transforming design concepts into interactive, responsive websites.</p>
          <p  data-aos="zoom-in">Throughout my learning journey, I have worked on a variety of projects that have honed my abilities in both technical and creative aspects of web development. I have experience with modern frameworks and libraries such as React, which have enabled me to build dynamic and engaging user experiences. My portfolio showcases a range of projects.</p>
                </div>
        <div className='education-data' id='edu'>
        <div className='abm-tag1'>Education</div>
          <div className='education-main'>
          <div className='educ1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className='educ-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <div className='educ-data'>
              <div className='edu-year'>2024</div>
              <div className='edu-name'>Frontend</div>
              <div className='institute'>SKYTECH-IT Treining Center</div>
            </div>
          </div>
          <div className='educ1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" >
            <div className='educ-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <div className='educ-data'>
              <div className='edu-year'>2022</div>
              <div className='edu-name'>Bachelor of Computer Application</div>
              <div className='institute'>Lokmanya college</div>
            </div>
          </div>
          </div>
          <div className='education-main'>
          <div className='educ1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className='educ-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <div className='educ-data'>
              <div className='edu-year'>2019</div>
              <div className='edu-name'>Higher Secondary Certificat</div>
              <div className='institute'>Rajaram School</div>
            </div>
          </div>
          <div className='educ1' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div className='educ-icon'><i class="fa-solid fa-graduation-cap"></i></div>
            <div className='educ-data'>
              <div className='edu-year'>2017</div>
              <div className='edu-name'>Secondary School Certificat</div>
              <div className='institute'>Rajaram School</div>
            </div>
          </div>
          </div>
        </div>
        <div className='pn-data' id='pnd'>
        <div className='abm-tag1'>Personal Detail</div>
        <div className='pnmain-data'>
        <div className='more-pndata'>
        <div className='pn-datamain' data-aos="fade-up"data-aos-duration="3000">
        <div className='pn1-data'>Name: </div>
        <div className='pn2-data'>Ruchi Yadav</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>DOB: </div>
        <div className='pn2-data'>8 April 2001</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Phone: </div>
        <div className='pn2-data'>+91 7802071030</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Experience: </div>
        <div className='pn2-data'>Fresher</div>
        </div> 
        </div>
        
        <div className='more-pndata'>
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Email: </div>
        <div className='pn2-data'>ryb782080@gmail.com</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Languages: </div>
        <div className='pn2-data'>Hindi,English,Gujrati</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Address: </div>
        <div className='pn2-data'>Vatva,Ahmedabad,382440</div>
        </div> 
        <div className='pn-datamain' data-aos="fade-up" data-aos-duration="3000">
        <div className='pn1-data'>Nationality </div>
        <div className='pn2-data'>Indian</div>
        </div> 
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}
function toggleNavbar() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('active');
}