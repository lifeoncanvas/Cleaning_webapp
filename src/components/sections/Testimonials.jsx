import React from 'react';
import './Testimonials.css';
import { SectionBadge } from '../ui/SectionBadge';
import { testimonialsData } from '../../data/briefData';

export const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <SectionBadge text="CLIENT REVIEWS" />
          <h2 className="testimonials-heading">What Our Clients Say</h2>
          <p className="testimonials-sub">
            Real feedback from our domestic, commercial and property management clients.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((review, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="testimonial-quote">"{review.quote}"</p>
              <div className="testimonial-client-badge">
                <span className="client-dash">—</span>
                <span className="client-name">{review.client}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
