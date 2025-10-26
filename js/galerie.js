// js/galerie.js
// Module principal pour la galerie
// Attendu: artworks disponible à ./data/artworks.js
import { artworks } from './data/artworks.js';

// -----------------------------
// Translations (keys used in HTML data-translate attributes)
// Add/modify as needed
const translations = {
  fr: {
    gallery_title: "Ma Galerie",
    gallery_subtitle: "Découvrez ma collection d'œuvres réalisées à travers différentes techniques",
    filter_all: "Toutes",
    filter_glass: "Verre",
    filter_tin: "Étain",
    filter_mixed: "Mixte",
    loading: "Chargement des œuvres...",
    lightbox_contact_btn: "Demander un devis",
    lang_french: "Français",
    lang_english: "English",
    lang_arabic: "العربية",
    nav_home: "Accueil",
    nav_gallery: "Galerie",
    nav_exhibitions: "Expositions",
    nav_about: "À Propos",
    nav_contact: "Contact",
    artist_name: "Fatema AL Waisi",
    artist_title: "Artiste & Créatrice"
  },
  en: {
    gallery_title: "My Gallery",
    gallery_subtitle: "Discover my collection of works made with different techniques",
    filter_all: "All",
    filter_glass: "Glass",
    filter_tin: "Tin",
    filter_mixed: "Mixed",
    loading: "Loading artworks...",
    lightbox_contact_btn: "Request a quote",
    lang_french: "Français",
    lang_english: "English",
    lang_arabic: "العربية",
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_exhibitions: "Exhibitions",
    nav_about: "About",
    nav_contact: "Contact",
    artist_name: "Fatema AL Waisi",
    artist_title: "Artist & Creator"
  },
  ar: {
    gallery_title: "معرضي",
    gallery_subtitle: "اكتشف مجموعتي من الأعمال المصنوعة بتقنيات مختلفة",
    filter_all: "الكل",
    filter_glass: "زجاج",
    filter_tin: "قصدير",
    filter_mixed: "مختلط",
    loading: "جاري تحميل الأعمال...",
    lightbox_contact_btn: "طلب عرض سعر",
    lang_french: "Français",
    lang_english: "English",
    lang_arabic: "العربية",
    nav_home: "الرئيسية",
    nav_gallery: "المعرض",
    nav_exhibitions: "المعارض",
    nav_about: "عن الفنانة",
    nav_contact: "اتصل",
    artist_name: "Fatema AL Waisi",
    artist_title: "فنانة ومبدعة"
  }
};

// Mapping rétrocompatible (anciennes valeurs data-filter en français)
const FILTER_MAP = {
  all: 'all',
  verre: 'glass',
  etain: 'tin',
  mixte: 'mixed',
  glass: 'glass',
  tin: 'tin',
  mixed: 'mixed'
};

// State
let currentLang = localStorage.getItem('site_lang') || 'fr';
let currentFilter = 'all';
let galleryItems = []; // array of items for current language
let currentIndex = 0;

// Utilitaires
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

// Apply translations to elements with data-translate
function translatePage() {
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    const txt = t(key);
    if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
      el.placeholder = txt;
    } else {
      el.textContent = txt;
    }
  });

  // Update language display (flag/code) if present
  const flag = document.getElementById('currentFlag');
  const code = document.getElementById('currentLangCode');
  if (flag) flag.src = `flags/${currentLang === 'en' ? 'gb' : currentLang}.svg`;
  if (code) code.textContent = currentLang.toUpperCase();
}

// Set document direction (rtl for Arabic)
function applyDirection() {
  if (currentLang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.classList.add('lang-ar');
  } else {
    document.documentElement.dir = 'ltr';
    document.body.classList.remove('lang-ar');
  }
}

// Load gallery items for current language
function loadGalleryItems() {
  // artworks is { fr: [...], en: [...], ar: [...] }
  const list = (artworks && artworks[currentLang]) ? artworks[currentLang] : (artworks.fr || []);
  galleryItems = Array.isArray(list) ? list.slice() : Object.values(list);
}

// Create gallery grid
function renderGallery(filter = 'all') {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  grid.innerHTML = ''; // clear

  const filtered = galleryItems.filter(item => {
    if (!item || !item.technique) return true;
    if (filter === 'all') return true;
    return item.technique === filter;
  });

  if (filtered.length === 0) {
    const empty = document.createElement('div');
    empty.className = 'gallery-empty';
    empty.textContent = t('loading'); // small reuse for "no works" message; adapt if needed
    grid.appendChild(empty);
    return;
  }

  // create cards
  filtered.forEach((item, idx) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'gallery-card';
    card.setAttribute('data-index', idx);
    card.setAttribute('aria-label', item.title || '');
    // Thumbnail image
    const img = document.createElement('img');
    img.className = 'gallery-thumb';
    img.src = item.thumbnail || item.image;
    img.alt = item.title || '';
    card.appendChild(img);

    // caption
    const cap = document.createElement('div');
    cap.className = 'gallery-meta';
    const h4 = document.createElement('h4');
    h4.textContent = item.title || '';
    cap.appendChild(h4);
    const p = document.createElement('p');
    p.className = 'meta-sub';
    p.textContent = item.year ? `${item.year} • ${item.dimensions || ''}` : item.dimensions || '';
    cap.appendChild(p);

    card.appendChild(cap);

    // click -> open lightbox with the index in the filtered array
    card.addEventListener('click', () => {
      openLightbox(filtered, idx);
    });

    grid.appendChild(card);
  });
}

// Lightbox
let currentLightboxList = [];

function openLightbox(list, idx) {
  currentLightboxList = list;
  currentIndex = idx;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  updateLightbox();
  lb.style.display = 'block';
  lb.setAttribute('aria-hidden', 'false');

  // focus management simple:
  const closeBtn = lb.querySelector('.lightbox-close');
  if (closeBtn) closeBtn.focus();

  // trap basic key events
  document.addEventListener('keydown', lightboxKeyHandler);
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.style.display = 'none';
  lb.setAttribute('aria-hidden', 'true');
  document.removeEventListener('keydown', lightboxKeyHandler);
}

function lightboxKeyHandler(e) {
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
}

function updateLightbox() {
  const item = currentLightboxList[currentIndex];
  if (!item) return;
  const img = document.getElementById('lightbox-image');
  const title = document.getElementById('lightbox-title');
  const details = document.getElementById('lightbox-details');
  const desc = document.getElementById('lightbox-description');
  const counter = document.querySelector('.lightbox-counter');

  img.src = item.image || item.thumbnail || '';
  img.alt = item.title || '';
  title.textContent = item.title || '';
  details.textContent = [item.year, item.dimensions].filter(Boolean).join(' • ');
  desc.textContent = item.description || '';
  counter.textContent = `${currentIndex + 1} / ${currentLightboxList.length}`;
}

function nextLightbox() {
  if (!currentLightboxList.length) return;
  currentIndex = (currentIndex + 1) % currentLightboxList.length;
  updateLightbox();
}

function prevLightbox() {
  if (!currentLightboxList.length) return;
  currentIndex = (currentIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
  updateLightbox();
}

// Filters UI
function initFilters() {
  const buttons = Array.from(document.querySelectorAll('.filter-btn'));
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const requested = btn.getAttribute('data-filter') || 'all';
      const mapped = FILTER_MAP[requested] || 'all';
      currentFilter = mapped;
      renderGallery(mapped);
    });
  });
}

// Language selector (desktop and mobile)
function initLanguageSelector() {
  // Desktop toggle (header.html provides #languageToggle and .language-option)
  const toggle = document.getElementById('languageToggle');
  const menu = document.getElementById('languageMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
    // options inside menu
    menu.querySelectorAll('.language-option').forEach(opt => {
      opt.addEventListener('click', () => {
        const lang = opt.getAttribute('data-lang');
        if (lang) setLanguage(lang);
        menu.classList.remove('open');
      });
    });
    // close menu on outside click
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !menu.contains(e.target)) menu.classList.remove('open');
    });
  }

  // Mobile language buttons (mobile menu)
  document.querySelectorAll('.mobile-language-selector .language-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const lang = opt.getAttribute('data-lang');
      if (lang) setLanguage(lang);
    });
  });
}

// Set language and re-render
function setLanguage(lang) {
  if (!translations[lang]) lang = 'fr';
  currentLang = lang;
  localStorage.setItem('site_lang', lang);
  applyDirection();
  translatePage();
  loadGalleryItems();
  renderGallery(currentFilter);
  // Update header nav active class (if header uses data-page)
  updateNavActive();
}

// Update nav active links if present
function updateNavActive() {
  const page = document.body.getAttribute('data-page');
  document.querySelectorAll('.main-nav .nav-link, .mobile-menu a').forEach(a => {
    const p = a.getAttribute('data-page');
    if (p === page) a.classList.add('active'); else a.classList.remove('active');
  });
}

// Lightbox controls init
function initLightboxControls() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  const closeBtn = lb.querySelector('.lightbox-close');
  const prevBtn = lb.querySelector('.lightbox-prev');
  const nextBtn = lb.querySelector('.lightbox-next');

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', prevLightbox);
  if (nextBtn) nextBtn.addEventListener('click', nextLightbox);
}

// Wait for includes to be loaded (header/footer), then init
function init() {
  applyDirection();
  translatePage();
  loadGalleryItems();
  initFilters();
  initLanguageSelector();
  renderGallery(currentFilter);
  initLightboxControls();

  // wire up click on gallery container (delegated) if needed
  // (we already attach events on cards during render)
}

// If includes are loaded asynchronously, wait for the custom event; otherwise init after DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    // Wait for includesLoaded dispatched by galerie.html
    window.addEventListener('includesLoaded', init, { once: true });
    // Also set a fallback timeout in case includesLoaded doesn't fire
    setTimeout(init, 600);
  });
} else {
  window.addEventListener('includesLoaded', init, { once: true });
  setTimeout(init, 600);
}


