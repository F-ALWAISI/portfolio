// ============================================
// EXPOSITIONS.JS - Logique et interactions
// ============================================

// ===== VARIABLES GLOBALES =====
let currentFilter = 'all';

// ===== TRADUCTIONS EXPOSITIONS =====
const expositionsUITranslations = {
    fr: {
        // Hero
        expo_hero_title: "Parcours Artistique",
        expo_hero_subtitle: "Une décennie d'expositions et d'événements marquants",
        
        // Stats
        stat_exhibitions: "Expositions",
        stat_cities: "Villes",
        stat_visitors: "Visiteurs",
        stat_artworks: "Œuvres exposées",
        
        // Filtres
        filter_all: "Toutes",
        filter_upcoming: "À venir",
        filter_solo: "Solo",
        filter_collective: "Collectives",
        filter_special: "Événements",
        
        // Status
        status_upcoming: "À venir",
        status_featured: "Coup de cœur",
        
        // Types
        type_solo: "Exposition Solo",
        type_collective: "Exposition Collective",
        type_special: "Événement Spécial",
        
        // Mois
        month_january: "Janvier",
        month_february: "Février",
        month_march: "Mars",
        month_april: "Avril",
        month_may: "Mai",
        month_june: "Juin",
        month_july: "Juillet",
        month_august: "Août",
        month_september: "Septembre",
        month_october: "Octobre",
        month_november: "Novembre",
        month_december: "Décembre",
        
        // Stats dans cards
        stat_visitors_card: "visiteurs",
        stat_artworks_card: "œuvres",
        stat_days_card: "jours",
        
        // No results
        no_results: "Aucune exposition trouvée"
    },
    
    en: {
        // Hero
        expo_hero_title: "Artistic Journey",
        expo_hero_subtitle: "A decade of exhibitions and landmark events",
        
        // Stats
        stat_exhibitions: "Exhibitions",
        stat_cities: "Cities",
        stat_visitors: "Visitors",
        stat_artworks: "Artworks Displayed",
        
        // Filtres
        filter_all: "All",
        filter_upcoming: "Upcoming",
        filter_solo: "Solo",
        filter_collective: "Collective",
        filter_special: "Events",
        
        // Status
        status_upcoming: "Upcoming",
        status_featured: "Featured",
        
        // Types
        type_solo: "Solo Exhibition",
        type_collective: "Collective Exhibition",
        type_special: "Special Event",
        
        // Mois
        month_january: "January",
        month_february: "February",
        month_march: "March",
        month_april: "April",
        month_may: "May",
        month_june: "June",
        month_july: "July",
        month_august: "August",
        month_september: "September",
        month_october: "October",
        month_november: "November",
        month_december: "December",
        
        // Stats dans cards
        stat_visitors_card: "visitors",
        stat_artworks_card: "artworks",
        stat_days_card: "days",
        
        // No results
        no_results: "No exhibitions found"
    },
    
    ar: {
        // Hero
        expo_hero_title: "مسيرة فنية",
        expo_hero_subtitle: "عقد من المعارض والأحداث البارزة",
        
        // Stats
        stat_exhibitions: "معارض",
        stat_cities: "مدن",
        stat_visitors: "زوار",
        stat_artworks: "أعمال معروضة",
        
        // Filtres
        filter_all: "الكل",
        filter_upcoming: "القادمة",
        filter_solo: "فردية",
        filter_collective: "جماعية",
        filter_special: "فعاليات",
        
        // Status
        status_upcoming: "قادم",
        status_featured: "مميز",
        
        // Types
        type_solo: "معرض فردي",
        type_collective: "معرض جماعي",
        type_special: "حدث خاص",
        
        // Mois
        month_january: "يناير",
        month_february: "فبراير",
        month_march: "مارس",
        month_april: "أبريل",
        month_may: "مايو",
        month_june: "يونيو",
        month_july: "يوليو",
        month_august: "أغسطس",
        month_september: "سبتمبر",
        month_october: "أكتوبر",
        month_november: "نوفمبر",
        month_december: "ديسمبر",
        
        // Stats dans cards
        stat_visitors_card: "زائر",
        stat_artworks_card: "عمل",
        stat_days_card: "أيام",
        
        // No results
        no_results: "لم يتم العثور على معارض"
    }
};

// ===== TRADUCTIONS DESCRIPTIONS =====
const expositionsTranslations = {
    fr: {
        expo_2026: {
            title: "Rencontre des Arts",
            location: "Horbourg-Wihr",
            duration: "30 - 31 mai 2026",
        },
        expo_2025: {
            title: "Rencontre des Arts",
            location: "Horbourg-Wihr",
            duration: "24 - 25 mai 2025",
        },
        expo_2024: {
            title: "Rencontre des Arts",
            location: "Horbourg-Wihr",
            duration: "25 - 26 mai 2024",
        },
        expo_2023_solo: {
            title: "Exposition de Fatema Al Waisi",
            location: "Salle de la Décapole - Türkheim",
            duration: "5 - 15 juin 2023",
        },
        expo_2023_collective: {
            title: "Rencontre des Arts",
            location: "Horbourg-Wihr",
            duration: "27 - 28 mai 2023",
        },
        expo_2018: {
            title: "Journée contre le Racisme",
            location: "Place Publique - Genève",
            duration: "21 mars 2018",
            organizer: "Organisé par la ville de Genève"
        }
    },
    
    en: {
        expo_2026: {
            title: "Art Encounters",
            location: "Horbourg-Wihr",
            duration: "May 30 - 31, 2026",
        },
        expo_2025: {
            title: "Art Encounters",
            location: "Horbourg-Wihr",
            duration: "May 24 - 25, 2025",
        },
        expo_2024: {
            title: "Art Encounters",
            location: "Horbourg-Wihr",
            duration: "May 25 - 26, 2024",
        },
        expo_2023_solo: {
            title: "Fatema Al Waisi Exhibition",
            location: "Décapole Hall - Türkheim",
            duration: "June 5 - 15, 2023",
        },
        expo_2023_collective: {
            title: "Art Encounters",
            location: "Horbourg-Wihr",
            duration: "May 27 - 28, 2023",
        },
        expo_2018: {
            title: "Anti-Racism Day",
            location: "Public Square - Geneva",
            duration: "March 21, 2018",
            organizer: "Organized by the City of Geneva"
        }
    },
    
    ar: {
        expo_2026: {
            title: "لقاء الفنون",
            location: "هوربورغ-فيهر",
            duration: "30 - 31 مايو 2026",
        },
        expo_2025: {
            title: "لقاء الفنون",
            location: "هوربورغ-فيهر",
            duration: "24 - 25 مايو 2025",
        },
        expo_2024: {
            title: "لقاء الفنون",
            location: "هوربورغ-فيهر",
            duration: "25 - 26 مايو 2024",
        },
        expo_2023_solo: {
            title: "معرض فاطمة الويسي",
            location: "قاعة الديكابول - تيركهايم",
            duration: "5 - 15 يونيو 2023",
        },
        expo_2023_collective: {
            title: "لقاء الفنون",
            location: "هوربورغ-فيهر",
            duration: "27 - 28 مايو 2023",
        },
        expo_2018: {
            title: "يوم مناهضة العنصرية",
            location: "الساحة العامة - جنيف",
            duration: "21 مارس 2018",
            organizer: "نظمته مدينة جنيف"
        }
    }
};

// ===== FONCTION LOAD HEADER/FOOTER =====
async function loadHeaderFooter() {
    try {
        const headerResponse = await fetch('includes/header.html');
        const headerHTML = await headerResponse.text();
        document.getElementById('header-placeholder').innerHTML = headerHTML;
    } catch (error) {
        console.error('❌ Erreur chargement header:', error);
    }
}

// ===== GÉNÉRATION DE LA TIMELINE =====
function generateTimeline() {
    const container = document.getElementById('timeline-container');

    if (!container) {
        console.error('❌ Conteneur timeline introuvable');
        return;
    }

    container.innerHTML = '';

    // Récupérer la langue depuis localStorage
    const currentLang = localStorage.getItem('selectedLanguage') || 'fr';

    // Filtrer les expositions
    const filteredExpos = Object.values(expositionsData).filter(expo => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'upcoming') return expo.type === 'upcoming';
        if (currentFilter === 'solo') return expo.category === 'solo';
        if (currentFilter === 'collective') return expo.category === 'collective';
        if (currentFilter === 'special') return expo.category === 'special';
        return true;
    });

    // Afficher message si vide
    if (filteredExpos.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <p>${expositionsUITranslations[currentLang]?.no_results || 'Aucun résultat'}</p>
            </div>
        `;
        return;
    }

    // Générer les cards
    filteredExpos.forEach((expo, index) => {
        const expoTranslation = expositionsTranslations[currentLang]?.[expo.id];

        // Sécurité : Si traduction manquante, passer
        if (!expoTranslation) return;

        const typeKey = `type_${expo.category}`;

        const card = document.createElement('div');
        card.className = 'expo-card';
        card.dataset.category = `${expo.type} ${expo.category}`;
        card.style.animationDelay = `${index * 0.1}s`;

        const placeholder = document.createElement('div');
        placeholder.className = 'expo-placeholder';

        // Date badge
        const dateHTML = `
            <div class="expo-date">
                <div class="date-badge ${expo.type === 'upcoming' ? 'upcoming-badge' : ''}">
                    <div class="date-month">${expo.month}</div>
                    <div class="date-year">${expo.year}</div>
                </div>
            </div>
        `;

        // Stats
        let statsHTML = '';
        if (expo.stats) {
            statsHTML = `
                <div class="expo-stats">
                    <div class="expo-stat">
                        <span class="expo-stat-value">${expo.stats.visitors}</span>
                        <span class="expo-stat-label">${expositionsUITranslations[currentLang]?.stat_visitors_card || 'Visiteurs'}</span>
                    </div>
                    <div class="expo-stat">
                        <span class="expo-stat-value">${expo.stats.artworks}</span>
                        <span class="expo-stat-label">${expositionsUITranslations[currentLang]?.stat_artworks_card || 'Œuvres'}</span>
                    </div>
                    <div class="expo-stat">
                        <span class="expo-stat-value">${expo.stats.days}</span>
                        <span class="expo-stat-label">${expositionsUITranslations[currentLang]?.stat_days_card || 'Jours'}</span>
                    </div>
                </div>
            `;
        }

        // Organizer
        let organizerHTML = '';
        if (expoTranslation.organizer) {
            organizerHTML = `<div class="expo-organizer">${expoTranslation.organizer}</div>`;
        }

        // Content
        const contentHTML = `
            <div class="expo-content">
                <h3 class="expo-title">${expoTranslation.title}</h3>
                <div class="expo-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>${expoTranslation.location}</span>
                </div>
                ${statsHTML}
                ${organizerHTML}
                <div class="expo-meta">
                    <div class="expo-duration">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                        </svg>
                        <span>${expoTranslation.duration}</span>
                    </div>
                    <div class="expo-type-badge">${expositionsUITranslations[currentLang]?.[typeKey] || expo.category}</div>
                </div>
            </div>
        `;

        card.innerHTML = `
            ${placeholder.outerHTML}
            ${dateHTML}
            ${contentHTML}
        `;

        container.appendChild(card);
    });
}


// ===== FILTRES =====
function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Retirer active de tous
            filterBtns.forEach(b => b.classList.remove('active'));

            // Activer le bouton cliqué
            btn.classList.add('active');

            // Mettre à jour le filtre
            currentFilter = btn.dataset.filter;

            // Régénérer la timeline
            generateTimeline();
        });
    });
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Charger header/footer
    loadHeaderFooter();

    // Initialiser les filtres
    initFilters();

    // Générer la timeline avec la langue actuelle
    generateTimeline();

    // Écouter les changements de langue depuis main.js
    window.addEventListener('languageChanged', (e) => {
        generateTimeline();
    });
});
