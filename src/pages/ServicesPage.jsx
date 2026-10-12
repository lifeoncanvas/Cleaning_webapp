import React, { useEffect } from 'react';
import './ServicesPage.css';
import { SectionBadge } from '../components/ui/SectionBadge';
import { Button } from '../components/ui/Button';
import { Check, ArrowUpRight } from '../components/ui/Icons';
import { HowItWorks } from '../components/sections/HowItWorks';
import { QuoteForm } from '../components/sections/QuoteForm';
import { servicesBriefData } from '../data/briefData';
import { useAuth } from '../context/AuthContext';

export const ServicesPage = () => {
  const { openBookingFlow } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      {/* Services Hero Header */}
      <section className="services-hero-header">
        <div className="container">
          <SectionBadge text="OUR SERVICES PORTFOLIO" />
          <h1 className="services-page-title">Cleaning Services Designed Around You</h1>
          <p className="services-page-subtitle">
            From single private residences to multi-site commercial enterprises and regulated care environments, explore our full spectrum of specialized cleaning capabilities.
          </p>
        </div>
      </section>

      {/* Alternating Staggered In-Depth Service Sections */}
      <div className="services-detailed-list">
        {servicesBriefData.map((service, index) => {
          const isReversed = index % 2 !== 0;
          return (
            <section 
              key={service.id} 
              id={service.id}
              className={`service-detail-section ${isReversed ? 'layout-reversed' : ''}`}
            >
              <div className="container service-detail-grid">
                {/* Content Side */}
                <div className="service-detail-content">
                  <span className="service-detail-badge">{service.badge}</span>
                  <h2 className="service-detail-title">{service.title}</h2>
                  <p className="service-detail-tagline">{service.tagline}</p>
                  <p className="service-detail-desc">{service.description}</p>

                  <div className="service-detail-checklist">
                    <span className="checklist-subhead">Scope of work includes:</span>
                    <div className="checklist-grid-2col">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="detail-check-item">
                          <Check size={15} className="check-gold-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-detail-actions">
                    <Button 
                      onClick={() => openBookingFlow(service.title)} 
                      variant="primary" 
                      iconType="up-right"
                      className="service-detail-btn"
                    >
                      {service.ctaText}
                    </Button>
                    <button 
                      type="button" 
                      onClick={() => openBookingFlow(service.title)} 
                      className="service-detail-link"
                    >
                      <span>Instant Booking</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Photography Side with Floating Highlight Badge */}
                <div className="service-detail-visual">
                  <div className="service-visual-frame">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-detail-img" 
                    />
                    <div className="service-floating-tag">
                      <span className="gold-dot">●</span>
                      <span>Verified Standards</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 5-Step Operational Process */}
      <HowItWorks />

      {/* Quote Form Section */}
      <QuoteForm />
    </div>
  );
};
