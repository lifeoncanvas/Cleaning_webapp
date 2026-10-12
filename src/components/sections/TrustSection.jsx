import React from 'react';
import './TrustSection.css';
import { trustHighlights } from '../../data/briefData';
import { Check } from '../ui/Icons';

export const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="trust-card">
          <div className="trust-header">
            <span className="trust-eyebrow">TRUSTED & ACCREDITED STANDARDS</span>
            <h2 className="trust-heading">A Cleaning Service You Can Rely On</h2>
            <p className="trust-lead">
              At <strong>LICHT MARKETING</strong>, we understand that cleanliness is more than appearance. It is about creating an environment where people feel comfortable, safe and confident.
            </p>
            <p className="trust-sub">
              We provide professional cleaning solutions for residential and corporate clients, with a strong focus on quality, reliability, professionalism and attention to detail.
            </p>
          </div>

          <div className="trust-highlights-grid">
            {trustHighlights.map((highlight, index) => (
              <div key={index} className="trust-highlight-item">
                <div className="trust-check-icon">
                  <Check size={16} />
                </div>
                <span className="trust-highlight-text">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
