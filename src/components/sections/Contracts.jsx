import React from 'react';
import './Contracts.css';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { Check } from '../ui/Icons';

export const Contracts = () => {
  return (
    <section id="contracts" className="contracts-section">
      <div className="container">
        <div className="contracts-grid">
          {/* Left Column: Information, checklist and CTA */}
          <div className="contracts-content-col">
            <SectionBadge text="COMMERCIAL CONTRACTS" />
            <h2 className="contracts-heading">Looking for a Reliable Cleaning Partner?</h2>
            
            <p className="contracts-desc">
              Whether you manage an office, care facility, commercial property or residential development, <strong>LICHT MARKETING</strong> can discuss your cleaning requirements. Tell us about your property and we'll work with you to develop an appropriate cleaning solution.
            </p>

            <ul className="contracts-checklist">
              <li className="checklist-item">
                <Check size={16} className="checklist-icon" />
                <span>Daily, weekly & custom multi-day cleaning schedules</span>
              </li>
              <li className="checklist-item">
                <Check size={16} className="checklist-icon" />
                <span>Flexible early morning, evening & weekend cleaning</span>
              </li>
              <li className="checklist-item">
                <Check size={16} className="checklist-icon" />
                <span>Dedicated account manager & ongoing quality audits</span>
              </li>
              <li className="checklist-item">
                <Check size={16} className="checklist-icon" />
                <span>Full COSHH, RAMS & health and safety compliance</span>
              </li>
            </ul>

            <div className="contracts-cta-wrap">
              <div className="contracts-btn-group">
                <Button href="#contact" variant="primary" iconType="up-right" className="contracts-btn">
                  Contact Our Team
                </Button>
              </div>
              <p className="contracts-subtext">
                Managing several properties? Include your locations and any tender requirements in your enquiry.
              </p>
            </div>
          </div>

          {/* Right Column: Boardroom image */}
          <div className="contracts-image-col">
            <div className="contracts-image-frame">
              <img 
                src="/images/commercial.jpg" 
                alt="Executive corporate boardroom space" 
                className="contracts-img"
              />
            </div>
            <p className="contracts-caption">
              *For workplaces and organizations that need a considered contract.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
