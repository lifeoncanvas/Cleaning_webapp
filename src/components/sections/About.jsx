import React from 'react';
import './About.css';
import { SectionBadge } from '../ui/SectionBadge';
import { valuesData } from '../../data/briefData';
import { Check } from '../ui/Icons';

export const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Image with caption */}
          <div className="about-image-col">
            <div className="about-image-frame">
              <img 
                src="/images/about-living.jpg" 
                alt="Considered spaces and interior care" 
                className="about-img"
              />
            </div>
            <p className="about-caption">
              *Considered spaces. Exceptional standards.
            </p>
          </div>

          {/* Right Column: Narrative content */}
          <div className="about-content-col">
            <SectionBadge text="ABOUT LICHT MARKETING" />
            <h2 className="about-heading">Creating environments people feel confident in.</h2>
            
            <p className="about-lead">
              <strong>LICHT MARKETING</strong> is a professional cleaning company providing premium home and corporate cleaning solutions.
            </p>

            <p className="about-secondary">
              Our aim is simple: <em>To make every space cleaner, healthier and more welcoming.</em> We combine professional cleaning practices with reliable customer service to provide cleaning solutions that meet the needs of both residential and business clients.
            </p>

            <div className="about-mission-box">
              <span className="mission-tag">OUR MISSION</span>
              <p className="mission-quote">
                "To provide dependable, professional and high-quality cleaning services that help our clients maintain clean, safe and welcoming environments."
              </p>
            </div>

            <div className="about-values-grid">
              {valuesData.map((val, idx) => (
                <div key={idx} className="about-value-item">
                  <div className="val-title-row">
                    <Check size={14} className="val-check" />
                    <strong>{val.title}</strong>
                  </div>
                  <span className="val-desc">{val.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
