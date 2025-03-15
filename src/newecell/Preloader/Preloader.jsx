import { useState, useEffect } from 'react';
import './Preloader.css';
import E from '../../assets/E.png';
import Cell from '../../assets/cell.png';
import { preloaderConfig } from '../../config/preloader.config';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const preloaderTexts = ['FORGING', 'FUTURE', 'ENTREPRENEURS'];

  useEffect(() => {
    let timeoutIds = [];

    const animateText = () => {
      const showText = () => {
        setTextVisible(true);
        
        const hideTimeout = setTimeout(() => {
          setTextVisible(false);
          
          const nextTimeout = setTimeout(() => {
            if (currentTextIndex < preloaderTexts.length - 1) {
              setCurrentTextIndex(prev => prev + 1);
            } else {
              setShowLogo(true);
              
              const slideTimeout = setTimeout(() => {
                setIsSliding(true);
                
                const removeTimeout = setTimeout(() => {
                  setIsLoading(false);
                }, preloaderConfig.slideUpDuration);
                
                timeoutIds.push(removeTimeout);
              }, preloaderConfig.slideUpDelay);
              
              timeoutIds.push(slideTimeout);
            }
          }, 300); // Increased delay to make fade effect visible
          
          timeoutIds.push(nextTimeout);
        }, 1000); // Increased visibility duration
        
        timeoutIds.push(hideTimeout);
      };

      showText();
    };

    animateText();

    return () => {
      timeoutIds.forEach(id => clearTimeout(id));
    };
  }, [currentTextIndex]);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${isSliding ? 'slide-up' : ''}`}>
      {!showLogo && (
        <div className={`preloader-text ${textVisible ? 'visible' : 'hidden'}`}>
          {preloaderTexts[currentTextIndex]}
        </div>
      )}
      <img 
        src={E} 
        alt="Loading.." 
        className={`preloader-image first ${showLogo ? 'show' : ''}`}
      />
      <img 
        src={Cell} 
        alt="Loading..." 
        className={`preloader-image second ${showLogo ? 'show' : ''}`}
      />
    </div>
  );
};

export default Preloader;