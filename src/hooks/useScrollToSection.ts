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
    // Only scroll when location changes and target exists
    const targetRef = refs[location.pathname]
    if (!targetRef?.current) return

    // Small delay to ensure layout is stable
    const scrollTimeout = setTimeout(() => {
      const totalOffset = headerOffset + navOffset
      const elementPosition = targetRef.current!.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset

      window.scrollTo({
        top: offsetPosition,
        behavior
      })

      if (onScrollComplete) {
        // Wait for scroll to complete
        const checkScrollComplete = () => {
          if (Math.abs(window.pageYOffset - offsetPosition) < 2) {
            onScrollComplete()
          } else {
            requestAnimationFrame(checkScrollComplete)
          }
        }
        requestAnimationFrame(checkScrollComplete)
      }
    }, 50)

    return () => {
      clearTimeout(scrollTimeout)
    }
  }, [location.pathname]) // Only trigger on pathname change

  return null
} 