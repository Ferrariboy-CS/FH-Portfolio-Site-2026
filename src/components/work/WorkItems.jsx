import React, { useState } from 'react';

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState(0);

  const nextSlide = (e) => {
    e.stopPropagation();
    setSlide((slide + 1) % item.images.length);
  };
  const prevSlide = (e) => {
    e.stopPropagation();
    setSlide((slide - 1 + item.images.length) % item.images.length);
  };

  return (
    <>
      <div className="work__card" onClick={() => setShowModal(true)}>
        <img src={item.images[0]} alt={item.title} className='work__img' />
        <h3 className="work__title">{item.title}</h3>
        <span className="work__button">
          View Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>
      </div>
      {showModal && (
        <div className="portfolio__modal-overlay" onClick={() => setShowModal(false)}>
          <div className="portfolio__modal-content" onClick={e => e.stopPropagation()}>
            <button className="portfolio__modal-close" onClick={() => setShowModal(false)}>
              <i className="uil uil-times"></i>
            </button>
            <div className="portfolio__modal-header">
              <h3 className="portfolio__modal-title">{item.title}</h3>
            </div>
            <div className="portfolio__modal-slideshow">
              <button className="slideshow-btn slideshow-prev" onClick={prevSlide}>&lt;</button>
              <img src={item.images[slide]} alt={item.title} className="portfolio__modal-img" />
              <button className="slideshow-btn slideshow-next" onClick={nextSlide}>&gt;</button>
            </div>
            <div className="portfolio__modal-body">
              <p className="portfolio__modal-description">{item.description}</p>
              <h4>Technologies Used</h4>
              <ul className="portfolio__modal-tech">
                {item.tech.map((t, idx) => <li key={idx}>{t}</li>)}
              </ul>
              <a href={item.link} className="button button--flex" target="_blank" rel="noopener noreferrer">
                Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkItems;