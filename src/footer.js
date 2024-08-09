import React from 'react'
 import './footer.css';
export default function Footer() {
  return (
    // <div className='footer'>
    //     <div className='footer-icon'>
    //         <a href='https://api.whatsapp.com/qr/LMM5S67YT37GJ1?autoload=1&app_absent=0' target='_black' className='f-icon1'><i class="fa-brands fa-whatsapp"></i></a>
    //         <a href='' className='f-icon1'><i class="fa-brands fa-linkedin-in"></i></a>
    //         <a href='https://www.instagram.com/yadav_ruchi0804/?utm_source=qr&igsh=MXZ4cnAwbng2dnZuaw%3D%3D' target='_black' className='f-icon1'><i class="fa-brands fa-instagram"></i></a>
    //         <a href='' className='f-icon1'><i class="fa-brands fa-github"></i></a>
    //     </div>
    //      <div className="footer-link">
    //             <a href="#hero-main">Home</a>
    //             <a href="#abcont">About</a>
    //             <a href="#skills">Skills</a>
    //             <a href="#project">Project</a>
    //             <a href="#contact">Contact</a>
    //     </div>
    //     <button className='f-btn'>Resume</button>
    // </div>
    <footer id="picassoFooter">
    <div class="footer-content">
        <div class="footer-section footer-logo">
            {/* <h3>About Us</h3> */}
            <div className='brand-title2' data-aos="zoom-in-right"><h4><span>R</span>uchi yadav</h4>
    </div>
            <p> I'm Ruchi, a passionate front-end developer with a knack for creating elegant and responsive web designs.</p>
        </div>
        <div class="footer-section footer-navigation">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="#hero-main"class="hover-effect">Home</a></li>
                <li><a href="#abcont" class="hover-effect">About</a></li>
                <li><a href="#skills" class="hover-effect">Skills</a></li>
                <li><a href="#project" class="hover-effect">Portfolio</a></li>
                <li><a href="#contact" class="hover-effect">Contact</a></li>
            </ul>
        </div> 
        <div class="footer-section footer-contact">
            <h3>Contact Us</h3>
            <p><i class="fas fa-envelope"></i> ryb782080@gmail.com</p>
            <p><i class="fas fa-phone"></i> +91 7802071030</p>
            <p><i class="fas fa-map-marker-alt"></i>Krishna Park, vatva, Ahmedabad</p>
        </div>
        <div class="footer-section footer-cta">
            <h3>Stay Connected</h3>
            <div class="social-icons">
                <a href='https://api.whatsapp.com/qr/LMM5S67YT37GJ1?autoload=1&app_absent=0' target="_blank" class="social-icon" aria-label="Facebook"><i class="fa-brands fa-whatsapp"></i></a>
                <a href="https://www.linkedin.com/in/ruchi-yadav-14a46131b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="social-icon" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href='https://www.instagram.com/yadav_ruchi0804/?utm_source=qr&igsh=MXZ4cnAwbng2dnZuaw%3D%3D' target="_blank" class="social-icon" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://ruchi-yadav78.github.io/react_cube/" target="_blank" class="social-icon" aria-label="LinkedIn"><i class="fa-brands fa-github"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-art">
        <canvas id="picassoCanvas"></canvas>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 PicassoTech. All rights reserved.</p>
        {/* <nav class="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
        </nav> */}
    </div>
</footer>
  )
}
