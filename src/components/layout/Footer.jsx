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

          {/* Navigation Links (Matching Navbar) */}
          <div className="footer-links-columns">
            <div className="footer-col">
              <span className="footer-heading">NAVIGATION</span>
              <div className="footer-links-list">
                <Link to="/" className="footer-nav-link">Home</Link>
                <Link to="/services" className="footer-nav-link">Services</Link>
                <Link to="/about" className="footer-nav-link">About Us</Link>
                <a href="/#sectors" className="footer-nav-link">Sectors</a>
              </div>
            </div>

            <div className="footer-col">
              <span className="footer-heading">SECTIONS</span>
              <div className="footer-links-list">
                <a href="/#compliance" className="footer-nav-link">Compliance</a>
                <a href="/#contracts" className="footer-nav-link">Contracts</a>
                <a href="/#faq" className="footer-nav-link">FAQ</a>
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
