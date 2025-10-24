import React from 'react';

const createFallbackComponent = (element) =>
  React.forwardRef(({ children, ...rest }, ref) =>
    React.createElement(element, { ref, ...rest }, children)
  );

const fallbackMotion = new Proxy(
  {},
  {
    get: (_, key) => createFallbackComponent(key),
  }
);

const getMotion = () => {
  if (typeof window !== 'undefined' && window.framerMotion && window.framerMotion.motion) {
    return window.framerMotion.motion;
  }
  return fallbackMotion;
};

export const motion = new Proxy(
  {},
  {
    get: (_, key) => {
      const motionLib = getMotion();
      return motionLib[key] || createFallbackComponent(key);
    },
  }
);
