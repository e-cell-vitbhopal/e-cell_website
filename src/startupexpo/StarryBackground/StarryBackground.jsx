import React, { useEffect, useRef, useState } from 'react';
import './StarryBackground.css';

const StarryBackground = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const starsRef = useRef([]);
  const trailsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0, lastX: 0, lastY: 0, moving: false });
  const requestRef = useRef(null);
  
  // Configuration
  const starCount = 400;
  const trailCount = 5;
  const trailLifetime = 1500; // ms
  
  useEffect(() => {
    // Set visible after component mounts
    setIsVisible(true);
    
    // Create stars
    if (containerRef.current) {
      const container = containerRef.current;
      const { width, height } = container.getBoundingClientRect();
      
      // Clear any existing stars
      container.innerHTML = '';
      starsRef.current = [];
      
      // Create static stars
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'startup-expo-star';
        
        // Random position
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        // Random size (0.5px to 3px)
        const size = 0.5 + Math.random() * 2.5;
        
        // Random twinkle duration (3s to 8s)
        const twinkleDuration = 3 + Math.random() * 5;
        
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--twinkle-duration', `${twinkleDuration}s`);
        
        container.appendChild(star);
        starsRef.current.push(star);
      }
      
      // Create trail array
      trailsRef.current = Array(trailCount).fill().map(() => ({
        element: null,
        timeCreated: 0,
        active: false
      }));
    }
    
    // Mouse move handler for star trails
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseRef.current = {
        x: clientX,
        y: clientY,
        lastX: mouseRef.current.x,
        lastY: mouseRef.current.y,
        moving: true
      };
    };
    
    // Touch move handler for mobile
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const { clientX, clientY } = e.touches[0];
        mouseRef.current = {
          x: clientX,
          y: clientY,
          lastX: mouseRef.current.x,
          lastY: mouseRef.current.y,
          moving: true
        };
      }
    };
    
    // Animation loop for star trails
    const animateTrails = (timestamp) => {
      if (mouseRef.current.moving && containerRef.current) {
        const container = containerRef.current;
        
        // Find an inactive trail
        const inactiveTrail = trailsRef.current.find(trail => !trail.active);
        
        if (inactiveTrail) {
          // Create new trail element
          const trail = document.createElement('div');
          trail.className = 'startup-expo-star startup-expo-trail';
          
          // Random size (1px to 3px)
          const size = 1 + Math.random() * 2;
          
          trail.style.left = `${mouseRef.current.x}px`;
          trail.style.top = `${mouseRef.current.y}px`;
          trail.style.width = `${size}px`;
          trail.style.height = `${size}px`;
          
          container.appendChild(trail);
          
          // Update trail data
          inactiveTrail.element = trail;
          inactiveTrail.timeCreated = timestamp;
          inactiveTrail.active = true;
        }
        
        // Update existing trails
        trailsRef.current.forEach(trail => {
          if (trail.active && trail.element) {
            const age = timestamp - trail.timeCreated;
            
            if (age > trailLifetime) {
              // Remove old trail
              if (trail.element.parentNode) {
                trail.element.parentNode.removeChild(trail.element);
              }
              trail.active = false;
              trail.element = null;
            } else {
              // Fade out based on age
              const opacity = 1 - (age / trailLifetime);
              trail.element.style.opacity = opacity.toString();
            }
          }
        });
        
        // Reset moving flag
        mouseRef.current.moving = false;
      }
      
      requestRef.current = requestAnimationFrame(animateTrails);
    };
    
    // Start animation and add event listeners
    requestRef.current = requestAnimationFrame(animateTrails);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Handle window resize
    const handleResize = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const { width, height } = container.getBoundingClientRect();
        
        // Update star positions
        starsRef.current.forEach(star => {
          const x = Math.random() * width;
          const y = Math.random() * height;
          star.style.left = `${x}px`;
          star.style.top = `${y}px`;
        });
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div 
      ref={containerRef} 
      className={`startup-expo-starry-background ${isVisible ? 'startup-expo-visible' : ''}`}
      aria-hidden="true"
    />
  );
};

export default StarryBackground;