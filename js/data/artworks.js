// js/data/artworks.js

const artworks = {
    fr: [
        // ===== ÉTAIN =====
        {
            id: 1,
            title: "L'Indienne Traditionnelle",
            technique: "etain",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Portrait gravé sur étain représentant une femme indienne en tenue traditionnelle. Cette œuvre capture l'élégance et la dignité des costumes ancestraux.",
            image: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            featured: true
        },
        {
            id: 2,
            title: "L'Indienne",
            technique: "etain",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Gravure sur étain représentant une femme indienne.",
            image: "images/oeuvres/etain/l'indienne.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne.jpg",
            featured: false
        },
        {
            id: 3,
            title: "La Naissance de Jésus",
            technique: "etain",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Scène religieuse gravée sur étain représentant la nativité.",
            image: "images/oeuvres/etain/la naissance de Jesue.jpg",
            thumbnail: "images/oeuvres/etain/la naissance de Jesue.jpg",
            featured: false
        },
        {
            id: 4,
            title: "Masque Vénitien",
            technique: "etain",
            year: 2023,
            dimensions: "25×35 cm",
            description: "Masque de carnaval vénitien gravé sur étain avec finesse.",
            image: "images/oeuvres/etain/masque-venitien.jpg",
            thumbnail: "images/oeuvres/etain/masque-venitien.jpg",
            featured: false
        },
        {
            id: 5,
            title: "Nature Humaine",
            technique: "etain",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Réflexion artistique sur la nature humaine gravée sur étain.",
            image: "images/oeuvres/etain/nature-humain.jpg",
            thumbnail: "images/oeuvres/etain/nature-humain.jpg",
            featured: false
        },
        {
            id: 6,
            title: "Réflexion",
            technique: "etain",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Œuvre contemplative gravée sur étain.",
            image: "images/oeuvres/etain/réflexion.jpg",
            thumbnail: "images/oeuvres/etain/réflexion.jpg",
            featured: true
        },

        // ===== MIXTE =====
        {
            id: 7,
            title: "Gravure à la Bougie",
            technique: "mixte",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Technique mixte combinant gravure et effets de cire.",
            image: "images/oeuvres/Mixte/gravure-bougie.jpg",
            thumbnail: "images/oeuvres/Mixte/gravure-bougie.jpg",
            featured: false
        },
        {
            id: 8,
            title: "Horloge de Chevet",
            technique: "mixte",
            year: 2023,
            dimensions: "20×25 cm",
            description: "Horloge décorative en technique mixte.",
            image: "images/oeuvres/Mixte/horloge-chevet.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-chevet.jpg",
            featured: false
        },
        {
            id: 9,
            title: "Horloge Métal",
            technique: "mixte",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Horloge murale réalisée en techniques mixtes sur métal.",
            image: "images/oeuvres/Mixte/horloge-metal.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-metal.jpg",
            featured: true
        },

        // ===== VERRE =====
        {
            id: 10,
            title: "Le Cerf",
            technique: "verre",
            year: 2023,
            dimensions: "40×50 cm",
            description: "Majestueux cerf peint sur verre avec détails minutieux.",
            image: "images/oeuvres/Verre/Cerf.jpg",
            thumbnail: "images/oeuvres/Verre/Cerf.jpg",
            featured: true
        },
        {
            id: 11,
            title: "La Cigogne",
            technique: "verre",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Cigogne élégante peinte sur verre.",
            image: "images/oeuvres/Verre/cigogne.jpg",
            thumbnail: "images/oeuvres/Verre/cigogne.jpg",
            featured: false
        },
        {
            id: 12,
            title: "Kamaria",
            technique: "verre",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Portrait féminin poétique peint sur verre.",
            image: "images/oeuvres/Verre/Kamaria.jpg",
            thumbnail: "images/oeuvres/Verre/Kamaria.jpg",
            featured: false
        },
        {
            id: 13,
            title: "La Féminine",
            technique: "verre",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Célébration de la féminité à travers la peinture sur verre.",
            image: "images/oeuvres/Verre/la fémenine.jpg",
            thumbnail: "images/oeuvres/Verre/la fémenine.jpg",
            featured: true
        },
        {
            id: 14,
            title: "La Femme Fleurissante",
            technique: "verre",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Femme entourée de fleurs, symbole de vie et renouveau.",
            image: "images/oeuvres/Verre/la femme fleurisante.jpg",
            thumbnail: "images/oeuvres/Verre/la femme fleurisante.jpg",
            featured: false
        },
        {
            id: 15,
            title: "La Fleur",
            technique: "verre",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Composition florale délicate sur verre.",
            image: "images/oeuvres/Verre/la fleure.jpg",
            thumbnail: "images/oeuvres/Verre/la fleure.jpg",
            featured: false
        },
        {
            id: 16,
            title: "La Patiente",
            technique: "verre",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Figure contemplative peinte sur verre.",
            image: "images/oeuvres/Verre/la patiente.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente.jpg",
            featured: false
        },
        {
            id: 17,
            title: "La Patiente II",
            technique: "verre",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Variation sur le thème de la patience.",
            image: "images/oeuvres/Verre/la patiente1.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente1.jpg",
            featured: false
        },
        {
            id: 18,
            title: "La Tête du Cerf",
            technique: "verre",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Portrait majestueux d'une tête de cerf sur verre.",
            image: "images/oeuvres/Verre/La tête du cerf.jpg",
            thumbnail: "images/oeuvres/Verre/La tête du cerf.jpg",
            featured: true
        },
        {
            id: 19,
            title: "Le Vieil de la Forêt",
            technique: "verre",
            year: 2023,
            dimensions: "40×50 cm",
            description: "Sage de la forêt peint sur verre, symbole de sagesse ancestrale.",
            image: "images/oeuvres/Verre/le vieil du forêt.jpg",
            thumbnail: "images/oeuvres/Verre/le vieil du forêt.jpg",
            featured: false
        }
    ],

    en: [
        // ===== TIN =====
        {
            id: 1,
            title: "Traditional Indian Woman",
            technique: "tin",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Tin engraving depicting an Indian woman in traditional attire. This artwork captures the elegance and dignity of ancestral costumes.",
            image: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            featured: true
        },
        {
            id: 2,
            title: "The Indian Woman",
            technique: "tin",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Tin engraving depicting an Indian woman.",
            image: "images/oeuvres/etain/l'indienne.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne.jpg",
            featured: false
        },
        {
            id: 3,
            title: "The Birth of Jesus",
            technique: "tin",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Religious scene engraved on tin depicting the nativity.",
            image: "images/oeuvres/etain/la naissance de Jesue.jpg",
            thumbnail: "images/oeuvres/etain/la naissance de Jesue.jpg",
            featured: false
        },
        {
            id: 4,
            title: "Venetian Mask",
            technique: "tin",
            year: 2023,
            dimensions: "25×35 cm",
            description: "Carnival Venetian mask finely engraved on tin.",
            image: "images/oeuvres/etain/masque-venitien.jpg",
            thumbnail: "images/oeuvres/etain/masque-venitien.jpg",
            featured: false
        },
        {
            id: 5,
            title: "Human Nature",
            technique: "tin",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Artistic reflection on human nature engraved on tin.",
            image: "images/oeuvres/etain/nature-humain.jpg",
            thumbnail: "images/oeuvres/etain/nature-humain.jpg",
            featured: false
        },
        {
            id: 6,
            title: "Reflection",
            technique: "tin",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Contemplative work engraved on tin.",
            image: "images/oeuvres/etain/réflexion.jpg",
            thumbnail: "images/oeuvres/etain/réflexion.jpg",
            featured: true
        },

        // ===== MIXED =====
        {
            id: 7,
            title: "Candle Engraving",
            technique: "mixed",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Mixed technique combining engraving and wax effects.",
            image: "images/oeuvres/Mixte/gravure-bougie.jpg",
            thumbnail: "images/oeuvres/Mixte/gravure-bougie.jpg",
            featured: false
        },
        {
            id: 8,
            title: "Bedside Clock",
            technique: "mixed",
            year: 2023,
            dimensions: "20×25 cm",
            description: "Decorative clock in mixed technique.",
            image: "images/oeuvres/Mixte/horloge-chevet.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-chevet.jpg",
            featured: false
        },
        {
            id: 9,
            title: "Metal Clock",
            technique: "mixed",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Wall clock made in mixed techniques on metal.",
            image: "images/oeuvres/Mixte/horloge-metal.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-metal.jpg",
            featured: true
        },

        // ===== GLASS =====
        {
            id: 10,
            title: "The Deer",
            technique: "glass",
            year: 2023,
            dimensions: "40×50 cm",
            description: "Majestic deer painted on glass with meticulous details.",
            image: "images/oeuvres/Verre/Cerf.jpg",
            thumbnail: "images/oeuvres/Verre/Cerf.jpg",
            featured: true
        },
        {
            id: 11,
            title: "The Stork",
            technique: "glass",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Elegant stork painted on glass.",
            image: "images/oeuvres/Verre/cigogne.jpg",
            thumbnail: "images/oeuvres/Verre/cigogne.jpg",
            featured: false
        },
        {
            id: 12,
            title: "Kamaria",
            technique: "glass",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Poetic female portrait painted on glass.",
            image: "images/oeuvres/Verre/Kamaria.jpg",
            thumbnail: "images/oeuvres/Verre/Kamaria.jpg",
            featured: false
        },
        {
            id: 13,
            title: "The Feminine",
            technique: "glass",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Celebration of femininity through glass painting.",
            image: "images/oeuvres/Verre/la fémenine.jpg",
            thumbnail: "images/oeuvres/Verre/la fémenine.jpg",
            featured: true
        },
        {
            id: 14,
            title: "The Blooming Woman",
            technique: "glass",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Woman surrounded by flowers, symbol of life and renewal.",
            image: "images/oeuvres/Verre/la femme fleurisante.jpg",
            thumbnail: "images/oeuvres/Verre/la femme fleurisante.jpg",
            featured: false
        },
        {
            id: 15,
            title: "The Flower",
            technique: "glass",
            year: 2023,
            dimensions: "25×30 cm",
            description: "Delicate floral composition on glass.",
            image: "images/oeuvres/Verre/la fleure.jpg",
            thumbnail: "images/oeuvres/Verre/la fleure.jpg",
            featured: false
        },
        {
            id: 16,
            title: "The Patient One",
            technique: "glass",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Contemplative figure painted on glass.",
            image: "images/oeuvres/Verre/la patiente.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente.jpg",
            featured: false
        },
        {
            id: 17,
            title: "The Patient One II",
            technique: "glass",
            year: 2023,
            dimensions: "30×40 cm",
            description: "Variation on the theme of patience.",
            image: "images/oeuvres/Verre/la patiente1.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente1.jpg",
            featured: false
        },
        {
            id: 18,
            title: "The Deer's Head",
            technique: "glass",
            year: 2023,
            dimensions: "35×45 cm",
            description: "Majestic portrait of a deer's head on glass.",
            image: "images/oeuvres/Verre/La tête du cerf.jpg",
            thumbnail: "images/oeuvres/Verre/La tête du cerf.jpg",
            featured: true
        },
        {
            id: 19,
            title: "The Old Man of the Forest",
            technique: "glass",
            year: 2023,
            dimensions: "40×50 cm",
            description: "Forest sage painted on glass, symbol of ancestral wisdom.",
            image: "images/oeuvres/Verre/le vieil du forêt.jpg",
            thumbnail: "images/oeuvres/Verre/le vieil du forêt.jpg",
            featured: false
        }
    ],

    ar: [
        // ===== معدن =====
        {
            id: 1,
            title: "المرأة الهندية التقليدية",
            technique: "معدن",
            year: 2023,
            dimensions: "30×40 سم",
            description: "نقش على المعدن يمثل امرأة هندية بزي تقليدي. يجسد هذا العمل أناقة وكرامة الأزياء التراثية.",
            image: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne traditionnl.jpg",
            featured: true
        },
        {
            id: 2,
            title: "المرأة الهندية",
            technique: "معدن",
            year: 2023,
            dimensions: "30×40 سم",
            description: "نقش على المعدن يمثل امرأة هندية.",
            image: "images/oeuvres/etain/l'indienne.jpg",
            thumbnail: "images/oeuvres/etain/l'indienne.jpg",
            featured: false
        },
        {
            id: 3,
            title: "ميلاد المسيح",
            technique: "معدن",
            year: 2023,
            dimensions: "35×45 سم",
            description: "مشهد ديني منقوش على المعدن يمثل المهد.",
            image: "images/oeuvres/etain/la naissance de Jesue.jpg",
            thumbnail: "images/oeuvres/etain/la naissance de Jesue.jpg",
            featured: false
        },
        {
            id: 4,
            title: "القناع البندقي",
            technique: "معدن",
            year: 2023,
            dimensions: "25×35 سم",
            description: "قناع كرنفال بندقي منقوش بدقة على المعدن.",
            image: "images/oeuvres/etain/masque-venitien.jpg",
            thumbnail: "images/oeuvres/etain/masque-venitien.jpg",
            featured: false
        },
        {
            id: 5,
            title: "الطبيعة البشرية",
            technique: "معدن",
            year: 2023,
            dimensions: "30×40 سم",
            description: "تأمل فني في الطبيعة البشرية منقوش على المعدن.",
            image: "images/oeuvres/etain/nature-humain.jpg",
            thumbnail: "images/oeuvres/etain/nature-humain.jpg",
            featured: false
        },
        {
            id: 6,
            title: "تأمل",
            technique: "معدن",
            year: 2023,
            dimensions: "30×40 سم",
            description: "عمل تأملي منقوش على المعدن.",
            image: "images/oeuvres/etain/réflexion.jpg",
            thumbnail: "images/oeuvres/etain/réflexion.jpg",
            featured: true
        },

        // ===== مختلط =====
        {
            id: 7,
            title: "نقش بالشمع",
            technique: "مختلط",
            year: 2023,
            dimensions: "25×30 سم",
            description: "تقنية مختلطة تجمع بين النقش وتأثيرات الشمع.",
            image: "images/oeuvres/Mixte/gravure-bougie.jpg",
            thumbnail: "images/oeuvres/Mixte/gravure-bougie.jpg",
            featured: false
        },
        {
            id: 8,
            title: "ساعة طاولة",
            technique: "مختلط",
            year: 2023,
            dimensions: "20×25 سم",
            description: "ساعة زخرفية بتقنية مختلطة.",
            image: "images/oeuvres/Mixte/horloge-chevet.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-chevet.jpg",
            featured: false
        },
        {
            id: 9,
            title: "ساعة معدنية",
            technique: "مختلط",
            year: 2023,
            dimensions: "25×30 سم",
            description: "ساعة حائط بتقنية مختلطة على المعدن.",
            image: "images/oeuvres/Mixte/horloge-metal.jpg",
            thumbnail: "images/oeuvres/Mixte/horloge-metal.jpg",
            featured: true
        },

        // ===== زجاج =====
        {
            id: 10,
            title: "الأيل",
            technique: "زجاج",
            year: 2023,
            dimensions: "40×50 سم",
            description: "أيل مهيب مرسوم على الزجاج بتفاصيل دقيقة.",
            image: "images/oeuvres/Verre/Cerf.jpg",
            thumbnail: "images/oeuvres/Verre/Cerf.jpg",
            featured: true
        },
        {
            id: 11,
            title: "اللقلق",
            technique: "زجاج",
            year: 2023,
            dimensions: "35×45 سم",
            description: "لقلق أنيق مرسوم على الزجاج.",
            image: "images/oeuvres/Verre/cigogne.jpg",
            thumbnail: "images/oeuvres/Verre/cigogne.jpg",
            featured: false
        },
        {
            id: 12,
            title: "كاماريا",
            technique: "زجاج",
            year: 2023,
            dimensions: "30×40 سم",
            description: "بورتريه شاعري لامرأة مرسوم على الزجاج.",
            image: "images/oeuvres/Verre/Kamaria.jpg",
            thumbnail: "images/oeuvres/Verre/Kamaria.jpg",
            featured: false
        },
        {
            id: 13,
            title: "الأنوثة",
            technique: "زجاج",
            year: 2023,
            dimensions: "30×40 سم",
            description: "احتفاء بالأنوثة من خلال الرسم على الزجاج.",
            image: "images/oeuvres/Verre/la fémenine.jpg",
            thumbnail: "images/oeuvres/Verre/la fémenine.jpg",
            featured: true
        },
        {
            id: 14,
            title: "المرأة المزهرة",
            technique: "زجاج",
            year: 2023,
            dimensions: "35×45 سم",
            description: "امرأة محاطة بالزهور، رمز الحياة والتجدد.",
            image: "images/oeuvres/Verre/la femme fleurisante.jpg",
            thumbnail: "images/oeuvres/Verre/la femme fleurisante.jpg",
            featured: false
        },
        {
            id: 15,
            title: "الزهرة",
            technique: "زجاج",
            year: 2023,
            dimensions: "25×30 سم",
            description: "تركيبة زهرية رقيقة على الزجاج.",
            image: "images/oeuvres/Verre/la fleure.jpg",
            thumbnail: "images/oeuvres/Verre/la fleure.jpg",
            featured: false
        },
        {
            id: 16,
            title: "الصابرة",
            technique: "زجاج",
            year: 2023,
            dimensions: "30×40 سم",
            description: "شخصية متأملة مرسومة على الزجاج.",
            image: "images/oeuvres/Verre/la patiente.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente.jpg",
            featured: false
        },
        {
            id: 17,
            title: "الصابرة الثانية",
            technique: "زجاج",
            year: 2023,
            dimensions: "30×40 سم",
            description: "تنويع على موضوع الصبر.",
            image: "images/oeuvres/Verre/la patiente1.jpg",
            thumbnail: "images/oeuvres/Verre/la patiente1.jpg",
            featured: false
        },
        {
            id: 18,
            title: "رأس الأيل",
            technique: "زجاج",
            year: 2023,
            dimensions: "35×45 سم",
            description: "صورة مهيبة لرأس أيل على الزجاج.",
            image: "images/oeuvres/Verre/La tête du cerf.jpg",
            thumbnail: "images/oeuvres/Verre/La tête du cerf.jpg",
            featured: true
        },
                {
            id: 19,
            title: "حكيم الغابة",
            technique: "زجاج",
            year: 2023,
            dimensions: "40×50 سم",
            description: "حكيم الغابة مرسوم على الزجاج، رمز الحكمة الأزلية.",
            image: "images/oeuvres/Verre/le vieil du forêt.jpg",
            thumbnail: "images/oeuvres/Verre/le vieil du forêt.jpg",
            featured: false
        }
    ]
};

// ✅ Rendre accessible globalement (au lieu de export)
window.artworks = artworks;

console.log('✅ Artworks chargées:', artworks);



