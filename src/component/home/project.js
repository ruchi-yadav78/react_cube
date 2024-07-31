// // import React from 'react';
// import './project.css';
// import React, { Component } from "react";
// import Slider from "react-slick";



// export default function Project1() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     autoplay: true,
//     speed: 2000,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div>
//         <div className='main-project' id='project'>
//           <div className='proj-tag'>Projects <span>Section</span></div>
//         <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <div className='boxs1' data-aos="zoom-in-down">
//           <div className='project-one'><img src='./image/proje1.png'></img></div>
//           <h1>OVATION</h1>
//           <p>Ovation -is a flexible and amazing HTML template for wedding planners, wedding photographers, personal photographers as well as all types of wedding HTML-related websites</p>
//           <p>The template is built with 5 complete homepages. It is a fully responsive layout that appears on any type of device, and your website works among all modern web browsers.</p>
//           </div>
//         </div>
//         <div>
//         <div className='boxs1' data-aos="zoom-in-down">
//         <div className='project-one'><img src='./image/project2.png'></img></div>
//           <h1>FASHION SHIVALIK</h1>
//           <p>This theme, created in Indian colors, is designed to sell all cultural clothing in the world, and you can sell all modern style clothing and accessories.</p>
//           <p>Fashion Shivalik is built with most powerful frameworks , Bootstarp5 , HTML5 , CSS3 , CSS and all technology. In website we have created Ten product pages</p>
//         </div>
//         </div>
//         <div>
//         <div className='boxs1' data-aos="zoom-in-down">
//         <div className='project-one'><img src='./image/proje4.png'></img></div>
//           <h1>FLIPKART</h1>
//           <p>This theme, created in Indian colors, is designed to sell all cultural clothing in the world, and you can sell all modern style clothing and accessories.</p>
//           <p>Fashion Shivalik is built with most powerful frameworks , Bootstarp5 , HTML5 , CSS3 , CSS and all technology. In website we have created Ten product pages</p>
//         </div>
//         </div>
//         <div>
//         <div className='boxs1' data-aos="zoom-in-down">
//         <div className='project-one'><img src='./image/proj5.png'></img></div>
//           <h1>AGRUCO</h1>
//           <p>This theme, created in Indian colors, is designed to sell all cultural clothing in the world, and you can sell all modern style clothing and accessories.</p>
//           <p>Fashion Shivalik is built with most powerful frameworks , Bootstarp5 , HTML5 , CSS3 , CSS and all technology. In website we have created Ten product pages</p>
  
//         </div>
//         </div>
//         <div>
//         <div className='boxs1' data-aos="zoom-in-down"></div>
//         </div>
//         <div>
//         <div className='boxs1' data-aos="zoom-in-down"></div>
//         </div>
//       </Slider>
//     </div>
//         </div>
//     </div>
//   );
// }

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './project.css'

const Projects = () => {
    return (
     <div className='portfolio' id='project'>
        <h1>Portfolio</h1>
         <div className="container swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="swiper-slide"><img src='./image/web1.png'></img>
                <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>OVATION</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"><img src='./image/web2.png'></img>
              <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>SHIVALIK FASHION</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"><img src='./image/web3.png'></img>
               <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>FLIPKART</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="swiper-slide"><img src='./image/web5.png'></img>
              <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>WEATHER</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"><img src='./image/web7.png'></img>
               <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>CALCULATER</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide"><img src='./image/p6.png'></img>
               <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>FOrm VALIDATION</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="swiper-slide"><img src='./image/proj5.png'></img>
               <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>AGRUCO</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
     </div>
    );
  };
  
  export default Projects;
