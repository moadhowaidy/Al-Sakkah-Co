export type Lang = 'ar' | 'en'

export interface Translation {
  nav: {
    home: string
    services: string
    about: string
    connect: string
    langToggle: string
  }
  hero: {
    badge: string
    headline1: string
    headline2: string
    sub: string
    cta: string
    ctaSub: string
    stat1Label: string
    stat1Value: string
    stat2Label: string
    stat2Value: string
    stat3Label: string
    stat3Value: string
  }
  quickActions: {
    title: string
    cards: { icon: string; title: string; desc: string }[]
  }
  services: {
    pageTitle: string
    pageSubtitle: string
    filterAll: string
    categories: string[]
    orderBtn: string
    waMsg: string
  }
  about: {
    pageTitle: string
    badge: string
    p1: string
    p2: string
    pillars: { title: string; desc: string }[]
    licensedTitle: string
    licensedDesc: string
  }
  connect: {
    pageTitle: string
    pageSubtitle: string
    phone: string
    email: string
    address: string
    whatsappCta: string
    whatsappNote: string
    mapTitle: string
  }
  footer: {
    tagline: string
    rights: string
    links: string[]
  }
}

export const translations: Record<Lang, Translation> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      services: 'المنتجات',
      about: 'من نحن',
      connect: 'تواصل معنا',
      langToggle: 'EN',
    },
    hero: {
      badge: 'الوجهة الأولى للإلكترونيات الفاخرة في ليبيا',
      headline1: 'تقنية',
      headline2: 'لا حدود لها',
      sub: 'نستورد ونوفر أفضل الهواتف والإلكترونيات والأجهزة الكهربائية العالمية — مباشرةً إلى يدك.',
      cta: 'تصفح المنتجات',
      ctaSub: 'اطلب عبر واتساب الآن',
      stat1Label: 'منتج متوفر',
      stat1Value: '+200',
      stat2Label: 'عميل راضٍ',
      stat2Value: '+1K',
      stat3Label: 'سنوات خبرة',
      stat3Value: '٥+',
    },
    quickActions: {
      title: 'لماذا السكة؟',
      cards: [
        { icon: 'Shield', title: 'ضمان الجودة', desc: 'كل منتج مضمون ومستورد من مصادر موثوقة' },
        { icon: 'Zap', title: 'توصيل سريع', desc: 'نوصل لجميع مناطق ليبيا بأسرع وقت ممكن' },
        { icon: 'MessageCircle', title: 'دعم واتساب', desc: 'فريقنا متاح على مدار الساعة للإجابة على استفساراتك' },
        { icon: 'Star', title: 'أسعار تنافسية', desc: 'نضمن لك أفضل الأسعار في السوق الليبي' },
      ],
    },
    services: {
      pageTitle: 'كتالوج المنتجات',
      pageSubtitle: 'مجموعة مختارة من أفضل الإلكترونيات العالمية',
      filterAll: 'الكل',
      categories: ['هواتف', 'لابتوب', 'صوتيات', 'أجهزة منزلية', 'إكسسوارات'],
      orderBtn: 'اطلب عبر واتساب',
      waMsg: 'مرحباً، أريد طلب: ',
    },
    about: {
      pageTitle: 'شركة السكة',
      badge: 'الريادة في استيراد الإلكترونيات',
      p1: 'شركة السكة هي شركة ليبية رائدة متخصصة في استيراد وبيع الإلكترونيات الفاخرة والهواتف الذكية والأجهزة الكهربائية. نحن نؤمن بأن الوصول إلى أحدث التقنيات حق للجميع.',
      p2: 'انطلاقاً من طرابلس، نخدم عملاءنا في كافة أنحاء ليبيا بخدمة مباشرة وشفافة عبر منصة واتساب — بدون وسطاء، بدون تعقيدات.',
      pillars: [
        { title: 'الموثوقية', desc: 'نستورد فقط من موزعين معتمدين وعلامات تجارية عالمية أصيلة' },
        { title: 'الشفافية', desc: 'أسعار واضحة بدون رسوم خفية — ما تراه هو ما تدفعه' },
        { title: 'التميز', desc: 'نختار كل منتج بعناية لضمان تجربة فاخرة لعملائنا' },
      ],
      licensedTitle: 'شركة مسجلة رسمياً',
      licensedDesc: 'شركة السكة مسجلة ومرخصة وفق القوانين الليبية، ونلتزم بأعلى معايير الشفافية التجارية.',
    },
    connect: {
      pageTitle: 'تواصل معنا',
      pageSubtitle: 'نحن هنا للإجابة على جميع استفساراتك',
      phone: '+218 91 211 5922',
      email: 'info@alsakkah.com',
      address: 'حي الأندلس، شارع الظل، طرابلس، ليبيا',
      whatsappCta: 'ابدأ محادثة واتساب',
      whatsappNote: 'ردنا خلال دقائق',
      mapTitle: 'موقعنا — عين زارة، طرابلس',
    },
    footer: {
      tagline: 'تقنية عالمية. خدمة ليبية.',
      rights: '© 2025 شركة السكة. جميع الحقوق محفوظة.',
      links: ['الرئيسية', 'المنتجات', 'من نحن', 'تواصل معنا'],
    },
  },

  en: {
    nav: {
      home: 'Home',
      services: 'Products',
      about: 'About',
      connect: 'Connect',
      langToggle: 'AR',
    },
    hero: {
      badge: "Libya's #1 Premium Electronics Destination",
      headline1: 'Technology',
      headline2: 'Without Limits',
      sub: "We import and supply the world's best smartphones, electronics, and electrical goods — direct to your hands.",
      cta: 'Browse Products',
      ctaSub: 'Order via WhatsApp Now',
      stat1Label: 'Products',
      stat1Value: '200+',
      stat2Label: 'Customers',
      stat2Value: '1K+',
      stat3Label: 'Years',
      stat3Value: '5+',
    },
    quickActions: {
      title: 'Why Al Sakkah?',
      cards: [
        { icon: 'Shield', title: 'Quality Assured', desc: 'Every product is sourced from verified, authorized distributors worldwide' },
        { icon: 'Zap', title: 'Fast Delivery', desc: 'We deliver across all of Libya at the fastest possible speed' },
        { icon: 'MessageCircle', title: 'WhatsApp Support', desc: 'Our team is available around the clock for your inquiries' },
        { icon: 'Star', title: 'Best Prices', desc: 'We guarantee the most competitive prices on the Libyan market' },
      ],
    },
    services: {
      pageTitle: 'Product Catalog',
      pageSubtitle: 'A curated selection of the world\'s finest electronics',
      filterAll: 'All',
      categories: ['Phones', 'Laptops', 'Audio', 'Home Appliances', 'Accessories'],
      orderBtn: 'Order via WhatsApp',
      waMsg: 'Hello, I want to order: ',
    },
    about: {
      pageTitle: 'Al Sakkah Co.',
      badge: 'Leading Electronics Importer',
      p1: 'Al Sakkah is a leading Libyan company specializing in the import and sale of premium electronics, smartphones, and electrical appliances. We believe world-class technology should be accessible to everyone.',
      p2: 'Operating from Tripoli, we serve customers across Libya with a direct, transparent service via WhatsApp — no middlemen, no complications.',
      pillars: [
        { title: 'Reliability', desc: 'We only source from authorized distributors and authentic global brands' },
        { title: 'Transparency', desc: 'Clear pricing with no hidden fees — what you see is what you pay' },
        { title: 'Excellence', desc: 'Every product is hand-picked to ensure a premium experience for our customers' },
      ],
      licensedTitle: 'Officially Registered Company',
      licensedDesc: 'Al Sakkah Co. is registered and licensed under Libyan law, committed to the highest standards of commercial transparency.',
    },
    connect: {
      pageTitle: 'Get in Touch',
      pageSubtitle: 'We\'re here to answer all your questions',
      phone: '+218 91 211 5922',
      email: 'info@alsakkah.com',
      address: 'Andalus District, Al-Zill Street, Tripoli, Libya',
      whatsappCta: 'Start a WhatsApp Chat',
      whatsappNote: 'We respond within minutes',
      mapTitle: 'Our Location — Ain Zara, Tripoli',
    },
    footer: {
      tagline: 'World Technology. Libyan Service.',
      rights: '© 2025 Al Sakkah Co. All rights reserved.',
      links: ['Home', 'Products', 'About', 'Connect'],
    },
  },
}

export interface Product {
  id: number
  nameAr: string
  nameEn: string
  category: string
  categoryEn: string
  priceAr: string
  priceEn: string
  imageUrl: string
  badge?: string
  badgeEn?: string
  specs: string[]
  specsEn: string[]
  featured?: boolean
}

export const WHATSAPP_NUMBER = '218912115922'

export const products: Product[] = [
  {
    id: 1,
    nameAr: 'آيفون 15 برو ماكس',
    nameEn: 'iPhone 15 Pro Max',
    category: 'هواتف',
    categoryEn: 'Phones',
    priceAr: '٦٫٥٠٠ د.ل',
    priceEn: '6,500 LYD',
    imageUrl: '/images/products/iphone15promax.png',
    badge: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    specs: ['256GB', 'تيتانيوم طبيعي', 'A17 Pro'],
    specsEn: ['256GB', 'Natural Titanium', 'A17 Pro'],
    featured: true,
  },
  {
    id: 2,
    nameAr: 'سامسونج S24 ألترا',
    nameEn: 'Samsung S24 Ultra',
    category: 'هواتف',
    categoryEn: 'Phones',
    priceAr: '٥٫٨٠٠ د.ل',
    priceEn: '5,800 LYD',
    imageUrl: '/images/products/s24ultra.png',
    badge: 'جديد',
    badgeEn: 'New',
    specs: ['512GB', 'S Pen مدمج', 'Snapdragon 8 Gen 3'],
    specsEn: ['512GB', 'Built-in S Pen', 'Snapdragon 8 Gen 3'],
    featured: true,
  },
  {
    id: 3,
    nameAr: 'ماك بوك برو M3',
    nameEn: 'MacBook Pro M3',
    category: 'لابتوب',
    categoryEn: 'Laptops',
    priceAr: '١٢٫٠٠٠ د.ل',
    priceEn: '12,000 LYD',
    imageUrl: '/images/products/macbookpro.png',
    badge: 'حصري',
    badgeEn: 'Exclusive',
    specs: ['16" Liquid Retina XDR', '18GB RAM', '1TB SSD'],
    specsEn: ['16" Liquid Retina XDR', '18GB RAM', '1TB SSD'],
    featured: true,
  },
  {
    id: 4,
    nameAr: 'سوني WH-1000XM5',
    nameEn: 'Sony WH-1000XM5',
    category: 'صوتيات',
    categoryEn: 'Audio',
    priceAr: '١٫٤٠٠ د.ل',
    priceEn: '1,400 LYD',
    imageUrl: '/images/products/sonywh1000xm5.png',
    specs: ['إلغاء الضوضاء الذكي', '30 ساعة بطارية', 'بلوتوث 5.2'],
    specsEn: ['Smart Noise Cancellation', '30hr Battery', 'Bluetooth 5.2'],
  },
  {
    id: 5,
    nameAr: 'شاومي 14 ألترا',
    nameEn: 'Xiaomi 14 Ultra',
    category: 'هواتف',
    categoryEn: 'Phones',
    priceAr: '٤٫٢٠٠ د.ل',
    priceEn: '4,200 LYD',
    imageUrl: '/images/products/xiaomi14ultra.png',
    badge: 'قيمة مميزة',
    badgeEn: 'Great Value',
    specs: ['512GB', 'Leica كاميرا', 'Snapdragon 8 Gen 3'],
    specsEn: ['512GB', 'Leica Camera', 'Snapdragon 8 Gen 3'],
  },
  {
    id: 6,
    nameAr: 'أبل واتش ألترا 2',
    nameEn: 'Apple Watch Ultra 2',
    category: 'إكسسوارات',
    categoryEn: 'Accessories',
    priceAr: '٣٫١٠٠ د.ل',
    priceEn: '3,100 LYD',
    imageUrl: '/images/products/applewatchultra2.png',
    specs: ['تيتانيوم', 'GPS دقيق', '36 ساعة بطارية'],
    specsEn: ['Titanium', 'Precision GPS', '36hr Battery'],
  },
  {
    id: 7,
    nameAr: 'ديل XPS 15',
    nameEn: 'Dell XPS 15',
    category: 'لابتوب',
    categoryEn: 'Laptops',
    priceAr: '٨٫٥٠٠ د.ل',
    priceEn: '8,500 LYD',
    imageUrl: '/images/products/dellxps15.png',
    specs: ['Intel Core i9', '32GB RAM', 'OLED 15.6"'],
    specsEn: ['Intel Core i9', '32GB RAM', 'OLED 15.6"'],
  },
  {
    id: 8,
    nameAr: 'داي سون V15 ديتكت',
    nameEn: 'Dyson V15 Detect',
    category: 'أجهزة منزلية',
    categoryEn: 'Home Appliances',
    priceAr: '٢٫٨٠٠ د.ل',
    priceEn: '2,800 LYD',
    imageUrl: '/images/products/dysonv15.png',
    badge: 'مميز',
    badgeEn: 'Premium',
    specs: ['ليزر كاشف للغبار', '60 دقيقة تشغيل', 'HEPA فلتر'],
    specsEn: ['Laser Dust Detection', '60min Runtime', 'HEPA Filter'],
  },
  {
    id: 9,
    nameAr: 'AirPods Pro الجيل الثاني',
    nameEn: 'AirPods Pro 2nd Gen',
    category: 'صوتيات',
    categoryEn: 'Audio',
    priceAr: '١٫١٠٠ د.ل',
    priceEn: '1,100 LYD',
    imageUrl: '/images/products/airpodspro2.png',
    specs: ['ANC نشط', 'شريحة H2', 'IP54 مقاوم للماء'],
    specsEn: ['Active ANC', 'H2 Chip', 'IP54 Water Resistant'],
  },
  {
    id: 10,
    nameAr: 'آيفون 17 برو ماكس',
    nameEn: 'iPhone 17 Pro Max',
    category: 'هواتف',
    categoryEn: 'Phones',
    priceAr: '٧٫٥٠٠ د.ل',
    priceEn: '7,500 LYD',
    imageUrl: '/images/products/iphone17promax.png',
    badge: 'جديد وحصري',
    badgeEn: 'New Arrival',
    specs: ['A19 Pro', 'تيتانيوم صحراوي', 'حواف فائقة النحافة'],
    specsEn: ['A19 Pro Bionic', 'Desert Titanium', 'Ultra-thin Bezels'],
    featured: true,
  },
]
