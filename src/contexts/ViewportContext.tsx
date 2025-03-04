import { ReactNode } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { ViewportContext } from './definitions/viewportContext'

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