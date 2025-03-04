import { createContext } from 'react'

export interface ViewportContextType {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  isDarkMode: boolean
  isPortrait: boolean
  isLandscape: boolean
  isRetina: boolean
}

export const ViewportContext = createContext<ViewportContextType | undefined>(undefined) 