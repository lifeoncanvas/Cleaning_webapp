import React from 'react';
import './Spaces.css';
import { SectionBadge } from '../ui/SectionBadge';
import { ArrowUpRight } from '../ui/Icons';

export const Spaces = () => {
  return (
    <section id="spaces" className="spaces-section">
      <div className="container">
        {/* Section Header */}
        <div className="spaces-header-grid">
          <div>
            <SectionBadge text="01 / YOUR SPACE, YOUR SERVICE" />
            <h2 className="spaces-heading">Different spaces. Same attention.</h2>
          </div>
          <div className="spaces-header-desc">
            <p>Choose the right starting point. We'll help define a service that fits.</p>
          </div>
        </div>

        {/* 2 Cards Grid */}
        <div className="spaces-cards-grid">
          {/* Card 1: Residential */}
          <div className="space-card">
            <div className="space-card-image-box">
              <img 
                src="/images/residential.jpg" 
                alt="Luxury residential living space" 
                className="space-card-img"
              />
            </div>
            <div className="space-card-body">
              <span className="space-category-tag">RESIDENTIAL</span>
              <h3 className="space-card-title">For your home</h3>
              <p className="space-card-desc">
                Regular care, deep cleaning or a fresh start. Tell us what your home needs and how you like it looked after.
              </p>
              <a href="#quote" className="space-card-link">
                <span>Enquire about home cleaning</span>
                <ArrowUpRight size={14} className="space-link-icon" />
              </a>
            </div>
          </div>

          {/* Card 2: Commercial */}
          <div className="space-card">
            <div className="space-card-image-box">
              <img 
                src="/images/commercial.jpg" 
                alt="Executive corporate boardroom space" 
                className="space-card-img"
              />
            </div>
            <div className="space-card-body">
              <span className="space-category-tag">COMMERCIAL</span>
              <h3 className="space-card-title">For your business</h3>
              <p className="space-card-desc">
                A considered cleaning plan for your workplace or property portfolio, with scope and scheduling agreed from the outset.
              </p>
              <a href="#quote" className="space-card-link">
                <span>Discuss a commercial contract</span>
                <ArrowUpRight size={14} className="space-link-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
