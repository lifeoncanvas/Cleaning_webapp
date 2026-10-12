import React, { useState, useEffect, useRef } from 'react';
import './Services.css';
import { servicesBriefData } from '../../data/briefData';
import { useAuth } from '../../context/AuthContext';
import { 
  Check, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  HomeIcon, 
  BuildingIcon, 
  LayersIcon, 
  HeartPulseIcon, 
  SparklesIcon, 
  ClipboardIcon 
} from '../ui/Icons';

export const Services = () => {
  const { openBookingFlow } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const timerRef = useRef(null);

  const totalServices = servicesBriefData.length;

  // Auto-slide carousel every 6s (pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalServices);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [isPaused, totalServices]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalServices - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalServices);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    setTouchStart(null);
  };

  const renderIcon = (id) => {
    switch (id) {
      case 'home-cleaning':
        return <HomeIcon size={24} />;
      case 'corporate-office':
        return <BuildingIcon size={24} />;
      case 'commercial-cleaning':
        return <LayersIcon size={24} />;
      case 'care-living':
        return <HeartPulseIcon size={24} />;
      case 'specialist-deep':
        return <SparklesIcon size={24} />;
      case 'contract-cleaning':
      default:
        return <ClipboardIcon size={24} />;
    }
  };

  return (
    <section 
      id="services" 
      className="services-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Top Header Row */}
        <div className="services-reference-header">
          <div className="services-header-left">
            <span className="services-eyebrow">OUR SERVICES</span>
            <h2 className="services-headline">
              Cleaning Services Designed<br />Around You
            </h2>
          </div>

          <div className="services-header-right">
            <p className="services-header-lead">
              From a single home to a busy workplace or care environment, start with the service you need. Tailored cleaning plans shaped around your exact operational priorities.
            </p>
            
            {/* Carousel Navigation Arrows in Header */}
            <div className="services-carousel-nav">
              <button 
                type="button" 
                className="carousel-nav-btn" 
                onClick={handlePrev}
                aria-label="Previous services slide"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="carousel-nav-counter">
                <span>0{currentIndex + 1}</span>
                <span className="counter-sep">/</span>
                <span>0{totalServices}</span>
              </div>
              <button 
                type="button" 
                className="carousel-nav-btn" 
                onClick={handleNext}
                aria-label="Next services slide"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Service Category Selector Tabs */}
        <div className="services-category-tabs" role="tablist">
          {servicesBriefData.map((service, idx) => (
            <button
              key={service.id}
              type="button"
              role="tab"
              aria-selected={currentIndex === idx}
              className={`service-cat-tab ${currentIndex === idx ? 'tab-selected' : ''}`}
              onClick={() => setCurrentIndex(idx)}
            >
              <span>{service.badge}</span>
            </button>
          ))}
        </div>

        {/* Wide Landscape Carousel Viewport */}
        <div 
          className="services-landscape-viewport"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="services-landscape-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {servicesBriefData.map((service) => (
              <div 
                key={service.id} 
                className="service-landscape-slide"
              >
                <div className="service-horizontal-card">
                  {/* Photo on LEFT */}
                  <div className="service-card-photo-side">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="service-card-landscape-img" 
                      loading="lazy"
                    />
                    <div className="service-landscape-pill">
                      {service.badge}
                    </div>
                  </div>

                  {/* Info and Button on RIGHT */}
                  <div className="service-card-info-side">
                    {/* Header Row: Icon + Title + Tagline */}
                    <div className="service-info-header">
                      <div className="service-info-icon-box">
                        {renderIcon(service.id)}
                      </div>
                      <div className="service-info-title-group">
                        <h3 className="service-info-title">{service.title}</h3>
                        <p className="service-info-tagline">{service.tagline}</p>
                      </div>
                    </div>

                    {/* Description Paragraph */}
                    <p className="service-info-desc">
                      {service.description}
                    </p>

                    {/* 2-Column Compact Checklist */}
                    <div className="service-info-checklist-grid">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="service-info-check-item">
                          <Check size={14} className="service-check-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Footer Row with Meta Badge & CTA Button on Right */}
                    <div className="service-info-footer">
                      <div className="service-trust-badge">
                        <span className="trust-badge-sparkle">✦</span>
                        <span>Vetted Professionals · Tailored Schedules</span>
                      </div>

                      <button 
                        type="button"
                        onClick={() => openBookingFlow(service.title)} 
                        className="service-cta-gold-btn"
                      >
                        <span>{service.ctaText || "Book This Service"}</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Side Arrow Controls for Quick Click */}
          <button 
            type="button" 
            className="landscape-side-arrow arrow-prev" 
            onClick={handlePrev}
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            type="button" 
            className="landscape-side-arrow arrow-next" 
            onClick={handleNext}
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot Pagination Below */}
        <div className="services-dots-container">
          {servicesBriefData.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-dot-indicator ${idx === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to service ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
