// Animación de scroll para cards
const cards = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));

// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item button');

faqItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.parentElement;
    parent.classList.toggle('active');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ======== TRADUCCIONES ========
const translations = {
  "ru": {
    "brand_name":"SPANGLISH",
    "home":"Главная",
    "about":"О нас",
    "methodology":"Методика",
    "admissions":"Записи",
    "contact":"Контакты",
    "hero_title":"Методика Spanglish",
    "hero_subtitle":"Испанский – это больше, чем просто говорить",
    "hero_button":"Исследовать методику",
    "objectives_title":"Цели",
    "objective_listening_title":"Аудирование",
    "objective_listening_text":"Тренируйте слух, чтобы естественно распознавать звуки, слова и структуры испанского языка, без привязки к учебникам.",
    "objective_speaking_title":"Устная речь",
    "objective_speaking_text":"Улучшайте беглость и произношение через направленную практику и ассоциацию слов с образами.",
    "objective_visual_title":"Визуальные ассоциации",
    "objective_visual_text":"Использование визуальных образов помогает запоминать слова и фразы естественным образом.",
    "objective_confidence_title":"Уверенность в речи",
    "objective_confidence_text":"Создаем безопасную среду для практики без страха ошибиться, повышая автономию и мотивацию.",
    "objective_fluency_title":"Быстрая беглость",
    "objective_fluency_text":"Ежедневные упражнения по слушанию и повторению развивают естественную скорость речи.",
    "objective_meaning_title":"Смысловое обучение",
    "objective_meaning_text":"Обучение через опыт, визуальные и реальные контексты, избегая бессмысленного заучивания.",
    "fundamentals_title":"Основы",
    "fundamentals_neuroscience_title":"Нейронаука языка",
    "fundamentals_neuroscience_text":"Мозг лучше усваивает информацию через несколько сенсов. Ассоциация звуков с образами укрепляет память и понимание.",
    "fundamentals_listening_title":"Активное слушание",
    "fundamentals_listening_text":"Сознательное внимание к звукам и интонациям помогает распознавать структуры и значения в контексте.",
    "fundamentals_visualization_title":"Визуализация",
    "fundamentals_visualization_text":"Ассоциация звуков с конкретными образами помогает естественно усвоить слова и фразы.",
    "fundamentals_multisensory_title":"Мультисенсорная интеграция",
    "fundamentals_multisensory_text":"Комбинируя слух, зрение и речь, развиваете навыки коммуникации как у носителя языка.",
    "fundamentals_intuitive_title":"Интуитивное обучение",
    "fundamentals_intuitive_text":"Язык изучается как у носителей: сначала слушаем и ассоциируем, потом говорим и пишем.",
    "fundamentals_memory_title":"Долговременная память",
    "fundamentals_memory_text":"Мультисенсорная кодировка гарантирует запоминание изученного и эффективное его воспроизведение.",
    "speaking_title":"Развитие устной речи",
    "speaking_native_title":"Носители языка",
    "speaking_native_text":"Взаимодействуйте с носителями языка для улучшения произношения, интонации и беглости в реальных ситуациях.",
    "speaking_pronunciation_title":"Техники произношения",
    "speaking_pronunciation_text":"Направленное повторение, shadowing, запись и сравнение для улучшения сложных звуков и интонации.",
    "speaking_vocab_title":"Функциональный словарь",
    "speaking_vocab_text":"Учите слова и выражения в реальном контексте для повседневной и профессиональной жизни.",
    "speaking_visualization_title":"Активная визуализация",
    "speaking_visualization_text":"Представляйте сцены и действия при произнесении фраз для закрепления связи между звуком и значением.",
    "speaking_roleplay_title":"Ролевая игра",
    "speaking_roleplay_text":"Симуляция повседневных диалогов для практики структур и выражений в реальных условиях.",
    "speaking_selfeval_title":"Самооценка",
    "speaking_selfeval_text":"Записывайтесь, слушайте себя и сравнивайте с носителем для автономного прогресса.",
    "grammar_title":"Грамматика и письмо",
    "grammar_real_title":"Реальная грамматика",
    "grammar_real_text":"Учите структуры, полезные в повседневном общении, без заучивания абстрактных правил.",
    "grammar_progressive_title":"Постепенное письмо",
    "grammar_progressive_text":"Начинайте с простых фраз и переходите к полным текстам на основе опыта и прослушанных аудио.",
    "grammar_integration_title":"Комплексная интеграция",
    "grammar_integration_text":"Грамматика и письмо интегрируются с аудированием и устной речью для последовательного обучения.",
    "grammar_benefits_title":"Преимущества",
    "grammar_benefits_text":"Уверенность в письме, закрепление структур и способность функционально общаться.",
    "grammar_feedback_title":"Направленная коррекция",
    "grammar_feedback_text":"Получайте мгновенную обратную связь по вашим текстам для улучшения связности, словарного запаса и грамматики.",
    "grammar_creativity_title":"Творчество и выражение",
    "grammar_creativity_text":"Пишите о своих впечатлениях, изображениях и аудио, чтобы обучение было значимым и увлекательным.",
    "resources_title":"Ресурсы и материалы",
    "resources_audio_title":"Аудио и видео",
    "resources_audio_text":"Реальные разговоры, подкасты и музыка для тренировки слуха и знакомства с акцентами и ритмом.",
    "resources_visual_title":"Визуальные материалы",
    "resources_visual_text":"Изображения, диаграммы и графики помогают ассоциировать слова и звуки с объектами и ситуациями.",
    "resources_apps_title":"Приложения и инструменты",
    "resources_apps_text":"Интерактивные приложения и словари усиливают аудирование, устную и письменную практику.",
    "resources_books_title":"Книги и структурированный материал",
    "resources_books_text":"Материал по уровням, дополняющий практику с носителями и мультимедийными ресурсами.",
    "resources_online_title":"Онлайн-платформы",
    "resources_online_text":"Доступ к цифровым курсам, интерактивным упражнениям и отслеживание индивидуального прогресса.",
    "resources_personal_title":"Личная практика",
    "resources_personal_text":"Поощряется поиск аудио, видео или чтения по интересам для повышения автономии и мотивации.",
    "faq_title":"Часто задаваемые вопросы",
    "faq_1_q":"Чем Spanglish отличается от других методов?",
    "faq_1_a":"Spanglish фокусируется не только на книгах и правилах; вы учитесь, слушая, разговаривая и визуализируя, как полиглоты.",
    "faq_2_q":"Нужно ли знать испанский перед началом?",
    "faq_2_a":"Нет, мы начинаем с нуля и адаптируем каждое занятие под ваш уровень.",
    "faq_3_q":"Как улучшить произношение?",
    "faq_3_a":"Используйте аудио, повторяйте вслух, записывайте себя и сравнивайте с преподавателем или рекомендованными материалами.",
    "faq_4_q":"Что делать, если я не понимаю английский?",
    "faq_4_a":"Мы предоставляем временный переводчик и адаптированные занятия, чтобы любой ученик мог участвовать с самого начала.",
    "faq_5_q":"Сколько времени нужно для реального прогресса?",
    "faq_5_a":"Зависит от ученика, но ежедневная практика с прослушиванием и повторением дает быстрые и видимые результаты.",
    "faq_6_q":"Нормально ли делать ошибки при изучении?",
    "faq_6_a":"Да! Ошибки — часть обучения и помогают быстрее и увереннее продвигаться."
  },
  "en": {
    "brand_name":"SPANGLISH",
    "home":"Home",
    "about":"About Us",
    "methodology":"Methodology",
    "admissions":"Admissions",
    "contact":"Contact",
    "hero_title":"Spanglish Methodology",
    "hero_subtitle":"Spanish is more than just speaking",
    "hero_button":"Explore the methodology",
    "objectives_title":"Objectives",
    "objective_listening_title":"Listening",
    "objective_listening_text":"Train your ear to naturally recognize sounds, words and Spanish structures, without relying only on textbooks.",
    "objective_speaking_title":"Speaking",
    "objective_speaking_text":"Improve your fluency and pronunciation through guided practice and association of words with images.",
    "objective_visual_title":"Visual Association",
    "objective_visual_text":"Visualizing objects and actions helps memorize words and phrases naturally.",
    "objective_confidence_title":"Speaking Confidence",
    "objective_confidence_text":"Create a safe environment to practice without fear of mistakes, boosting autonomy and motivation.",
    "objective_fluency_title":"Rapid Fluency",
    "objective_fluency_text":"Daily listening and repetition exercises develop speed and natural speaking.",
    "objective_meaning_title":"Meaningful Learning",
    "objective_meaning_text":"Learning based on experiences and real contexts avoids meaningless memorization.",
    "fundamentals_title":"Fundamentals",
    "fundamentals_neuroscience_title":"Language Neuroscience",
    "fundamentals_neuroscience_text":"The brain learns better using multiple senses. Associating sounds with images strengthens memory and comprehension.",
    "fundamentals_listening_title":"Active Listening",
    "fundamentals_listening_text":"Paying conscious attention to sounds and intonation helps recognize structures and meanings in context.",
    "fundamentals_visualization_title":"Visualization",
    "fundamentals_visualization_text":"Associating sounds with concrete images helps internalize words and phrases naturally.",
    "fundamentals_multisensory_title":"Multisensory Integration",
    "fundamentals_multisensory_text":"Combining hearing, sight, and speech develops full communication skills like a native speaker.",
    "fundamentals_intuitive_title":"Intuitive Learning",
    "fundamentals_intuitive_text":"The language is taught like natives: first listening and associating, then speaking and writing.",
    "fundamentals_memory_title":"Long-term Memory",
    "fundamentals_memory_text":"Multisensory encoding ensures learning is retained and can be recalled effectively.",
    "speaking_title":"Developing Speaking Skills",
    "speaking_native_title":"Native Teachers",
    "speaking_native_text":"Interact with native speakers to improve pronunciation, intonation and fluency in real situations.",
    "speaking_pronunciation_title":"Pronunciation Techniques",
    "speaking_pronunciation_text":"Guided repetition, shadowing, recording and comparison to improve difficult sounds and intonation.",
    "speaking_vocab_title":"Functional Vocabulary",
    "speaking_vocab_text":"Learn words and expressions in real context, useful for daily and professional life.",
    "speaking_visualization_title":"Active Visualization",
    "speaking_visualization_text":"Imagine scenes and actions when pronouncing phrases to strengthen sound-meaning association.",
    "speaking_roleplay_title":"Role-playing",
    "speaking_roleplay_text":"Simulate everyday conversations to practice structures and expressions realistically.",
    "speaking_selfeval_title":"Self-evaluation",
    "speaking_selfeval_text":"Record yourself, listen and compare with native teachers for autonomous progress.",
    "grammar_title":"Grammar and Writing",
    "grammar_real_title":"Real Grammar",
    "grammar_real_text":"Learn useful structures for daily communication without memorizing abstract rules.",
    "grammar_progressive_title":"Progressive Writing",
    "grammar_progressive_text":"Start with simple sentences and evolve to full texts based on experiences or audios.",
    "grammar_integration_title":"Complete Integration",
    "grammar_integration_text":"Grammar and writing integrate with listening and speaking for coherent learning.",
    "grammar_benefits_title":"Benefits",
    "grammar_benefits_text":"More confidence writing, structure retention, and functional communication ability.",
    "grammar_feedback_title":"Guided Correction",
    "grammar_feedback_text":"Receive immediate feedback on your texts to improve coherence, vocabulary, and grammar.",
    "grammar_creativity_title":"Creativity & Expression",
    "grammar_creativity_text":"Write about experiences, images and audios to make learning meaningful and fun.",
    "resources_title":"Resources & Materials",
    "resources_audio_title":"Audios & Videos",
    "resources_audio_text":"Real conversations, podcasts, and music to train listening and familiarize with accents and rhythm.",
    "resources_visual_title":"Visual Material",
    "resources_visual_text":"Images, diagrams and charts help associate words and sounds with objects and situations.",
    "resources_apps_title":"Apps & Tools",
    "resources_apps_text":"Interactive apps and dictionaries reinforce listening, speaking and writing practice.",
    "resources_books_title":"Books & Guided Material",
    "resources_books_text":"Structured material by levels complementing practice with native teachers and multimedia resources.",
    "resources_online_title":"Online Platforms",
    "resources_online_text":"Access to digital courses, interactive exercises and tracking individual progress.",
    "resources_personal_title":"Personal Exploration",
    "resources_personal_text":"Encouraged to seek audio, video or reading of personal interest to boost autonomy and motivation.",
    "faq_title":"Frequently Asked Questions",
    "faq_1_q":"What makes Spanglish different from other methods?",
    "faq_1_a":"Spanglish focuses not only on books and rules; you learn by listening, speaking and visualizing like polyglots.",
    "faq_2_q":"Do I need to know Spanish before starting?",
    "faq_2_a":"No, we start from zero and adapt each class to your level.",
    "faq_3_q":"How can I improve my pronunciation?",
    "faq_3_a":"Using audios, repeating aloud, recording yourself, and comparing with the teacher or recommended material.",
    "faq_4_q":"What if I don't understand English?",
    "faq_4_a":"We provide temporary translation and adapted classes so any student can participate from the start.",
    "faq_5_q":"How long until I notice real progress?",
    "faq_5_a":"Depends on the student, but daily practice with listening and repetition produces fast and visible results.",
    "faq_6_q":"Is it normal to make mistakes while learning?",
    "faq_6_a":"Yes! Mistakes are part of learning and help improve faster and with confidence."
  },
  "es": {
    "brand_name":"SPANGLISH",
    "home":"Inicio",
    "about":"Sobre Nosotros",
    "methodology":"Nuestra Metodología",
    "admissions":"Inscripciones",
    "contact":"Contacto",
    "hero_title":"Metodología Spanglish",
    "hero_subtitle":"El español es más que solo hablar",
    "hero_button":"Explora la metodología",
    "objectives_title":"Objetivos",
    "objective_listening_title":"Comprensión Auditiva",
    "objective_listening_text":"Entrena tu oído para reconocer sonidos, palabras y estructuras del español de manera natural, sin depender solo de la lectura.",
    "objective_speaking_title":"Expresión Oral",
    "objective_speaking_text":"Mejora tu fluidez y pronunciación mediante la práctica guiada y la asociación de palabras con imágenes mentales.",
    "objective_visual_title":"Asociación Visual",
    "objective_visual_text":"Facilita la memorización y comprensión del idioma visualizando objetos, acciones y situaciones mientras escuchas y hablas.",
    "objective_confidence_title":"Confianza al Hablar",
    "objective_confidence_text":"Crea un entorno seguro donde puedas practicar sin miedo a equivocarte, reforzando tu autonomía y motivación.",
    "objective_fluency_title":"Fluidez Rápida",
    "objective_fluency_text":"Con ejercicios diarios de escucha y repetición, el estudiante desarrolla rapidez y naturalidad al hablar.",
    "objective_meaning_title":"Aprendizaje Significativo",
    "objective_meaning_text":"Se prioriza el aprendizaje basado en experiencias, imágenes y contextos reales, evitando memorización sin sentido.",
    "fundamentals_title":"Fundamentos",
    "fundamentals_neuroscience_title":"Neurociencia del Idioma",
    "fundamentals_neuroscience_text":"El cerebro aprende mejor con múltiples sentidos. Asociar sonidos con imágenes fortalece la memoria y comprensión.",
    "fundamentals_listening_title":"Escucha Activa",
    "fundamentals_listening_text":"Prestar atención consciente a sonidos y entonaciones permite reconocer estructuras y significados en contexto.",
    "fundamentals_visualization_title":"Visualización",
    "fundamentals_visualization_text":"Asociar sonidos con imágenes concretas ayuda a internalizar palabras y frases de manera natural.",
    "fundamentals_multisensory_title":"Integración Multisensorial",
    "fundamentals_multisensory_text":"Al combinar oído, vista y habla, desarrollas habilidades completas de comunicación como un hablante nativo.",
    "fundamentals_intuitive_title":"Aprendizaje Intuitivo",
    "fundamentals_intuitive_text":"Se enseña el idioma como lo hacen los nativos: primero escuchando y asociando, luego hablando y escribiendo.",
    "fundamentals_memory_title":"Memoria Duradera",
    "fundamentals_memory_text":"La codificación multisensorial asegura que lo aprendido se retenga y se pueda recuperar de manera efectiva.",
    "speaking_title":"Desarrollo de la Expresión Oral",
    "speaking_native_title":"Profesores Nativos",
    "speaking_native_text":"Interactúa directamente con hablantes nativos para mejorar pronunciación, entonación y fluidez en situaciones reales.",
    "speaking_pronunciation_title":"Técnicas de Pronunciación",
    "speaking_pronunciation_text":"Repetición guiada, shadowing, grabación y comparación para mejorar sonidos difíciles y entonación.",
    "speaking_vocab_title":"Vocabulario Funcional",
    "speaking_vocab_text":"Aprende palabras y expresiones en contexto real, usando frases útiles para la vida diaria y profesional.",
    "speaking_visualization_title":"Visualización Activa",
    "speaking_visualization_text":"Al pronunciar frases, imagina escenas y acciones para reforzar la relación entre sonido y significado.",
    "speaking_roleplay_title":"Role-playing",
    "speaking_roleplay_text":"Simula conversaciones cotidianas para practicar estructuras y expresiones en un contexto realista.",
    "speaking_selfeval_title":"Autoevaluación",
    "speaking_selfeval_text":"Grábate, escucha y compara con el profesor nativo para identificar mejoras y progresar de manera autónoma.",
    "grammar_title":"Gramática y Redacción",
    "grammar_real_title":"Gramática Real",
    "grammar_real_text":"Aprende estructuras útiles en comunicación diaria sin memorizar reglas abstractas.",
    "grammar_progressive_title":"Redacción Progresiva",
    "grammar_progressive_text":"Comienza escribiendo frases simples y evoluciona a textos completos basados en experiencias o audios escuchados.",
    "grammar_integration_title":"Integración Completa",
    "grammar_integration_text":"La gramática y redacción se integran con la escucha y la expresión oral para un aprendizaje coherente.",
    "grammar_benefits_title":"Beneficios",
    "grammar_benefits_text":"Mayor confianza al escribir, retención de estructuras y capacidad de comunicación funcional.",
    "grammar_feedback_title":"Corrección Guiada",
    "grammar_feedback_text":"Recibes retroalimentación inmediata sobre tus textos para mejorar coherencia, vocabulario y gramática.",
    "grammar_creativity_title":"Creatividad y Expresión",
    "grammar_creativity_text":"Se fomenta escribir sobre experiencias, imágenes y audios para que la práctica sea significativa y divertida.",
    "resources_title":"Recursos y Materiales",
    "resources_audio_title":"Audios y Videos",
    "resources_audio_text":"Conversaciones reales, podcasts y música para entrenar oído y familiarizarse con acentos y ritmo.",
    "resources_visual_title":"Material Visual",
    "resources_visual_text":"Imágenes, diagramas y gráficos ayudan a asociar palabras y sonidos con objetos y situaciones.",
    "resources_apps_title":"Apps y Herramientas",
    "resources_apps_text":"Aplicaciones interactivas y diccionarios digitales refuerzan práctica auditiva, oral y escrita.",
    "resources_books_title":"Libros y Contenido Guiado",
    "resources_books_text":"Material estructurado por niveles que complementa la práctica con profesores nativos y recursos multimedia.",
    "resources_online_title":"Plataformas Online",
    "resources_online_text":"Acceso a cursos digitales, ejercicios interactivos y seguimiento de progreso individualizado.",
    "resources_personal_title":"Exploración Personal",
    "resources_personal_text":"Se fomenta buscar audios, videos o lecturas de interés personal para potenciar autonomía y motivación.",
    "faq_title":"Preguntas Frecuentes",
    "faq_1_q":"¿Qué diferencia hay entre Spanglish y otros métodos?",
    "faq_1_a":"Spanglish no se centra solo en libros y reglas; aprendes escuchando, hablando y visualizando como los poliglotas.",
    "faq_2_q":"¿Es necesario saber español antes de empezar?",
    "faq_2_a":"No, empezamos desde cero y adaptamos cada clase a tu nivel.",
    "faq_3_q":"¿Cómo puedo mejorar mi pronunciación?",
    "faq_3_a":"Usando audios, repitiendo en voz alta, grabándote y comparando con el profesor o material recomendado.",
    "faq_4_q":"¿Qué hago si no entiendo inglés?",
    "faq_4_a":"Contamos con traductor temporal y clases adaptadas para que cualquier alumno pueda participar desde el inicio.",
    "faq_5_q":"¿Cuánto tiempo tarda en notarse progreso real?",
    "faq_5_a":"Depende de cada alumno, pero la práctica diaria con escucha y repetición produce avances rápidos y visibles.",
    "faq_6_q":"¿Es normal cometer errores al aprender?",
    "faq_6_a":"¡Sí! Los errores son parte del aprendizaje y ayudan a mejorar más rápido y con confianza."
  }
};

// ======== CAMBIO DE IDIOMA ========
function changeLanguage(lang) {
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if(translations[lang][key]){
      el.textContent = translations[lang][key];
    }
  });
}

// Selector de idioma
document.getElementById("lang-select").addEventListener("change", (e) => {
  changeLanguage(e.target.value);
});

// ======== ANIMACIONES ========
// Cards fade-up
document.querySelectorAll('.fade-up').forEach(card => {
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('show');
    });
  }, { threshold: 0.1 }).observe(card);
});

// FAQ toggle
document.querySelectorAll('.faq-item button').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('active');
  });
});

// Inicializar idioma principal: ruso
changeLanguage("ru");
