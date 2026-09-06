/* ==========================================================================
   مؤسسة عربة الخضار للفواكه والخضار - Interactive Application Logic (app.js)
   Clean Branch Names & Dynamic On-Click Branch Details Showcase
   ========================================================================== */

// --- Comprehensive Riyadh Branches Data (Official Real Data) ---
const BRANCHES_DATA = [
  {
    id: 'naseem-1',
    name: 'النسيم 1',
    displayName: 'النسيم 1',
    zone: 'east',
    zoneName: 'شرق الرياض',
    phone: '966506672822',
    phoneDisplay: '050 667 2822',
    address: 'شارع حسان بن ثابت، حي النسيم، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق الرياض، النسيم، النظيم، والروضة',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.739066,46.835787&output=embed&q=24.739066,46.835787+(عربة+الخضار+-+النسيم+1)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/t7UysoSDTXfkuygB7'
  },
  {
    id: 'naseem-2',
    name: 'النسيم 2',
    displayName: 'النسيم 2',
    zone: 'east',
    zoneName: 'شرق الرياض',
    phone: '966506672822',
    phoneDisplay: '050 667 2822',
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
    phone: '966506672822',
    phoneDisplay: '050 667 2822',
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
    phone: '966502878862',
    phoneDisplay: '050 287 8862',
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
    phone: '966552132388',
    phoneDisplay: '055 213 2388',
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
    phone: '966550464166',
    phoneDisplay: '055 046 4166',
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
    phone: '966533246434',
    phoneDisplay: '053 324 6434',
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
    phone: '966502878862',
    phoneDisplay: '050 287 8862',
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
    phone: '966533246434',
    phoneDisplay: '053 324 6434',
    address: 'حي العوالي، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب وجنوب الرياض، العوالي، ونمار',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.558607,46.613951&output=embed&q=24.558607,46.613951+(عربة+الخضار+-+العوالي)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/eauHEnbiDLDAyDhAA'
  }
];

// --- Curated Produce Catalog (Showcase - No Prices) ---
const CATALOG_PRODUCTS = [
  {
    id: 1,
    name: 'صينية الخضار والفواكه المشكلة (العائلية)',
    category: 'baskets',
    categoryName: 'الصواني المشكلة',
    unit: 'تشكيلة عائلية أسبوعية متكاملة (15 كجم)',
    badge: 'الأكثر طلباً للأسر 🌟',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    name: 'صينية الفواكه الملكية (للهدايا والمناسبات)',
    category: 'baskets',
    categoryName: 'الصواني المشكلة',
    unit: 'فواكه استوائية وموسمية بتنسيق وتغليف فاخر',
    badge: 'ضيافة وهدايا ملكية 👑',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    name: 'صينية الورقيات الخضراء الطازجة',
    category: 'greens',
    categoryName: 'الورقيات',
    unit: 'ربطات منوعة يومية (نعناع، بقدونس، كزبرة، جرجير...)',
    badge: 'قطفة فجر اليوم 🌿',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    name: 'تفاح سكري أحمر فاخر',
    category: 'fruits',
    categoryName: 'فواكه طازجة',
    unit: 'ثمار ممتازة منتقاة حبة بحبة',
    badge: 'منتقى حبة بحبة ✨',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    name: 'طماطم بلدي نضرة وممتازة',
    category: 'vegetables',
    categoryName: 'خضراوات',
    unit: 'محصول بلدي طازج يومياً',
    badge: 'محصول بلدي فاخر 🍅',
    badgeClass: 'badge-orange',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 6,
    name: 'خيار بلدي مقرمش',
    category: 'vegetables',
    categoryName: 'خضراوات',
    unit: 'ثمار خضراء نضرة مقطوفة يومياً',
    badge: 'طازج ومقرمش 🥒',
    badgeClass: 'badge-green',
    image: 'https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    name: 'برتقال عصير فاخر',
    category: 'fruits',
    categoryName: 'فواكه طازجة',
    unit: 'ثمار ناضجة مليئة بالعصير الطبيعي',
    badge: 'طبيعي وفيتامينات 🍊',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    name: 'رمان طائفي حلو وموسمي',
    category: 'fruits',
    categoryName: 'فواكه طازجة',
    unit: 'محصول موسمي فاخر بدرجة أولى',
    badge: 'موسمي درجة أولى 💎',
    badgeClass: 'badge-gold',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80'
  }
];

// --- Dynamic Announcements (Ticker) Data ---
const DEFAULT_APP_TICKER = [
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

// --- Initialization ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDynamicTicker();
  renderDynamicDeals();
  renderBranchesHub();
  renderCatalogProducts();
  populateFooterBranches();
  initCounters();
  setupScrollHeader();
  initScrollProgress();
  initScrollReveal();
  initButtonRipples();
  initHeroCarousel();
  initDealsCountdown();
  initFloatingProduceParallax();
  setupStorageListener();
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

          <button class="btn-deal-order shine-effect" onclick="orderDealWhatsApp('${(deal.whatsappMsg || deal.title).replace(/'/g, "\\'")}')">
            <i class="ri-whatsapp-fill"></i> اطلب هذا العرض الآن
          </button>
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
  const message = `السلام عليكم مؤسسة عربة الخضار (${branch.name})،\nأود الاستفادة من العرض اليومي:\n🔥 ${dealName}\nيرجى تأكيد الحجز والتوصيل. شكراً لكم.`;
  const url = `https://api.whatsapp.com/send?phone=${branch.phone}&text=${encodeURIComponent(message)}`;
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
      const offsetX = (clientX - centerX) * 0.018 * speed;
      const offsetY = (clientY - centerY) * 0.018 * speed;
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

function getFilteredBranches() {
  if (activeZone === 'all') return BRANCHES_DATA;
  return BRANCHES_DATA.filter(b => b.zone === activeZone);
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

  container.innerHTML = `
    <div class="active-branch-card visual-card-3d">
      
      <!-- Info Column -->
      <div class="active-branch-info-col">
        <div class="active-branch-header">
          <div class="active-branch-avatar">
            <i class="ri-store-3-fill"></i>
          </div>
          <div>
            <div class="active-branch-badge-row">
              <span class="branch-zone-pill"><i class="ri-map-pin-2-fill"></i> ${b.zoneName}</span>
              <span class="branch-status-badge"><i class="ri-checkbox-blank-circle-fill" style="font-size: 6px;"></i> متاح للطلب والتوصيل</span>
            </div>
            <h3 class="active-branch-title">${b.name}</h3>
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
            <div class="detail-icon"><i class="ri-phone-line"></i></div>
            <div>
              <label>رقم التواصل المباشر:</label>
              <span>${b.phoneDisplay}</span>
            </div>
          </div>
        </div>

        <!-- Love Promise Banner -->
        <div class="branch-love-promise-box">
          <div class="love-promise-icon"><i class="ri-heart-3-fill"></i></div>
          <div class="love-promise-text">
            <strong>مندوبنا يختار لك بحب</strong>
            <p>مندوب الفرع ينتقي لك أفضل ثمار ومحاصيل اليوم حبة بحبة كأنك تتسوق بنفسك 🌿</p>
          </div>
        </div>

        <div class="active-branch-actions-row">
          <button class="btn-branch-whatsapp shine-effect" onclick="sendWhatsAppToBranch('${b.id}')" title="تواصل واتساب">
            <i class="ri-whatsapp-fill"></i> تواصل واتساب
          </button>
          <a href="tel:${b.phone}" class="btn-branch-call" title="اتصال هاتفي">
            <i class="ri-phone-fill"></i> اتصال
          </a>
          <a href="${b.mapDirectUrl}" target="_blank" class="btn-branch-map-action" title="فتح في قوقل ماب">
            <i class="ri-direction-fill"></i> فتح في Google Maps
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
    showToast(`تم اختيار ${selectedBranch.name} 🌿`);
  }
}

function updateBranchLabels() {
  const footerLabel = document.getElementById('footerActiveBranchName');
  if (footerLabel) footerLabel.textContent = selectedBranch.name;
}

// --- Direct WhatsApp & Call Actions ---
function handleDirectContact() {
  sendWhatsAppToBranch(selectedBranch.id);
}

function callCurrentBranch() {
  window.location.href = `tel:${selectedBranch.phone}`;
}

function sendWhatsAppToBranch(branchId) {
  const branch = BRANCHES_DATA.find(b => b.id === branchId) || selectedBranch;
  const message = `السلام عليكم ورحمة الله،\nأتواصل معكم بخصوص الاستفسار والطلب من مؤسسة عربة الخضار (${branch.name}).`;
  const url = `https://api.whatsapp.com/send?phone=${branch.phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function inquireProductWhatsApp(productId) {
  const product = CATALOG_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const message = `السلام عليكم مؤسسة عربة الخضار (${selectedBranch.name})،\nأود الاستفسار والطلب بخصوص:\n- الصنف: ${product.name}\n- التفاصيل: ${product.unit}\nيرجى تأكيد التوافر والتوصيل. شكراً لكم.`;
  const url = `https://api.whatsapp.com/send?phone=${selectedBranch.phone}&text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// --- Product Catalog Filter & Display (No Prices) ---
function filterCatalog(category, buttonElement) {
  currentCategory = category;
  
  document.querySelectorAll('.cat-pill').forEach(btn => btn.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');

  renderCatalogProducts();
}

function renderCatalogProducts() {
  const gridContainer = document.getElementById('productsModernGrid');
  if (!gridContainer) return;

  const filtered = currentCategory === 'all' 
    ? CATALOG_PRODUCTS 
    : CATALOG_PRODUCTS.filter(p => p.category === currentCategory);

  gridContainer.innerHTML = filtered.map(product => `
    <div class="product-item-card reveal-on-scroll card-hover-lift">
      <div class="product-img-wrapper">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-badge-overlay ${product.badgeClass}">${product.badge}</span>
      </div>

      <div class="product-card-info">
        <span class="product-category-tag">${product.categoryName}</span>
        <h4 class="product-name">${product.name}</h4>
        <span class="product-unit">${product.unit}</span>

        <div class="product-inquire-action">
          <button class="btn-product-order-whatsapp" onclick="inquireProductWhatsApp(${product.id})">
            <i class="ri-whatsapp-fill"></i> طلب أو استفسار
          </button>
        </div>
      </div>
    </div>
  `).join('');
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
    const btn = e.target.closest('button, .btn-primary, .btn-hero-primary, .btn-branch-whatsapp, .btn-product-order-whatsapp');
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

// --- Toast Notification ---
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<i class="ri-checkbox-circle-fill" style="color: var(--primary);"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    setTimeout(() => toast.remove(), 300);
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
    icon: 'ri-plant-fill',
    iconClass: 'green',
    title: 'من المزرعة لمائدتك مباشرة',
    desc: 'محاصيل مقطوفة فجر اليوم بأعلى نضارة'
  },
  {
    icon: 'ri-vip-crown-fill',
    iconClass: 'gold',
    title: 'صواني ملكية للمناسبات',
    desc: 'تنسيق فاخر يرفع الرأس ويجمل ضيافتك'
  },
  {
    icon: 'ri-mental-health-fill',
    iconClass: 'green',
    title: 'صيدلية الطبيعة بين يديك',
    desc: 'فيتامينات وطاقة ونقاء لصحة عائلتك'
  },
  {
    icon: 'ri-sparkling-2-fill',
    iconClass: 'gold',
    title: 'طعم الطبيعة الحقيقي',
    desc: 'نكهة أصيلة وجودة لا تُنسى في كل قضمة'
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
    icon: 'ri-shield-check-fill',
    iconClass: 'green',
    title: 'ضمان ذهبي 100% واستبدال فوري',
    desc: 'رضاك التام وثقتك هي أولويتنا دائماً'
  },
  {
    icon: 'ri-hand-heart-fill',
    iconClass: 'pink-heart',
    title: 'كأنك تتسوق بنفسك',
    desc: 'نختار لك الأجود حبة بحبة بأمانة'
  },
  {
    icon: 'ri-time-fill',
    iconClass: 'gold',
    title: 'جاهزون لخدمتكم يومياً',
    desc: 'من 8:00 صباحاً حتى 12:00 منتصف الليل'
  },
  {
    icon: 'ri-medal-fill',
    iconClass: 'green',
    title: 'خيرات زمان، بطعم اليوم',
    desc: 'نقي وصحي لبيتك ومطبخك وعائلتك'
  }
];

function initHeroCarousel() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

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
    heroCarouselTimer = setInterval(nextSlide, 4000);
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

