import React, { useState, useEffect, useRef } from 'react';
import WAVES from 'vanta/dist/vanta.waves.min';
import './porthweb.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

import { TypeAnimation } from 'react-type-animation';

const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!window.THREE) {
      // Ensure THREE is available on the window object
      console.error('THREE is not defined on the window object. Make sure three.min.js is included.');
      return;
    }

    if (!vantaEffect && myRef.current) {
      setVantaEffect(WAVES({
        el: myRef.current,
        color: 0x90c0f,
        shininess: 50,
        waveHeight: 20,
        waveSpeed: 1.0,
        zoom: 1.0
        // Add any additional Vanta.js options here
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  

  // aos animation usestate start here
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
       <nav className="navbar">
       <div className='brand-title2' data-aos="zoom-in-right"><h4><span>R</span>uchi yadav</h4>
    </div>
        {/* <div className="brand-title2" data-aos="zoom-in-right"></div> */}
        
  
        <a href="javascript:void(0);" class="toggle-button" onClick={toggleNavbar}>
            ☰
        </a>
        <div className="navbar-links" data-aos="fade-left">
            <ul>
                <li><a href="#hero-main">Home</a></li>
                <li><a href="#abcont">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Project</a></li>
                <li><a href="#contact" className='contact-nav'>Contact</a></li>
                
            </ul>
        </div>
    </nav>
    <div ref={myRef} id='hero-main' style={{ width: '100%', height: '665px', color:'white'}}>
    <div className='hero-cont'>
        <div className='hero-sec1' data-aos="flip-up">
          <div className='hero-tag1'>Hello, I'm</div>
          <div className='hero-tag2'>Ruchi Yadav</div>
          <div className='hero-tag3'>

          <TypeAnimation
        sequence={[
          `I am Frontend Developer.`,
          1000,
          "",
        ]}
        speed={50}
        style={{ whiteSpace: 'pre-line', fontSize: '2em' }}
        repeat={Infinity}
        />
          </div>
          <button className='hero-btn'>Download cv</button>

        </div>
        <div className='hero-sec2' data-aos="zoom-in-up">
        <img src='./image/ruchi4.png'></img>
        </div>
      </div>
    </div>
    
    <div className='about-content' id='abcont'>
      <h1>About <span>Me</span></h1>
      <div className='about-main'>
        <div className='about1-main'>
       <div className='about1'  data-aos="flip-left"><img src='./image/ruchi.png'></img></div>
     
       </div>
       <div className='about2'>
        <div className='ab-tag1' data-aos="zoom-in-down">Hello! I'm a developer</div>
        <div className='ab-tag2' data-aos="zoom-in">As a passionate and dedicated frontend developer, I am excited to bring my creativity and technical skills of web development. I am graduated with a degree Bachelor of Computer Applications, I have honed my abilities in HTML, CSS, JavaScript, and modern frameworks such as React. I am looking forward to starting my professional journey and making a positive impact in a dynamic team. </div>
        <div className='ab-btn' data-aos="fade-up"  data-aos-anchor-placement="bottom-bottom">
        <Link to="/component/home/aboutpages"><button class="btn1"><span>Read more</span></button></Link>
        </div>
       </div>
       </div> 
    </div>
   
    </div>
  );
}

export default MyComponent;
function toggleNavbar() {
  const navbarLinks = document.querySelector('.navbar-links');
  navbarLinks.classList.toggle('active');
}
  
