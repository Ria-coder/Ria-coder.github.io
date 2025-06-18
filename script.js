// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при прокрутке
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            if (entry.target.classList.contains('teacher-card')) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        }
    });
}, observerOptions);

document.querySelectorAll('.course-card, .feature-card, .teacher-card, .about-card').forEach((el) => {
    observer.observe(el);
    if (el.classList.contains('teacher-card')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }
});

// Анимация для кнопки "Войти"
const loginBtn = document.querySelector('.login-btn');
loginBtn.addEventListener('click', () => {
    // Здесь можно добавить логику для открытия модального окна входа
    alert('Функция входа будет доступна в ближайшее время!');
});

// Анимация для кнопки "Начать обучение"
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    // Здесь можно добавить логику для перехода к регистрации
    alert('Функция регистрации будет доступна в ближайшее время!');
});

// Обработка формы обратной связи
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    contactForm.reset();
});

// Добавление анимации для карточек курсов
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Анимация для кнопок "Подробнее"
document.querySelectorAll('.course-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Здесь можно добавить логику для показа подробной информации о курсе
        alert('Подробная информация о курсе будет доступна в ближайшее время!');
    });
});

// Добавление эффекта параллакса для фона
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.hero::before, .hero::after, .about::before').forEach(element => {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Анимация для карточек преподавателей
document.querySelectorAll('.teacher-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const image = card.querySelector('.teacher-image img');
        image.style.transform = 'scale(1.1)';
    });
    
    card.addEventListener('mouseleave', () => {
        const image = card.querySelector('.teacher-image img');
        image.style.transform = 'scale(1)';
    });
});

// Анимация для социальных иконок
document.querySelectorAll('.teacher-social a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Прокрутка карточек преподавателей
const teachersGrid = document.querySelector('.teachers-grid');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');
const scrollDots = document.querySelectorAll('.scroll-dot');

const cardWidth = 280; // Ширина карточки + отступ
const cardsPerView = Math.floor(teachersGrid.clientWidth / cardWidth);
const totalCards = document.querySelectorAll('.teacher-card').length;
let currentIndex = 0;

// Функция для обновления активной точки
const updateActiveDot = (index) => {
    scrollDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
};

// Функция для прокрутки к определенной карточке
const scrollToCard = (index) => {
    currentIndex = index;
    const scrollPosition = index * cardWidth;
    teachersGrid.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
    updateActiveDot(Math.floor(index / cardsPerView));
};

// Обработчики для кнопок прокрутки
scrollLeftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalCards) % totalCards;
    scrollToCard(currentIndex);
});

scrollRightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalCards;
    scrollToCard(currentIndex);
});

// Обработчики для точек навигации
scrollDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToCard(index * cardsPerView);
    });
});

// Автоматическая прокрутка
let autoScrollInterval;

const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalCards;
        scrollToCard(currentIndex);
    }, 5000); // Прокрутка каждые 5 секунд
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
};

// Запуск автоматической прокрутки при наведении на секцию
const teachersSection = document.querySelector('.teachers');
teachersSection.addEventListener('mouseenter', stopAutoScroll);
teachersSection.addEventListener('mouseleave', startAutoScroll);

// Запускаем автоматическую прокрутку
startAutoScroll();

// Обновление видимости кнопок прокрутки
const updateScrollButtons = () => {
    scrollLeftBtn.style.opacity = '1';
    scrollRightBtn.style.opacity = '1';
};

teachersGrid.addEventListener('scroll', updateScrollButtons);
window.addEventListener('resize', () => {
    updateScrollButtons();
    // Пересчитываем количество карточек на экране при изменении размера окна
    cardsPerView = Math.floor(teachersGrid.clientWidth / cardWidth);
});
updateScrollButtons(); 