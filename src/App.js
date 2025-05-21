import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './App.css';
import { FaGithub } from 'react-icons/fa';
import { SiTistory } from 'react-icons/si';
import Tech from './components/Tech';
import ProjectList from './components/ProjectList';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [theme, setTheme] = useState('dark');

  const introRef = useRef(null);
  const codeRef = useRef(null);
  const timelineRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    document.title = '오도영의 포트폴리오';

    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        gsap.fromTo(toggleBtn, {
          scale: 1,
          rotation: 0
        }, {
          scale: 1.2,
          rotation: 360,
          duration: 0.5,
          ease: 'power1.out'
        });
      });
    }

    gsap.from(introRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: introRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(codeRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: codeRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(timelineRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
      },
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'blue' : 'dark');
  };

  return (
    <div className={`app ${theme}`}>
      <header className="navbar fixed-navbar">
        <nav>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#tech">TECH</a></li>
            <li><a href="#projects">PROJECTS</a></li>
          </ul>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '🌙' : '💙'}
        </button>
      </header>

      <section ref={introRef} className="intro-section fade-in">
        <h1>안녕하세요.</h1>
        <p>
          사용자가 원하는 경험을 하게 도와주고<br></br>
          디테일을 살려내는<br></br>
          풀스택 개발자 <strong>오도영</strong>입니다.
        </p>
      </section>

      <section ref={codeRef} className="code-snippet slide-up">
        <pre>
{`const dev = {
  name: '오도영',
  motto: '읽기 쉬운 코드, 보기 좋은 UI',
  stack: ['React', 'Spring Boot', 'Swift', 'Flutter','Java', 'MySQL','Git'],
};`}
        </pre>
      </section>

      <section ref={timelineRef} className="timeline slide-up">
        <ol>
          <li><span>2002.06.27</span> 출생</li>
          <li><span>2025</span> 스마트인재개발원 수료</li>
          <li><span>2025</span> AI / 풀스택 프로젝트 진행</li>
          <li><span>Contact</span> dhehdud456@naver.com</li>
        </ol>
      </section>

      <section ref={cardsRef} className="cards-section slide-up">
        <a className="card github" href="https://github.com/ohdoyoung" target="_blank" rel="noopener noreferrer">
          <FaGithub size={28} />
          <p>GitHub</p>
        </a>
        <a className="card tistory" href="https://dhehdud456.tistory.com/" target="_blank" rel="noopener noreferrer">
          <SiTistory size={28} />
          <p><u>Tistory</u></p>
        </a>
      </section>
      <Tech />
      <section id="projects">
        <ProjectList />
      </section>
    </div>
  );
}

export default App;
