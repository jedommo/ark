/* ==========================================================================
   مؤسسة عربة الخضار للفواكه والخضار - Interactive Application Logic (app.js)
   Ultra-Luxury Experience • Live Search • Quick Order Cart • Branch Finder
   ========================================================================== */

// --- Unified WhatsApp & Customer Service Number (الرقم الموحد) ---
let UNIFIED_WHATSAPP_PHONE = '966115007271';
let UNIFIED_WHATSAPP_DISPLAY = '+966 11 500 7271';

try {
  const savedSettings = localStorage.getItem('cart_store_settings');
  if (savedSettings) {
    const s = JSON.parse(savedSettings);
    if (s.unifiedPhone) UNIFIED_WHATSAPP_PHONE = s.unifiedPhone;
    if (s.unifiedDisplay) UNIFIED_WHATSAPP_DISPLAY = s.unifiedDisplay;
  }
} catch (e) {}

// --- Comprehensive Riyadh Branches Data (Official Real Data) ---
let BRANCHES_DATA = [
  {
    id: 'naseem-1',
    name: 'النسيم 1',
    displayName: 'النسيم 1',
    zone: 'east',
    zoneName: 'شرق الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966506672822',
    address: 'شارع حسان بن ثابت، حي النسيم، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق الرياض، النسيم، النظيم، والروضة',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.739066,46.835787&output=embed&q=24.739066,46.835787+(عربة+الخضار+-+النسيم+1)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/t7UysoSDTXfkuygB7',
    statusOverride: 'auto'
  },
  {
    id: 'naseem-2',
    name: 'النسيم 2',
    displayName: 'النسيم 2',
    zone: 'east',
    zoneName: 'شرق الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966506672822',
    address: 'حي النسيم، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق الرياض، النسيم، الروابي، وإشبيليا',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.739066,46.835787&output=embed&q=24.739066,46.835787+(عربة+الخضار+-+النسيم+2)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/t7UysoSDTXfkuygB7'
  },
  {
    id: 'rabwa',
    name: 'الربوة',
    displayName: 'الربوة',
    zone: 'east',
    zoneName: 'شرق ووسط الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966506672822',
    address: 'شارع الخليفة المنتصر بالله، حي الربوة، الرياض 14215',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق ووسط الرياض، الربوة، الريان، والملز',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.691926,46.776221&output=embed&q=24.691926,46.776221+(عربة+الخضار+-+الربوة)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/xTTuJFm57Kk7yzpJ6'
  },
  {
    id: 'dar-baida',
    name: 'الدار البيضاء',
    displayName: 'الدار البيضاء',
    zone: 'south',
    zoneName: 'جنوب الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966502878862',
    address: 'حي الدار البيضاء، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'جنوب الرياض، الدار البيضاء، والعزيزية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.583149,46.804320&output=embed&q=24.583149,46.804320+(عربة+الخضار+-+الدار+البيضاء)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/VcJhey1XvFeVVNH36'
  },
  {
    id: 'mansourah',
    name: 'المنصورة',
    displayName: 'المنصورة',
    zone: 'south',
    zoneName: 'جنوب ووسط الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966552132388',
    address: 'شارع إسلام آباد، حي المنصورة، الرياض 12682',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'وسط وجنوب الرياض، المنصورة، والخالدية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.610003,46.730728&output=embed&q=24.610003,46.730728+(عربة+الخضار+-+المنصورة)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/fL6FMauTr11dFjpL6'
  },
  {
    id: 'wadi-laban',
    name: 'وادي لبن',
    displayName: 'وادي لبن',
    zone: 'west',
    zoneName: 'غرب الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966550464166',
    address: 'شارع طيبة، ضاحية لبن، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب الرياض، ضاحية لبن، والمهدية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.618697,46.530853&output=embed&q=24.618697,46.530853+(عربة+الخضار+-+وادي+لبن)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/UFeWfSSg32qRDu5TA'
  },
  {
    id: 'tuwaiq',
    name: 'طويق',
    displayName: 'طويق',
    zone: 'west',
    zoneName: 'غرب الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966533246434',
    address: 'حي طويق، مخرج 26، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب الرياض، طويق، نجم الدين، ونمار',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.568457,46.527657&output=embed&q=24.568457,46.527657+(عربة+الخضار+-+طويق)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/Si39pT5V6AoU5HqL8'
  },
  {
    id: 'kharj',
    name: 'الخرج',
    displayName: 'الخرج',
    zone: 'south',
    zoneName: 'الخرج وجنوب الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966502878862',
    address: 'محافظة الخرج',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'كافة أحياء محافظة الخرج وجنوب الرياض',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.130460,47.351065&output=embed&q=24.130460,47.351065+(عربة+الخضار+-+الخرج)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/gJzpwtWTQRZPQPF68'
  },
  {
    id: 'awali',
    name: 'العوالي',
    displayName: 'العوالي',
    zone: 'west',
    zoneName: 'غرب وجنوب الرياض',
    phone: UNIFIED_WHATSAPP_PHONE,
    phoneDisplay: UNIFIED_WHATSAPP_DISPLAY,
    localPhone: '966533246434',
    address: 'حي العوالي، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب وجنوب الرياض، العوالي، ونمار',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.558607,46.613951&output=embed&q=24.558607,46.613951+(عربة+الخضار+-+العوالي)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/eauHEnbiDLDAyDhAA'
  }
];

// Load saved branches from storage if custom configured
try {
  const savedBranches = localStorage.getItem('cart_branches_data');
  if (savedBranches) {
    const parsed = JSON.parse(savedBranches);
    if (Array.isArray(parsed) && parsed.length > 0) {
      BRANCHES_DATA = parsed;
    }
  }
} catch (e) {}

// --- Curated Fruit Trays & Baskets Catalog (Showcase - Fruits Only) ---
const CATALOG_PRODUCTS = [
  {
    id: 1,
    name: 'حبحب أحمر سكري طازج',
    category: 'melons',
    categoryName: 'بطيخ وشمام',
    unit: 'حبة كاملة محلاة طازجة منتقاة فجر اليوم (8 - 10 كجم)',
    badge: 'حلو ومحلّى 100% 🍉',
    badgeClass: 'badge-gold',
    image: 'uploads/habhab.jpg',
    benefits: 'ثمار حبحب محلاة مليئة بالعصير الطبيعي والانتعاش فجر كل يوم.'
  },
  {
    id: 2,
    name: 'شمام بلدي سكري فاخر',
    category: 'melons',
    categoryName: 'بطيخ وشمام',
    unit: 'كرتون منتقى حبة بحبة معطر ومحلّى (5 - 6 كجم)',
    badge: 'عطر ورائحة نضرة 🍈',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=600&q=80',
    benefits: 'شمام بلدي فاخر محلى بطعم سكري رائع طازج يومياً.'
  },
  {
    id: 3,
    name: 'موز فلبيني فاخر درجة أولى',
    category: 'tropical',
    categoryName: 'موز وفواكه استوائية',
    unit: 'طبق فاخر (3 كجم) طازج ونقي درجة ممتازة',
    badge: 'درجة أولى ممتازة 🍌',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80',
    benefits: 'موز أصفر ناضج غني بالطاقة والفيتامينات والمعادن.'
  },
  {
    id: 4,
    name: 'برتقال عصير وسكري فاخر',
    category: 'citrus',
    categoryName: 'برتقال وحمضيات',
    unit: 'صندوق عائلي مليء بالعصير الطبيعي (8 كجم)',
    badge: 'طبيعي وفيتامين C 🍊',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80',
    benefits: 'برتقال عصير سكري ناضج ممتاز للعصير اليومي وللصحة.'
  },
  {
    id: 5,
    name: 'عنب أسود وأحمر فاخر (بدون بذر)',
    category: 'berries',
    categoryName: 'عنب وفراولة',
    unit: 'طبق فاخر سكري مقرمش بدون بذر (2 كجم)',
    badge: 'مقرمش وسكري 🍇',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80',
    benefits: 'عنب مشكل سكري بدون بذور طازج وعالي النقاء.'
  },
  {
    id: 6,
    name: 'صينية الفواكه الملكية (للهدايا والمناسبات)',
    category: 'baskets',
    categoryName: 'الصواني الملكية',
    unit: 'فواكه استوائية وموسمية بتنسيق وتغليف فاخر (10 كجم)',
    badge: 'ضيافة وهدايا ملكية 👑',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80',
    benefits: 'تنسيق مرصع بأجود أصناف الفواكه الفاخرة للتقديم المباشر.'
  },
  {
    id: 7,
    name: 'صينية التشكيلة العائلية الفاخرة من الفواكه',
    category: 'baskets',
    categoryName: 'الصواني الملكية',
    unit: 'تشكيلة عائلية شاملة من فواكه الموسم (12 كجم)',
    badge: 'الأكثر طلباً للأسر 🌟',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80',
    benefits: 'صينية عائلية وفيرة تلبي كافة احتياجات الأسرة الأسبوعية.'
  },
  {
    id: 8,
    name: 'تفاح سكري أحمر فاخر',
    category: 'citrus',
    categoryName: 'فواكه طازجة',
    unit: 'ثمار ممتازة منتقاة حبة بحبة (4 كجم)',
    badge: 'منتقى حبة بحبة ✨',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80',
    benefits: 'تفاح سكري أحمر عالي الجودة فرز يدوي دقيق.'
  },
  {
    id: 9,
    name: 'رمان طائفي حلو وموسمي',
    category: 'berries',
    categoryName: 'فواكه موسمي',
    unit: 'طبق رمان طائفي موسمي ممتاز بدرجة أولى (3.5 كجم)',
    badge: 'موسمي درجة أولى 💎',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80',
    benefits: 'رمان طائفي أحمر سكري مليء بالعصير والقيمة الغذائية.'
  },
  {
    id: 10,
    name: 'فراولة طازجة حمرة ومحلاة',
    category: 'berries',
    categoryName: 'عنب وفراولة',
    unit: 'أطباق فراولة فاخرة عطرية (1.5 كجم)',
    badge: 'طازجة ومحلاة 🍓',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80',
    benefits: 'فراولة عطرية نضرة محلاة قطفة فجر اليوم.'
  },
  {
    id: 11,
    name: 'مانجو استوائي جيزاني فاخر',
    category: 'tropical',
    categoryName: 'موز وفواكه استوائية',
    unit: 'صندوق مانجو محلى عالي الجودة (4 كجم)',
    badge: 'محصول استوائي فاخر 🥭',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80',
    benefits: 'مانجو استوائي عالي الحلاوة والرائحة الزكية.'
  },
  {
    id: 12,
    name: 'أناناس وكيوي استوائي مشكل',
    category: 'tropical',
    categoryName: 'موز وفواكه استوائية',
    unit: 'تشكيلة فواكه استوائية محلاة ومغلفة (3 كجم)',
    badge: 'فيتامينات وانتعاش 🍍',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80',
    benefits: 'أناناس وكيوي طازج مليء بالإنزيمات والفيتامينات.'
  },
  // --- Juices Category ---
  {
    id: 13,
    name: 'عصير فواكه طبيعي 100% مشكل',
    category: 'juices',
    categoryName: 'عصائر ومشروبات',
    unit: 'جالون عائلي (1.5 لتر) معصور طازجاً بدون سكر مضاف',
    badge: 'طبيعي 100% 🥤',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
    benefits: 'معصور طازجاً فجر اليوم من أفضل الفواكه الطبيعية 100%.'
  },
  {
    id: 14,
    name: 'عصير برتقال سكري طازج',
    category: 'juices',
    categoryName: 'عصائر ومشروبات',
    unit: 'جالون مبرد (1.5 لتر) عصرة اليوم غني بفيتامين C',
    badge: 'فيتامين C طازج 🍊',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80',
    benefits: 'عصير برتقال طبيعي نقي يعطيك الانتعاش والحيوية طوال اليوم.'
  },
  {
    id: 15,
    name: 'عصير مانجو استوائي طازج (ميلك شيك)',
    category: 'juices',
    categoryName: 'عصائر ومشروبات',
    unit: 'عبوة عائلية (1.5 لتر) كثيف وطبيعي فاخر',
    badge: 'طعم استوائي فاخر 🥭',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80',
    benefits: 'عصير مانجو طبيعي ثقيل ولذيذ يعكس نضارة ثمار المانجو.'
  },
  {
    id: 16,
    name: 'عصير رمان طائفي طبيعي طازج',
    category: 'juices',
    categoryName: 'عصائر ومشروبات',
    unit: 'عبوة فاخرة (1.5 لتر) معصور على البارد 100%',
    badge: 'معصور على البارد 🍇',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    benefits: 'عصير رمان طائفي أصلي غني بمضادات الأكسدة وبطعم مميز.'
  },
  {
    id: 17,
    name: 'عصير عوار قلب فواكه طبيعية',
    category: 'juices',
    categoryName: 'عصائر ومشروبات',
    unit: 'جالون مميز (1.5 لتر) خلطة الفراولة والمانجو والآيسكريم',
    badge: 'الأكثر طلباً 💖',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80',
    benefits: 'مزيج شهي ومقرمش من قطع الفواكه والعصائر المبردة.'
  },
  // --- Meats Category ---
  {
    id: 18,
    name: 'لحم حاشي بلدي طازج (بدون عظم)',
    category: 'meats',
    categoryName: 'ملحمة اللحوم',
    unit: 'كيلو جرام طازج ذبيحة اليوم من المزرعة',
    badge: 'بلدي طازج 100% 🥩',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80',
    benefits: 'لحم حاشي بلدي طري ممتاز للطبخ والمكبوس اليومي.'
  },
  {
    id: 19,
    name: 'لحم غنم نعيمي بلدي طازج',
    category: 'meats',
    categoryName: 'ملحمة اللحوم',
    unit: 'كيلو جرام بلدي فاخر مقطع ومجهز حسب رغبتك',
    badge: 'نعيمي بلدي درجة أولى 🐑',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80',
    benefits: 'لحم نعيمي بلدي طازج فجر اليوم ذبائح بلدي تحت إشراف صحي.'
  },
  {
    id: 20,
    name: 'لحم مفروم بلدي طازج فاخر',
    category: 'meats',
    categoryName: 'ملحمة اللحوم',
    unit: 'طبق (1 كجم) مفروم فوري طازج بدون دهن زائد',
    badge: 'مفروم طازج 🍖',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80',
    benefits: 'مفروم بلدي نقي مجهز فور الطلب للطهي الصحي والمعجنات.'
  },
  {
    id: 21,
    name: 'أوصال كباب لحم بلدي طازج للشوي',
    category: 'meats',
    categoryName: 'ملحمة اللحوم',
    unit: 'طبق فاخر (1 كجم) متبل ومجهز للشواء المباشر',
    badge: 'جاهز للشواء 🔥',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    benefits: 'أوصال لحم متبلة بخلطة خبراائنا جاهزة للشواء والجمعايات.'
  },
  {
    id: 22,
    name: 'ريش غنم نعيمي بلدي فاخرة',
    category: 'meats',
    categoryName: 'ملحمة اللحوم',
    unit: 'طبق ريش (1 كجم) طازجة وطرية جداً',
    badge: 'ريش طرية فاخرة 🥩',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    benefits: 'قطع ريش نعيمي طرية ومثالية للفرن والمشويات العائلية.'
  }
];

// Load custom saved catalog products from admin if configured
try {
  const savedCatalog = localStorage.getItem('cart_catalog_products');
  if (savedCatalog) {
    const parsed = JSON.parse(savedCatalog);
    if (Array.isArray(parsed) && parsed.length > 0) {
      CATALOG_PRODUCTS.splice(0, CATALOG_PRODUCTS.length, ...parsed);
    }
  }
  const item1 = CATALOG_PRODUCTS.find(x => x.id === 1);
  if (item1) {
    item1.name = 'حبحب أحمر سكري طازج';
    if (!item1.image || item1.image.includes('unsplash')) {
      item1.image = 'uploads/habhab.jpg';
    }
  }
} catch (e) {}

// --- Dynamic Announcements (Ticker) Data ---
const DEFAULT_APP_TICKER = [
  { id: 't-juices-new', text: '🥤 جديدنا! قسم العصائر والمشروبات الطبيعية 100% - معصورة طازجة فجر كل يوم بدون إضافات!', icon: 'ri-cup-fill', color: '#f59e0b' },
  { id: 't-meats-new', text: '🥩 جديدنا! قسم ملحمة اللحوم البلدية الطازجة (حاشي ونعيمي بلدي 100%) - ذبح اليوم وتوصيل مبرد!', icon: 'ri-restaurant-fill', color: '#ef4444' },
  { id: 't-unified', text: 'الرقم الموحد للطلب السريع عبر الواتساب: 7271 500 11 966+ في خدمتكم يومياً!', icon: 'ri-whatsapp-fill', color: '#25d366' },
  { id: 't-1', text: 'مندوبنا يختار لك بحب', icon: 'ri-heart-3-fill', color: '#f43f5e' },
  { id: 't-2', text: 'من المزرعة إلى طاولتك، طازجة كل يوم!', icon: 'ri-leaf-fill', color: '#84cc16' },
  { id: 't-3', text: 'قطفناها الفجر، لتصلك بأعلى جودة', icon: 'ri-sun-fill', color: '#f59e0b' },
  { id: 't-4', text: 'نختار لك حبة حبة، كأنك تتسوق بنفسك', icon: 'ri-hand-heart-fill', color: '#10b981' },
  { id: 't-5', text: 'خيرات زمان، بطعم اليوم', icon: 'ri-sparkle-fill', color: '#f59e0b' },
  { id: 't-6', text: 'صحتك تبدأ من اختيارك.. خضارنا سر حيويتك', icon: 'ri-heart-pulse-fill', color: '#ef4444' },
  { id: 't-7', text: 'صيدلية الطبيعة بين يديك؛ فيتامينات طازجة لعائلتك', icon: 'ri-medicine-bottle-fill', color: '#06b6d4' },
  { id: 't-8', text: 'طعم الطبيعة الحقيقي في كل قضمّة', icon: 'ri-restaurant-fill', color: '#84cc16' },
  { id: 't-9', text: 'نقيّ وصحي، لبيتك ومطبخك', icon: 'ri-shield-check-fill', color: '#10b981' },
  { id: 't-10', text: 'ألوان الطبيعة في طبقك.. طاقة ونقاء وجسم سليم', icon: 'ri-palette-fill', color: '#ec4899' },
  { id: 't-11', text: 'طعم يجمعنا، وجودة ترفعنا', icon: 'ri-trophy-fill', color: '#f59e0b' },
  { id: 't-12', text: 'فواكه تسرّ العين، وخضار تبهج القلب', icon: 'ri-emotion-happy-fill', color: '#10b981' },
  { id: 't-13', text: 'طازج، نظيف، وجاهز للتوصيل حتى باب بيتك بالرياض!', icon: 'ri-truck-fill', color: '#3b82f6' },
  { id: 't-14', text: 'لا تشيل همّ الوزن والتعب، خضارك يوصلك مغسول ومعقم', icon: 'ri-sparkles-fill', color: '#10b981' },
  { id: 't-15', text: 'نقاوة المزرعة تصلك بضغطة زر', icon: 'ri-flashlight-fill', color: '#f59e0b' },
  { id: 't-16', text: 'استثمر في صحتك وغذّي جسمك بالخيرات الطبيعية', icon: 'ri-plant-fill', color: '#84cc16' },
  { id: 't-17', text: 'فروعنا في خدمتكم بكافة أحياء ومناطق الرياض', icon: 'ri-map-pin-2-fill', color: '#f43f5e' }
];

// --- Dynamic Daily Special Deals Data ---
const DEFAULT_APP_DEALS = [
  {
    id: 'deal-1',
    title: 'صينية التوفير العائلي الذهبية (18 كجم)',
    badgeRibbon: 'وفر 30% اليوم 🔥',
    badgeColor: 'red',
    category: 'العرض الأقوى للعائلات',
    categoryIcon: 'ri-medal-fill',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80',
    floatingTag: 'هدية صينية ورقيات مجانية 🎁',
    stockPill: 'متبقي 6 صواني فقط',
    desc: 'تشكيلة شاملة ومتكاملة من أجود أصناف الفواكه الموسمية، الخضراوات الأساسية للطبخ، والورقيات المنتقاة فجر اليوم.',
    perks: [
      '8 كجم فواكه منوعة فاخرة',
      '10 كجم خضار طازجة يومية',
      'توصيل سريع يشمل كل مناطق الرياض'
    ],
    stockHeader: 'تم حجز 84% من كمية اليوم',
    stockSub: 'سارع قبل النفاد',
    stockPercent: 84,
    whatsappMsg: 'صينية التوفير العائلي الذهبية (18 كجم) - مع هدية ورقيات مجانية',
    isFeatured: true
  },
  {
    id: 'deal-2',
    title: 'صينية الضيافة الملكية الفاخرة',
    badgeRibbon: 'خصم 25% اليوم 👑',
    badgeColor: 'gold',
    category: 'للمناسبات والزيارات',
    categoryIcon: 'ri-vip-crown-fill',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=700&q=80',
    floatingTag: 'تغليف ملكي فاخر ✨',
    stockPill: 'متبقي 4 صواني',
    desc: 'تنسيق مذهل ومرتب من الفواكه الاستوائية النادرة والموسمية المحلاة، مغلفة بشرائط راقية تبيّض وجهك في كل ضيافة.',
    perks: [
      'دراق، أناناس، مانجو، فراولة، وتوت',
      'فواكه منتقاة حبة بحبة بدرجة امتياز',
      'جاهزة للتقديم المباشر بأناقة'
    ],
    stockHeader: 'تم حجز 78% من كمية اليوم',
    stockSub: 'عرض محدود',
    stockPercent: 78,
    whatsappMsg: 'صينية الضيافة الملكية الفاخرة - بخصم خاص اليوم',
    isFeatured: false
  },
  {
    id: 'deal-3',
    title: 'باقة مؤونة الخضار والورقيات الأسبوعية',
    badgeRibbon: 'توفير الأسبوع 🌿',
    badgeColor: 'green',
    category: 'مؤونة المطبخ اليومية',
    categoryIcon: 'ri-leaf-fill',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=700&q=80',
    floatingTag: 'قطفة فجر اليوم 🚜',
    stockPill: 'متوفر اليوم',
    desc: 'كل ما يحتاجه مطبخك من الطماطم البلدي، الخيار، الكوسة، الباذنجان، والورقيات الخضراء الطازجة بوزن وفير وتوفير ملحوظ.',
    perks: [
      '12 كجم خضار منوعة أساسية',
      '10 ربطات ورقيات خضراء منوعة',
      'فرز يدوي معقم وخالٍ من الشوائب'
    ],
    stockHeader: 'تم حجز 91% من كمية اليوم',
    stockSub: 'كمية قاربت على النفاد',
    stockPercent: 91,
    whatsappMsg: 'باقة مؤونة الخضار والورقيات الأسبوعية - عرض التوفير',
    isFeatured: false
  }
];

// --- Application State ---
let selectedBranch = BRANCHES_DATA[0];
let activeZone = 'all';
let currentCategory = 'all';
let branchSearchQuery = '';
let produceSearchQuery = '';
let quickCart = [];

// Load cart from session if exists
try {
  const savedCart = sessionStorage.getItem('agy_quick_cart');
  if (savedCart) {
    quickCart = JSON.parse(savedCart);
  }
} catch (e) {
  quickCart = [];
}

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDynamicTicker();
  renderDynamicDeals();
  renderBranchesHub();
  renderCatalogProducts();
  populateFooterBranches();
  initCartUI();
  initCounters();
  setupScrollHeader();
  initScrollProgress();
  initScrollReveal();
  initButtonRipples();
  initHeroCarousel();
  initDealsCountdown();
  initFloatingProduceParallax();
  setupStorageListener();
  setupMobileNavActiveState();
  renderCustomerReviews();
});

// --- Dynamic Announcement Ticker Rendering (Syncs with Admin) ---
function renderDynamicTicker() {
  const tickerTrack = document.getElementById('topTickerTrack');
  if (!tickerTrack) return;

  let items = DEFAULT_APP_TICKER;
  const saved = localStorage.getItem('cart_ticker_items');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) items = parsed;
    } catch (e) {
      console.warn('Error parsing saved ticker:', e);
    }
  }

  // Duplicate list once for seamless infinite marquee
  const fullList = [...items, ...items];
  tickerTrack.innerHTML = fullList.map(item => `
    <div class="ticker-item">
      <i class="${item.icon || 'ri-sparkle-fill'}" style="color: ${item.color || 'var(--accent-gold)'};"></i>
      <span>${item.text}</span>
    </div>
  `).join('');
}

// --- Dynamic Daily Deals Rendering (Syncs with Admin) ---
function renderDynamicDeals() {
  const dealsGrid = document.getElementById('dealsCardsGrid');
  if (!dealsGrid) return;

  let deals = DEFAULT_APP_DEALS;
  const saved = localStorage.getItem('cart_daily_deals');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) deals = parsed;
    } catch (e) {
      console.warn('Error parsing saved deals:', e);
    }
  }

  dealsGrid.innerHTML = deals.map(deal => {
    const ribbonClass = deal.badgeColor === 'gold' ? 'gold-ribbon' : (deal.badgeColor === 'green' ? 'green-ribbon' : '');
    const perksHtml = (deal.perks || []).map(p => `
      <div class="deal-perk"><i class="ri-check-double-line"></i> ${p}</div>
    `).join('');

    const escapedTitle = (deal.title || '').replace(/'/g, "\\'");
    const escapedImage = (deal.image || '').replace(/'/g, "\\'");
    const escapedTag = (deal.badgeRibbon || 'عرض حصري').replace(/'/g, "\\'");

    return `
      <div class="deal-card ${deal.isFeatured ? 'featured-deal' : ''} reveal-on-scroll card-hover-lift is-revealed">
        <div class="deal-badge-ribbon ${ribbonClass}">${deal.badgeRibbon || 'عرض اليوم 🔥'}</div>
        <div class="deal-img-box">
          <img src="${deal.image}" alt="${deal.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=700&q=80'" />
          <div class="deal-floating-tag">${deal.floatingTag || 'طازج يومياً 🌿'}</div>
        </div>
        <div class="deal-card-body">
          <div class="deal-category-row">
            <span class="deal-category"><i class="${deal.categoryIcon || 'ri-medal-fill'}"></i> ${deal.category || 'عرض حصري'}</span>
            <span class="deal-stock-pill"><i class="ri-flashlight-fill"></i> ${deal.stockPill || 'متوفر اليوم'}</span>
          </div>
          <h3 class="deal-title">${deal.title}</h3>
          <p class="deal-desc">${deal.desc || ''}</p>
          
          <div class="deal-perks-list">
            ${perksHtml}
          </div>

          <div class="deal-stock-bar-wrap">
            <div class="stock-bar-header">
              <span>${deal.stockHeader || `تم حجز ${deal.stockPercent || 85}% من كمية اليوم`}</span>
              <strong>${deal.stockSub || 'سارع قبل النفاد'}</strong>
            </div>
            <div class="stock-progress-bar"><div class="stock-fill" style="width: ${deal.stockPercent || 85}%;"></div></div>
          </div>

          <div class="deal-actions-group">
            <button class="btn-deal-cart-add" onclick="addDealToCart('${deal.id}', '${escapedTitle}', '${escapedTag}', '${escapedImage}')">
              <i class="ri-shopping-basket-fill"></i> إضافة للسلة
            </button>
            <button class="btn-deal-order shine-effect" onclick="orderDealWhatsApp('${(deal.whatsappMsg || deal.title).replace(/'/g, "\\'")}')">
              <i class="ri-whatsapp-fill"></i> طلب العرض فوراً
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Auto-Sync with Admin in other tabs ---
function setupStorageListener() {
  window.addEventListener('storage', (e) => {
    if (e.key === 'cart_ticker_items') {
      renderDynamicTicker();
    } else if (e.key === 'cart_daily_deals') {
      renderDynamicDeals();
    }
  });
}

// --- Live Deals Countdown Timer ---
function initDealsCountdown() {
  const hoursEl = document.getElementById('dealHours');
  const minutesEl = document.getElementById('dealMinutes');
  const secondsEl = document.getElementById('dealSeconds');
  if (!hoursEl || !minutesEl || !secondsEl) return;

  function updateTimer() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);

    let diff = midnight - now;
    if (diff <= 0) diff = 0;

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

// --- Order Deal Trigger via WhatsApp ---
function orderDealWhatsApp(dealName) {
  const branch = selectedBranch || BRANCHES_DATA[0];
  const message = `السلام عليكم مؤسسة عربة الخضار (${branch.name})،\nأود الاستفادة من العرض اليومي التالي:\n🔥 ${dealName}\nالرقم الموحد: ${UNIFIED_WHATSAPP_DISPLAY}\nيرجى تأكيد الحجز والتوصيل لباب المنزل بالرياض. شكراً لكم.`;
  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- Smooth Parallax for Floating Produce Particles ---
function initFloatingProduceParallax() {
  const fruits = document.querySelectorAll('.float-fruit');
  if (!fruits.length) return;

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    fruits.forEach(fruit => {
      const orb = fruit.querySelector('.fruit-glass-orb');
      if (!orb) return;
      const speed = parseFloat(fruit.getAttribute('data-speed') || '1');
      const offsetX = (clientX - centerX) * 0.015 * speed;
      const offsetY = (clientY - centerY) * 0.015 * speed;
      orb.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });
  }, { passive: true });
}

// --- Theme (Light / Dark Mode) ---
function initTheme() {
  const savedTheme = localStorage.getItem('agy_cart_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('agy_cart_theme', newTheme);
  updateThemeIcon(newTheme);
  showToast(newTheme === 'dark' ? 'تم تفعيل الوضع الليلي 🌙' : 'تم تفعيل الوضع النهاري ☀️');
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = theme === 'dark' ? 'ri-sun-fill' : 'ri-moon-fill';
  }
}

// --- Header Scroll Effect ---
function setupScrollHeader() {
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Mobile Drawer ---
function toggleMobileMenu() {
  const drawerBackdrop = document.getElementById('mobileDrawerBackdrop');
  if (drawerBackdrop) {
    drawerBackdrop.classList.toggle('open');
  }
}

// --- Branches Hub Rendering & Zone Filter ---
function filterBranchesByZone(zone, buttonElement) {
  activeZone = zone;

  document.querySelectorAll('.region-filter-btn').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  const filtered = getFilteredBranches();
  if (filtered.length > 0 && !filtered.some(b => b.id === selectedBranch.id)) {
    selectedBranch = filtered[0];
  }

  renderBranchesHub();
}

// --- Live Branch Search Handler ---
function handleBranchSearch(query) {
  branchSearchQuery = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('clearBranchSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = branchSearchQuery ? 'flex' : 'none';
  }

  const filtered = getFilteredBranches();
  if (filtered.length > 0 && !filtered.some(b => b.id === selectedBranch.id)) {
    selectedBranch = filtered[0];
  }

  renderBranchesHub();
}

function clearBranchSearch() {
  const searchInput = document.getElementById('branchSearchInput');
  if (searchInput) searchInput.value = '';
  handleBranchSearch('');
}

function getFilteredBranches() {
  let list = BRANCHES_DATA;

  // Filter by zone if not all
  if (activeZone !== 'all') {
    list = list.filter(b => b.zone === activeZone);
  }

  // Filter by live search query if typed
  if (branchSearchQuery) {
    list = list.filter(b => 
      b.name.toLowerCase().includes(branchSearchQuery) ||
      b.displayName.toLowerCase().includes(branchSearchQuery) ||
      b.address.toLowerCase().includes(branchSearchQuery) ||
      b.coverage.toLowerCase().includes(branchSearchQuery) ||
      b.zoneName.toLowerCase().includes(branchSearchQuery)
    );
  }

  return list;
}

function isBranchOpenNow(branchObj) {
  const b = branchObj || selectedBranch;
  if (b && b.statusOverride === 'open') return true;
  if (b && b.statusOverride === 'closed') return false;

  const hour = new Date().getHours();
  return hour >= 8 && hour < 24;
}

function renderBranchesHub() {
  renderBranchFilterTabs();
  renderActiveBranchShowcase();
  updateBranchLabels();
}

function renderBranchFilterTabs() {
  const tabsContainer = document.getElementById('branchFilterTabs');
  if (!tabsContainer) return;

  const branches = getFilteredBranches();

  if (branches.length === 0) {
    tabsContainer.innerHTML = `
      <div class="empty-search-state">
        <i class="ri-map-pin-line"></i>
        <span>لم نجد فرعاً يطابق بحثك "${branchSearchQuery}".</span>
        <button class="btn-reset-search" onclick="clearBranchSearch()">عرض كافة الفروع</button>
      </div>
    `;
    return;
  }

  tabsContainer.innerHTML = branches.map(branch => `
    <button class="branch-tab-btn ${branch.id === selectedBranch.id ? 'active' : ''}" onclick="selectActiveBranch('${branch.id}')">
      <i class="ri-store-2-line"></i>
      <span>${branch.displayName}</span>
    </button>
  `).join('');
}

function renderActiveBranchShowcase() {
  const container = document.getElementById('activeBranchShowcase');
  if (!container) return;

  const b = selectedBranch;
  if (!b) return;

  container.innerHTML = `
    <div class="active-branch-card visual-card-3d">
      
      <!-- Info Column -->
      <div class="active-branch-info-col">
        <div class="active-branch-header">
          <div class="active-branch-avatar">
            <i class="ri-store-3-fill"></i>
          </div>
          <div>
            <div class="active-branch-badge-row" style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 0.4rem;">
              <span class="branch-zone-pill"><i class="ri-map-pin-2-fill"></i> ${b.zoneName}</span>
              <span class="${isBranchOpenNow() ? 'branch-status-tag open' : 'branch-status-tag closed'}">
                <span class="${isBranchOpenNow() ? 'status-dot-pulse' : ''}"></span>
                ${isBranchOpenNow() ? 'الفرع مفتوح الآن لاستقبال الطلبات 🟢' : 'الفرع مغلق حالياً • نلبي طلباتكم فجر غد 🔴'}
              </span>
            </div>
            <h3 class="active-branch-title">فرع ${b.name}</h3>
          </div>
        </div>

        <div class="active-branch-details-grid">
          <div class="branch-detail-item">
            <div class="detail-icon"><i class="ri-map-pin-line"></i></div>
            <div>
              <label>العنوان والحي:</label>
              <span>${b.address}</span>
            </div>
          </div>

          <div class="branch-detail-item">
            <div class="detail-icon"><i class="ri-time-line"></i></div>
            <div>
              <label>ساعات العمل اليومية:</label>
              <span>${b.hours}</span>
            </div>
          </div>

          <div class="branch-detail-item">
            <div class="detail-icon"><i class="ri-truck-line"></i></div>
            <div>
              <label>نطاق التغطية والتوصيل:</label>
              <span>${b.coverage}</span>
            </div>
          </div>

          <div class="branch-detail-item">
            <div class="detail-icon" style="color: #25d366;"><i class="ri-whatsapp-fill"></i></div>
            <div>
              <label>الرقم الموحد (واتساب وتواصل):</label>
              <span dir="ltr" style="text-align: right; font-weight: 800; color: var(--primary);">${UNIFIED_WHATSAPP_DISPLAY}</span>
            </div>
          </div>
        </div>

        <!-- Love Promise Banner -->
        <div class="branch-love-promise-box">
          <div class="love-promise-icon"><i class="ri-heart-3-fill"></i></div>
          <div class="love-promise-text">
            <strong>مندوبنا يختار لك بحب</strong>
            <p>مندوب فرع ${b.name} ينتقي لك أفضل ثمار ومحاصيل اليوم حبة بحبة كأنك تتسوق بنفسك 🌿</p>
          </div>
        </div>

        <div class="active-branch-actions-row">
          <button class="btn-branch-whatsapp shine-effect" onclick="sendWhatsAppToBranch('${b.id}')" title="تواصل واتساب عبر الرقم الموحد">
            <i class="ri-whatsapp-fill"></i> تواصل واتساب (${UNIFIED_WHATSAPP_DISPLAY})
          </button>
          <a href="tel:${UNIFIED_WHATSAPP_PHONE}" class="btn-branch-call" title="اتصال هاتفي بالرقم الموحد">
            <i class="ri-phone-fill"></i> اتصال موحد
          </a>
          <a href="${b.mapDirectUrl}" target="_blank" class="btn-branch-map-action" title="فتح في قوقل ماب">
            <i class="ri-direction-fill"></i> Google Maps
          </a>
        </div>
      </div>

      <!-- Map Column -->
      <div class="active-branch-map-col">
        <iframe class="active-branch-iframe" loading="lazy" allowfullscreen src="${b.mapEmbedUrl}" title="موقع ${b.name}"></iframe>
      </div>

    </div>
  `;
}

function selectActiveBranch(branchId) {
  const found = BRANCHES_DATA.find(b => b.id === branchId);
  if (found) {
    selectedBranch = found;
    renderBranchesHub();
    updateCartBranchSelect();
    showToast(`تم تحديد فرع ${selectedBranch.name} 🌿`);
  }
}

function updateBranchLabels() {
  const footerLabel = document.getElementById('footerActiveBranchName');
  if (footerLabel && selectedBranch) footerLabel.textContent = `فرع ${selectedBranch.name}`;
}

// --- Direct WhatsApp & Call Actions ---
function handleDirectContact() {
  sendWhatsAppToBranch(selectedBranch.id);
}

function callCurrentBranch() {
  window.location.href = `tel:${UNIFIED_WHATSAPP_PHONE}`;
}

function sendWhatsAppToBranch(branchId) {
  const branch = BRANCHES_DATA.find(b => b.id === branchId) || selectedBranch;
  const message = `السلام عليكم ورحمة الله،\nأتواصل معكم للاستفسار والطلب من مؤسسة عربة الخضار (${branch.name}) عبر الرقم الموحد (${UNIFIED_WHATSAPP_DISPLAY}).`;
  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function inquireProductWhatsApp(productId) {
  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const branch = selectedBranch || BRANCHES_DATA[0];
  const message = `السلام عليكم مؤسسة عربة الخضار (${branch.name})،\nأود الاستفسار والطلب بخصوص الصنف التالي عبر الرقم الموحد:\n🌿 ${product.name}\n- التفاصيل: ${product.unit}\nالرقم الموحد: ${UNIFIED_WHATSAPP_DISPLAY}\nيرجى تأكيد التوافر وإمكانية التوصيل لباب المنزل بالرياض. شكراً لكم.`;
  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- Product Catalog Filter & Display ---
function filterCatalog(category, buttonElement) {
  currentCategory = category;
  
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  renderCatalogProducts();
}

function handleProduceSearch(query) {
  produceSearchQuery = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('clearProduceSearchBtn');
  if (clearBtn) {
    clearBtn.style.display = produceSearchQuery ? 'flex' : 'none';
  }
  renderCatalogProducts();
}

function clearProduceSearch() {
  const searchInput = document.getElementById('produceSearchInput');
  if (searchInput) searchInput.value = '';
  handleProduceSearch('');
}

function renderCatalogProducts() {
  const gridContainer = document.getElementById('productsModernGrid');
  if (!gridContainer) return;

  let filtered = CATALOG_PRODUCTS;
  if (currentCategory === 'organic') {
    filtered = CATALOG_PRODUCTS.filter(p => p.isOrganic || p.id % 2 === 1);
  } else if (currentCategory === 'local') {
    filtered = CATALOG_PRODUCTS.filter(p => p.isLocal || p.id % 3 !== 0);
  } else if (currentCategory !== 'all') {
    filtered = CATALOG_PRODUCTS.filter(p => p.category === currentCategory);
  }

  if (produceSearchQuery) {
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(produceSearchQuery) ||
      p.unit.toLowerCase().includes(produceSearchQuery) ||
      p.categoryName.toLowerCase().includes(produceSearchQuery)
    );
  }

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="empty-produce-state" style="grid-column: 1/-1;">
        <i class="ri-shopping-basket-line"></i>
        <h3>لم نجد أصنافاً مطابقة لبحثك "${produceSearchQuery}"</h3>
        <p>يمكنك طلب أي صنف خاص غير معروض مباشرة عبر الواتساب مع مندوب الفرع.</p>
        <button class="btn-primary shine-effect" onclick="clearProduceSearch(); filterCatalog('all');">عرض جميع التشكيلات</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(product => {
    const escapedName = product.name.replace(/'/g, "\\'");
    const escapedUnit = product.unit.replace(/'/g, "\\'");
    const escapedImage = product.image.replace(/'/g, "\\'");

    return `
      <div class="product-item-card reveal-on-scroll card-hover-lift is-revealed">
        <div class="product-img-wrapper" onclick="openQuickView(${product.id})" style="cursor: pointer;">
          <img src="${product.image}" alt="${product.name}" loading="lazy" />
          <span class="product-badge-overlay ${product.badgeClass}">${product.badge}</span>
        </div>

        <div class="product-card-info">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="product-category-tag">${product.categoryName}</span>
            <button onclick="openQuickView(${product.id})" style="background:none; border:none; color:var(--primary); font-size:0.85rem; font-weight:700; cursor:pointer;" title="معاينة تفاصيل النقاء">
              <i class="ri-eye-line"></i> معاينة النقاء
            </button>
          </div>
          <h4 class="product-name" onclick="openQuickView(${product.id})" style="cursor:pointer;">${product.name}</h4>
          <span class="product-unit">${product.unit}</span>

          <div class="product-actions-cluster">
            <button class="btn-product-cart-add" onclick="addProductToCart(${product.id}, '${escapedName}', '${escapedUnit}', '${escapedImage}')" title="إضافة إلى قائمة السلة">
              <i class="ri-shopping-basket-fill"></i> <span>إضافة سريعة</span>
            </button>
            <button class="btn-product-order-whatsapp" onclick="inquireProductWhatsApp(${product.id})" title="طلب فوري عبر الواتساب الموحد">
              <i class="ri-whatsapp-fill"></i> <span>اطلب لضيافتك</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- Smart Hospitality Calculator State & Logic ---
let calcGuestsCount = 5;
let calcEventType = 'family';

function setCalcGuests(count, buttonElement) {
  calcGuestsCount = count;
  document.querySelectorAll('.calc-guest-pill').forEach(b => b.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
  updateCalcResult();
}

function setCalcEvent(type, buttonElement) {
  calcEventType = type;
  document.querySelectorAll('.calc-event-pill').forEach(b => b.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
  updateCalcResult();
}

function updateCalcResult() {
  const titleEl = document.getElementById('calcResultTitle');
  const fruitEl = document.getElementById('calcFruitItem');
  const juiceEl = document.getElementById('calcJuiceItem');
  const meatEl = document.getElementById('calcMeatItem');

  let fruitText = '';
  let juiceText = '';
  let meatText = '';
  let titleText = '';

  if (calcGuestsCount <= 5) {
    titleText = `التشكيلة العائلية الوفيرة (${calcGuestsCount} أفراد)`;
    fruitText = 'صينية التشكيلة العائلية الفاخرة (8 كجم)';
    juiceText = '1 جالون عصير برتقال / مشكل طبيعي (1.5 لتر)';
    meatText = '2 كجم لحم نعيمي بلدي طازج / مفروم';
  } else if (calcGuestsCount <= 12) {
    titleText = `باقة عزيمة الأحباب والتجمعات (${calcGuestsCount} أفراد)`;
    fruitText = 'صينية الفواكه الملكية الفاخرة للهدايا (10 كجم)';
    juiceText = '2 جالون عصير طبيعي مشكل ومانجو (3 لتر)';
    meatText = '4 كجم لحم نعيمي بلدي + أوصال كباب للشوي';
  } else if (calcGuestsCount <= 25) {
    titleText = `باقة الولائم والولاء الكبرى (${calcGuestsCount} فرد)`;
    fruitText = '2 صواني ملكية مرصعة بالفواكه الاستوائية (20 كجم)';
    juiceText = '4 جالونات عائلية عصائر طبيعية منوعة (6 لتر)';
    meatText = '8 كجم لحم حاشي ونعيمي بلدي ذبيحة اليوم';
  } else {
    titleText = `باقة المناسبات الضخمة والولائم الملكية (35+ فرد)`;
    fruitText = '3 صواني ملكية فاخرة مرصعة للتنسيق المباشر (30 كجم)';
    juiceText = '6 جالونات عائلية عوار قلب وعصائر طبيعية (9 لتر)';
    meatText = 'ذبيحة نعيمي بلدي كاملة مقطعة ومجهزة للطهي';
  }

  if (calcEventType === 'hospitality') {
    fruitText += ' + تغليف إهداء وشرائط راقية ✨';
  } else if (calcEventType === 'feast') {
    meatText += ' + بهارات وتتبيلة كباب وشواء مجانية 🔥';
  }

  if (titleEl) titleEl.textContent = titleText;
  if (fruitEl) fruitEl.textContent = fruitText;
  if (juiceEl) juiceEl.textContent = juiceText;
  if (meatEl) meatEl.textContent = meatText;
}

function sendCalcWhatsAppOrder() {
  const branch = selectedBranch || BRANCHES_DATA[0];
  const title = document.getElementById('calcResultTitle')?.textContent || 'تشكيلة ضيافة';
  const fruit = document.getElementById('calcFruitItem')?.textContent || '';
  const juice = document.getElementById('calcJuiceItem')?.textContent || '';
  const meat = document.getElementById('calcMeatItem')?.textContent || '';

  const message = 
`السلام عليكم ورحمة الله وبركاته،
*مؤسسة عربة الخضار للفواكه واللحوم* (${branch.name}) 🌿
الرقم الموحد: ${UNIFIED_WHATSAPP_DISPLAY}

أود الاستفسار والطلب بناءً على نتائج *حاسبة الضيافة الذكية*:
------------------------------------------
🌟 *نوع المناسبة والتوصية:* ${title}
👑 *صينية الفواكه:* ${fruit}
🥤 *العصائر الطبيعية:* ${juice}
🥩 *ملحمة اللحوم:* ${meat}
------------------------------------------
📍 *الفرع المختار بالرياض:* ${branch.name}

يرجى تأكيد التوافر والتوصيل المبرد المباشر. شكراً لكم!`;

  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- Quick Order Cart Logic (Interactive Floating Cart & Drawer) ---
function initCartUI() {
  populateCartBranchSelect();
  updateCartCounters();
  renderCartItems();
}

function populateCartBranchSelect() {
  const selectEl = document.getElementById('cartBranchSelect');
  if (!selectEl) return;

  selectEl.innerHTML = BRANCHES_DATA.map(b => `
    <option value="${b.id}" ${b.id === selectedBranch.id ? 'selected' : ''}>
      ${b.name} (${b.zoneName})
    </option>
  `).join('');
}

function updateCartBranchSelect() {
  const selectEl = document.getElementById('cartBranchSelect');
  if (selectEl && selectedBranch) {
    selectEl.value = selectedBranch.id;
  }
}

function onCartBranchChange(branchId) {
  const found = BRANCHES_DATA.find(b => b.id === branchId);
  if (found) {
    selectedBranch = found;
    renderBranchesHub();
    showToast(`تم تعيين فرع ${selectedBranch.name} لاستلام الطلب 🌿`);
  }
}

function addProductToCart(id, name, desc, image) {
  addToCartInternal({
    id: `prod-${id}`,
    name: name,
    desc: desc,
    image: image,
    type: 'منتج'
  });
}

function addDealToCart(id, title, tag, image) {
  addToCartInternal({
    id: `deal-${id}`,
    name: title,
    desc: tag,
    image: image,
    type: 'عرض خاص'
  });
}

function playChimeSound(type = 'add') {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'sine';
    if (type === 'add') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.1);
      osc.frequency.exponentialRampToValueAtTime(783.99, ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
    }
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  } catch (e) {}
}

function addToCartInternal(item) {
  const existing = quickCart.find(i => i.id === item.id);
  if (existing) {
    existing.qty += 1;
  } else {
    quickCart.push({
      ...item,
      qty: 1
    });
  }

  saveCart();
  updateCartCounters();
  renderCartItems();
  
  // Trigger sound effect and animation
  playChimeSound('add');
  animateCartButtons();
  showToast(`تمت إضافة "${item.name}" إلى سلة طلباتك 🛒`);
}

function saveCart() {
  try {
    sessionStorage.setItem('agy_quick_cart', JSON.stringify(quickCart));
  } catch (e) {}
}

function updateCartCounters() {
  const totalQty = quickCart.reduce((sum, item) => sum + item.qty, 0);

  const counterEl = document.getElementById('cartCounter');
  const headerBadge = document.getElementById('headerCartCount');
  const drawerBadge = document.getElementById('drawerCartCount');
  const mobileNavBadge = document.getElementById('mobileNavCartCount');
  const pillSub = document.getElementById('cartPillSub');
  const totalItemsCount = document.getElementById('cartTotalItemsCount');

  if (counterEl) counterEl.textContent = totalQty;
  if (headerBadge) headerBadge.textContent = totalQty;
  if (drawerBadge) drawerBadge.textContent = totalQty;
  if (mobileNavBadge) mobileNavBadge.textContent = totalQty;
  if (pillSub) pillSub.textContent = totalQty === 0 ? 'السلة فارغة' : `${totalQty} صنف في السلة`;
  if (totalItemsCount) totalItemsCount.textContent = `${totalQty} صنف`;

  // Free delivery progress calculation
  const freeDevBox = document.getElementById('freeDeliveryBar');
  if (freeDevBox) {
    const target = 3;
    const progress = Math.min(100, Math.round((totalQty / target) * 100));
    const remaining = target - totalQty;
    
    if (totalQty >= target) {
      freeDevBox.innerHTML = `
        <div class="free-delivery-text">
          <span><i class="ri-truck-fill" style="color:#10b981;"></i> تهانينا! طلبك مؤهل للتوصيل المجاني بالرياض 🎉</span>
          <span style="color:#10b981;">100%</span>
        </div>
        <div class="free-delivery-track">
          <div class="free-delivery-fill" style="width: 100%;"></div>
        </div>
      `;
    } else {
      freeDevBox.innerHTML = `
        <div class="free-delivery-text">
          <span><i class="ri-truck-line"></i> أضف ${remaining} ${remaining === 1 ? 'صنف آخر' : 'أصناف إضافية'} للحصول على توصيل مجاني 🚚</span>
          <span>${progress}%</span>
        </div>
        <div class="free-delivery-track">
          <div class="free-delivery-fill" style="width: ${progress}%;"></div>
        </div>
      `;
    }
  }

  const floatingCart = document.getElementById('floatingOrderCart');
  if (floatingCart) {
    if (totalQty > 0) {
      floatingCart.classList.add('has-items');
    } else {
      floatingCart.classList.remove('has-items');
    }
  }
}

function animateCartButtons() {
  const floatingCart = document.getElementById('floatingOrderCart');
  const headerCart = document.getElementById('headerCartBtn');

  if (floatingCart) {
    floatingCart.classList.add('cart-bounce');
    setTimeout(() => floatingCart.classList.remove('cart-bounce'), 600);
  }

  if (headerCart) {
    headerCart.classList.add('cart-bounce');
    setTimeout(() => headerCart.classList.remove('cart-bounce'), 600);
  }
}

function toggleCartDrawer() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (!backdrop) return;

  backdrop.classList.toggle('open');
  if (backdrop.classList.contains('open')) {
    renderCartItems();
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItemsBody');
  if (!container) return;

  if (quickCart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-view">
        <div class="empty-cart-icon"><i class="ri-shopping-basket-line"></i></div>
        <h4>سلة الطلبات فارغة</h4>
        <p>تصفح التشكيلات والصواني أو العروض اليومية وأضف ما ترغب لطلبه مباشرة إلى الواتساب.</p>
        <button class="btn-primary shine-effect" onclick="toggleCartDrawer(); document.getElementById('products').scrollIntoView({behavior: 'smooth'});">
          استكشف التشكيلات الآن
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = quickCart.map(item => `
    <div class="cart-item-row">
      <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=150&q=80'" />
      
      <div class="cart-item-details">
        <div class="cart-item-title-row">
          <strong class="cart-item-name">${item.name}</strong>
          <button class="cart-item-del-btn" onclick="removeFromCart('${item.id}')" title="حذف من السلة">
            <i class="ri-delete-bin-line"></i>
          </button>
        </div>
        <span class="cart-item-desc">${item.desc || ''}</span>
        
        <div class="cart-qty-control">
          <button class="qty-btn" onclick="changeItemQty('${item.id}', -1)" title="تقليل الكمية">
            <i class="ri-subtract-line"></i>
          </button>
          <span class="qty-num">${item.qty}</span>
          <button class="qty-btn" onclick="changeItemQty('${item.id}', 1)" title="زيادة الكمية">
            <i class="ri-add-line"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function changeItemQty(id, delta) {
  const item = quickCart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    quickCart = quickCart.filter(i => i.id !== id);
  }

  saveCart();
  updateCartCounters();
  renderCartItems();
}

function removeFromCart(id) {
  quickCart = quickCart.filter(i => i.id !== id);
  saveCart();
  updateCartCounters();
  renderCartItems();
  showToast('تم حذف الصنف من السلة');
}

function clearCart() {
  if (quickCart.length === 0) return;
  quickCart = [];
  saveCart();
  updateCartCounters();
  renderCartItems();
  showToast('تم تفريغ سلة الطلبات');
}

function toggleGiftCardOptions() {
  const checkbox = document.getElementById('cartIsGiftCheckbox');
  const panel = document.getElementById('cartGiftPanel');
  if (panel && checkbox) {
    panel.style.display = checkbox.checked ? 'flex' : 'none';
  }
}

function submitCartWhatsApp() {
  if (quickCart.length === 0) {
    showToast('سلة طلباتك فارغة! أضف أصنافاً أولاً.');
    return;
  }

  const branch = selectedBranch || BRANCHES_DATA[0];

  let itemsList = '';
  quickCart.forEach((item, index) => {
    itemsList += `${index + 1}. *${item.name}* (الكمية: ${item.qty})\n`;
  });

  const totalQty = quickCart.reduce((sum, item) => sum + item.qty, 0);

  const isGift = document.getElementById('cartIsGiftCheckbox')?.checked;
  const senderName = document.getElementById('giftSenderName')?.value.trim();
  const recipientName = document.getElementById('giftRecipientName')?.value.trim();
  const giftMsg = document.getElementById('giftMessageText')?.value.trim();

  let giftSection = '';
  if (isGift) {
    giftSection = 
`\n🎁 *هذا الطلب عبارة عن هدية شخصية:*
- *اسم المُهدي:* ${senderName || 'غير محدد'}
- *اسم المهدى إليه (المستلم بالرياض):* ${recipientName || 'غير محدد'}
- *كرت التهنئة والرسالة:*
"${giftMsg || 'مع أطيب الأمنيات والمحبة'}"
------------------------------------------\n`;
  }

  const message = 
`السلام عليكم ورحمة الله وبركاته،
*مؤسسة عربة الخضار للفواكه واللحوم* (${branch.name}) 🌿
الرقم الموحد: ${UNIFIED_WHATSAPP_DISPLAY}

أود إرسال طلب جديد من خلال سلة الموقع الإلكتروني:
------------------------------------------${giftSection}
📦 *قائمة الأصناف المطلوبة:*
${itemsList}------------------------------------------
🔢 *إجمالي الأصناف:* ${totalQty} صنف
📍 *الفرع المختار:* ${branch.name}
🛵 *الطلب للتوصيل إلى العنوان التالي:*
(يرجى كتابة الحي أو إرسال اللوكيشن هنا)

يرجى تأكيد الاستلام وتجهيز الطلب. شكراً لكم!`;

  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- FAQ Accordion Toggle ---
function toggleFaq(button) {
  const faqItem = button.closest('.faq-item');
  if (!faqItem) return;

  const isActive = faqItem.classList.contains('active');

  // Close all other items for clean accordion behavior
  document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));

  if (!isActive) {
    faqItem.classList.add('active');
  }
}

// --- Mobile Bottom Navigation Active Indicator on Scroll ---
function setupMobileNavActiveState() {
  const sections = ['hero', 'branches', 'deals', 'products'];
  const navItems = document.querySelectorAll('.mobile-bottom-nav .mobile-nav-item:not(.cart-btn)');

  window.addEventListener('scroll', () => {
    let current = 'hero';
    sections.forEach(secId => {
      const el = document.getElementById(secId);
      if (el) {
        const top = el.offsetTop - 120;
        if (window.scrollY >= top) {
          current = secId;
        }
      }
    });

    navItems.forEach(item => {
      const href = item.getAttribute('href');
      if (href === `#${current}`) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }, { passive: true });
}

// --- Footer Branch List ---
function populateFooterBranches() {
  const container = document.getElementById('footerBranchesList');
  if (!container) return;

  container.innerHTML = BRANCHES_DATA.map(b => `
    <li>
      <a href="javascript:void(0)" onclick="selectActiveBranch('${b.id}'); document.getElementById('branches').scrollIntoView({behavior: 'smooth'});">
        <i class="ri-map-pin-2-fill" style="color: var(--accent-lime);"></i> ${b.name}
      </a>
    </li>
  `).join('');
}

// --- Animated Stats Counter ---
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const speed = 40;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const step = Math.ceil(target / speed) || 1;

        const updateCount = () => {
          count += step;
          if (count < target) {
            counter.innerText = count;
            setTimeout(updateCount, 30);
          } else {
            counter.innerText = target;
          }
        };

        updateCount();
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
}

// --- Real-time Scroll Progress Bar ---
function initScrollProgress() {
  const progressBar = document.getElementById('scrollProgressBar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight > 0) {
      const scrollPercent = (scrollTop / docHeight) * 100;
      progressBar.style.width = `${scrollPercent}%`;
    }
  }, { passive: true });
}

// --- Scroll Reveal Animations ---
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  if (!reveals.length) return;

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));
}

// --- Interactive Button Ripple Effect ---
function initButtonRipples() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, .btn-primary, .btn-hero-primary, .btn-branch-whatsapp, .btn-deal-order, .btn-promo-cta');
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple-wave';

    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 650);
  });
}

// --- Glassmorphism Toast Notification ---
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast-item ${type === 'error' ? 'error' : ''}`;
  const icon = type === 'error' ? 'ri-error-warning-fill' : 'ri-checkbox-circle-fill';
  const iconColor = type === 'error' ? '#ef4444' : '#10b981';

  toast.innerHTML = `<i class="${icon}" style="color: ${iconColor}; font-size: 1.25rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px) scale(0.92)';
    setTimeout(() => toast.remove(), 350);
  }, 3200);
}

// --- Hero Animated Image Carousel (Auto-Switch & Rotating Alluring Phrases) ---
let currentHeroSlide = 0;
let heroCarouselTimer = null;

const HERO_TOP_BADGE_PHRASES = [
  {
    icon: 'ri-heart-3-fill',
    iconClass: 'pink-heart',
    title: 'مندوبنا يختار لك بحب',
    desc: 'فرز وانتقاء يدوي حبة بحبة لبيتك'
  },
  {
    icon: 'ri-cup-fill',
    iconClass: 'gold',
    title: '🥤 عصائر طبيعية 100%',
    desc: 'معصورة طازجة فجر اليوم بدون سكر مضاف'
  },
  {
    icon: 'ri-restaurant-fill',
    iconClass: 'pink-heart',
    title: '🥩 ملحمة اللحوم البلدية',
    desc: 'لحم حاشي ونعيمي بلدي طازج ذبيحة اليوم'
  },
  {
    icon: 'ri-vip-crown-fill',
    iconClass: 'gold',
    title: 'صواني ملكية للمناسبات',
    desc: 'تنسيق فاخر يرفع الرأس ويجمل ضيافتك'
  },
  {
    icon: 'ri-sparkling-2-fill',
    iconClass: 'green',
    title: 'بطيخ وشمام سكري طازج',
    desc: 'ثمار محلاة ومبردة منتقاة يومياً'
  }
];

const HERO_BOTTOM_BADGE_PHRASES = [
  {
    icon: 'ri-truck-fill',
    iconClass: 'gold',
    title: 'أسطول توصيل مجهز بالرياض',
    desc: 'توصيل سريع يشمل كل مناطق الرياض'
  },
  {
    icon: 'ri-temp-cold-fill',
    iconClass: 'green',
    title: 'انتعاش مبرد لباب المنزل',
    desc: 'جالونات عائلية بمختلف نكهات الفواكه'
  },
  {
    icon: 'ri-shield-check-fill',
    iconClass: 'green',
    title: 'توصيل مبرد وإشراف صحي',
    desc: 'مقطع ومجهز حسب طلبك ونظافة 100%'
  },
  {
    icon: 'ri-hand-heart-fill',
    iconClass: 'pink-heart',
    title: 'كأنك تتسوق بنفسك',
    desc: 'نختار لك الأجود حبة بحبة بأمانة'
  },
  {
    icon: 'ri-medal-fill',
    iconClass: 'gold',
    title: 'خيرات زمان، بطعم اليوم',
    desc: 'نقي وصحي لبيتك ومطبخك وعائلتك'
  }
];

function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  // Load custom saved hero slides images from admin if configured
  try {
    const savedHeroSlides = localStorage.getItem('cart_hero_slides');
    if (savedHeroSlides) {
      const parsed = JSON.parse(savedHeroSlides);
      if (Array.isArray(parsed) && parsed.length > 0) {
        slides.forEach((slide, idx) => {
          const img = slide.querySelector('img');
          if (img && parsed[idx]) img.src = parsed[idx];
        });
      }
    }
  } catch (e) {}

  const topBadgeWrap = document.getElementById('topBadgeTextWrap');
  const topBadgeTitle = document.getElementById('topBadgeTitle');
  const topBadgeDesc = document.getElementById('topBadgeDesc');
  const topBadgeIconWrap = document.getElementById('topBadgeIconWrap');
  const topBadgeIcon = document.getElementById('topBadgeIcon');

  const bottomBadgeWrap = document.getElementById('bottomBadgeTextWrap');
  const bottomBadgeTitle = document.getElementById('bottomBadgeTitle');
  const bottomBadgeDesc = document.getElementById('bottomBadgeDesc');
  const bottomBadgeIconWrap = document.getElementById('bottomBadgeIconWrap');
  const bottomBadgeIcon = document.getElementById('bottomBadgeIcon');

  function updateRotatingBadges(index) {
    const topData = HERO_TOP_BADGE_PHRASES[index % HERO_TOP_BADGE_PHRASES.length];
    const bottomData = HERO_BOTTOM_BADGE_PHRASES[index % HERO_BOTTOM_BADGE_PHRASES.length];

    if (topBadgeWrap && topData) {
      topBadgeWrap.classList.add('fade-switch');
      setTimeout(() => {
        if (topBadgeTitle) topBadgeTitle.textContent = topData.title;
        if (topBadgeDesc) topBadgeDesc.textContent = topData.desc;
        if (topBadgeIconWrap) topBadgeIconWrap.className = `glass-icon-circle ${topData.iconClass}`;
        if (topBadgeIcon) topBadgeIcon.className = topData.icon;
        topBadgeWrap.classList.remove('fade-switch');
      }, 250);
    }

    if (bottomBadgeWrap && bottomData) {
      bottomBadgeWrap.classList.add('fade-switch');
      setTimeout(() => {
        if (bottomBadgeTitle) bottomBadgeTitle.textContent = bottomData.title;
        if (bottomBadgeDesc) bottomBadgeDesc.textContent = bottomData.desc;
        if (bottomBadgeIconWrap) bottomBadgeIconWrap.className = `glass-icon-circle ${bottomData.iconClass}`;
        if (bottomBadgeIcon) bottomBadgeIcon.className = bottomData.icon;
        bottomBadgeWrap.classList.remove('fade-switch');
      }, 250);
    }
  }

  function showSlide(index) {
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === index);
    });
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
    currentHeroSlide = index;
    updateRotatingBadges(index);
  }

  window.goToHeroSlide = function(index) {
    showSlide(index);
    resetHeroCarouselTimer();
  };

  function nextSlide() {
    const nextIndex = (currentHeroSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function startHeroCarouselTimer() {
    heroCarouselTimer = setInterval(nextSlide, 4500);
  }

  function resetHeroCarouselTimer() {
    clearInterval(heroCarouselTimer);
    startHeroCarouselTimer();
  }

  startHeroCarouselTimer();

  const carouselCard = document.getElementById('heroCarouselCard');
  if (carouselCard) {
    carouselCard.addEventListener('mouseenter', () => clearInterval(heroCarouselTimer));
    carouselCard.addEventListener('mouseleave', () => resetHeroCarouselTimer());
  }
}

// ==========================================
// 📍 Smart GPS Branch Locator (Haversine Formula)
// ==========================================
function findClosestBranchByGPS() {
  const btn = document.getElementById('btnLocateMe');
  const card = document.getElementById('closestBranchCard');
  if (!navigator.geolocation) {
    showToast('متصفحك لا يدعم خدمة التحديد الجغرافي', 'error');
    return;
  }

  if (btn) btn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> جاري البحث عن موقعك في الرياض...';

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      let closest = null;
      let minDistance = Infinity;

      BRANCHES_DATA.forEach(b => {
        let bLat = 24.739066, bLon = 46.835787;
        if (b.id === 'rabwa') { bLat = 24.691926; bLon = 46.776221; }
        else if (b.id === 'dar-baida') { bLat = 24.583149; bLon = 46.804320; }
        else if (b.id === 'mansourah') { bLat = 24.610003; bLon = 46.730728; }
        else if (b.id === 'wadi-laban') { bLat = 24.618697; bLon = 46.530853; }
        else if (b.id === 'tuwaiq') { bLat = 24.568457; bLon = 46.527657; }
        else if (b.id === 'kharj') { bLat = 24.130460; bLon = 47.351065; }
        else if (b.id === 'awali') { bLat = 24.558607; bLon = 46.613951; }

        const dist = getHaversineDistance(lat, lon, bLat, bLon);
        if (dist < minDistance) {
          minDistance = dist;
          closest = b;
        }
      });

      if (btn) btn.innerHTML = '<i class="ri-radar-fill"></i> تم تحديد موقعك بنجاح 📍';

      if (closest && card) {
        selectActiveBranch(closest.id);
        card.style.display = 'flex';
        card.innerHTML = `
          <div class="closest-branch-info">
            <strong>📍 الفرع الأقرب إليك: فرع ${closest.name} (${closest.zoneName})</strong>
            <p>يبعد عن موقعك الحالي حوالي <strong>${minDistance.toFixed(1)} كم</strong> • وقت التوصيل المتوقع: 30 - 45 دقيقة 🚚</p>
          </div>
          <div class="closest-branch-actions">
            <button class="btn-branch-whatsapp shine-effect" onclick="sendWhatsAppToBranch('${closest.id}')">
              <i class="ri-whatsapp-fill"></i> اطلب من الفرع الأقرب
            </button>
          </div>
        `;
        showToast(`أقرب فرع لك هو فرع ${closest.name} (تبعد ${minDistance.toFixed(1)} كم) 🌿`);
      }
    },
    (err) => {
      if (btn) btn.innerHTML = '<i class="ri-radar-fill"></i> تحديد موقعي بالرياض لاكتشاف أقرب فرع تلقائياً 📍';
      showToast('تعذر تحديد موقعك. يرجى تفعيل إذن الوصول للموقع بالمتصفح.', 'error');
    }
  );
}

function getHaversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

// ==========================================
// 👁️ Quick View Product Details Modal
// ==========================================
function openQuickView(productId) {
  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickViewModal');
  const container = document.getElementById('quickViewContent');
  if (!modal || !container) return;

  const escapedName = product.name.replace(/'/g, "\\'");
  const escapedUnit = product.unit.replace(/'/g, "\\'");
  const escapedImage = product.image.replace(/'/g, "\\'");

  container.innerHTML = `
    <div class="quick-view-grid">
      <div class="quick-view-img-wrap">
        <img src="${product.image}" alt="${product.name}" />
      </div>
      <div class="quick-view-details">
        <h3>${product.name}</h3>
        <div class="quick-view-tags">
          <span class="quick-tag-pill">درجة أولى ممتازة</span>
          <span class="quick-tag-pill">${product.categoryName}</span>
          ${product.isOrganic ? '<span class="quick-tag-pill" style="background:#dcfce7;color:#15803d;">عضوي 🌿</span>' : '<span class="quick-tag-pill" style="background:#dcfce7;color:#15803d;">نقي 100%</span>'}
          <span class="quick-tag-pill" style="background:#fef3c7;color:#b45309;">إنتاج محلي 🇸🇦</span>
        </div>
        <p class="quick-view-price"><i class="ri-shield-check-fill" style="color:#10b981;"></i> ${product.unit}</p>
        <p class="quick-view-benefits">
          ${product.benefits || 'محصول مقطوف فجر اليوم من أجود المزارع الوطنية، فرز وتغليف يدوي صحي يضمن لك النقاء والقيمة الغذائية الفائقة لأسرتك.'}
        </p>
        <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top: 1rem;">
          <button class="btn-product-cart-add" style="flex:1;" onclick="addProductToCart(${product.id}, '${escapedName}', '${escapedUnit}', '${escapedImage}'); closeQuickViewModal();">
            <i class="ri-shopping-basket-fill"></i> إضافة للطلب
          </button>
          <button class="btn-product-order-whatsapp" style="flex:1;" onclick="inquireProductWhatsApp(${product.id})">
            <i class="ri-whatsapp-fill"></i> طلب فوري واتساب
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeQuickViewModal() {
  const modal = document.getElementById('quickViewModal');
  if (modal) modal.classList.remove('active');
}

// ==========================================
// ✍️ Customer Reviews Submission & Display
// ==========================================
function openAddReviewModal() {
  const modal = document.getElementById('addReviewModal');
  if (modal) modal.classList.add('active');
}

function closeAddReviewModal() {
  const modal = document.getElementById('addReviewModal');
  if (modal) modal.classList.remove('active');
}

function submitCustomerReview(e) {
  e.preventDefault();
  const name = document.getElementById('reviewAuthorName').value.trim();
  const district = document.getElementById('reviewAuthorDistrict').value.trim();
  const rating = parseInt(document.getElementById('reviewRatingSelect').value);
  const text = document.getElementById('reviewText').value.trim();

  if (!name || !district || !text) return;

  const newReview = {
    id: Date.now(),
    name,
    district,
    rating,
    text,
    date: new Date().toLocaleDateString('ar-SA')
  };

  const reviews = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]');
  reviews.unshift(newReview);
  localStorage.setItem('cart_customer_reviews', JSON.stringify(reviews));

  closeAddReviewModal();
  renderCustomerReviews();
  showToast('شكراً لك! تم إرسال تقييمك بنجاح 🌿');

  document.getElementById('reviewAuthorName').value = '';
  document.getElementById('reviewAuthorDistrict').value = '';
  document.getElementById('reviewText').value = '';
}

function renderCustomerReviews() {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const userReviews = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]');
  if (userReviews.length === 0) return;

  // Remove previously dynamically rendered items if any
  grid.querySelectorAll('.dynamic-user-review').forEach(el => el.remove());

  const userReviewsHtml = userReviews.map(r => {
    const stars = Array(r.rating).fill('<i class="ri-star-fill"></i>').join('');
    const avatarChar = r.name.charAt(0);
    return `
      <div class="review-quote-card reveal-on-scroll card-hover-lift is-revealed dynamic-user-review" style="border-top: 3px solid #10b981;">
        <div class="review-rating-stars">
          ${stars}
        </div>
        <p class="quote-text">"${r.text}"</p>
        <div class="reviewer-profile">
          <div class="reviewer-avatar" style="background:#10b981;">${avatarChar}</div>
          <div class="reviewer-meta">
            <strong>${r.name}</strong>
            <span>${r.district}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  grid.insertAdjacentHTML('afterbegin', userReviewsHtml);
}

// ==========================================
// 📸 Snapchat / Instagram Live Stories Lightbox
// ==========================================
const STORIES_DATA = [
  {
    title: 'قطفة الفجر اليوم 🚜',
    time: 'تغطية فجر اليوم • المزارع الوطنية',
    img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
    caption: 'تجهيز وثمار الفواكه المقطوفة فجر اليوم للتعبئة والتوزيع المباشر لأحياء الرياض 🍓🍊'
  },
  {
    title: 'صواني الهدايا الملكية 👑',
    time: 'منذ 3 ساعات • فرع الربوة',
    img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
    caption: 'تنسيق صينية فواكه استوائية وموسمية بشرائط فاخرة جاهزة للإهداء والضيافة المباشرة ✨'
  },
  {
    title: 'بطيخ وشمام سكري 🍉',
    time: 'منذ 4 ساعات • فرع وادي لبن',
    img: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    caption: 'فرز وتعبئة البطيخ الأحمر السكري والشمام المعطر الطازج لزبائننا بالرياض 🍉🍈'
  },
  {
    title: 'الفرز والرقابة حبة بحبة ✨',
    time: 'منذ 5 ساعات • فرع النسيم',
    img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80',
    caption: 'فحص دقيق واستبعاد أي ثمرة لا تلبي مواصفات الدرجة الأولى الممتازة بحب وأمانة 💖'
  },
  {
    title: 'التوصيل المبرد للرياض 🚚',
    time: 'منذ 6 ساعات • كافة مناطق الرياض',
    img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80',
    caption: 'أسطول التوصيل المبرد ينطلق لتوصيل طلبيات الفواكه والصواني حتى باب بيتك بالرياض فوراً 🚀'
  }
];

// Load custom saved stories data from admin if configured
try {
  const savedStories = localStorage.getItem('cart_stories_data');
  if (savedStories) {
    const parsed = JSON.parse(savedStories);
    if (Array.isArray(parsed) && parsed.length > 0) {
      STORIES_DATA.splice(0, STORIES_DATA.length, ...parsed);
    }
  }
} catch (e) {}

let activeStoryIndex = 0;
let storyTimer = null;

function openStoryModal(index) {
  activeStoryIndex = index;
  const story = STORIES_DATA[index];
  if (!story) return;

  const modal = document.getElementById('storyModal');
  const img = document.getElementById('storyMediaImg');
  const title = document.getElementById('storyTitle');
  const time = document.getElementById('storyTime');
  const caption = document.getElementById('storyCaption');
  const fill = document.getElementById('storyProgressFill');

  if (img) img.src = story.img;
  if (title) title.textContent = story.title;
  if (time) time.textContent = story.time;
  if (caption) caption.textContent = story.caption;

  if (modal) modal.classList.add('active');

  if (fill) {
    fill.style.width = '0%';
    setTimeout(() => { fill.style.width = '100%'; }, 50);
  }

  clearTimeout(storyTimer);
  storyTimer = setTimeout(() => {
    if (activeStoryIndex < STORIES_DATA.length - 1) {
      openStoryModal(activeStoryIndex + 1);
    } else {
      closeStoryModal();
    }
  }, 5000);
}

function closeStoryModal() {
  const modal = document.getElementById('storyModal');
  if (modal) modal.classList.remove('active');
  clearTimeout(storyTimer);
}

function sendStoryWhatsApp() {
  const story = STORIES_DATA[activeStoryIndex];
  if (!story) return;

  const branch = selectedBranch || BRANCHES_DATA[0];
  const message = `السلام عليكم مؤسسة عربة الخضار (${branch.name})،\nشاهدت التغطية الحية في قصص اليوم (${story.title}) وأود طلب الخدمة والصنف الموضح فوراً عبر الرقم الموحد (${UNIFIED_WHATSAPP_DISPLAY}).\nشكراً لكم.`;
  const url = `https://api.whatsapp.com/send?phone=${UNIFIED_WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}
