import { useEffect, useState } from 'react'
import styles from './Hero.module.css'
import SUMMiTMask from '../assets/SUMMiT_mask1.webp'
import SUMMiT from '../assets/SUMMiT.webp'

function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showButton, setShowButton] = useState(true)
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(window.scrollY / scrollHeight, 1)
      setScrollProgress(progress)
      
      if (window.scrollY > 50) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    }

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const normalizedProgress = Math.min(scrollProgress * 0.5, 1)
  const initialZoom = Math.min(normalizedProgress / 0.05, 1)
  const initialScale = 1 + initialZoom * 1.5

  const originTransitionProgress = Math.max(Math.min((normalizedProgress - 0.05) / 0.05, 1), 0)
  const finalZoomProgress = Math.max(Math.min((normalizedProgress - 0.05) / 0.07, 1), 0)
  const initialFinalScale = initialScale + finalZoomProgress * 4

  const continuousZoomProgress = Math.max(Math.min((normalizedProgress - 0.1) / 0.04, 1), 0)
  const finalMaskScale = initialFinalScale + (continuousZoomProgress * 115)

  const fadeOutProgress = Math.max(Math.min((normalizedProgress - 0.12) / 0.04, 1), 0)
  const maskOpacity = 1 - fadeOutProgress

  const baseImageFadeOut = Math.max(Math.min((normalizedProgress - 0.007) / 0.008, 1), 0)
  const baseImageOpacity = normalizedProgress === 0 ? 1 : 1 - baseImageFadeOut - 0.2

  const textOpacity = window.scrollY > 0 ? 0 : 1

  const containerAspectRatio = 1920 / 1080
  const viewportAspectRatio = dimensions.width / dimensions.height
  
  let containerWidth, containerHeight
  if (viewportAspectRatio > containerAspectRatio) {
    containerHeight = dimensions.height
    containerWidth = containerHeight * containerAspectRatio
  } else {
    containerWidth = dimensions.width
    containerHeight = containerWidth / containerAspectRatio
  }

  const baseX = 50
  const baseY = 50
  const targetX = baseX + 15.46
  const targetY = baseY - 8.67

  const originX = baseX + (originTransitionProgress * (targetX - baseX))
  const originY = baseY + (originTransitionProgress * (targetY - baseY))
  const transformOrigin = `${originX}% ${originY}%`

  const verticalOffset = -5
  const currentScale = normalizedProgress <= 0.05 ? initialScale : finalMaskScale
  const imageHeight = containerHeight * currentScale
  const cutoutHeight = imageHeight * 0.5
  const frameHeight = (dimensions.height - cutoutHeight) / 2

  return (
    <div className={styles.hero}>
      <div className={styles.frame}>
        <div 
          className={styles.frameTop}
          style={{ 
            height: `${frameHeight}px`,
            opacity: maskOpacity,
            transition: 'height 0.3s ease-out, opacity 0.2s ease-out'
          }}
        />
        <div 
          className={styles.frameBottom}
          style={{ 
            height: `${frameHeight}px`,
            opacity: maskOpacity,
            transition: 'height 0.3s ease-out, opacity 0.2s ease-out'
          }}
        />
      </div>
      
      <div 
        className={styles.imageContainer}
        style={{
          width: containerWidth,
          height: containerHeight
        }}
      >
        <div 
          className={styles.originMarker}
          style={{
            left: `${originX}%`,
            top: `${originY}%`,
            transition: 'left 0.3s ease-out, top 0.2s ease-out'
          }}
        />

        <div 
          className={styles.ecellText}
          style={{
            transform: `translate(-50%, -50%)`,
            opacity: textOpacity,
            transformOrigin,
            transition: 'opacity 0.3s ease-out'
          }}
        >
          E-Cell VIT Bhopal Presents
        </div>

        <picture>
          <source srcSet={SUMMiTMask} type="image/webp" />
          <img 
            src={SUMMiTMask}
            alt="Home Mask" 
            className={styles.base}
            style={{
              transform: `translate(-50%, calc(-50% + ${verticalOffset}%)) scale(${normalizedProgress <= 0.05 ? initialScale : finalMaskScale})`,
              transformOrigin,
              opacity: maskOpacity,
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
          />
        </picture>

        <picture>
          <source srcSet={SUMMiT} type="image/webp" />
          <img 
            src={SUMMiT}
            alt="Home" 
            className={styles.base}
            style={{
              transform: `translate(-50%, calc(-50% + ${verticalOffset}%)) scale(${normalizedProgress <= 0.05 ? initialScale : finalMaskScale})`,
              opacity: baseImageOpacity,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease-out, opacity 0.3s ease-out'
            }}
          />
        </picture>

        <div 
          className={styles.tagline}
          style={{
            transform: `translate(-50%, -50%)`,
            opacity: textOpacity,
            transformOrigin,
            transition: 'opacity 0.3s ease-out'
          }}
        >
         CHAOS TO CATALYST  
        </div>
        
        <a

  className={`${styles.registerButton} ${!showButton ? styles.hidden : ''}`}
  style={{
    transform: `translate(-50%, -50%)`,
    opacity: showButton ? 1 : 0,
    transformOrigin,
    transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
  }}
  onClick={(e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById('Pass');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }}
>
  Register Now
</a>

      </div>
    </div>
  )
}

export default Hero