/* ==========================================================================
   لوحة تحكم مؤسسة عربة الخضار - Logic & Data Controller (admin.js)
   إدارة العروض اليومية، الشريط الإخباري، رفع الصور، والمزامنة مع الموقع الرئيسي
   ========================================================================== */

// --- البيانات الافتراضية للشريط الإخباري ---
const DEFAULT_TICKER_ITEMS = [
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

// --- البيانات الافتراضية للعروض اليومية ---
const DEFAULT_DEALS = [
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

// --- البيانات الافتراضية للفروع بالرياض ---
const DEFAULT_BRANCHES = [
  {
    id: 'naseem-1',
    name: 'النسيم 1',
    displayName: 'النسيم 1',
    zone: 'east',
    zoneName: 'شرق الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
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
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966506672822',
    address: 'حي النسيم، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق الرياض، النسيم، الروابي، وإشبيليا',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.739066,46.835787&output=embed&q=24.739066,46.835787+(عربة+الخضار+-+النسيم+2)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/t7UysoSDTXfkuygB7',
    statusOverride: 'auto'
  },
  {
    id: 'rabwa',
    name: 'الربوة',
    displayName: 'الربوة',
    zone: 'east',
    zoneName: 'شرق ووسط الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966506672822',
    address: 'شارع الخليفة المنتصر بالله، حي الربوة، الرياض 14215',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'شرق ووسط الرياض، الربوة، الريان، والملز',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.691926,46.776221&output=embed&q=24.691926,46.776221+(عربة+الخضار+-+الربوة)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/xTTuJFm57Kk7yzpJ6',
    statusOverride: 'auto'
  },
  {
    id: 'dar-baida',
    name: 'الدار البيضاء',
    displayName: 'الدار البيضاء',
    zone: 'south',
    zoneName: 'جنوب الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966502878862',
    address: 'حي الدار البيضاء، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'جنوب الرياض، الدار البيضاء، والعزيزية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.583149,46.804320&output=embed&q=24.583149,46.804320+(عربة+الخضار+-+الدار+البيضاء)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/VcJhey1XvFeVVNH36',
    statusOverride: 'auto'
  },
  {
    id: 'mansourah',
    name: 'المنصورة',
    displayName: 'المنصورة',
    zone: 'south',
    zoneName: 'جنوب ووسط الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966552132388',
    address: 'شارع إسلام آباد، حي المنصورة، الرياض 12682',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'وسط وجنوب الرياض، المنصورة، والخالدية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.610003,46.730728&output=embed&q=24.610003,46.730728+(عربة+الخضار+-+المنصورة)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/fL6FMauTr11dFjpL6',
    statusOverride: 'auto'
  },
  {
    id: 'wadi-laban',
    name: 'وادي لبن',
    displayName: 'وادي لبن',
    zone: 'west',
    zoneName: 'غرب الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966550464166',
    address: 'شارع طيبة، ضاحية لبن، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب الرياض، ضاحية لبن، والمهدية',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.618697,46.530853&output=embed&q=24.618697,46.530853+(عربة+الخضار+-+وادي+لبن)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/UFeWfSSg32qRDu5TA',
    statusOverride: 'auto'
  },
  {
    id: 'tuwaiq',
    name: 'طويق',
    displayName: 'طويق',
    zone: 'west',
    zoneName: 'غرب الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966533246434',
    address: 'حي طويق، مخرج 26، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب الرياض، طويق، نجم الدين، ونمار',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.568457,46.527657&output=embed&q=24.568457,46.527657+(عربة+الخضار+-+طويق)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/Si39pT5V6AoU5HqL8',
    statusOverride: 'auto'
  },
  {
    id: 'kharj',
    name: 'الخرج',
    displayName: 'الخرج',
    zone: 'south',
    zoneName: 'الخرج وجنوب الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966502878862',
    address: 'محافظة الخرج',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'كافة أحياء محافظة الخرج وجنوب الرياض',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.130460,47.351065&output=embed&q=24.130460,47.351065+(عربة+الخضار+-+الخرج)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/gJzpwtWTQRZPQPF68',
    statusOverride: 'auto'
  },
  {
    id: 'awali',
    name: 'العوالي',
    displayName: 'العوالي',
    zone: 'west',
    zoneName: 'غرب وجنوب الرياض',
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: '966533246434',
    address: 'حي العوالي، الرياض',
    hours: '8:00 ص - 12:00 منتصف الليل',
    coverage: 'غرب وجنوب الرياض، العوالي، ونمار',
    mapEmbedUrl: 'https://maps-api-ssl.google.com/maps?hl=ar&ll=24.558607,46.613951&output=embed&q=24.558607,46.613951+(عربة+الخضار+-+العوالي)&z=17',
    mapDirectUrl: 'https://maps.app.goo.gl/eauHEnbiDLDAyDhAA',
    statusOverride: 'auto'
  }
];

// --- الحالة الحالية للبيانات ---
let currentDeals = [];
let currentTicker = [];
let currentBranches = [];
let editingDealId = null;
let editingTickerId = null;
let editingBranchId = null;

// المتغير الخاص بصورة العرض الحالية (Base64 أو رابط)
let currentUploadedImageDataUrl = '';

// --- التهيئة عند تشغيل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
  initSecurity();
  loadData();
  renderDeals();
  renderTicker();
  renderAdminBranches();
  renderAdminReviews();
  renderAdminCatalog();
  loadHeroSlidesToAdmin();
  renderAdminStories();
  loadStoreSettings();
  updateAdminMetrics();
  updateLiveTickerPreview();
  setupImageUploader();
  setupTabs();
  updateCodeExport();
});

// ==========================================
// 1. نظام الحماية بالرمز السري (Passcode)
// ==========================================
function initSecurity() {
  const overlay = document.getElementById('securityOverlay');
  const isAuth = sessionStorage.getItem('cart_admin_auth') === 'true';

  if (isAuth && overlay) {
    overlay.classList.add('hidden');
  }

  const passInput = document.getElementById('passcodeInput');
  if (passInput) {
    passInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkPasscode();
    });
  }
}

function checkPasscode() {
  const input = document.getElementById('passcodeInput');
  const overlay = document.getElementById('securityOverlay');
  const entered = input.value.trim();
  const currentPass = localStorage.getItem('cart_admin_passcode') || '1234';

  if (entered === currentPass) {
    sessionStorage.setItem('cart_admin_auth', 'true');
    overlay.classList.add('hidden');
    input.value = '';
    showToast('تم تسجيل الدخول بنجاح 🌿');
  } else {
    showToast('الرمز السري غير صحيح، حاول ثانية', 'error');
    input.select();
  }
}

function logoutAdmin() {
  sessionStorage.removeItem('cart_admin_auth');
  const overlay = document.getElementById('securityOverlay');
  if (overlay) {
    overlay.classList.remove('hidden');
    const input = document.getElementById('passcodeInput');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
  showToast('تم تسجيل الخروج');
}

function changePasscode() {
  const current = localStorage.getItem('cart_admin_passcode') || '1234';
  const oldPass = prompt('أدخل الرمز السري الحالي:');
  if (oldPass !== current) {
    if (oldPass !== null) showToast('الرمز الحالي غير صحيح!', 'error');
    return;
  }

  const newPass = prompt('أدخل الرمز السري الجديد (4 أرقام على الأقل):');
  if (newPass && newPass.trim().length >= 4) {
    localStorage.setItem('cart_admin_passcode', newPass.trim());
    showToast('تم تغيير الرمز السري بنجاح!');
  } else if (newPass !== null) {
    showToast('يجب أن يتكون الرمز من 4 خانات على الأقل', 'error');
  }
}

// ==========================================
// 2. تحميل البيانات من LocalStorage
// ==========================================
function loadData() {
  // تحميل العروض
  const savedDeals = localStorage.getItem('cart_daily_deals');
  if (savedDeals) {
    try {
      currentDeals = JSON.parse(savedDeals);
    } catch (e) {
      currentDeals = [...DEFAULT_DEALS];
    }
  } else {
    currentDeals = [...DEFAULT_DEALS];
    saveDealsToStorage();
  }

  // تحميل كتالوج المنتجات
  loadAdminCatalog();

  // تحميل الشريط الإخباري
  const savedTicker = localStorage.getItem('cart_ticker_items');
  if (savedTicker) {
    try {
      currentTicker = JSON.parse(savedTicker);
    } catch (e) {
      currentTicker = [...DEFAULT_TICKER_ITEMS];
    }
  } else {
    currentTicker = [...DEFAULT_TICKER_ITEMS];
    saveTickerToStorage();
  }

  // تحميل فروع ومواقع الرياض
  const savedBranches = localStorage.getItem('cart_branches_data');
  if (savedBranches) {
    try {
      currentBranches = JSON.parse(savedBranches);
    } catch (e) {
      currentBranches = [...DEFAULT_BRANCHES];
    }
  } else {
    currentBranches = [...DEFAULT_BRANCHES];
    saveBranchesToStorage();
  }
}

function saveBranchesToStorage() {
  localStorage.setItem('cart_branches_data', JSON.stringify(currentBranches));
  updateCodeExport();
}

function saveDealsToStorage() {
  localStorage.setItem('cart_daily_deals', JSON.stringify(currentDeals));
  updateCodeExport();
}

function saveTickerToStorage() {
  localStorage.setItem('cart_ticker_items', JSON.stringify(currentTicker));
  updateLiveTickerPreview();
  updateCodeExport();
}

// ==========================================
// 3. التنقل بين التبويبات (Tabs)
// ==========================================
function setupTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.classList.add('active');
    });
  });
}

// ==========================================
// 4. إدارة العروض اليومية (Deals CRUD)
// ==========================================
function renderDeals() {
  const container = document.getElementById('dealsAdminGrid');
  const countBadge = document.getElementById('dealsCountBadge');
  if (!container) return;

  if (countBadge) countBadge.textContent = `${currentDeals.length} عرض`;

  if (currentDeals.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-md); border: 2px dashed var(--border);">
        <i class="ri-fire-line" style="font-size: 3rem; color: var(--text-light); margin-bottom: 0.5rem; display: block;"></i>
        <h4 style="margin-bottom: 0.25rem;">لا توجد عروض حالياً</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">اضغط على "إضافة عرض جديد" لإضافة أول عرض لعملائك بالرياض.</p>
        <button class="btn-action-primary" onclick="openDealModal()"><i class="ri-add-line"></i> إضافة عرض الآن</button>
      </div>
    `;
    return;
  }

  container.innerHTML = currentDeals.map(deal => {
    const perksHtml = (deal.perks || []).slice(0, 3).map(p => `
      <div><i class="ri-check-line" style="color: var(--primary);"></i> <span>${p}</span></div>
    `).join('');

    return `
      <div class="deal-admin-card">
        <div class="deal-admin-card-img">
          <img src="${deal.image}" alt="${deal.title}" onerror="this.src='https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80'" />
          <span class="deal-admin-ribbon ${deal.badgeColor || 'red'}">${deal.badgeRibbon}</span>
        </div>
        <div class="deal-admin-card-body">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
            <span style="font-size: 0.75rem; font-weight: 800; color: var(--primary);">${deal.category || 'عرض خاص'}</span>
            <span style="font-size: 0.72rem; color: var(--accent-gold); font-weight: 700;">${deal.stockPill || ''}</span>
          </div>
          <h4>${deal.title}</h4>
          <p>${deal.desc || ''}</p>
          <div class="deal-admin-perks-preview">
            ${perksHtml}
          </div>
          <div class="deal-admin-card-actions">
            <button class="btn-card-action edit" onclick="editDeal('${deal.id}')">
              <i class="ri-edit-line"></i> تعديل
            </button>
            <button class="btn-card-action delete" onclick="deleteDeal('${deal.id}')">
              <i class="ri-delete-bin-line"></i> حذف
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openDealModal(deal = null) {
  editingDealId = deal ? deal.id : null;
  const modal = document.getElementById('dealModal');
  const title = document.getElementById('dealModalTitle');
  const form = document.getElementById('dealForm');

  if (title) {
    title.innerHTML = deal 
      ? '<i class="ri-edit-line"></i> تعديل العرض اليومي' 
      : '<i class="ri-add-circle-line"></i> إضافة عرض ترويجي جديد';
  }

  // ملء الحقول
  document.getElementById('dealTitle').value = deal ? deal.title : '';
  document.getElementById('dealCategory').value = deal ? deal.category : 'العرض الأقوى للعائلات';
  document.getElementById('dealBadgeRibbon').value = deal ? deal.badgeRibbon : 'وفر 30% اليوم 🔥';
  document.getElementById('dealFloatingTag').value = deal ? deal.floatingTag : 'هدية صينية ورقيات مجانية 🎁';
  document.getElementById('dealStockPill').value = deal ? deal.stockPill : 'متبقي 6 صواني فقط';
  document.getElementById('dealDesc').value = deal ? deal.desc : '';
  document.getElementById('dealPerks').value = deal && deal.perks ? deal.perks.join('\n') : '';
  document.getElementById('dealStockPercent').value = deal ? deal.stockPercent : 85;
  document.getElementById('stockPercentDisplay').textContent = `${deal ? deal.stockPercent : 85}%`;
  document.getElementById('dealImageUrl').value = deal ? (deal.image.startsWith('data:') ? '' : deal.image) : '';
  document.getElementById('dealFeatured').checked = deal ? !!deal.isFeatured : false;

  // لون الشريط
  const color = deal ? deal.badgeColor : 'red';
  const radio = document.querySelector(`input[name="dealBadgeColor"][value="${color}"]`);
  if (radio) radio.checked = true;

  // معاينة الصورة
  currentUploadedImageDataUrl = deal ? deal.image : '';
  if (deal && deal.image) {
    showImagePreview(deal.image);
  } else {
    clearImagePreview();
  }

  if (modal) modal.classList.add('open');
}

function closeDealModal() {
  const modal = document.getElementById('dealModal');
  if (modal) modal.classList.remove('open');
  editingDealId = null;
  clearImagePreview();
}

function saveDealFromModal(e) {
  if (e) e.preventDefault();

  const title = document.getElementById('dealTitle').value.trim();
  if (!title) {
    showToast('يرجى كتابة عنوان العرض', 'error');
    return;
  }

  // الصورة: إما المرفوعة كملف (Data URL) أو رابط تم إدخاله
  let image = currentUploadedImageDataUrl;
  const urlInput = document.getElementById('dealImageUrl').value.trim();
  if (!image && urlInput) {
    image = urlInput;
  }
  if (!image) {
    image = 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=700&q=80';
  }

  const category = document.getElementById('dealCategory').value.trim() || 'عرض خاص';
  const badgeRibbon = document.getElementById('dealBadgeRibbon').value.trim() || 'عرض حصري 🔥';
  const badgeColor = document.querySelector('input[name="dealBadgeColor"]:checked')?.value || 'red';
  const floatingTag = document.getElementById('dealFloatingTag').value.trim() || 'طازج ومختار بعناية ✨';
  const stockPill = document.getElementById('dealStockPill').value.trim() || 'كمية محدودة';
  const desc = document.getElementById('dealDesc').value.trim();
  const rawPerks = document.getElementById('dealPerks').value;
  const perks = rawPerks.split('\n').map(p => p.trim()).filter(p => p.length > 0);
  const stockPercent = parseInt(document.getElementById('dealStockPercent').value, 10) || 80;
  const isFeatured = document.getElementById('dealFeatured').checked;

  if (editingDealId) {
    // تعديل
    const index = currentDeals.findIndex(d => d.id === editingDealId);
    if (index !== -1) {
      currentDeals[index] = {
        ...currentDeals[index],
        title,
        image,
        category,
        badgeRibbon,
        badgeColor,
        floatingTag,
        stockPill,
        desc,
        perks: perks.length > 0 ? perks : ['فواكه وخضار طازجة يومياً', 'توصيل سريع لكافة الرياض'],
        stockPercent,
        stockHeader: `تم حجز ${stockPercent}% من كمية اليوم`,
        stockSub: stockPercent > 80 ? 'سارع قبل النفاد' : 'متوفر للطلب',
        whatsappMsg: `${title} - عرض ترويجي`,
        isFeatured
      };
      showToast('تم تحديث العرض بنجاح ✨');
    }
  } else {
    // إضافة جديد
    const newDeal = {
      id: 'deal-' + Date.now(),
      title,
      image,
      category,
      categoryIcon: 'ri-fire-fill',
      badgeRibbon,
      badgeColor,
      floatingTag,
      stockPill,
      desc,
      perks: perks.length > 0 ? perks : ['ثمار منتقاة فجر اليوم', 'توصيل شامل لكل الرياض'],
      stockPercent,
      stockHeader: `تم حجز ${stockPercent}% من كمية اليوم`,
      stockSub: 'عرض اليوم الحصري',
      whatsappMsg: `${title} - عرض جديد`,
      isFeatured
    };
    currentDeals.unshift(newDeal);
    showToast('تم إضافة العرض الجديد بنجاح 🎉');
  }

  saveDealsToStorage();
  renderDeals();
  closeDealModal();
}

function editDeal(id) {
  const deal = currentDeals.find(d => d.id === id);
  if (deal) openDealModal(deal);
}

function deleteDeal(id) {
  const deal = currentDeals.find(d => d.id === id);
  if (!deal) return;

  if (confirm(`هل أنت متأكد من حذف عرض: "${deal.title}"؟`)) {
    currentDeals = currentDeals.filter(d => d.id !== id);
    saveDealsToStorage();
    renderDeals();
    showToast('تم حذف العرض بنجاح');
  }
}

// ==========================================
// 5. رفع الصور وضغطها تلقائياً (Image Uploader)
// ==========================================
async function uploadImageFileToServer(file) {
  try {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch('upload.php', {
      method: 'POST',
      body: formData
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success && data.url) {
        return data.url;
      }
    }
  } catch (err) {
    console.warn('Backend upload server not reachable, falling back to local FileReader:', err);
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsDataURL(file);
  });
}

function setupImageUploader() {
  const fileInput = document.getElementById('dealImageFile');
  if (!fileInput) return;

  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('يرجى اختيار ملف صورة صالح (PNG, JPG, WebP)', 'error');
      return;
    }

    const uploadedUrl = await uploadImageFileToServer(file);
    currentUploadedImageDataUrl = uploadedUrl;
    showImagePreview(uploadedUrl);
    const urlInput = document.getElementById('dealImageUrl');
    if (urlInput) urlInput.value = uploadedUrl;
    showToast('تم رفع ومعالجة الصورة وحفظها بنجاح 📸');
  });

  // متابعة كتابة الرابط اليدوي
  const urlInput = document.getElementById('dealImageUrl');
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.startsWith('http') || val.startsWith('uploads/')) {
        currentUploadedImageDataUrl = val;
        showImagePreview(val);
      }
    });
  }
}

function compressImage(src, maxWidth, quality, callback) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    let width = img.width;
    let height = img.height;

    if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    const dataUrl = canvas.toDataURL('image/jpeg', quality);
    callback(dataUrl);
  };
}

function showImagePreview(url) {
  const box = document.getElementById('imagePreviewBox');
  const img = document.getElementById('imagePreviewImg');
  if (box && img) {
    img.src = url;
    box.style.display = 'block';
  }
}

function clearImagePreview() {
  currentUploadedImageDataUrl = '';
  const box = document.getElementById('imagePreviewBox');
  const fileInput = document.getElementById('dealImageFile');
  if (box) box.style.display = 'none';
  if (fileInput) fileInput.value = '';
}

// ==========================================
// 6. إدارة الشريط الإخباري (Ticker CRUD)
// ==========================================
function renderTicker() {
  const container = document.getElementById('tickerAdminList');
  const countBadge = document.getElementById('tickerCountBadge');
  if (!container) return;

  if (countBadge) countBadge.textContent = `${currentTicker.length} عبارة`;

  if (currentTicker.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; background: var(--bg-card); border-radius: var(--radius-md);">
        <p style="color: var(--text-muted);">لا توجد عبارات في الشريط الإخباري حالياً.</p>
        <button class="btn-action-outline" onclick="resetTickerToDefault()" style="margin-top: 0.5rem;">
          <i class="ri-refresh-line"></i> استعادة العبارات الافتراضية
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = currentTicker.map(item => `
    <div class="ticker-admin-item">
      <div class="ticker-admin-info">
        <div class="ticker-admin-icon-box" style="color: ${item.color || 'var(--accent-gold)'};">
          <i class="${item.icon || 'ri-sparkle-fill'}"></i>
        </div>
        <span>${item.text}</span>
      </div>
      <div class="ticker-admin-actions">
        <button class="btn-card-action edit" onclick="editTickerItem('${item.id}')" title="تعديل العبارة">
          <i class="ri-edit-line"></i>
        </button>
        <button class="btn-card-action delete" onclick="deleteTickerItem('${item.id}')" title="حذف العبارة">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function updateLiveTickerPreview() {
  const track = document.getElementById('liveTickerTrack');
  if (!track) return;

  const items = currentTicker.length > 0 ? currentTicker : DEFAULT_TICKER_ITEMS;

  // تكرار مزدوج للحصول على حركة انسيابية لا نهائية
  const doubleList = [...items, ...items];

  track.innerHTML = doubleList.map(item => `
    <div class="ticker-item">
      <i class="${item.icon || 'ri-sparkle-fill'}" style="color: ${item.color || 'var(--accent-gold)'};"></i>
      <span>${item.text}</span>
    </div>
  `).join('');
}

function selectTickerIcon(iconClass, element) {
  document.querySelectorAll('.icon-choice').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  const input = document.getElementById('tickerIconInput');
  if (input) input.value = iconClass;
}

function selectTickerColor(hexColor, element) {
  document.querySelectorAll('.color-dot-preset').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  const input = document.getElementById('tickerColorInput');
  if (input) input.value = hexColor;
}

function addOrUpdateTicker(e) {
  if (e) e.preventDefault();

  const textInput = document.getElementById('tickerTextInput');
  const text = textInput ? textInput.value.trim() : '';

  if (!text) {
    showToast('يرجى كتابة نص العبارة الإخبارية', 'error');
    return;
  }

  const icon = document.getElementById('tickerIconInput').value || 'ri-sparkle-fill';
  const color = document.getElementById('tickerColorInput').value || '#f59e0b';

  if (editingTickerId) {
    const index = currentTicker.findIndex(t => t.id === editingTickerId);
    if (index !== -1) {
      currentTicker[index] = { ...currentTicker[index], text, icon, color };
      showToast('تم تحديث العبارة الإخبارية ✨');
    }
    editingTickerId = null;
    document.getElementById('btnSubmitTicker').innerHTML = '<i class="ri-add-line"></i> إضافة للشريط';
  } else {
    const newItem = {
      id: 't-' + Date.now(),
      text,
      icon,
      color
    };
    currentTicker.unshift(newItem);
    showToast('تم إضافة العبارة إلى الشريط الإخباري 🎉');
  }

  textInput.value = '';
  saveTickerToStorage();
  renderTicker();
}

function editTickerItem(id) {
  const item = currentTicker.find(t => t.id === id);
  if (!item) return;

  editingTickerId = id;
  const textInput = document.getElementById('tickerTextInput');
  const iconInput = document.getElementById('tickerIconInput');
  const colorInput = document.getElementById('tickerColorInput');
  const submitBtn = document.getElementById('btnSubmitTicker');

  if (textInput) {
    textInput.value = item.text;
    textInput.focus();
  }
  if (iconInput) iconInput.value = item.icon;
  if (colorInput) colorInput.value = item.color;

  // تحديث الأيقونة النشطة
  document.querySelectorAll('.icon-choice').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-icon') === item.icon);
  });

  if (submitBtn) submitBtn.innerHTML = '<i class="ri-check-line"></i> حفظ التعديل';

  // التمرير لأعلى النموذج
  document.getElementById('tickerFormCard')?.scrollIntoView({ behavior: 'smooth' });
}

function deleteTickerItem(id) {
  currentTicker = currentTicker.filter(t => t.id !== id);
  saveTickerToStorage();
  renderTicker();
  showToast('تم حذف العبارة من الشريط');
}

function resetTickerToDefault() {
  if (confirm('هل تريد استعادة قائمة العبارات الإخبارية الافتراضية كاملة (17 عبارة)؟')) {
    currentTicker = [...DEFAULT_TICKER_ITEMS];
    saveTickerToStorage();
    renderTicker();
    showToast('تم استعادة العبارات الافتراضية بنجاح 🌿');
  }
}

// ==========================================
// 7. النسخ الاحتياطي والتصدير (Export / Import)
// ==========================================
function updateCodeExport() {
  const codeBox = document.getElementById('codeExportBox');
  if (!codeBox) return;

  const exportObj = {
    dailyDeals: currentDeals,
    tickerItems: currentTicker
  };

  codeBox.textContent = JSON.stringify(exportObj, null, 2);
}

function downloadBackupJson() {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    dailyDeals: currentDeals,
    tickerItems: currentTicker
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vegetable_cart_backup_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('تم تحميل ملف النسخ الاحتياطي JSON بنجاح 📥');
}

function importBackupJson(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const data = JSON.parse(event.target.result);
      if (data.dailyDeals && Array.isArray(data.dailyDeals)) {
        currentDeals = data.dailyDeals;
        saveDealsToStorage();
        renderDeals();
      }
      if (data.tickerItems && Array.isArray(data.tickerItems)) {
        currentTicker = data.tickerItems;
        saveTickerToStorage();
        renderTicker();
      }
      showToast('تم استيراد البيانات بنجاح تام! 🎉');
    } catch (err) {
      showToast('الملف غير صالح، يرجى التأكد من ملف JSON', 'error');
    }
  };
  reader.readAsText(file);
}

function copyExportCode() {
  const codeBox = document.getElementById('codeExportBox');
  if (!codeBox) return;

  navigator.clipboard.writeText(codeBox.textContent).then(() => {
    showToast('تم نسخ الكود بنجاح 📋');
  }).catch(() => {
    showToast('تعذر النسخ التلقائي', 'error');
  });
}

function resetAllToDefault() {
  if (confirm('تنبيه: هل تريد إعادة تعيين كافة العروض والشريط الإخباري إلى الحالة الأولية الافتراضية للموقع؟')) {
    currentDeals = [...DEFAULT_DEALS];
    currentTicker = [...DEFAULT_TICKER_ITEMS];
    saveDealsToStorage();
    saveTickerToStorage();
    renderDeals();
    renderTicker();
    showToast('تمت إعادة الضبط للحالة الأولية للموقع 🌿');
  }
}

// ==========================================
// 8. إشعارات Toast والوظائف الإضافية
// ==========================================
function updateAdminMetrics() {
  const dealsCountEl = document.getElementById('kpiDealsCount');
  const tickerCountEl = document.getElementById('kpiTickerCount');
  const reviewsCountEl = document.getElementById('kpiReviewsCount');

  const reviews = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]');

  if (dealsCountEl) dealsCountEl.textContent = currentDeals.length;
  if (tickerCountEl) tickerCountEl.textContent = currentTicker.length;
  if (reviewsCountEl) reviewsCountEl.textContent = reviews.length;

  const reviewsBadge = document.getElementById('reviewsCountBadge');
  if (reviewsBadge) reviewsBadge.textContent = `${reviews.length} تقييم`;
}

let currentReviewFilter = 'all';

function filterAdminReviews(ratingFilter, buttonEl) {
  currentReviewFilter = ratingFilter;
  if (buttonEl && buttonEl.parentElement) {
    buttonEl.parentElement.querySelectorAll('.btn-action-outline').forEach(b => b.classList.remove('active'));
    buttonEl.classList.add('active');
  }
  renderAdminReviews();
}

function renderAdminReviews() {
  const list = document.getElementById('adminReviewsList');
  if (!list) return;

  let reviews = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]');
  if (currentReviewFilter !== 'all') {
    reviews = reviews.filter(r => r.rating === parseInt(currentReviewFilter));
  }

  if (reviews.length === 0) {
    list.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">
        <i class="ri-star-smile-line" style="font-size: 2.5rem; display: block; margin-bottom: 0.5rem;"></i>
        لا توجد تقييمات مطابقة لهذه الفئة حتى الآن.
      </div>
    `;
    return;
  }

  list.innerHTML = reviews.map(r => `
    <div class="panel-card" style="margin: 0;">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.5rem;">
        <div>
          <strong style="font-size: 1.1rem; color: var(--text-main);">${r.name}</strong>
          <span style="display: block; font-size: 0.85rem; color: var(--text-muted);">${r.district} • ${r.date || ''}</span>
        </div>
        <button class="btn-action-outline" onclick="deleteAdminReview(${r.id})" style="color: #ef4444; border-color: #fca5a5;" title="حذف التقييم">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
      <div style="color: #f59e0b; margin-bottom: 0.5rem;">
        ${'⭐'.repeat(r.rating || 5)}
      </div>
      <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.5;">"${r.text}"</p>
    </div>
  `).join('');

  updateAdminMetrics();
}

function quickPushPromoCode(e) {
  e.preventDefault();
  const input = document.getElementById('quickPromoInput');
  if (!input) return;

  const text = input.value.trim();
  if (!text) return;

  const newItem = {
    id: `t-${Date.now()}`,
    text: text,
    icon: 'ri-flashlight-fill',
    color: '#f59e0b'
  };

  currentTicker.unshift(newItem);
  saveTickerToStorage();
  renderTicker();
  updateLiveTickerPreview();
  updateAdminMetrics();

  input.value = '';
  showToast('تم نشر كود الخصم فوراً للشريط الإخباري 🚀');
}

function deleteAdminReview(id) {
  if (confirm('هل أنت تأكد من حذف هذا التقييم؟')) {
    let reviews = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]');
    reviews = reviews.filter(r => r.id !== id);
    localStorage.setItem('cart_customer_reviews', JSON.stringify(reviews));
    renderAdminReviews();
    showToast('تم حذف التقييم بنجاح');
  }
}

function exportDataToCSV() {
  let csvContent = "\uFEFF"; // UTF-8 BOM for Excel RTL support
  csvContent += "النوع,العنوان/النص,التفاصيل/الأيقونة,ملاحظة\n";

  currentDeals.forEach(d => {
    csvContent += `"عرض يومي","${d.title}","${d.badgeRibbon}","${d.desc.replace(/"/g, '""')}"\n`;
  });

  currentTicker.forEach(t => {
    csvContent += `"شريط إخباري","${t.text}","${t.icon}","--"\n`;
  });

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vegetable_cart_report_${new Date().toISOString().slice(0,10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('تم تصدير ملف Excel (CSV) بنجاح 📊');
}

function printDailyReport() {
  const printWindow = window.open('', '_blank');
  const dateStr = new Date().toLocaleDateString('ar-SA');
  
  let html = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
      <meta charset="UTF-8">
      <title>تقرير مؤسسة عربة الخضار اليومي - ${dateStr}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, sans-serif; padding: 2rem; direction: rtl; }
        h1 { color: #059669; border-bottom: 2px solid #059669; padding-bottom: 0.5rem; }
        table { width: 100%; border-collapse: collapse; margin-top: 1.5rem; }
        th, td { border: 1px solid #ddd; padding: 0.75rem; text-align: right; }
        th { background: #ecfdf5; color: #065f46; }
      </style>
    </head>
    <body>
      <h1>🌿 مؤسسة عربة الخضار للفواكه والخضار - كشف التقرير اليومي</h1>
      <p>تاريخ التقرير: <strong>${dateStr}</strong></p>
      
      <h3>1. كشف العروض والتخفيضات اليومية:</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>العرض</th>
            <th>وسم الخصم</th>
            <th>نسبة التوافر / المحجوز</th>
          </tr>
        </thead>
        <tbody>
          ${currentDeals.map((d, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${d.title}</td>
              <td>${d.badgeRibbon}</td>
              <td>${d.stockHeader || 'متوفر'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>

      <h3>2. تنبيهات الشريط الإخباري العلوي:</h3>
      <ul>
        ${currentTicker.map(t => `<li>${t.text}</li>`).join('')}
      </ul>

      <script>window.onload = function() { window.print(); }</script>
    </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
}

// ==========================================
// ⚙️ Branch Locations Controller (إدارة فروع ومواقع الرياض)
// ==========================================
function renderAdminBranches() {
  const grid = document.getElementById('branchesAdminGrid');
  if (!grid) return;

  const searchQuery = (document.getElementById('adminBranchSearchInput')?.value || '').trim().toLowerCase();

  let list = currentBranches;
  if (searchQuery) {
    list = list.filter(b => 
      b.name.toLowerCase().includes(searchQuery) ||
      b.displayName.toLowerCase().includes(searchQuery) ||
      b.address.toLowerCase().includes(searchQuery) ||
      b.coverage.toLowerCase().includes(searchQuery) ||
      b.zoneName.toLowerCase().includes(searchQuery)
    );
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1.5px dashed var(--border);">
        <i class="ri-store-2-line" style="font-size: 2.5rem; color: var(--text-light); display: block; margin-bottom: 0.5rem;"></i>
        <p style="color: var(--text-muted); font-weight: 700;">لا توجد فروع تطابق البحث الحالي.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(b => {
    let statusText = 'مفتوح تلقائياً 🟢';
    if (b.statusOverride === 'open') {
      statusText = 'مفتوح باستمرار (دائم) 🟢';
    } else if (b.statusOverride === 'closed') {
      statusText = 'مغلق حالياً 🔴';
    }

    return `
      <div class="panel-card item-card-admin" style="display: flex; flex-direction: column; gap: 0.75rem; margin: 0;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem;">
          <div>
            <span class="admin-badge" style="background: var(--primary-light); color: var(--primary); margin-bottom: 0.35rem; display: inline-block;">
              <i class="ri-map-pin-2-fill"></i> ${b.zoneName || 'الرياض'}
            </span>
            <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--text-main);">فرع ${b.name}</h3>
          </div>
          <button class="btn-action-outline" onclick="toggleBranchStatusOverride('${b.id}')" title="تغيير حالة العمل للفرع" style="font-size: 0.78rem; padding: 0.25rem 0.65rem;">
            ${statusText}
          </button>
        </div>

        <div style="font-size: 0.86rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.35rem; background: var(--bg-subtle); padding: 0.75rem; border-radius: var(--radius-sm);">
          <div><strong>📍 العنوان:</strong> ${b.address}</div>
          <div><strong>⏰ ساعات العمل:</strong> ${b.hours || '8:00 ص - 12:00 منتصف الليل'}</div>
          <div><strong>🚚 نطاق التغطية:</strong> ${b.coverage}</div>
          <div><strong>📞 التواصل المباشر:</strong> <span dir="ltr">${b.localPhone || b.phone || '+966 11 500 7271'}</span></div>
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: auto; flex-wrap: wrap;">
          <button class="btn-action-primary" onclick="editBranch('${b.id}')" style="flex: 1; font-size: 0.85rem; padding: 0.45rem 0.75rem; background: #f43f5e;">
            <i class="ri-edit-line"></i> تعديل الفرع والموقع
          </button>

          <a href="${b.mapDirectUrl}" target="_blank" class="btn-action-outline" style="font-size: 0.85rem; padding: 0.45rem 0.65rem;" title="فتح الخريطة">
            <i class="ri-map-pin-line"></i> الخريطة
          </a>

          <button class="btn-action-outline" onclick="deleteBranch('${b.id}')" style="color: #ef4444; border-color: #fca5a5; font-size: 0.85rem; padding: 0.45rem 0.65rem;" title="حذف الفرع">
            <i class="ri-delete-bin-line"></i>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openBranchModal(branchId = null) {
  editingBranchId = branchId;
  const modal = document.getElementById('branchModal');
  const title = document.getElementById('branchModalTitle');

  if (branchId) {
    const b = currentBranches.find(x => x.id === branchId);
    if (!b) return;

    if (title) title.innerHTML = `<i class="ri-edit-circle-line"></i> تعديل بيانات فرع ${b.name}`;
    document.getElementById('branchModalId').value = b.id;
    document.getElementById('branchModalName').value = b.name || '';
    document.getElementById('branchModalDisplayName').value = b.displayName || b.name || '';
    document.getElementById('branchModalZone').value = b.zone || 'east';
    document.getElementById('branchModalZoneName').value = b.zoneName || 'شرق الرياض';
    document.getElementById('branchModalAddress').value = b.address || '';
    document.getElementById('branchModalHours').value = b.hours || '8:00 ص - 12:00 منتصف الليل';
    document.getElementById('branchModalCoverage').value = b.coverage || '';
    document.getElementById('branchModalLocalPhone').value = b.localPhone || '';
    document.getElementById('branchModalStatusOverride').value = b.statusOverride || 'auto';
    document.getElementById('branchModalMapDirectUrl').value = b.mapDirectUrl || '';
    document.getElementById('branchModalMapEmbedUrl').value = b.mapEmbedUrl || '';
  } else {
    if (title) title.innerHTML = `<i class="ri-store-3-line"></i> إضافة فرع جديد بالرياض`;
    document.getElementById('branchModalId').value = '';
    document.getElementById('branchModalName').value = '';
    document.getElementById('branchModalDisplayName').value = '';
    document.getElementById('branchModalZone').value = 'east';
    document.getElementById('branchModalZoneName').value = 'شرق الرياض';
    document.getElementById('branchModalAddress').value = '';
    document.getElementById('branchModalHours').value = '8:00 ص - 12:00 منتصف الليل';
    document.getElementById('branchModalCoverage').value = '';
    document.getElementById('branchModalLocalPhone').value = '';
    document.getElementById('branchModalStatusOverride').value = 'auto';
    document.getElementById('branchModalMapDirectUrl').value = '';
    document.getElementById('branchModalMapEmbedUrl').value = '';
  }

  if (modal) {
    modal.classList.add('open');
    modal.classList.add('active');
  }
}

function editBranch(branchId) {
  openBranchModal(branchId);
}

function closeBranchModal() {
  const modal = document.getElementById('branchModal');
  if (modal) {
    modal.classList.remove('open');
    modal.classList.remove('active');
  }
  editingBranchId = null;
}

function updateZoneNamePreset(zoneVal) {
  const zoneNameInput = document.getElementById('branchModalZoneName');
  if (!zoneNameInput) return;
  const presets = {
    east: 'شرق الرياض',
    west: 'غرب الرياض',
    south: 'جنوب الرياض',
    north: 'شمال الرياض',
    center: 'وسط الرياض'
  };
  if (presets[zoneVal]) {
    zoneNameInput.value = presets[zoneVal];
  }
}

function saveBranchFromModal(e) {
  e.preventDefault();
  const idInput = document.getElementById('branchModalId').value.trim();
  const name = document.getElementById('branchModalName').value.trim();
  const displayName = document.getElementById('branchModalDisplayName').value.trim() || name;
  const zone = document.getElementById('branchModalZone').value;
  const zoneName = document.getElementById('branchModalZoneName').value.trim();
  const address = document.getElementById('branchModalAddress').value.trim();
  const hours = document.getElementById('branchModalHours').value.trim() || '8:00 ص - 12:00 منتصف الليل';
  const coverage = document.getElementById('branchModalCoverage').value.trim();
  const localPhone = document.getElementById('branchModalLocalPhone').value.trim();
  const statusOverride = document.getElementById('branchModalStatusOverride').value;
  const mapDirectUrl = document.getElementById('branchModalMapDirectUrl').value.trim();
  const mapEmbedUrl = document.getElementById('branchModalMapEmbedUrl').value.trim();

  if (!name || !address) {
    showToast('يرجى تعبئة اسم الفرع والعنوان كاملاً', 'error');
    return;
  }

  const branchData = {
    id: idInput || `branch-${Date.now()}`,
    name,
    displayName,
    zone,
    zoneName,
    phone: '966115007271',
    phoneDisplay: '+966 11 500 7271',
    localPhone: localPhone || '966115007271',
    address,
    hours,
    coverage: coverage || `كافة أحياء ${zoneName}`,
    mapDirectUrl: mapDirectUrl || 'https://maps.google.com',
    mapEmbedUrl: mapEmbedUrl || 'https://maps.google.com',
    statusOverride
  };

  if (idInput) {
    const idx = currentBranches.findIndex(b => b.id === idInput);
    if (idx !== -1) {
      currentBranches[idx] = branchData;
    } else {
      currentBranches.push(branchData);
    }
  } else {
    currentBranches.push(branchData);
  }

  saveBranchesToStorage();
  renderAdminBranches();
  updateAdminMetrics();
  closeBranchModal();
  showToast(`تم حفظ بيانات فرع ${name} والموقع بنجاح 🌿`);
}

function toggleBranchStatusOverride(branchId) {
  const b = currentBranches.find(x => x.id === branchId);
  if (!b) return;

  const current = b.statusOverride || 'auto';
  let next = 'open';
  if (current === 'auto') next = 'open';
  else if (current === 'open') next = 'closed';
  else next = 'auto';

  b.statusOverride = next;
  saveBranchesToStorage();
  renderAdminBranches();
  
  const labelMap = { auto: 'تلقائي (حسب الوقت)', open: 'مفتوح باستمرار 🟢', closed: 'مغلق حالياً 🔴' };
  showToast(`تم تغيير حالة فرع ${b.name} إلى: ${labelMap[next]}`);
}

function deleteBranch(branchId) {
  if (currentBranches.length <= 1) {
    showToast('لا يمكن حذف جميع الفروع! يجب الإبقاء على فرع واحد على الأقل.', 'error');
    return;
  }

  const b = currentBranches.find(x => x.id === branchId);
  if (!b) return;

  if (confirm(`هل أنت تأكد من حذف فرع (${b.name}) نهائياً؟`)) {
    currentBranches = currentBranches.filter(x => x.id !== branchId);
    saveBranchesToStorage();
    renderAdminBranches();
    updateAdminMetrics();
    showToast(`تم حذف فرع ${b.name} بنجاح`);
  }
}

// Store Settings Logic
function loadStoreSettings() {
  const saved = localStorage.getItem('cart_store_settings');
  if (saved) {
    try {
      const s = JSON.parse(saved);
      if (document.getElementById('settingStoreName')) document.getElementById('settingStoreName').value = s.storeName || 'مؤسسة عربة الخضار للفواكه والخضار';
      if (document.getElementById('settingUnifiedPhone')) document.getElementById('settingUnifiedPhone').value = s.unifiedPhone || '966115007271';
      if (document.getElementById('settingUnifiedDisplay')) document.getElementById('settingUnifiedDisplay').value = s.unifiedDisplay || '+966 11 500 7271';
      if (document.getElementById('settingFreeDevTarget')) document.getElementById('settingFreeDevTarget').value = s.freeDevTarget || 3;
      if (document.getElementById('settingWhatsappMsg')) document.getElementById('settingWhatsappMsg').value = s.whatsappMsg || 'السلام عليكم ورحمة الله، أود الاستفسار والطلب من مؤسسة عربة الخضار بالرياض.';
      if (document.getElementById('settingMaintenanceMode')) document.getElementById('settingMaintenanceMode').checked = !!s.isMaintenanceMode;
    } catch (e) {}
  }
}

function saveStoreSettings(e) {
  e.preventDefault();
  const settings = {
    storeName: document.getElementById('settingStoreName').value.trim(),
    unifiedPhone: document.getElementById('settingUnifiedPhone').value.trim(),
    unifiedDisplay: document.getElementById('settingUnifiedDisplay').value.trim(),
    freeDevTarget: parseInt(document.getElementById('settingFreeDevTarget').value) || 3,
    whatsappMsg: document.getElementById('settingWhatsappMsg').value.trim(),
    isMaintenanceMode: document.getElementById('settingMaintenanceMode').checked
  };

  localStorage.setItem('cart_store_settings', JSON.stringify(settings));
  showToast('تم حفظ إعدادات المتجر والرقم الموحد بنجاح 🌿');
}

function updateAdminMetrics() {
  const dealsCount = currentDeals.length;
  const tickerCount = currentTicker.length;
  const reviewsCount = JSON.parse(localStorage.getItem('cart_customer_reviews') || '[]').length;
  const branchesCount = currentBranches.length;

  const dealsEl = document.getElementById('kpiDealsCount');
  const tickerEl = document.getElementById('kpiTickerCount');
  const reviewsEl = document.getElementById('kpiReviewsCount');
  const branchesEl = document.getElementById('kpiBranchesCount');

  const dealsBadge = document.getElementById('dealsCountBadge');
  const tickerBadge = document.getElementById('tickerCountBadge');
  const reviewsBadge = document.getElementById('reviewsCountBadge');
  const branchesBadge = document.getElementById('branchesCountBadge');

  if (dealsEl) dealsEl.textContent = dealsCount;
  if (tickerEl) tickerEl.textContent = tickerCount;
  if (reviewsEl) reviewsEl.textContent = reviewsCount;
  if (branchesEl) branchesEl.textContent = branchesCount;

  if (dealsBadge) dealsBadge.textContent = `${dealsCount} عرض`;
  if (tickerBadge) tickerBadge.textContent = `${tickerCount} عبارة`;
  if (reviewsBadge) reviewsBadge.textContent = `${reviewsCount} تقييم`;
  if (branchesBadge) branchesBadge.textContent = `${branchesCount} فروع`;
}

function resetAllDataToDefault() {
  if (confirm('تنبيه: هل تريد إعادة تعيين كافة البيانات بالفروع والعروض والشريط للافتراضي؟')) {
    currentDeals = [...DEFAULT_DEALS];
    currentTicker = [...DEFAULT_TICKER_ITEMS];
    currentBranches = [...DEFAULT_BRANCHES];
    saveDealsToStorage();
    saveTickerToStorage();
    saveBranchesToStorage();
    renderDeals();
    renderTicker();
    renderAdminBranches();
    updateAdminMetrics();
    showToast('تمت استعادة كافة البيانات الافتراضية بنجاح 🌿');
  }
}

function showToast(message, type = 'success') {
  let container = document.getElementById('adminToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'adminToastContainer';
    container.className = 'admin-toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `admin-toast ${type === 'error' ? 'error' : ''}`;
  const icon = type === 'error' ? 'ri-error-warning-fill' : 'ri-checkbox-circle-fill';
  toast.innerHTML = `<i class="${icon}" style="color: ${type === 'error' ? '#ef4444' : 'var(--accent-lime)'};"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(15px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ==========================================
// 🛍️ إدارة كتالوج المنتجات واللحوم والعصائر
// ==========================================
let currentCatalog = [];
let editingCatalogId = null;
let currentCatalogCategoryFilter = 'all';
let currentCatalogSearchQuery = '';

const DEFAULT_CATALOG_DATA = [
  { id: 1, name: 'حبحب أحمر سكري طازج', category: 'melons', categoryName: 'بطيخ وشمام', unit: 'حبة كاملة محلاة طازجة منتقاة فجر اليوم (8 - 10 كجم)', badge: 'حلو ومحلّى 100% 🍉', badgeClass: 'badge-gold', image: 'uploads/habhab.jpg', benefits: 'ثمار حبحب محلاة مليئة بالعصير الطبيعي والانتعاش فجر كل يوم.' },
  { id: 2, name: 'شمام بلدي سكري فاخر', category: 'melons', categoryName: 'بطيخ وشمام', unit: 'كرتون منتقى حبة بحبة معطر ومحلّى (5 - 6 كجم)', badge: 'عطر ورائحة نضرة 🍈', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1571575173700-afb9492e6a50?auto=format&fit=crop&w=600&q=80', benefits: 'شمام بلدي فاخر محلى بطعم سكري رائع طازج يومياً.' },
  { id: 3, name: 'موز فلبيني فاخر درجة أولى', category: 'tropical', categoryName: 'موز وفواكه استوائية', unit: 'طبق فاخر (3 كجم) طازج ونقي درجة ممتازة', badge: 'درجة أولى ممتازة 🍌', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80', benefits: 'موز أصفر ناضج غني بالطاقة والفيتامينات والمعادن.' },
  { id: 4, name: 'برتقال عصير وسكري فاخر', category: 'citrus', categoryName: 'برتقال وحمضيات', unit: 'صندوق عائلي مليء بالعصير الطبيعي (8 كجم)', badge: 'طبيعي وفيتامين C 🍊', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1547514701-42782101795e?auto=format&fit=crop&w=600&q=80', benefits: 'برتقال عصير سكري ناضج ممتاز للعصير اليومي وللصحة.' },
  { id: 5, name: 'عنب أسود وأحمر فاخر (بدون بذر)', category: 'berries', categoryName: 'عنب وفراولة', unit: 'طبق فاخر سكري مقرمش بدون بذر (2 كجم)', badge: 'مقرمش وسكري 🍇', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80', benefits: 'عنب مشكل سكري بدون بذور طازج وعالي النقاء.' },
  { id: 6, name: 'صينية الفواكه الملكية (للهدايا والمناسبات)', category: 'baskets', categoryName: 'الصواني الملكية', unit: 'فواكه استوائية وموسمية بتنسيق وتغليف فاخر (10 كجم)', badge: 'ضيافة وهدايا ملكية 👑', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=600&q=80', benefits: 'تنسيق مرصع بأجود أصناف الفواكه الفاخرة للتقديم المباشر.' },
  { id: 7, name: 'صينية التشكيلة العائلية الفاخرة من الفواكه', category: 'baskets', categoryName: 'الصواني الملكية', unit: 'تشكيلة عائلية شاملة من فواكه الموسم (12 كجم)', badge: 'الأكثر طلباً للأسر 🌟', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80', benefits: 'صينية عائلية وفيرة تلبي كافة احتياجات الأسرة الأسبوعية.' },
  { id: 8, name: 'تفاح سكري أحمر فاخر', category: 'citrus', categoryName: 'فواكه طازجة', unit: 'ثمار ممتازة منتقاة حبة بحبة (4 كجم)', badge: 'منتقى حبة بحبة ✨', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80', benefits: 'تفاح سكري أحمر عالي الجودة فرز يدوي دقيق.' },
  { id: 9, name: 'رمان طائفي حلو وموسمي', category: 'berries', categoryName: 'فواكه موسمي', unit: 'طبق رمان طائفي موسمي ممتاز بدرجة أولى (3.5 كجم)', badge: 'موسمي درجة أولى 💎', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80', benefits: 'رمان طائفي أحمر سكري مليء بالعصير والقيمة الغذائية.' },
  { id: 10, name: 'فراولة طازجة حمرة ومحلاة', category: 'berries', categoryName: 'عنب وفراولة', unit: 'أطباق فراولة فاخرة عطرية (1.5 كجم)', badge: 'طازجة ومحلاة 🍓', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=600&q=80', benefits: 'فراولة عطرية نضرة محلاة قطفة فجر اليوم.' },
  { id: 11, name: 'مانجو استوائي جيزاني فاخر', category: 'tropical', categoryName: 'موز وفواكه استوائية', unit: 'صندوق مانجو محلى عالي الجودة (4 كجم)', badge: 'محصول استوائي فاخر 🥭', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80', benefits: 'مانجو استوائي عالي الحلاوة والرائحة الزكية.' },
  { id: 12, name: 'أناناس وكيوي استوائي مشكل', category: 'tropical', categoryName: 'موز وفواكه استوائية', unit: 'تشكيلة فواكه استوائية محلاة ومغلفة (3 كجم)', badge: 'فيتامينات وانتعاش 🍍', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80', benefits: 'أناناس وكيوي طازج مليء بالإنزيمات والفيتامينات.' },
  { id: 13, name: 'عصير فواكه طبيعي 100% مشكل', category: 'juices', categoryName: 'عصائر ومشروبات', unit: 'جالون عائلي (1.5 لتر) معصور طازجاً بدون سكر مضاف', badge: 'طبيعي 100% 🥤', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80', benefits: 'معصور طازجاً فجر اليوم من أفضل الفواكه الطبيعية 100%.' },
  { id: 14, name: 'عصير برتقال سكري طازج', category: 'juices', categoryName: 'عصائر ومشروبات', unit: 'جالون مبرد (1.5 لتر) عصرة اليوم غني بفيتامين C', badge: 'فيتامين C طازج 🍊', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=600&q=80', benefits: 'عصير برتقال طبيعي نقي يعطيك الانتعاش والحيوية طوال اليوم.' },
  { id: 15, name: 'عصير مانجو استوائي طازج (ميلك شيك)', category: 'juices', categoryName: 'عصائر ومشروبات', unit: 'عبوة عائلية (1.5 لتر) كثيف وطبيعي فاخر', badge: 'طعم استوائي فاخر 🥭', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=600&q=80', benefits: 'عصير مانجو طبيعي ثقيل ولذيذ يعكس نضارة ثمار المانجو.' },
  { id: 16, name: 'عصير رمان طائفي طبيعي طازج', category: 'juices', categoryName: 'عصائر ومشروبات', unit: 'عبوة فاخرة (1.5 لتر) معصور على البارد 100%', badge: 'معصور على البارد 🍇', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80', benefits: 'عصير رمان طائفي أصلي غني بمضادات الأكسدة وبطعم مميز.' },
  { id: 17, name: 'عصير عوار قلب فواكه طبيعية', category: 'juices', categoryName: 'عصائر ومشروبات', unit: 'جالون مميز (1.5 لتر) خلطة الفراولة والمانجو والآيسكريم', badge: 'الأكثر طلباً 💖', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80', benefits: 'مزيج شهي ومقرمش من قطع الفواكه والعصائر المبردة.' },
  { id: 18, name: 'لحم حاشي بلدي طازج (بدون عظم)', category: 'meats', categoryName: 'ملحمة اللحوم', unit: 'كيلو جرام طازج ذبيحة اليوم من المزرعة', badge: 'بلدي طازج 100% 🥩', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=600&q=80', benefits: 'لحم حاشي بلدي طري ممتاز للطبخ والمكبوس اليومي.' },
  { id: 19, name: 'لحم غنم نعيمي بلدي طازج', category: 'meats', categoryName: 'ملحمة اللحوم', unit: 'كيلو جرام بلدي فاخر مقطع ومجهز حسب رغبتك', badge: 'نعيمي بلدي درجة أولى 🐑', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80', benefits: 'لحم نعيمي بلدي طازج فجر اليوم ذبائح بلدي تحت إشراف صحي.' },
  { id: 20, name: 'لحم مفروم بلدي طازج فاخر', category: 'meats', categoryName: 'ملحمة اللحوم', unit: 'طبق (1 كجم) مفروم فوري طازج بدون دهن زائد', badge: 'مفروم طازج 🍖', badgeClass: 'badge-green', image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=600&q=80', benefits: 'مفروم بلدي نقي مجهز فور الطلب للطهي الصحي والمعجنات.' },
  { id: 21, name: 'أوصال كباب لحم بلدي طازج للشوي', category: 'meats', categoryName: 'ملحمة اللحوم', unit: 'طبق فاخر (1 كجم) متبل ومجهز للشواء المباشر', badge: 'جاهز للشواء 🔥', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80', benefits: 'أوصال لحم متبلة بخلطة خبراائنا جاهزة للشواء والجمعايات.' },
  { id: 22, name: 'ريش غنم نعيمي بلدي فاخرة', category: 'meats', categoryName: 'ملحمة اللحوم', unit: 'طبق ريش (1 كجم) طازجة وطرية جداً', badge: 'ريش طرية فاخرة 🥩', badgeClass: 'badge-gold', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80', benefits: 'قطع ريش نعيمي طرية ومثالية للفرن والمشويات العائلية.' }
];

function loadAdminCatalog() {
  const saved = localStorage.getItem('cart_catalog_products');
  if (saved) {
    try {
      currentCatalog = JSON.parse(saved);
    } catch (e) {
      currentCatalog = [...DEFAULT_CATALOG_DATA];
    }
  } else {
    currentCatalog = [...DEFAULT_CATALOG_DATA];
  }
}

function saveCatalogToStorage() {
  localStorage.setItem('cart_catalog_products', JSON.stringify(currentCatalog));
}

function handleAdminCatalogSearch() {
  const searchInput = document.getElementById('adminCatalogSearchInput');
  currentCatalogSearchQuery = (searchInput ? searchInput.value : '').trim().toLowerCase();
  renderAdminCatalog(currentCatalogCategoryFilter);
}

function filterAdminCatalog(category = 'all', buttonElement) {
  if (category) currentCatalogCategoryFilter = category;
  
  if (buttonElement) {
    document.querySelectorAll('#adminCategoryPillsGroup .btn-action-outline').forEach(b => b.classList.remove('active'));
    buttonElement.classList.add('active');
  }
  
  renderAdminCatalog(currentCatalogCategoryFilter);
}

function renderAdminCatalog(categoryFilter = 'all') {
  const listContainer = document.getElementById('adminCatalogList');
  if (!listContainer) return;

  let filtered = currentCatalog;
  if (categoryFilter !== 'all') {
    filtered = currentCatalog.filter(item => item.category === categoryFilter);
  }

  if (currentCatalogSearchQuery) {
    filtered = filtered.filter(item => 
      item.name.toLowerCase().includes(currentCatalogSearchQuery) ||
      item.unit.toLowerCase().includes(currentCatalogSearchQuery) ||
      (item.badge && item.badge.toLowerCase().includes(currentCatalogSearchQuery)) ||
      (item.categoryName && item.categoryName.toLowerCase().includes(currentCatalogSearchQuery))
    );
  }

  if (filtered.length === 0) {
    listContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">لا توجد أصناف مطابقة لبحثك في هذا التصنيف حالياً.</div>';
    return;
  }

  listContainer.innerHTML = filtered.map(item => `
    <div class="admin-item-card" style="display: flex; flex-direction: column; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-color); overflow: hidden; padding: 0.85rem;">
      <div style="position: relative; height: 160px; border-radius: 8px; overflow: hidden; margin-bottom: 0.75rem;">
        <img id="adminProdImg_${item.id}" src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80'" />
        <span class="badge" style="position: absolute; top: 8px; right: 8px; background: rgba(0,0,0,0.75); color: #fff; padding: 0.25rem 0.65rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">${item.categoryName || item.category}</span>
        ${item.badge ? `<span style="position: absolute; bottom: 8px; right: 8px; background: #fef3c7; color: #b45309; padding: 0.2rem 0.5rem; border-radius: 20px; font-size: 0.7rem; font-weight: 800;">${item.badge}</span>` : ''}
      </div>

      <h4 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.35rem; line-height: 1.3;">${item.name}</h4>
      <p style="font-size: 0.84rem; color: var(--text-muted); margin-bottom: 0.75rem; flex: 1;">${item.unit}</p>

      <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: auto;">
        <button class="btn-action-outline" style="flex: 1; padding: 0.4rem 0.5rem; font-size: 0.8rem;" onclick="editCatalogProduct(${item.id})" title="تعديل التفاصيل والصورة">
          <i class="ri-edit-line"></i> تعديل
        </button>
        <label class="btn-action-outline" style="cursor: pointer; margin: 0; padding: 0.4rem 0.5rem; font-size: 0.8rem;" title="رفع صورة جديدة للصنف">
          <i class="ri-upload-2-line"></i> رفع صورة
          <input type="file" accept="image/*" style="display: none;" onchange="quickUploadProductImage(event, ${item.id})" />
        </label>
        <button class="btn-action-outline" style="color: #ef4444; border-color: #fee2e2; padding: 0.4rem 0.5rem;" onclick="deleteCatalogProduct(${item.id})" title="حذف الصنف">
          <i class="ri-delete-bin-line"></i>
        </button>
      </div>
    </div>
  `).join('');
}

async function quickUploadProductImage(e, productId) {
  const file = e.target.files[0];
  if (!file) return;

  const uploadedUrl = await uploadImageFileToServer(file);
  const item = currentCatalog.find(x => x.id === productId);
  if (item) {
    item.image = uploadedUrl;
    saveCatalogToStorage();
    renderAdminCatalog(currentCatalogCategoryFilter);
    showToast(`تم تغيير صورة (${item.name}) بنجاح 📸`);
  }
}

function filterAdminCatalog(category, buttonElement) {
  document.querySelectorAll('#catalogTab .btn-action-outline').forEach(b => b.classList.remove('active'));
  if (buttonElement) buttonElement.classList.add('active');
  renderAdminCatalog(category);
}

function saveCatalogProduct(e) {
  e.preventDefault();
  const name = document.getElementById('catalogName').value.trim();
  const category = document.getElementById('catalogCategory').value;
  const unit = document.getElementById('catalogUnit').value.trim();
  const badge = document.getElementById('catalogBadge').value.trim() || 'طازج يومياً 🌿';
  const image = document.getElementById('catalogImageUrl').value.trim();
  const benefits = document.getElementById('catalogBenefits').value.trim();

  const categoryNamesMap = {
    juices: 'عصائر ومشروبات',
    meats: 'ملحمة اللحوم',
    baskets: 'الصواني الملكية',
    melons: 'بطيخ وشمام',
    citrus: 'برتقال وحمضيات',
    tropical: 'موز وفواكه استوائية',
    berries: 'عنب وفراولة'
  };

  if (!name || !image) return;

  if (editingCatalogId) {
    const idx = currentCatalog.findIndex(x => x.id === editingCatalogId);
    if (idx !== -1) {
      currentCatalog[idx] = {
        ...currentCatalog[idx],
        name,
        category,
        categoryName: categoryNamesMap[category] || category,
        unit,
        badge,
        image,
        benefits
      };
      showToast(`تم تحديث الصنف (${name}) بنجاح 🌿`);
    }
  } else {
    const newProduct = {
      id: Date.now(),
      name,
      category,
      categoryName: categoryNamesMap[category] || category,
      unit,
      badge,
      badgeClass: 'badge-gold',
      image,
      benefits
    };
    currentCatalog.unshift(newProduct);
    showToast(`تم إضافة الصنف الجديد (${name}) بنجاح 🎉`);
  }

  saveCatalogToStorage();
  resetCatalogForm();
  renderAdminCatalog();
}

function editCatalogProduct(id) {
  const item = currentCatalog.find(x => x.id === id);
  if (!item) return;

  editingCatalogId = id;
  document.getElementById('catalogEditId').value = id;
  document.getElementById('catalogName').value = item.name;
  document.getElementById('catalogCategory').value = item.category;
  document.getElementById('catalogUnit').value = item.unit;
  document.getElementById('catalogBadge').value = item.badge || '';
  document.getElementById('catalogImageUrl').value = item.image;
  document.getElementById('catalogBenefits').value = item.benefits || '';

  previewCatalogImage(item.image);

  document.getElementById('catalogFormTitle').innerHTML = '<i class="ri-edit-fill" style="color:#10b981;"></i> تعديل بيانات الصنف بالكتالوج';
  document.getElementById('catalogSubmitBtnText').textContent = 'تحديث بيانات الصنف';
  document.getElementById('btnCancelEditCatalog').style.display = 'inline-flex';
  document.getElementById('catalogTab').scrollIntoView({ behavior: 'smooth' });
}

function deleteCatalogProduct(id) {
  const item = currentCatalog.find(x => x.id === id);
  if (!item) return;

  if (confirm(`هل أنت تأكد من حذف الصنف (${item.name}) من الكتالوج؟`)) {
    currentCatalog = currentCatalog.filter(x => x.id !== id);
    saveCatalogToStorage();
    renderAdminCatalog();
    showToast(`تم حذف الصنف بنجاح`);
  }
}

function resetCatalogForm() {
  editingCatalogId = null;
  document.getElementById('catalogEditId').value = '';
  document.getElementById('catalogProductForm').reset();
  document.getElementById('catalogFormTitle').innerHTML = '<i class="ri-add-circle-fill" style="color:#10b981;"></i> إضافة صنف / منتج جديد للكتالوج';
  document.getElementById('catalogSubmitBtnText').textContent = 'حفظ الصنف بالكتالوج';
  document.getElementById('btnCancelEditCatalog').style.display = 'none';
  document.getElementById('catalogImagePreview').style.display = 'none';
}

function resetCatalogToDefault() {
  if (confirm('هل ترغب بإعادة تعيين كافة أصناف الكتالوج للوضع الافتراضي؟')) {
    currentCatalog = [...DEFAULT_CATALOG_DATA];
    saveCatalogToStorage();
    renderAdminCatalog();
    showToast('تمت استعادة الكتالوج الافتراضي بنجاح 🌿');
  }
}

function previewCatalogImage(url) {
  const container = document.getElementById('catalogImagePreview');
  const img = document.getElementById('catalogPreviewImg');
  if (url && container && img) {
    img.src = url;
    container.style.display = 'block';
  }
}

async function handleCatalogFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;

  const uploadedUrl = await uploadImageFileToServer(file);
  document.getElementById('catalogImageUrl').value = uploadedUrl;
  previewCatalogImage(uploadedUrl);
  showToast('تم رفع صورة المنتج بنجاح 📸');
}

// ==========================================
// 🖼️ إدارة صور وسلايدر الموقع الرئيسي (Hero Slides & Stories)
// ==========================================
const DEFAULT_HERO_SLIDES = [
  'fresh_produce_hero.jpg',
  'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=1000&q=85',
  'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=1000&q=85'
];

const DEFAULT_STORIES_DATA = [
  { title: 'قطفة الفجر اليوم 🚜', time: 'تغطية فجر اليوم • المزارع الوطنية', img: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80', caption: 'تجهيز وثمار الفواكه المقطوفة فجر اليوم للتعبئة والتوزيع المباشر لأحياء الرياض 🍓🍊' },
  { title: 'صواني الهدايا الملكية 👑', time: 'منذ 3 ساعات • فرع الربوة', img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80', caption: 'تنسيق صينية فواكه استوائية وموسمية بشرائط فاخرة جاهزة للإهداء والضيافة المباشرة ✨' },
  { title: 'بطيخ وشمام سكري 🍉', time: 'منذ 4 ساعات • فرع وادي لبن', img: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80', caption: 'فرز وتعبئة البطيخ الأحمر السكري والشمام المعطر الطازج لزبائننا بالرياض 🍉🍈' },
  { title: 'الفرز والرقابة حبة بحبة ✨', time: 'منذ 5 ساعات • فرع النسيم', img: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=800&q=80', caption: 'فحص دقيق واستبعاد أي ثمرة لا تلبي مواصفات الدرجة الأولى الممتازة بحب وأمانة 💖' },
  { title: 'التوصيل المبرد للرياض 🚚', time: 'منذ 6 ساعات • كافة مناطق الرياض', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80', caption: 'أسطول التوصيل المبرد ينطلق لتوصيل طلبيات الفواكه والصواني حتى باب بيتك بالرياض فوراً 🚀' }
];

function loadHeroSlidesToAdmin() {
  const saved = localStorage.getItem('cart_hero_slides');
  let slides = DEFAULT_HERO_SLIDES;
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= 5) slides = parsed;
    } catch (e) {}
  }

  slides.forEach((url, i) => {
    const input = document.getElementById(`heroSlide${i}`);
    const img = document.getElementById(`heroSlidePreview${i}`);
    if (input) input.value = url;
    if (img) img.src = url;
  });
}

function saveHeroSlidesImages(e) {
  e.preventDefault();
  const slides = [
    document.getElementById('heroSlide0').value.trim(),
    document.getElementById('heroSlide1').value.trim(),
    document.getElementById('heroSlide2').value.trim(),
    document.getElementById('heroSlide3').value.trim(),
    document.getElementById('heroSlide4').value.trim()
  ];

  localStorage.setItem('cart_hero_slides', JSON.stringify(slides));
  showToast('تم حفظ صور سلايدر الهيرو بنجاح 🖼️');
}

async function handleHeroSlideUpload(e, index) {
  const file = e.target.files[0];
  if (!file) return;

  const uploadedUrl = await uploadImageFileToServer(file);
  const input = document.getElementById(`heroSlide${index}`);
  const img = document.getElementById(`heroSlidePreview${index}`);
  if (input) input.value = uploadedUrl;
  if (img) img.src = uploadedUrl;
  showToast(`تم رفع صورة الشريحة ${index + 1} بنجاح 📸`);
}

function resetHeroSlidesToDefault() {
  if (confirm('هل ترغب بإعادة تعيين صور معرض سلايدر الهيرو للوضع الافتراضي؟')) {
    localStorage.removeItem('cart_hero_slides');
    loadHeroSlidesToAdmin();
    showToast('تمت استعادة صور الهيرو الافتراضية بنجاح 🌿');
  }
}

function renderAdminStories() {
  const container = document.getElementById('adminStoriesList');
  if (!container) return;

  const saved = localStorage.getItem('cart_stories_data');
  let stories = DEFAULT_STORIES_DATA;
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) stories = parsed;
    } catch (e) {}
  }

  container.innerHTML = stories.map((story, i) => `
    <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <div style="width: 70px; height: 70px; border-radius: 50%; overflow: hidden; border: 2px solid var(--primary); flex-shrink: 0;">
        <img id="storyImgPreview${i}" src="${story.img}" alt="${story.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>
      <div style="flex: 1; min-width: 250px; display: flex; flex-direction: column; gap: 0.5rem;">
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="storyTitle${i}" class="form-control" value="${story.title}" placeholder="عنوان القصة..." style="font-weight: 800;" />
          <input type="text" id="storyTime${i}" class="form-control" value="${story.time}" placeholder="الوقت/الموقع..." style="width: 180px;" />
        </div>
        <div style="display: flex; gap: 0.5rem;">
          <input type="text" id="storyImg${i}" class="form-control" value="${story.img}" placeholder="رابط صورة الاستوري..." style="flex:1;" />
          <label class="btn-action-outline" style="cursor: pointer; margin: 0; white-space: nowrap;">
            <i class="ri-upload-2-line"></i> رفع
            <input type="file" accept="image/*" style="display: none;" onchange="handleStoryFileUpload(event, ${i})" />
          </label>
        </div>
      </div>
    </div>
  `).join('');
}

function saveStoriesFromAdmin() {
  const stories = [];
  for (let i = 0; i < 5; i++) {
    const titleEl = document.getElementById(`storyTitle${i}`);
    const timeEl = document.getElementById(`storyTime${i}`);
    const imgEl = document.getElementById(`storyImg${i}`);
    if (titleEl && imgEl) {
      stories.push({
        title: titleEl.value.trim(),
        time: timeEl ? timeEl.value.trim() : 'تغطية يومية',
        img: imgEl.value.trim(),
        caption: titleEl.value.trim()
      });
    }
  }

  localStorage.setItem('cart_stories_data', JSON.stringify(stories));
  showToast('تم حفظ قصص وصور الاستوري اليومية بنجاح 📸');
}

async function handleStoryFileUpload(e, index) {
  const file = e.target.files[0];
  if (!file) return;

  const uploadedUrl = await uploadImageFileToServer(file);
  const input = document.getElementById(`storyImg${index}`);
  const img = document.getElementById(`storyImgPreview${index}`);
  if (input) input.value = uploadedUrl;
  if (img) img.src = uploadedUrl;
  showToast(`تم رفع صورة الاستوري ${index + 1} بنجاح 📸`);
}

function resetStoriesToDefault() {
  if (confirm('هل ترغب بإعادة تعيين قصص وصور الاستوري للافتراضي؟')) {
    localStorage.removeItem('cart_stories_data');
    renderAdminStories();
    showToast('تمت استعادة قصص الاستوري الافتراضية 🌿');
  }
}
