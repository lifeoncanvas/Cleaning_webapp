import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { UserIcon } from '../ui/Icons';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, isLoggedIn, logout, openAuthModal, openBookingFlow } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change & manage body scroll lock
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const handleBookNowClick = (e) => {
    e.preventDefault();
    openBookingFlow('Specialist / Deep Cleaning');
  };

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={() => window.scrollTo(0, 0)}>
          <img src="/images/logo-crest.png" alt="LICHT Crest Logo" className="brand-crest-img" />
          <div className="brand-text">
            <span className="brand-title">LICHT MARKETING</span>
            <span className="brand-subtitle">HOME & CORPORATE CLEANING</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
            Home
          </Link>
          <Link to="/services" className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}>
            Services
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
            About Us
          </Link>
          <a href="/#sectors" className="nav-link">Sectors</a>
          <a href="/#compliance" className="nav-link">Compliance</a>
          <a href="/#contracts" className="nav-link">Contracts</a>
          <a href="/#faq" className="nav-link">FAQ</a>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          {/* User Auth Status: Logo Icon Button */}
          {isLoggedIn ? (
            <button 
              type="button" 
              onClick={logout} 
              className="nav-user-icon-btn logged-in"
              title={`Logged in as ${user?.name || 'Client'} (Click to Logout)`}
              aria-label="User profile / Log out"
            >
              <UserIcon size={18} className="nav-user-svg" />
              <span className="nav-user-status-dot">●</span>
            </button>
          ) : (
            <button 
              type="button" 
              onClick={openAuthModal} 
              className="nav-user-icon-btn"
              title="Sign In to Account"
              aria-label="Sign In"
            >
              <UserIcon size={18} className="nav-user-svg" />
            </button>
          )}

          {/* Book Now Button (triggers booking flow) */}
          <Button 
            onClick={handleBookNowClick} 
            variant="primary" 
            iconType="up-right" 
            className="nav-cta-btn"
          >
            Book Now
          </Button>

          {/* Mobile hamburger */}
          <button 
            className={`mobile-toggle ${mobileMenuOpen ? 'is-open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className={`bar ${mobileMenuOpen ? 'bar-open' : ''}`}></span>
            <span className={`bar ${mobileMenuOpen ? 'bar-open' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Backdrop & Drawer */}
      {mobileMenuOpen && (
        <>
          <div 
            className="mobile-backdrop-overlay" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="mobile-menu" role="dialog" aria-modal="true">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`mobile-link ${isActive('/') ? 'mobile-link-active' : ''}`}>Home</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className={`mobile-link ${isActive('/services') ? 'mobile-link-active' : ''}`}>Services</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`mobile-link ${isActive('/about') ? 'mobile-link-active' : ''}`}>About Us</Link>
            <a href="/#sectors" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Sectors</a>
            <a href="/#compliance" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Compliance</a>
            <a href="/#contracts" onClick={() => setMobileMenuOpen(false)} className="mobile-link">Contracts</a>
            <a href="/#faq" onClick={() => setMobileMenuOpen(false)} className="mobile-link">FAQ</a>
            <div className="mobile-menu-cta-wrap">
              {isLoggedIn ? (
                <button 
                  type="button" 
                  onClick={() => { setMobileMenuOpen(false); logout(); }} 
                  className="mobile-auth-btn"
                >
                  Log Out ({user?.name ? user.name.split(' ')[0] : 'User'})
                </button>
              ) : (
                <button 
                  type="button" 
                  onClick={() => { setMobileMenuOpen(false); openAuthModal(); }} 
                  className="mobile-auth-btn"
                >
                  Sign In to Account
                </button>
              )}
              <Button 
                onClick={(e) => { setMobileMenuOpen(false); handleBookNowClick(e); }} 
                variant="primary" 
                iconType="up-right" 
                style={{ width: '100%', marginTop: '10px' }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
