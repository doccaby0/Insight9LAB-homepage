import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.programs'), href: '#portfolio' },
    { name: t('nav.partners'), href: '#partners' },
    { name: t('nav.branches'), href: '#branches' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-forest-green rounded-full flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">I9L</span>
          </div>
          <span className={`text-xl font-serif font-semibold tracking-tight ${isScrolled ? 'text-forest-green' : 'text-zinc-900'}`}>
            {t('nav.brand')}
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-forest-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-200 text-xs font-bold text-zinc-600 hover:bg-zinc-50 hover:text-forest-green transition-all"
          >
            <Globe size={12} />
            {i18n.language === 'ko' ? 'ENGLISH' : '한국어'}
          </button>

          <a
            href="tel:010-6400-0924"
            className="flex items-center gap-2 bg-forest-green text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-forest-deep transition-all hover:shadow-lg"
          >
            <Phone size={14} />
            010-6400-0924
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-lg border border-zinc-200 text-[10px] font-bold text-zinc-600"
          >
            <Globe size={12} />
            {i18n.language === 'ko' ? 'EN' : 'KO'}
          </button>
          <button
            className="text-zinc-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-zinc-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-zinc-800 hover:text-forest-green"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:010-6400-0924"
                className="flex items-center justify-center gap-2 bg-forest-green text-white py-4 rounded-xl text-lg font-medium"
              >
                <Phone size={18} />
                {t('nav.call')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
