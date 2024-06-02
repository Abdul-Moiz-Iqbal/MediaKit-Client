import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

//resources
import img from '../../resources/imgs/slider.png' 

export default function App() {
  return (
    <>
      <Swiper pagination={{
        clickable:true,
      }} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img}/>
        </SwiperSlide>
       
        
      </Swiper>
    </>
  );
}