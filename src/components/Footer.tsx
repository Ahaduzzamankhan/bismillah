import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer id="app-footer" className="bg-brand-green-dark text-white border-t border-brand-gold/40">
      
      {/* Upper geometric gold accent strip */}
      <div className="h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold opacity-80"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Col 1: Brand & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex flex-col group">
              <span className="font-display text-2xl font-bold tracking-widest text-brand-gold group-hover:text-brand-gold-light transition-colors">
                BISMILLAH
              </span>
              <span className="font-bangla text-xs tracking-wider font-semibold text-slate-300">
                বেরিয়ানী হাউস • Beriyani House
              </span>
            </Link>
            
            <p className="font-bilingual-body text-sm text-slate-300 leading-relaxed">
              {t('footer.tagline')}
            </p>

            {/* Social Links via Font Awesome */}
            <div className="flex space-x-3.5 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-brand-green border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center text-slate-200 hover:text-brand-gold hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f text-sm"></i>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-brand-green border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center text-slate-200 hover:text-brand-gold hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <i className="fa-brands fa-youtube text-sm"></i>
              </a>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-full bg-brand-green border border-brand-gold/30 hover:border-brand-gold flex items-center justify-center text-slate-200 hover:text-brand-gold hover:scale-110 transition-all duration-300"
                aria-label="TripAdvisor"
              >
                <i className="fa-solid fa-hotel text-xs"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-bilingual-title text-lg font-bold text-brand-gold tracking-wide border-b border-brand-gold/20 pb-2 flex items-center gap-2">
              <i className="fa-regular fa-clock text-xs"></i>
              <span>{t('about.hoursTitle')}</span>
            </h4>
            
            <ul className="space-y-2.5 font-bilingual-body text-sm text-slate-300">
              <li className="flex justify-between items-center border-b border-slate-800/50 pb-1">
                <span>{t('about.hoursWeekdays')}</span>
                <span className="font-mono text-brand-gold-light font-medium">{t('about.hoursWeekdaysTime')}</span>
              </li>
              <li className="flex justify-between items-center pb-1">
                <span>{t('about.hoursFriday')}</span>
                <span className="font-mono text-brand-gold-light font-medium">{t('about.hoursFridayTime')}</span>
              </li>
            </ul>

            <div className="bg-brand-green/30 p-3 rounded-lg border border-brand-gold/10 flex items-start space-x-2.5">
              <i className="fa-solid fa-circle-info text-brand-gold text-xs mt-0.5"></i>
              <span className="text-xs text-slate-300 leading-relaxed font-bilingual-body">
                {language === 'en' 
                  ? 'We also undertake catering for weddings, family parties, and corporate feasts in Jhalakathi district.' 
                  : 'আমরা ঝালকাঠি জেলা জুড়ে বিবাহ, পারিবারিক অনুষ্ঠান এবং কর্পোরেট পার্টির ক্যাটারিং অর্ডার নিয়ে থাকি।'}
              </span>
            </div>
          </div>

          {/* Col 3: Address & Phone details */}
          <div className="space-y-4">
            <h4 className="font-bilingual-title text-lg font-bold text-brand-gold tracking-wide border-b border-brand-gold/20 pb-2 flex items-center gap-2">
              <i className="fa-solid fa-location-dot text-xs"></i>
              <span>{t('contact.infoCard')}</span>
            </h4>
            
            <ul className="space-y-3 font-bilingual-body text-sm text-slate-300">
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-map-location-dot text-brand-gold mt-1 text-xs"></i>
                <span>{t('contact.addressDesc')}</span>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-square-phone text-brand-gold mt-1 text-xs"></i>
                <div className="flex flex-col">
                  <a href="tel:01711234567" className="hover:text-brand-gold transition-colors font-mono font-medium">+880 1711-234567</a>
                  <a href="tel:01912987654" className="hover:text-brand-gold transition-colors font-mono text-xs text-slate-400 mt-0.5 font-medium">+880 1912-987654</a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <i className="fa-solid fa-hashtag text-brand-gold mt-1 text-xs"></i>
                <span className="text-xs">
                  Plus Code: <strong className="font-mono text-brand-gold-light">J5RX+RHX</strong>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-center text-xs text-slate-400 font-bilingual-body flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Bismillah Beriyani House. {t('footer.rights')}</p>
          <p className="flex items-center gap-1 bg-brand-green/40 border border-brand-gold/10 px-2.5 py-1 rounded-full">
            <i className="fa-solid fa-globe text-[10px] text-brand-gold"></i>
            <span>{t('footer.bilingualNote')} • ঝালকাঠি, বাংলাদেশ</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
