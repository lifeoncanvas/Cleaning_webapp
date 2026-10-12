import React from 'react';
import './Hero.css';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { ClipboardIcon, CalendarIcon, HomeIcon, ArrowDown, ArrowRight } from '../ui/Icons';

export const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Hero Top Content Grid */}
        <div className="hero-top-grid">
          <div className="hero-title-area">
            <SectionBadge text="PROFESSIONAL CLEANING. EXCEPTIONAL STANDARDS." />
            <h1 className="hero-main-heading">
              PROFESSIONAL CLEANING<br />
              FOR HOMES & BUSINESSES
            </h1>
          </div>

          <div className="hero-description-area">
            <p className="hero-lead-text">
              From homes and offices to commercial properties and care environments, <strong>LICHT MARKETING</strong> provides reliable, professional cleaning services tailored to your needs. We help create spaces that are cleaner, healthier, safer and more welcoming.
            </p>
            <div className="hero-cta-group">
              <div className="hero-cta-buttons">
                <Button href="#quote" variant="primary" iconType="up-right" className="hero-cta-btn">
                  Get a Free Quote
                </Button>
                <Button href="#services" variant="outline" iconType="none" className="hero-cta-btn-secondary">
                  Our Services
                </Button>
              </div>
              <a href="#contracts" className="hero-secondary-link">
                <span>Commercial enquiry? Discuss a contract</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Main Visual Banner */}
        <div className="hero-image-wrapper">
          <img 
            src="/images/hero.jpg" 
            alt="Ultra-luxury corporate atrium lobby" 
            className="hero-image"
          />
          <div className="hero-image-badge">
            <span className="badge-line">—</span>
            <span>SPACES WORTH LOOKING AFTER</span>
          </div>
        </div>

        {/* Hero Feature Bar */}
        <div className="hero-feature-bar">
          <div className="feature-item">
            <ClipboardIcon size={18} className="feature-icon" />
            <span className="feature-text">Scope-led service</span>
          </div>
          <div className="feature-item">
            <CalendarIcon size={18} className="feature-icon" />
            <span className="feature-text">Considered scheduling</span>
          </div>
          <div className="feature-item">
            <HomeIcon size={18} className="feature-icon" />
            <span className="feature-text">Home & workplace care</span>
          </div>
          <a href="#services" className="feature-action-link">
            <span>Explore our services</span>
            <ArrowDown size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
