import React from 'react'
import './skills.css';

export default function Skills() {
    return (
        <div className='skills-main' id='skills'>
            <div className='skills-sec'>
                <h1>My <span>Skills</span></h1>
                <div className='skills-cont'>
                    <div className='skills1'  data-aos="zoom-in-right">
                        <img src='./image/htmllogo.jpg'></img>
                        <h3>HTML 5</h3>
                        <p>Solid foundation in HTML enabling me to create clean, efficient, and visually appealing web pages</p>
                    </div>
                    <div className='skills1' data-aos="fade-up">
                        <img src='./image/csslogo.jpg'></img>
                        <h3>CSS 3</h3>
                        <p>Focus on writing modular CSS to ensure the maintainbility and scalability of my projects</p>
                    </div>
                    <div className='skills1' data-aos="zoom-in-left">
                    <img src='./image/jslogo.jpg'></img>
                    <h3>JAVASCRIPT</h3>
                    <p>As a front-end developer, I am proficient in JavaScript, which allows me to create engaging and responsive webpages.</p>
                    </div>
                    <div className='skills1' data-aos="zoom-in-right">
                    <img src='./image/boots.jpg'></img>
                    <h3>BOOTSTRAP</h3>
                    <p> Bootstrap allows me to quickly design and customize websites with ease, ensuring a seamless user experience across different devices.</p>
                    </div>
                    <div className='skills1'  data-aos="fade-up">
                    <img src='./image/reaclogo.jpg'></img>
                    <h3>REACT</h3>
                    <p>React is my go-to library for building dynamic and interactive user interfaces</p>
                    </div>
                    <div className='skills1'data-aos="zoom-in-left">
                    <img src='./image/vitejs.jfif'></img>
                    <h3>VITE.JS</h3>
                    <p>Vite.js is a modern frontend build tool that significantly improves the development experience for web projects.</p>
                    </div>
                    <div className='skills1' data-aos="zoom-in-right">
                    <img src='./image/github2.jpg'></img>
                    <h3>GITHUB</h3>
                    <p> Developed and maintained the code for my personal portfolio website on GitHub, demonstrating my skills and projects.</p>
                    </div>
                    <div className='skills1' data-aos="zoom-in-left">
                    <img src='./image/respos.jpg'></img>
                    <h3>RESPONSIVE</h3>
                    <p>Proficient in using CSS media queries and responsive design techniques to create flexible and adaptive layouts.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
