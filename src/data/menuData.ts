export interface MenuItem {
  id: string;
  nameEn: string;
  nameBn: string;
  descriptionEn: string;
  descriptionBn: string;
  price: number;
  category: 'biriyani' | 'sides' | 'drinks';
  image?: string;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  {
    id: 'mutton-kacchi',
    nameEn: 'Shahi Mutton Kacchi Biriyani',
    nameBn: 'শাহী খাসির কাচ্চি বিরিয়ানি',
    descriptionEn: 'Slow-cooked aromatic basmati rice layered with tender mutton chunks, Jhalakathi-style spices, and caramelized potatoes.',
    descriptionBn: 'সুগন্ধি বাসমতি চাল, নরম খাসির মাংস, আলু এবং নিজস্ব মসলার সমন্বয়ে ঐতিহ্যবাহী উপায়ে রান্না করা কাচ্চি বিরিয়ানি।',
    price: 320,
    category: 'biriyani',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
    isPopular: true
  },
  {
    id: 'beef-tehari',
    nameEn: 'Special Beef Tehari',
    nameBn: 'স্পেশাল গরুর তেহারী',
    descriptionEn: 'Fragrant Chinigura rice cooked with small tender beef cubes in pure mustard oil and green chilies.',
    descriptionBn: 'খাঁটি সরিষার তেল ও কাঁচামরিচের সুবাসে সুগন্ধি চিনিগুঁড়া চাল ও গরুর মাংসের ঐতিহ্যবাহী তেহারী।',
    price: 180,
    category: 'biriyani',
    isPopular: true
  },
  {
    id: 'chicken-biriyani',
    nameEn: 'Traditional Chicken Biriyani',
    nameBn: 'ঐতিহ্যবাহী মুরগির বিরিয়ানি',
    descriptionEn: 'Delectable chicken cooked in spiced gravy, layered with fluffy fragrant basmati rice.',
    descriptionBn: 'বিশেষ মসলায় রান্না করা মুরগির মাংস ও সুগন্ধি বাসমতি চালের চমৎকার যুগলবন্দী বিরিয়ানি।',
    price: 220,
    category: 'biriyani'
  },
  {
    id: 'morog-polao',
    nameEn: 'Shahi Morog Polao',
    nameBn: 'শাহী মোরগ পোলাও',
    descriptionEn: 'Richly flavored Chinigura rice served with a succulent quarter chicken leg roast and boiled egg.',
    descriptionBn: 'ঐতিহ্যবাহী শাহী ঘি-পোলাও এর সাথে পরিবেশন করা হয় সুস্বাদু চিকেন রোস্ট এবং সিদ্ধ ডিম।',
    price: 250,
    category: 'biriyani',
    isPopular: true
  },
  {
    id: 'chicken-chaap',
    nameEn: 'Spicy Chicken Chaap',
    nameBn: 'স্পাইসি চিকেন চাপ',
    descriptionEn: 'Marinated slow-grilled flat chicken piece tossed in rich spicy gravy. Best with Naan or Polao.',
    descriptionBn: 'স্পেশাল মসলায় ম্যারিনেট করা তিল ও তেলের ওপর ভাজা সুস্বাদু ও ঝাল চিকেন চাপ।',
    price: 150,
    category: 'sides'
  },
  {
    id: 'beef-sheek',
    nameEn: 'Beef Sheek Kabab',
    nameBn: 'গরুর শিক কাবাব',
    descriptionEn: 'Flame-grilled marinated minced beef skewers infused with home-ground hot spices.',
    descriptionBn: 'কয়লার আগুনে পোড়ানো মশলাদার গরুর মাংসের নরম ও রসালো শিক কাবাব।',
    price: 160,
    category: 'sides'
  },
  {
    id: 'jali-kabab',
    nameEn: 'Shahi Jali Kabab',
    nameBn: 'শাহী জালি কাবাব',
    descriptionEn: 'Minced beef patty combined with aromatic herbs and coated with deep-fried egg lace.',
    descriptionBn: 'ডিমের জালের আবরণে ভাজা সুগন্ধি মসলাযুক্ত গরুর কিমার চমৎকার জালি কাবাব।',
    price: 50,
    category: 'sides'
  },
  {
    id: 'special-borhani',
    nameEn: 'Premium Shahi Borhani',
    nameBn: 'প্রিমিয়াম শাহী বোরহানী',
    descriptionEn: 'The ultimate yogurt digestif drink blended with mint, coriander, mustard seeds, and spices.',
    descriptionBn: 'টকদই, পুদিনা পাতা, ধনেপাতা, সরিষা বাটা ও বিশেষ মসলা দিয়ে তৈরি হজমকারক শাহী পানীয়।',
    price: 60,
    category: 'drinks',
    isPopular: true
  },
  {
    id: 'shahi-firni',
    nameEn: 'Traditional Shahi Firni',
    nameBn: 'ঐতিহ্যবাহী শাহী ফিরনি',
    descriptionEn: 'Slow-cooked milk dessert with crushed Chinigura rice, cardamom, saffron, and nuts.',
    descriptionBn: 'দুধ, সুগন্ধি চিনিগুঁড়া চাল, এলাচ ও পেস্তা বাদামের সমন্বয়ে তৈরি ঐতিহ্যবাহী মিষ্টি ডেজার্ট।',
    price: 70,
    category: 'sides'
  },
  {
    id: 'sweet-lassi',
    nameEn: 'Sweet Lassi',
    nameBn: 'মিষ্টি লাচ্ছি',
    descriptionEn: 'Creamy yogurt drink blended with ice, sugar, and a touch of rose water.',
    descriptionBn: 'মিষ্টি টকদই, বরফ কুচি এবং গোলাপ জলের সুবাসে তৈরি প্রাণজুড়ানো লাচ্ছি।',
    price: 80,
    category: 'drinks'
  },
  {
    id: 'soft-drinks',
    nameEn: 'Cold Soft Drinks',
    nameBn: 'ঠান্ডা কোমল পানীয়',
    descriptionEn: 'Chilled carbonated soft drinks (Coca-Cola, Sprite, or 7Up).',
    descriptionBn: 'ঠান্ডা কোকাকোলা, স্প্রাইট অথবা সেভেনআপ (২৫০ মিলি)।',
    price: 35,
    category: 'drinks'
  }
];

// Fallback images array for random assignment if needed, or specific high quality links
export const getFoodImage = (id: string, category: string): string => {
  const images: Record<string, string> = {
    'mutton-kacchi': 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop',
    'beef-tehari': 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=600&auto=format&fit=crop',
    'chicken-biriyani': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=600&auto=format&fit=crop',
    'morog-polao': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=600&auto=format&fit=crop',
    'chicken-chaap': 'https://images.unsplash.com/photo-1601356616077-695728ecf769?q=80&w=600&auto=format&fit=crop',
    'beef-sheek': 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
    'jali-kabab': 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
    'special-borhani': 'https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=600&auto=format&fit=crop', // generic cool green drink or container
    'shahi-firni': 'https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=600&auto=format&fit=crop',
    'sweet-lassi': 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop',
    'soft-drinks': 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop'
  };
  
  return images[id] || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop';
};
