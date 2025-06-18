import React from 'react';

const PAGE_WIDTH = 1200;
const PAGE_HEIGHT = 700;
const DOT_STEP = 80;
const DOT_RADIUS = 40;
const DOT_COLORS = ['#ff69b4', '#8A2BE2', '#7bb800', '#ff8c42', '#c6b6ff'];
const MAIN_PURPLE = '#8A2BE2';

const Contacts: React.FC = () => (
  <div className="contacts-page" style={{position: 'relative', minHeight: PAGE_HEIGHT, width: '100vw', overflow: 'hidden', background: '#f7f8fa'}}>
    {/* SVG фон с очень крупными кружочками по всей странице */}
    <svg width={PAGE_WIDTH} height={PAGE_HEIGHT} style={{position: 'absolute', left: '50%', top: 0, transform: 'translateX(-50%)', zIndex: 0, pointerEvents: 'none'}}>
      {Array.from({length: Math.ceil(PAGE_WIDTH / DOT_STEP)}).map((_, i) => (
        Array.from({length: Math.ceil(PAGE_HEIGHT / DOT_STEP)}).map((_, j) => (
          <circle
            key={i + '-' + j}
            cx={i * DOT_STEP + DOT_STEP/2}
            cy={j * DOT_STEP + DOT_STEP/2}
            r={DOT_RADIUS}
            fill={DOT_COLORS[(i + j) % DOT_COLORS.length]}
            opacity={0.22 + 0.13 * ((i+j)%3)}
          />
        ))
      ))}
    </svg>
    {/* Прямоугольная подложка с контактами по центру */}
    <div style={{
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      minWidth: 340,
      maxWidth: 420,
      background: 'rgba(255,255,255,0.97)',
      borderRadius: 32,
      boxShadow: '0 8px 48px 0 rgba(138,43,226,0.10)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      textAlign: 'center',
      padding: '2.5rem 2.5rem',
    }}>
      <h1 style={{color: MAIN_PURPLE, fontWeight: 900, fontSize: '2.2rem', marginBottom: 18, letterSpacing: 1}}>Контакты</h1>
      <div style={{
        fontSize: '1.7rem',
        color: '#ff8c42',
        fontWeight: 900,
        marginBottom: 28,
        letterSpacing: 1.2,
        display: 'block',
      }}>
        Свяжитесь с нами по любым вопросам!
      </div>
      <div style={{fontSize: '1.08rem', color: '#333', fontWeight: 500, lineHeight: 1.7}}>
        <div style={{marginBottom: 10}}><b style={{color: MAIN_PURPLE}}>Поддержка:</b> <a href="tel:+79991234567" style={{color: MAIN_PURPLE, textDecoration: 'none'}}>+7 (999) 123-45-67</a></div>
        <div style={{marginBottom: 10}}><b style={{color: MAIN_PURPLE}}>Email:</b> <a href="mailto:info@school.com" style={{color: MAIN_PURPLE, textDecoration: 'none'}}>info@school.com</a></div>
        <div><b style={{color: MAIN_PURPLE}}>Адрес:</b> <span style={{color: MAIN_PURPLE}}>г. Казань, ул. Кремлевская, 35</span></div>
      </div>
    </div>
  </div>
);

export default Contacts; 