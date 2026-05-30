import React, {useEffect, useState} from 'react';
import styles from './Footer.module.scss';

import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';
import FAQ from '../FAQ/FAQ';

const FooterSection = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
            .catch(err => console.error('Ошибка загрузки reason',err));
    }, []);
    return (
        <>
            <section className={styles.testimonials}>
                <div className={styles.topSection}>
                    <h2 className={styles.title}>TESTIMONIALS</h2>
                    <button className={styles.allButton}>
                        <span className={styles.arrowCircle}>↗</span>
                        <span className={styles.buttonText}></span>
                    </button>
                </div>
                <div className={styles.cardsGrid}>
                    {testimonials.map((item) => (
                        <div key={item.id} className={styles.card}>
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDescription}>{item.description}</p>
                            </div>
                            <div className={styles.cardFooter}>
                                <div className={styles.userInfo}>
                                    <img src={item.avatar} alt="" className={styles.avatar}/>
                                    <div>
                                        <p className={styles.userName}>{item.name}</p>
                                        <p className={styles.userRole}>{item.position}</p>
                                    </div>
                                </div>
                                <button className={styles.cardArrow}>↗</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <FAQ/>
            <footer className={styles.footerSection}>
                <div className={styles.ctaBlock}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>READY TO TRANSFORM <br/> YOUR DIGITAL <br/> PRESENCE?</h2>
                        <p className={styles.ctaDescription}>Take the first step towards digital success with NexGen by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business.</p>
                    </div>
                    <button className={styles.ctaButton}>
                        <span className={styles.ctaButtonText}>GET IN TOUCH</span>
                        <span className={styles.ctaArrow}>↗</span>
                    </button>
                </div>
                <div className={styles.sliderWrapper}>
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
                <div className={styles.footerGrid}>
                    <div className={styles.socialCards}>
                        <div className={styles.socialCard}>
                            <div className={styles.socialTop}>
                                <div className={styles.socialIcon}>◎</div>
                                <button className={styles.socialArrow}>↗</button>
                            </div>
                            <div>
                                <h3 className={styles.socialTitle}>INSTAGRAM</h3>
                                <p className={styles.socialDescription}>Share visually appealing snippets of our latest web projects.</p>
                            </div>
                        </div>
                        <div className={styles.socialCard}>
                            <div className={styles.socialTop}>
                                <div className={styles.socialIcon}>𝕏</div>
                                <button className={styles.socialArrow}>↗</button>
                            </div>
                            <div>
                                <h3 className={styles.socialTitle}>TWITTER</h3>
                                <p className={styles.socialDescription}>Tweet about interesting coding challenges you've overcome.</p>
                            </div>
                        </div>
                        <div className={styles.socialCard}>
                            <div className={styles.socialTop}>
                                <div className={styles.socialIcon}>◉</div>
                                <button className={styles.socialArrow}>↗</button>
                            </div>
                            <div>
                                <h3 className={styles.socialTitle}>DRIBBBLE</h3>
                                <p className={styles.socialDescription}>Showcase design elements of our web projects.</p>
                            </div>
                        </div>
                        <div className={styles.socialCard}>
                            <div className={styles.socialTop}>
                                <div className={styles.socialIcon}>Bē</div>
                                <button className={styles.socialArrow}>↗</button>
                            </div>
                            <div>
                                <h3 className={styles.socialTitle}>BEHANCE</h3>
                                <p className={styles.socialDescription}>Create detailed presentations for our projects.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightContent}>
                        <div className={styles.linksGrid}>
                            <div className={styles.linkColumn}>
                                <h4 className={styles.columnTitle}>Home</h4>
                                <a className={styles.footerLink}>Why Us</a>
                                <a className={styles.footerLink}>About Us</a>
                                <a className={styles.footerLink}>Testimonials</a>
                                <a className={styles.footerLink}>FAQ's</a>
                            </div>
                            <div className={styles.linkColumn}>
                                <h4 className={styles.columnTitle}>Services</h4>
                                <a className={styles.footerLink}>Web Development</a>
                                <a className={styles.footerLink}>App Development</a>
                                <a className={styles.footerLink}>Web Design</a>
                                <a className={styles.footerLink}>Digital Marketing</a>
                            </div>
                            <div className={styles.linkColumn}>
                                <h4 className={styles.columnTitle}>Projects</h4>
                                <a className={styles.footerLink}>Klothink</a>
                                <a className={styles.footerLink}>Zenith</a>
                                <a className={styles.footerLink}>Novus</a>
                                <a className={styles.footerLink}>Apex</a>
                            </div>
                            <div className={styles.linkColumn}>
                                <h4 className={styles.columnTitle}>Blogs</h4>
                                <a className={styles.footerLink}>Business</a>
                                <a className={styles.footerLink}>Design
                                    <span className={styles.soonBadge}>Soon</span>
                                </a>
                                <a className={styles.footerLink}>Development
                                    <span className={styles.soonBadge}>Soon</span>
                                </a>
                            </div>
                        </div>
                        <div className={styles.newsletterBlock}>
                            <div>
                                <p className={styles.newsletterLabel}>NEWSLETTER</p>
                                <h3 className={styles.newsletterTitle}>SUBSCRIBE TO OUR NEWSLETTER</h3>
                            </div>
                            <div className={styles.newsletterInputWrapper}>
                                <input type="email" placeholder="Enter your email" className={styles.newsletterInput}/>
                                <button className={styles.newsletterButton}>↗</button>
                            </div>
                        </div>
                        <div className={styles.bottomBar}>
                            <p className={styles.copyright}>© 2024 NextGen. All rights reserved.</p>
                            <div className={styles.bottomLinks}>
                                <a>Terms & Conditions</a>
                                <a>Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
};

export default FooterSection;

