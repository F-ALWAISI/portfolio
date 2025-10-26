// js/data/artworks.js
// Export ES module contenant artworks localisés : fr / en / ar
// Techniques normalisées : "tin" | "glass" | "mixed"
// IMPORTANT: renommer physiquement les fichiers image pour correspondre aux chemins (minuscules, tirets, aucun accent)

export const artworks = {
  fr: [
    { id: 1, title: "L'indienne traditionnelle", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Portrait gravé sur étain représentant une femme en costume traditionnel.", image: "images/oeuvres/etain/l-indienne-traditionnel.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg", featured: true },
    { id: 2, title: "L'indienne", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Gravure détaillée sur étain.", image: "images/oeuvres/etain/l-indienne.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg", featured: false },
    { id: 3, title: "La naissance", technique: "tin", year: 2023, dimensions: "35×45 cm", description: "Scène religieuse gravée sur étain.", image: "images/oeuvres/etain/la-naissance-de-jesus.jpg", thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg", featured: false },
    { id: 4, title: "Masque vénitien", technique: "tin", year: 2023, dimensions: "25×35 cm", description: "Masque de carnaval finement gravé sur étain.", image: "images/oeuvres/etain/masque-venitien.jpg", thumbnail: "images/oeuvres/etain/thumbs/masque-venitien.jpg", featured: false },
    { id: 5, title: "Nature humaine", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Réflexion artistique sur la nature humaine.", image: "images/oeuvres/etain/nature-humaine.jpg", thumbnail: "images/oeuvres/etain/thumbs/nature-humaine.jpg", featured: false },

    // Mixed
    { id: 6, title: "L'appel", technique: "mixed", year: 2023, dimensions: "40×50 cm", description: "Technique mixte mêlant peinture et gravure.", image: "images/oeuvres/Mixte/l-appel.jpg", thumbnail: "images/oeuvres/Mixte/thumbs/l-appel.jpg", featured: true },
    { id: 7, title: "Homme à la colombe", technique: "mixed", year: 2023, dimensions: "30×40 cm", description: "Symbole de paix réalisé en techniques mixtes.", image: "images/oeuvres/Mixte/homme-colombe.jpg", thumbnail: "images/oeuvres/mixte/thumbs/homme-colombe.jpg", featured: false },

    // Glass
    { id: 8, title: "La féminine", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Portrait féminin peint sur verre.", image: "images/oeuvres/Verre/la-feminine.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg", featured: true },
    { id: 9, title: "La féminine II", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Variation autour du même visage.", image: "images/oeuvres/Verre/la-feminine-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-2.jpg", featured: false },
    { id: 10, title: "Femme et masque", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Liaison entre identité et masque.", image: "images/oeuvres/Verre/femme-masque.jpg", thumbnail: "images/oeuvres/verre/thumbs/femme-masque.jpg", featured: false },
    { id: 11, title: "La gracieuse", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Personnage élégant peint sur verre.", image: "images/oeuvres/Verre/la-gracieuse.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-gracieuse.jpg", featured: false },
    { id: 12, title: "La féminine III", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Nouvelle interprétation.", image: "images/oeuvres/Verre/la-feminine-3.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-3.jpg", featured: false },
    { id: 13, title: "La féminine (petite)", technique: "glass", year: 2023, dimensions: "20×25 cm", description: "Étude au format réduit.", image: "images/oeuvres/Verre/la-feminine-petite.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-petite.jpg", featured: false },
    { id: 14, title: "La femme fleurissante", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Femme entourée de fleurs, symbole de renouveau.", image: "images/oeuvres/Verre/la-femme-fleurissante.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg", featured: false },
    { id: 15, title: "La fleur", technique: "glass", year: 2023, dimensions: "25×30 cm", description: "Composition florale délicate sur verre.", image: "images/oeuvres/Verre/la-fleur.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg", featured: false },
    { id: 16, title: "La patiente", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Personnage méditatif.", image: "images/oeuvres/Verre/la-patiente.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg", featured: false },
    { id: 17, title: "La patiente II", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Variation autour du thème de la patience.", image: "images/oeuvres/Verre/la-patiente-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg", featured: false },
    { id: 18, title: "Tête de cerf", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Tête de cerf peinte sur verre.", image: "images/oeuvres/Verre/tete-cerf.jpg", thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg", featured: true },
    { id: 19, title: "Sage de la forêt", technique: "glass", year: 2023, dimensions: "40×50 cm", description: "Le sage de la forêt.", image: "images/oeuvres/Verre/sage-foret.jpg", thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg", featured: false }
  ],

  en: [
    // Same images, English texts
    { id: 1, title: "Traditional Indian Woman", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Engraved tin portrait of a woman wearing traditional attire.", image: "images/oeuvres/etain/l-indienne-traditionnel.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg", featured: true },
    { id: 2, title: "The Indian Woman", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Detailed tin engraving.", image: "images/oeuvres/etain/l-indienne.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg", featured: false },
    { id: 3, title: "The Nativity", technique: "tin", year: 2023, dimensions: "35×45 cm", description: "Religious nativity scene on tin.", image: "images/oeuvres/etain/la-naissance-de-jesus.jpg", thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg", featured: false },
    { id: 4, title: "Venetian Mask", technique: "tin", year: 2023, dimensions: "25×35 cm", description: "Venetian carnival mask engraved on tin.", image: "images/oeuvres/etain/masque-venitien.jpg", thumbnail: "images/oeuvres/etain/thumbs/masque-venitien.jpg", featured: false },
    { id: 5, title: "Human Nature", technique: "tin", year: 2023, dimensions: "30×40 cm", description: "Artistic reflection on human nature.", image: "images/oeuvres/etain/nature-humaine.jpg", thumbnail: "images/oeuvres/etain/thumbs/nature-humaine.jpg", featured: false },

    { id: 6, title: "The Call", technique: "mixed", year: 2023, dimensions: "40×50 cm", description: "Mixed technique blending paint and engraving.", image: "images/oeuvres/Mixte/l-appel.jpg", thumbnail: "images/oeuvres/mixte/thumbs/l-appel.jpg", featured: true },
    { id: 7, title: "Man with Dove", technique: "mixed", year: 2023, dimensions: "30×40 cm", description: "Symbol of peace using mixed media.", image: "images/oeuvres/Mixte/homme-colombe.jpg", thumbnail: "images/oeuvres/mixte/thumbs/homme-colombe.jpg", featured: false },

    { id: 8, title: "The Feminine", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Female portrait painted on glass.", image: "images/oeuvres/Verre/la-feminine.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg", featured: true },
    { id: 9, title: "The Feminine II", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Variation around a face.", image: "images/oeuvres/Verre/la-feminine-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-2.jpg", featured: false },
    { id: 10, title: "Woman and Mask", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Identity and mask connection.", image: "images/oeuvres/Verre/femme-masque.jpg", thumbnail: "images/oeuvres/verre/thumbs/femme-masque.jpg", featured: false },
    { id: 11, title: "The Graceful", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Elegant character painted on glass.", image: "images/oeuvres/Verre/la-gracieuse.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-gracieuse.jpg", featured: false },
    { id: 12, title: "The Feminine III", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "New interpretation.", image: "images/oeuvres/Verre/la-feminine-3.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-3.jpg", featured: false },
    { id: 13, title: "The Feminine (small)", technique: "glass", year: 2023, dimensions: "20×25 cm", description: "Study in reduced format.", image: "images/oeuvres/Verre/la-feminine-petite.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-petite.jpg", featured: false },
    { id: 14, title: "Blossoming Woman", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Woman surrounded by flowers, symbol of renewal.", image: "images/oeuvres/Verre/la-femme-fleurissante.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg", featured: false },
    { id: 15, title: "The Flower", technique: "glass", year: 2023, dimensions: "25×30 cm", description: "Delicate floral composition on glass.", image: "images/oeuvres/Verre/la-fleur.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg", featured: false },
    { id: 16, title: "The Patient", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Meditative figure.", image: "images/oeuvres/Verre/la-patiente.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg", featured: false },
    { id: 17, title: "The Patient II", technique: "glass", year: 2023, dimensions: "30×40 cm", description: "Variation on patience.", image: "images/oeuvres/Verre/la-patiente-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg", featured: false },
    { id: 18, title: "Deer Head", technique: "glass", year: 2023, dimensions: "35×45 cm", description: "Impressive deer head painted on glass.", image: "images/oeuvres/Verre/tete-cerf.jpg", thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg", featured: true },
    { id: 19, title: "Forest Sage", technique: "glass", year: 2023, dimensions: "40×50 cm", description: "Forest sage, symbol of ancestral wisdom.", image: "images/oeuvres/Verre/sage-foret.jpg", thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg", featured: false }
  ],

  ar: [
    // Arabic texts — same images
    { id: 1, title: "المرأة الهندية التقليدية", technique: "tin", year: 2023, dimensions: "30×40 سم", description: "صورة منقوشة على القصدير تمثل امرأة بزي تقليدي.", image: "images/oeuvres/etain/l-indienne-traditionnel.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne-traditionnel.jpg", featured: true },
    { id: 2, title: "المرأة الهندية", technique: "tin", year: 2023, dimensions: "30×40 سم", description: "نقش مفصل على القصدير.", image: "images/oeuvres/etain/l-indienne.jpg", thumbnail: "images/oeuvres/etain/thumbs/l-indienne.jpg", featured: false },
    { id: 3, title: "ميلاد المسيح", technique: "tin", year: 2023, dimensions: "35×45 سم", description: "مشهد ديني منقوش على القصدير.", image: "images/oeuvres/etain/la-naissance-de-jesus.jpg", thumbnail: "images/oeuvres/etain/thumbs/la-naissance-de-jesus.jpg", featured: false },
    { id: 4, title: "قناع البندقية", technique: "tin", year: 2023, dimensions: "25×35 سم", description: "قناع كرنفال منقوش على القصدير.", image: "images/oeuvres/etain/masque-venitien.jpg", thumbnail: "images/oeuvres/etain/thumbs/masque-venitien.jpg", featured: false },
    { id: 5, title: "الطبيعة البشرية", technique: "tin", year: 2023, dimensions: "30×40 سم", description: "تأمل فني في الطبيعة البشرية.", image: "images/oeuvres/etain/nature-humaine.jpg", thumbnail: "images/oeuvres/etain/thumbs/nature-humaine.jpg", featured: false },

    { id: 6, title: "الدعوة", technique: "mixed", year: 2023, dimensions: "40×50 سم", description: "تقنية مختلطة تمزج الرسم والنقش.", image: "images/oeuvres/Mixte/l-appel.jpg", thumbnail: "images/oeuvres/mixte/thumbs/l-appel.jpg", featured: true },
    { id: 7, title: "رجل مع حمامة", technique: "mixed", year: 2023, dimensions: "30×40 سم", description: "رمز السلام بتقنيات متعددة.", image: "images/oeuvres/Mixte/homme-colombe.jpg", thumbnail: "images/oeuvres/mixte/thumbs/homme-colombe.jpg", featured: false },

    { id: 8, title: "الأنثوية", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "صورة أنثوية مرسومة على الزجاج.", image: "images/oeuvres/Verre/la-feminine.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine.jpg", featured: true },
    { id: 9, title: "الأنثوية II", technique: "glass", year: 2023, dimensions: "35×45 سم", description: "تباين حول الوجه.", image: "images/oeuvres/Verre/la-feminine-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-2.jpg", featured: false },
    { id: 10, title: "امرأة وقناع", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "العلاقة بين الهوية والقناع.", image: "images/oeuvres/Verre/femme-masque.jpg", thumbnail: "images/oeuvres/verre/thumbs/femme-masque.jpg", featured: false },
    { id: 11, title: "الرشيقة", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "شخصية أنيقة مرسومة على الزجاج.", image: "images/oeuvres/Verre/la-gracieuse.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-gracieuse.jpg", featured: false },
    { id: 12, title: "الأنثوية III", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "تفسير جديد.", image: "images/oeuvres/Verre/la-feminine-3.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-3.jpg", featured: false },
    { id: 13, title: "الأنثوية (صغيرة)", technique: "glass", year: 2023, dimensions: "20×25 سم", description: "دراسة بحجم صغير.", image: "images/oeuvres/Verre/la-feminine-petite.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-feminine-petite.jpg", featured: false },
    { id: 14, title: "المرأة المزدهرة", technique: "glass", year: 2023, dimensions: "35×45 سم", description: "امرأة محاطة بالزهور.", image: "images/oeuvres/Verre/la-femme-fleurissante.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-femme-fleurissante.jpg", featured: false },
    { id: 15, title: "الزهرة", technique: "glass", year: 2023, dimensions: "25×30 سم", description: "تركيب زهري دقيق على الزجاج.", image: "images/oeuvres/Verre/la-fleur.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-fleur.jpg", featured: false },
    { id: 16, title: "الصبورة", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "شخصية تأملية.", image: "images/oeuvres/Verre/la-patiente.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente.jpg", featured: false },
    { id: 17, title: "الصبورة II", technique: "glass", year: 2023, dimensions: "30×40 سم", description: "تنويع حول موضوع الصبر.", image: "images/oeuvres/Verre/la-patiente-2.jpg", thumbnail: "images/oeuvres/verre/thumbs/la-patiente-2.jpg", featured: false },
    { id: 18, title: "رأس الغزال", technique: "glass", year: 2023, dimensions: "35×45 سم", description: "رأس غزال مرسوم على الزجاج.", image: "images/oeuvres/Verre/tete-cerf.jpg", thumbnail: "images/oeuvres/verre/thumbs/tete-cerf.jpg", featured: true },
    { id: 19, title: "حكيم الغابة", technique: "glass", year: 2023, dimensions: "40×50 سم", description: "حكيم الغابة رمز الحكمة.", image: "images/oeuvres/Verre/sage-foret.jpg", thumbnail: "images/oeuvres/verre/thumbs/sage-foret.jpg", featured: false }
  ]
};

// Also expose globally if someone doesn't import (backwards compatibility)
if (typeof window !== 'undefined') {
  window.artworks = artworks;
}

export default artworks;

S
