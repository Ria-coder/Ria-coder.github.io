export const animateOnScroll = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        if (entry.target.classList.contains('teacher-card')) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.course-card, .feature-card, .teacher-card, .about-card').forEach((el) => {
    observer.observe(el);
  });
};

export const initParallaxEffect = () => {
  document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelectorAll('.hero::before, .hero::after, .about::before').forEach(element => {
      if (element instanceof HTMLElement) {
        element.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    });
  });
};

export const initTeacherCarousel = () => {
  // Эта функция больше не нужна, так как карусель теперь реализована в React-компоненте
};

export const initFormValidation = () => {
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
      (contactForm as HTMLFormElement).reset();
    });
  }
}; 