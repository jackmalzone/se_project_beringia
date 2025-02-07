import { useState, useEffect } from 'react'

interface ScrollState {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}

export const useScroll = (threshold = 50): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: window.scrollY,
    scrollDirection: 'up',
    isScrolled: false
  })

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollState = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      
      setScrollState({
        scrollY,
        scrollDirection: direction,
        isScrolled: scrollY > threshold
      })
      
      lastScrollY = scrollY
    }

    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [threshold])

  return scrollState
} 