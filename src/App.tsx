import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Portfolio from './components/Portfolio';
import Branches from './components/Branches';
import ServiceAreas from './components/ServiceAreas';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="min-h-screen font-sans selection:bg-forest-green/10 selection:text-forest-green">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <Portfolio />
        <Partners />
        <Branches />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
