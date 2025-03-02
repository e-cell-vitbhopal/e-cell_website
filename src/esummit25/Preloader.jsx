import { useState, useEffect } from 'react';
import './Preloader.css';
import SUMMiTMask from '../assets/SUMMiT_mask1.webp'
import SUMMiT from '../assets/SUMMiT.webp'
const Preloader = ({ onLoadComplete }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imageUrls = [
      SUMMiTMask,
      SUMMiT
      ];

      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      };

      try {
        await Promise.all(imageUrls.map(loadImage));
        setImagesLoaded(true);
        
        // Add a small delay before opening shutters
        setTimeout(() => {
          setShutterOpen(true);
          
          // Wait for shutter animation to complete before removing preloader
          setTimeout(() => {
            onLoadComplete();
          }, 1000);
        }, 500);
      } catch (error) {
        console.error('Error loading images:', error);
        // In case of error, still remove preloader after a delay
        setTimeout(() => {
          setShutterOpen(true);
          setTimeout(() => {
            onLoadComplete();
          }, 800);
        }, 500);
      }
    };

    loadImages();
  }, [onLoadComplete]);

  return (
    <div className="preloader">
      <div className={`shutter shutter-left ${shutterOpen ? 'open' : ''}`}></div>
      <div className={`shutter shutter-right ${shutterOpen ? 'open' : ''}`}></div>
      <div className={`loading-text ${shutterOpen ? 'fade' : ''}`}>
        {imagesLoaded ? 'WELCOME' : 'LOADING'}
      </div>
    </div>
  );
};

export default Preloader;