import React, { useState } from 'react';
import "./header.css";

const Header = ({ theme = 'light', onToggleTheme = () => {} }) => {
  /*=============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const themeIcon = theme === 'dark' ? 'uil uil-sun' : 'uil uil-moon';
  const themeLabel = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href="#home" className='nav__logo'>FH Shatipamba</a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className='nav__list grid'>
            <li className='nav__item'>
              <a href="#home" className='nav__link'>
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>
            <li className='nav__item'>
              <a href="#about" className='nav__link'>
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>
            <li className='nav__item'>
              <a href="#skills" className='nav__link'>
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>
            <li className='nav__item'>
              <a href="#qualification" className='nav__link'>
                <i className='uil uil-graduation-cap nav__icon'></i> Qualification
              </a>
            </li>
            <li className='nav__item'>
              <a href="#services" className='nav__link'>
                <i className='uil uil-arrow nav__icon'></i> Services
              </a>
            </li>
            <li className='nav__item'>
              <a href="#work" className='nav__link'>
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>
            <li className='nav__item'>
              <a href="#contact" className='nav__link'>
                <i className='uil uil-message nav__icon'></i> Contact
              </a>
            </li>
          </ul>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
        </div>
        <div className='nav__actions'>
          <button
            type='button'
            className='theme-toggle'
            onClick={onToggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={themeLabel}
            title={themeLabel}
          >
            <i className={themeIcon}></i>
          </button>
          <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
