import { useState, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { NavigationContext } from './definitions/navigationContext'

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation()
  const [currentSection, setCurrentSection] = useState<string>(location.pathname)
  const [previousSection, setPreviousSection] = useState<string | null>(null)
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  const setNavVisibility = (visible: boolean) => {
    setIsNavVisible(visible)
  }

  const setHeaderVisibility = (visible: boolean) => {
    setIsHeaderVisible(visible)
  }

  return (
    <NavigationContext.Provider
      value={{
        currentSection,
        previousSection,
        isNavVisible,
        isHeaderVisible,
        setCurrentSection,
        setPreviousSection,
        setNavVisibility,
        setHeaderVisibility
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
} 