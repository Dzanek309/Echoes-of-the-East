import React from "react";
import styles from "./Popular.module.css";
import PopularCard from "./PopularCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import { Pagination, Navigation } from 'swiper/modules';

import wallPicture from "../assets/great-wall.jpg";
import cityPicture from "../assets/forbidden-city.jpg";
import armyPicture from "../assets/terracotta-army.jpg";

const Popular = () => {
    return (
        <div className={styles.popular}>
            <div className={styles['wrapper-title']}>
                <h1 className={styles['popular-title']}>Popular</h1>
                <h2 className={styles['popular-title-desc']}># See what's on top</h2>
            </div>
            <div className={styles['navigation-buttons']}>
                <div className={`${styles['nav-button']} ${styles['prev-button']}`}>&lt;</div>
                <div className={`${styles['nav-button']} ${styles['next-button']}`}>&gt;</div>
            </div>

            <Swiper
                className={styles.mySwiper}
                slidesPerView={4}
                spaceBetween={300}
                centeredSlides={false}
                loop={true}
                pagination={{ clickable: true }}
                navigation={{
                    nextEl: `.${styles['next-button']}`,
                    prevEl: `.${styles['prev-button']}`,
                }}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    <PopularCard
                        title="The Great Wall of China"
                        location="Beijing"
                        rating="4.8"
                        imgSrc={wallPicture}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularCard
                        title="The Forbidden City"
                        location="Beijing"
                        rating="4.7"
                        imgSrc={cityPicture}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularCard
                        title="Terracotta Army"
                        location="Xi'an, Shaanxi"
                        rating="4.6"
                        imgSrc={armyPicture}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularCard
                        title="Zhangjiajie Forest Park"
                        location="Hunan Province"
                        rating="4.7"
                        imgSrc={wallPicture}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <PopularCard
                    // Yellow Mountains
                        title="Huangshan"
                        location="Anhui Province"
                        rating="4.7"
                        imgSrc={wallPicture}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Popular;
