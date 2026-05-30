import React, { useEffect, useState } from 'react';
import styles from './FAQ.module.scss';

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
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
  );
};

export default FAQ;