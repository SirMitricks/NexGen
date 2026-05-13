import React from 'react';
import { useState } from 'react'
import styles from './Home.module.scss'
import { Photo } from '../../Photo';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export default function Home() {


  return (
    <>
      <main>
        <section className={styles.heroSection}>
            <div>
                <div className={styles.container}>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        loop={true}
                        speed={3800}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            reverseDirection: true,
                        }}
                        allowTouchMove={false}
                        className={styles.swiper}
                        wrapperClass={styles.swiperWrapper}
                        style={{ direction: 'rtl' }}
                    >
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>MARKETING</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>WEBSITE DESIGN</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>BRANDING</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>WEBSITE DEVELOPMENT</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>MOBILE APP DEVELOPMENT</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>DIGITAL</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>MARKETING</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>WEBSITE DESIGN</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>BRANDING</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>WEBSITE DEVELOPMENT</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>MOBILE APP DEVELOPMENT</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                        <SwiperSlide className={styles.slide}>
                            <span className={styles.text}>DIGITAL</span>
                            <span className={styles.dot}>•</span>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
        </section>
      </main>
    </>
  )
}

