import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { PaymentPage } from './pages/PaymentPage';
import { AuthModal } from './components/modals/AuthModal';
import { BookingModal } from './components/modals/BookingModal';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-root">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              {/* Fallback route */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />

          {/* Global Modals for Auth & Booking User Flow */}
          <AuthModal />
          <BookingModal />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
