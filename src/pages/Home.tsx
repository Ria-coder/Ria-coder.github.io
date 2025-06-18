import React, { useEffect, useState } from 'react';
import { animateOnScroll, initParallaxEffect, initTeacherCarousel, initFormValidation } from '../utils/animations';
import { Link } from 'react-router-dom';

const TEACHERS = [
  {
    img: '/images/Dashka.jpg',
    name: 'Дарья Яковлева',
    desc: 'Эксперт ЕГЭ по математике',
    vk: '#',
    tg: '#',
  },
  {
    img: '/images/Lizka.jpg',
    name: 'Елизавета Рашкина',
    desc: 'Эксперт ЕГЭ по английскому',
    vk: '#',
    tg: '#',
  },
  {
    img: '/images/Ksuxa.jpg',
    name: 'Ксения Максимова',
    desc: 'Эксперт ЕГЭ по литературе',
    vk: '#',
    tg: '#',
  },
  {
    img: '/images/Sachka.jpg',
    name: 'Александра Библ',
    desc: 'Психолог',
    vk: '#',
    tg: '#',
  },
  {
    img: '/images/Рия.jpg',
    name: 'Мария Пуртова',
    desc: 'Эксперт ОГЭ по математике',
    vk: '#',
    tg: '#',
  },
  {
    img: '/images/Уля.jpg',
    name: 'Ульяна Хамидуллина',
    desc: 'Эксперт ЕГЭ по биологии',
    vk: '#',
    tg: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    name: 'Иван Морозов',
    desc: 'Эксперт ЕГЭ по биологии',
    vk: '#',
    tg: '#',
  },
];

const TEACHERS_PER_PAGE = 4;

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');

  const validateName = (value: string) => {
    if (!value.trim()) return 'Введите имя';
    if (!/^[А-Яа-яA-Za-zЁё\s'-]{2,}$/.test(value)) return 'Имя должно содержать только буквы и быть не короче 2 символов';
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateName(name);
    setNameError(err);
    if (err) return;
    // Здесь можно добавить отправку формы
    alert('Спасибо за ваше сообщение!');
    setName(''); setEmail(''); setMessage('');
  };

  useEffect(() => {
    animateOnScroll();
    initParallaxEffect();
    initTeacherCarousel();
    initFormValidation();
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero" style={{
        position: 'relative',
        minHeight: 700,
        width: '100vw',
        overflow: 'hidden',
        background: '#f6eaff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Фоновое изображение-градиент */}
        <img src="/images/gradient-bg.jpg" alt="background" style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          userSelect: 'none'
        }} />
        {/* Подложка с надписями и кнопкой */}
        <div style={{
          position: 'relative',
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 32,
          boxShadow: '0 8px 48px 0 rgba(138,43,226,0.10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          textAlign: 'center',
          padding: '3.5rem 2.5rem',
          maxWidth: 700,
          margin: '0 auto',
        }}>
          <h1 style={{color: '#6c1bb7', fontWeight: 900, fontSize: '3.2rem', marginBottom: 18, letterSpacing: 1, lineHeight: 1.1}}>Учитесь с теми, кто вдохновляет!</h1>
          <div style={{fontSize: '1.35rem', color: '#ff8c42', fontWeight: 500, marginBottom: 32, marginTop: 10}}>Ваш репетитор ждет вас здесь!</div>
          <a href="#courses" className="cta-button" style={{fontSize: '1.25rem', fontWeight: 700, padding: '1.1rem 2.8rem', borderRadius: 30, marginTop: 10}}>Начать обучение</a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <div className="courses-title-oval"><h2>Предметы</h2></div>
        <div className="course-grid">
          <div className="course-card">
            <div className="course-icon-wrapper">
              <i className="fa-solid fa-calculator"></i>
            </div>
            <h3>Математика</h3>
            <p>Подготовка к ОГЭ и ЕГЭ</p>
            <Link to="/courses#math" className="course-btn">Подробнее</Link>
          </div>
          <div className="course-card">
            <div className="course-icon-wrapper">
              <i className="fa-solid fa-flask"></i>
            </div>
            <h3>Физика</h3>
            <p>Подготовка к ОГЭ и ЕГЭ</p>
            <Link to="/courses#physics" className="course-btn">Подробнее</Link>
          </div>
          <div className="course-card">
            <div className="course-icon-wrapper">
              <i className="fa-solid fa-atom"></i>
            </div>
            <h3>Химия</h3>
            <p>Подготовка к ОГЭ и ЕГЭ</p>
            <Link to="/courses#chemistry" className="course-btn">Подробнее</Link>
          </div>
          <div className="course-card">
            <div className="course-icon-wrapper">
              <i className="fa-solid fa-book"></i>
            </div>
            <h3>Русский язык</h3>
            <p>Подготовка к ОГЭ и ЕГЭ</p>
            <Link to="/courses#russian" className="course-btn">Подробнее</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Почему выбирают нас</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-chart-line"></i>
            <h3>Высокие результаты</h3>
            <p>95% наших учеников успешно сдают экзамены</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-users"></i>
            <h3>Опытные преподаватели</h3>
            <p>Занятия ведут эксперты ЕГЭ и ОГЭ</p>
          </div>
          <div className="feature-card">
            <i className="fas fa-laptop"></i>
            <h3>Удобный формат</h3>
            <p>Учитесь из любой точки мира</p>
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="teachers">
        <h2>Наши преподаватели</h2>
        {(() => {
          const [current, setCurrent] = useState(0);
          const maxIndex = TEACHERS.length;
          const handleLeft = () => setCurrent((prev) => (prev - 1 + maxIndex) % maxIndex);
          const handleRight = () => setCurrent((prev) => (prev + 1) % maxIndex);
          const visible = Array.from({ length: TEACHERS_PER_PAGE }).map((_, i) => TEACHERS[(current + i) % TEACHERS.length]);
          return (
            <>
              <div className="teachers-grid">
                {visible.map((t, i) => (
                  <div className="teacher-card" key={t.name + i}>
                    <div className="teacher-image">
                      <img src={t.img} alt={t.desc} />
                    </div>
                    <div className="teacher-info">
                      <div>
                        <h3>{t.name}</h3>
                        <p>{t.desc}</p>
                      </div>
                      <div className="teacher-social">
                        <a href={t.vk}><i className="fab fa-vk"></i></a>
                        <a href={t.tg}><i className="fab fa-telegram"></i></a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="teachers-navigation">
                <button className="scroll-btn" onClick={handleLeft}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="scroll-btn" onClick={handleRight}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
              <div className="scroll-indicator">
                {TEACHERS.map((_, idx) => (
                  <div
                    key={idx}
                    className={"scroll-dot" + (idx === current ? " active" : "")}
                    onClick={() => setCurrent(idx)}
                    data-index={idx}
                  ></div>
                ))}
              </div>
              <Link to="/teachers" className="teachers-more-btn">Подробнее</Link>
            </>
          );
        })()}
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact" style={{position: 'relative', minHeight: 700, width: '100vw', overflow: 'hidden', background: '#f7f8fa', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        {/* SVG фон с крупными кругами */}
        <svg width={1200} height={700} style={{position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', zIndex: 0, pointerEvents: 'none'}}>
          {Array.from({length: Math.ceil(1200 / 80)}).map((_, i) => (
            Array.from({length: Math.ceil(700 / 80)}).map((_, j) => (
              <circle
                key={i + '-' + j}
                cx={i * 80 + 40}
                cy={j * 80 + 40}
                r={40}
                fill={["#ff69b4", "#8A2BE2", "#7bb800", "#ff8c42", "#c6b6ff"][(i + j) % 5]}
                opacity={0.22 + 0.13 * ((i+j)%3)}
              />
            ))
          ))}
        </svg>
        <div style={{
          position: 'relative',
          background: 'rgba(255,255,255,0.97)',
          borderRadius: 32,
          boxShadow: '0 8px 48px 0 rgba(138,43,226,0.10)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1,
          textAlign: 'center',
          padding: '3.5rem 2.5rem',
          maxWidth: 700,
          margin: '0 auto',
          width: '100%'
        }}>
          <h2>Свяжитесь с нами</h2>
          <div className="contact-container">
            <form className="contact-form" onSubmit={handleSubmit} style={{width: '100%'}}>
              <input
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={handleNameChange}
                required
                style={{width: '100%'}}
              />
              {nameError && <div style={{color: '#ff6b35', fontSize: '1rem', marginBottom: 8, textAlign: 'left'}}>{nameError}</div>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                style={{width: '100%'}}
              />
              <textarea
                placeholder="Ваше сообщение"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                style={{width: '100%'}}
              ></textarea>
              <button type="submit" className="submit-btn" style={{width: '100%'}}>Отправить</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home; 