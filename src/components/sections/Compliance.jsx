import React from 'react';
import './Compliance.css';
import { SectionBadge } from '../ui/SectionBadge';
import { complianceBriefList } from '../../data/briefData';
import { ClipboardIcon, Check } from '../ui/Icons';
import { Button } from '../ui/Button';

export const Compliance = () => {
  return (
    <section id="compliance" className="compliance-section">
      <div className="container">
        <div className="compliance-grid">
          {/* Left Column: Heading and Context Box */}
          <div className="compliance-left-col">
            <SectionBadge text="OUR COMPLIANCE & STANDARDS" />
            <h2 className="compliance-heading">Professional Standards. Responsible Cleaning.</h2>
            <p className="compliance-lead-desc">
              <strong>LICHT MARKETING</strong> is committed to maintaining appropriate documentation and procedures to support safe, compliant and professional cleaning services across commercial and care settings.
            </p>

            <div className="compliance-callout-box">
              <p>
                Have a regulated or specialist environment? Share the applicable standards and documentation requirements so suitability can be assessed.
              </p>
            </div>

            <div className="compliance-cta-wrap">
              <Button href="#quote" variant="primary" iconType="up-right" className="compliance-btn">
                Request Company Compliance Info
              </Button>
            </div>
          </div>

          {/* Right Column: 11 Compliance Documentation Items */}
          <div className="compliance-right-col">
            <div className="compliance-checklist-container">
              <div className="checklist-header">
                <ClipboardIcon size={20} className="gold-icon" />
                <span className="checklist-header-title">Our Compliance Documentation Includes:</span>
              </div>
              <div className="compliance-items-grid">
                {complianceBriefList.map((doc, index) => (
                  <div key={index} className="compliance-doc-badge">
                    <Check size={14} className="compliance-badge-check" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
