import { useEffect, RefObject } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollConfig {
  headerOffset?: number
  navOffset?: number
  behavior?: ScrollBehavior
  onScrollComplete?: () => void
}

interface SectionRefs {
  [key: string]: RefObject<HTMLElement>
}

export const useScrollToSection = (
  refs: SectionRefs,
  config: ScrollConfig = {}
) => {
  const location = useLocation()
  const {
    headerOffset = 80,
    navOffset = 0,
    behavior = 'smooth',
    onScrollComplete
  } = config

  useEffect(() => {
    const targetRef = refs[location.pathname]
    if (!targetRef?.current) return

    const totalOffset = headerOffset + navOffset
    const elementPosition = targetRef.current.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset

    const scrollOptions = {
      top: offsetPosition,
      behavior
    }

    window.scrollTo(scrollOptions)

    if (onScrollComplete) {
      // Wait for scroll to complete before calling callback
      const checkScrollComplete = setInterval(() => {
        if (Math.abs(window.pageYOffset - offsetPosition) < 2) {
          clearInterval(checkScrollComplete)
          onScrollComplete()
        }
      }, 100)

      // Cleanup interval if component unmounts during scroll
      return () => clearInterval(checkScrollComplete)
    }
  }, [location.pathname, refs, headerOffset, navOffset, behavior, onScrollComplete])

  return null
} 