import React from 'react'

const Header = () => {
    return(<>
    <header className="header">
        <nav className="nav-container">
            <div className="logo">
                <h1>Estudios</h1>
            </div>
            <ul class="nav-links">
                <li><a href="#home">Главная</a></li>
                <li><a href="#courses">Курсы</a></li>
                <li><a href="#teachers">Преподаватели</a></li>
                <li><a href="#about">О нас</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
            <button className="login-btn">Войти</button>
        </nav>
    </header>
    </>)
}

export default Header
