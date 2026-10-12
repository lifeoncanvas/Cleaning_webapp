import React from 'react';
import './HowItWorks.css';
import { SectionBadge } from '../ui/SectionBadge';
import { cleaningProcessData } from '../../data/briefData';

export const HowItWorks = () => {
  return (
    <section id="process" className="how-it-works-section">
      <div className="container">
        {/* Header Grid */}
        <div className="how-header-grid">
          <div>
            <SectionBadge text="OUR CLEANING PROCESS" />
            <h2 className="how-heading">Simple. Professional. Reliable.</h2>
          </div>
          <div className="how-header-desc">
            <p>From initial conversation to immaculate finish, our 5-step operational framework ensures clarity, consistency and exceptional standards.</p>
          </div>
        </div>

        {/* 5 Steps Grid */}
        <div className="how-steps-grid-5">
          {cleaningProcessData.map((step) => (
            <div key={step.step} className="how-step-card">
              <span className="how-step-num">{step.step}</span>
              <h3 className="how-step-title">{step.title}</h3>
              <p className="how-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
