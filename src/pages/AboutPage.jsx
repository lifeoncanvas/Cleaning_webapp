import React, { useEffect } from 'react';
import './AboutPage.css';
import { SectionBadge } from '../components/ui/SectionBadge';
import { Button } from '../components/ui/Button';
import { Check } from '../components/ui/Icons';
import { valuesData, complianceBriefList, testimonialsData } from '../data/briefData';
import { ContactSection } from '../components/sections/ContactSection';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      {/* About Hero Header */}
      <section className="about-hero-header">
        <div className="container">
          <SectionBadge text="ABOUT OUR COMPANY" />
          <h1 className="about-page-title">Professional Cleaning. Exceptional Standards.</h1>
          <p className="about-page-subtitle">
            LICHT MARKETING is a professional cleaning company providing premium residential, commercial and corporate cleaning solutions across private homes, business premises and regulated care environments.
          </p>
        </div>
      </section>

      {/* Section 1: Asymmetric Story with Uniformed Team Photography */}
      <section className="about-story-section">
        <div className="container about-story-grid">
          <div className="about-story-text">
            <span className="story-eyebrow">OUR STORY & PHILOSOPHY</span>
            <h2 className="story-heading">Cleanliness is more than appearance. It is about confidence.</h2>
            <p className="story-p">
              A clean space changes how it feels to be there. Our approach puts the character of your property and the safety and well-being of its people at the absolute centre of the conversation.
            </p>
            <p className="story-p">
              For homeowners, that means defining what matters in your everyday routine and giving your home the care it deserves. For organisations and care environments, it means building a rigorous specification around the way your site operates, with zero disruption to your daily schedule.
            </p>
            <div className="story-check-pills">
              <span className="story-pill"><Check size={14} className="gold-check" /> Fully Vetted Teams</span>
              <span className="story-pill"><Check size={14} className="gold-check" /> Strict COSHH & H&S</span>
              <span className="story-pill"><Check size={14} className="gold-check" /> Tailored Specifications</span>
            </div>
          </div>

          <div className="about-story-visual">
            <div className="story-visual-frame">
              <img 
                src="/images/team-uniform.jpg" 
                alt="Professional uniformed cleaning team" 
                className="story-team-img" 
              />
              <div className="story-floating-stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality & Audit Inspected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Bento Grid — Mission & 5 Core Values */}
      <section className="about-mission-section">
        <div className="container">
          <div className="mission-intro-header">
            <SectionBadge text="FOUNDATION & GUIDING PRINCIPLES" />
            <h2 className="mission-main-title">Our Mission & Core Values</h2>
            <p className="mission-intro-desc">
              Every clean we undertake is grounded in our five core values, ensuring consistent reliability from first contact to final inspection.
            </p>
          </div>

          <div className="mission-bento-grid">
            {/* Large Mission Card */}
            <div className="bento-card bento-card-mission">
              <span className="bento-tag">OUR MISSION</span>
              <h3 className="bento-mission-quote">
                "To provide dependable, professional and high-quality cleaning services that help our clients maintain clean, safe and welcoming environments."
              </h3>
              <p className="bento-mission-desc">
                We combine industry-standard practices, rigorous staff training and proactive communication to deliver cleaning solutions that businesses and homeowners can truly rely on.
              </p>
            </div>

            {/* 5 Value Cards */}
            {valuesData.map((val, idx) => (
              <div key={idx} className="bento-card bento-card-val">
                <div className="bento-val-top">
                  <span className="bento-val-num">0{idx + 1}</span>
                  <Check size={16} className="bento-val-icon" />
                </div>
                <h4 className="bento-val-title">{val.title}</h4>
                <p className="bento-val-desc">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Mosaic Showcase of Environments We Transform */}
      <section className="about-mosaic-section">
        <div className="container">
          <div className="mosaic-header">
            <SectionBadge text="ENVIRONMENTS WORTH LOOKING AFTER" />
            <h2 className="mosaic-heading">Spaces We Transform Every Day</h2>
          </div>

          <div className="mosaic-grid">
            <div className="mosaic-item mosaic-item-lg">
              <img src="/images/hero.jpg" alt="Corporate lobby atrium" className="mosaic-img" />
              <div className="mosaic-overlay">
                <span className="mosaic-label">Corporate Atriums & Headquarters</span>
              </div>
            </div>
            <div className="mosaic-item">
              <img src="/images/commercial.jpg" alt="Executive boardroom" className="mosaic-img" />
              <div className="mosaic-overlay">
                <span className="mosaic-label">Executive Boardrooms & Suites</span>
              </div>
            </div>
            <div className="mosaic-item">
              <img src="/images/about-living.jpg" alt="Luxury residential space" className="mosaic-img" />
              <div className="mosaic-overlay">
                <span className="mosaic-label">Luxury Private Residences</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Compliance & Operational Standards */}
      <section className="about-compliance-section">
        <div className="container about-compliance-grid">
          <div className="about-compliance-visual">
            <div className="compliance-photo-frame">
              <img 
                src="/images/compliance-check.jpg" 
                alt="Compliance inspection and audit" 
                className="compliance-photo" 
              />
              <div className="compliance-shield-badge">
                <span>🛡️ Full RAMS & Insurance Coverage</span>
              </div>
            </div>
          </div>

          <div className="about-compliance-content">
            <SectionBadge text="RIGOROUS COMPLIANCE" />
            <h2 className="about-compliance-title">Professional Standards. Responsible Cleaning.</h2>
            <p className="about-compliance-p">
              For corporate facilities managers and care home operators, compliance is critical. LICHT MARKETING maintains comprehensive documentation and procedures to ensure total adherence to health and safety standards.
            </p>

            <div className="compliance-badges-wrap">
              {complianceBriefList.map((doc, idx) => (
                <div key={idx} className="doc-pill">
                  <Check size={13} className="doc-check" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>

            <Button href="#quote" variant="primary" iconType="up-right" className="compliance-request-btn">
              Request Our Company Compliance Information
            </Button>
          </div>
        </div>
      </section>

      {/* Section 5: Client Reviews */}
      <section className="about-reviews-section">
        <div className="container">
          <div className="reviews-header">
            <SectionBadge text="VERIFIED CLIENT FEEDBACK" />
            <h2 className="reviews-title">What Our Clients Say</h2>
          </div>

          <div className="reviews-grid">
            {testimonialsData.map((item, idx) => (
              <div key={idx} className="review-item-card">
                <div className="review-stars">{'★'.repeat(item.stars)}</div>
                <p className="review-quote">"{item.quote}"</p>
                <div className="review-author">— {item.client}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <ContactSection />
    </div>
  );
};
