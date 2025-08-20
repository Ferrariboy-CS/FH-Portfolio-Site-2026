import React, { useState, useEffect } from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

const navIcons = {
  All: <i className="uil uil-apps" style={{ marginRight: 6 }}></i>,
  App: <i className="uil uil-mobile-android" style={{ marginRight: 6 }}></i>,
  Web: <i className="uil uil-globe" style={{ marginRight: 6 }}></i>,
};

const Works = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        project => project.category === item.name
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({
      name:
        e.target.textContent.replace(/\s/g, '') === 'All'
          ? 'All'
          : e.target.textContent.trim(),
    });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            onClick={e => handleClick(e, index)}
            className={`work__item ${
              active === index ? 'active-work' : ''
            }`}
            key={index}
          >
            {navIcons[navItem.name]}
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map(item => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Works;