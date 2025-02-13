import { useState, useEffect, useRef } from 'react'

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
  
  const lastScrollY = useRef(window.scrollY)
  const ticking = useRef(false)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollY = window.scrollY
      
      setScrollState({
        scrollY,
        scrollDirection: scrollY > lastScrollY.current ? 'down' : 'up',
        isScrolled: scrollY > threshold
      })
      
      lastScrollY.current = scrollY
      ticking.current = false
    }

    const onScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          updateScrollState()
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrollState
} 