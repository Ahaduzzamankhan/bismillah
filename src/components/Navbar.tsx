import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
  };

  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/menu', labelKey: 'nav.menu' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/contact', labelKey: 'nav.contact' }
  ];

  return (
    <nav id="app-navbar" className="sticky top-0 z-50 bg-brand-green text-white border-b border-brand-gold shadow-lg backdrop-blur-md">
      {/* Decorative Islamic Border Pattern */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <NavLink id="nav-logo" to="/" className="flex flex-col flex-shrink-0 group">
            <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-brand-gold group-hover:text-brand-gold-light transition-colors duration-300">
              BISMILLAH
            </span>
            <span className="font-bangla text-xs sm:text-sm tracking-wide -mt-1 font-medium text-slate-200">
              বেরিয়ানী হাউস • Beriyani House
            </span>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink
                id={`desktop-nav-${item.path.replace('/', 'home')}`}
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `font-bilingual-body text-[15px] font-medium py-2 px-3 rounded-md border-b-2 transition-all duration-300 ${
                    isActive
                      ? 'text-brand-gold border-brand-gold bg-brand-green-dark/30'
                      : 'text-slate-100 border-transparent hover:text-brand-gold hover:border-brand-gold-light'
                  }`
                }
              >
                {t(item.labelKey)}
              </NavLink>
            ))}
          </div>

          {/* Right Action Utilities (Language switcher & Quick Call) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggler */}
            <button
              id="lang-toggler-desktop"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1.5 border border-brand-gold/50 rounded-full text-xs font-semibold tracking-wider hover:bg-brand-gold hover:text-brand-green hover:border-brand-gold transition-all duration-300 cursor-pointer"
              title={language === 'en' ? 'বাংলা সংস্করণ দেখুন' : 'Switch to English version'}
            >
              <i className="fa-solid fa-globe text-brand-gold group-hover:text-inherit"></i>
              <span>{language === 'en' ? 'বাংলা' : 'ENGLISH'}</span>
            </button>

            {/* Call To Action Button */}
            <a
              id="cta-call-desktop"
              href="tel:01711234567"
              className="flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold px-4 py-2.5 rounded-md shadow-md transition-all duration-300 hover:scale-105"
            >
              <i className="fa-solid fa-phone"></i>
              <span className="font-bilingual-body text-sm font-semibold">{t('nav.orderNow')}</span>
            </a>
          </div>

          {/* Mobile Hamburguer and Language switch */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile Quick Language Toggle */}
            <button
              id="lang-toggler-mobile"
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 px-2.5 py-1 border border-brand-gold/40 rounded-full text-xs font-medium bg-brand-green-dark/50"
            >
              <i className="fa-solid fa-globe text-brand-gold text-[10px]"></i>
              <span className="text-[11px]">{language === 'en' ? 'বাং' : 'EN'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:text-brand-gold hover:bg-brand-green-dark focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-gold transition-colors duration-200 cursor-pointer"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <i className="fa-solid fa-xmark text-xl w-6 h-6 flex items-center justify-center"></i>
              ) : (
                <i className="fa-solid fa-bars text-xl w-6 h-6 flex items-center justify-center"></i>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        id="mobile-nav-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-green-dark border-b border-brand-gold/30 ${
          isOpen ? 'max-h-80 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              id={`mobile-nav-${item.path.replace('/', 'home')}`}
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block font-bilingual-body py-2 px-4 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'text-brand-gold bg-brand-green/50 border-l-4 border-brand-gold'
                    : 'text-slate-200 hover:bg-brand-green/30 hover:text-brand-gold'
                }`
              }
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          
          <div className="pt-4 border-t border-brand-gold/20 flex flex-col space-y-3 px-4">
            <a
              id="cta-call-mobile"
              href="tel:01711234567"
              className="flex items-center justify-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold py-2.5 rounded-md shadow-md text-center transition-all duration-200"
            >
              <i className="fa-solid fa-phone"></i>
              <span className="font-bilingual-body text-sm font-semibold">{t('nav.orderNow')} ({language === 'en' ? 'Call' : 'কল করুন'})</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
