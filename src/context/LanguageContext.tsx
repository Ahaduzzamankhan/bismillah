import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'bn';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav Items
    'nav.home': 'Home',
    'nav.menu': 'Menu',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.orderNow': 'Order Now',
    
    // Hero Section
    'hero.tagline': 'Experience the Authentic Taste of Shahi Biriyani in Jhalakathi',
    'hero.taglineSub': 'We serve the finest traditional kacchi, tehari, and delectable sides made with pure ingredients and traditional recipes.',
    'hero.exploreMenu': 'Explore Our Menu',
    'hero.bookTable': 'Call to Order',

    // Featured Section
    'home.featuredTitle': 'Our Chef Specials',
    'home.featuredSubtitle': 'Most ordered traditional delicacies loved by the locals of Jhalakathi.',
    'home.whyChooseUs': 'Why Bismillah Beriyani House?',
    'home.whyChooseUsSub': 'The secret of our legendary taste lies in our commitment to pure ingredients and traditional cooking.',
    'home.reason1Title': 'Authentic Traditional Recipe',
    'home.reason1Desc': 'Our master chef uses heritage recipes passed down through generations, utilizing local spices.',
    'home.reason2Title': 'Pure Mustard Oil & Ghee',
    'home.reason2Desc': 'No compromised flavor. We cook with 100% pure mustard oil and authentic dairy ghee.',
    'home.reason3Title': 'Fresh Tender Meat',
    'home.reason3Desc': 'Locally sourced fresh halal meat, tenderly slow-cooked to melt in your mouth.',

    // Menu Section
    'menu.title': 'Our Special Menu',
    'menu.subtitle': 'Bismillah Beriyani House brings you a royal feast. Filter by category to discover your favorite dishes.',
    'menu.all': 'All Items',
    'menu.biriyani': 'Biriyani',
    'menu.sides': 'Kabab & Sides',
    'menu.drinks': 'Dessert & Drinks',
    'menu.popular': 'Popular',
    'menu.priceUnit': '৳',
    'menu.addToCart': 'Add to Order Sheet',
    'menu.cartTitle': 'Your Order Summary',
    'menu.cartDesc': 'Selected items. You can call us to place your order.',
    'menu.cartEmpty': 'Your order sheet is empty. Add some delicacies!',
    'menu.placeOrderPhone': 'Call to Order: 01711-234567', // realistic contact info for Jhalakathi
    'menu.totalPrice': 'Total Price',
    'menu.copyOrder': 'Copy Order Summary',
    'menu.orderCopied': 'Order summary copied! Paste in messenger/SMS or read it over the phone.',

    // About Section
    'about.title': 'Our Story',
    'about.subtitle': 'Heritage, Passion, and Authentic Taste',
    'about.storyHeading': 'Bismillah Beriyani House (বিসমিল্লাহ বেরিয়ানী হাউস)',
    'about.storyP1': 'Located in the heart of Jhalakathi at Thana Road, Bismillah Beriyani House has been a staple for food lovers who crave authentic Bengali and Mughal flavors. What started as a passion for serving the perfect plate of Biriyani has become Jhalakathi\'s most trusted culinary landmark.',
    'about.storyP2': 'Our signature Shahi Mutton Kacchi is prepared daily under the strict supervision of our Ustad (Head Chef). We slow-cook our food in heavy handis to seal in the aromas of home-ground spices, pure ghee, and fresh meats. Each plate is a celebration of texture and scent.',
    'about.storyP3': 'Our building space is spacious, welcoming, and perfect for family gatherings, group feasts, and quick lunches. We take pride in hygiene, prompt service, and maintaining the exact same mouthwatering taste every single day.',
    'about.hoursTitle': 'Opening Hours',
    'about.hoursWeekdays': 'Saturday - Thursday',
    'about.hoursWeekdaysTime': '11:30 AM - 11:00 PM',
    'about.hoursFriday': 'Friday',
    'about.hoursFridayTime': '02:00 PM - 11:30 PM',

    // Contact Section
    'contact.title': 'Contact & Location',
    'contact.subtitle': 'Visit us or order to your doorstep in Jhalakathi',
    'contact.infoCard': 'Restaurant Info',
    'contact.addressTitle': 'Our Address',
    'contact.addressDesc': 'J5RX+RHX, Thana Road, Jhalakathi 8400, Bangladesh',
    'contact.plusCodeTitle': 'Google Maps Plus Code',
    'contact.plusCodeDesc': 'J5RX+RHX (Search this code directly on Google Maps)',
    'contact.phoneTitle': 'Phone Numbers',
    'contact.phoneDesc1': '+880 1711-234567 (Hotline)',
    'contact.phoneDesc2': '+880 1912-987654 (Order Support)',
    'contact.formTitle': 'Send Us a Message',
    'contact.formSub': 'Have feedback, catering inquiries, or bulk orders? Fill out the form below.',
    'contact.formName': 'Full Name',
    'contact.formEmail': 'Email Address',
    'contact.formPhone': 'Phone Number',
    'contact.formMessage': 'Your Message / Inquiry',
    'contact.formSubmit': 'Send Message',
    'contact.formSuccess': 'Thank you! Your message has been sent successfully. We will contact you soon.',

    // Footer
    'footer.tagline': 'The ultimate destination for traditional Biriyani in Jhalakathi. Sourced locally, cooked traditionally, served with love.',
    'footer.rights': 'All Rights Reserved.',
    'footer.bilingualNote': 'Showing English content'
  },
  bn: {
    // Nav Items
    'nav.home': 'হোম',
    'nav.menu': 'মেনু',
    'nav.about': 'আমাদের সম্পর্কে',
    'nav.contact': 'যোগাযোগ',
    'nav.orderNow': 'অর্ডার করুন',
    
    // Hero Section
    'hero.tagline': 'ঝালকাঠিতে ঐতিহ্যবাহী শাহী বিরিয়ানির আসল স্বাদ',
    'hero.taglineSub': 'আমরা পরিবেশন করি ঝালকাঠির সেরা ঐতিহ্যবাহী কাচ্চি, তেহারী এবং মুখরোচক কাবাব ও পানীয় যা তৈরি হয় শতভাগ খাঁটি উপাদান ও আসল রেসিপিতে।',
    'hero.exploreMenu': 'মেনু দেখুন',
    'hero.bookTable': 'অর্ডার করতে কল করুন',

    // Featured Section
    'home.featuredTitle': 'আমাদের বিশেষ আয়োজন',
    'home.featuredSubtitle': 'ঝালকাঠির ভোজনরসিকদের সবচেয়ে পছন্দের এবং সর্বাধিক অর্ডার করা খাবারসমূহ।',
    'home.whyChooseUs': 'কেন বিসমিল্লাহ বেরিয়ানী হাউস?',
    'home.whyChooseUsSub': 'আমাদের খাবারের চমৎকার স্বাদের রহস্য লুকিয়ে আছে শতভাগ খাঁটি উপাদানের ব্যবহার এবং ঐতিহ্যবাহী রান্নার কৌশলে।',
    'home.reason1Title': 'খাঁটি ঐতিহ্যবাহী রেসিপি',
    'home.reason1Desc': 'আমাদের অভিজ্ঞ বাবুর্চিরা প্রজন্ম থেকে প্রজন্মে চলে আসা ঐতিহ্যবাহী রেসিপি ও নিজস্ব মসলায় খাবার প্রস্তুত করেন।',
    'home.reason2Title': 'খাঁটি সরিষার তেল ও ঘি',
    'home.reason2Desc': 'স্বাদ ও সুবাসে কোনো আপস নেই। আমরা রান্নায় ব্যবহার করি ১০০% খাঁটি সরিষার তেল এবং সুগন্ধি গাওয়া ঘি।',
    'home.reason3Title': 'টাটকা ও নরম মাংস',
    'home.reason3Desc': 'স্থানীয় বাজার থেকে সংগৃহীত প্রতিদিনের টাটকা হালাল মাংস, যা দীর্ঘ সময় ঢিমে আঁচে রান্না করায় তুলতুলে নরম হয়।',

    // Menu Section
    'menu.title': 'আমাদের স্পেশাল মেনু',
    'menu.subtitle': 'বিসমিল্লাহ বেরিয়ানী হাউস নিয়ে এসেছে স্বাদের শাহী উৎসব। আপনার পছন্দের ক্যাটাগরি অনুযায়ী খাবার বেছে নিন।',
    'menu.all': 'সব খাবার',
    'menu.biriyani': 'বিরিয়ানি',
    'menu.sides': 'কাবাব ও সাইডস',
    'menu.drinks': 'ডেজার্ট ও ড্রিংকস',
    'menu.popular': 'জনপ্রিয়',
    'menu.priceUnit': '৳',
    'menu.addToCart': 'অর্ডার শিটে যোগ করুন',
    'menu.cartTitle': 'আপনার অর্ডার সামারি',
    'menu.cartDesc': 'নির্বাচিত আইটেমসমূহ। অর্ডার সম্পন্ন করতে আমাদের কল করুন।',
    'menu.cartEmpty': 'আপনার অর্ডার শিট খালি আছে। পছন্দের খাবার যোগ করুন!',
    'menu.placeOrderPhone': 'অর্ডার করুন: ০১৭১১-২৩৪৫৬৭',
    'menu.totalPrice': 'মোট মূল্য',
    'menu.copyOrder': 'অর্ডার কপি করুন',
    'menu.orderCopied': 'অর্ডার বিবরণী কপি হয়েছে! এসএমএস বা মেসেঞ্জারে পাঠিয়ে অর্ডার করুন অথবা ফোনে আমাদের জানান।',

    // About Section
    'about.title': 'আমাদের ইতিহাস',
    'about.subtitle': 'ঐতিহ্য, ভালোবাসা ও খাঁটি স্বাদ',
    'about.storyHeading': 'বিসমিল্লাহ বেরিয়ানী হাউস',
    'about.storyP1': 'ঝালকাঠির প্রাণকেন্দ্র থানা রোডে অবস্থিত বিসমিল্লাহ বেরিয়ানী হাউস দীর্ঘ সময় ধরে ভোজনরসিকদের মুখে ঐতিহ্যবাহী বাঙালি ও মোগলাই স্বাদ তুলে দিচ্ছে। চমৎকার বিরিয়ানি পরিবেশনের আবেগ নিয়ে শুরু হওয়া এই রেস্তোরাঁটি আজ ঝালকাঠির অন্যতম বিশ্বস্ত খাবারের ঠিকানা।',
    'about.storyP2': 'আমাদের সিগনেচার শাহী খাসির কাচ্চি প্রতিদিন প্রধান বাবুর্চির সরাসরি তত্ত্বাবধানে তৈরি হয়। নিজস্ব মসলাপাতি, খাঁটি ঘি এবং তাজা মাংসের নির্যাস অক্ষুণ্ণ রাখতে আমরা ভারী ডেকচিতে দম পদ্ধতিতে রান্না করি। প্রতিটি প্লেট যেন স্বাদের উৎসব।',
    'about.storyP3': 'আমাদের বসার জায়গাটি ছিমছাম, সুন্দর ও পরিবার পরিজন নিয়ে খাওয়াদাওয়ার জন্য একদম উপযুক্ত। আমরা পরিষ্কার-পরিচ্ছন্নতা, দ্রুত সেবা এবং প্রতিদিন একই অসাধারণ স্বাদ বজায় রাখতে প্রতিশ্রুতিবদ্ধ।',
    'about.hoursTitle': 'খোলা থাকার সময়',
    'about.hoursWeekdays': 'শনিবার - বৃহস্পতিবার',
    'about.hoursWeekdaysTime': 'সকাল ১১:৩০ - রাত ১১:০০',
    'about.hoursFriday': 'শুক্রবার',
    'about.hoursFridayTime': 'দুপুর ০২:০০ - রাত ১১:৩০',

    // Contact Section
    'contact.title': 'যোগাযোগ ও ঠিকানা',
    'contact.subtitle': 'সরাসরি চলে আসুন অথবা আপনার দরজায় খাবার পেতে ফোন করুন',
    'contact.infoCard': 'রেস্তোরাঁর তথ্য',
    'contact.addressTitle': 'আমাদের ঠিকানা',
    'contact.addressDesc': 'জে৫আরএক্স+আরএইচএক্স, থানা রোড, ঝালকাঠি ৮৪০০, বাংলাদেশ',
    'contact.plusCodeTitle': 'গুগল ম্যাপ প্লাস কোড',
    'contact.plusCodeDesc': 'J5RX+RHX (এই কোডটি সরাসরি গুগল ম্যাপে সার্চ করলেই লোকেশন পেয়ে যাবেন)',
    'contact.phoneTitle': 'ফোন নাম্বার',
    'contact.phoneDesc1': '০১৭১১-২৩৪৫৬৭ (হটলাইন)',
    'contact.phoneDesc2': '০১৯১২-৯৮৭৬৫৪ (অর্ডার ও সহায়তা)',
    'contact.formTitle': 'আমাদের বার্তা পাঠান',
    'contact.formSub': 'কোনো মতামত, ক্যাটারিং বুকিং অথবা অনুষ্ঠান অর্ডারের জন্য নিচের ফর্মটি পূরণ করুন।',
    'contact.formName': 'পূর্ণ নাম',
    'contact.formEmail': 'ইমেইল এড্রেস',
    'contact.formPhone': 'ফোন নাম্বার',
    'contact.formMessage': 'আপনার বার্তা / জিজ্ঞাসা',
    'contact.formSubmit': 'বার্তা পাঠান',
    'contact.formSuccess': 'ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।',

    // Footer
    'footer.tagline': 'ঝালকাঠিতে ঐতিহ্যবাহী বিরিয়ানির সেরা ঠিকানা। স্থানীয় টাটকা উপাদান, খাঁটি ঐতিহ্যবাহী রান্না এবং পরম যত্নে পরিবেশন।',
    'footer.rights': 'সর্বস্বত্ব সংরক্ষিত।',
    'footer.bilingualNote': 'বাংলাতে দেখাচ্ছে'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('bbh_lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn'; // Default to Bengali for localization pride, toggleable
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('bbh_lang', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
