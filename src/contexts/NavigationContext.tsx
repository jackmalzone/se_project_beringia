import { createContext, useContext, useState, ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface NavigationState {
  currentSection: string
  previousSection: string | null
  isNavVisible: boolean
  isHeaderVisible: boolean
}

interface NavigationContextType extends NavigationState {
  setCurrentSection: (section: string) => void
  setPreviousSection: (section: string | null) => void
  setNavVisibility: (visible: boolean) => void
  setHeaderVisibility: (visible: boolean) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

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

export const useNavigation = () => {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
} 