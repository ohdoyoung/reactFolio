import React, { useState, useEffect, useRef } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiFlutter, SiSwift, SiSpringboot, SiFlask } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import { GrNode } from 'react-icons/gr';
import './Tech.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Tech() {
  const [selectedFrontendSkill, setSelectedFrontendSkill] = useState(null);
  const [selectedBackendSkill, setSelectedBackendSkill] = useState(null);
  const techSectionRef = useRef(null);

  const skillDescriptions = {
    React: 'React는 바닐라 js의 대안으로 꼭 한번 공부해보고싶었던 라이브러리입니다. 빠르고 간결하게 기능들을 만들기 좋았고 트렌디한 프론트엔드개발을 경험해보고자 배우기 시작했습니다.',
    JavaScript: 'HTML/CSS의 기본적인 기능을 넘어 개발해보고 싶어 배우게 된 언어입니다. 간단해보이지만 어려운 언어라고 생각하고  공부할게 정말 많다고 느꼈습니다. 그렇지만 기본이 가장 중요하다 생각하고 여전히 공부중입니다.',
    HTML: '웹 개발에 없어서는 안될 존재입니다. 제가 무언가을 만들고싶어졌을때 가장 먼저 시작한 언어입니다. HTML을 통해 웹페이지의 구조를 만들고, CSS와 JavaScript로 디자인과 기능을 추가했습니다.',
    Flutter: '하이브리드 앱개발을 경험해보기 위해 공부했습니다. Swift와 다르게 개발속도가 빠르지만 네이티브 기능을 전부 살리지 못한다는게 아쉬웠지만 개발속도와 os에 제한없이 개발이 가능하다는 점이 매력적이였습니다.',
    SwiftUI: '단지 애플을 사랑해서 공부하기 시작한 프레임워크입니다. 애플답게 코드가 세련됐고 UI도 예뻤습니다. 아직 많이 부족하지만 여전히 애플을 사랑하고 Swift 개발 또한 좋아합니다.',
    Python: '부트캠프에 다닐때 아무래도 가장 많이 사용했던 언어가 아닐까 싶습니다. LLM개발을 위해 주로 사용하였고 LLAMA 모델을 활용해본 경험이 있습니다. 또한, 데이터 분석 및 머신러닝을 위해서도 사용했습니다.',
    Java: '아마 제가 가장 처음 배우고 많이 해본 언어가 아닐까 싶습니다. 처음 자바를 사용할땐 불편했지만 익숙해지니 자바가 좋아졌고 이로 인해 Spring boot도 잘 활용할 수 있었습니다.',
    'Spring Boot': '처음 해본 백엔드 프레임워크 였습니다. 아직까진 Spring Boot가 가장 익숙하고 편합니다. 이 프레임워크를 통해 RESTful API를 만들고, 데이터베이스와의 연동을 경험했습니다.',
    Tomcat: 'Spring Boot와 함께 사용했던 웹 서버입니다. Tomcat을 통해 웹 애플리케이션을 배포하고 관리하는 방법을 배웠습니다.',
    Flask: 'LLAMA 모델을 배포하고 기본적인 파이썬 API를 활용했습니다.',
  };

  useEffect(() => {
    gsap.from(techSectionRef.current, {
      opacity: 0,
      y: 60,
      duration: 1,
      scrollTrigger: {
        trigger: techSectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section id="tech" className="tech-section fade-in" ref={techSectionRef}>
        
      <div className="skill-block">
        <h2><span role="img" aria-label="frontend">💻</span> Frontend</h2>
        <div className="skill-icons">
          <div className="skill-item react" onClick={() => setSelectedFrontendSkill('React')}><FaReact size={32} /><p>React</p></div>
          <div className="skill-item js" onClick={() => setSelectedFrontendSkill('JavaScript')}><FaJs size={32} /><p>JavaScript</p></div>
          <div className="skill-item html" onClick={() => setSelectedFrontendSkill('HTML')}><FaHtml5 size={32} /><p>HTML</p></div>
          <div className="skill-item flutter" onClick={() => setSelectedFrontendSkill('Flutter')}><SiFlutter size={32} /><p>Flutter</p></div>
          <div className="skill-item swift" onClick={() => setSelectedFrontendSkill('SwiftUI')}><SiSwift size={32} /><p>SwiftUI</p></div>
        </div>
        <p className="learn-date">
          {selectedFrontendSkill
            ? `Learning At: ${
                selectedFrontendSkill === 'React' ? '2025년 5월' :
                selectedFrontendSkill === 'JavaScript' ? '2020년 9월' :
                selectedFrontendSkill === 'HTML' ? '2020년 4월' :
                selectedFrontendSkill === 'Flutter' ? '2025년 3월' :
                selectedFrontendSkill === 'SwiftUI' ? '2025년 1월' :
                '-'
              }`
            : 'Learning At: -'}
        </p>
        <p className="description">
          {selectedFrontendSkill
            ? skillDescriptions[selectedFrontendSkill]
            : '아이콘을 클릭하면 해당 기술의 설명이 표시됩니다.'}
        </p>
      </div>

      <div className="skill-block">
        <h2><span role="img" aria-label="backend">🧱</span> Backend</h2>
        <div className="skill-icons">
          <div className="skill-item python" onClick={() => setSelectedBackendSkill('Python')}><DiPython size={32} /><p>Python</p></div>
          <div className="skill-item java" onClick={() => setSelectedBackendSkill('Java')}><FaJava size={32} /><p>Java</p></div>
          <div className="skill-item spring" onClick={() => setSelectedBackendSkill('Spring Boot')}><SiSpringboot size={32} /><p>Spring Boot</p></div>
          <div className="skill-item tomcat" onClick={() => setSelectedBackendSkill('Tomcat')}><GrNode size={32} /><p>Tomcat</p></div>
          <div className="skill-item flask" onClick={() => setSelectedBackendSkill('Flask')}><SiFlask size={32} /><p>Flask</p></div>
        </div>
        <p className="learn-date">
          {selectedBackendSkill
            ? `Learning At: ${
                selectedBackendSkill === 'Python' ? '2024년 10월' :
                selectedBackendSkill === 'Java' ? '2018년 3월' :
                selectedBackendSkill === 'Spring Boot' ? '2024년 9월' :
                selectedBackendSkill === 'Tomcat' ? '2024년 9월' :
                selectedBackendSkill === 'Flask' ? '2024년 9월' :
                '-'
              }`
            : 'Learning At: -'}
        </p>
        <p className="description">
          {selectedBackendSkill
            ? skillDescriptions[selectedBackendSkill]
            : '아이콘을 클릭하면 해당 기술의 설명이 표시됩니다.'}
        </p>
      </div>
    </section>
  );
}

export default Tech;
