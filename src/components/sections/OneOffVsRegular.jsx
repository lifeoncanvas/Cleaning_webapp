import React from 'react';
import './OneOffVsRegular.css';
import { SectionBadge } from '../ui/SectionBadge';
import { Button } from '../ui/Button';
import { Check } from '../ui/Icons';

export const OneOffVsRegular = () => {
  return (
    <section className="schedule-section">
      <div className="container">
        <div className="schedule-header">
          <SectionBadge text="FLEXIBLE ARRANGEMENTS" />
          <h2 className="schedule-heading">Cleaning That Fits Your Schedule</h2>
          <p className="schedule-sub">
            Whether you need a one-off intensive refresh or a consistent ongoing maintenance contract, we provide services shaped around your timetable.
          </p>
        </div>

        <div className="schedule-grid">
          {/* One-off Card */}
          <div className="schedule-card">
            <div className="schedule-card-tag">SINGLE VISITS</div>
            <h3 className="schedule-card-title">ONE-OFF CLEANING</h3>
            <p className="schedule-card-desc">
              Comprehensive, detail-led cleans when your property needs immediate turnaround or special attention.
            </p>
            <div className="schedule-ideal-list">
              <span className="ideal-label">Ideal for:</span>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Moving house</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> End of tenancy</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Events & hospitality</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Seasonal deep cleaning</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Property preparation</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Special occasions & handovers</div>
            </div>
            <Button href="#quote" variant="outline" iconType="up-right" className="schedule-btn">
              Get a One-Off Quote
            </Button>
          </div>

          {/* Regular Card */}
          <div className="schedule-card schedule-card-featured">
            <div className="schedule-card-tag gold-tag">RECURRING CONTRACTS</div>
            <h3 className="schedule-card-title">REGULAR CLEANING</h3>
            <p className="schedule-card-desc">
              Reliable ongoing cleaning routines that maintain pristine standards week-in, week-out without fail.
            </p>
            <div className="schedule-ideal-list">
              <span className="ideal-label">Ideal for:</span>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Private homes & apartments</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Corporate offices & workplaces</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Commercial & retail properties</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Care & supported living environments</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Property management portfolios</div>
              <div className="ideal-item"><Check size={15} className="ideal-check" /> Multi-site business premises</div>
            </div>
            <Button href="#quote" variant="primary" iconType="up-right" className="schedule-btn">
              Get a Regular Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
