import React, { useEffect } from 'react';
import './PaymentPage.css';
import { PaymentGateway } from '../components/payment/PaymentGateway';
import { useAuth } from '../context/AuthContext';
import { SectionBadge } from '../components/ui/SectionBadge';

export const PaymentPage = () => {
  const { user, bookingService } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sampleOrder = {
    serviceName: bookingService || 'Specialist / Deep Cleaning',
    propertyType: 'Executive Residential Residence',
    propertySize: '3-4 Bedroom Property',
    date: 'Thursday, 15 October 2026',
    timeSlot: 'Morning (08:00 - 12:00)',
    address: '42 Kensington Palace Gardens, London W8 4QP',
    selectedAddons: [
      'Oven & Extraction Hood Detailing (+£45)',
      'Carpet Hot Water Extraction (+£65)',
      'Bathroom Limescale Intensive Polish (+£40)'
    ],
    basePrice: 240,
    addonsTotal: 150,
    totalPrice: 390
  };

  return (
    <div className="payment-page-wrapper">
      <div className="container">
        <div className="payment-page-header">
          <SectionBadge text="SECURE FINANCIAL ESCROW" />
          <h1 className="payment-page-title">Payment Gateway & Checkout</h1>
          <p className="payment-page-subtitle">
            Authorize your deposit or settle your invoice through LICHT's 256-bit encrypted payment infrastructure. All client funds are held in secure escrow.
          </p>
        </div>

        <div className="payment-page-body">
          <PaymentGateway 
            orderData={sampleOrder} 
            user={user} 
          />
        </div>
      </div>
    </div>
  );
};
