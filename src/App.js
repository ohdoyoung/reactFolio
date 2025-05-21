import React, { useState } from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa';
import Tech from './components/Tech';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'blue' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="navbar">
        <nav>
          <ul>
            <li>ABOUT</li>
            <li>TIMELINE</li>
            <li><a href="#tech">TECH</a></li>
            <li>PROJECTS</li>
            <li>CAREER</li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌙' : '💙'}
        </button>
      </header>

      <section className="intro-section fade-in">
        <h1>안녕하세요.</h1>
        <p>
          사용자가 원하는 경험을 하게 도와주고<br></br>
          디테일을 살려내는<br></br>
          풀스택 개발자 <strong>오도영</strong>입니다.
        </p>
      </section>

      <section className="code-snippet slide-up">
        <pre>
{`const dev = {
  name: '오도영',
  motto: '읽기 쉬운 코드, 보기 좋은 UI',
  stack: ['React', 'Spring Boot', 'Swift', 'Flutter','Java', 'MySQL','Git'],
};`}
        </pre>
      </section>

      <section className="timeline slide-up">
        <ol>
          <li><span>2002.06.27</span> 출생</li>
          <li><span>2025</span> 스마트인재개발원 수료</li>
          <li><span>2025</span> AI / 풀스택 프로젝트 진행</li>
          <li><span>Contact</span> dhehdud456@naver.com</li>
        </ol>
      </section>

      <section className="cards-section slide-up">
        <a className="card github" href="https://github.com/ohdoyoung" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
          <p>GitHub</p>
        </a>
        <a className="card velog" href="https://velog.io/@ohdoyoung" target="_blank" rel="noopener noreferrer">
          <span>📘</span>
          <p>Velog</p>
        </a>
      </section>
      <Tech />
    </div>
  );
}

export default App;
