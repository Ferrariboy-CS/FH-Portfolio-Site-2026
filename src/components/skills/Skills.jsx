import React from 'react';
import './skills.css';

const skills = [
  { name: 'C#', img: '/skills/c-sharp.png' },
  { name: 'Java', img: '/skills/java.png' },
  { name: 'Python', img: '/skills/python.png' },
  { name: 'JavaScript', img: '/skills/javascript.svg' },
  { name: 'HTML', img: '/skills/html.svg' },
  { name: 'CSS', img: '/skills/css.svg' },
  { name: 'SQL Server', img: '/skills/sql-server.png' },
  { name: 'Git', img: '/skills/git.png' },
  { name: 'Firebase', img: '/skills/firebase.svg' },
  { name: 'WordPress', img: '/skills/wordpress.png' },
  { name: 'Figma', img: '/skills/figma.png' },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Tools I use</span>
      <div className="skills__container container grid">
        {skills.map((s) => (
          <div key={s.name} className="skills__container-box">
            <img className="skills__container-img" src={s.img} alt={s.name} />
            <div className="skills__container-name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills