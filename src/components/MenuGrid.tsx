import React, { useState, useMemo } from 'react';
import { menuItems, MenuItem } from '../data/menuData';
import MenuCard from './MenuCard';
import { useLanguage } from '../context/LanguageContext';

export default function MenuGrid() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<'all' | 'biriyani' | 'sides' | 'drinks'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Order Sheet state
  const [orderItems, setOrderItems] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isCopied, setIsCopied] = useState(false);

  // Filter & Search Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      // Category filter
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      
      // Search filter (searches English name, Bengali name, descriptions)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.nameEn.toLowerCase().includes(q) ||
        item.nameBn.includes(q) ||
        item.descriptionEn.toLowerCase().includes(q) ||
        item.descriptionBn.includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handler to add item to local order sheet
  const handleAddToOrder = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) => 
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  // Handler to remove/decrease item
  const handleRemoveOne = (itemId: string) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === itemId);
      if (existing && existing.quantity > 1) {
        return prev.map((i) => 
          i.item.id === itemId ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prev.filter((i) => i.item.id !== itemId);
    });
  };

  // Handler to add one quantity inside drawer
  const handleAddOne = (itemId: string) => {
    setOrderItems((prev) => 
      prev.map((i) => i.item.id === itemId ? { ...i, quantity: i.quantity + 1 } : i)
    );
  };

  // Handler to clear entire order sheet
  const handleClearOrder = () => {
    setOrderItems([]);
  };

  // Total calculation
  const totalAmount = useMemo(() => {
    return orderItems.reduce((sum, current) => sum + (current.item.price * current.quantity), 0);
  }, [orderItems]);

  // Convert English digits to Bangla digits helper
  const toBanglaDigits = (num: number): string => {
    const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return num.toString().split('').map(d => banglaDigits[parseInt(d)] || d).join('');
  };

  const formattedTotal = language === 'bn' ? toBanglaDigits(totalAmount) : totalAmount.toString();

  // Copy order summary to clipboard for seamless ordering by SMS/Messenger or reading over phone
  const copyOrderSummary = () => {
    if (orderItems.length === 0) return;

    let summaryText = `*Bismillah Beriyani House - Order Summary*\n`;
    summaryText += `===================================\n`;
    orderItems.forEach((order) => {
      const itemTitle = language === 'en' ? order.item.nameEn : order.item.nameBn;
      summaryText += `- ${order.quantity}x ${itemTitle} (৳${order.item.price} each)\n`;
    });
    summaryText += `===================================\n`;
    summaryText += `Total Bill: ৳${totalAmount}\n`;
    summaryText += `Address: Thana Road, Jhalakathi\n`;
    summaryText += `Placing via: Phone Web Assistant`;

    navigator.clipboard.writeText(summaryText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    });
  };

  const categories: { id: 'all' | 'biriyani' | 'sides' | 'drinks'; labelKey: string; icon: string }[] = [
    { id: 'all', labelKey: 'menu.all', icon: 'fa-solid fa-border-all' },
    { id: 'biriyani', labelKey: 'menu.biriyani', icon: 'fa-solid fa-plate-wheat' },
    { id: 'sides', labelKey: 'menu.sides', icon: 'fa-solid fa-fire-burner' },
    { id: 'drinks', labelKey: 'menu.drinks', icon: 'fa-solid fa-glass-water' }
  ];

  return (
    <div id="menu-grid-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* 1. Header with custom typography */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 id="menu-section-title" className="font-bilingual-title text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-green tracking-wide">
          {t('menu.title')}
        </h2>
        
        {/* Subtle decorative crest line */}
        <div className="flex items-center justify-center my-4">
          <div className="h-[1px] bg-brand-gold/50 w-16"></div>
          <i className="fa-solid fa-ring text-brand-gold mx-2.5 text-xs"></i>
          <div className="h-[1px] bg-brand-gold/50 w-16"></div>
        </div>

        <p id="menu-section-subtitle" className="font-bilingual-body text-slate-500 mt-2 text-base sm:text-lg leading-relaxed">
          {t('menu.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* 2. Main Menu Grid Left Side (Filters & Cards) */}
        <div className="lg:col-span-3 space-y-8">
          
          {/* Filters Bar & Search Bar combined */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  id={`filter-btn-${cat.id}`}
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-green text-brand-gold shadow-md'
                      : 'bg-slate-50 text-slate-600 hover:bg-brand-green/10 hover:text-brand-green'
                  }`}
                >
                  <i className={`${cat.icon} ${activeCategory === cat.id ? 'text-brand-gold' : 'text-slate-400'}`}></i>
                  <span className="font-bilingual-body">{t(cat.labelKey)}</span>
                </button>
              ))}
            </div>

            {/* Smart Search Input */}
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <i className="fa-solid fa-magnifying-glass text-xs"></i>
              </div>
              <input
                id="menu-search-input"
                type="text"
                placeholder={language === 'en' ? 'Search Biriyani, Kabab...' : 'খাবার খুঁজুন...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-brand-green transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <i className="fa-solid fa-circle-xmark text-xs"></i>
                </button>
              )}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredItems.length > 0 ? (
            <div id="food-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <MenuCard 
                  key={item.id} 
                  item={item} 
                  onAddToOrder={handleAddToOrder}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 mb-4">
                <i className="fa-solid fa-face-frown text-3xl"></i>
              </div>
              <h3 className="text-lg font-bold text-slate-700">
                {language === 'en' ? 'No items found' : 'কোনো খাবার খুঁজে পাওয়া যায়নি'}
              </h3>
              <p className="text-sm text-slate-400 mt-1 max-w-xs mx-auto">
                {language === 'en' 
                  ? 'Try adjusting your search query or switching categories.' 
                  : 'অনুগ্রহ করে ভিন্ন কিছু লিখে খুঁজুন অথবা অন্য ক্যাটাগরি নির্বাচন করুন।'}
              </p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-4 px-4 py-2 bg-brand-green text-white text-xs font-semibold rounded-lg hover:bg-brand-green-light transition-colors cursor-pointer"
              >
                {language === 'en' ? 'Clear Filters' : 'ফিল্টার মুছুন'}
              </button>
            </div>
          )}

        </div>

        {/* 3. Interactive Order Sheet Sidebar / Container (Right Side) */}
        <div className="lg:col-span-1">
          <div 
            id="order-sheet-container" 
            className="sticky top-28 bg-white rounded-2xl border-2 border-brand-green/10 shadow-lg p-5 flex flex-col max-h-[80vh] overflow-y-auto"
          >
            {/* Title */}
            <div className="border-b border-slate-100 pb-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-brand-green">
                <i className="fa-solid fa-clipboard-list text-lg text-brand-gold"></i>
                <h3 className="font-bilingual-title text-lg font-bold tracking-wide">
                  {t('menu.cartTitle')}
                </h3>
              </div>
              
              {/* Counter Badge */}
              {orderItems.length > 0 && (
                <span className="bg-brand-gold text-brand-green text-xs font-bold px-2 py-0.5 rounded-full">
                  {orderItems.reduce((acc, curr) => acc + curr.quantity, 0)}
                </span>
              )}
            </div>

            <p className="font-bilingual-body text-xs text-slate-400 mb-4">
              {t('menu.cartDesc')}
            </p>

            {/* List of Ordered Items */}
            {orderItems.length > 0 ? (
              <div className="flex-grow space-y-3 divide-y divide-slate-50 max-h-[40vh] overflow-y-auto pr-1">
                {orderItems.map((order, idx) => {
                  const itemTitle = language === 'en' ? order.item.nameEn : order.item.nameBn;
                  const itemPrice = order.item.price * order.quantity;
                  const formattedItemPrice = language === 'bn' ? toBanglaDigits(itemPrice) : itemPrice.toString();
                  const formattedItemQty = language === 'bn' ? toBanglaDigits(order.quantity) : order.quantity.toString();

                  return (
                    <div key={order.item.id} className={`flex items-center justify-between pt-3 ${idx === 0 ? 'pt-0 border-t-0' : ''}`}>
                      <div className="flex-grow pr-3">
                        <span className="font-bilingual-body font-bold text-sm text-slate-800 line-clamp-1">
                          {itemTitle}
                        </span>
                        <div className="flex items-baseline text-xs text-slate-400 font-medium">
                          <span>৳ {language === 'bn' ? toBanglaDigits(order.item.price) : order.item.price}</span>
                          <span className="mx-1">×</span>
                          <span>{formattedItemQty}</span>
                        </div>
                      </div>

                      {/* Quantity Toggler and Cost */}
                      <div className="flex flex-col items-end flex-shrink-0 space-y-1.5">
                        <span className="text-sm font-extrabold text-brand-green-dark font-mono">
                          ৳{formattedItemPrice}
                        </span>
                        
                        <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                          <button
                            onClick={() => handleRemoveOne(order.item.id)}
                            className="px-2 py-0.5 text-slate-500 hover:bg-slate-200 text-xs transition-colors cursor-pointer"
                          >
                            <i className="fa-solid fa-minus"></i>
                          </button>
                          <span className="px-2 py-0.5 text-slate-800 font-mono text-xs font-bold bg-white min-w-[20px] text-center">
                            {formattedItemQty}
                          </span>
                          <button
                            onClick={() => handleAddOne(order.item.id)}
                            className="px-2 py-0.5 text-slate-500 hover:bg-slate-200 text-xs transition-colors cursor-pointer"
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex-grow py-12 text-center flex flex-col items-center justify-center text-slate-300">
                <i className="fa-solid fa-basket-shopping text-4xl mb-3 text-slate-200"></i>
                <p className="text-xs font-medium max-w-[150px] leading-relaxed">
                  {t('menu.cartEmpty')}
                </p>
              </div>
            )}

            {/* Bottom Total & Checkout Summary */}
            {orderItems.length > 0 && (
              <div className="border-t border-slate-100 pt-4 mt-6 space-y-4">
                
                {/* Total Cost Display */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-wider font-bilingual-body">
                    {t('menu.totalPrice')}
                  </span>
                  <div className="flex items-baseline text-brand-green-dark font-extrabold text-xl">
                    <span className="text-brand-gold mr-1">৳</span>
                    <span className="font-mono">{formattedTotal}</span>
                  </div>
                </div>

                {/* Actions inside order drawer */}
                <div className="space-y-2.5">
                  
                  {/* Copy Order Summary Button */}
                  <button
                    id="copy-order-summary-btn"
                    onClick={copyOrderSummary}
                    className={`w-full py-2.5 rounded-lg text-xs font-bold flex items-center justify-center space-x-2 transition-all cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <i className={isCopied ? "fa-solid fa-circle-check" : "fa-solid fa-copy"}></i>
                    <span>{isCopied ? t('menu.orderCopied') : t('menu.copyOrder')}</span>
                  </button>

                  {/* Direct Dial Order Hotline */}
                  <a
                    id="checkout-order-hotline"
                    href="tel:01711234567"
                    className="w-full py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-green font-bold rounded-lg text-center flex items-center justify-center space-x-2 shadow-md transition-all duration-200 hover:scale-[1.02]"
                  >
                    <i className="fa-solid fa-phone-volume"></i>
                    <span className="font-bilingual-body text-xs font-semibold">{t('menu.placeOrderPhone')}</span>
                  </a>

                  {/* Clear Order sheet */}
                  <button
                    id="clear-order-btn"
                    onClick={handleClearOrder}
                    className="w-full text-center text-[10px] uppercase text-red-500 hover:text-red-700 tracking-wider font-bold transition-colors py-1 cursor-pointer"
                  >
                    {language === 'en' ? 'Clear Order Sheet' : 'অর্ডার মুছুন'}
                  </button>

                </div>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
}
