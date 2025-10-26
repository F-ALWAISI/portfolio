// ============================================
// GALERIE.JS - Gestion de la galerie
// Version corrigée complète
// ============================================

// ===== TRADUCTIONS POUR LA GALERIE =====
const translations = {
  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_gallery: "Galerie",
    nav_exhibitions: "Expositions",
    nav_about: "À Propos",
    nav_contact: "Contact",

    // Logo
    artist_name: "Fatema AL Waisi",
    artist_title: "Artiste & Créatrice",

    // Hero Galerie
    gallery_title: "Ma Galerie",
    gallery_subtitle: "Découvrez ma collection d'œuvres réalisées à travers différentes techniques",

    // Filtres
    filter_all: "Toutes",
    filter_glass: "Verre",
    filter_tin: "Étain",
    filter_mixed: "Divers",

    // Footer
    footer_description: "Artiste contemporaine spécialisée en peinture sur verre, gravure sur étain et techniques mixtes.",
    footer_navigation: "Navigation",
    footer_contact: "Contact",
    footer_social: "Suivez-moi",
    footer_rights: "Tous droits réservés.",

    // Lightbox
    lightbox_technique: "Technique",
    lightbox_dimensions: "Dimensions",
    lightbox_close: "Fermer"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_gallery: "Gallery",
    nav_exhibitions: "Exhibitions",
    nav_about: "About",
    nav_contact: "Contact",

    // Logo
    artist_name: "Fatema Al Waisi",
    artist_title: "Artist & Creator",

    // Hero Gallery
    gallery_title: "My Gallery",
    gallery_subtitle: "Discover my collection of artworks created through various techniques",

    // Filters
    filter_all: "All",
    filter_glass: "Glass",
    filter_tin: "Tin",
    filter_mixed: "Mixed",

    // Footer
    footer_description: "Contemporary artist specialized in painting on glass, tin engraving and mixed techniques.",
    footer_navigation: "Navigation",
    footer_contact: "Contact",
    footer_social: "Follow me",
    footer_rights: "All rights reserved.",

    // Lightbox
    lightbox_technique: "Technique",
    lightbox_dimensions: "Dimensions",
    lightbox_close: "Close"
  }
};

// ===== IMPORTS =====
// Assure-toi que ./artworks.js exporte "artworks" (objet ou tableau).
import { artworks } from './artworks.js';

// ===== CONFIGURATION DEBUG =====
const DEBUG_MODE = false; // true pour logs de développement
function devLog(...args) {
  if (DEBUG_MODE) console.log(...args);
}

// ===== VARIABLES GLOBALES =====
let filteredArtworks = []; // array of [key, artwork] or artwork objects depending de "artworks"
let currentArtworkIndex = 0;
let currentLanguage = 'fr';

// ===== VARIABLES DE ZOOM / DRAG GLOBALES =====
let currentZoom = 1;
let isDragging = false;
let startX = 0, startY = 0, translateX = 0, translateY = 0;

// ===== AUTRES OBJETS MANQUANTS (messages/subjects/languageData) =====
const messages = {
  fr: "Bonjour, je souhaite avoir des informations sur l'œuvre : ",
  en: "Hello, I would like information about the artwork: "
};

const subjects = {
  fr: "Demande d'information - Galerie",
  en: "Information request - Gallery"
};

const languageData = {
  fr: { code: 'fr', label: 'Français', flagEmoji: '🇫🇷' },
  en: { code: 'en', label: 'English', flagEmoji: '🇬🇧' }
};

// =============================================
// SECTION 1 : UTILITAIRES
// =============================================
function qs(selector) { return document.querySelector(selector); }
function qsa(selector) { return Array.from(document.querySelectorAll(selector)); }

// Helper pour récupérer artworks sous forme uniforme : array of [key, artwork]
function normalizeArtworks(src) {
  if (!src) return [];
  if (Array.isArray(src)) return src.map((a, i) => [i, a]);
  return Object.entries(src);
}

// =============================================
// SECTION 2 : GENERATION GALERIE
// =============================================
function generateGallery() {
  const container = document.getElementById('gallery-grid');
  if (!container) {
    console.error('container #gallery-grid introuvable');
    return;
  }

  // Normaliser les artworks et initialiser filteredArtworks (par défaut tout)
  const all = normalizeArtworks(artworks);
  filteredArtworks = all.slice(); // copie

  container.innerHTML = ''; // reset

  filteredArtworks.forEach(([key, artwork], index) => {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    // Assure-toi que artwork.image, artwork.title, artwork.dimensions existent
    const imgSrc = artwork.image || '';
    const title = artwork.title || '';
    const dimensions = artwork.dimensions || '';

    card.innerHTML = `
      <div class="gallery-thumb">
        <img src="${imgSrc}" alt="${title}" loading="lazy">
      </div>
      <div class="gallery-info">
        <h3 class="gallery-title">${title}</h3>
        <p class="gallery-dimensions">${dimensions}</p>
      </div>
    `;
    card.addEventListener('click', () => openLightbox(index));
    container.appendChild(card);
  });

  devLog('Galerie générée:', filteredArtworks.length);
}

// =============================================
// SECTION 3 : FILTRES (simple implémentation)
// =============================================
function initFilters() {
  // Attends d'avoir des boutons .filter-btn avec data-filter
  qsa('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = btn.dataset.filter || 'all';
      applyFilter(filter);
      // UI active
      qsa('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

function applyFilter(filter) {
  const all = normalizeArtworks(artworks);
  if (filter === 'all' || !filter) {
    filteredArtworks = all.slice();
  } else {
    filteredArtworks = all.filter(([k, a]) => {
      if (!a || !a.technique) return false;
      return (a.technique.toLowerCase() === filter.toLowerCase());
    });
  }
  generateGallery();
}

// =============================================
// SECTION 4 : LIGHTBOX
// =============================================
function initLightbox() {
  const lightbox = qs('#lightbox');
  if (!lightbox) {
    devLog('Aucun lightbox (#lightbox) trouvé — initLightbox skipped');
    return;
  }

  // Close button
  const closeBtn = lightbox.querySelector('.lightbox-close');
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);

  // prev / next
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
  if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

  // keyboard
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === '+') zoomIn();
    if (e.key === '-') zoomOut();
  });

  // image dragging / wheel zoom on image
  const img = lightbox.querySelector('#lightbox-image');
  if (img) initImageInteractions(img, lightbox);
}

function openLightbox(index) {
  if (!filteredArtworks || filteredArtworks.length === 0) return;
  currentArtworkIndex = (index >= 0 && index < filteredArtworks.length) ? index : 0;
  const [, artwork] = filteredArtworks[currentArtworkIndex];

  const lightbox = qs('#lightbox');
  if (!lightbox) {
    console.error('#lightbox introuvable');
    return;
  }

  // Remplir contenu
  const img = lightbox.querySelector('#lightbox-image');
  const titleEl = lightbox.querySelector('.lightbox-title');
  const techniqueEl = lightbox.querySelector('.lightbox-technique');
  const dimsEl = lightbox.querySelector('.lightbox-dimensions');
  const contactBtn = lightbox.querySelector('.lightbox-contact');

  if (img) {
    img.src = artwork.image || '';
    img.alt = artwork.title || '';
    resetZoom(img);
  }
  if (titleEl) titleEl.textContent = artwork.title || '';
  if (techniqueEl) techniqueEl.textContent = `${translations[currentLanguage].lightbox_technique}: ${artwork.technique || ''}`;
  if (dimsEl) dimsEl.textContent = `${translations[currentLanguage].lightbox_dimensions}: ${artwork.dimensions || ''}`;
  if (contactBtn) {
    contactBtn.onclick = (e) => {
      e.stopPropagation();
      redirectToContact(artwork.title || '');
    };
  }

  lightbox.classList.add('open');
  devLog('Lightbox ouvert index=', currentArtworkIndex);
}

function closeLightbox() {
  const lightbox = qs('#lightbox');
  if (!lightbox) return;
  lightbox.classList.remove('open');
}

function navigateLightbox(delta) {
  if (!filteredArtworks || filteredArtworks.length === 0) return;
  currentArtworkIndex = (currentArtworkIndex + delta + filteredArtworks.length) % filteredArtworks.length;
  openLightbox(currentArtworkIndex);
}

// ===== ZOOM / DRAG helpers =====
function initImageInteractions(img, lightbox) {
  if (!img) return;

  // Wheel zoom
  img.addEventListener('wheel', (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.2 : -0.2;
    currentZoom = Math.min(Math.max(1, currentZoom + delta), 4);
    applyZoom(img);
  }, { passive: false });

  // Double click to toggle zoom
  img.addEventListener('dblclick', (e) => {
    e.preventDefault();
    currentZoom = (currentZoom === 1) ? 2 : 1;
    if (currentZoom === 1) resetZoom(img);
    else applyZoom(img);
  });

  // Drag-to-pan when zoomed
  img.addEventListener('mousedown', (e) => {
    if (currentZoom <= 1) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    document.addEventListener('mousemove', dragHandler);
    document.addEventListener('mouseup', stopDragHandler);
  });

  function dragHandler(e) {
    if (!isDragging) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    img.style.transform = `scale(${currentZoom}) translate(${translateX / currentZoom}px, ${translateY / currentZoom}px)`;
  }

  function stopDragHandler() {
    isDragging = false;
    document.removeEventListener('mousemove', dragHandler);
    document.removeEventListener('mouseup', stopDragHandler);
  }
}

function applyZoom(img) {
  if (!img) return;
  img.style.transformOrigin = 'center center';
  img.style.transform = `scale(${currentZoom}) translate(${translateX / currentZoom}px, ${translateY / currentZoom}px)`;
}

function resetZoom(img) {
  currentZoom = 1;
  translateX = 0;
  translateY = 0;
  if (img) {
    img.style.transform = 'none';
  }
}

function zoomIn() {
  currentZoom = Math.min(4, currentZoom + 0.2);
  const img = qs('#lightbox-image');
  applyZoom(img);
}
function zoomOut() {
  currentZoom = Math.max(1, currentZoom - 0.2);
  const img = qs('#lightbox-image');
  applyZoom(img);
}

// =============================================
// SECTION 5 : REDIRECTION VERS CONTACT
// =============================================
function redirectToContact(artworkTitle) {
  // Génère un message et un subject en fonction de la langue
  const messageText = (messages[currentLanguage] || messages.fr) + (artworkTitle ? `"${artworkTitle}"` : '');
  const subjectText = (subjects[currentLanguage] || subjects.fr);
  const message = encodeURIComponent(messageText);
  const subject = encodeURIComponent(subjectText);

  // Une seule redirection, choisit ton chemin relatif correctement
  window.location.href = `contact.html?subject=${subject}&message=${message}`;
}

// =============================================
// SECTION 6 : SÉLECTEUR DE LANGUE
// =============================================
function initLanguageSelector() {
  const toggleBtn = document.getElementById('languageToggle');
  const currentFlag = document.getElementById('currentFlag');
  const options = qsa('.language-option');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleLanguageMenu();
    });
  }

  options.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = option.dataset.lang;
      changeLanguage(lang);
      closeLanguageMenu();
    });
  });

  // Fermer au clic extérieur
  document.addEventListener('click', (e) => {
    const selector = document.querySelector('.language-selector');
    if (selector && !selector.contains(e.target)) {
      closeLanguageMenu();
    }
  });

  // Initial UI
  updateLanguageOptions(currentLanguage);
  updateCurrentLanguage(currentLanguage);
  translatePage(currentLanguage);
}

function toggleLanguageMenu() {
  const selector = document.querySelector('.language-selector');
  if (!selector) return;
  selector.classList.toggle('open');
}

function closeLanguageMenu() {
  const selector = document.querySelector('.language-selector');
  if (!selector) return;
  selector.classList.remove('open');
}

function changeLanguage(lang) {
  if (!lang || !translations[lang]) {
    console.warn('Langue non supportée:', lang);
    return;
  }
  currentLanguage = lang;
  updateCurrentLanguage(lang);
  translatePage(lang);
  // Dispatch event pour synchroniser avec main.js si besoin
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  devLog('Langue changée en', lang);
}

function updateCurrentLanguage(lang) {
  const flagEl = document.getElementById('currentFlag');
  if (!flagEl) return;
  const info = languageData[lang] || languageData.fr;
  flagEl.textContent = info.flagEmoji || '';
}

function updateLanguageOptions(activeLang) {
  qsa('.language-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === activeLang);
  });
}

// Traduction simple : remplace textContent/placeholder des éléments avec data-i18n="key"
function translatePage(lang) {
  const dict = translations[lang] || translations.fr;
  qsa('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = dict[key];
    if (value === undefined) return; // laisse le texte tel quel
    if (el.placeholder !== undefined && el.tagName === 'INPUT') {
      el.placeholder = value;
    } else {
      el.textContent = value;
    }
  });
}

// =============================================
// SECTION 7 : PROTECTION DES IMAGES
// =============================================
// Désactiver le clic droit sur images (couvre <img> et éléments contenant une image)
document.addEventListener('contextmenu', function(e) {
  if (e.target.closest && e.target.closest('img')) {
    e.preventDefault();
    return false;
  }
}, false);

// Empêcher dragstart
document.addEventListener('dragstart', function(e) {
  if (e.target.closest && e.target.closest('img')) {
    e.preventDefault();
    return false;
  }
}, false);

// Bloquer Ctrl+S / Cmd+S sauvegarde
document.addEventListener('keydown', function(e) {
  const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  if ((isMac && e.metaKey && e.key === 's') || (!isMac && e.ctrlKey && e.key === 's')) {
    e.preventDefault();
    return false;
  }
});

// =============================================
// SECTION 8 : SYNCHRONISATION AVEC MAIN.JS
// =============================================
window.addEventListener('languageChanged', (e) => {
  const lang = e.detail && e.detail.lang;
  if (lang) {
    currentLanguage = lang;
    translatePage(lang);
    updateLanguageOptions(lang);
  }
});

// =============================================
// SECTION 9 : INITIALISATION PRINCIPALE
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  devLog('Initialisation de la galerie...');
  // Valeur par défaut : normalise artworks et génère la galerie
  generateGallery();
  initFilters();
  initLightbox();
  initLanguageSelector();
  devLog('Galerie initialisée');
});
