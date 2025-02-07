import { useEffect, RefObject } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollConfig {
  headerOffset?: number
  navOffset?: number
  behavior?: ScrollBehavior
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
    behavior = 'smooth'
  } = config

  useEffect(() => {
    const targetRef = refs[location.pathname]
    if (targetRef?.current) {
      const totalOffset = headerOffset + navOffset
      const elementPosition = targetRef.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset

      window.scrollTo({
        top: offsetPosition,
        behavior
      })
    }
  }, [location.pathname, refs, headerOffset, navOffset, behavior])

  return null
} 