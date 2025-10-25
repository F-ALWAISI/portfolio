// ===== 1. SYSTÈME MULTILINGUE =====
const translations = {
    fr: {
        // Navigation
        artistName: "Fatema Al Waisi",
        nav_home: "Accueil",
        nav_gallery: "Galerie",
        nav_exhibitions: "Expositions",
        nav_about: "À Propos",
        nav_contact: "Contact",


        // Logo
        artist_name: "Fatema AL Waisi",
        artist_title: "Artiste & Créatrice",

        // Hero
        hero_title: "Bienvenue dans mon univers artistique",
        hero_subtitle: "Explorez mes créations en peinture sur verre, gravure sur étain et techniques mixtes",
        hero_cta: "Découvrir mes œuvres",

        // Featured
        featured_title: "Œuvres mises en avant",

        // Footer
        footer_description: "Artiste contemporaine spécialisée en peinture sur verre, gravure sur étain et techniques mixtes.",
        footer_navigation: "Navigation",
        footer_contact: "Contact",
        footer_social: "Suivez-moi",
        footer_rights: "Tous droits réservés.",

        // Autres
        artist_title: "Artiste & Créatrice"
    },
    en: {
        artist_name: "Fatema Al Waisi",
        nav_home: "Home",
        nav_gallery: "Gallery",
        nav_exhibitions: "Exhibitions",
        nav_about: "About",
        nav_contact: "Contact",
        hero_title: "Welcome to my artistic universe",
        hero_subtitle: "Explore my creations in glass painting, tin engraving and mixed techniques",
        hero_cta: "Discover my works",
        featured_title: "Featured Works",
        footer_description: "Contemporary artist specialized in glass painting, tin engraving and mixed techniques.",
        footer_navigation: "Navigation",
        footer_contact: "Contact",
        footer_social: "Follow me",
        footer_rights: "All rights reserved.",
        artist_title: "Artist & Creator"
    },
    ar: {
        artist_name: "فاطمة الويسي",
        nav_home: "الرئيسية",
        nav_gallery: "المعرض",
        nav_exhibitions: "المعارض",
        nav_about: "عني",
        nav_contact: "اتصل",
        hero_title: "مرحبا بكم في عالمي الفني",
        hero_subtitle: "استكشف إبداعاتي في الرسم على الزجاج والنقش على المعدن والتقنيات المختلطة",
        hero_cta: "اكتشف أعمالي",
        featured_title: "أعمال مميزة",
        footer_description: "فنانة معاصرة متخصصة في الرسم على الزجاج والنقش على المعدن والتقنيات المختلطة",
        footer_navigation: "التنقل",
        footer_contact: "اتصل",
        footer_social: "تابعني",
        footer_rights: "جميع الحقوق محفوظة",
        artist_title: "فنانة ومبدعة"
    }
};

// ===== MODE DÉVELOPPEMENT / PRODUCTION =====
const IS_DEV_MODE = false; // ← Mettre à true pour debug, false en production

const devLog = (...args) => IS_DEV_MODE && console.log(...args);
const devWarn = (...args) => IS_DEV_MODE && console.warn(...args);
const devError = (...args) => console.error(...args); // Erreurs toujours visibles

// ===== MENU MOBILE =====
function initMobileMenu() {
    devLog('📱 Initialisation menu mobile...');

    // ✅ Utiliser les bonnes classes de ton header
    const toggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (!toggle) {
        devWarn('⚠️ Bouton menu mobile non trouvé');
        // Réessayer après 500ms au cas où le header se charge tard
        setTimeout(initMobileMenu, 500);
        return;
    }

    if (!mobileMenu) {
        devWarn('⚠️ Navigation mobile non trouvée');
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
    devLog(`🔗 ${mobileLinks.length} liens trouvés dans le menu mobile`);
    
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


// ===== CHARGEMENT DES INCLUDES =====
async function loadIncludes() {
    devLog('🔄 Chargement des includes...');

    try {
        // Charger le header
        const headerResponse = await fetch('/includes/header.html');
        if (!headerResponse.ok) throw new Error('Header non trouvé');
        const headerHTML = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHTML;
        devLog('✅ Header chargé');

        // Charger le sélecteur de langue dans le header
        const langResponse = await fetch('/includes/language-selector.html');
        if (!langResponse.ok) throw new Error('Language selector non trouvé');
        const langHTML = await langResponse.text();
        const langPlaceholder = document.getElementById('language-selector-placeholder');
        if (langPlaceholder) {
            langPlaceholder.innerHTML = langHTML;
            devLog('✅ Sélecteur de langue chargé');
        }

        // Charger le footer
        const footerResponse = await fetch('/includes/footer.html');
        if (!footerResponse.ok) throw new Error('Footer non trouvé');
        const footerHTML = await footerResponse.text();
        document.getElementById('footer-placeholder').innerHTML = footerHTML;
        devLog('✅ Footer chargé');

        // Initialiser après le chargement
        setTimeout(() => {
            initLanguageSystem();
            initMobileMenu();
            highlightActiveNav();
            devLog('✅ Site initialisé avec succès !');
        }, 100);

    } catch (error) {
        devError('❌ Erreur de chargement:', error);
        document.body.innerHTML = `
            <div style="padding: 2rem; text-align: center; color: red;">
                <h1>❌ Erreur de chargement</h1>
                <p>${error.message}</p>
                <p>Vérifiez que vous utilisez un serveur local (Live Server)</p>
            </div>
        `;
    }
}


// ===== SYSTÈME DE TRADUCTION =====
function initLanguageSystem() {
    devLog('🌍 Initialisation du système de langue...');

    const currentLang = localStorage.getItem('selectedLanguage') || 'fr';
    const langSelector = document.querySelector('.current-language');
    const langMenu = document.querySelector('.language-menu');
    const langOptions = document.querySelectorAll('.language-option');

    if (!langSelector) {
        devWarn('⚠️ Sélecteur de langue non trouvé');
        return;
    }

    // Appliquer la langue sauvegardée
    changeLanguage(currentLang);

    // Toggle menu
    langSelector.addEventListener('click', (e) => {
        e.stopPropagation();
        langMenu.classList.toggle('active');
        langSelector.parentElement.classList.toggle('active');
    });

    // Fermer menu en cliquant ailleurs
    document.addEventListener('click', () => {
        langMenu.classList.remove('active');
        langSelector.parentElement.classList.remove('active');
    });

    // Changement de langue (DESKTOP + MOBILE)
    langOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.stopPropagation();
            const lang = option.dataset.lang;
            changeLanguage(lang);
            langMenu.classList.remove('active');
            langSelector.parentElement.classList.remove('active');

            // Fermer le menu mobile si ouvert
            const mobileMenu = document.querySelector('.mobile-menu');
            const menuToggle = document.querySelector('.menu-toggle');
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    devLog('✅ Système de langue initialisé');
}

function changeLanguage(lang) {
    devLog(`🌍 Changement de langue: ${lang}`);

    // Sauvegarder la langue (double pour compatibilité)
    localStorage.setItem('selectedLanguage', lang);
    localStorage.setItem('language', lang);

    // Changer direction pour l'arabe
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Traduire les éléments
    translateElements(lang);

    // Mettre à jour le bouton de langue
    updateLanguageButton(lang);

    // Dispatch event pour about.js
    window.dispatchEvent(new CustomEvent('languageChanged', { 
        detail: { language: lang } 
    }));

    devLog(`✅ Langue changée: ${lang}`);
}

// Traduire tous les éléments
function translateElements(lang) {
    let translated = 0;
    let missing = 0;

    // 1️⃣ Traduire [data-translate] (système général)
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        let translatedText = null;

        // Chercher dans translations (main)
        if (translations[lang] && translations[lang][key]) {
            translatedText = translations[lang][key];
        }
        // Chercher dans expositionsUITranslations
        else if (typeof expositionsUITranslations !== 'undefined' && 
                 expositionsUITranslations[lang] && 
                 expositionsUITranslations[lang][key]) {
            translatedText = expositionsUITranslations[lang][key];
        }

        if (translatedText) {
            element.textContent = translatedText;
            translated++;
        } else {
            // Ignorer les clés spécifiques aux pages
            if (!key.startsWith('contact_') && 
                !key.startsWith('lang_') && 
                !key.startsWith('footer_')) {
                missing++;
                devWarn(`⚠️ Clé manquante (data-translate): ${key}`);
            }
        }
    });

    // 2️⃣ Traduire [data-i18n] (pour about.js + mentions-legales.js)
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        let translatedText = null;

        // Chercher dans aboutTranslations
        if (typeof aboutTranslations !== 'undefined' && 
            aboutTranslations[lang] && 
            aboutTranslations[lang][key]) {
            translatedText = aboutTranslations[lang][key];
        }
        // Chercher dans mentionsTranslations
        else if (typeof mentionsTranslations !== 'undefined' && 
                 mentionsTranslations[lang] && 
                 mentionsTranslations[lang][key]) {
            translatedText = mentionsTranslations[lang][key];
        }
        // Chercher dans translations générales
        else if (translations[lang] && translations[lang][key]) {
            translatedText = translations[lang][key];
        }

        if (translatedText) {
            element.textContent = translatedText;
            translated++;
        } else {
            // Ignorer les clés spécifiques
            if (!key.startsWith('contact_') && 
                !key.startsWith('lang_') && 
                !key.startsWith('footer_')) {
                missing++;
                devWarn(`⚠️ Clé manquante (data-i18n): ${key}`);
            }
        }
    });

    devLog(`📊 Traduction: ${translated} éléments traduits, ${missing} clés manquantes`);
}

// Mettre à jour le bouton avec SVG
function updateLanguageButton(lang) {
    // Chemins vers les SVG
    const flags = { 
        fr: '/assets/flags/fr.svg', 
        en: '/assets/flags/gb.svg', 
        ar: '/assets/flags/sa.svg' 
    };

    const langCodes = { 
        fr: 'FR', 
        en: 'EN', 
        ar: 'AR' 
    };

    // Met à jour le bouton actuel (desktop)
    const currentLangBtn = document.querySelector('.current-language');
    if (currentLangBtn) {
        const flagElement = currentLangBtn.querySelector('.flag, .flag-icon, #currentFlag');
        const codeSpan = currentLangBtn.querySelector('.lang-code');

        if (flagElement) {
            if (flagElement.tagName === 'IMG') {
                flagElement.src = flags[lang];
            } else {
                // Convertir span en image
                flagElement.outerHTML = `<img src="${flags[lang]}" alt="" class="flag-icon" id="currentFlag">`;
            }
        }

        if (codeSpan) {
            codeSpan.textContent = langCodes[lang];
        }
    }

    // Met à jour les boutons actifs
    document.querySelectorAll('[data-lang]').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    devLog(`✅ Drapeau mis à jour: ${lang}`);
}

// ===== MARQUER PAGE ACTIVE =====
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';

    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}


// ===== CONTRÔLE VIDÉO =====
function initVideoPlayer() {
    const video = document.getElementById('process-video');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const overlay = document.querySelector('.video-overlay');
    const playIcon = playPauseBtn?.querySelector('.play-icon');
    const pauseIcon = playPauseBtn?.querySelector('.pause-icon');

    if (!video || !playPauseBtn) {
        devWarn('⚠️ Vidéo non trouvée sur cette page');
        return;
    }

    // Fonction toggle play/pause
    function togglePlayPause() {
        if (video.paused) {
            video.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
            overlay.classList.add('playing');
        } else {
            video.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            overlay.classList.remove('playing');
        }
    }

    // Événements
    playPauseBtn.addEventListener('click', togglePlayPause);
    video.addEventListener('click', togglePlayPause);

    // Quand la vidéo se termine
    video.addEventListener('ended', () => {
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
        overlay.classList.remove('playing');
    });

    devLog('✅ Lecteur vidéo initialisé');
}

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', function() {
    devLog('🚀 Démarrage du site...');

    loadIncludes();
    initVideoPlayer();

    devLog('✅ Site prêt !');
});


