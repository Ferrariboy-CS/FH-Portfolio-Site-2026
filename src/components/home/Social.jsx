import React from 'react';

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/helao_nafimane?igsh=MWJpZmY1anl4ZW56bA=="
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='Instagram'
      >
        <i className='uil uil-instagram'></i>
      </a>
      <a
        href="https://www.linkedin.com/in/festus-helao-shatipamba"
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='LinkedIn'
      >
        <i className='uil uil-linkedin'></i>
      </a>
      <a
        href="https://github.com/Ferrariboy99"
        className='home__social-icon'
        target='_blank'
        rel='noopener noreferrer'
        aria-label='GitHub'
      >
        <i className='uil uil-github-alt'></i>
      </a>
    </div>
  );
}

export default Social;
