import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const minDisplayTime = 3500; // Minimum display time in milliseconds (3.5 seconds)

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="preloader"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'visibility 0s 0.5s, opacity 0.2s linear'
      }}
    >
      <div className="loader">
        <div className="crane"></div>
      </div>
    </div>
  );
};

export default Preloader;