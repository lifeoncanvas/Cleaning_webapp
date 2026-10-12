import React, { useState } from 'react';
import './FAQ.css';
import { SectionBadge } from '../ui/SectionBadge';
import { faqBriefData } from '../../data/briefData';
import { Plus, Minus } from '../ui/Icons';

export const FAQ = () => {
  // First item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-grid">
          {/* Left Column: Heading and note */}
          <div className="faq-left-col">
            <SectionBadge text="FREQUENTLY ASKED QUESTIONS" />
            <h2 className="faq-heading">Frequently Asked Questions</h2>
            <p className="faq-note">
              Have a specific question about your property or compliance requirements? Complete our quote form or contact our team directly.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="faq-right-col">
            <div className="faq-accordion-list">
              {faqBriefData.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className={`faq-accordion-item ${isOpen ? 'faq-item-open' : ''}`}>
                    <button 
                      className="faq-question-btn" 
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-question-text">{item.q}</span>
                      <span className="faq-toggle-icon">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-answer-wrap">
                        <p className="faq-answer-text">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
