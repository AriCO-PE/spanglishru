// Contact Form Multilanguage
document.addEventListener('DOMContentLoaded', function() {
    console.log('Formulario de contacto cargado');
    
    // Traducciones
    const translations = {
        es: {
            title: "Formulario de Contacto",
            subtitle: "Complete los siguientes datos para ponerse en contacto",
            name_label: "Nombre completo",
            age_label: "Edad",
            phone_label: "Número de teléfono",
            telegram_label: "Usuario de Telegram",
            info_message: "Al enviar este formulario, se contactará con usted a través de Telegram",
            clear_btn: "Limpiar",
            submit_btn: "Enviar a @bladdlal",
            contact_title: "Contacto en Telegram",
            contact_info: "Los datos se enviarán a:",
            contact_time: "Se le contactará en un plazo máximo de 24 horas",
            modal_title: "Formulario Enviado",
            modal_message: "Sus datos se han enviado correctamente a",
            modal_followup: "Pronto se pondrá en contacto con usted a través de Telegram.",
            modal_button: "Aceptar",
            modal_data_name: "Nombre:",
            modal_data_age: "Edad:",
            modal_data_phone: "Teléfono:",
            modal_data_telegram: "Telegram:",
            validation_required: "Este campo es requerido",
            validation_age: "La edad debe estar entre 1 y 120 años",
            validation_telegram: "El usuario de Telegram no debe contener espacios"
        },
        en: {
            title: "Contact Form",
            subtitle: "Fill in the following details to get in touch",
            name_label: "Full name",
            age_label: "Age",
            phone_label: "Phone number",
            telegram_label: "Telegram username",
            info_message: "By submitting this form, you will be contacted via Telegram",
            clear_btn: "Clear",
            submit_btn: "Send to @bladdlal",
            contact_title: "Telegram Contact",
            contact_info: "Data will be sent to:",
            contact_time: "You will be contacted within 24 hours maximum",
            modal_title: "Form Submitted",
            modal_message: "Your data has been successfully sent to",
            modal_followup: "You will be contacted soon via Telegram.",
            modal_button: "OK",
            modal_data_name: "Name:",
            modal_data_age: "Age:",
            modal_data_phone: "Phone:",
            modal_data_telegram: "Telegram:",
            validation_required: "This field is required",
            validation_age: "Age must be between 1 and 120",
            validation_telegram: "Telegram username should not contain spaces"
        },
        ru: {
            title: "Контактная форма",
            subtitle: "Заполните следующие данные, чтобы связаться с нами",
            name_label: "Полное имя",
            age_label: "Возраст",
            phone_label: "Номер телефона",
            telegram_label: "Имя пользователя Telegram",
            info_message: "Отправляя эту форму, с вами свяжутся через Telegram",
            clear_btn: "Очистить",
            submit_btn: "Отправить @bladdlal",
            contact_title: "Контакт в Telegram",
            contact_info: "Данные будут отправлены:",
            contact_time: "С вами свяжутся в течение 24 часов",
            modal_title: "Форма отправлена",
            modal_message: "Ваши данные успешно отправлены",
            modal_followup: "С вами скоро свяжутся через Telegram.",
            modal_button: "ОК",
            modal_data_name: "Имя:",
            modal_data_age: "Возраст:",
            modal_data_phone: "Телефон:",
            modal_data_telegram: "Telegram:",
            validation_required: "Это поле обязательно для заполнения",
            validation_age: "Возраст должен быть от 1 до 120 лет",
            validation_telegram: "Имя пользователя Telegram не должно содержать пробелы"
        }
    };

    let currentLang = 'es';
    
    // Elementos del DOM
    const langSelect = document.getElementById('lang-select');
    const contactForm = document.getElementById('contactForm');
    const resetBtn = document.getElementById('resetBtn');
    const successModal = document.getElementById('successModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modalData = document.getElementById('modalData');
    
    // Función para cambiar idioma
    function changeLanguage(lang) {
        console.log('Cambiando idioma a:', lang);
        currentLang = lang;
        
        if (langSelect) langSelect.value = lang;
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        document.querySelectorAll('input[data-placeholder-es]').forEach(input => {
            const placeholderKey = `data-placeholder-${lang}`;
            if (input.hasAttribute(placeholderKey)) {
                input.placeholder = input.getAttribute(placeholderKey);
            }
        });
        
        document.documentElement.lang = lang;
    }
    
    // Cambiar idioma desde select
    if (langSelect) {
        langSelect.addEventListener('change', function() {
            changeLanguage(this.value);
        });
    }

    // Mostrar errores
    function showError(input, message) {
        const existingError = input.parentNode.querySelector('.error-message');
        if (existingError) existingError.remove();
        
        input.classList.add('error');
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = '#ff6b6b';
        input.parentNode.appendChild(errorElement);
    }

    // Validación
    function validateForm() {
        let isValid = true;

        document.querySelectorAll('.error-message').forEach(el => el.remove());
        document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

        const nombre = document.getElementById('nombre');
        if (!nombre.value.trim()) {
            showError(nombre, translations[currentLang].validation_required);
            isValid = false;
        }

        const edad = document.getElementById('edad');
        if (!edad.value.trim()) {
            showError(edad, translations[currentLang].validation_required);
            isValid = false;
        } else if (parseInt(edad.value) < 1 || parseInt(edad.value) > 120) {
            showError(edad, translations[currentLang].validation_age);
            isValid = false;
        }

        const telefono = document.getElementById('numero');
        if (!telefono.value.trim()) {
            showError(telefono, translations[currentLang].validation_required);
            isValid = false;
        }

        const telegram = document.getElementById('telegram');
        if (!telegram.value.trim()) {
            showError(telegram, translations[currentLang].validation_required);
            isValid = false;
        } else if (telegram.value.includes(' ')) {
            showError(telegram, translations[currentLang].validation_telegram);
            isValid = false;
        }

        return isValid;
    }

    // =====================================================
    // 🌟 ***FUNCIÓN AGREGADA*** → ABRIR TELEGRAM AUTOMÁTICO
    // =====================================================
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();

            if (!validateForm()) return;

            const formData = {
                nombre: document.getElementById('nombre').value.trim(),
                edad: document.getElementById('edad').value.trim(),
                numero: document.getElementById('numero').value.trim(),
                telegram: document.getElementById('telegram').value.trim()
            };

            // --- MENSAJE PARA TELEGRAM ---
            const msg =
                `Nuevo formulario:%0A` +
                `👤 Nombre: ${formData.nombre}%0A` +
                `🎂 Edad: ${formData.edad}%0A` +
                `📞 Teléfono: ${formData.numero}%0A` +
                `📨 Telegram: ${formData.telegram}`;

            window.open(`https://t.me/bladdlal?text=${msg}`, "_blank");

            console.log("Abriendo Telegram…");

            // --- MOSTRAR DATOS EN EL MODAL ---
            if (modalData) {
                const labels = {
                    nombre: translations[currentLang].modal_data_name,
                    edad: translations[currentLang].modal_data_age,
                    numero: translations[currentLang].modal_data_phone,
                    telegram: translations[currentLang].modal_data_telegram
                };

                let html = '';
                for (const key in formData) {
                    html += `
                        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                            <span style="color: #8892b0; font-weight: 500;">${labels[key]}</span>
                            <span style="color: #e6f1ff;">${formData[key]}</span>
                        </div>
                    `;
                }
                modalData.innerHTML = html;
            }

            if (successModal) {
                successModal.style.display = 'flex';
            }
        });
    }

    // Botón limpiar
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            contactForm.reset();
            document.querySelectorAll('.error-message').forEach(el => el.remove());
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
        });
    }
    
    // Cerrar modal
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', function() {
            successModal.style.display = 'none';
            contactForm.reset();
        });
    }

    successModal?.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
            contactForm.reset();
        }
    });
    
    // Idioma inicial
    changeLanguage('ru');

    // Estilos de errores
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: #ff6b6b !important;
        }
        .error-message {
            color: #ff6b6b;
            font-size: 14px;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(style);
    
    console.log('Script de formulario inicializado correctamente');
});



