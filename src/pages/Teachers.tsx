import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Teachers: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="teachers-page-bg">
      <div className="teachers-page-container">
        {/* Карточка по русскому языку */}
        <div className="teacher-card teacher-card-horizontal purple" style={{position: 'relative', overflow: 'hidden'}}>
          {/* SVG полупрозрачные контуры кругов справа на фоне, не обрезаются */}
          <div className="teacher-card-bg-spiral">
            <svg width="1200" height="420" viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1000" cy="210" r="170" stroke="#a259ff" strokeWidth="18" fill="none" opacity="0.22"/>
              <circle cx="1100" cy="180" r="120" stroke="#c6b6ff" strokeWidth="14" fill="none" opacity="0.18"/>
              <circle cx="950" cy="350" r="80" stroke="#8A2BE2" strokeWidth="10" fill="none" opacity="0.13"/>
              <circle cx="1150" cy="320" r="60" stroke="#ede0ff" strokeWidth="8" fill="none" opacity="0.18"/>
            </svg>
          </div>
          <div className="teacher-photo-wrapper">
            <div className="teacher-photo-flip">
              <div className="teacher-photo-flip-inner">
                <div className="teacher-photo-front">
                  <img src="/images/Lizka.jpg" alt="Елизавета Рашкина" className="teacher-photo" />
                </div>
                <div className="teacher-photo-back">
                  <div className="teacher-photo-back-text">
                    Готовы к языковым приключениям? Тогда вперёд — к грамотности и интересным открытиям!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="teacher-info-block">
            <h3 className="teacher-subject">Русский язык</h3>
            <div className="teacher-name">Елизавета Рашкина</div>
            <div className="teacher-grades">Работает с 9–11 классами</div>
            <blockquote className="teacher-quote teacher-quote-large">Русский язык — великий и могучий, но… почему в нём столько исключений?</blockquote>
            <div className="teacher-prices">
              <div className="price-row">
                <span>1 занятие:</span>
                <span className="price-value">1 200 ₽</span>
              </div>
              <div className="price-row">
                <span>Абонемент (10 занятий):</span>
                <span className="price-value">10 500 ₽</span>
              </div>
            </div>
            <button className="teacher-signup-btn" onClick={() => navigate('/booking')}>Записаться</button>
          </div>
        </div>
        {/* Карточка по математике — Мария Пуртова */}
        <div className="teacher-card teacher-card-horizontal pink" style={{position: 'relative', overflow: 'hidden', marginTop: '3.5rem'}}>
          {/* SVG розовые круги теперь влево */}
          <div className="teacher-card-bg-spiral">
            <svg width="1200" height="420" viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="210" r="170" stroke="#ffb6d5" strokeWidth="18" fill="none" opacity="0.22"/>
              <circle cx="100" cy="180" r="120" stroke="#ff69b4" strokeWidth="14" fill="none" opacity="0.18"/>
              <circle cx="250" cy="350" r="80" stroke="#d94f8a" strokeWidth="10" fill="none" opacity="0.13"/>
              <circle cx="50" cy="320" r="60" stroke="#ffe0ec" strokeWidth="8" fill="none" opacity="0.18"/>
            </svg>
          </div>
          <div className="teacher-info-block">
            <h3 className="teacher-subject">Математика</h3>
            <div className="teacher-name">Мария Пуртова</div>
            <div className="teacher-grades">Работает с 1–9 классами</div>
            <blockquote className="teacher-quote teacher-quote-large">Математика — как LEGO для гениев: соберёшь правильно — получишь шедевр, ошибёшься... ну что ж, попробуем ещё раз! Ведь даже Архимед начинал с простых кубиков.</blockquote>
            <div className="teacher-prices">
              <div className="price-row">
                <span>1 занятие:</span>
                <span className="price-value">1 000 ₽</span>
              </div>
              <div className="price-row">
                <span>Абонемент (10 занятий):</span>
                <span className="price-value">8 500 ₽</span>
              </div>
            </div>
            <button className="teacher-signup-btn" onClick={() => navigate('/booking')}>Записаться</button>
          </div>
          <div className="teacher-photo-wrapper">
            <div className="teacher-photo-flip">
              <div className="teacher-photo-flip-inner">
                <div className="teacher-photo-front">
                  <img src="/images/Рия.jpg" alt="Мария Пуртова" className="teacher-photo" />
                </div>
                <div className="teacher-photo-back">
                  <div className="teacher-photo-back-text">
                    Математика — это не только формулы, но и увлекательные открытия! Готовы удивляться вместе?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Карточка по физике — Ульяна Хамидуллина */}
        <div className="teacher-card teacher-card-horizontal green" style={{position: 'relative', overflow: 'hidden', marginTop: '3.5rem'}}>
          {/* SVG зеленые круги теперь вправо */}
          <div className="teacher-card-bg-spiral">
            <svg width="1200" height="420" viewBox="0 0 1200 420" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1000" cy="210" r="170" stroke="#d6ff7f" strokeWidth="18" fill="none" opacity="0.22"/>
              <circle cx="1100" cy="180" r="120" stroke="#b6e65a" strokeWidth="14" fill="none" opacity="0.18"/>
              <circle cx="950" cy="350" r="80" stroke="#7bb800" strokeWidth="10" fill="none" opacity="0.13"/>
              <circle cx="1150" cy="320" r="60" stroke="#f3ffe0" strokeWidth="8" fill="none" opacity="0.18"/>
            </svg>
          </div>
          <div className="teacher-photo-wrapper">
            <div className="teacher-photo-flip">
              <div className="teacher-photo-flip-inner">
                <div className="teacher-photo-front">
                  <img src="/images/Уля.jpg" alt="Ульяна Хамидуллина" className="teacher-photo" />
                </div>
                <div className="teacher-photo-back">
                  <div className="teacher-photo-back-text">
                    Правила в химии как рецепт: если соблюдать — получишь «вау!», если нет — «ой-ой-ой». Давай стремиться к первому!
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="teacher-info-block">
            <h3 className="teacher-subject">Химия</h3>
            <div className="teacher-name">Ульяна Хамидуллина</div>
            <div className="teacher-grades">Работает с 7–11 классами</div>
            <blockquote className="teacher-quote teacher-quote-large">Каждая реакция — история любви между атомами, каждый эксперимент — шаг к разгадке великой тайны бытия.</blockquote>
            <div className="teacher-prices">
              <div className="price-row">
                <span>1 занятие:</span>
                <span className="price-value">2 000 ₽</span>
              </div>
              <div className="price-row">
                <span>Абонемент (5 занятий):</span>
                <span className="price-value">7 500 ₽</span>
              </div>
            </div>
            <button className="teacher-signup-btn" onClick={() => navigate('/booking')}>Записаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers; 