import React, { useState, useRef, useEffect } from 'react';

const WorkItems = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const startX = useRef(null);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = endX - startX.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        // Swipe left
        setSlide((slide + 1) % item.images.length);
      } else {
        // Swipe right
        setSlide((slide - 1 + item.images.length) % item.images.length);
      }
    }
    startX.current = null;
  };

  return (
    <>
      <div className="work__card" onClick={() => setShowModal(true)}>
        <img
          src={item.images[0]}
          alt={item.title}
          className='work__img'
          loading='lazy'
          decoding='async'
        />
        <h3 className="work__title">{item.title}</h3>
        <span className="work__button">
          View Details <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </span>
      </div>
      {showModal && (
        <div className="portfolio__modal-overlay" onClick={() => setShowModal(false)}>
          <div
            className="portfolio__modal-content"
            onClick={e => e.stopPropagation()}
          >
            <button className="portfolio__modal-close" onClick={() => setShowModal(false)}>
              <i className="uil uil-times"></i>
            </button>
            <div className="portfolio__modal-header">
              <h3 className="portfolio__modal-title">{item.title}</h3>
            </div>
            <div
              className="portfolio__modal-slideshow"
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
              style={isMobile ? {gap: 0} : {}}
            >
              {!isMobile && (
                <button className="slideshow-btn slideshow-prev" onClick={e => {e.stopPropagation(); setSlide((slide - 1 + item.images.length) % item.images.length);}}>&lt;</button>
              )}
              <img
                src={item.images[slide]}
                alt={item.title}
                className="portfolio__modal-img"
                loading="lazy"
                decoding="async"
              />
              {!isMobile && (
                <button className="slideshow-btn slideshow-next" onClick={e => {e.stopPropagation(); setSlide((slide + 1) % item.images.length);}}>&gt;</button>
              )}
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