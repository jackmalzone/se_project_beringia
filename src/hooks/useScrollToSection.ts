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
  refs: { [key: string]: React.RefObject<HTMLElement> },
  options: ScrollConfig = {}
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
  } = options

  useEffect(() => {
    const path = location.pathname
    const section = refs[path]?.current

    if (section) {
      const top = section.offsetTop - headerOffset - navOffset
      window.scrollTo({
        top,
        behavior
      })
      onScrollComplete?.()
    }
  }, [location.pathname, refs, behavior, headerOffset, navOffset, onScrollComplete])

  return null
} 