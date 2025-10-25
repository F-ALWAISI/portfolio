// ============================================
// GALERIE.JS - Gestion de la galerie
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
        

artist_name: "Fatema Al Waisi",
artist_title: "Artist & Creator",

        // Hero Galerie
        gallery_title: "My Gallery",
        gallery_subtitle: "Discover my collection of artworks created through various techniques",
        
        // Filtres
        filter_all: "All",
        filter_glass: "Glass",
        filter_tin: "Tin",
        filter_mixed: "Divers",
        
        // Footer
        footer_description: "Contemporary artist specializing in glass painting, tin engraving and mixed techniques.",
        footer_navigation: "Navigation",
        footer_contact: "Contact",
        footer_social: "Follow me",
        footer_rights: "All rights reserved.",
        
        // Lightbox
        lightbox_technique: "Technique",
        lightbox_dimensions: "Dimensions",
        lightbox_close: "Close"
    },
    
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_gallery: "المعرض",
        nav_exhibitions: "المعارض",
        nav_about: "عني",
        nav_contact: "اتصل بي",
        

        artist_name: "فاطمة الويسي",
        artist_title: "فنانة ومبدعة",


        // Hero Galerie
        gallery_title: "معرضي",
        gallery_subtitle: "اكتشف مجموعتي من الأعمال الفنية المنفذة بتقنيات مختلفة",
        
        // Filtres
        filter_all: "الكل",
        filter_glass: "زجاج",
        filter_tin: "معدن",
        filter_mixed: "منوع",
        
        // Footer
        footer_description: "فنانة معاصرة متخصصة في الرسم على الزجاج والنقش على المعدن والتقنيات المختلطة.",
        footer_navigation: "التنقل",
        footer_contact: "اتصل",
        footer_social: "تابعني",
        footer_rights: "جميع الحقوق محفوظة.",
        
        // Lightbox
        lightbox_technique: "التقنية",
        lightbox_dimensions: "الأبعاد",
        lightbox_close: "إغلاق"
    }
};

// ===== DONNÉES DES LANGUES (AVEC CHEMINS SVG) =====
const languageData = {
    fr: { flag: 'flags/fr.svg', code: 'FR', emoji: '🇫🇷' },
    en: { flag: 'flags/gb.svg', code: 'EN', emoji: '🇬🇧' },
    ar: { flag: 'flags/sa.svg', code: 'AR', emoji: '🇴🇲' }
};

// ===== DONNÉES DES ŒUVRES =====
const artworks = {
    dame_victorienne: {
        title: "dame-victorienne",
        category: "etain",
        year: "2023",
        dimensions: "17x32cm",
        image: "images/oeuvres/etain/dame-victorienne.jpg",
    },
    gravure_bougie: {
        title: "gravure-bougie",
        category: "mixte",
        year: "2023",
        dimensions: "7x18cm",
        image: "images/oeuvres/Mixte/gravure-bougie.jpg",
    },
    horloge_chevet: {
        title: "horloge-chevet",
        category: "mixte",
        year: "2023",
        dimensions: "20x15cm",
        image: "images/oeuvres/Mixte/horloge-chevet.jpg",
    },
    horloge_metal: {
        title: "horloge-metal",
        category: "mixte",
        year: "2022",
        dimensions: "30cm",
        image: "images/oeuvres/Mixte/horloge-metal.jpg",
    },
    jambiya: {
        title: "jambiya",
        category: "etain",
        year: "2023",
        dimensions: "32x47cm",
        image: "images/oeuvres/etain/jambiya.jpg",
        description: "Habit traditionnel chez les hommes au Yémen"
    },
    l_indienne_traditionnelle: {
        title: "l'indienne traditionnelle",
        category: "etain",
        year: "2022",
        dimensions: "30x45cm",
        image: "images/oeuvres/etain/l'indienne traditionnelle.jpg",
        description: "Arabesques dans les tons de bleu"
    },
    l_indienne: {
        title: "l'indienne",
        category: "etain",
        year: "2023",
        dimensions: "30x45cm",
        image: "images/oeuvres/etain/l'indienne.jpg",
        description: "Palette chaude inspirée des couchers de soleil"
    },
    la_naissance_de_Jesue: {
        title: "la naissance de Jesue",
        category: "etain",
        year: "2022",
        dimensions: "30x40cm",
        image: "images/oeuvres/etain/la naissance de Jesue.jpg",
    },
    masque_venitien: {
        title: "masque-venitien",
        category: "etain",
        year: "2023",
        dimensions: "30x20cm",
        image: "images/oeuvres/etain/masque-venitien.jpg",
    },
    nature_humain: {
        title: "nature-humain",
        category: "etain",
        year: "2023",
        dimensions: "45x35cm",
        image: "images/oeuvres/etain/nature-humain.jpg",
    },
    réflexion: {
        title: "réflexion",
        category: "etain",
        year: "2022",
        dimensions: "40x30cm",
        image: "images/oeuvres/etain/réflexion.jpg",
    },
    Cerf: {
        title: "Cerf",
        category: "verre",
        year: "2023",
        dimensions: "48x58cm",
        image: "images/oeuvres/Verre/Cerf.jpg",
    },
    cigogne: {
        title: "cigogne",
        category: "verre",
        year: "2023",
        dimensions: "20x100cm",
        image: "images/oeuvres/Verre/cigogne.jpg",
    },
    Kamaria: {
        title: "Kamaria",
        category: "verre",
        year: "2021",
        dimensions: "65x95cm",
        image: "images/oeuvres/Verre/Kamaria.jpg",
    },
    la_fémenine: {
        title: "la fémenine",
        category: "verre",
        year: "2022",
        dimensions: "80x80cm",
        image: "images/oeuvres/Verre/la fémenine.jpg",
    },
    la_femme_fleurisante: {
        title: "la femme fleurisante",
        category: "verre",
        year: "2023",
        dimensions: "33x45cm",
        image: "images/oeuvres/Verre/la femme fleurisante.jpg",
    },
    la_fleure: {
        title: "la fleure",
        category: "verre",
        year: "2022",
        dimensions: "24x54cm",
        image: "images/oeuvres/Verre/la fleure.jpg",
    },
    la_patiente: {
        title: "la patiente",
        category: "verre",
        year: "2023",
        dimensions: "22x30cm",
        image: "images/oeuvres/Verre/la patiente.jpg",
    },
    Gazelle: {
        title: "Gazelle",
        category: "verre",
        year: "2023",
        dimensions: "18x24cm",
        image: "images/oeuvres/Verre/Gazelle.jpg",
    },
    Le_compagnon_de_la_vie: {
        title: "Le compagnon de la vie",
        category: "verre",
        year: "2023",
        dimensions: "40x50cm",
        image: "images/oeuvres/Verre/vie.jpg",
    },  
    Halloween: {
        title: "Halloween",
        category: "etain",
        year: "2023",
        dimensions: "35x20cm",
        image: "images/oeuvres/etain/Halloween.jpg",
    },  
};

// ===== IMPORTS =====
import { artworks } from './artworks.js';

// ===== CONFIGURATION DEBUG =====
const DEBUG_MODE = false; // Mettre à true pour activer les logs

function devLog(...args) {
    if (DEBUG_MODE) console.log(...args);
}

// ===== VARIABLES GLOBALES =====
let currentLanguage = localStorage.getItem('selectedLanguage') || 'fr';
let currentFilter = 'all';
let filteredArtworks = [];
let currentArtworkIndex = 0;

// ===== VARIABLES DE ZOOM =====
let currentZoom = 1;
let isDragging = false;
let startX = 0, startY = 0, translateX = 0, translateY = 0;

// =============================================
// SECTION 1 : GALERIE
// =============================================

// ===== GÉNÉRATION GALERIE =====
function generateGallery() {
    const container = document.getElementById('gallery-grid');

    if (!container) {
        console.error('❌ Conteneur galerie introuvable');
        return;
    }

    container.innerHTML = '';

    // Filtrer les œuvres
    filteredArtworks = Object.entries(artworks).filter(([key, artwork]) => {
        return currentFilter === 'all' || artwork.category === currentFilter;
    });

    // Afficher message si vide
    if (filteredArtworks.length === 0) {
        container.innerHTML = '<div class="loading">Aucune œuvre dans cette catégorie</div>';
        return;
    }

    // Générer les cartes
    filteredArtworks.forEach(([key, artwork], index) => {
        const card = document.createElement('div');
        card.className = 'gallery-card';
        card.innerHTML = `
            <div class="gallery-image-container">
                <img src="${artwork.image}" alt="${artwork.title}" class="gallery-image">
            </div>
            <div class="gallery-info">
                <h3 class="gallery-title">${artwork.title}</h3>
                <p class="gallery-dimensions">${artwork.dimensions}</p>
            </div>
        `;
        card.addEventListener('click', () => openLightbox(index));
        container.appendChild(card);
    });

    devLog(`✅ ${filteredArtworks.length} œuvres affichées`);
}

// ===== FILTRES =====
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            generateGallery();
        });
    });
}

// =============================================
// SECTION 2 : LIGHTBOX
// =============================================

// ===== REDIRECTION VERS CONTACT =====
function redirectToContact(artworkTitle) {
    const currentLang = document.documentElement.lang || 'fr';

    const messages = {
        fr: `Bonjour,

Je suis intéressé(e) par l'œuvre "${artworkTitle}".

Pouvez-vous me donner plus d'informations concernant :
- La disponibilité
- Le prix
- Les conditions de vente

Merci !`,

        en: `Hello,

I am interested in the artwork "${artworkTitle}".

Could you provide me with more information about:
- Availability
- Price
- Terms of sale

Thank you!`,

        ar: `مرحباً،

أنا مهتم بالعمل الفني "${artworkTitle}".

هل يمكنك تزويدي بمزيد من المعلومات حول:
- التوفر
- السعر
- شروط البيع

شكراً لك!`
    };

    const subjects = {
        fr: `Demande d'information sur "${artworkTitle}"`,
        en: `Inquiry about "${artworkTitle}"`,
        ar: `استفسار عن "${artworkTitle}"`
    };

    const message = encodeURIComponent(messages[currentLang] || messages.fr);
    const subject = encodeURIComponent(subjects[currentLang] || subjects.fr);

    window.location.href = `contact.html?subject=${subject}&message=${message}`;
}

// ===== OUVRIR LA LIGHTBOX =====
function openLightbox(index) {
    devLog('🖼️ Ouverture lightbox, index:', index);

    currentArtworkIndex = index;
    const [key, artwork] = filteredArtworks[index];

    // Récupérer les éléments DOM
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDetails = document.getElementById('lightbox-details');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCounter = document.querySelector('.lightbox-counter');

    // Réinitialiser le zoom
    resetZoom();

    // Mettre à jour le contenu
    if (lightboxImage) {
        lightboxImage.src = artwork.image;
        lightboxImage.alt = artwork.title;
        initImageZoom(lightboxImage);
    }

    if (lightboxTitle) lightboxTitle.textContent = artwork.title;
    if (lightboxDetails) lightboxDetails.textContent = `${artwork.year} • ${artwork.dimensions}`;
    if (lightboxDescription) lightboxDescription.textContent = artwork.description || '';
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${filteredArtworks.length}`;

    // Gérer le bouton contact
    const contactBtn = document.getElementById('lightbox-contact-btn');
    if (contactBtn) {
        contactBtn.replaceWith(contactBtn.cloneNode(true));
        const newContactBtn = document.getElementById('lightbox-contact-btn');
        
        newContactBtn.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            redirectToContact(artwork.title);
        };
    }

    // Afficher la lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ===== FERMER LA LIGHTBOX =====
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        resetZoom();
    }
}

// ===== NAVIGATION LIGHTBOX =====
function navigateLightbox(direction) {
    resetZoom();

    currentArtworkIndex += direction;

    if (currentArtworkIndex < 0) {
        currentArtworkIndex = filteredArtworks.length - 1;
    } else if (currentArtworkIndex >= filteredArtworks.length) {
        currentArtworkIndex = 0;
    }

    openLightbox(currentArtworkIndex);
}

// =============================================
// SECTION 3 : SYSTÈME DE ZOOM
// =============================================

// ===== INITIALISER LE ZOOM =====
function initImageZoom(image) {
    if (!image) return;

    // ZOOM AVEC LA MOLETTE
    image.addEventListener('wheel', (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        currentZoom = Math.min(Math.max(1, currentZoom + delta), 4);
        applyZoom(image);
    }, { passive: false });

    // DOUBLE-CLIC POUR ZOOM/DÉZOOM
    image.addEventListener('dblclick', (e) => {
        e.preventDefault();
        currentZoom = currentZoom === 1 ? 2 : 1;
        if (currentZoom === 1) resetZoom();
        else applyZoom(image);
    });

    // DRAG POUR DÉPLACER
    image.addEventListener('mousedown', startDrag);

    // SUPPORT TACTILE (pinch)
    let touchStartDistance = 0;

    image.addEventListener('touchstart', (e) => {
        if (e.touches.length === 2) {
            touchStartDistance = getDistance(e.touches[0], e.touches[1]);
        }
    });

    image.addEventListener('touchmove', (e) => {
        if (e.touches.length === 2) {
            e.preventDefault();
            const touchDistance = getDistance(e.touches[0], e.touches[1]);
            const scale = touchDistance / touchStartDistance;
            currentZoom = Math.min(Math.max(1, currentZoom * scale), 4);
            touchStartDistance = touchDistance;
            applyZoom(image);
        }
    }, { passive: false });
}

// ===== APPLIQUER LE ZOOM =====
function applyZoom(image) {
    image.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
    image.style.cursor = currentZoom > 1 ? 'move' : 'zoom-in';
    showZoomIndicator();
}

// ===== RÉINITIALISER LE ZOOM =====
function resetZoom() {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;

    const image = document.getElementById('lightbox-image');
    if (image) {
        image.style.transform = 'scale(1) translate(0, 0)';
        image.style.cursor = 'zoom-in';
    }
}

// ===== DRAG DE L'IMAGE =====
function startDrag(e) {
    if (currentZoom <= 1) return;
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    const image = document.getElementById('lightbox-image');
    if (image) image.style.cursor = 'grabbing';
}

function drag(e) {
    if (!isDragging || currentZoom <= 1) return;
    e.preventDefault();
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    const image = document.getElementById('lightbox-image');
    if (image) {
        image.style.transform = `scale(${currentZoom}) translate(${translateX}px, ${translateY}px)`;
    }
}

function stopDrag() {
    isDragging = false;
    const image = document.getElementById('lightbox-image');
    if (image && currentZoom > 1) {
        image.style.cursor = 'move';
    }
}

// Attacher les événements au document
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDrag);

// ===== CALCULER LA DISTANCE (pinch) =====
function getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// ===== INDICATEUR DE ZOOM =====
function showZoomIndicator() {
    let indicator = document.querySelector('.zoom-indicator');

    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'zoom-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0,0,0,0.8);
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            z-index: 10001;
            display: none;
        `;
        document.body.appendChild(indicator);
    }

    indicator.textContent = `🔍 ${Math.round(currentZoom * 100)}%`;
    indicator.style.display = 'block';

    clearTimeout(indicator.timeout);
    indicator.timeout = setTimeout(() => {
        indicator.style.display = 'none';
    }, 1000);
}

// =============================================
// SECTION 4 : ÉVÉNEMENTS LIGHTBOX
// =============================================

function initLightbox() {
    devLog('🎨 Initialisation de la lightbox...');

    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox-close');
    const prevBtn = document.querySelector('.lightbox-prev');
    const nextBtn = document.querySelector('.lightbox-next');

    if (!lightbox || !closeBtn || !prevBtn || !nextBtn) {
        console.error('❌ Éléments de lightbox manquants');
        return;
    }

    // FERMETURE
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    // NAVIGATION
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // CLAVIER
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        const img = document.getElementById('lightbox-image');

        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigateLightbox(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigateLightbox(1);
                break;
            case '+':
            case '=':
                if (img) {
                    currentZoom = Math.min(4, currentZoom + 0.2);
                    applyZoom(img);
                }
                break;
            case '-':
            case '_':
                if (img) {
                    currentZoom = Math.max(1, currentZoom - 0.2);
                    applyZoom(img);
                }
                break;
            case '0':
                resetZoom();
                break;
        }
    });

    // CLIC SUR LE FOND
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox && currentZoom === 1) {
            closeLightbox();
        }
    });

    devLog('✅ Lightbox initialisée');
}

// =============================================
// SECTION 5 : PROTECTION DES IMAGES
// =============================================

// Désactiver le clic droit
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Empêcher le glisser-déposer
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Bloquer Ctrl+S
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
});

// =============================================
// SECTION 6 : SYNCHRONISATION AVEC MAIN.JS
// =============================================

// Écouter les changements de langue depuis main.js
window.addEventListener('languageChanged', (e) => {
    currentLanguage = e.detail.lang;
    devLog('🌍 Langue changée:', currentLanguage);
    generateGallery();
});

// =============================================
// SECTION 7 : INITIALISATION
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    devLog('🎨 Initialisation de la galerie...');
    
    generateGallery();
    initFilters();
    initLightbox();
    
    devLog('✅ Galerie prête !');
});

