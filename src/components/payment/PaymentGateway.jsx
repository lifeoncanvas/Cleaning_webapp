import React, { useState } from 'react';
import './PaymentGateway.css';
import { 
  Check, 
  LockIcon, 
  ShieldCheckIcon, 
  CreditCardIcon, 
  ArrowLeft, 
  PrinterIcon,
  DownloadIcon 
} from '../ui/Icons';

export const PaymentGateway = ({ 
  orderData = {}, 
  user = null, 
  onPaymentSuccess = null, 
  onBack = null 
}) => {
  // Order defaults
  const service = orderData.serviceName || 'Specialist / Deep Cleaning';
  const property = orderData.propertyType ? `${orderData.propertyType} (${orderData.propertySize || 'Standard'})` : '2-3 Bedroom Residence';
  const cleanDate = orderData.date || '15 Oct 2026';
  const timeSlot = orderData.timeSlot || 'Morning (08:00 - 12:00)';
  const address = orderData.address || '42 Kensington Palace Gardens, London W8 4QP';
  const addons = orderData.selectedAddons || ['Oven & Extraction Hood Detailing'];
  const fullAmount = orderData.totalPrice || 285;

  // Payment configuration states
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' | 'applepay' | 'bacs'
  const [paymentOption, setPaymentOption] = useState('deposit'); // 'deposit' | 'full'
  
  // Card Inputs
  const [cardNumber, setCardNumber] = useState('4532 •••• •••• 8841');
  const [cardHolder, setCardHolder] = useState(user?.name || 'Alexander Wright');
  const [expiry, setExpiry] = useState('11/28');
  const [cvv, setCvv] = useState('842');
  const [saveCard, setSaveCard] = useState(true);
  const [billingSame, setBillingSame] = useState(true);

  // Corporate BACS invoice inputs
  const [poNumber, setPoNumber] = useState('PO-2026-9481');
  const [vatNumber, setVatNumber] = useState('GB 381 9204 12');

  // Processing state
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStage, setProcessStage] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [txnId, setTxnId] = useState('');

  // Calculations
  const depositAmount = Math.round(fullAmount * 0.25);
  const fullDiscountedAmount = Math.round(fullAmount * 0.95);
  const payableNow = paymentOption === 'deposit' ? depositAmount : fullDiscountedAmount;
  const balanceRemaining = paymentOption === 'deposit' ? fullAmount - depositAmount : 0;

  // Detect card brand
  const getCardBrand = (num) => {
    const clean = num.replace(/\s+/g, '');
    if (clean.startsWith('4')) return 'VISA';
    if (clean.startsWith('5')) return 'MASTERCARD';
    if (clean.startsWith('3')) return 'AMEX';
    return 'CARD';
  };

  const formatCardNumber = (val) => {
    const clean = val.replace(/\D/g, '').slice(0, 16);
    return clean.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  const handleExpiryChange = (e) => {
    let val = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (val.length >= 2) {
      val = val.slice(0, 2) + '/' + val.slice(2);
    }
    setExpiry(val);
  };

  const handleSubmitPayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setProcessStage('Establishing 256-bit TLS encrypted bank session...');

    setTimeout(() => {
      setProcessStage('Authorizing with card issuer (3D Secure 2.0)...');
    }, 1200);

    setTimeout(() => {
      setProcessStage('Payment verified & escrow held successfully ✓');
    }, 2400);

    setTimeout(() => {
      const generatedTxn = `TXN-LM-${Math.floor(100000 + Math.random() * 900000)}`;
      setTxnId(generatedTxn);
      setIsProcessing(false);
      setIsComplete(true);
      if (onPaymentSuccess) {
        onPaymentSuccess({ txnId: generatedTxn, payableNow, balanceRemaining });
      }
    }, 3200);
  };

  return (
    <div className="payment-gateway-container">
      {/* Security Brand Topbar */}
      <div className="gateway-top-bar">
        <div className="gateway-brand">
          <img src="/images/logo-crest.png" alt="LICHT Crest" className="gateway-crest-logo" />
          <div className="gateway-brand-text">
            <span className="gateway-brand-name">LICHT SECURE CHECKOUT</span>
            <span className="gateway-brand-sub">Home & Corporate Cleaning Escrow</span>
          </div>
        </div>

        <div className="gateway-security-badges">
          <div className="sec-badge">
            <LockIcon size={14} className="sec-icon" />
            <span>256-Bit SSL Encrypted</span>
          </div>
          <div className="sec-badge">
            <ShieldCheckIcon size={14} className="sec-icon" />
            <span>PCI-DSS Level 1</span>
          </div>
        </div>
      </div>

      {!isComplete ? (
        <div className="gateway-main-grid">
          {/* Left Column: Payment Form */}
          <div className="gateway-form-col">
            {onBack && (
              <button type="button" onClick={onBack} className="gateway-back-btn">
                <ArrowLeft size={14} />
                <span>Back to Booking Details</span>
              </button>
            )}

            <div className="gateway-section-title">
              <h3>Select Payment Plan</h3>
              <p>Choose between holding your slot with a 25% deposit or paying full for a 5% discount.</p>
            </div>

            {/* Payment Option Selector */}
            <div className="payment-option-cards">
              <div 
                className={`option-card ${paymentOption === 'deposit' ? 'opt-active' : ''}`}
                onClick={() => setPaymentOption('deposit')}
              >
                <div className="opt-radio">
                  {paymentOption === 'deposit' && <div className="radio-dot" />}
                </div>
                <div className="opt-body">
                  <div className="opt-header">
                    <span className="opt-title">25% Security Deposit</span>
                    <span className="opt-price">£{depositAmount}</span>
                  </div>
                  <p className="opt-desc">
                    Hold your scheduled team today. Balance of £{balanceRemaining} payable upon completed satisfaction.
                  </p>
                </div>
              </div>

              <div 
                className={`option-card ${paymentOption === 'full' ? 'opt-active' : ''}`}
                onClick={() => setPaymentOption('full')}
              >
                <div className="opt-radio">
                  {paymentOption === 'full' && <div className="radio-dot" />}
                </div>
                <div className="opt-body">
                  <div className="opt-header">
                    <span className="opt-title">Pay in Full (Save 5%)</span>
                    <span className="opt-price gold-price">£{fullDiscountedAmount}</span>
                  </div>
                  <p className="opt-desc">
                    One-time complete settlement with full 100% money-back SLA guarantee.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="method-tabs-row">
              <button
                type="button"
                className={`method-tab ${paymentMethod === 'card' ? 'm-active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                <CreditCardIcon size={16} />
                <span>Credit / Debit Card</span>
              </button>

              <button
                type="button"
                className={`method-tab ${paymentMethod === 'applepay' ? 'm-active' : ''}`}
                onClick={() => setPaymentMethod('applepay')}
              >
                <span> Pay / G-Pay</span>
              </button>

              <button
                type="button"
                className={`method-tab ${paymentMethod === 'bacs' ? 'm-active' : ''}`}
                onClick={() => setPaymentMethod('bacs')}
              >
                <span>Corporate BACS / Invoice</span>
              </button>
            </div>

            {/* Form based on selected payment method */}
            <form onSubmit={handleSubmitPayment} className="gateway-form">
              {paymentMethod === 'card' && (
                <div className="card-fields-group">
                  <div className="field-row">
                    <label>Cardholder Name</label>
                    <input
                      type="text"
                      className="gateway-input"
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      required
                    />
                  </div>

                  <div className="field-row">
                    <div className="label-with-brand">
                      <label>Card Number</label>
                      <span className="card-brand-tag">{getCardBrand(cardNumber)}</span>
                    </div>
                    <div className="input-with-card-icon">
                      <input
                        type="text"
                        className="gateway-input"
                        placeholder="4532 0000 0000 0000"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        maxLength={19}
                        required
                      />
                      <CreditCardIcon size={18} className="inner-card-icon" />
                    </div>
                  </div>

                  <div className="two-cols-row">
                    <div className="field-row">
                      <label>Expiry Date</label>
                      <input
                        type="text"
                        className="gateway-input"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={handleExpiryChange}
                        maxLength={5}
                        required
                      />
                    </div>

                    <div className="field-row">
                      <div className="label-with-brand">
                        <label>Security Code (CVV)</label>
                        <span className="cvv-help" title="3 digits on back of card">?</span>
                      </div>
                      <div className="input-with-card-icon">
                        <input
                          type="password"
                          className="gateway-input"
                          placeholder="•••"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.slice(0, 4))}
                          maxLength={4}
                          required
                        />
                        <LockIcon size={14} className="inner-card-icon" />
                      </div>
                    </div>
                  </div>

                  <div className="gateway-checkbox-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                      />
                      <span>Save card details for future repeat cleanings (encrypted token)</span>
                    </label>
                  </div>

                  <div className="gateway-checkbox-row">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={billingSame}
                        onChange={(e) => setBillingSame(e.target.checked)}
                      />
                      <span>Billing address is identical to service premises</span>
                    </label>
                  </div>
                </div>
              )}

              {paymentMethod === 'applepay' && (
                <div className="one-click-pay-box">
                  <div className="apple-pay-hero">
                    <span className="ap-icon">Pay</span>
                    <p>Instant checkout using Apple Pay or Google Pay. Touch ID or Face ID confirmation required.</p>
                  </div>
                  <div className="device-verified-pill">
                    <Check size={14} className="ap-check" />
                    <span>Device Authentication Ready · Direct Bank Tokenization</span>
                  </div>
                </div>
              )}

              {paymentMethod === 'bacs' && (
                <div className="bacs-fields-group">
                  <div className="field-row">
                    <label>Purchase Order (PO) Number</label>
                    <input
                      type="text"
                      className="gateway-input"
                      value={poNumber}
                      onChange={(e) => setPoNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="field-row">
                    <label>Registered Company VAT / Tax ID</label>
                    <input
                      type="text"
                      className="gateway-input"
                      value={vatNumber}
                      onChange={(e) => setVatNumber(e.target.value)}
                      required
                    />
                  </div>

                  <div className="bacs-info-box">
                    <p>
                      <strong>Net-30 Corporate Terms:</strong> An electronic VAT invoice will be issued to your corporate billing email with bank transfer details (Sort Code & Account Number).
                    </p>
                  </div>
                </div>
              )}

              {/* Processing Overlay inside Form */}
              {isProcessing ? (
                <div className="payment-processing-banner">
                  <div className="spinner-ring" />
                  <span className="proc-stage-text">{processStage}</span>
                </div>
              ) : (
                <button type="submit" className="authorize-pay-btn">
                  <LockIcon size={16} />
                  <span>
                    {paymentMethod === 'bacs'
                      ? 'Confirm & Issue Corporate Invoice'
                      : `Authorize Secure Payment of £${payableNow}.00`}
                  </span>
                </button>
              )}

              <div className="payment-guarantee-footer">
                <ShieldCheckIcon size={16} className="guar-icon" />
                <span>
                  Funds are held in client escrow and only released upon verified service completion.
                </span>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary Drawer */}
          <div className="gateway-summary-col">
            <div className="gateway-order-card">
              <span className="order-summary-tag">RESERVATION SUMMARY</span>
              <h4 className="order-service-name">{service}</h4>
              <p className="order-prop-name">{property}</p>

              <div className="order-meta-box">
                <div className="om-row">
                  <span className="om-lbl">Scheduled Date:</span>
                  <span className="om-val">{cleanDate}</span>
                </div>
                <div className="om-row">
                  <span className="om-lbl">Time Window:</span>
                  <span className="om-val">{timeSlot}</span>
                </div>
                <div className="om-row">
                  <span className="om-lbl">Service Address:</span>
                  <span className="om-val text-truncate">{address}</span>
                </div>
                <div className="om-row">
                  <span className="om-lbl">Account:</span>
                  <span className="om-val">{user?.email || 'alexander@lichtmarketing.co.uk'}</span>
                </div>
              </div>

              {addons.length > 0 && (
                <div className="order-addons-section">
                  <span className="addons-title">Selected Add-ons:</span>
                  <ul className="addons-mini-list">
                    {addons.map((item, idx) => (
                      <li key={idx}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="order-pricing-ledger">
                <div className="ledger-row">
                  <span>Base Scope Price:</span>
                  <span>£{orderData.basePrice || 240}.00</span>
                </div>
                <div className="ledger-row">
                  <span>Intensive Add-ons:</span>
                  <span>£{orderData.addonsTotal || 45}.00</span>
                </div>
                {paymentOption === 'full' && (
                  <div className="ledger-row discount-row">
                    <span>5% Upfront Settlement Saving:</span>
                    <span>-£{fullAmount - fullDiscountedAmount}.00</span>
                  </div>
                )}
                <div className="ledger-divider" />
                <div className="ledger-row ledger-total">
                  <span>Total Booking Value:</span>
                  <span className="total-val">£{paymentOption === 'full' ? fullDiscountedAmount : fullAmount}.00</span>
                </div>
                <div className="ledger-row ledger-due-now">
                  <span>Amount Due Now:</span>
                  <span className="due-val">£{payableNow}.00</span>
                </div>
                {paymentOption === 'deposit' && (
                  <div className="ledger-subnote">
                    Remaining £{balanceRemaining}.00 due on clean completion
                  </div>
                )}
              </div>

              <div className="escrow-badge-pill">
                <span className="escrow-dot">●</span>
                <span>Protected by LICHT Client Assurance Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* SUCCESSFUL TRANSACTION & RECEIPT SCREEN */
        <div className="payment-receipt-view">
          <div className="receipt-crest-wrap">
            <img src="/images/logo-crest.png" alt="LICHT Crest" className="receipt-crest-img" />
          </div>

          <div className="receipt-status-pill">
            <Check size={14} className="receipt-check" />
            <span>PAYMENT AUTHORIZED & RESERVATION CONFIRMED</span>
          </div>

          <h2 className="receipt-headline">Thank You for Your Payment</h2>
          <p className="receipt-subline">
            Your transaction has been securely processed. A verified confirmation and VAT invoice receipt have been sent to <strong>{user?.email || 'alexander@lichtmarketing.co.uk'}</strong>.
          </p>

          <div className="receipt-voucher-card">
            <div className="voucher-top-row">
              <div className="v-col">
                <span className="v-label">TRANSACTION REFERENCE</span>
                <span className="v-value gold-mono">{txnId}</span>
              </div>
              <div className="v-col">
                <span className="v-label">PAYMENT METHOD</span>
                <span className="v-value">
                  {paymentMethod === 'card' ? `Visa / Mastercard (•••• ${cardNumber.slice(-4)})` : paymentMethod === 'applepay' ? 'Apple Pay / Biometric' : 'BACS Corporate Invoice'}
                </span>
              </div>
              <div className="v-col">
                <span className="v-label">TOTAL PAID NOW</span>
                <span className="v-value gold-price">£{payableNow}.00</span>
              </div>
            </div>

            <div className="voucher-divider" />

            <div className="voucher-details-grid">
              <div className="vd-item">
                <span className="vd-lbl">Service:</span>
                <span className="vd-val">{service}</span>
              </div>
              <div className="vd-item">
                <span className="vd-lbl">Property Scope:</span>
                <span className="vd-val">{property}</span>
              </div>
              <div className="vd-item">
                <span className="vd-lbl">Scheduled Date:</span>
                <span className="vd-val">{cleanDate} · {timeSlot}</span>
              </div>
              <div className="vd-item">
                <span className="vd-lbl">Service Address:</span>
                <span className="vd-val">{address}</span>
              </div>
              {paymentOption === 'deposit' && (
                <div className="vd-item">
                  <span className="vd-lbl">Balance Outstanding:</span>
                  <span className="vd-val">£{balanceRemaining}.00 (due upon completion)</span>
                </div>
              )}
            </div>
          </div>

          <div className="receipt-action-buttons">
            <button 
              type="button" 
              className="receipt-btn-sec"
              onClick={() => window.print()}
            >
              <PrinterIcon size={16} />
              <span>Print Receipt</span>
            </button>

            <button 
              type="button" 
              className="receipt-btn-sec"
              onClick={() => alert(`Invoice ${txnId}.pdf download initialized.`)}
            >
              <DownloadIcon size={16} />
              <span>Download VAT Invoice</span>
            </button>

            <a href="/" className="receipt-btn-primary">
              <span>Return to Homepage</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
