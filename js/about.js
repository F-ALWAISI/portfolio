/**
 * ==============================================
 * PAGE À PROPOS - VERSION COMPLÈTE AVEC TRADUCTIONS
 * ==============================================
 */
 // ============================================
 // TRADUCTIONS
 // ============================================
 const aboutTranslations = {
    fr: {
        // Hero Section
        artistName: "Fatema Al Waisi",
        heroLabel: "À PROPOS",
        heroTitle: "Mon Parcours Artistique",
        heroSubtitle: "Découvrez l'histoire derrière mes créations",
        metaExperience: "15+ ans d'expérience",
        metaExhibitions: "50+ expositions",
        metaAwards: "12 prix internationaux",
        scrollText: "Découvrir mon histoire",

        // Quote Section
        quoteText: "L'art n'est pas ce que vous voyez, mais ce que vous faites voir aux autres.",
        quoteAuthor: "Fatema Al Waisi",

        // Biography Section
        bioTitle: "Ma Biographie",
        bioSubtitle: "Un voyage artistique unique",
        bioLead: "Artiste passionné depuis plus de 10 ans, je crée des œuvres qui transcendent les frontières entre tradition et modernité.",
        bioPara1: "Grâce à mon père j'ai grandi entouré de couleurs, de formes et de créativité. Dès mon plus jeune âge, l'art est devenu ma langue maternelle, mon moyen d'expression privilégié.",
        bioPara2: "Chaque création est une méditation, un dialogue entre mes mains et la matière. J'aime explorer la matière sous toutes ses formes et lui donner vie à travers mon regard d'artiste.",
        bioPara3: "Aujourd'hui, j'ai l'ambition que mes œuvres soient exposées dans des galeries du monde entier pour montrer mes créations et que le monde découvre cet art rare.",

        // Stats
        statExperience: "Années d'expérience",
        statExhibitions: "Expositions",
        statAwards: "Prix reçus",
        statWorks: "Œuvres créées",

        // Philosophy Section
        philosophyTitle: "Ma Philosophie Artistique",
        philosophySubtitle: "Les valeurs qui guident ma création",
        philoCard1Title: "Authenticité",
        philoCard1Text: "Chaque œuvre est une expression sincère de mes émotions et de ma vision unique du monde.",
        philoCard2Title: "Innovation",
        philoCard2Text: "Je repousse constamment les limites en explorant de nouvelles techniques et de nouveaux médiums.",
        philoCard3Title: "Émotion",
        philoCard3Text: "Mon objectif est de créer des œuvres qui touchent profondément et créent une connexion émotionnelle.",

        // Techniques Section
        techniquesTitle: "Mes Techniques",
        techniquesSubtitle: "Exploration de différents médiums artistiques",
        techPaintingTitle: "Peinture",
        techPaintingTag1: "Huile",
        techPaintingTag2: "Acrylique",
        techPaintingTag3: "Aquarelle",
        techSculptureTitle: "Sculpture",
        techSculptureTag1: "Bronze",
        techSculptureTag2: "Marbre",
        techSculptureTag3: "Bois",
        techDigitalTitle: "Art Numérique",
        techDigitalTag1: "3D",
        techDigitalTag2: "Animation",
        techDigitalTag3: "NFT",
        techMixedTitle: "Techniques Mixtes",
        techMixedTag1: "Collage",
        techMixedTag2: "Installation",
        techMixedTag3: "Performance",

        // Timeline Section
        timelineTitle: "Mon Parcours",
        timelineSubtitle: "Les moments clés de ma carrière",
        timeline2024Title: "Exposition Internationale",
        timeline2024Text: "Participation à la Biennale de Venise avec une série d'œuvres monumentales.",
        timeline2020Title: "Prix d'Excellence",
        timeline2020Text: "Lauréat du Prix International d'Art Contemporain pour ma série 'Horizons'.",
        timeline2015Title: "Première Galerie",
        timeline2015Text: "Ouverture de ma galerie-atelier à Paris, un espace dédié à la création et à l'exposition.",
        timeline2010Title: "Diplôme des Beaux-Arts",
        timeline2010Text: "Obtention de mon diplôme avec les honneurs et la mention très bien.",

        // CTA Section
        ctaTitle: "Travaillons Ensemble",
        ctaSubtitle: "Vous avez un projet artistique en tête ?",
        ctaText: "Je suis toujours ouvert aux collaborations créatives, aux commandes personnalisées et aux projets innovants.",
        ctaButton: "Me Contacter",
        ctaButtonSecondary: "Voir Mes Œuvres",

        // NOUVELLES CLÉS À AJOUTER
        metaLocation: "Basée en France",
        metaActive: "Active depuis 2015",
        quoteText: "L'art est le pont entre ce que je suis et ce que je rêve d'être",
        philoCard1Title: "Inspiration Naturelle",
        philoCard1Text: "La nature est ma première source d'inspiration. Chaque texture, couleur et forme naturelle nourrit ma créativité.",
        philoCard2Title: "Processus Méditatif",
        philoCard2Text: "Chaque œuvre est le fruit d'un processus méditatif où la patience transforme la matière en art.",
        philoCard3Title: "Héritage Culturel",
        philoCard3Text: "Je puise dans la richesse de mon héritage pour créer des œuvres contemporaines ancrées dans la tradition.",

        // TECHNIQUES SECTION
        techniquesTitle: "Savoir-faire",
        techniquesSubtitle: "Techniques & Matériaux",
        techCard1Title: "Peinture Mixte",
        techCard1Desc: "Fusion de techniques traditionnelles et contemporaines.",
        techCard1Tag1: "Acrylique",
        techCard1Tag2: "Aquarelle",
        techCard1Tag3: "Techniques mixtes",
        techCard2Title: "Gravure sur Étain",
        techCard2Desc: "Art de la profondeur et de la finesse.",
        techCard2Tag1: "Précision",
        techCard2Tag2: "Relief",
        techCard2Tag3: "Détails complexes",
        techCard3Title: "Peinture sur Verre",
        techCard3Desc: "Jeu subtil entre lumière, matière et technique.",
        techCard3Tag1: "Transparence",
        techCard3Tag2: "Lumière",
        techCard3Tag3: "Effets visuels",
        
        // TIMELINE SECTION
        timelineTitle: "Parcours",
        timelineSubtitle: "Formation & Évolution",
        timeline1Title: "Développement Artistique",
        timeline1Desc: "Participation à plusieurs expositions locales et développement de ma propre technique au fil des années.",
        timeline2Title: "Formation Spécialisée",
        timeline2Desc: "Perfectionnement en sculpture sur bois et techniques mixtes auprès d'artistes reconnus.",
        timeline3Title: "Obtention d'un Diplôme",
        timeline3Desc: "Le Diplôme de gravure sur étain.",
        timeline4Title: "Exploration Artistique",
        timeline4Desc: "Découverte et apprentissage de diverses techniques artistiques sur l'étain et sur verre, recherche de mon style personnel.",
        
        // CTA SECTION
        ctaTitle: "Découvrez Mon Univers",
        ctaSubtitle: "Explorez mes créations et laissez-vous emporter par mon monde artistique",
        ctaBtnGallery: "Voir la Galerie",
        ctaBtnContact: "Me Contacter",
    },

    en: {
        // Hero Section
        artistName: "Fatema Al Waisi",
        heroLabel: "ABOUT",
        heroTitle: "My Artistic Journey",
        heroSubtitle: "Discover the story behind my creations",
        metaExperience: "15+ years of experience",
        metaExhibitions: "50+ exhibitions",
        metaAwards: "12 international awards",
        scrollText: "Discover my story",

        // Quote Section
        quoteText: "Art is not what you see, but what you make others see.",
        quoteAuthor: "Fatema Al Waisi",

        // Biography Section
        bioTitle: "My Biography",
bioSubtitle: "A unique artistic journey",
bioLead: "Passionate artist for over 10 years, I create works that transcend the boundaries between tradition and modernity.",
bioPara1: "Thanks to my father, I grew up surrounded by colors, shapes, and creativity. From a very young age, art became my mother tongue, my preferred means of expression.",
bioPara2: "Each creation is a meditation, a dialogue between my hands and the material. I love exploring matter in all its forms and bringing it to life through my artist's eye.",
bioPara3: "Today, I have the ambition for my works to be exhibited in galleries around the world to showcase my creations and let the world discover this rare art.",

        // Stats
        statExperience: "Years of experience",
        statExhibitions: "Exhibitions",
        statAwards: "Awards received",
        statWorks: "Works created",

        // Philosophy Section
        philosophyTitle: "My Artistic Philosophy",
        philosophySubtitle: "The values that guide my creation",
        philoCard1Title: "Authenticity",
        philoCard1Text: "Each work is a sincere expression of my emotions and my unique vision of the world.",
        philoCard2Title: "Innovation",
        philoCard2Text: "I constantly push boundaries by exploring new techniques and new mediums.",
        philoCard3Title: "Emotion",
        philoCard3Text: "My goal is to create works that touch deeply and create an emotional connection.",

        // Techniques Section
        techniquesTitle: "My Techniques",
        techniquesSubtitle: "Exploration of different artistic mediums",
        techPaintingTitle: "Painting",
        techPaintingTag1: "Oil",
        techPaintingTag2: "Acrylic",
        techPaintingTag3: "Watercolor",
        techSculptureTitle: "Sculpture",
        techSculptureTag1: "Bronze",
        techSculptureTag2: "Marble",
        techSculptureTag3: "Wood",
        techDigitalTitle: "Digital Art",
        techDigitalTag1: "3D",
        techDigitalTag2: "Animation",
        techDigitalTag3: "NFT",
        techMixedTitle: "Mixed Media",
        techMixedTag1: "Collage",
        techMixedTag2: "Installation",
        techMixedTag3: "Performance",

        // Timeline Section
        timelineTitle: "My Journey",
        timelineSubtitle: "Key moments in my career",
        timeline2024Title: "International Exhibition",
        timeline2024Text: "Participation in the Venice Biennale with a series of monumental works.",
        timeline2020Title: "Excellence Award",
        timeline2020Text: "Winner of the International Contemporary Art Prize for my 'Horizons' series.",
        timeline2015Title: "First Gallery",
        timeline2015Text: "Opening of my studio-gallery in Paris, a space dedicated to creation and exhibition.",
        timeline2010Title: "Fine Arts Diploma",
        timeline2010Text: "Obtained my diploma with honors and highest distinction.",

        // CTA Section
        ctaTitle: "Let's Work Together",
        ctaSubtitle: "Do you have an artistic project in mind?",
        ctaText: "I am always open to creative collaborations, custom commissions, and innovative projects.",
        ctaButton: "Contact Me",
        ctaButtonSecondary: "View My Works",

        metaLocation: "Based in France",
        metaActive: "Active since 2015",
        quoteText: "Art is the bridge between what I am and what I dream of being",
        philoCard1Title: "Natural Inspiration",
        philoCard1Text: "Nature is my primary source of inspiration. Every natural texture, color and shape nourishes my creativity.",
        philoCard2Title: "Meditative Process",
        philoCard2Text: "Each work is the result of a meditative process where patience transforms matter into art.",
        philoCard3Title: "Cultural Heritage",
        philoCard3Text: "I draw from the richness of my heritage to create contemporary works rooted in tradition.",

        // TECHNIQUES SECTION
        techniquesTitle: "Expertise",
        techniquesSubtitle: "Techniques & Materials",
        techCard1Title: "Mixed Painting",
        techCard1Desc: "Fusion of traditional and contemporary techniques.",
        techCard1Tag1: "Acrylic",
        techCard1Tag2: "Watercolor",
        techCard1Tag3: "Mixed media",
        techCard2Title: "Tin Engraving",
        techCard2Desc: "Art of depth and finesse.",
        techCard2Tag1: "Precision",
        techCard2Tag2: "Relief",
        techCard2Tag3: "Complex details",
        techCard3Title: "Glass Painting",
        techCard3Desc: "Subtle play between light, matter and technique.",
        techCard3Tag1: "Transparency",
        techCard3Tag2: "Light",
        techCard3Tag3: "Visual effects",
        
        // TIMELINE SECTION
        timelineTitle: "Journey",
        timelineSubtitle: "Training & Evolution",
        timeline1Title: "Artistic Development",
        timeline1Desc: "Participation in several local exhibitions and development of my own technique over the years.",
        timeline2Title: "Specialized Training",
        timeline2Desc: "Perfecting wood sculpture and mixed techniques with renowned artists.",
        timeline3Title: "Diploma Obtained",
        timeline3Desc: "Tin engraving diploma.",
        timeline4Title: "Artistic Exploration",
        timeline4Desc: "Discovery and learning of various artistic techniques on tin and glass, search for my personal style.",
        
        // CTA SECTION
        ctaTitle: "Discover My Universe",
        ctaSubtitle: "Explore my creations and let yourself be carried away by my artistic world",
        ctaBtnGallery: "View Gallery",
        ctaBtnContact: "Contact Me",
    },

    ar: {
        // Hero Section
        artistName:"فاطمة الويسي",
        heroLabel: "نبذة عني",
        artistName: "فاطمة الويسي",
        heroTitle: "رحلتي الفنية",
        heroSubtitle: "اكتشف القصة وراء إبداعاتي",
        metaExperience: "أكثر من 15 عامًا من الخبرة",
        metaExhibitions: "أكثر من 50 معرضًا",
        metaAwards: "12 جائزة دولية",
        scrollText: "اكتشف قصتي",

        // Quote Section
        quoteText: "الفن ليس ما تراه، بل ما تجعل الآخرين يرونه.",
        quoteAuthor: "فاطمة الويسي",

        // Biography Section
        bioTitle: "سيرتي الذاتية",
bioSubtitle: "رحلة فنية فريدة",
bioLead: "فنانة شغوفة منذ أكثر من 10 سنوات، أبدع أعمالًا تتجاوز الحدود بين التقليد والحداثة.",
bioPara1: "بفضل والدي، نشأت محاطة بالألوان والأشكال والإبداع. منذ صغري، أصبح الفن لغتي الأم، ووسيلة التعبير المفضلة لدي.",
bioPara2: "كل إبداع هو تأمل، حوار بين يدي والمادة. أحب استكشاف المادة بجميع أشكالها وإحيائها من خلال نظرة الفنانة.",
bioPara3: "اليوم، لدي طموح بأن تُعرض أعمالي في معارض حول العالم لإظهار إبداعاتي وليكتشف العالم هذا الفن النادر.",

        // Stats
        statExperience: "سنوات الخبرة",
        statExhibitions: "المعارض",
        statAwards: "الجوائز المستلمة",
        statWorks: "الأعمال المنشأة",

        // Philosophy Section
        philosophyTitle: "فلسفتي الفنية",
        philosophySubtitle: "القيم التي توجه إبداعي",
        philoCard1Title: "الأصالة",
        philoCard1Text: "كل عمل هو تعبير صادق عن مشاعري ورؤيتي الفريدة للعالم.",
        philoCard2Title: "الابتكار",
        philoCard2Text: "أدفع الحدود باستمرار من خلال استكشاف تقنيات ووسائط جديدة.",
        philoCard3Title: "العاطفة",
        philoCard3Text: "هدفي هو إنشاء أعمال تلمس بعمق وتخلق اتصالًا عاطفيًا.",

        // Techniques Section
        techniquesTitle: "تقنياتي",
        techniquesSubtitle: "استكشاف وسائط فنية مختلفة",
        techPaintingTitle: "الرسم",
        techPaintingTag1: "زيت",
        techPaintingTag2: "أكريليك",
        techPaintingTag3: "ألوان مائية",
        techSculptureTitle: "النحت",
        techSculptureTag1: "برونز",
        techSculptureTag2: "رخام",
        techSculptureTag3: "خشب",
        techDigitalTitle: "الفن الرقمي",
        techDigitalTag1: "3D",
        techDigitalTag2: "رسوم متحركة",
        techDigitalTag3: "NFT",
        techMixedTitle: "تقنيات مختلطة",
        techMixedTag1: "كولاج",
        techMixedTag2: "تثبيت",
        techMixedTag3: "أداء",

        // Timeline Section
        timelineTitle: "رحلتي",
        timelineSubtitle: "اللحظات الرئيسية في مسيرتي",
        timeline2024Title: "معرض دولي",
        timeline2024Text: "المشاركة في بينالي البندقية بسلسلة من الأعمال الضخمة.",
        timeline2020Title: "جائزة التميز",
        timeline2020Text: "الفائز بجائزة الفن المعاصر الدولية لسلسلتي 'آفاق'.",
        timeline2015Title: "المعرض الأول",
        timeline2015Text: "افتتاح معرض الاستوديو الخاص بي في باريس، مساحة للإبداع والعرض.",
        timeline2010Title: "دبلوم الفنون الجميلة",
        timeline2010Text: "الحصول على دبلومي مع مرتبة الشرف وتميز الامتياز.",

        // CTA Section
        ctaTitle: "لنعمل معًا",
        ctaSubtitle: "هل لديك مشروع فني في ذهنك؟",
        ctaText: "أنا دائمًا منفتح على التعاون الإبداعي والعمولات المخصصة والمشاريع المبتكرة.",
        ctaButton: "اتصل بي",
        ctaButtonSecondary: "عرض أعمالي",

        metaLocation: "مقرها في فرنسا",
        metaActive: "نشطة منذ 2015",
        quoteText: "الفن هو الجسر بين ما أنا عليه وما أحلم أن أكون",
        philoCard1Title: "الإلهام الطبيعي",
        philoCard1Text: "الطبيعة هي مصدر إلهامي الأساسي. كل نسيج طبيعي ولون وشكل يغذي إبداعي.",
        philoCard2Title: "عملية تأملية",
        philoCard2Text: "كل عمل هو نتيجة عملية تأملية حيث يحول الصبر المادة إلى فن.",
        philoCard3Title: "التراث الثقافي",
        philoCard3Text: "أستمد من ثراء تراثي لإنشاء أعمال معاصرة متجذرة في التقليد.",

        // TECHNIQUES SECTION
        techniquesTitle: "المهارات",
        techniquesSubtitle: "التقنيات والمواد",
        techCard1Title: "الرسم المختلط",
        techCard1Desc: "دمج التقنيات التقليدية والمعاصرة.",
        techCard1Tag1: "أكريليك",
        techCard1Tag2: "ألوان مائية",
        techCard1Tag3: "تقنيات مختلطة",
        techCard2Title: "النقش على المعدن",
        techCard2Desc: "فن العمق والدقة.",
        techCard2Tag1: "دقة",
        techCard2Tag2: "نحت بارز",
        techCard2Tag3: "تفاصيل معقدة",
        techCard3Title: "الرسم على الزجاج",
        techCard3Desc: "لعبة دقيقة بين الضوء والمادة والتقنية.",
        techCard3Tag1: "شفافية",
        techCard3Tag2: "ضوء",
        techCard3Tag3: "تأثيرات بصرية",
        
        // TIMELINE SECTION
        timelineTitle: "المسار",
        timelineSubtitle: "التكوين والتطور",
        timeline1Title: "التطوير الفني",
        timeline1Desc: "المشاركة في عدة معارض محلية وتطوير تقنيتي الخاصة على مر السنين.",
        timeline2Title: "التكوين المتخصص",
        timeline2Desc: "إتقان نحت الخشب والتقنيات المختلطة مع فنانين مشهورين.",
        timeline3Title: "الحصول على دبلوم",
        timeline3Desc: "دبلوم النقش على المعدن.",
        timeline4Title: "الاستكشاف الفني",
        timeline4Desc: "اكتشاف وتعلم تقنيات فنية متنوعة على المعدن والزجاج، والبحث عن أسلوبي الشخصي.",
        
        // CTA SECTION
        ctaTitle: "اكتشف عالمي",
        ctaSubtitle: "استكشف إبداعاتي ودع نفسك تنجرف في عالمي الفني",
        ctaBtnGallery: "عرض المعرض",
        ctaBtnContact: "اتصل بي",
    }
};

// ============================================
// CLASSE PRINCIPALE
// ============================================
class AboutPage {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.forceShowAllElements();
        this.initScrollIndicator();
        this.initHoverEffects();

        // Écouter les changements de langue depuis main.js
        window.addEventListener('languageChanged', () => {
            // La traduction se fait automatiquement via main.js
        });
    }

    /**
     * Forcer l'affichage de TOUS les éléments
     */
    forceShowAllElements() {
        const allSections = document.querySelectorAll(`
            .quote-section,
            .biography-section,
            .philosophy-section,
            .techniques-section,
            .journey-section,
            .cta-section
        `);

        allSections.forEach(section => {
            if (section) {
                section.style.opacity = '1';
                section.style.visibility = 'visible';
                section.style.display = 'block';
            }
        });
    }

    /**
     * Scroll Indicator
     */
    initScrollIndicator() {
        const scrollIndicator = document.querySelector('.scroll-indicator');

        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const firstSection = document.querySelector('.quote-section, .biography-section');
                if (firstSection) {
                    firstSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });

            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                scrollIndicator.style.opacity = currentScroll > 100 ? '0' : '1';
            });
        }
    }

    /**
     * Effets au survol
     */
    initHoverEffects() {
        const philosophyCards = document.querySelectorAll('.philosophy-card');
        philosophyCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        const techniqueCards = document.querySelectorAll('.technique-card');
        techniqueCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        });
    }
}

// ============================================
// INITIALISATION
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AboutPage());
} else {
    new AboutPage();
}

// Sécurité supplémentaire
window.addEventListener('load', () => {
    setTimeout(() => {
        const allElements = document.querySelectorAll('.quote-section, .biography-section, .philosophy-section, .techniques-section, .journey-section, .cta-section');
        allElements.forEach(el => {
            if (el) {
                el.style.opacity = '1';
                el.style.visibility = 'visible';
                el.style.display = 'block';
            }
        });
    }, 100);
});
