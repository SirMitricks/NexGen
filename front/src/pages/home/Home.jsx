import React, { useState, useEffect } from 'react';

import styles from './homeAssets/Home.module.scss'
import { Photo } from '../../Photo';
import { HomeImage } from './homeAssets/HomeImage';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
export default function Home() {
    const [reasons, setReasons] = useState([]);
    const [ourServices, setOurServices] = useState([]);
    const [ourWorks, setOurWorks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/reasons')
            .then(res => res.json())
            .then(data => setReasons(data))
            .catch(err => console.error('Ошибка загрузки reasons:', err));
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/api/ourServices')
            .then(res => res.json())
            .then(data => setOurServices(data))
            .catch(err => console.error('Ошибка загрузки ourServices:', err))
    }, []);
    useEffect(() => {
        fetch('http://localhost:3000/api/ourWorks')
            .then(res => res.json())
            .then(data => setOurWorks(data))
            .catch(err => console.error('Ошибка загрузки ourWorks:', err))
    },[]);
    const renderTechnologies = (technologiesString) => {
        if (!technologiesString) return null;
        const techArray = technologiesString.split(';').map(tech => tech.trim()).filter(tech => tech);
        return (
            <div className={styles.technologiesContainer}>
                {techArray.map((tech, index) => (
                    <span key={index} className={styles.technologyTag}>
                        {tech}
                    </span>
                ))}
            </div>
        );
    };
    
  return (
    <>
      <main>
        <section className={styles.heroSection}>
            <div className={styles.divHeroSection}>
                <div className={styles.firsteHeroSection}>
                    <h1><span className={styles.spanH1_1firsteHeroSection}>DIGITAL SOLUTIONS<img src={HomeImage.Start} alt=""/></span><span className={styles.spanH1_2firsteHeroSection}>THAT DRIVE SUCCESS</span></h1>
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
                <img src={HomeImage.ContainerHS} alt=""/>
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
                        <img src={HomeImage.KnowMore} alt=""/>
                        <p>KNOW MORE</p>
                    </div>
                </Link>

            </div>
        </section>
        <section className={styles.reasonsSection}>
            <h2 className={styles.reasonsTitle}>
                <span>---</span>REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
            </h2>
            <div className={styles.reasonsGrid}>
                {reasons.map(reasons => (
                    <div key={reasons.id} className={styles.reasonCard}>
                        <div className={styles.containerReason}>
                            <h3>{reasons.title}</h3>
                            <p>{reasons.description}</p>
                        </div>
                        <Link to={reasons.learn_more_url}  className={styles.learnMore}>
                           <div><img src={HomeImage.LearnMore} alt="" /></div> Learn More 
                        </Link>
                     </div>
                ))}
            </div>
        </section>
        <section className={styles.ourServicesSection}>
            <h2>
                <span>---</span>Our Services
            </h2>
            <div className={styles.ourServicesGrid}>
                {ourServices.map(ourServices => (
                    <div key={ourServices.id} className={styles.ourServicesIndent}>
                        <div className={styles.ourServicesCard}>
                            <div className={styles.ourServicesTitle}>
                                <p><img src={HomeImage[ourServices.img_url]} alt="" />{ourServices.title}</p>
                                <Link to={`${ourServices.book_a_call}`}> <div><img src={HomeImage.LearnMore} alt="" /></div> BOOK A CALL</Link>
                            </div>
                            <div className={styles.ourServicesDescription}>
                                <p className={styles.descriptionOurServicesDescription}>{ourServices.description}</p>
                                <p className={styles.priceOurServicesDescription}>STARTS FROM {ourServices.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>   
        <section className={styles.ourWorks}>
            <div className={styles.ourWorksTitle}>
                <h2>
                    Our Works 
                </h2>
                <Link to="/Home"><div><img src={HomeImage.LearnMore} alt="" /></div>ALL Works</Link>
            </div>
            <div className={styles.ourWorksContainerGrid}>
                {ourWorks.map(ourWorks => (
                    <div key={ourWorks.id} className={styles.ourWorksPositionContainer}>
                        <div className={styles.ourWorksGrid} >
                            <div className={styles.ourWorksDescription}>
                                <div className={styles.ourWorksDescription_title}>
                                    <img src={HomeImage[ourWorks.img_title]} alt=""/>
                                    <p>{ourWorks.title}</p>
                                    <Link to={`${ourWorks.details}`}><img src={HomeImage.KnowMore} alt="" /> Datails</Link>
                                </div>
                                <div className={styles.ourWorksDescription_category}>
                                    <p>Category <span className={styles.dot}>•</span> <span>{ourWorks.category}</span></p>
                                    <p>Time Taken <span className={styles.dot}>•</span> <span>{ourWorks.time_taken}</span></p>
                                </div>
                                <div className={styles.ourWorksDescription_description}>
                                    <p>{ourWorks.description}</p>
                                </div>
                            </div>
                            <img className={styles.ourWorksImg} src={HomeImage[ourWorks.img_url]} alt="" />
                            <div className={styles.ourWorksTechnologiesUsed}>
                                <p>Technologies Used</p>
                                {renderTechnologies(ourWorks.technologies)}
                            </div>
                            <div className={styles.ourWorksTeamMembers}>
                                <p>Team Members</p>
                                <img src={HomeImage.ImagesContainer} alt=""/>
                            </div>
                            <Link to={`${ourWorks.book_a_call}`} className={styles.ourWorksBookACall}>
                                book a call
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>    
      </main>
    </>
  )
}

