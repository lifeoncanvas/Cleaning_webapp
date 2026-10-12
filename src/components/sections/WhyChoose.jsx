import React from 'react';
import './WhyChoose.css';
import { SectionBadge } from '../ui/SectionBadge';
import { whyChooseData } from '../../data/briefData';
import { Check } from '../ui/Icons';

export const WhyChoose = () => {
  return (
    <section id="why-choose" className="why-choose-section">
      <div className="container">
        <div className="why-choose-header">
          <SectionBadge text="OUR PROMISE" />
          <h2 className="why-choose-heading">Why Choose LICHT MARKETING?</h2>
          <p className="why-choose-sub">
            We don't simply clean spaces. We help create environments people can feel confident in.
          </p>
        </div>

        <div className="why-choose-grid">
          {whyChooseData.map((item) => (
            <div key={item.id} className="why-card">
              <div className="why-card-icon-wrap">
                <Check size={18} />
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
