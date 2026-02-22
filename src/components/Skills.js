import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGitAlt } from 'react-icons/fa';
import { SiFlutter, SiSpringboot, SiMysql, SiSwift } from 'react-icons/si';
import './Section.css';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML' },
  { icon: <FaCss3Alt />, name: 'CSS' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiFlutter />, name: 'Flutter' },
  { icon: <SiSwift />, name: 'Swift' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <FaGitAlt />, name: 'Git' },
];

function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-item">
            <div className="skill-icon">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;