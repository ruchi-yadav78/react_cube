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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/web1.png'></img>
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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/web2.png'></img>
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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/web3.png'></img>
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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/web5.png'></img>
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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/web7.png'></img>
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
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/craftycode.png'></img>
               <div className='project-detail'>
                <div className='hover-cont'>
                <div className='hover-tag'>Craftycode</div>
                <span>View Website</span>
                </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
          <div
              className="swiper-slide" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000"><img src='./image/agruco2.png'></img>
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
