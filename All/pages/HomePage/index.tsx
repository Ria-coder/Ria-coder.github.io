import React from 'react'
import Header from '../../widget/header'

const HomePage = () => {
    return (
        <>
            <Header/>

            <main>
                <section id="home" className="hero">
                    <div className="hero-content">
                        <h1>Достигайте новых высот в обучении</h1>
                        <p>Подготовка к ОГЭ и ЕГЭ с лучшими преподавателями онлайн</p>
                        <a href="#courses" className="cta-button">Начать обучение</a>
                    </div>
                    <div className="circle-1"></div>
                    <div className="circle-2"></div>
                    <div className="circle-3"></div>
                </section>

                <section id="courses" className="courses">
                    <h2>Наши курсы</h2>
                    <div className="course-grid">
                        <div className="course-card">
                            <i className="fas fa-calculator"></i>
                            <h3>Математика</h3>
                            <p>Подготовка к ОГЭ и ЕГЭ</p>
                            <button className="course-btn">Подробнее</button>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-flask"></i>
                            <h3>Физика</h3>
                            <p>Подготовка к ОГЭ и ЕГЭ</p>
                            <button className="course-btn">Подробнее</button>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-atom"></i>
                            <h3>Химия</h3>
                            <p>Подготовка к ОГЭ и ЕГЭ</p>
                            <button className="course-btn">Подробнее</button>
                        </div>
                        <div className="course-card">
                            <i className="fas fa-book"></i>
                            <h3>Русский язык</h3>
                            <p>Подготовка к ОГЭ и ЕГЭ</p>
                            <button className="course-btn">Подробнее</button>
                        </div>
                    </div>
                </section>

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

                <section id="teachers" className="teachers">
                    <h2>Наши преподаватели</h2>
                    <div className="teachers-grid">
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель математики"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Александр Петров</h3>
                                    <p>Эксперт ЕГЭ по математике</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель физики"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Елена Смирнова</h3>
                                    <p>Эксперт ЕГЭ по физике</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель химии"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Михаил Иванов</h3>
                                    <p>Эксперт ЕГЭ по химии</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель русского языка"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Анна Кузнецова</h3>
                                    <p>Эксперт ЕГЭ по русскому языку</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель информатики"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Дмитрий Соколов</h3>
                                    <p>Эксперт ЕГЭ по информатике</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель английского языка"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Мария Новикова</h3>
                                    <p>Эксперт ЕГЭ по английскому языку</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="teacher-card">
                            <div className="teacher-image">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Преподаватель биологии"/>
                            </div>
                            <div className="teacher-info">
                                <div>
                                    <h3>Иван Морозов</h3>
                                    <p>Эксперт ЕГЭ по биологии</p>
                                </div>
                                <div className="teacher-social">
                                    <a href="#"><i className="fab fa-vk"></i></a>
                                    <a href="#"><i className="fab fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="teachers-navigation">
                        <button className="scroll-btn" id="scrollLeft">
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <button className="scroll-btn" id="scrollRight">
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                    <div className="scroll-indicator">
                        <div className="scroll-dot active" data-index="0"></div>
                        <div className="scroll-dot" data-index="1"></div>
                        <div className="scroll-dot" data-index="2"></div>
                        <div className="scroll-dot" data-index="3"></div>
                    </div>
                </section>

                <section id="about" className="about">
                    <div className="about-content">
                        <h2>О нашей школе</h2>
                        <div className="about-grid">
                            <div className="about-card">
                                <i className="fas fa-graduation-cap"></i>
                                <h3>Наша миссия</h3>
                                <p>Помогаем каждому ученику достичь максимальных результатов в обучении и подготовке к экзаменам</p>
                            </div>
                            <div className="about-card">
                                <i className="fas fa-chart-bar"></i>
                                <h3>Наши достижения</h3>
                                <p>Более 1000 успешно подготовленных учеников и средний балл ЕГЭ выше 80</p>
                            </div>
                            <div className="about-card">
                                <i className="fas fa-users"></i>
                                <h3>Наша команда</h3>
                                <p>Опытные преподаватели с многолетним стажем подготовки к ЕГЭ и ОГЭ</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <h2>Свяжитесь с нами</h2>
                    <div className="contact-container">
                        <form className="contact-form">
                            <input type="text" placeholder="Ваше имя" required/>
                            <input type="email" placeholder="Email" required/>
                            <textarea placeholder="Ваше сообщение" required></textarea>
                            <button type="submit" className="submit-btn">Отправить</button>
                        </form>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h3>Estudios</h3>
                        <p>Ваш путь к успеху начинается здесь</p>
                    </div>
                    <div className="footer-section">
                        <h3>Контакты</h3>
                        <p>Email: info@estudios.ru</p>
                        <p>Телефон: +7 (999) 123-45-67</p>
                    </div>
                    <div className="footer-section">
                        <h3>Социальные сети</h3>
                        <div className="social-links">
                            <a href="#"><i className="fab fa-vk"></i></a>
                            <a href="#"><i className="fab fa-telegram"></i></a>
                            <a href="#"><i className="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Estudios. Все права защищены.</p>
                </div>
            </footer>
        </>
    )
}

export default HomePage
