


const videoCard = document.querySelector('.video-card');
const video = videoCard.querySelector('.video');

// Reproducir automáticamente al cargar la página
window.addEventListener('load', () => {
    video.play().catch(() => {
        // Algunos navegadores bloquean autoplay si no hay interacción
        console.log("Autoplay bloqueado, el usuario debe interactuar con la página");
    });
});

// Opcional: quitar animaciones de escala/transform si las tenías en CSS
videoCard.style.transform = 'scale(1)'; // asegura tamaño normal




// Scroll reveal para la sección de cards
const cardsSection = document.querySelector('.cards-section');

function revealCardsOnScroll() {
    const sectionPos = cardsSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {  // cuando esté casi visible
        cardsSection.classList.add('show');
    }
}

// Ejecutar al hacer scroll y al cargar la página
window.addEventListener('scroll', revealCardsOnScroll);
window.addEventListener('load', revealCardsOnScroll);







const galleryVideosSection = document.querySelector('.gallery-videos-section');
const galleryVideos = document.querySelectorAll('.gallery-video');



// Mostrar la sección con scroll (fade-in)
function revealGalleryVideosOnScroll() {
    const sectionPos = galleryVideosSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionPos < screenHeight - 100) {
        galleryVideosSection.classList.add('show');

        // Animación individual para cada video
        galleryVideos.forEach((video, index) => {
            setTimeout(() => {
                video.classList.add('show');
            }, index * 150); // efecto escalonado
        });
    }
}

window.addEventListener('scroll', revealGalleryVideosOnScroll);
window.addEventListener('load', revealGalleryVideosOnScroll);

// Autoplay de 3 segundos al cargar + reproducción al hover
window.addEventListener('load', () => {
    galleryVideos.forEach(video => {
        video.volume = 0; // volumen bajo al 20%
        video.muted = true; // autoplay requiere mute en muchos navegadores
        video.play().catch(() => {
            console.log("Autoplay bloqueado, el usuario debe interactuar");
        });

        // Detener después de 3 segundos
        setTimeout(() => {
            video.pause();
            video.currentTime = 0;
        }, 2000);

        // Reproducir al pasar el cursor
        video.addEventListener('mouseenter', () => {
            video.muted = false; // opcional: quitar mute
            video.play();
        });

        // Pausar al quitar el cursor
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });
});




const musicCards = document.querySelectorAll('.music-card');

musicCards.forEach(card => {
    const button = card.querySelector('.play-btn');
    const audio = card.querySelector('audio');

    button.addEventListener('click', () => {
        // Pausar todos los demás audios
        musicCards.forEach(c => {
            const a = c.querySelector('audio');
            if (a !== audio) {
                a.pause();
                a.currentTime = 0;
            }
        });

        // Reproducir o pausar el audio de esta carta
        if (audio.paused) {
            audio.play().catch(() => console.log("El navegador bloqueó la reproducción"));
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    });
});















