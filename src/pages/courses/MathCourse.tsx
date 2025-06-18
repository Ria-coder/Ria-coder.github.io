import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MathCourse: React.FC = () => {
  return (
    <div className="course-detail-page">
      <div className="course-header">
        <h1>Курс математики</h1>
        <p className="course-subtitle">Углубленное изучение математики с лучшими преподавателями</p>
      </div>

      <div className="course-content">
        <section className="course-info">
          <h2>О курсе</h2>
          <p>Наш курс математики поможет вам освоить все необходимые темы и подготовиться к экзаменам. 
             Мы используем современные методики обучения и индивидуальный подход к каждому студенту.</p>
        </section>

        <section className="course-program">
          <h2>Программа курса</h2>
          <div className="program-grid">
            <div className="program-item">
              <h3>Модуль 1: Алгебра</h3>
              <ul>
                <li>Линейные уравнения</li>
                <li>Квадратные уравнения</li>
                <li>Функции и графики</li>
              </ul>
            </div>
            <div className="program-item">
              <h3>Модуль 2: Геометрия</h3>
              <ul>
                <li>Планиметрия</li>
                <li>Стереометрия</li>
                <li>Тригонометрия</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="course-pricing">
          <h2>Стоимость обучения</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Базовый</h3>
              <p className="price">5,000 ₽/месяц</p>
              <ul>
                <li>2 занятия в неделю</li>
                <li>Групповые занятия</li>
                <li>Базовые материалы</li>
              </ul>
              <button className="btn primary">Выбрать план</button>
            </div>
            <div className="pricing-card featured">
              <h3>Продвинутый</h3>
              <p className="price">8,000 ₽/месяц</p>
              <ul>
                <li>3 занятия в неделю</li>
                <li>Индивидуальные консультации</li>
                <li>Расширенные материалы</li>
                <li>Подготовка к олимпиадам</li>
              </ul>
              <button className="btn primary">Выбрать план</button>
            </div>
          </div>
        </section>

        <section className="trial-lesson">
          <h2>Пробный урок</h2>
          <p>Запишитесь на бесплатный пробный урок и оцените качество нашего обучения</p>
          <button className="btn secondary">Записаться на пробный урок</button>
        </section>
      </div>

      <div className="course-navigation">
        <Link to="/courses" className="btn secondary">← Вернуться к курсам</Link>
      </div>
    </div>
  );
};

export default MathCourse; 