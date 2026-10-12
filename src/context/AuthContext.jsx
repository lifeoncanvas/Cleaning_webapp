import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingService, setBookingService] = useState('Specialist / Deep Cleaning');
  const [intendedAction, setIntendedAction] = useState(null);

  // Check persisted login session
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('licht_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (e) {
      console.error('Failed to load user session', e);
    }
  }, []);

  const login = (userData) => {
    const defaultUser = {
      name: userData?.name || 'Alexander Wright',
      email: userData?.email || 'alexander@lichtmarketing.co.uk',
      phone: userData?.phone || '+44 7911 123456',
      company: userData?.company || 'Wright & Co Properties',
      role: 'Client'
    };
    setUser(defaultUser);
    try {
      localStorage.setItem('licht_user', JSON.stringify(defaultUser));
    } catch (e) {
      console.error('Failed to persist user session', e);
    }

    // If login was triggered by booking intent, seamlessly transition to booking flow
    if (intendedAction === 'booking') {
      setIsAuthModalOpen(false);
      setIsBookingModalOpen(true);
      setIntendedAction(null);
    } else {
      setIsAuthModalOpen(false);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem('licht_user');
    } catch (e) {
      console.error('Failed to clear user session', e);
    }
  };

  // Trigger booking flow: prompts to login first if not authenticated!
  const openBookingFlow = (serviceName = 'Specialist / Deep Cleaning') => {
    setBookingService(serviceName);
    if (!user) {
      // User is not logged on -> prompt to login first!
      setIntendedAction('booking');
      setIsAuthModalOpen(true);
    } else {
      // User is already logged on -> open booking flow directly!
      setIsBookingModalOpen(true);
    }
  };

  const openAuthModal = () => {
    setIntendedAction(null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setIntendedAction(null);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn: !!user,
        login,
        logout,
        isAuthModalOpen,
        isBookingModalOpen,
        bookingService,
        setBookingService,
        openBookingFlow,
        openAuthModal,
        closeAuthModal,
        closeBookingModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
