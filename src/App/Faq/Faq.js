import React, { useState } from 'react';
import './Faq.css';

const faqs = [
  {
    question: "How do you purchase plants?",
    answer: "You can purchase plants through our website or by visiting our physical store. We offer a wide variety of plants that you can browse and select from. Once you've made your selection, you can proceed to checkout and choose your preferred delivery method or pick-up option."
  },
  {
    question: "From where are the plants imported?",
    answer: "Our plants are sourced from various locations, including local nurseries and international suppliers. We carefully select our suppliers to ensure the highest quality and healthiest plants. Each plant's origin is typically listed in its product description on our website."
  },
  {
    question: "Are the fertilizers natural?",
    answer: "Yes, we prioritize the use of natural fertilizers. Our range includes organic compost, worm castings, and other eco-friendly options. These natural fertilizers provide essential nutrients to plants without the use of synthetic chemicals, promoting healthier growth and being better for the environment."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="faq-container">
        <div className="faq-title">
          <h2>
            Frequently Asked <span className="question-span">Questions</span>
          </h2>
        </div>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <div className="faq-icon"></div>
            </button>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}