// ================= Scroll entre secciones =================
const sections = document.querySelectorAll('.page-section');
const scrollNext = document.getElementById('scroll-next');
const scrollTop = document.getElementById('scroll-top');
let current = 0;

const setActiveSection = (index) => {
  sections.forEach((sec, i) => sec.classList.toggle('active', i === index));
  current = index;
};

setActiveSection(0);

const scrollToSection = (index) => {
  sections[index].scrollIntoView({ behavior: 'smooth' });
  setActiveSection(index);
};

scrollNext?.addEventListener('click', () => {
  if(current < sections.length - 1) scrollToSection(current + 1);
});

scrollTop?.addEventListener('click', () => {
  if(current > 0) scrollToSection(current - 1);
});

const toggleScrollTopButton = () => {
  if(scrollTop) scrollTop.style.display = current > 0 ? 'block' : 'none';
};
toggleScrollTopButton();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      current = Array.from(sections).indexOf(entry.target);
      entry.target.classList.add('active');
      toggleScrollTopButton();
    }
  });
}, { threshold: 0.5 });

sections.forEach(sec => observer.observe(sec));

window.addEventListener('keydown', (e) => {
  if(['ArrowUp','ArrowDown','PageUp','PageDown','Home','End',' '].includes(e.key)) e.preventDefault();
});
window.addEventListener('touchmove', e => e.preventDefault(), { passive: false });

// ================= Menu toggle =================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('active'));

// ================= Traducción =================
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('lang-select');
  if (!langSelect) return;

  // JSON con todas las traducciones
  const translations = {
    "ru": {
      "header": {
        "home": "Главная",
        "about": "О нас",
        "methodology": "Наша методология",
        "admissions": "Поступление",
        "contact": "Контакты"
      },
      "sections": {
        "mission_title": "Наша миссия",
        "mission_text": "Наша миссия — помочь каждому, будь то студент или молодой человек, желающий выучить испанский язык, достичь своих языковых целей, не тратя три года подряд на одну и ту же программу. Каждый студент сможет развиваться в своём темпе и следовать индивидуальной программе обучения.",
        "history_title": "Наша история",
        "history_text": "Я молодой латиноамериканец, приехавший в Россию с группой соотечественников, движимый нашей страстью к испанскому языку и культуре. По прибытии мы с удивлением обнаружили неподдельный интерес многих россиян к изучению испанского языка. Однако мы также заметили, что во многих академиях преподавание сосредоточено на очень формальном испанском языке, далёком от того, на котором говорят в повседневной жизни. Именно тогда мы решили создать Spanglish — пространство, где студенты могли бы изучать аутентичный испанский язык, связанный с культурой и диалектами наших стран, и знакомиться с языком в практической и увлекательной форме.",
        "different_title": "Почему мы разные?",
        "diff_item1": "Преподаватели-носители из Латинской Америки с опытом персонального обучения",
        "diff_item2": "Акцент на восприятие на слух для развития навыков слушания",
        "diff_item3": "Практическая и аутентичная лексика с заданиями и интерактивными вызовами",
        "diff_item4": "Интерактивные материалы на нашей платформе для ускорения прогресса",
        "diff_item5": "Дополнительная поддержка молодых переводчиков",
        "join_title": "Присоединяйтесь к Spanglish",
        "join_text": "Речь идёт не только об изучении испанского языка, но и о знакомстве с латиноамериканской культурой. Миром, где светит солнце, люди танцуют, улыбаются и празднуют страсть и радость принадлежности к латиноамериканскому сообществу."
      }
    },
    "en": {
      "header": {
        "home":"Home","about":"About Us","methodology":"Our Methodology","admissions":"Admissions","contact":"Contact"
      },
      "sections": {
        "mission_title": "Our Mission",
        "mission_text": "Our mission is for every person, whether a student or a young person with a desire to learn Spanish, to achieve their language goals without having to invest three consecutive years in the same program. Each student will be able to progress at their own pace and follow a personalized learning path.",
        "history_title": "Our History",
        "history_text": "I'm a young Latino who came to Russia with a group of fellow countrymen, driven by our passion for the Spanish language and culture. Upon arrival, we were surprised to discover the genuine interest many Russians had in learning Spanish. However, we also noticed that in many academies, the teaching focused on a very formal Spanish, far removed from how it's actually spoken in everyday life. That's when we decided to create Spanglish, a space where students could learn authentic Spanish, connected to the culture and dialects of our countries, and experience the language in a practical and engaging way.",
        "different_title": "Why are we different?",
        "diff_item1": "Native teachers from Latin America with personalized teaching experience",
        "diff_item2": "Focus on listening comprehension for effective learning",
        "diff_item3": "Practical and authentic vocabulary with tasks and interactive challenges",
        "diff_item4": "Interactive materials on our platform to boost progress",
        "diff_item5": "Additional support from young translators",
        "join_title": "Join Spanglish",
        "join_text": "It's not just about learning Spanish, but about experiencing Hispanic culture. A world where the sun shines, people dance, smile, and celebrate the passion and joy of being part of the Hispanic community."
      }
    },

    "es": {
    "header": {
      "home": "Inicio",
      "about": "Sobre Nosotros",
      "methodology": "Nuestra Metodología",
      "admissions": "Inscripciones",
      "contact": "Contacto"
    },
    "sections": {
      "mission_title": "Nuestra Misión",
      "mission_text": "Nuestra mision es que cada persona, ya sea estudiante o joven con el deseo de aprender español, alcance sus metas lingüísticas sin necesidad de invertir tres años consecutivos en un mismo programa. Cada estudiante podrá avanzar a su propio ritmo y seguir un camino personalizado de aprendizaje.",
      "history_title": "Nuestra Historia",
      "history_text": "Soy un joven latino que llegó a Rusia junto a un grupo de compatriotas, motivados por nuestra pasión por la lengua y la cultura española. Al llegar, nos sorprendió descubrir el interés genuino de muchos rusos por aprender español. Sin embargo, también notamos que, en muchas academias, la enseñanza se centraba en un español demasiado formal o distante de la forma en que realmente se habla en la vida cotidiana. Fue entonces cuando decidimos crear Spanglish, un espacio donde los estudiantes pudieran aprender un español auténtico, conectado con la cultura y el dialecto de nuestros países, y experimentar el idioma de manera práctica y cercana.",
      "different_title": "¿Por qué somos diferentes?",
      "diff_item1": "Profesores nativos de Latinoamérica, con experiencia en enseñanza personalizada",
      "diff_item2": "Enfoque en comprensión auditiva, para desarrollar habilidades de escucha efectiva",
      "diff_item3": "Vocabulario práctico y auténtico, reforzado con tareas y desafíos interactivos",
      "diff_item4": "Materiales interactivos en nuestra plataforma, diseñados para potenciar tu progreso",
      "diff_item5": "Apoyo adicional con traductores jóvenes rusos, hablantes de español e inglés, disponibles para asistir en cualquier duda",
      "join_title": "Únete a Spanglish",
      "join_text": "No se trata solo de aprender español, sino de vivir la cultura hispana. Un mundo donde el sol brilla, la gente baila, sonríe y celebra la pasión y alegría de ser parte de la comunidad hispana."
    }
  },
  };

// Aplica la traducción
  const applyTranslations = (lang) => {
    const t = translations[lang];
    if(!t) return;

    // Header
    document.querySelectorAll("header .nav a[data-key]").forEach(link => {
      const key = link.getAttribute("data-key");
      if(t.header && t.header[key]) link.textContent = t.header[key];
    });

    // Secciones
    Object.keys(t.sections).forEach(key => {
      const el = document.querySelector(`[data-key='${key}']`);
      if(el) el.textContent = t.sections[key];
    });
  };

  // Inicializar con ruso
  applyTranslations('ru');
  langSelect.value = 'ru';

  langSelect.addEventListener('change', () => {
    applyTranslations(langSelect.value);
  });
});

