// js/data/artworks.js
// Artworks data (FR / EN / AR)
// Techniques normalisées : "tin", "mixed", "glass"
// Filenames sans espaces/apostrophes/accents (renommer les fichiers en conséquence)

// Export ES module pour import { artworks } from './artworks.js'
export const artworks = {
  fr: [
    // ===== ÉTAIN (tin) =====
    {
      id: 1,
      title: "L'indienne traditionnelle",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Portrait gravé sur étain représentant une femme indienne en tenue traditionnelle. Cette œuvre capture l'élégance et la dignité des costumes ancestraux.",
      image: "images/oeuvres/etain/l-indienne-traditionnel.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg",
      featured: true
    },
    {
      id: 2,
      title: "L'indienne",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Gravure sur étain représentant une femme indienne.",
      image: "images/oeuvres/etain/l-indienne.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg",
      featured: false
    },
    {
      id: 3,
      title: "La naissance de Jésus",
      technique: "tin",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Scène religieuse gravée sur étain représentant la nativité.",
      image: "images/oeuvres/etain/la-naissance-de-jesus.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Masque vénitien",
      technique: "tin",
      year: 2023,
      dimensions: "25×35 cm",
      description: "Masque de carnaval vénitien gravé sur étain avec finesse.",
      image: "images/oeuvres/etain/masque-venitien.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/masque-venitien.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Nature humaine",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Réflexion artistique sur la nature humaine gravée sur étain.",
      image: "images/oeuvres/etain/nature-humaine.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/nature-humaine.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Réflexion",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Œuvre contemplative gravée sur étain.",
      image: "images/oeuvres/etain/reflexion.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/reflexion.jpg",
      featured: true
    },

    // ===== MIXTE (mixed) =====
    {
      id: 7,
      title: "Gravure à la bougie",
      technique: "mixed",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Technique mixte combinant gravure et effets de cire.",
      image: "images/oeuvres/mixte/gravure-bougie.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/gravure-bougie.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Horloge de chevet",
      technique: "mixed",
      year: 2023,
      dimensions: "20×25 cm",
      description: "Horloge décorative en technique mixte.",
      image: "images/oeuvres/mixte/horloge-chevet.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/horloge-chevet.jpg",
      featured: false
    },
    {
      id: 9,
      title: "Horloge métal",
      technique: "mixed",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Horloge murale réalisée en techniques mixtes sur métal.",
      image: "images/oeuvres/mixte/horloge-metal.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/horloge-metal.jpg",
      featured: true
    },

    // ===== VERRE (glass) =====
    {
      id: 10,
      title: "Cerf",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 cm",
      description: "Cerf majestueux peint sur verre avec des détails fins.",
      image: "images/oeuvres/verre/cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cerf.jpg",
      featured: true
    },
    {
      id: 11,
      title: "Cigogne",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Cigogne élégante peinte sur verre.",
      image: "images/oeuvres/verre/cigogne.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cigogne.jpg",
      featured: false
    },
    {
      id: 12,
      title: "Kamaria",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Portrait poétique d'une femme peint sur verre.",
      image: "images/oeuvres/verre/kamaria.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/kamaria.jpg",
      featured: false
    },
    {
      id: 13,
      title: "La féminine",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Célébration de la féminité via la peinture sur verre.",
      image: "images/oeuvres/verre/la-feminine.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg",
      featured: true
    },
    {
      id: 14,
      title: "La femme fleurissante",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Femme entourée de fleurs, symbole de vie et de renouveau.",
      image: "images/oeuvres/verre/la-femme-fleurissante.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg",
      featured: false
    },
    {
      id: 15,
      title: "La fleur",
      technique: "glass",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Composition florale délicate sur verre.",
      image: "images/oeuvres/verre/la-fleur.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg",
      featured: false
    },
    {
      id: 16,
      title: "La patiente",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Personnage méditatif peint sur verre.",
      image: "images/oeuvres/verre/la-patiente.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg",
      featured: false
    },
    {
      id: 17,
      title: "La patiente II",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Variation autour du thème de la patience.",
      image: "images/oeuvres/verre/la-patiente-2.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg",
      featured: false
    },
    {
      id: 18,
      title: "Tête de cerf",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Représentation impressionnante de la tête d'un cerf sur verre.",
      image: "images/oeuvres/verre/tete-cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg",
      featured: true
    },
    {
      id: 19,
      title: "Sage de la forêt",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 cm",
      description: "Le sage de la forêt peint sur verre, symbole de sagesse ancestrale.",
      image: "images/oeuvres/verre/sage-foret.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg",
      featured: false
    }
  ],

  en: [
    // English localizations (same technique keys)
    {
      id: 1,
      title: "Traditional Indian Woman",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Engraved tin portrait of an Indian woman in traditional attire, capturing the elegance of ancestral costumes.",
      image: "images/oeuvres/etain/l-indienne-traditionnel.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg",
      featured: true
    },
    {
      id: 2,
      title: "The Indian Woman",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Tin engraving representing an Indian woman.",
      image: "images/oeuvres/etain/l-indienne.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg",
      featured: false
    },
    {
      id: 3,
      title: "The Nativity",
      technique: "tin",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Religious scene engraved on tin representing the nativity.",
      image: "images/oeuvres/etain/la-naissance-de-jesus.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg",
      featured: false
    },
    // ... (pour éviter duplication inutile, on reprend les mêmes fichiers images/ids que fr)
    {
      id: 4,
      title: "Venetian Mask",
      technique: "tin",
      year: 2023,
      dimensions: "25×35 cm",
      description: "Venetian carnival mask finely engraved on tin.",
      image: "images/oeuvres/etain/masque-venitien.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/masque-venitien.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Human Nature",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Artistic reflection on human nature engraved on tin.",
      image: "images/oeuvres/etain/nature-humaine.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/nature-humaine.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Reflection",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Contemplative work engraved on tin.",
      image: "images/oeuvres/etain/reflexion.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/reflexion.jpg",
      featured: true
    },

    {
      id: 7,
      title: "Candle Engraving",
      technique: "mixed",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Mixed technique combining engraving and wax effects.",
      image: "images/oeuvres/mixte/gravure-bougie.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/gravure-bougie.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Bedside Clock",
      technique: "mixed",
      year: 2023,
      dimensions: "20×25 cm",
      description: "Decorative clock in mixed technique.",
      image: "images/oeuvres/mixte/horloge-chevet.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/horloge-chevet.jpg",
      featured: false
    },
    {
      id: 9,
      title: "Metal Clock",
      technique: "mixed",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Wall clock made with mixed techniques on metal.",
      image: "images/oeuvres/mixte/horloge-metal.jpg",
      thumbnail: "images/oeuvres/mixte/thumbs/horloge-metal.jpg",
      featured: true
    },

    // Glass works (EN)
    {
      id: 10,
      title: "Stag",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 cm",
      description: "Majestic stag painted on glass with fine details.",
      image: "images/oeuvres/verre/cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cerf.jpg",
      featured: true
    },
    {
      id: 11,
      title: "Stork",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Elegant stork painted on glass.",
      image: "images/oeuvres/verre/cigogne.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cigogne.jpg",
      featured: false
    },
    {
      id: 12,
      title: "Kamaria",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Poetic portrait of a woman painted on glass.",
      image: "images/oeuvres/verre/kamaria.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/kamaria.jpg",
      featured: false
    },
    {
      id: 13,
      title: "Femininity",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Celebration of femininity through glass painting.",
      image: "images/oeuvres/verre/la-feminine.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg",
      featured: true
    },
    {
      id: 14,
      title: "The Flowering Woman",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Woman surrounded by flowers, a symbol of life and renewal.",
      image: "images/oeuvres/verre/la-femme-fleurissante.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg",
      featured: false
    },
    {
      id: 15,
      title: "The Flower",
      technique: "glass",
      year: 2023,
      dimensions: "25×30 cm",
      description: "Delicate floral composition on glass.",
      image: "images/oeuvres/verre/la-fleur.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg",
      featured: false
    },
    {
      id: 16,
      title: "The Patient One",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Reflective character painted on glass.",
      image: "images/oeuvres/verre/la-patiente.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg",
      featured: false
    },
    {
      id: 17,
      title: "The Patient One II",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 cm",
      description: "Variation on the theme of patience.",
      image: "images/oeuvres/verre/la-patiente-2.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg",
      featured: false
    },
    {
      id: 18,
      title: "Deer Head",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 cm",
      description: "Impressive depiction of a deer's head on glass.",
      image: "images/oeuvres/verre/tete-cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg",
      featured: true
    },
    {
      id: 19,
      title: "Forest Sage",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 cm",
      description: "Forest sage painted on glass, symbol of ancient wisdom.",
      image: "images/oeuvres/verre/sage-foret.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg",
      featured: false
    }
  ],

  ar: [
    // Arabic localizations (titles/descriptions in Arabic)
    {
      id: 1,
      title: "الهنودية التقليدية",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 سم",
      description: "بورتريه محفور على القصدير يمثل امرأة هندية باللباس التقليدي.",
      image: "images/oeuvres/etain/l-indienne-traditionnel.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg",
      featured: true
    },
    {
      id: 2,
      title: "الهنودِية",
      technique: "tin",
      year: 2023,
      dimensions: "30×40 سم",
      description: "نقش على القصدير يمثل امرأة هندية.",
      image: "images/oeuvres/etain/l-indienne.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg",
      featured: false
    },
    {
      id: 3,
      title: "ميلاد المسيح",
      technique: "tin",
      year: 2023,
      dimensions: "35×45 سم",
      description: "مشهد ديني محفور على القصدير يمثل الميلاد.",
      image: "images/oeuvres/etain/la-naissance-de-jesus.jpg",
      thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg",
      featured: false
    },
    // ... autres entrées arabe reprenant mêmes fichiers images
    {
      id: 10,
      title: "الأيل",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 سم",
      description: "أيل مهيب مرسوم على الزجاج بتفاصيل دقيقة.",
      image: "images/oeuvres/verre/cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cerf.jpg",
      featured: true
    },
    {
      id: 11,
      title: "اللقلق",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 سم",
      description: "لقلق أنيق مرسوم على الزجاج.",
      image: "images/oeuvres/verre/cigogne.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/cigogne.jpg",
      featured: false
    },
    {
      id: 12,
      title: "كاماريا",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 سم",
      description: "بورتريه شاعري لامرأة مرسوم على الزجاج.",
      image: "images/oeuvres/verre/kamaria.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/kamaria.jpg",
      featured: false
    },
    {
      id: 13,
      title: "الأنوثة",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 سم",
      description: "احتفاء بالأنوثة من خلال الرسم على الزجاج.",
      image: "images/oeuvres/verre/la-feminine.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg",
      featured: true
    },
    {
      id: 14,
      title: "المرأة المزهرة",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 سم",
      description: "امرأة محاطة بالزهور، رمز الحياة والتجدد.",
      image: "images/oeuvres/verre/la-femme-fleurissante.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg",
      featured: false
    },
    {
      id: 15,
      title: "الزهرة",
      technique: "glass",
      year: 2023,
      dimensions: "25×30 سم",
      description: "تركيبة زهرية رقيقة على الزجاج.",
      image: "images/oeuvres/verre/la-fleur.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg",
      featured: false
    },
    {
      id: 16,
      title: "الصابرة",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 سم",
      description: "شخصية متأملة مرسومة على الزجاج.",
      image: "images/oeuvres/verre/la-patiente.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg",
      featured: false
    },
    {
      id: 17,
      title: "الصابرة الثانية",
      technique: "glass",
      year: 2023,
      dimensions: "30×40 سم",
      description: "تنويع على موضوع الصبر.",
      image: "images/oeuvres/verre/la-patiente-2.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg",
      featured: false
    },
    {
      id: 18,
      title: "رأس الأيل",
      technique: "glass",
      year: 2023,
      dimensions: "35×45 سم",
      description: "صورة مهيبة لرأس أيل على الزجاج.",
      image: "images/oeuvres/verre/tete-cerf.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg",
      featured: true
    },
    {
      id: 19,
      title: "حكيم الغابة",
      technique: "glass",
      year: 2023,
      dimensions: "40×50 سم",
      description: "حكيم الغابة مرسوم على الزجاج، رمز الحكمة الأزلية.",
      image: "images/oeuvres/verre/sage-foret.jpg",
      thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg",
      featured: false
    }
  ]
};

// Compatibilité (si tu veux toujours accéder via window)
if (typeof window !== 'undefined') {
  window.artworks = artworks;
}

console.log('✅ Artworks loaded (fr/en/ar) — total FR:', artworks.fr.length, 'EN:', artworks.en.length, 'AR:', artworks.ar.length);
