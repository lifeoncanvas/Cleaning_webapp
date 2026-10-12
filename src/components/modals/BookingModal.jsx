import React, { useState, useEffect } from 'react';
import './BookingModal.css';
import { useAuth } from '../../context/AuthContext';
import { Check, ArrowRight, ArrowLeft, CalendarIcon, LockIcon } from '../ui/Icons';
import { PaymentGateway } from '../payment/PaymentGateway';

export const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal, bookingService, user } = useAuth();
  
  const [step, setStep] = useState(1);
  const [propertyType, setPropertyType] = useState('Residential Home');
  const [propertySize, setPropertySize] = useState('2-3 Bedroom Property');
  const [selectedAddons, setSelectedAddons] = useState(['Oven & Extraction Hood Detailing']);
  const [preferredDate, setPreferredDate] = useState('2026-10-15');
  const [timeSlot, setTimeSlot] = useState('Morning (08:00 - 12:00)');
  const [accessType, setAccessType] = useState('Client on-site to greet');
  const [notes, setNotes] = useState('');
  const [address, setAddress] = useState('42 Kensington Palace Gardens, London W8 4QP');
  const [bookingRef, setBookingRef] = useState('');
  const [paymentResult, setPaymentResult] = useState(null);

  // Reset step when opening
  useEffect(() => {
    if (isBookingModalOpen) {
      setStep(1);
      setBookingRef(`LM-${Math.floor(10000 + Math.random() * 90000)}`);
      setPaymentResult(null);
    }
  }, [isBookingModalOpen]);

  if (!isBookingModalOpen) return null;

  const addonsList = [
    { id: 'oven', label: 'Oven & Extractor Hood Detailing', price: 45 },
    { id: 'carpet', label: 'Carpet Hot Water Extraction (2 rooms)', price: 65 },
    { id: 'windows', label: 'Interior Window & Frame Polishing', price: 35 },
    { id: 'descaling', label: 'Bathroom Limescale Intensive Polish', price: 40 },
    { id: 'fogging', label: 'Antimicrobial Fogging Sanitisation', price: 55 }
  ];

  const toggleAddon = (label) => {
    setSelectedAddons(prev => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  // Pricing calculations
  const basePrices = {
    'Studio / 1-Bed Flat': 160,
    '2-3 Bedroom Property': 240,
    '4-5 Bedroom Executive Home': 380,
    'Commercial / Custom Scope': 450
  };

  const basePrice = basePrices[propertySize] || 240;
  const addonsTotal = selectedAddons.reduce((acc, curr) => {
    const item = addonsList.find(a => a.label === curr);
    return acc + (item ? item.price : 0);
  }, 0);
  const totalPrice = basePrice + addonsTotal;

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    setStep(4); // Advance to Secure Payment Gateway
  };

  const handlePaymentSuccess = (result) => {
    setPaymentResult(result);
    setStep(5); // Advance to Final Receipt
  };

  const currentOrderData = {
    serviceName: bookingService,
    propertyType,
    propertySize,
    date: preferredDate,
    timeSlot,
    address,
    selectedAddons,
    basePrice,
    addonsTotal,
    totalPrice
  };

  return (
    <div className="modal-backdrop" onClick={closeBookingModal}>
      <div className={`booking-modal-dialog ${step === 4 ? 'booking-modal-wide' : ''}`} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          type="button" 
          className="modal-close-btn" 
          onClick={closeBookingModal}
          aria-label="Close dialog"
        >
          ✕
        </button>

        {step < 5 && (
          <div className="booking-header-area">
            <div className="booking-user-badge">
              <span className="user-dot">●</span>
              <span>Logged in as <strong>{user?.name || 'Alexander Wright'}</strong></span>
            </div>

            <h2 className="booking-title">
              {step === 4 ? 'Secure Payment Gateway' : `Book Your ${bookingService || 'Deep Clean'}`}
            </h2>

            {/* Step Progress Bar with Payment */}
            <div className="booking-steps-bar">
              <div className={`step-item ${step >= 1 ? 'step-active' : ''}`}>
                <span className="step-num">1</span>
                <span className="step-label">Scope</span>
              </div>
              <div className="step-connector" />
              <div className={`step-item ${step >= 2 ? 'step-active' : ''}`}>
                <span className="step-num">2</span>
                <span className="step-label">Schedule</span>
              </div>
              <div className="step-connector" />
              <div className={`step-item ${step >= 3 ? 'step-active' : ''}`}>
                <span className="step-num">3</span>
                <span className="step-label">Review</span>
              </div>
              <div className="step-connector" />
              <div className={`step-item ${step >= 4 ? 'step-active' : ''}`}>
                <span className="step-num">4</span>
                <span className="step-label">Payment</span>
              </div>
            </div>
          </div>
        )}

        {/* STEP 1: PROPERTY & SCOPE */}
        {step === 1 && (
          <div className="booking-step-content">
            <h3 className="section-label">1. Property Specifications</h3>

            <div className="input-grid">
              <div className="booking-field">
                <label>Property Environment</label>
                <div className="options-pill-grid">
                  {['Residential Home', 'Office & Workplace', 'Commercial Venue', 'Care Setting'].map(type => (
                    <button
                      key={type}
                      type="button"
                      className={`pill-option-btn ${propertyType === type ? 'pill-selected' : ''}`}
                      onClick={() => setPropertyType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="booking-field">
                <label>Property Size / Scope</label>
                <div className="options-pill-grid">
                  {['Studio / 1-Bed Flat', '2-3 Bedroom Property', '4-5 Bedroom Executive Home', 'Commercial / Custom Scope'].map(size => (
                    <button
                      key={size}
                      type="button"
                      className={`pill-option-btn ${propertySize === size ? 'pill-selected' : ''}`}
                      onClick={() => setPropertySize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <h3 className="section-label" style={{ marginTop: '24px' }}>
              2. Intensive Deep Clean Add-ons
            </h3>
            <div className="addons-grid">
              {addonsList.map(addon => {
                const isSelected = selectedAddons.includes(addon.label);
                return (
                  <div 
                    key={addon.id} 
                    className={`addon-card ${isSelected ? 'addon-card-active' : ''}`}
                    onClick={() => toggleAddon(addon.label)}
                  >
                    <div className="addon-check-box">
                      {isSelected && <Check size={13} className="addon-check-icon" />}
                    </div>
                    <div className="addon-info">
                      <span className="addon-title">{addon.label}</span>
                      <span className="addon-price">+£{addon.price}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Navigation */}
            <div className="booking-action-footer">
              <div className="footer-price-hint">
                <span className="price-label">Estimated Total:</span>
                <span className="price-val">£{totalPrice}</span>
              </div>
              <button 
                type="button" 
                className="step-next-btn"
                onClick={() => setStep(2)}
              >
                <span>Continue to Schedule</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: DATE & ACCESS */}
        {step === 2 && (
          <div className="booking-step-content">
            <h3 className="section-label">Preferred Scheduling & Access</h3>

            <div className="schedule-two-col">
              <div className="booking-field">
                <label>Preferred Clean Date</label>
                <div className="date-input-wrap">
                  <input
                    type="date"
                    className="booking-text-input date-input"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                  />
                  <CalendarIcon size={18} className="date-picker-icon" />
                </div>
              </div>

              <div className="booking-field">
                <label>Arrival Window</label>
                <div className="options-pill-grid vertical-pills">
                  {['Morning (08:00 - 12:00)', 'Afternoon (12:00 - 16:00)', 'Flexible All-Day'].map(slot => (
                    <button
                      key={slot}
                      type="button"
                      className={`pill-option-btn ${timeSlot === slot ? 'pill-selected' : ''}`}
                      onClick={() => setTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="booking-field" style={{ marginTop: '20px' }}>
              <label>Access & Entry Method</label>
              <div className="options-pill-grid">
                {['Client on-site to greet', 'Key Safe / Lockbox', 'Concierge / Reception', 'Alarm Code provided'].map(access => (
                  <button
                    key={access}
                    type="button"
                    className={`pill-option-btn ${accessType === access ? 'pill-selected' : ''}`}
                    onClick={() => setAccessType(access)}
                  >
                    {access}
                  </button>
                ))}
              </div>
            </div>

            <div className="booking-field" style={{ marginTop: '20px' }}>
              <label>Special Instructions or Access Notes (Optional)</label>
              <textarea
                className="booking-text-input booking-textarea"
                rows="3"
                placeholder="e.g. Dedicated parking space in driveway, pet friendly products preferred, specific focus on kitchen tiles."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Bottom Navigation */}
            <div className="booking-action-footer">
              <button 
                type="button" 
                className="step-back-btn"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={15} />
                <span>Back</span>
              </button>
              <button 
                type="button" 
                className="step-next-btn"
                onClick={() => setStep(3)}
              >
                <span>Review & Summary</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW & ORDER SUMMARY */}
        {step === 3 && (
          <form onSubmit={handleProceedToPayment} className="booking-step-content">
            <h3 className="section-label">Order Summary & Booking Verification</h3>

            <div className="summary-breakdown-card">
              <div className="summary-row">
                <span className="summary-lbl">Service:</span>
                <span className="summary-val gold-accent">{bookingService}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Property:</span>
                <span className="summary-val">{propertyType} ({propertySize})</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Date & Time:</span>
                <span className="summary-val">{preferredDate} · {timeSlot}</span>
              </div>
              <div className="summary-row">
                <span className="summary-lbl">Access:</span>
                <span className="summary-val">{accessType}</span>
              </div>

              {selectedAddons.length > 0 && (
                <div className="summary-row addons-summary-row">
                  <span className="summary-lbl">Add-ons:</span>
                  <div className="addons-summary-list">
                    {selectedAddons.map((addon, i) => (
                      <span key={i} className="addon-tag-pill">✓ {addon}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="summary-divider" />

              <div className="summary-row total-row">
                <span className="total-title">Total Estimated Investment:</span>
                <span className="total-figure">£{totalPrice}</span>
              </div>
            </div>

            <div className="booking-field" style={{ marginTop: '20px' }}>
              <label>Service Address / Postcode</label>
              <input
                type="text"
                className="booking-text-input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="contact-prefill-box">
              <div className="contact-col">
                <span className="contact-lbl">Contact Name:</span>
                <span className="contact-val">{user?.name || 'Alexander Wright'}</span>
              </div>
              <div className="contact-col">
                <span className="contact-lbl">Email:</span>
                <span className="contact-val">{user?.email || 'alexander@lichtmarketing.co.uk'}</span>
              </div>
              <div className="contact-col">
                <span className="contact-lbl">Phone:</span>
                <span className="contact-val">{user?.phone || '+44 7911 123456'}</span>
              </div>
            </div>

            <div className="booking-guarantee-note">
              <LockIcon size={14} className="note-star" />
              <span>256-Bit Escrow Protection · PCI-DSS Compliant Gateway · 100% Satisfaction Guarantee</span>
            </div>

            {/* Bottom Navigation: Proceeds to Payment Gateway */}
            <div className="booking-action-footer">
              <button 
                type="button" 
                className="step-back-btn"
                onClick={() => setStep(2)}
              >
                <ArrowLeft size={15} />
                <span>Back</span>
              </button>
              <button 
                type="submit" 
                className="step-confirm-btn"
              >
                <LockIcon size={14} />
                <span>Proceed to Payment Gateway</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </form>
        )}

        {/* STEP 4: SECURE PAYMENT GATEWAY */}
        {step === 4 && (
          <div className="booking-step-content booking-payment-step">
            <PaymentGateway
              orderData={currentOrderData}
              user={user}
              onPaymentSuccess={handlePaymentSuccess}
              onBack={() => setStep(3)}
            />
          </div>
        )}

        {/* STEP 5: SUCCESS & OFFICIAL RECEIPT */}
        {step === 5 && (
          <div className="booking-success-view">
            <div className="success-crest-wrap">
              <img src="/images/logo-crest.png" alt="LICHT Crest" className="success-crest" />
            </div>

            <span className="success-ref-pill">BOOKING REFERENCE: {bookingRef}</span>
            <h2 className="success-title">Booking & Payment Confirmed!</h2>
            <p className="success-desc">
              Thank you, <strong>{user?.name || 'Alexander Wright'}</strong>. Your payment has been authorized and your service for{' '}
              <strong className="gold-accent">{bookingService}</strong> on{' '}
              <strong>{preferredDate}</strong> is officially scheduled.
            </p>

            <div className="success-details-card">
              <div className="success-item">
                <span className="si-label">Transaction ID:</span>
                <span className="si-val gold-val">{paymentResult?.txnId || 'TXN-LM-89241'}</span>
              </div>
              <div className="success-item">
                <span className="si-label">Amount Paid Today:</span>
                <span className="si-val gold-val">£{paymentResult?.payableNow || totalPrice}.00</span>
              </div>
              {paymentResult?.balanceRemaining > 0 && (
                <div className="success-item">
                  <span className="si-label">Balance on Completion:</span>
                  <span className="si-val">£{paymentResult.balanceRemaining}.00</span>
                </div>
              )}
              <div className="success-item">
                <span className="si-label">Property:</span>
                <span className="si-val">{propertyType} ({propertySize})</span>
              </div>
              <div className="success-item">
                <span className="si-label">Time Window:</span>
                <span className="si-val">{timeSlot}</span>
              </div>
              <div className="success-item">
                <span className="si-label">Address:</span>
                <span className="si-val">{address}</span>
              </div>
            </div>

            <div className="success-notice">
              <Check size={16} className="notice-icon" />
              <span>An official VAT receipt and calendar invitation have been sent to <strong>{user?.email || 'alexander@lichtmarketing.co.uk'}</strong>.</span>
            </div>

            <button 
              type="button" 
              className="success-close-btn"
              onClick={closeBookingModal}
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
