import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Phone, MessageCircle } from '../ui/Icons';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          {/* Brand Info Column */}
          <div className="footer-brand-col">
            <div className="footer-brand">
              <img src="/images/logo-crest.png" alt="LICHT Crest Logo" className="footer-crest-img" />
              <div className="brand-text">
                <span className="brand-title">LICHT MARKETING</span>
                <span className="brand-subtitle">HOME & CORPORATE CLEANING</span>
              </div>
            </div>
            <p className="footer-tagline-text">
              Professional Cleaning. Exceptional Standards.
            </p>
            <p className="footer-desc">
              Reliable, high-calibre cleaning solutions for private homes, commercial workplaces and regulated care environments.
            </p>
            <div className="footer-contacts">
              <a href="tel:+442080000000" className="footer-contact-link">
                <Phone size={14} className="nav-icon" />
                <span>+44 (0) 20 8000 0000</span>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                <MessageCircle size={14} className="nav-icon" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* 4 Category Columns */}
          <div className="footer-links-columns">
            {/* SERVICES */}
            <div className="footer-col">
              <span className="footer-heading">SERVICES</span>
              <div className="footer-links-list">
                <Link to="/services#home-cleaning" className="footer-nav-link">Home Cleaning</Link>
                <Link to="/services#corporate-office" className="footer-nav-link">Office Cleaning</Link>
                <Link to="/services#commercial-cleaning" className="footer-nav-link">Commercial Cleaning</Link>
                <Link to="/services#care-living" className="footer-nav-link">Care Environment Cleaning</Link>
                <Link to="/services#specialist-deep" className="footer-nav-link">Deep Cleaning</Link>
                <Link to="/services#home-cleaning" className="footer-nav-link">End of Tenancy Cleaning</Link>
                <Link to="/services#contract-cleaning" className="footer-nav-link">Contract Cleaning</Link>
                <Link to="/services#specialist-deep" className="footer-nav-link">Post-Build Cleaning</Link>
              </div>
            </div>

            {/* COMPANY */}
            <div className="footer-col">
              <span className="footer-heading">COMPANY</span>
              <div className="footer-links-list">
                <Link to="/about" className="footer-nav-link">About Us</Link>
                <Link to="/services" className="footer-nav-link">Our Services</Link>
                <a href="/#why-choose" className="footer-nav-link">Our Standards</a>
                <a href="/#compliance" className="footer-nav-link">Compliance</a>
                <a href="/#faq" className="footer-nav-link">FAQs</a>
                <a href="/#contact" className="footer-nav-link">Contact Us</a>
              </div>
            </div>

            {/* CLIENTS */}
            <div className="footer-col">
              <span className="footer-heading">CLIENTS</span>
              <div className="footer-links-list">
                <a href="#quote" className="footer-nav-link">Domestic Clients</a>
                <a href="#quote" className="footer-nav-link">Businesses</a>
                <a href="#contract-enquiry" className="footer-nav-link">Care Homes</a>
                <a href="#contracts" className="footer-nav-link">Property Managers</a>
                <a href="#contracts" className="footer-nav-link">Commercial Organisations</a>
              </div>
            </div>

            {/* LEGAL */}
            <div className="footer-col">
              <span className="footer-heading">LEGAL</span>
              <div className="footer-links-list">
                <a href="#privacy" className="footer-nav-link">Privacy Policy</a>
                <a href="#cookies" className="footer-nav-link">Cookie Policy</a>
                <a href="#terms" className="footer-nav-link">Terms & Conditions</a>
                <a href="#complaints" className="footer-nav-link">Complaints Procedure</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 LICHT MARKETING. All Rights Reserved.
          </p>
          <div className="footer-legal">
            <span className="footer-moto">We Clean. You Relax.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
