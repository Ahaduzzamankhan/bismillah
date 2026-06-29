import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { language, t } = useLanguage();

  return (
    <div id="hero-section" className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-brand-green-dark">
      
      {/* 1. Islamic Geometric Pattern Layer */}
      <div className="absolute inset-0 islamic-pattern opacity-15"></div>
      
      {/* 2. Radial Gradient Overlay to darken the edges and highlight the center */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-green-dark via-brand-green/80 to-brand-green-dark/95"></div>
      
      {/* 3. Subtle Elegant Grid Overlay */}
      <div className="islamic-grid-overlay"></div>

      {/* 4. Large Glowing Rub el Hizb (8-pointed star) background motif */}
      <div className="absolute opacity-10 flex items-center justify-center pointer-events-none select-none">
        <svg 
          width="500" 
          height="500" 
          viewBox="0 0 100 100" 
          className="animate-[spin_120s_linear_infinite] text-brand-gold fill-none stroke-current" 
          strokeWidth="0.5"
        >
          {/* First square */}
          <rect x="25" y="25" width="50" height="50" transform="rotate(0 50 50)" />
          {/* Second square rotated 45 degrees */}
          <rect x="25" y="25" width="50" height="50" transform="rotate(45 50 50)" />
          {/* Inner concentric geometric circles */}
          <circle cx="50" cy="50" r="18" />
          <circle cx="50" cy="50" r="12" />
          <circle cx="50" cy="50" r="6" />
          {/* Radial lines from center */}
          <line x1="50" y1="5" x2="50" y2="95" />
          <line x1="5" y1="50" x2="95" y2="50" />
        </svg>
      </div>

      {/* 5. Main Content Container */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center z-10 flex flex-col items-center">
        
        {/* Islamic Crest Header Icon */}
        <div className="mb-6 flex items-center justify-center animate-bounce duration-[3000ms]">
          <div className="relative w-16 h-16 rounded-full border-2 border-brand-gold flex items-center justify-center bg-brand-green-dark/80 shadow-lg shadow-brand-gold/10">
            <i className="fa-solid fa-mosque text-brand-gold text-2xl"></i>
            {/* Outer rotating accent star */}
            <div className="absolute inset-0 border border-brand-gold/40 rounded-full animate-spin"></div>
          </div>
        </div>

        {/* English Name - Styled with Premium Serif font */}
        <h1 id="hero-title-en" className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-brand-gold-light">
          BISMILLAH
        </h1>
        
        <h2 id="hero-title-sub-en" className="font-display text-2xl sm:text-4xl md:text-5xl font-medium tracking-wide text-brand-gold mt-1">
          BERIYANI HOUSE
        </h2>

        {/* Bengali Name - Elegant display style */}
        <h3 id="hero-title-bn" className="font-bangla text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-4 tracking-wide drop-shadow-md">
          বিসমিল্লাহ বেরিয়ানী হাউস
        </h3>

        {/* Small Elegant Divider */}
        <div className="my-8 flex items-center justify-center w-64">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent w-full"></div>
          <span className="mx-3 text-brand-gold text-lg">۞</span>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent w-full"></div>
        </div>

        {/* Dynamic Tagline Based on Language Choice */}
        <p id="hero-tagline" className="font-bilingual-body text-lg sm:text-2xl font-light text-slate-100 max-w-2xl leading-relaxed">
          {t('hero.tagline')}
        </p>
        
        <p id="hero-tagline-sub" className="font-bilingual-body text-sm sm:text-base font-light text-slate-300 max-w-xl mt-3 leading-relaxed">
          {t('hero.taglineSub')}
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center w-full max-w-md">
          {/* Link to Menu Page */}
          <Link
            id="hero-cta-menu"
            to="/menu"
            className="w-full sm:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold rounded-lg shadow-xl shadow-brand-gold/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 text-center flex items-center justify-center space-x-2"
          >
            <i className="fa-solid fa-utensils"></i>
            <span className="font-bilingual-body tracking-wide">{t('hero.exploreMenu')}</span>
          </Link>

          {/* Quick Call Button */}
          <a
            id="hero-cta-call"
            href="tel:01711234567"
            className="w-full sm:w-auto px-8 py-4 bg-brand-green-dark border-2 border-brand-gold hover:border-brand-gold-light text-brand-gold hover:text-brand-gold-light font-bold rounded-lg transition-all duration-300 transform hover:-translate-y-1 text-center flex items-center justify-center space-x-2 cursor-pointer"
          >
            <i className="fa-solid fa-phone"></i>
            <span className="font-bilingual-body tracking-wide">{t('hero.bookTable')}</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-brand-gold/60 mb-1">
            {language === 'en' ? 'Scroll' : 'নিচে নামুন'}
          </span>
          <i className="fa-solid fa-chevron-down text-brand-gold text-xs"></i>
        </div>

      </div>
    </div>
  );
}
