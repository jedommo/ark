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

// --- الحالة الحالية للبيانات ---
let currentDeals = [];
let currentTicker = [];
let editingDealId = null;
let editingTickerId = null;

// المتغير الخاص بصورة العرض الحالية (Base64 أو رابط)
let currentUploadedImageDataUrl = '';

// --- التهيئة عند تشغيل الصفحة ---
document.addEventListener('DOMContentLoaded', () => {
  initSecurity();
  loadData();
  renderDeals();
  renderTicker();
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
function setupImageUploader() {
  const fileInput = document.getElementById('dealImageFile');
  if (!fileInput) return;

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      showToast('يرجى اختيار ملف صورة صالح (PNG, JPG, WebP)', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      // ضغط وتصغير أبعاد الصورة لضمان عدم استهلاك مساحة LocalStorage
      compressImage(event.target.result, 1000, 0.84, (compressedDataUrl) => {
        currentUploadedImageDataUrl = compressedDataUrl;
        showImagePreview(compressedDataUrl);
        // تفريغ حقل الرابط عند رفع ملف محلي
        const urlInput = document.getElementById('dealImageUrl');
        if (urlInput) urlInput.value = '';
        showToast('تم رفع ومعالجة الصورة بنجاح 📸');
      });
    };
    reader.readAsDataURL(file);
  });

  // متابعة كتابة الرابط اليدوي
  const urlInput = document.getElementById('dealImageUrl');
  if (urlInput) {
    urlInput.addEventListener('input', (e) => {
      const val = e.target.value.trim();
      if (val.startsWith('http')) {
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
// 8. إشعارات Toast
// ==========================================
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
