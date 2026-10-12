import React, { useState } from 'react';
import './AuthModal.css';
import { useAuth } from '../../context/AuthContext';
import { ArrowRight, LockIcon, Check } from '../ui/Icons';

export const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login, bookingService } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      name: name || (isSignUp ? 'New Client' : 'Alexander Wright'),
      email: email || 'alexander@lichtmarketing.co.uk',
      phone: phone || '+44 7911 123456',
    });
  };

  const handleDemoLogin = () => {
    login({
      name: 'Alexander Wright',
      email: 'alexander@lichtmarketing.co.uk',
      phone: '+44 7911 123456',
      company: 'Wright & Co Properties'
    });
  };

  return (
    <div className="modal-backdrop" onClick={closeAuthModal}>
      <div className="auth-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={closeAuthModal}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {/* Brand Header */}
        <div className="auth-modal-header">
          <img src="/images/logo-crest.png" alt="LICHT Logo" className="auth-crest-logo" />
          <span className="auth-eyebrow">CLIENT VERIFICATION</span>
          <h2 className="auth-title">
            {isSignUp ? 'Create Your Client Account' : 'Sign In to Proceed with Booking'}
          </h2>
          <p className="auth-subtitle">
            You are requesting a booking for{' '}
            <strong className="service-highlight">{bookingService || 'Specialist / Deep Cleaning'}</strong>.
            Please sign in to confirm your booking and view live schedule availability.
          </p>
        </div>

        {/* Tab switch between Sign In and Register */}
        <div className="auth-tab-row">
          <button
            type="button"
            className={`auth-tab-btn ${!isSignUp ? 'tab-active' : ''}`}
            onClick={() => setIsSignUp(false)}
          >
            Existing Client Sign In
          </button>
          <button
            type="button"
            className={`auth-tab-btn ${isSignUp ? 'tab-active' : ''}`}
            onClick={() => setIsSignUp(true)}
          >
            New Client Registration
          </button>
        </div>

        {/* One-click Instant Demo Sign In for seamless test experience */}
        <div className="demo-login-box">
          <button 
            type="button" 
            className="demo-login-btn"
            onClick={handleDemoLogin}
          >
            <span className="demo-sparkle">✦</span>
            <span>Quick 1-Click Demo Sign In (Alexander Wright)</span>
          </button>
        </div>

        <div className="auth-divider">
          <span>or sign in with credentials</span>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="auth-name">Full Name</label>
              <input
                id="auth-name"
                type="text"
                className="form-input"
                placeholder="e.g. Lady Sarah Harrington"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={isSignUp}
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="auth-email">Email Address</label>
            <input
              id="auth-email"
              type="email"
              className="form-input"
              placeholder="e.g. alexander@lichtmarketing.co.uk"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="auth-password">Password</label>
            <div className="input-with-icon">
              <input
                id="auth-password"
                type="password"
                className="form-input"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <LockIcon size={16} className="input-lock-icon" />
            </div>
          </div>

          {isSignUp && (
            <div className="form-group">
              <label htmlFor="auth-phone">Phone Number</label>
              <input
                id="auth-phone"
                type="tel"
                className="form-input"
                placeholder="+44 7911 123456"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          )}

          {/* Trust points */}
          <div className="auth-perks">
            <div className="perk-item">
              <Check size={13} className="perk-check" />
              <span>Dedicated Account Manager</span>
            </div>
            <div className="perk-item">
              <Check size={13} className="perk-check" />
              <span>Vetted & Insured Cleaning Teams</span>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            <span>{isSignUp ? 'Create Account & Continue Booking' : 'Sign In & Continue Booking'}</span>
            <ArrowRight size={15} />
          </button>
        </form>
      </div>
    </div>
  );
};
