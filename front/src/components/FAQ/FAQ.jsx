import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: ''
  });

  useEffect(() => {
    fetch('http://localhost:3000/api/faq')
      .then((res) => res.json())
      .then((data) => setFaqData(data));
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Message Sent!');
  };

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
        <Link className={styles.allButton} to="/Home"><div><img src={HomeImage.LearnMore} alt="" /></div>ALL Works</Link>
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
    <section className={styles.faqSection}>
      {/* HEADER */}
      <div className={styles.topHeader}>
        <h2 className={styles.title}>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <button className={styles.viewAllButton}>
          <span className={styles.arrowCircle}>↗</span>
          <span className={styles.viewText}>VIEW ALL</span>
        </button>
      </div>

      {/* CONTENT */}
      <div className={styles.contentWrapper}>
        {/* FAQ LIST */}
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.faqItem} ${activeIndex === index ? styles.activeFaq : ''}`}
            >
              <button
                className={styles.questionButton}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.plusIcon}>
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              <div
                className={`${styles.answerWrapper} ${activeIndex === index ? styles.openAnswer : ''}`}
              >
                <p className={styles.answerText}>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className={styles.formCard}>
          <h3 className={styles.formTitle}>ASK YOUR QUESTION</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>NAME</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>EMAIL</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>YOUR QUESTION</label>
              <textarea
                name="question"
                placeholder="Enter Your Question Here ....."
                value={formData.question}
                onChange={handleChange}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              SEND YOUR MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;