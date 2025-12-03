import React, { useEffect, useRef, useState } from 'react';

const LazySection = ({
  children,
  placeholderId,
  minHeight = 280,
  rootMargin = '0px 0px 200px 0px',
  placeholderClassName = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const node = containerRef.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  const PlaceholderTag = placeholderId ? 'section' : 'div';
  const placeholderClasses = ['lazy-section-placeholder', placeholderClassName]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={containerRef} className="lazy-section-wrapper">
      {isVisible ? (
        children
      ) : (
        <PlaceholderTag
          id={placeholderId}
          aria-hidden="true"
          className={placeholderClasses}
          style={{ minHeight }}
        />
      )}
    </div>
  );
};

export default LazySection;
