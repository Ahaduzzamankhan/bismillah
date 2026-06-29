import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { language, t } = useLanguage();

  // Pick popular featured items
  const featuredItems = useMemo(() => {
    return menuItems.filter(item => item.isPopular).slice(0, 3);
  }, []);

  return (
    <div id="home-page" className="space-y-16 pb-16">
      
      {/* Full-Screen Hero */}
      <Hero />

      {/* Chef Specials Section */}
      <section id="featured-specials" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-bilingual-title text-3xl sm:text-4xl font-extrabold text-brand-green tracking-wide">
            {t('home.featuredTitle')}
          </h2>
          
          <div className="flex items-center justify-center my-3.5">
            <div className="h-[1px] bg-brand-gold/50 w-12"></div>
            <i className="fa-solid fa-medal text-brand-gold mx-2.5 text-xs"></i>
            <div className="h-[1px] bg-brand-gold/50 w-12"></div>
          </div>

          <p className="font-bilingual-body text-slate-500 text-sm sm:text-base leading-relaxed">
            {t('home.featuredSubtitle')}
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              // Home page directs users to the filterable Menu page to start an order sheet
            />
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-12">
          <Link
            id="view-full-menu-btn-home"
            to="/menu"
            className="inline-flex items-center space-x-2 px-8 py-3.5 bg-brand-green hover:bg-brand-green-light text-brand-gold hover:text-white font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <i className="fa-solid fa-utensils"></i>
            <span className="font-bilingual-body tracking-wider">{t('hero.exploreMenu')}</span>
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="bg-gradient-to-b from-slate-50 to-slate-100 py-16 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-bilingual-title text-3xl sm:text-4xl font-extrabold text-brand-green tracking-wide">
              {t('home.whyChooseUs')}
            </h2>
            
            <div className="flex items-center justify-center my-3.5">
              <div className="h-[1px] bg-brand-gold/50 w-12"></div>
              <span className="text-brand-gold mx-2.5 text-sm">۞</span>
              <div className="h-[1px] bg-brand-gold/50 w-12"></div>
            </div>

            <p className="font-bilingual-body text-slate-500 text-sm sm:text-base leading-relaxed">
              {t('home.whyChooseUsSub')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/40 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-gold flex items-center justify-center mb-5 border border-brand-gold/20 shadow-inner">
                <i className="fa-solid fa-scroll text-xl"></i>
              </div>
              <h3 className="font-bilingual-title text-lg font-bold text-brand-green-dark mb-2.5">
                {t('home.reason1Title')}
              </h3>
              <p className="font-bilingual-body text-sm text-slate-500 leading-relaxed">
                {t('home.reason1Desc')}
              </p>
            </div>

            {/* Reason 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/40 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-gold flex items-center justify-center mb-5 border border-brand-gold/20 shadow-inner">
                <i className="fa-solid fa-jar-wheat text-xl"></i>
              </div>
              <h3 className="font-bilingual-title text-lg font-bold text-brand-green-dark mb-2.5">
                {t('home.reason2Title')}
              </h3>
              <p className="font-bilingual-body text-sm text-slate-500 leading-relaxed">
                {t('home.reason2Desc')}
              </p>
            </div>

            {/* Reason 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/40 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-brand-green/5 text-brand-gold flex items-center justify-center mb-5 border border-brand-gold/20 shadow-inner">
                <i className="fa-solid fa-cow text-xl"></i>
              </div>
              <h3 className="font-bilingual-title text-lg font-bold text-brand-green-dark mb-2.5">
                {t('home.reason3Title')}
              </h3>
              <p className="font-bilingual-body text-sm text-slate-500 leading-relaxed">
                {t('home.reason3Desc')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Call to Order Banner */}
      <section id="banner-cta" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-green text-white p-8 sm:p-12 md:p-16 shadow-2xl">
          
          {/* Islamic Background Design */}
          <div className="absolute inset-0 islamic-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-green via-brand-green-dark/95 to-brand-green"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <span className="text-brand-gold uppercase tracking-widest font-extrabold text-[11px] sm:text-xs mb-3 flex items-center gap-1.5 font-bilingual-body">
              <i className="fa-solid fa-star"></i>
              {language === 'en' ? 'Freshly Prepared Food Daily' : 'প্রতিদিন তৈরি তাজা খাবার'}
              <i className="fa-solid fa-star"></i>
            </span>

            <h3 className="font-bilingual-title text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200 leading-tight">
              {language === 'en' 
                ? 'Ready to Savor Jhalakathi’s Finest Biriyani?' 
                : 'ঝালকাঠির সেরা মোগলাই বিরিয়ানি খেতে প্রস্তুত?'}
            </h3>

            <p className="font-bilingual-body text-sm sm:text-base text-slate-200 mt-4 leading-relaxed max-w-xl">
              {language === 'en'
                ? 'We start preparation early to deliver deep traditional wood-fired flavors. Browse the menu, add your favorites to the order summary, and dial our delivery line.'
                : 'গভীর মোগলাই সুবাস পরিবেশনের জন্য আমরা ভোরবেলা থেকেই প্রস্তুতি শুরু করি। আপনার পছন্দের বিরিয়ানি বা কাবাব অর্ডার দিতে এখনই আমাদের নাম্বারে কল করুন।'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <a
                href="tel:01711234567"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold rounded-lg shadow-lg flex items-center justify-center space-x-2.5 transition-all duration-300 hover:scale-105"
              >
                <i className="fa-solid fa-phone-volume text-lg animate-pulse"></i>
                <span className="font-bilingual-body text-sm">{t('menu.placeOrderPhone')}</span>
              </a>

              <Link
                to="/menu"
                className="w-full sm:w-auto px-8 py-3.5 bg-brand-green-dark/40 hover:bg-brand-green-dark/80 border border-brand-gold/40 hover:border-brand-gold text-brand-gold font-bold rounded-lg transition-colors text-center text-sm font-bilingual-body"
              >
                {t('hero.exploreMenu')}
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
