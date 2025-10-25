// 🎨 CONTACT PAGE - JAVASCRIPT

const contactTranslations = {
    fr: {
        hero_title: "Prenons Contact",
        hero_subtitle: "Partagez votre vision, vos questions ou votre projet artistique",
        methods_title: "Coordonnées",
        email_label: "Email",
        phone_label: "Téléphone",
        social_title: "Suivez-moi",
        response_time: "Je réponds généralement sous 24-48 heures",
        form_title: "Envoyez-moi un message",
        form_subtitle: "Remplissez le formulaire ci-dessous et je vous répondrai dans les plus brefs délais",
        firstname_label: "Prénom",
        lastname_label: "Nom",
        email_field: "Email",
        phone_field: "Téléphone (optionnel)",
        subject_label: "Sujet de votre demande",
        subject_placeholder: "Choisir un sujet...",
        subject_information: "Demande d'information", // ✅ AJOUTÉ
        subject_commission: "Œuvre sur commande",
        subject_purchase: "Achat d'une œuvre",
        subject_exhibition: "Collaboration / Exposition",
        subject_press: "Demande presse",
        subject_other: "Autre demande",
        message_label: "Votre message",
        message_placeholder: "Décrivez votre projet...", // ✅ AJOUTÉ
        rgpd_label: "J'accepte que mes données soient utilisées pour me recontacter", // ✅ AJOUTÉ
        submit_btn: "Envoyer le message", // ✅ AJOUTÉ
        success: "✅ Message envoyé avec succès ! Je vous répondrai rapidement.", // ✅ AJOUTÉ
        error_required: "❌ Veuillez remplir tous les champs obligatoires", // ✅ AJOUTÉ
        error_email: "❌ Veuillez entrer un email valide", // ✅ AJOUTÉ
        error_rgpd: "❌ Veuillez accepter la politique de confidentialité" // ✅ AJOUTÉ
    },
    en: {
        hero_title: "Get in Touch",
        hero_subtitle: "Share your vision, questions, or artistic project",
        methods_title: "Contact Information",
        email_label: "Email",
        phone_label: "Phone",
        social_title: "Follow Me",
        response_time: "I typically respond within 24-48 hours",
        form_title: "Send Me a Message",
        form_subtitle: "Fill out the form below and I will get back to you as soon as possible",
        firstname_label: "First Name",
        lastname_label: "Last Name",
        email_field: "Email",
        phone_field: "Phone (optional)",
        subject_label: "Subject of Your Request",
        subject_placeholder: "Choose a subject...",
        subject_information: "Information request", // ✅ AJOUTÉ
        subject_commission: "Commission work", // ✅ AJOUTÉ
        subject_purchase: "Purchase an artwork", // ✅ AJOUTÉ
        subject_exhibition: "Collaboration / Exhibition", // ✅ AJOUTÉ
        subject_press: "Press inquiry", // ✅ AJOUTÉ
        subject_other: "Other request", // ✅ AJOUTÉ
        message_label: "Your message", // ✅ AJOUTÉ
        message_placeholder: "Describe your project...", // ✅ AJOUTÉ
        rgpd_label: "I agree that my data will be used to contact me", // ✅ AJOUTÉ
        submit_btn: "Send message", // ✅ AJOUTÉ
        success: "✅ Message sent successfully! I will reply soon.", // ✅ AJOUTÉ
        error_required: "❌ Please fill in all required fields", // ✅ AJOUTÉ
        error_email: "❌ Please enter a valid email", // ✅ AJOUTÉ
        error_rgpd: "❌ Please accept the privacy policy" // ✅ AJOUTÉ
    },
    ar: {
        hero_title: "تواصل معي",
        hero_subtitle: "شارك رؤيتك أو أسئلتك أو مشروعك الفني",
        methods_title: "معلومات الاتصال",
        email_label: "البريد الإلكتروني",
        phone_label: "الهاتف",
        social_title: "تابعني",
        response_time: "عادة ما أرد خلال 24-48 ساعة",
        form_title: "أرسل لي رسالة",
        form_subtitle: "املأ النموذج أدناه وسأرد عليك في أقرب وقت ممكن",
        firstname_label: "الاسم الأول",
        lastname_label: "اسم العائلة",
        email_field: "البريد الإلكتروني",
        phone_field: "الهاتف (اختياري)",
        subject_label: "موضوع طلبك",
        subject_placeholder: "اختر موضوعاً...",
        subject_information: "طلب معلومات", // ✅ AJOUTÉ
        subject_commission: "عمل حسب الطلب", // ✅ AJOUTÉ
        subject_purchase: "شراء عمل فني", // ✅ AJOUTÉ
        subject_exhibition: "تعاون / معرض", // ✅ AJOUTÉ
        subject_press: "استفسار صحفي", // ✅ AJOUTÉ
        subject_other: "طلب آخر", // ✅ AJOUTÉ
        message_label: "رسالتك", // ✅ AJOUTÉ
        message_placeholder: "صف مشروعك...", // ✅ AJOUTÉ
        rgpd_label: "أوافق على استخدام بياناتي للاتصال بي", // ✅ AJOUTÉ
        submit_btn: "إرسال الرسالة", // ✅ AJOUTÉ
        success: "✅ تم إرسال الرسالة بنجاح! سأرد عليك قريباً.", // ✅ AJOUTÉ
        error_required: "❌ يرجى ملء جميع الحقول المطلوبة", // ✅ AJOUTÉ
        error_email: "❌ يرجى إدخال بريد إلكتروني صالح", // ✅ AJOUTÉ
        error_rgpd: "❌ يرجى قبول سياسة الخصوصية" // ✅ AJOUTÉ
    }
};

function translateContactPage(lang) {
    const t = contactTranslations[lang];
    if (!t) {
        console.error(`❌ Langue ${lang} non trouvée`);
        return;
    }

    setText('.hero-title', t.hero_title);
    setText('.hero-subtitle', t.hero_subtitle);

    setText('.contact-methods .section-subtitle', t.methods_title);
    setText('.method-item:nth-child(1) .method-label', t.email_label);
    setText('.method-item:nth-child(2) .method-label', t.phone_label);

    setText('.social-section .section-subtitle', t.social_title);
    setText('.response-info p', t.response_time);

    setText('.form-title', t.form_title);
    setText('.form-subtitle', t.form_subtitle);
    setText('label[for="prenom"]', t.firstname_label);
    setText('label[for="nom"]', t.lastname_label);
    setText('label[for="email"]', t.email_field);
    setText('label[for="telephone"]', t.phone_field);
    setText('label[for="sujet"]', t.subject_label);
    setText('label[for="message"]', t.message_label);

    const subjectSelect = document.getElementById('sujet');
    if (subjectSelect) {
        subjectSelect.options[0].text = t.subject_placeholder;
        subjectSelect.options[1].text = t.subject_information;
        subjectSelect.options[2].text = t.subject_commission;
        subjectSelect.options[3].text = t.subject_purchase;
        subjectSelect.options[4].text = t.subject_exhibition;
        subjectSelect.options[5].text = t.subject_press;
        subjectSelect.options[6].text = t.subject_other;
    }

    const messageField = document.getElementById('message');
    if (messageField) {
        messageField.placeholder = t.message_placeholder;
    }

    setText('label[for="rgpd"]', t.rgpd_label);

    const submitBtn = document.querySelector('.btn-submit span');
    if (submitBtn) submitBtn.textContent = t.submit_btn;
}

function setText(selector, text) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = text;
    }
}

function fillFormFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    const subject = urlParams.get('subject');

    const messageField = document.getElementById('message');
    if (messageField && message) {
        messageField.value = decodeURIComponent(message);

        const charCount = document.getElementById('charCount');
        if (charCount) {
            charCount.textContent = messageField.value.length;
        }
    }

    const subjectField = document.getElementById('sujet');
    if (subjectField && subject) {
        subjectField.value = 'information';
    }

    if (message || subject) {
        window.history.replaceState({}, document.title, window.location.pathname);
    }
}

function initCharCounter() {
    const messageField = document.getElementById('message');
    const charCount = document.getElementById('charCount');

    if (messageField && charCount) {
        messageField.addEventListener('input', () => {
            const length = messageField.value.length;
            charCount.textContent = length;

            if (length > 900) {
                charCount.parentElement.style.color = '#e74c3c';
            } else {
                charCount.parentElement.style.color = '';
            }
        });
    }
}

function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    let isValid = true;

    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
        }
    }

    if (!isValid) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }

    return isValid;
}

function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const lang = localStorage.getItem('selectedLanguage') || 'fr';
        const t = contactTranslations[lang];

// ═══════════════════════════════════════════════════
// VALIDATION DES CHAMPS
// ═══════════════════════════════════════════════════
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        // Vérification RGPD
        const rgpdCheckbox = document.getElementById('rgpd');
        if (!rgpdCheckbox.checked) {
            showFormMessage(t.error_rgpd, 'error');
            return;
        }

        if (!isValid) {
            showFormMessage(t.error_required, 'error');
            return;
        }

        // ═══════════════════════════════════════════════════
        // ENVOI AVEC EMAILJS
        // ═══════════════════════════════════════════════════
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.querySelector('span').textContent;

        submitBtn.disabled = true;
        submitBtn.querySelector('span').textContent = '⏳ Envoi en cours...';

        try {
            const response = await emailjs.sendForm(
                'service_1yoy2n5',
                'template_is6i7br',
                form
            );

            showFormMessage(t.success || '✅ Message envoyé avec succès !', 'success');

            // Réinitialiser le formulaire
            form.reset();
            document.getElementById('charCount').textContent = '0';
            inputs.forEach(input => input.classList.remove('error'));

        } catch (error) {
            console.error('❌ Erreur EmailJS:', error);
            showFormMessage(t.error_send || '❌ Erreur lors de l\'envoi. Réessayez.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.querySelector('span').textContent = originalText;
        }
    });
}

function initFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });

        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

function validateField(field) {
    let isValid = true;

    if (field.hasAttribute('required') && !field.value.trim()) {
        isValid = false;
    } else if (field.type === 'email' && field.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value)) {
            isValid = false;
        }
    }

    if (!isValid) {
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }

    return isValid;
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialiser animations
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });
    }

    // Attendre que main.js charge tout
    setTimeout(() => {
        const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
        translateContactPage(savedLang);
        fillFormFromURL();
    }, 300);

    // Initialiser fonctionnalités
    initCharCounter();
    initContactForm();
    initFormValidation();

    // Écouter les changements de langue
    window.addEventListener('languageChanged', (e) => {
        translateContactPage(e.detail.language);
    });
});

