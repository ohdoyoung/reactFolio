import React from 'react';
import './Section.css';

function Hero() {
  return (
    <section id="hero" className="section">
      <h1>풀스택 개발자 오도영입니다.</h1>
      <p>사용자를 위한 깔끔하고 직관적인 경험을 만듭니다.</p>
      <a href="#projects" className="cta-button">프로젝트 보러가기</a>
    </section>
  );
}

export default Hero;