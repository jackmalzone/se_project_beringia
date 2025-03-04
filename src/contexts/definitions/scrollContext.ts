import { createContext } from 'react'

export interface ScrollContextType {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

// Default threshold for header behavior
export const SCROLL_THRESHOLD = 50

// Threshold for footer visibility
export const FOOTER_SCROLL_THRESHOLD = 300 