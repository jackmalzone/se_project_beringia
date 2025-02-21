import { useEffect, RefObject, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useViewport } from '../contexts/ViewportContext'


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
  const { isMobile, isTablet } = useViewport()
  const isInitialMount = useRef(true)
  
  // Get the correct nav height based on viewport
  const navHeight = isMobile ? 48 : isTablet ? 56 : 64
  // Get the correct header height based on viewport
  const headerHeight = isMobile ? 64 : isTablet ? 72 : 80

  const {
    headerOffset = headerHeight, 
    navOffset = navHeight, // Always include nav offset
    behavior = 'smooth',
    onScrollComplete
  } = config

  useEffect(() => {
    // Skip initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    // Only scroll when location changes and target exists
    const targetRef = refs[location.pathname]
    if (!targetRef?.current) return

    const totalOffset = headerOffset + navOffset
    const elementPosition = targetRef.current.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - totalOffset

    window.scrollTo({
      top: offsetPosition,
      behavior
    })

    if (onScrollComplete) {
      const checkScrollComplete = () => {
        if (Math.abs(window.pageYOffset - offsetPosition) < 2) {
          onScrollComplete()
        } else {
          requestAnimationFrame(checkScrollComplete)
        }
      }
      requestAnimationFrame(checkScrollComplete)
    }
  }, [location.key]) // Only trigger on navigation actions

  return null
} 