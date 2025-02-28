import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useActiveSection = (sectionRefs: { [key: string]: React.RefObject<HTMLElement> }) => {
  const [activeSection, setActiveSection] = useState<string>('')
  const location = useLocation()

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const observerOptions = {
      rootMargin: '-50% 0px -50% 0px', // Only consider middle 50% of viewport
      threshold: 0
    }

    // Create observers for each section
    Object.entries(sectionRefs).forEach(([path, ref]) => {
      if (!ref.current) return

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(path)
          }
        })
      }, observerOptions)

      observer.observe(ref.current)
      observers.push(observer)
    })

    // Cleanup observers
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [sectionRefs])

  // Fallback to current route if no section is intersecting
  useEffect(() => {
    if (!activeSection) {
      setActiveSection(location.pathname)
    }
  }, [location.pathname, activeSection])

  return activeSection
} 