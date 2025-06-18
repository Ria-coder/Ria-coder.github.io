import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  return (
    <div className="courses-page">
      <div className="courses-geo-shapes">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}}>
          <circle cx="120" cy="120" r="60" fill="#FF8C42" fillOpacity="0.18" />
          <circle cx="1350" cy="80" r="40" fill="#2D3A8C" fillOpacity="0.18" />
          <rect x="-60" y="600" width="180" height="180" rx="40" fill="#FF6B35" fillOpacity="0.13" />
          <polygon points="1440,700 1340,800 1440,800" fill="#FFB185" fillOpacity="0.18" />
          <circle cx="300" cy="700" r="50" fill="#F76E9A" fillOpacity="0.13" />
          <rect x="1200" y="600" width="120" height="120" rx="60" fill="#2D3A8C" fillOpacity="0.10" />
          <polygon points="0,0 80,0 0,80" fill="#FFD580" fillOpacity="0.18" />
        </svg>
      </div>
      <h1 className="courses-title">Предметы, с которыми мы можем помочь</h1>
      <div className="courses-grid">
        <div className="course-card pink" id="math">
          <h3 style={{color: '#d94f8a'}}>Математика</h3>
          <ul className="course-features">
            <li>Алгебра и геометрия</li>
            <li>Ментальная арифметика</li>
            <li>Стереометрия</li>
            <li>Теория вероятности</li>
            <li>Подготовка к ЕГЭ</li>
            <li>Олимпиадная математика</li>
          </ul>
          <button className="course-btn pink-btn" type="button">
            Подробнее
            <span className="course-tooltip">Углублённая подготовка к экзаменам, индивидуальный подход, современные методики обучения.</span>
          </button>
        </div>
        <div className="course-card green" id="physics">
          <h3 style={{color: '#7bb800'}}>Физика</h3>
          <ul className="course-features">
            <li>Механика</li>
            <li>Термодинамика</li>
            <li>Электричество и магнетизм</li>
            <li>Оптика</li>
            <li>Квантовая физика</li>
            <li>Подготовка к олимпиадам</li>
          </ul>
          <button className="course-btn green-btn" type="button">
            Подробнее
            <span className="course-tooltip">Практические эксперименты, подготовка к олимпиадам, разбор сложных задач.</span>
          </button>
        </div>
        <div className="course-card purple" id="chemistry">
          <h3 style={{color: '#8A2BE2'}}>Химия</h3>
          <ul className="course-features">
            <li>Органическая химия</li>
            <li>Неорганическая химия</li>
            <li>Аналитическая химия</li>
            <li>Практические задания</li>
            <li>Подготовка к олимпиадам</li>
            <li>Экспериментальные методы</li>
          </ul>
          <button className="course-btn purple-btn" type="button">
            Подробнее
            <span className="course-tooltip">Экспериментальные задания, подготовка к олимпиадам, разбор сложных тем.</span>
          </button>
        </div>
        <div className="course-card pink" id="russian">
          <h3 style={{color: '#d94f8a'}}>Русский язык</h3>
          <ul className="course-features">
            <li>Грамматика и орфография</li>
            <li>Развитие письменной речи</li>
            <li>Анализ текстов</li>
            <li>Сочинения и эссе</li>
            <li>Подготовка к ОГЭ</li>
            <li>Подготовка к ЕГЭ</li>
          </ul>
          <button className="course-btn pink-btn" type="button">
            Подробнее
            <span className="course-tooltip">Глубокий разбор грамматики, сочинения, подготовка к экзаменам любого уровня.</span>
          </button>
        </div>
        <div className="course-card green">
          <h3 style={{color: '#7bb800'}}>Литература</h3>
          <ul className="course-features">
            <li>Анализ произведений</li>
            <li>История литературы</li>
            <li>Развитие критического мышления</li>
            <li>Поэтика и стилистика</li>
            <li>Подготовка к экзаменам</li>
            <li>Сочинения и эссе</li>
          </ul>
          <button className="course-btn green-btn" type="button">
            Подробнее
            <span className="course-tooltip">Анализ текстов, подготовка к сочинениям, развитие литературного вкуса.</span>
          </button>
        </div>
        <div className="course-card purple">
          <h3 style={{color: '#8A2BE2'}}>Биология</h3>
          <ul className="course-features">
            <li>Ботаника</li>
            <li>Зоология</li>
            <li>Генетика и экология</li>
            <li>Анатомия человека</li>
            <li>Подготовка к экзаменам</li>
            <li>Молекулярная биология</li>
          </ul>
          <button className="course-btn purple-btn" type="button">
            Подробнее
            <span className="course-tooltip">Практические задания, подготовка к экзаменам, современные методики.</span>
          </button>
        </div>
        <div className="course-card pink">
          <h3 style={{color: '#d94f8a'}}>Английский язык</h3>
          <ul className="course-features">
            <li>Грамматика и лексика</li>
            <li>Разговорная практика</li>
            <li>Аудирование</li>
            <li>Чтение и письмо</li>
            <li>Подготовка к ОГЭ и ЕГЭ</li>
            <li>Современные методики</li>
          </ul>
          <button className="course-btn pink-btn" type="button">
            Подробнее
            <span className="course-tooltip">Общение с носителями, подготовка к экзаменам, интерактивные занятия.</span>
          </button>
        </div>
        <div className="course-card green">
          <h3 style={{color: '#7bb800'}}>Информатика</h3>
          <ul className="course-features">
            <li>Программирование</li>
            <li>Алгоритмы и логика</li>
            <li>Подготовка к ЕГЭ и ОГЭ</li>
            <li>Современные технологии</li>
            <li>Компьютерные сети</li>
            <li>Решение задач</li>
          </ul>
          <button className="course-btn green-btn" type="button">
            Подробнее
            <span className="course-tooltip">Практика программирования, разбор задач, современные технологии.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Courses; 