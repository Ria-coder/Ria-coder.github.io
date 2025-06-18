import React, { useState } from 'react';

const CIRCLES = [
  { size: 180, color: 'linear-gradient(45deg, #8A2BE2, #9370DB)', top: '8%', left: '8%', duration: 8, delay: 0 },
  { size: 120, color: 'linear-gradient(45deg, #FF6B35, #FF8C42)', top: '20%', left: '70%', duration: 10, delay: 1 },
  { size: 90, color: 'linear-gradient(45deg, #4CAF50, #7bb800)', top: '65%', left: '15%', duration: 12, delay: 2 },
  { size: 140, color: 'linear-gradient(45deg, #ff69b4, #ff8c42)', top: '60%', left: '60%', duration: 9, delay: 0.5 },
  { size: 100, color: 'linear-gradient(45deg, #c6b6ff, #8A2BE2)', top: '35%', left: '80%', duration: 11, delay: 1.5 },
  { size: 70, color: 'linear-gradient(45deg, #FFD700, #FF8C42)', top: '75%', left: '40%', duration: 13, delay: 2.5 },
  { size: 60, color: 'linear-gradient(45deg, #7bb800, #4CAF50)', top: '10%', left: '50%', duration: 7, delay: 1.2 },
  { size: 110, color: 'linear-gradient(45deg, #FF8C42, #FF6B35)', top: '80%', left: '80%', duration: 14, delay: 0.8 },
  { size: 80, color: 'linear-gradient(45deg, #8A2BE2, #ff69b4)', top: '50%', left: '30%', duration: 10, delay: 1.7 },
  { size: 60, color: 'linear-gradient(45deg, #9370DB, #c6b6ff)', top: '25%', left: '25%', duration: 8, delay: 2.2 },
];

// Данные о преподавателях и их предметах
const TEACHERS_DATA = {
  'Ульяна Хамидуллина': ['биология', 'химия'],
  'Елизавета Рашкина': ['английский', 'русский'],
  'Ксения Максимова': ['русский', 'литература'],
  'Мария Пуртова': ['математика', 'физика'],
  'Дарья Яковлева': ['математика'],
  'Александра Библ': ['обществознание', 'история'],
  'Иван Морозов': ['информатика', 'физика']
};

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    teacher: '',
    day: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'subject') {
      // При смене предмета сбрасываем выбор преподавателя
      setFormData(prev => ({
        ...prev,
        [name]: value,
        teacher: ''
      }));
    } else {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    }
  };

  // Получаем список преподавателей для выбранного предмета
  const getAvailableTeachers = (subject: string) => {
    if (!subject) return [];
    
    return Object.entries(TEACHERS_DATA)
      .filter(([_, subjects]) => 
        subjects.some(sub => sub.toLowerCase() === subject.toLowerCase())
      )
      .map(([teacherName, _]) => teacherName);
  };

  const availableTeachers = getAvailableTeachers(formData.subject);

  if (isSubmitted) {
    return (
      <div className="login-page" style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f3eafe 0%, #fff7f0 50%, #f0f8ff 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Анимированные кружки */}
        {CIRCLES.map((circle, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: circle.top,
              left: circle.left,
              width: circle.size,
              height: circle.size,
              background: circle.color,
              borderRadius: '50%',
              opacity: 0.18,
              filter: 'blur(0.5px)',
              zIndex: 0,
              animation: `moveCircle ${circle.duration}s ease-in-out infinite alternate`,
              animationDelay: `${circle.delay}s`,
            }}
          />
        ))}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          padding: '3rem',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(138, 43, 226, 0.15)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(138, 43, 226, 0.1)',
          maxWidth: '450px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            background: 'linear-gradient(45deg, #4CAF50, #45a049)',
            borderRadius: '50%',
            margin: '0 auto 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)'
          }}>
            <span style={{ fontSize: '2rem', color: 'white' }}>✓</span>
          </div>
          
          <h1 style={{
            color: '#4CAF50',
            marginBottom: '1.5rem',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #4CAF50, #45a049)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>Вы успешно записаны!</h1>
          
          <p style={{
            marginBottom: '2rem',
            fontSize: '1.1rem',
            color: '#666',
            lineHeight: 1.6
          }}>Мы отправили подтверждение на вашу почту. Ждем вас на занятии!</p>
          
          <button 
            onClick={() => setIsSubmitted(false)}
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #9370DB, #8A2BE2)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(147, 112, 219, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(147, 112, 219, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(147, 112, 219, 0.3)';
            }}
          >
            Записаться еще
          </button>
        </div>

        <style>
          {`
            @keyframes moveCircle {
              0% { transform: translateY(0) scale(1); }
              50% { transform: translateY(-40px) scale(1.08); }
              100% { transform: translateY(0) scale(1); }
            }
          `}
        </style>
      </div>
    );
  }

  return (
    <div className="login-page" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f3eafe 0%, #fff7f0 50%, #f0f8ff 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Анимированные кружки */}
      {CIRCLES.map((circle, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: circle.top,
            left: circle.left,
            width: circle.size,
            height: circle.size,
            background: circle.color,
            borderRadius: '50%',
            opacity: 0.18,
            filter: 'blur(0.5px)',
            zIndex: 0,
            animation: `moveCircle ${circle.duration}s ease-in-out infinite alternate`,
            animationDelay: `${circle.delay}s`,
          }}
        />
      ))}
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(138, 43, 226, 0.15)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(138, 43, 226, 0.1)',
        maxWidth: '550px',
        width: '100%',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '2.5rem'
        }}>
          <h1 style={{
            color: '#8A2BE2',
            fontSize: '2.2rem',
            fontWeight: 'bold',
            marginBottom: '0.5rem',
            background: 'linear-gradient(45deg, #8A2BE2, #9370DB)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
        }}>Запись на занятие</h1>
          
          <p style={{
            color: '#666',
            fontSize: '1.1rem',
            margin: 0
          }}>Выберите предмет и преподавателя</p>
        </div>
        
        <form className="login-form" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }} onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontWeight: '600',
              fontSize: '1rem'
            }}>Введите ваш email</label>
            <input 
              id="email" 
              name="email" 
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                backgroundColor: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8A2BE2';
                e.target.style.boxShadow = '0 0 0 3px rgba(138, 43, 226, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontWeight: '600',
              fontSize: '1rem'
            }}>Выберите предмет</label>
            <select 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                backgroundColor: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8A2BE2';
                e.target.style.boxShadow = '0 0 0 3px rgba(138, 43, 226, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
              }}
            >
              <option value="">Выберите предмет</option>
              <option value="математика">Математика</option>
              <option value="физика">Физика</option>
              <option value="химия">Химия</option>
              <option value="биология">Биология</option>
              <option value="русский">Русский язык</option>
              <option value="литература">Литература</option>
              <option value="английский">Английский язык</option>
              <option value="история">История</option>
              <option value="обществознание">Обществознание</option>
              <option value="информатика">Информатика</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="teacher" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontWeight: '600',
              fontSize: '1rem'
            }}>Выберите преподавателя</label>
            <select 
              id="teacher" 
              name="teacher" 
              value={formData.teacher}
              onChange={handleChange}
              required
              disabled={!formData.subject}
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                backgroundColor: formData.subject ? 'white' : '#f5f5f5',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: formData.subject ? 'pointer' : 'not-allowed',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
                opacity: formData.subject ? 1 : 0.6
              }}
              onFocus={(e) => {
                if (formData.subject) {
                  e.target.style.borderColor = '#8A2BE2';
                  e.target.style.boxShadow = '0 0 0 3px rgba(138, 43, 226, 0.1)';
                }
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
              }}
            >
              <option value="">
                {formData.subject ? 'Выберите преподавателя' : 'Сначала выберите предмет'}
              </option>
              {availableTeachers.map(teacher => (
                <option key={teacher} value={teacher}>{teacher}</option>
              ))}
            </select>
            {formData.subject && availableTeachers.length === 0 && (
              <p style={{
                color: '#ff6b6b',
                fontSize: '0.9rem',
                marginTop: '0.5rem',
                fontStyle: 'italic'
              }}>
                К сожалению, для этого предмета пока нет доступных преподавателей
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="day" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontWeight: '600',
              fontSize: '1rem'
            }}>Выберите день</label>
            <select 
              id="day" 
              name="day" 
              value={formData.day}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                backgroundColor: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8A2BE2';
                e.target.style.boxShadow = '0 0 0 3px rgba(138, 43, 226, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
              }}
            >
              <option value="">Выберите день</option>
              <option value="monday">Понедельник</option>
              <option value="tuesday">Вторник</option>
              <option value="wednesday">Среда</option>
              <option value="thursday">Четверг</option>
              <option value="friday">Пятница</option>
              <option value="saturday">Суббота</option>
              <option value="sunday">Воскресенье</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="time" style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: '#8A2BE2',
              fontWeight: '600',
              fontSize: '1rem'
            }}>Выберите время</label>
            <select 
              id="time" 
              name="time" 
              value={formData.time}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '15px',
                borderRadius: '12px',
                border: '2px solid #e0e0e0',
                backgroundColor: 'white',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = '#8A2BE2';
                e.target.style.boxShadow = '0 0 0 3px rgba(138, 43, 226, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e0e0e0';
                e.target.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
              }}
            >
              <option value="">Выберите время</option>
              <option value="09:00">09:00</option>
              <option value="10:00">10:00</option>
              <option value="11:00">11:00</option>
              <option value="12:00">12:00</option>
              <option value="13:00">13:00</option>
              <option value="14:00">14:00</option>
              <option value="15:00">15:00</option>
              <option value="16:00">16:00</option>
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
            </select>
          </div>

          <button 
            type="submit" 
            style={{
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #FF6B35, #FF8C42)',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(255, 107, 53, 0.3)',
              marginTop: '1rem'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 107, 53, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 53, 0.3)';
            }}
          >
            Записаться
          </button>
        </form>
      </div>

      <style>
        {`
          @keyframes moveCircle {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-40px) scale(1.08); }
            100% { transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </div>
  );
};

export default Login; 