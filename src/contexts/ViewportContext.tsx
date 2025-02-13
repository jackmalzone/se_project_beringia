import { createContext, useContext, ReactNode } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

interface ViewportContextType {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isDarkMode: boolean
  isPortrait: boolean
  isLandscape: boolean
  isRetina: boolean
}

const ViewportContext = createContext<ViewportContextType | undefined>(undefined)

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
  const matches = useMediaQuery()

  const value = {
    isMobile: matches.mobile,
    isTablet: matches.tablet,
    isDesktop: matches.desktop,
    isDarkMode: matches.dark,
    isPortrait: matches.portrait,
    isLandscape: matches.landscape,
    isRetina: matches.retina
  }

  return (
    <ViewportContext.Provider value={value}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => {
  const context = useContext(ViewportContext)
  if (context === undefined) {
    throw new Error('useViewport must be used within a ViewportProvider')
  }
  return context
} 