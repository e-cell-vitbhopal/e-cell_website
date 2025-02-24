import { useState, useEffect } from 'react'
import './ScrollIndicator.css'

function ScrollIndicator() {
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setIsAtTop(position < 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isAtTop) return null

  return (
    <div className="scroll-indicator">
      <div className="chevron"></div>
      <div className="chevron"></div>
      <div className="chevron"></div>
    </div>
  )
}

export default ScrollIndicator