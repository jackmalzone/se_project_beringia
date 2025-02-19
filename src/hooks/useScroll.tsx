import { useState, useEffect, useRef, useCallback } from 'react'

interface ScrollState {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}

export const useScroll = (threshold = 50): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: window.scrollY,
    scrollDirection: 'up',
    isScrolled: window.scrollY > threshold
  })
  
  const lastScrollY = useRef(window.scrollY)
  const lastDirection = useRef<'up' | 'down'>('up')
  const frameRequest = useRef<number>()
  const minScrollDelta = 5 // Reduced for more responsive updates

  const updateScrollState = useCallback(() => {
    if (frameRequest.current) {
      cancelAnimationFrame(frameRequest.current)
    }

    frameRequest.current = requestAnimationFrame(() => {
      const currentScrollY = window.scrollY
      const scrollDiff = currentScrollY - lastScrollY.current
      const isScrolled = currentScrollY > threshold
      
      // Update direction immediately when scroll direction changes
      const newDirection = scrollDiff > 0 ? 'down' : 'up'
      
      if (newDirection !== lastDirection.current || Math.abs(scrollDiff) >= minScrollDelta) {
        lastDirection.current = newDirection
        setScrollState({
          scrollY: currentScrollY,
          scrollDirection: newDirection,
          isScrolled
        })
      }
      
      lastScrollY.current = currentScrollY
    })
  }, [threshold])

  useEffect(() => {
    // Use passive scroll listener for better performance
    window.addEventListener('scroll', updateScrollState, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', updateScrollState)
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current)
      }
    }
  }, [updateScrollState])

  return scrollState
} 