import React from 'react';
import './ContactSection.css';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { Phone, MessageCircle } from '../ui/Icons';

export const ContactSection = () => {
  return (
    <section id="contact" className="contact-banner-section">
      <div className="container">
        <div className="contact-banner-card">
          <div className="contact-banner-left">
            <SectionBadge text="GET IN TOUCH" />
            <h2 className="contact-banner-heading">Let's Keep Your Space Clean</h2>
            <p className="contact-banner-sub">
              Whether you need a cleaner for your home or a professional cleaning partner for your organisation, we're ready to discuss your requirements.
            </p>

            <div className="contact-direct-details">
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <a href="mailto:info@lichtmarketing.co.uk" className="detail-val">info@lichtmarketing.co.uk</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <a href="tel:+442080000000" className="detail-val">+44 (0) 20 8000 0000</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">WhatsApp:</span>
                <a href="https://wa.me/" className="detail-val">+44 (0) 70 0000 0000</a>
              </div>
              <div className="detail-item">
                <span className="detail-label">Service Areas:</span>
                <span className="detail-val">London, Home Counties & Regional Corporate Portfolios</span>
              </div>
            </div>
          </div>

          <div className="contact-banner-right">
            <div className="contact-actions-box">
              <span className="actions-box-title">Ready to begin?</span>
              <p className="actions-box-desc">Choose how you would like to connect with our operations team:</p>
              <div className="contact-action-buttons">
                <Button href="#quote" variant="primary" iconType="up-right" className="action-btn-w">
                  Get a Free Quote
                </Button>
                <a href="tel:+442080000000" className="btn btn-outline action-btn-w">
                  <Phone size={15} />
                  <span>Call Us Now</span>
                </a>
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="btn btn-outline action-btn-w">
                  <MessageCircle size={15} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
