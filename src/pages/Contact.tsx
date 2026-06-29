import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert(language === 'en' ? 'Please fill out all required fields (*).' : 'অনুগ্রহ করে সব প্রয়োজনীয় ঘরগুলো (*) পূরণ করুন।');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request to server-side endpoint
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      // reset success screen after some time
      setTimeout(() => setIsSuccess(false), 8000);
    }, 1500);
  };

  return (
    <div id="contact-page" className="py-12 bg-slate-50 min-h-screen space-y-12">
      
      {/* 1. Header Hero Panel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-brand-green text-white py-14 sm:py-20 px-8 text-center shadow-xl">
          <div className="absolute inset-0 islamic-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/90 to-brand-green-dark"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-brand-gold uppercase tracking-widest text-[11px] sm:text-xs font-bold mb-2.5 font-bilingual-body">
              {t('contact.subtitle')}
            </span>
            <h1 className="font-bilingual-title text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-200">
              {t('contact.title')}
            </h1>
            <div className="my-3.5 flex items-center justify-center w-36">
              <div className="h-[1px] bg-brand-gold/40 w-full"></div>
              <span className="mx-2 text-brand-gold text-xs">۞</span>
              <div className="h-[1px] bg-brand-gold/40 w-full"></div>
            </div>
            <p className="font-bilingual-body text-sm text-slate-300 leading-relaxed">
              {language === 'en'
                ? 'Find us on Thana Road, Jhalakathi. Dial our delivery lines or drop us a message below.'
                : 'আমাদের থানা রোডের ঠিকানায় চলে আসুন, সরাসরি কল করুন অথবা নিচের ফর্মে যেকোনো বার্তা লিখে পাঠান।'}
            </p>
          </div>
        </div>
      </div>

      {/* 2. Content Grid (Info & Interactive Form) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Info Panels) - Span 5 */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Restaurant details card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <h3 className="font-bilingual-title text-xl font-bold text-brand-green-dark border-b border-slate-100 pb-3 mb-6 flex items-center gap-2.5">
                <i className="fa-solid fa-hotel text-brand-gold text-base"></i>
                <span>{t('contact.infoCard')}</span>
              </h3>

              <div className="space-y-6">
                {/* Address Row */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-gold flex items-center justify-center border border-brand-gold/20 flex-shrink-0">
                    <i className="fa-solid fa-map-location-dot"></i>
                  </div>
                  <div>
                    <h4 className="font-bilingual-title text-sm font-bold text-slate-400 uppercase tracking-wider">
                      {t('contact.addressTitle')}
                    </h4>
                    <p className="font-bilingual-body text-base font-medium text-slate-700 mt-1 leading-relaxed">
                      {t('contact.addressDesc')}
                    </p>
                  </div>
                </div>

                {/* Google Maps Plus Code */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-gold flex items-center justify-center border border-brand-gold/20 flex-shrink-0">
                    <i className="fa-solid fa-location-crosshairs"></i>
                  </div>
                  <div>
                    <h4 className="font-bilingual-title text-sm font-bold text-slate-400 uppercase tracking-wider">
                      {t('contact.plusCodeTitle')}
                    </h4>
                    <p className="font-mono text-base font-bold text-brand-green mt-1">
                      {t('contact.plusCodeDesc')}
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/5 text-brand-gold flex items-center justify-center border border-brand-gold/20 flex-shrink-0">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <h4 className="font-bilingual-title text-sm font-bold text-slate-400 uppercase tracking-wider">
                      {t('contact.phoneTitle')}
                    </h4>
                    <div className="mt-1 flex flex-col space-y-1 font-mono text-base font-bold text-slate-700">
                      <a href="tel:01711234567" className="hover:text-brand-gold transition-colors flex items-center gap-1.5">
                        <span>{t('contact.phoneDesc1')}</span>
                      </a>
                      <a href="tel:01912987654" className="hover:text-brand-gold transition-colors flex items-center gap-1.5 text-slate-500 text-sm">
                        <span>{t('contact.phoneDesc2')}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Order Hotline CTA banner */}
            <div className="bg-gradient-to-r from-brand-green-dark to-brand-green text-white rounded-2xl p-6 sm:p-8 shadow-md border-b-4 border-brand-gold relative overflow-hidden">
              <div className="absolute inset-0 islamic-pattern opacity-5"></div>
              <div className="relative z-10 space-y-3.5">
                <h4 className="font-bilingual-title text-lg font-bold text-brand-gold tracking-wide">
                  {language === 'en' ? 'Direct Hotline Delivery' : 'সরাসরি হটলাইন ডেলিভারি'}
                </h4>
                <p className="font-bilingual-body text-xs text-slate-200 leading-relaxed">
                  {language === 'en'
                    ? 'No delay, no third-party hassle. Call us, order warm Biriyani, and we deliver in Jhalakathi town.'
                    : 'কোনো বিলম্ব বা থার্ড-পার্টি ঝামেলা নেই। কল করে গরম গরম বিরিয়ানি অর্ডার করুন, আমাদের নিজস্ব টিম পৌঁছে দেবে।'}
                </p>
                <a
                  href="tel:01711234567"
                  className="inline-flex items-center space-x-2 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold px-5 py-2.5 rounded-lg shadow transition-colors"
                >
                  <i className="fa-solid fa-phone"></i>
                  <span className="font-bilingual-body text-xs">{t('nav.orderNow')}</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column (Map & Form) - Span 7 */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Interactive Feedback Form */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-bilingual-title text-xl font-bold text-brand-green-dark">
                  {t('contact.formTitle')}
                </h3>
                <p className="font-bilingual-body text-xs text-slate-400 mt-1 leading-relaxed">
                  {t('contact.formSub')}
                </p>
              </div>

              {isSuccess ? (
                <div id="contact-form-success" className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200/60 text-emerald-800 flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                    <i className="fa-solid fa-circle-check text-2xl text-emerald-600"></i>
                  </div>
                  <h4 className="font-bilingual-title text-lg font-bold">
                    {language === 'en' ? 'Message Sent Successfully!' : 'বার্তাটি সফলভাবে পাঠানো হয়েছে!'}
                  </h4>
                  <p className="font-bilingual-body text-sm text-emerald-600 max-w-sm mt-1.5 leading-relaxed">
                    {t('contact.formSuccess')}
                  </p>
                </div>
              ) : (
                <form id="contact-feedback-form" onSubmit={handleSubmit} className="space-y-4 font-bilingual-body">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t('contact.formName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
                      />
                    </div>

                    {/* Email input (optional) */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {t('contact.formEmail')}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-phone" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t('contact.formPhone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 017XXXXXXXX"
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {t('contact.formMessage')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-green hover:bg-brand-green-light disabled:bg-slate-400 text-white hover:text-brand-gold font-bold rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer text-sm font-semibold uppercase tracking-wider"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-circle-notch animate-spin"></i>
                        <span>{language === 'en' ? 'Sending...' : 'পাঠানো হচ্ছে...'}</span>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-paper-plane"></i>
                        <span>{t('contact.formSubmit')}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps embed wrapper */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md h-96 relative">
              <iframe
                id="google-maps-embed-iframe"
                src="https://maps.google.com/maps?q=J5RX+RHX,%20Thana%20Road,%20Jhalakathi%208400,%20Bangladesh&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Bismillah Beriyani House Location Map on Google Maps"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              {/* Maps Overlay Tag */}
              <div className="absolute top-4 left-4 bg-brand-green-dark/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md flex items-center gap-1.5 border border-brand-gold/30">
                <i className="fa-solid fa-location-dot text-brand-gold"></i>
                <span className="font-bilingual-body text-[11px] font-medium">J5RX+RHX, Thana Road, Jhalakathi</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
