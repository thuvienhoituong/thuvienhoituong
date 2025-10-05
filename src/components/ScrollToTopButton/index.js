import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed cursor-pointer z-50 sm:bottom-10 bottom-5 sm:right-10 right-5" onClick={scrollToTop}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="bg-white active:bg-gray-300 shadow-lg h-6 w-6 text-black p-2 text-2xl border-2 border-gray-400 border-solid rounded-full"
          />
        </div>
      )}
    </>
  );
};

export default ScrollToTopButton;
