import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <h1>Estudios</h1>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Открыть меню"
        >
          menu
        </button>
        <nav style={{ flex: 1 }}>
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><Link to="/" className={`nav-link${location.pathname === '/' ? ' active' : ''}`}>Главная</Link></li>
            <li><Link to="/courses" className={`nav-link${isActive('/courses') ? ' active' : ''}`}>Предметы</Link></li>
            <li><Link to="/teachers" className={`nav-link${isActive('/teachers') ? ' active' : ''}`}>Преподаватели</Link></li>
            <li><Link to="/about" className={`nav-link${isActive('/about') ? ' active' : ''}`}>О нас</Link></li>
            <li><Link to="/contacts" className={`nav-link${isActive('/contacts') ? ' active' : ''}`}>Контакты</Link></li>
            <li className="mobile-login-btn">
              <Link to="/booking" className="login-btn">Заниматься</Link>
            </li>
          </ul>
        </nav>
        <Link to="/booking" className="login-btn desktop-login-btn">Заниматься</Link>
      </div>
    </header>
  );
};

export default Header; 