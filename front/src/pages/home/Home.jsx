import React, { useState, useEffect } from 'react';

import styles from './Home.module.scss'
import { Photo } from '../../Photo';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export default function Home() {
    const [reasons, setReasons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/reasons')
            .then(res => res.json())
            .then(data => setReasons(data))
            .catch(err => console.error('Ошибка загрузки reasons:', err));
    }, []);
  return (
    <>
      <main>
        <section className={styles.heroSection}>
            <div className={styles.divHeroSection}>
                <div className={styles.firsteHeroSection}>
                    <h1><span className={styles.spanH1_1firsteHeroSection}>DIGITAL SOLUTIONS<img src={Photo.Start} alt=""/></span><span className={styles.spanH1_2firsteHeroSection}>THAT DRIVE SUCCESS</span></h1>
                </div>
                <div className={styles.secondHeroSection}>
                    <p>At NexGen, we believe in the transformative power of digital solutions. Our team of experts is dedicated to helping <br/> businesses like yours thrive in the fast-paced digital landscape.</p>
                </div>
                <div className={styles.container}>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView="auto"
                        spaceBetween={0}
                        loop={true}
                        speed={3000}
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
            <div className={styles.divHeroSection}>
                <img src={Photo.ContainerHS} alt=""/>
            </div>
            <div className={styles.divHeroSection}>
                <div>
                    <p>CLIENTS</p>
                    <h1>200+</h1>
                </div>
                <div>
                    <p>PROJECTS</p>
                    <h1>280+</h1>
                </div>
                <div>
                    <p>HAPPY CLIENTS</p>
                    <h1>100%</h1>
                </div>
                <div>
                    <p>FOLLOWER</p>
                    <h1>430K</h1>
                </div>
                <div>
                    <p>Years Of Experience</p>
                    <h1>10+</h1>
                </div>
                <Link to="/Home">
                    <div>
                        <img src={Photo.KnowMore} alt=""/>
                        <p>KNOW MORE</p>
                    </div>
                </Link>

            </div>
        </section>
        <section className={styles.reasonsSection}>
                    <h2 className={styles.reasonsTitle}>
                        REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
                    </h2>

                    <div className={styles.reasonsGrid}>
                        {reasons.map(item => (
                            <div key={item.id} className={styles.reasonCard}>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <a href="#" className={styles.learnMore}>
                                    Learn More ↗
                                </a>
                            </div>
                        ))}
                    </div>
                </section>
      </main>
    </>
  )
}

