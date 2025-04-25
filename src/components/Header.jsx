import React from "react";
import styles from "./Header.module.css";
import { A11y , Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../assets/slides/slide1.jpg";
import slide2 from "../assets/slides/slide2.jpg";
import slide3 from "../assets/slides/slide3.jpg";
import slide4 from "../assets/slides/slide4.jpg";
import slide5 from "../assets/slides/slide5.jpg";

const Header = () => {
    return (
    <div className={styles['header']}>
        <h1 className={styles['title']}>Let's visit<br />the world of wonders</h1>
        <Swiper 
        modules={[A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
                delay: 1500,
                disableOnInteraction: false
        }}
        speed={1500}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide><img src={slide1} alt="" className={styles['slide']}/></SwiperSlide>
            <SwiperSlide><img src={slide2} alt="" className={styles['slide']}/></SwiperSlide>
            <SwiperSlide><img src={slide3} alt="" className={styles['slide']}/></SwiperSlide>
            <SwiperSlide><img src={slide4} alt="" className={styles['slide']}/></SwiperSlide>
            <SwiperSlide><img src={slide5} alt="" className={styles['slide']}/></SwiperSlide>
        </Swiper>
    </div>
  );
};

export default Header;
