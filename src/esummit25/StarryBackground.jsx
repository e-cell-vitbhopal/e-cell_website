import { useEffect, useCallback, useState } from 'react'
import './StarryBackground.css'

const StarryBackground = ({ 
  starCount = 200, 
  trailCount = 3,
  trailSpeed = 1.5,
  fadeSpeed = 0.012 
}) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const eventsSection = document.getElementById('events')
      if (eventsSection) {
        const eventsSectionBottom = eventsSection.getBoundingClientRect().bottom
        setIsVisible(window.scrollY > eventsSectionBottom)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const createStar = useCallback((x, y, isTrail = false) => {
    const star = document.createElement('div')
    star.className = isTrail ? 'star trail' : 'star'
    star.style.left = `${x}px`
    star.style.top = `${y}px`
    const size = isTrail ? Math.random() * 2 + 0.5 : Math.random() * 3 + 1
    star.style.width = `${size}px`
    star.style.height = `${size}px`
    star.style.setProperty('--twinkle-duration', `${Math.random() * 3 + 2}s`)
    
    if (isTrail) {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * trailSpeed + 0.5
      star.dataset.velocityX = Math.cos(angle) * speed
      star.dataset.velocityY = Math.sin(angle) * speed
      star.style.opacity = '1'
    }
    
    return star
  }, [trailSpeed])

  useEffect(() => {
    if (!isVisible) return

    const background = document.createElement('div')
    background.className = `starry-background ${isVisible ? 'visible' : ''}`
    document.body.appendChild(background)

    // Create initial background stars
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
      background.appendChild(createStar(x, y))
    }

    let mouseX = 0
    let mouseY = 0
    let touchX = 0
    let touchY = 0
    let isTouching = false
    const trailStars = new Set()
    
    const updateStarPositions = () => {
      trailStars.forEach(star => {
        const x = parseFloat(star.style.left)
        const y = parseFloat(star.style.top)
        const opacity = parseFloat(star.style.opacity)
        
        const vx = parseFloat(star.dataset.velocityX)
        const vy = parseFloat(star.dataset.velocityY)
        
        star.style.left = `${x + vx}px`
        star.style.top = `${y + vy}px`
        star.style.opacity = opacity - fadeSpeed
        
        if (opacity <= 0 || x < -10 || x > window.innerWidth + 10 || 
            y < -10 || y > window.innerHeight + 10) {
          trailStars.delete(star)
          star.remove()
        }
      })
      
      if (isTouching) {
        const now = Date.now()
        if (now - lastMove > 16) {
          for (let i = 0; i < trailCount; i++) {
            const offsetX = (Math.random() - 0.5) * 20
            const offsetY = (Math.random() - 0.5) * 20
            const star = createStar(touchX + offsetX, touchY + offsetY, true)
            background.appendChild(star)
            trailStars.add(star)
          }
          lastMove = now
        }
      }
      
      requestAnimationFrame(updateStarPositions)
    }
    
    updateStarPositions()

    let lastMove = 0
    const handleMouseMove = (e) => {
      if (!isVisible) return
      
      mouseX = e.clientX
      mouseY = e.clientY
      
      const now = Date.now()
      if (now - lastMove > 16) {
        for (let i = 0; i < trailCount; i++) {
          const offsetX = (Math.random() - 0.5) * 20
          const offsetY = (Math.random() - 0.5) * 20
          const star = createStar(mouseX + offsetX, mouseY + offsetY, true)
          background.appendChild(star)
          trailStars.add(star)
        }
        lastMove = now
      }
    }

    const handleTouchStart = (e) => {
      if (!isVisible) return
      isTouching = true
      const touch = e.touches[0]
      touchX = touch.clientX
      touchY = touch.clientY
    }

    const handleTouchMove = (e) => {
      if (!isVisible) return
     
      const touch = e.touches[0]
      touchX = touch.clientX
      touchY = touch.clientY
    }

    const handleTouchEnd = () => {
      isTouching = false
    }

    const handleResize = () => {
      const stars = background.querySelectorAll('.star:not(.trail)')
      stars.forEach(star => star.remove())
      
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight
        background.appendChild(createStar(x, y))
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchstart', handleTouchStart)
    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('resize', handleResize)
      background.remove()
    }
  }, [createStar, starCount, trailCount, fadeSpeed, isVisible])

  return null
}

export default StarryBackground