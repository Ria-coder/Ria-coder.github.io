import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import MathCourse from './pages/courses/MathCourse';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/math" element={<MathCourse />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/booking" element={<Login />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App; 
