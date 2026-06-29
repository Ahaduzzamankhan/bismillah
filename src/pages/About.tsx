import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  return (
    <div id="about-page" className="py-12 bg-slate-50 min-h-screen space-y-16">
      
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-green text-white py-14 sm:py-20 px-8 text-center shadow-xl">
          <div className="absolute inset-0 islamic-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/90 to-brand-green-dark"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-brand-gold uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2.5 font-bilingual-body">
              {t('about.subtitle')}
            </span>
            <h1 className="font-bilingual-title text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200">
              {t('about.title')}
            </h1>
            <div className="my-3.5 flex items-center justify-center w-36">
              <div className="h-[1px] bg-brand-gold/40 w-full"></div>
              <span className="mx-2 text-brand-gold text-xs">۞</span>
              <div className="h-[1px] bg-brand-gold/40 w-full"></div>
            </div>
            <p className="font-bilingual-body text-sm text-slate-300 leading-relaxed">
              {language === 'en' 
                ? 'Discover our heritage, recipe secrets, and culinary devotion to genuine Biriyani flavors.'
                : 'আমাদের বিরিয়ানির মোগলাই সুবাস, ঐতিহ্য এবং রান্নার আসল রন্ধনপ্রণালী জানুন।'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Restaurant Story Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Imagery Stack */}
          <div className="relative space-y-4">
            {/* Main high quality Biriyani photo representing kitchen heritage */}
            <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=600&auto=format&fit=crop" 
                alt="Bismillah kitchen" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-5 left-5 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold font-bilingual-body">
                  {language === 'en' ? 'Our Signature Dish' : 'আমাদের সিগনেচার কাচ্চি'}
                </span>
                <p className="font-display font-bold text-lg">Mutton Kacchi Handi</p>
              </div>
            </div>

            {/* Small decorative Badge */}
            <div className="absolute -top-6 -right-6 bg-brand-gold text-brand-green w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white select-none z-10 transform rotate-12 hidden sm:flex">
              <span className="font-sans font-extrabold text-xs">ESTD</span>
              <span className="font-mono font-black text-lg -mt-1">2018</span>
              <span className="text-[9px] uppercase tracking-wider font-semibold">Jhalakathi</span>
            </div>

            {/* Sub image cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=400&auto=format&fit=crop" 
                  alt="Delicious rice dishes" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-40 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=400&auto=format&fit=crop" 
                  alt="Rich Kababs cooked in clay oven" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Detailed Text Content */}
          <div className="space-y-6">
            <span className="text-brand-gold font-extrabold text-xs uppercase tracking-widest font-bilingual-body flex items-center gap-2">
              <i className="fa-solid fa-crown text-[10px]"></i>
              <span>{language === 'en' ? 'Our Culinary Heritage' : 'আমাদের রন্ধন ঐতিহ্য'}</span>
            </span>

            <h2 className="font-bilingual-title text-3xl font-extrabold text-brand-green">
              {t('about.storyHeading')}
            </h2>

            <div className="space-y-4 font-bilingual-body text-slate-600 text-sm sm:text-base leading-relaxed text-justify">
              <p>{t('about.storyP1')}</p>
              <p>{t('about.storyP2')}</p>
              <p>{t('about.storyP3')}</p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80">
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-brand-green font-mono">100%</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold font-bilingual-body uppercase">
                  {language === 'en' ? 'Halal Meat' : 'হালাল মাংস'}
                </span>
              </div>
              <div className="text-center border-x border-slate-200">
                <span className="block text-2xl font-extrabold text-brand-green font-mono">15+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold font-bilingual-body uppercase">
                  {language === 'en' ? 'Secret Spices' : 'গোপন মসলা'}
                </span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-extrabold text-brand-green font-mono">50k+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-semibold font-bilingual-body uppercase">
                  {language === 'en' ? 'Happy Feasts' : 'তৃপ্ত ভোজনরসিক'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Operational Info Section */}
      <section className="bg-gradient-to-b from-slate-100 to-slate-200/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: Opening Hours Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
              <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-brand-green/5 text-brand-gold flex items-center justify-center border border-brand-gold/20">
                  <i className="fa-regular fa-clock text-base"></i>
                </div>
                <div>
                  <h3 className="font-bilingual-title text-xl font-bold text-brand-green-dark">
                    {t('about.hoursTitle')}
                  </h3>
                  <span className="text-xs text-slate-400 font-semibold font-bilingual-body">
                    {language === 'en' ? 'Our service schedule' : 'আমাদের সেবার সময়সূচী'}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 font-bilingual-body text-slate-600">
                <li className="flex justify-between items-center border-b border-slate-50 pb-2">
                  <div className="flex items-center space-x-2.5">
                    <i className="fa-solid fa-calendar-days text-brand-gold text-xs"></i>
                    <span className="font-medium text-sm sm:text-base">{t('about.hoursWeekdays')}</span>
                  </div>
                  <span className="font-mono font-bold text-sm sm:text-base bg-brand-green/5 text-brand-green px-3 py-1 rounded-md">
                    {t('about.hoursWeekdaysTime')}
                  </span>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <div className="flex items-center space-x-2.5">
                    <i className="fa-solid fa-calendar-day text-brand-gold text-xs"></i>
                    <span className="font-medium text-sm sm:text-base">{t('about.hoursFriday')}</span>
                  </div>
                  <span className="font-mono font-bold text-sm sm:text-base bg-brand-green/5 text-brand-green px-3 py-1 rounded-md">
                    {t('about.hoursFridayTime')}
                  </span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-brand-gold/20 flex items-start space-x-3 text-slate-600">
                <i className="fa-solid fa-bell text-brand-gold text-xs mt-0.5"></i>
                <p className="text-xs font-bilingual-body leading-relaxed">
                  {language === 'en' 
                    ? 'Please Note: Special Kacchi Biriyani and Beef Tehari handis are prepared freshly twice a day (Noon & Evening). To secure warm servings, we recommend visiting during peak lunch (12:30 PM - 2:30 PM) or dinner hours (7:30 PM - 9:30 PM).' 
                    : 'বিশেষ দ্রষ্টব্য: আমাদের বিশেষ খাসির কাচ্চি এবং গরুর তেহারী দিনে দুইবার (দুপুর ও সন্ধ্যায়) তাজা দম দেয়া হয়। গরম গরম আসল স্বাদ পেতে দুপুর ১২:৩০ - ০২:৩০ অথবা সন্ধ্যা ০৭:৩০ - ০৯:৩০ এর মধ্যে আসার অনুরোধ করা হলো।'}
                </p>
              </div>
            </div>

            {/* Right: Apartment area & building Info */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 border-b border-slate-100 pb-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-brand-green/5 text-brand-gold flex items-center justify-center border border-brand-gold/20">
                    <i className="fa-solid fa-building text-base"></i>
                  </div>
                  <div>
                    <h3 className="font-bilingual-title text-xl font-bold text-brand-green-dark">
                      {language === 'en' ? 'Restaurant & Location Area' : 'রেস্তোরাঁ ও ভবন এলাকা'}
                    </h3>
                    <span className="text-xs text-slate-400 font-semibold font-bilingual-body">
                      {language === 'en' ? 'Our physical dining space' : 'আমাদের ডাইনিং হলের তথ্য'}
                    </span>
                  </div>
                </div>

                <div className="space-y-4 font-bilingual-body text-slate-600 text-sm sm:text-base leading-relaxed">
                  <p>
                    {language === 'en'
                      ? 'Bismillah Beriyani House is located within a premium, modern building block on Thana Road. The spacious dining layout covers a beautiful ground-floor facility with high ceilings and efficient ventilation, ensuring a comfortable experience for over 80 guests at once.'
                      : 'বিসমিল্লাহ বেরিয়ানী হাউস থানা রোডের একটি আধুনিক সুসজ্জিত ভবনে অবস্থিত। আমাদের ডাইনিং হলটি অত্যন্ত প্রশস্ত, পর্যাপ্ত আলো-বাতাস সম্পন্ন এবং একসাথে ৮০ জনেরও বেশি অতিথির স্বাচ্ছন্দ্যে বসে খাওয়ার উপযোগী করে তৈরি করা হয়েছে।'}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'en' ? 'Seating Capacity' : 'আসন সংখ্যা'}
                      </span>
                      <span className="font-bold text-brand-green font-mono text-base sm:text-lg">80+ Guests</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                        {language === 'en' ? 'Event Hall' : 'পারিবারিক পার্টি'}
                      </span>
                      <span className="font-bold text-brand-green font-bilingual-body text-sm sm:text-base">
                        {language === 'en' ? 'Available' : 'সুযোগ রয়েছে'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="tel:01711234567"
                  className="w-full py-3 bg-brand-green hover:bg-brand-green-light text-white hover:text-brand-gold font-bold rounded-xl text-center flex items-center justify-center space-x-2 transition-colors cursor-pointer text-sm font-bilingual-body"
                >
                  <i className="fa-solid fa-headset"></i>
                  <span>{language === 'en' ? 'Inquire About Event Bookings' : 'অনুষ্ঠান বুকিংয়ের জন্য কল করুন'}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
