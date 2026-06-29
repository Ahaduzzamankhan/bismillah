import React from 'react';
import { MenuItem, getFoodImage } from '../data/menuData';
import { useLanguage } from '../context/LanguageContext';

interface MenuCardProps {
  key?: string | number;
  item: MenuItem;
  onAddToOrder?: (item: MenuItem) => void;
}

export default function MenuCard({ item, onAddToOrder }: MenuCardProps) {
  const { language, t } = useLanguage();

  // Helper to convert English digits to Bangla digits
  const toBanglaDigits = (num: number): string => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => banglaDigits[parseInt(d)] || d).join('');
  };

  const formattedPrice = language === 'bn' ? toBanglaDigits(item.price) : item.price.toString();
  const imageUrl = getFoodImage(item.id, item.category);

  return (
    <div 
      id={`menu-card-${item.id}`} 
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
    >
      {/* Food Image Area */}
      <div className="relative h-56 sm:h-60 overflow-hidden bg-slate-100">
        
        {/* Shimmer/Image loading background placeholder */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-green/5 text-brand-green/30">
          <i className="fa-solid fa-bowl-food text-4xl animate-pulse mb-2"></i>
          <span className="text-[10px] font-medium tracking-widest uppercase">Bismillah Beriyani</span>
        </div>

        {/* Real Food Image */}
        <img 
          id={`menu-card-img-${item.id}`}
          src={imageUrl} 
          alt={language === 'en' ? item.nameEn : item.nameBn} 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
          onError={(e) => {
            // Safe fallback if unsplash fails or takes too long to load
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Popular Gold Badge (Shining/Glow) */}
        {item.isPopular && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-brand-gold to-brand-gold-dark text-brand-green text-xs font-extrabold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
            <i className="fa-solid fa-star text-[10px] animate-spin duration-3000"></i>
            <span className="font-sans uppercase tracking-wider text-[10px]">
              {language === 'en' ? 'Popular' : 'জনপ্রিয়'}
            </span>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute bottom-4 right-4 z-10 bg-brand-green-dark/80 backdrop-blur-md text-brand-gold text-[11px] font-semibold px-2.5 py-1 rounded-md border border-brand-gold/30">
          <i className={`mr-1.5 ${
            item.category === 'biriyani' ? 'fa-solid fa-plate-wheat' :
            item.category === 'sides' ? 'fa-solid fa-fire-burner' : 'fa-solid fa-mug-hot'
          }`}></i>
          <span className="font-bilingual-body uppercase tracking-wider text-[10px]">
            {t(`menu.${item.category}`)}
          </span>
        </div>
      </div>

      {/* Card Details Area */}
      <div className="p-5 flex flex-col flex-grow">
        
        {/* Title Stack (Bilingual representation) */}
        <div className="mb-2">
          <h4 className="font-bilingual-title text-xl font-bold text-brand-green group-hover:text-brand-green-light transition-colors duration-200">
            {language === 'en' ? item.nameEn : item.nameBn}
          </h4>
          <h5 className="font-bilingual-body text-xs text-slate-400 font-medium tracking-wide mt-0.5">
            {language === 'en' ? item.nameBn : item.nameEn}
          </h5>
        </div>

        {/* Food Description */}
        <p className="font-bilingual-body text-sm text-slate-500 line-clamp-3 mb-6 leading-relaxed flex-grow">
          {language === 'en' ? item.descriptionEn : item.descriptionBn}
        </p>

        {/* Card Footer: Price & Quick Order CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
          {/* Price Stack */}
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] uppercase tracking-wider font-semibold">
              {language === 'en' ? 'Price' : 'মূল্য'}
            </span>
            <div className="flex items-baseline text-brand-green-dark font-extrabold text-2xl">
              <span className="text-brand-gold text-xl mr-1">৳</span>
              <span className="font-mono tracking-tight">{formattedPrice}</span>
            </div>
          </div>

          {/* Add to Cart button */}
          {onAddToOrder && (
            <button
              id={`add-to-order-btn-${item.id}`}
              onClick={() => onAddToOrder(item)}
              className="flex items-center space-x-1.5 bg-brand-green hover:bg-brand-green-light text-white hover:text-brand-gold font-semibold text-xs py-2 px-3.5 rounded-lg shadow-sm transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <i className="fa-solid fa-cart-plus"></i>
              <span className="font-bilingual-body text-[11px]">{t('menu.addToCart')}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
