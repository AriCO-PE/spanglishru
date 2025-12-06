const langSelect = document.getElementById("lang-select");
langSelect.value = "ru"; // ← FORZAR RUSO SIEMPRE AL INICIAR


/* ================= HEADER ================= */
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

/* ================= HERO / VIDEO ================= */
const translationsHero = {
  es: {
    welcome_title: "Bienvenido a SPANGLISH",
    welcome_text: "Sumérgete en la Cultura Hispano Hablante",
    video_not_supported: "Tu navegador no soporta video."
  },
  en: {
    welcome_title: "Welcome to SPANGLISH",
    welcome_text: "Immerse yourself in the Spanish-speaking culture",
    video_not_supported: "Your browser does not support video."
  },
  ru: {
    welcome_title: "Добро пожаловать в SPANGLISH",
    welcome_text: "Погрузитесь в испаноязычную культуру",
    video_not_supported: "Ваш браузер не поддерживает видео."
  }
};

function translateHero(lang) {
  const title = document.getElementById("main-title");
  const text = document.getElementById("main-text");
  if(title) title.textContent = translationsHero[lang].welcome_title;
  if(text) text.textContent = translationsHero[lang].welcome_text;

  // Traducción del mensaje de video no soportado
  const videos = document.querySelectorAll("video");
  videos.forEach(v => {
    const source = v.querySelector("source");
    if(!source) return;
    // el fallback de texto dentro del video
    const fallback = v.childNodes;
    fallback.forEach(node => {
      if(node.nodeType === Node.TEXT_NODE) {
        node.textContent = translationsHero[lang].video_not_supported;
      }
    });
  });
}

/* ================= CARDS ================= */
const translationsCards = {
  es: {
    cards_title: "Da tus primeros pasos en el Español",
    cards_subtitle: "¿Qué ofrecemos?",
    card1_title: "Maestros Nativos",
    card1_text: "Profesores de todo Latinoamérica<br>para que puedas conocer más sobre<br>la cultura Latina!",
    card2_title: "Clases en Inglés",
    card2_text: "Las clases son en Inglés para mejor comunicación entre alumno y maestro",
    card3_title: "Traductores",
    card3_text: "¿No sabes Inglés? No hay problema, te brindamos un traductor para tus primeras lecciones"
  },
  en: {
    cards_title: "Take Your First Steps in Spanish",
    cards_subtitle: "What We Offer",
    card1_title: "Native Teachers",
    card1_text: "Teachers from all over Latin America<br>so you can learn more about Latin culture!",
    card2_title: "Classes in English",
    card2_text: "Classes are in English for better communication between student and teacher",
    card3_title: "Translators",
    card3_text: "Don't know English? No problem, we provide a translator for your first lessons"
  },
  ru: {
    cards_title: "Сделайте первые шаги в испанском",
    cards_subtitle: "Что мы предлагаем",
    card1_title: "Носители языка",
    card1_text: "Преподаватели со всей Латинской Америки<br>чтобы вы могли узнать больше о латинской культуре!",
    card2_title: "Занятия на английском",
    card2_text: "Занятия проходят на английском для лучшего общения между учеником и преподавателем",
    card3_title: "Переводчики",
    card3_text: "Не знаете английский? Не проблема, мы предоставляем переводчика для первых уроков"
  }
};

function translateCards(lang) {
  const title = document.querySelector(".cards-section h1");
  const subtitle = document.querySelector(".cards-section p");
  if(title) title.innerHTML = translationsCards[lang].cards_title;
  if(subtitle) subtitle.innerHTML = translationsCards[lang].cards_subtitle;

  const cardElements = document.querySelectorAll(".cards-section .card");
  cardElements.forEach((card, index) => {
    const cardNum = index + 1;
    const cardTitle = card.querySelector("h2");
    const cardText = card.querySelector("p");
    if(cardTitle) cardTitle.textContent = translationsCards[lang][`card${cardNum}_title`];
    if(cardText) cardText.innerHTML = translationsCards[lang][`card${cardNum}_text`];
  });
}


const translationsGallery = {
  es: { gallery_title: "Nuestra Cultura" },
  en: { gallery_title: "Our Culture" },
  ru: { gallery_title: "Наша культура" }
};


function translateGallery(lang) {
  const title = document.querySelector(".gallery-videos-section h2[data-key]");
  if (title) title.textContent = translationsGallery[lang].gallery_title;
}

// Detectar cambio de idioma
langSelect.addEventListener("change", () => {
  translateGallery(langSelect.value);
});

// Aplicar traducción al cargar
translateGallery(langSelect.value);



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

const translationsModalidad = {
  es: {
    section_title: "Modalidad de Clases",
    virtual_title: "Clases Virtuales",
    horarios_title: "Horarios Flexibles",
    description_initial: "Selecciona una opción para ver la información.",
    textos: {
      virtual: `
        Nuestras clases son <strong>100% virtuales</strong>, enfocadas en el desarrollo 
        de <strong>escucha y habla directa</strong>, un método efectivo que acelera tu 
        proceso de aprendizaje y te conecta con el idioma desde la primera sesión.
      `,
      horarios: `
        Nos adaptamos completamente a tus horarios. Puedes elegir 
        <strong>clases individuales</strong> o integrarte a grupos reducidos de 
        <strong>hasta 5 estudiantes</strong>. ¡Tú decides el ritmo y la intensidad!
      `
    }
  },
  en: {
    section_title: "Class Modalities",
    virtual_title: "Virtual Classes",
    horarios_title: "Flexible Schedules",
    description_initial: "Select an option to see the information.",
    textos: {
      virtual: `
        Our classes are <strong>100% virtual</strong>, focused on developing 
        <strong>listening and speaking skills</strong>, an effective method that accelerates your 
        learning process and connects you with the language from the very first session.
      `,
      horarios: `
        We fully adapt to your schedule. You can choose 
        <strong>individual classes</strong> or join small groups of 
        <strong>up to 5 students</strong>. You decide the pace and intensity!
      `
    }
  },
  ru: {
    section_title: "Форматы занятий",
    virtual_title: "Виртуальные занятия",
    horarios_title: "Гибкое расписание",
    description_initial: "Выберите вариант, чтобы увидеть информацию.",
    textos: {
      virtual: `
        Наши занятия <strong>100% виртуальные</strong>, сосредоточены на развитии 
        <strong>навыков слушания и говорения</strong>, эффективный метод, который ускоряет ваш 
        процесс обучения и соединяет вас с языком с первой же сессии.
      `,
      horarios: `
        Мы полностью подстраиваемся под ваше расписание. Вы можете выбрать 
        <strong>индивидуальные занятия</strong> или присоединиться к небольшим группам 
        <strong>до 5 студентов</strong>. Вы сами выбираете темп и интенсивность!
      `
    }
  }
};

// Elementos
const modalidadSectionTitle = document.querySelector(".modalidad-section h2");
const modeBoxes = document.querySelectorAll(".mode-box");
const description = document.getElementById("mode-description");

// Función para traducir la sección
function translateModalidad(lang) {
  modalidadSectionTitle.textContent = translationsModalidad[lang].section_title;
  modeBoxes.forEach(box => {
    const mode = box.dataset.mode;
    if(mode === "virtual") box.querySelector("h3").textContent = translationsModalidad[lang].virtual_title;
    if(mode === "horarios") box.querySelector("h3").textContent = translationsModalidad[lang].horarios_title;
  });
  description.innerHTML = translationsModalidad[lang].description_initial;
}

// Detectar cambio de idioma
langSelect.addEventListener("change", () => {
  translateModalidad(langSelect.value);
});

// Aplicar traducción al cargar
translateModalidad(langSelect.value);

// Traducir también los textos al hacer clic en las opciones
modeBoxes.forEach(box => {
  box.addEventListener("click", () => {
    const mode = box.dataset.mode;
    description.innerHTML = translationsModalidad[langSelect.value].textos[mode];
    // Animación
    description.classList.remove("show");
    setTimeout(() => description.classList.add("show"), 50);
  });
});




/* ================= CHANGE EVENT ================= */
langSelect.addEventListener("change", () => {
  const lang = langSelect.value;
  translateHeader(lang);
  translateHero(lang);
  translateCards(lang);
});

/* ================= INITIAL LOAD ================= */
const initialLang = langSelect.value;
translateHeader(initialLang);
translateHero(initialLang);
translateCards(initialLang);
