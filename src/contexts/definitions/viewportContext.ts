import { createContext } from 'react'

interface ViewportContextType {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

export const ViewportContext = createContext<ViewportContextType | undefined>(undefined)

export const MOBILE_BREAKPOINT = 768
export const TABLET_BREAKPOINT = 1024 