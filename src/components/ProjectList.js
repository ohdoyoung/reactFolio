import React, { useState } from 'react';
import { FaHtml5, FaCss3Alt, FaJava, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiFlask, SiMysql, SiFlutter, SiSwift } from 'react-icons/si';
import './ProjectList.css';

const projects = [
  {
    id: 'menu',
    title: '✌️ 메뉴 어떠쇼',
    subtitle: '상권데이터를 활용한 카페 메뉴 추천 서비스입니다.',
    period: '2024년 12월 20일 → 2025년 1월 8일',
    stack: ['JavaScript', 'CSS', 'HTML', 'Spring Boot', 'Flask'],
    github: 'https://github.com/202...O-Dong',
    notion: 'https://separated-handspring-997.notion.site/ebd/1d9253349950816a8791e47b9a1a06ea',    
    image: process.env.PUBLIC_URL + '/assets/menu-project.png',
    icons: [
      <FaHtml5 className="html5" />,
      <FaCss3Alt className="css3" />,
      <FaJava className="java" />,
      <SiSpringboot className="springboot" />,
      <SiFlask className="flask" />
    ]
  },
  {
    id: 'soundscape',
    title: '✌️ Sound Scape',
    subtitle: '들었던 음악을 기록하고 감정을 기반으로 추천해주는 앱입니다.',
    period: '2025년 1월 31일 → 2025년 2월 14일',
    stack: ['Swift', 'Spring Boot', 'MySQL'],
    github: 'https://github.com/ohd...dScape',
    notion: 'https://separated-handspring-997.notion.site/ebd/1d9253349950817db4dbfed654cd18a6',
    image: process.env.PUBLIC_URL + '/assets/soundscape.png',
    icons: [
      <SiSwift className="swift" />,
      <SiSpringboot className="springboot" />,
      <SiMysql className="mysql" />

    ]
  },
  {
    id: 'habitiq',
    title: '✌️ HabitiQ',
    subtitle: 'AI를 활용한 스마트 습관 관리 앱 HabitiQ입니다.',
    period: '2025년 2월 25일 → 2025년 3월 6일',
    stack: ['Swift', 'CoreData', 'CoreML', 'Python', 'SwiftUI'],
    github: 'https://github.com/ohd...abitIQ',
    notion: 'https://separated-handspring-997.notion.site/ebd/1d925334995081898b7ec556528b1475',
    image: process.env.PUBLIC_URL + '/assets/habitiq.png',
    icons: [
      <SiSwift className="swift" />,
      <FaPython className="python" />
    ]
    
  },
  {
    id: 'medibot',
    title: '✌️ MediBot',
    subtitle: 'AI를 활용한 스마트한 복약 일정 관리 앱 MediBot입니다.',
    period: '2025년 3월 14일 → 2025년 4월 10일',
    stack: ['Flutter', 'MySQL', 'Spring Boot', 'Python'],
    github: 'https://github.com/202...ediBot',
    notion: 'https://separated-handspring-997.notion.site/ebd/1d9253349950810b8f27ea1509787990',
    image: process.env.PUBLIC_URL + '/assets/medibot.png',
    icons: [
      <SiFlutter className="flutter" />,
      <SiMysql className="mysql" />,
      <SiSpringboot className="springboot" />,
      <FaPython className="python" />
    ]
    
  },
];

function ProjectList() {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Projects</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id} onClick={() => setSelected(project)}>
            <img src={project.image} alt={project.title} className="project-thumb" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <div className="tech-icons">
                {project.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
              padding: 0
            }}
          >
            <iframe
              src={selected.notion}
              title="project-notion"
              style={{
                width: '90vw',
                height: '90vh',
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectList;