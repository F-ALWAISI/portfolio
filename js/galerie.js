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
        image: "images/oeuvres/etain/l-indienne-traditionnel.jpg",
        description: "Arabesques dans les tons de bleu"
    },
    l_indienne: {
        title: "l'indienne",
        category: "etain",
        year: "2023",
        dimensions: "30x45cm",
        image: "images/oeuvres/etain/l-indienne.jpg",
        description: "Palette chaude inspirée des couchers de soleil"
    },
    la_naissance_de_Jesue: {
        title: "la naissance de Jesue",
        category: "etain",
        year: "2022",
        dimensions: "30x40cm",
        image: "images/oeuvres/etain/la-naissance-de-jesus.jpg",
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
        image: "images/oeuvres/etain/reflexion.jpg",
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
        image: "images/oeuvres/Verre/la-feminine.jpg",
    },
    la_femme_fleurisante: {
        title: "la femme fleurisante",
        category: "verre",
        year: "2023",
        dimensions: "33x45cm",
        image: "images/oeuvres/Verre/la-femme-fleurissante.jpg",
    },
    la_fleure: {
        title: "la fleure",
        category: "verre",
        year: "2022",
        dimensions: "24x54cm",
        image: "images/oeuvres/Verre/la-fleur.jpg",
    },
    la_patiente: {
        title: "la patiente",
        category: "verre",
        year: "2023",
        dimensions: "22x30cm",
        image: "images/oeuvres/Verre/la-patiente.jpg",
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

// ===== CONFIGURATION DEBUG =====
const DEBUG_MODE = false; // ✅ Mettre à true pour activer les logs de développement

// Fonction de log conditionnelle
function devLog(...args) {
    if (DEBUG_MODE) {
        console.log(...args);
    }
}

// ===== VARIABLES GLOBALES =====
let currentLanguage = localStorage.getItem('selectedLanguage') || 'fr';
let currentFilter = 'all';
let filteredArtworks = [];
let currentArtworkIndex = 0;

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
                <p class="gallery-dimensions"> ${artwork.dimensions}</p>
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

// ===== VARIABLES DE ZOOM =====
let currentZoom = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

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

    // ✅ CORRECTION : Chemin relatif
    window.location.href = `contact.html?subject=${subject}&message=${message}`;
    //                      ↑ Pas de slash au début !
}


// ===== OUVRIR LA LIGHTBOX =====
function openLightbox(index) {
    devLog('🖼️ Ouverture lightbox, index:', index);

    currentArtworkIndex = index;
    const [key, artwork] = filteredArtworks[index];

    devLog('📊 Artwork:', artwork);

    // Récupérer les éléments DOM
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxTechnique = document.getElementById('lightbox-technique');
    const lightboxDetails = document.getElementById('lightbox-details');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxCounter = document.querySelector('.lightbox-counter');

    // 🔄 Réinitialiser le zoom
    resetZoom();

    // Mettre à jour le contenu
    if (lightboxImage) {
        lightboxImage.src = artwork.image;
        lightboxImage.alt = artwork.title;
        devLog('✅ Image chargée:', artwork.image);

        // 🔍 Activer le zoom sur cette image
        initImageZoom(lightboxImage);
    }

    if (lightboxTitle) lightboxTitle.textContent = artwork.title;
    if (lightboxDetails) lightboxDetails.textContent = `${artwork.year} • ${artwork.dimensions}`;
    if (lightboxDescription) lightboxDescription.textContent = artwork.description || '';
    if (lightboxCounter) lightboxCounter.textContent = `${index + 1} / ${filteredArtworks.length}`;

    // ✅ GÉRER LE BOUTON CONTACT
    const contactBtn = document.getElementById('lightbox-contact-btn');
    if (contactBtn) {
        contactBtn.onclick = (e) => {
            e.preventDefault();
            devLog('📧 Redirection vers contact pour:', artwork.title);
            redirectToContact(artwork.title);
        };
        devLog('✅ Bouton contact configuré pour:', artwork.title);
    }

    // Afficher la lightbox
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        devLog('✅ Lightbox ouverte !');
    } else {
        console.error('❌ Lightbox non trouvée dans le DOM');
    }
}

// ===== INITIALISER LE ZOOM SUR L'IMAGE =====
function initImageZoom(image) {
    if (!image) return;

    // 🔍 ZOOM AVEC LA MOLETTE
    image.addEventListener('wheel', (e) => {
        e.preventDefault();

        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        currentZoom = Math.min(Math.max(1, currentZoom + delta), 4); // Zoom entre 1x et 4x

        applyZoom(image);
        devLog('🔍 Zoom:', currentZoom.toFixed(1) + 'x');
    }, { passive: false });

    // 🖱️ DOUBLE-CLIC POUR ZOOM/DÉZOOM
    image.addEventListener('dblclick', (e) => {
        e.preventDefault();

        if (currentZoom === 1) {
            currentZoom = 2; // Zoomer à 2x
        } else {
            resetZoom(); // Revenir à 1x
        }

        applyZoom(image);
    });

    // 🖐️ DRAG POUR DÉPLACER L'IMAGE ZOOMÉE
    image.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', stopDrag);

    // 📱 SUPPORT TACTILE (mobile)
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

    // Afficher un indicateur de zoom
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

// ===== CALCULER LA DISTANCE ENTRE DEUX POINTS (pinch mobile) =====
function getDistance(touch1, touch2) {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}

// ===== AFFICHER UN INDICATEUR DE ZOOM =====
function showZoomIndicator() {
    let indicator = document.querySelector('.zoom-indicator');

    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'zoom-indicator';
        document.body.appendChild(indicator);
    }

    indicator.textContent = `🔍 ${Math.round(currentZoom * 100)}%`;
    indicator.style.display = 'block';

    clearTimeout(indicator.timeout);
    indicator.timeout = setTimeout(() => {
        indicator.style.display = 'none';
    }, 1000);
}

// ===== FERMER LA LIGHTBOX =====
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        resetZoom(); // Réinitialiser le zoom
        devLog('❌ Lightbox fermée');
    }
}

// ===== NAVIGATION LIGHTBOX =====
function navigateLightbox(direction) {
    resetZoom(); // Réinitialiser le zoom lors de la navigation

    currentArtworkIndex += direction;

    if (currentArtworkIndex < 0) {
        currentArtworkIndex = filteredArtworks.length - 1;
    } else if (currentArtworkIndex >= filteredArtworks.length) {
        currentArtworkIndex = 0;
    }

    openLightbox(currentArtworkIndex);
}

// ===== INITIALISER LA LIGHTBOX =====
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

    // ✅ FERMETURE
    closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeLightbox();
    });

    // ✅ NAVIGATION
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(-1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigateLightbox(1);
    });

    // ✅ CLAVIER
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

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
                // Zoomer avec +
                const img = document.getElementById('lightbox-image');
                if (img) {
                    currentZoom = Math.min(4, currentZoom + 0.2);
                    applyZoom(img);
                }
                break;
            case '-':
            case '_':
                // Dézoomer avec -
                const img2 = document.getElementById('lightbox-image');
                if (img2) {
                    currentZoom = Math.max(1, currentZoom - 0.2);
                    applyZoom(img2);
                }
                break;
            case '0':
                // Réinitialiser avec 0
                resetZoom();
                break;
        }
    });

    // ✅ CLIC SUR LE FOND
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox && currentZoom === 1) {
            closeLightbox();
        }
    });

    devLog('✅ Lightbox initialisée avec zoom');
}


// ===== FONCTION DE TRADUCTION =====
function translatePage(lang) {
    devLog(`🌍 Traduction en cours: ${lang}`);

    currentLanguage = lang;
    localStorage.setItem('selectedLanguage', lang);

    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    devLog('✅ Traduction terminée');
}

// ===== FONCTION CHANGEMENT DE LANGUE =====
function changeLanguage(lang) {
    devLog(`🔄 Changement de langue vers: ${lang}`);

    // 1. Traduire la page
    translatePage(lang);

    // 2. Mettre à jour le drapeau IMMÉDIATEMENT
    updateCurrentLanguage(lang);

    // 3. Mettre à jour les options actives
    updateLanguageOptions(lang);

    // 4. Fermer le menu
    closeLanguageMenu();

    devLog(`✅ Langue changée en ${lang}`);
}

// ===== METTRE À JOUR LE DRAPEAU =====
function updateCurrentLanguage(lang) {
    devLog(`🏳️ Mise à jour du drapeau pour: ${lang}`);

    const currentFlag = document.getElementById('currentFlag');
    const currentLangCode = document.getElementById('currentLangCode');
    const data = languageData[lang];

    if (!data) {
        console.error(`❌ Langue inconnue: ${lang}`);
        return;
    }

    if (currentFlag) {
        // ✅ SI C'EST UNE IMAGE : changer le src
        if (currentFlag.tagName === 'IMG') {
            currentFlag.src = data.flag;
            currentFlag.alt = `Drapeau ${lang}`;
            devLog(`✅ Image mise à jour: ${data.flag}`);
        } 
        // ✅ SI C'EST UN SPAN : changer le textContent (emoji)
        else {
            currentFlag.textContent = data.emoji;
            devLog(`✅ Emoji mis à jour: ${data.emoji}`);
        }
    } else {
        console.error('❌ currentFlag introuvable');
    }

    if (currentLangCode) {
        currentLangCode.textContent = data.code;
        devLog(`✅ Code changé: ${data.code}`);
    } else {
        console.error('❌ currentLangCode introuvable');
    }
}

// ===== METTRE À JOUR LES OPTIONS =====
function updateLanguageOptions(lang) {
    document.querySelectorAll('.language-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.lang === lang) {
            option.classList.add('active');
        }
    });
}

// ===== OUVRIR/FERMER LE MENU =====
function toggleLanguageMenu() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        const isActive = selector.classList.toggle('active');
        devLog(`📋 Menu langue: ${isActive ? 'ouvert' : 'fermé'}`);
    }
}

function closeLanguageMenu() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        selector.classList.remove('active');
    }
}

// ===== MENU MOBILE =====
function initMobileMenu() {
    devLog('📱 Initialisation menu mobile...');

    // ✅ Adapter aux classes de ton HTML
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!toggle || !mobileMenu) {
        devLog('⏳ Menu mobile pas encore chargé, on réessaie...');
        setTimeout(initMobileMenu, 500);
        return;
    }

    devLog('✅ Éléments menu mobile trouvés');

    // Toggle du menu
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = toggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isActive);
        devLog(`🔄 Menu mobile ${isActive ? 'ouvert' : 'fermé'}`);
    });

    // Fermer au clic sur un lien
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            devLog('🔗 Fermeture menu après clic lien');
            toggle.classList.remove('active');
            mobileMenu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Fermer au clic extérieur
    document.addEventListener('click', (e) => {
        if (!toggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            if (toggle.classList.contains('active')) {
                devLog('👆 Fermeture menu - clic extérieur');
                toggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            }
        }
    });

    devLog('✅ Menu mobile initialisé avec succès');
}


// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', () => {
    devLog('🚀 Initialisation de la galerie...');

    // Récupérer la langue sauvegardée
    const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
    currentLanguage = savedLang;
    devLog(`🌍 Langue au démarrage: ${savedLang}`);

    // Générer la galerie
    generateGallery();

    // Initialiser les fonctionnalités
    initFilters();
    initLightbox();
    initMobileMenu();

    // Attendre que le header soit chargé
    waitForHeader();
});

// ===== ATTENDRE LE CHARGEMENT DU HEADER =====
function waitForHeader() {
    let attempts = 0;
    const maxAttempts = 30; // 3 secondes max

    const checkHeader = setInterval(() => {
        attempts++;

        const header = document.querySelector('header');
        const languageToggle = document.getElementById('languageToggle');
        const currentFlag = document.getElementById('currentFlag');

        devLog(`🔍 Tentative ${attempts}: Header=${!!header}, Toggle=${!!languageToggle}, Flag=${!!currentFlag}`);

        if (header && languageToggle && currentFlag) {
            clearInterval(checkHeader);
            devLog('✅ Header trouvé, initialisation...');

            // Initialiser le sélecteur
            initLanguageSelector();

            // Appliquer la langue sauvegardée
            updateCurrentLanguage(currentLanguage);
            translatePage(currentLanguage);
            updateLanguageOptions(currentLanguage);

            devLog('✅ Initialisation complète');
        } else if (attempts >= maxAttempts) {
            clearInterval(checkHeader);
            console.error('❌ Timeout: header non chargé');
        }
    }, 100);
}

// ===== INITIALISATION SÉLECTEUR DE LANGUE =====
function initLanguageSelector() {
    devLog('🔧 Initialisation du sélecteur...');

    // Bouton toggle
    const toggleBtn = document.getElementById('languageToggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleLanguageMenu();
        });
        devLog('✅ Toggle initialisé');
    } else {
        console.error('❌ toggleBtn introuvable');
    }

    // Options de langue
    const options = document.querySelectorAll('.language-option');
    devLog(`📋 Options trouvées: ${options.length}`);

    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.dataset.lang;
            devLog(`👆 Clic sur langue: ${lang}`);
            changeLanguage(lang);
        });
    });

    // Fermer au clic extérieur
    document.addEventListener('click', (e) => {
        const selector = document.querySelector('.language-selector');
        if (selector && !selector.contains(e.target)) {
            closeLanguageMenu();
        }
    });

    devLog('✅ Sélecteur initialisé');
}

// ===== RENDRE LES FONCTIONS GLOBALES =====
window.changeLanguage = changeLanguage;
window.toggleLanguageMenu = toggleLanguageMenu;

// =============================================
// PROTECTION DES IMAGES
// =============================================

// Désactiver le clic droit sur les images
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Empêcher le glisser-déposer des images
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Bloquer Ctrl+S (enregistrer)
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
    }
});

devLog('🔒 Protection des images activée');






