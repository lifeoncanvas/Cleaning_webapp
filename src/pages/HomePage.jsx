import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustSection } from '../components/sections/TrustSection';
import { Spaces } from '../components/sections/Spaces';
import { Services } from '../components/sections/Services';
import { WhyChoose } from '../components/sections/WhyChoose';
import { Compliance } from '../components/sections/Compliance';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Sectors } from '../components/sections/Sectors';
import { OneOffVsRegular } from '../components/sections/OneOffVsRegular';
import { About } from '../components/sections/About';
import { Contracts } from '../components/sections/Contracts';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { QuoteForm } from '../components/sections/QuoteForm';
import { ContactSection } from '../components/sections/ContactSection';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustSection />
      <Spaces />
      <Services />
      <WhyChoose />
      <Compliance />
      <HowItWorks />
      <Sectors />
      <OneOffVsRegular />
      <About />
      <Contracts />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <ContactSection />
    </>
  );
};
