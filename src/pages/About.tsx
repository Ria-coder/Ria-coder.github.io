import React, { useState } from 'react';

const faqData = [
  {
    question: 'Как выбрать репетитора?',
    answer: 'Выбирайте по опыту, отзывам и специализации. Мы поможем подобрать лучшего преподавателя под ваши цели.'
  },
  {
    question: 'Сколько стоят занятия с репетитором?',
    answer: 'Стоимость зависит от предмета и квалификации преподавателя. У нас есть гибкая система цен и абонементов.'
  },
  {
    question: 'Можно ли подготовиться к экзаменам с репетитором?',
    answer: 'Да! Наши преподаватели помогут подготовиться к ОГЭ, ЕГЭ и другим экзаменам.'
  },
  {
    question: 'Можно ли найти репетитора для онлайн-занятий на Estudios?',
    answer: 'Конечно! Все наши занятия проходят онлайн на удобной платформе.'
  },
  {
    question: 'Как быстро я могу начать заниматься?',
    answer: 'Вы можете начать уже в ближайшие дни — просто оставьте заявку!' 
  },
];

const bgColors = [
  'linear-gradient(90deg, #ffe0ec 60%, #ffb6d5 100%)', // розовый
  'linear-gradient(90deg, #ede0ff 60%, #c6b6ff 100%)', // фиолетовый
  'linear-gradient(90deg, #e0ff8a 60%, #baff39 100%)', // зеленый
];
const accentColors = ['#ff8c42', '#ff69b4', '#7bb800'];
const plusColors = ['#ff8c42', '#ff69b4', '#7bb800'];

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{position: 'relative', zIndex: 1}}>
      {/* SVG рамка из кругов */}
      <svg width="100%" height="100%" viewBox="0 0 1000 900" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none'}}>
        <circle cx="60" cy="60" r="65" fill="#ff69b4" fillOpacity="0.45" />
        <circle cx="940" cy="80" r="55" fill="#7bb800" fillOpacity="0.42" />
        <circle cx="80" cy="820" r="75" fill="#8A2BE2" fillOpacity="0.38" />
        <circle cx="950" cy="850" r="70" fill="#ff8c42" fillOpacity="0.40" />
        <circle cx="120" cy="200" r="45" fill="#ffb6d5" fillOpacity="0.50" />
        <circle cx="880" cy="300" r="60" fill="#e0ff8a" fillOpacity="0.48" />
        <circle cx="150" cy="700" r="50" fill="#c6b6ff" fillOpacity="0.45" />
        <circle cx="820" cy="650" r="40" fill="#ff69b4" fillOpacity="0.52" />
        <circle cx="200" cy="120" r="35" fill="#7bb800" fillOpacity="0.55" />
        <circle cx="780" cy="180" r="48" fill="#ff8c42" fillOpacity="0.47" />
        <circle cx="180" cy="780" r="42" fill="#ede0ff" fillOpacity="0.50" />
        <circle cx="850" cy="750" r="38" fill="#baff39" fillOpacity="0.53" />
      </svg>
      <div className="about-page" style={{
        padding: '120px 2rem 2rem 2rem',
        maxWidth: 900,
        margin: '0 auto',
        borderRadius: 32,
        background: 'linear-gradient(120deg, #ede0ff 60%, #ffe0ec 100%)',
        boxShadow: '0 8px 32px 0 rgba(255, 107, 53, 0.08), 0 1.5px 8px 0 rgba(255, 140, 66, 0.10)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          background: 'rgba(255,255,255,0.82)',
          borderRadius: 28,
          boxShadow: '0 2px 16px 0 rgba(123, 184, 0, 0.07)',
          padding: '2.5rem 2.5rem 2rem 2.5rem',
          marginBottom: 32,
          backdropFilter: 'blur(2px)'
        }}>
          <h1 style={{color: '#ff8c42', fontWeight: 900, fontSize: '2.5rem', letterSpacing: 1, marginBottom: 0}}>О нас</h1>
          <div style={{marginTop: 32, color: '#444', fontSize: '1.13rem', lineHeight: 1.7, fontWeight: 500}}>
            <p style={{marginBottom: 18}}>Добро пожаловать в <b style={{color: '#ff69b4'}}><i>Estudios</i></b> — ваше уютное образовательное пространство, где обучение становится не только эффективным, но и комфортным! Мы создали платформу с современными инструментами, чтобы каждый мог раскрыть свой потенциал в атмосфере доверия и поддержки.</p>
            <p style={{marginBottom: 18}}>Мы тщательно отбираем преподавателей, чтобы вы могли учиться у лучших профессионалов, которые искренне заботятся о вашем успехе. Наша команда готова помочь вам на каждом этапе вашего пути — от выполнения домашних заданий до подготовки к важным экзаменам.</p>
            <p>В <b style={{color: '#ff69b4'}}><i>Estudios</i></b> мы уверены, что обучение — это не просто процесс, а увлекательное путешествие, полное открытий и достижений. Присоединяйтесь к нашей дружной семье и откройте для себя мир знаний вместе с нами!</p>
          </div>
        </div>
        <div className="faq-block" style={{
          marginTop: 48,
          background: 'rgba(255,255,255,0.90)',
          borderRadius: 28,
          boxShadow: '0 2px 16px 0 rgba(123, 184, 0, 0.07)',
          padding: '2.5rem 2.5rem 2rem 2.5rem',
          backdropFilter: 'blur(2px)'
        }}>
          <h2 style={{color: '#ff69b4', fontWeight: 800, fontSize: '2rem', marginBottom: 24, letterSpacing: 1}}>FAQ</h2>
          {faqData.map((item, idx) => (
            <div
              key={item.question}
              className="faq-item"
              style={{
                background: 'transparent',
                borderRadius: 0,
                marginBottom: 8,
                boxShadow: 'none',
                padding: '0',
                cursor: 'pointer',
                border: 'none',
                position: 'relative',
              }}
              onClick={() => handleToggle(idx)}
            >
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 0 1.1rem 0'}}>
                <div style={{fontSize: '1.22rem', fontWeight: 700, color: '#222', flex: 1}}>{item.question}</div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 18,
                    fontSize: 28,
                    color: '#8A2BE2',
                    transition: 'transform 0.2s',
                    transform: openIndex === idx ? 'rotate(0deg)' : 'none',
                  }}
                >
                  {openIndex === idx ? '−' : '+'}
                </div>
              </div>
              {openIndex === idx && (
                <div
                  style={{
                    background: '#fff',
                    borderRadius: 0,
                    margin: '0 0 18px 0',
                    padding: '1.1rem 0.5rem 1.1rem 0',
                    color: '#444',
                    fontSize: '1.05rem',
                    borderTop: '1px solid #eee',
                    animation: 'fadeInFAQ 0.3s',
                    fontWeight: 400,
                    position: 'relative',
                  }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
          <style>{`
            @keyframes fadeInFAQ {
              from { opacity: 0; transform: translateY(-10px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>
  </div>
);
};

export default About; 