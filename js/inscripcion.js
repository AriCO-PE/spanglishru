
const langSelect = document.getElementById('lang-select');

const translations = {
    es: {
        individual_title: "Clases de Español Individual",
        card20_title: "20 clases al mes",
        card20_duration: "Duración: 1h 20m cada clase",
        card20_desc: "Ideal para avanzar rápido y dominar el idioma.",
        card20_feat1: "Libros de aprendizaje y vocabulario",
        card20_feat2: "Conversación con nativos",
        card20_feat3: "Enfocado en prácticas reales",
        card20_reco: "Recomendado: para quienes quieren resultados intensivos.",
        card12_title: "12 clases al mes",
        card12_duration: "Duración: 1h 20m cada clase",
        card12_desc: "Balance perfecto entre intensidad y tiempo disponible.",
        card12_feat1: "Libros de aprendizaje y vocabulario",
        card12_feat2: "Conversación con nativos",
        card12_feat3: "Enfocado en prácticas reales",
        card12_reco: "Recomendado: para estudiantes regulares que quieren avanzar de forma constante.",
        card8_title: "8 clases al mes",
        card8_duration: "Duración: 1h 20m cada clase",
        card8_desc: "Opción más ligera para mantener el idioma activo.",
        card8_feat1: "Libros de aprendizaje y vocabulario",
        card8_feat2: "Conversación con nativos",
        card8_feat3: "Enfocado en prácticas reales",
        card8_reco: "Recomendado: para quienes quieren practicar de manera flexible.",
        group_title: "Clases Grupales de Español",
        group_card_title: "5 alumnos",
        group_card_duration: "20 clases al mes",
        group_card_length: "Duración: 1h 20m cada clase",
        group_card_desc: "Clases grupales para mejorar la interacción y conversación.",
        group_card_feat1: "Libros de aprendizaje y vocabulario",
        group_card_feat2: "Conversación con nativos",
        group_card_feat3: "Enfocado en prácticas reales",
        group_card_reco: "Recomendado: para quienes disfrutan aprender en grupo y compartir experiencias.",
        contact_btn: "Contáctanos ya"
        
    },
    en: {
        individual_title: "Individual Spanish Classes",
        card20_title: "20 classes per month",
        card20_duration: "Duration: 1h 20m per class",
        card20_desc: "Ideal to advance quickly and master the language.",
        card20_feat1: "Learning books and vocabulary",
        card20_feat2: "Conversation with natives",
        card20_feat3: "Focused on practical exercises",
        card20_reco: "Recommended: for those who want intensive results.",
        card12_title: "12 classes per month",
        card12_duration: "Duration: 1h 20m per class",
        card12_desc: "Perfect balance between intensity and available time.",
        card12_feat1: "Learning books and vocabulary",
        card12_feat2: "Conversation with natives",
        card12_feat3: "Focused on practical exercises",
        card12_reco: "Recommended: for regular students who want steady progress.",
        card8_title: "8 classes per month",
        card8_duration: "Duration: 1h 20m per class",
        card8_desc: "Lighter option to keep the language active.",
        card8_feat1: "Learning books and vocabulary",
        card8_feat2: "Conversation with natives",
        card8_feat3: "Focused on practical exercises",
        card8_reco: "Recommended: for those who want flexible practice.",
        group_title: "Group Spanish Classes",
        group_card_title: "5 students",
        group_card_duration: "20 classes per month",
        group_card_length: "Duration: 1h 20m per class",
        group_card_desc: "Group classes to improve interaction and conversation.",
        group_card_feat1: "Learning books and vocabulary",
        group_card_feat2: "Conversation with natives",
        group_card_feat3: "Focused on practical exercises",
        group_card_reco: "Recommended: for those who enjoy learning in a group.",
        contact_btn: "Contact us now"
    },
    ru: {
        individual_title: "Индивидуальные занятия по испанскому",
        card20_title: "20 занятий в месяц",
        card20_duration: "Длительность: 1ч 20м каждое занятие",
        card20_desc: "Идеально для быстрого прогресса и освоения языка.",
        card20_feat1: "Учебники и словарный запас",
        card20_feat2: "Разговор с носителями языка",
        card20_feat3: "С фокусом на практику",
        card20_reco: "Рекомендуется: для тех, кто хочет интенсивных результатов.",
        card12_title: "12 занятий в месяц",
        card12_duration: "Длительность: 1ч 20м каждое занятие",
        card12_desc: "Идеальный баланс между интенсивностью и временем.",
        card12_feat1: "Учебники и словарный запас",
        card12_feat2: "Разговор с носителями языка",
        card12_feat3: "С фокусом на практику",
        card12_reco: "Рекомендуется: для студентов, которые хотят стабильного прогресса.",
        card8_title: "8 занятий в месяц",
        card8_duration: "Длительность: 1ч 20м каждое занятие",
        card8_desc: "Более легкий вариант для поддержания языка.",
        card8_feat1: "Учебники и словарный запас",
        card8_feat2: "Разговор с носителями языка",
        card8_feat3: "С фокусом на практику",
        card8_reco: "Рекомендуется: для тех, кто хочет гибкой практики.",
        group_title: "Групповые занятия по испанскому",
        group_card_title: "5 учеников",
        group_card_duration: "20 занятий в месяц",
        group_card_length: "Длительность: 1ч 20м каждое занятие",
        group_card_desc: "Групповые занятия для улучшения взаимодействия и общения.",
        group_card_feat1: "Учебники и словарный запас",
        group_card_feat2: "Разговор с носителями языка",
        group_card_feat3: "С фокусом на практику",
        group_card_reco: "Рекомендуется: для тех, кто любит учиться в группе.",
        contact_btn: "Свяжитесь с нами"
    }
};

langSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[selectedLang][key]){
            el.innerHTML = translations[selectedLang][key];
        }
    });
});


// Cargar idioma guardado al inicio
localStorage.setItem('lang', 'ru');
const savedLang = localStorage.getItem('lang') || 'ru';
langSelect.value = savedLang;
updateLanguage(savedLang);

// Cambiar idioma
langSelect.addEventListener('change', () => {
    const selectedLang = langSelect.value;
    localStorage.setItem('lang', selectedLang);
    updateLanguage(selectedLang);
});

function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(translations[lang][key]){
            el.innerHTML = translations[lang][key];
        }
    });
}

const translationsHeader = {
  es: {
    home: "Inicio",
    about: "Sobre Nosotros",
    methodology: "Nuestra Metodología",
    admissions: "Inscripciones",
    contact: "Contacto"
  },
  en: {
    home: "Home",
    about: "About Us",
    methodology: "Our Methodology",
    admissions: "Admissions",
    contact: "Contact"
  },
  ru: {
    home: "Главная",
    about: "О нас",
    methodology: "Наша методология",
    admissions: "Поступление",
    contact: "Контакты"
  }
};

function translateHeader(lang) {
  const links = document.querySelectorAll("header .nav a[data-key]");
  links.forEach(link => {
    const key = link.getAttribute("data-key");
    link.textContent = translationsHeader[lang][key] || key;
  });
}

// Traducir al cargar la página
translateHeader(savedLang);

// Traducir al cambiar el idioma
langSelect.addEventListener('change', () => {
  const selectedLang = langSelect.value;
  translateHeader(selectedLang);
});

const translationsFooter = {
  es: {
    brand_text: "Aprende idiomas de forma moderna, práctica y 100% conversacional.",
    links_title: "Enlaces",
    links_home: "Inicio",
    links_about: "Sobre Nosotros",
    links_methodology: "Metodología",
    links_admissions: "Inscripciones",
    links_contact: "Contacto",
    social_title: "Síguenos"
  },
  en: {
    brand_text: "Learn languages in a modern, practical, and 100% conversational way.",
    links_title: "Links",
    links_home: "Home",
    links_about: "About Us",
    links_methodology: "Methodology",
    links_admissions: "Admissions",
    links_contact: "Contact",
    social_title: "Follow Us"
  },
  ru: {
    brand_text: "Изучайте языки современным, практичным и 100% разговорным способом.",
    links_title: "Ссылки",
    links_home: "Главная",
    links_about: "О нас",
    links_methodology: "Методология",
    links_admissions: "Поступление",
    links_contact: "Контакты",
    social_title: "Подписывайтесь"
  }
};

// Función para traducir el footer
function translateFooter(lang) {
  // Texto de la marca
  document.querySelector(".footer-brand p").textContent = translationsFooter[lang].brand_text;

  // Título de enlaces
  document.querySelector(".footer-links h3").textContent = translationsFooter[lang].links_title;

  // Links
  const links = document.querySelectorAll(".footer-links ul li a");
  links[0].textContent = translationsFooter[lang].links_home;
  links[1].textContent = translationsFooter[lang].links_about;
  links[2].textContent = translationsFooter[lang].links_methodology;
  links[3].textContent = translationsFooter[lang].links_admissions;
  links[4].textContent = translationsFooter[lang].links_contact;

  // Título social
  document.querySelector(".footer-social h3").textContent = translationsFooter[lang].social_title;
}

// Detectar cambio de idioma
langSelect.addEventListener("change", () => {
  translateFooter(langSelect.value);
});

// Aplicar traducción al cargar
translateFooter(langSelect.value);


// Traducciones para la sección de Clase de Prueba Gratuita
translations.es.trial_title = "Clase de Prueba Gratuita";
translations.es.trial_card_title = "1 clase";
translations.es.trial_card_duration = "Duración: 1h";
translations.es.trial_price = "GRATIS";
translations.es.trial_card_desc = "Prueba una clase para experimentar nuestro método de enseñanza.";
translations.es.trial_card_feat1 = "Interacción con profesores nativos";
translations.es.trial_card_feat2 = "Acceso a materiales básicos de la clase";
translations.es.trial_card_feat3 = "Introducción a prácticas reales de conversación";
translations.es.trial_card_reco = "Recomendado: para nuevos estudiantes que quieran probar antes de inscribirse.";

translations.en.trial_title = "Free Trial Class";
translations.en.trial_card_title = "1 class";
translations.en.trial_card_duration = "Duration: 1h";
translations.en.trial_price = "FREE";
translations.en.trial_card_desc = "Try a class to experience our teaching method.";
translations.en.trial_card_feat1 = "Interaction with native teachers";
translations.en.trial_card_feat2 = "Access to basic class materials";
translations.en.trial_card_feat3 = "Introduction to real conversation practice";
translations.en.trial_card_reco = "Recommended: for new students who want to try before enrolling.";

translations.ru.trial_title = "Бесплатный пробный урок";
translations.ru.trial_card_title = "1 занятие";
translations.ru.trial_card_duration = "Длительность: 1ч";
translations.ru.trial_price = "БЕСПЛАТНО";
translations.ru.trial_card_desc = "Попробуйте урок, чтобы познакомиться с нашим методом обучения.";
translations.ru.trial_card_feat1 = "Взаимодействие с носителями языка";
translations.ru.trial_card_feat2 = "Доступ к базовым материалам занятия";
translations.ru.trial_card_feat3 = "Введение в практику реального общения";
translations.ru.trial_card_reco = "Рекомендуется: для новых студентов, желающих попробовать перед записью.";



function forceTrialSectionRussian() {
    const trialKeys = [
        'trial_title',
        'trial_card_title',
        'trial_card_duration',
        'trial_price',
        'trial_card_desc',
        'trial_card_feat1',
        'trial_card_feat2',
        'trial_card_feat3',
        'trial_card_reco'
    ];

    trialKeys.forEach(key => {
        const el = document.querySelector(`[data-key="${key}"]`);
        if (el && translations.ru[key]) {
            el.innerHTML = translations.ru[key];
        }
    });
}

// Llamar al cargar la página
forceTrialSectionRussian();
