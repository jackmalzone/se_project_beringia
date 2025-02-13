import { createContext, useContext, ReactNode } from 'react'
import { useScroll } from '../hooks/useScroll'

interface ScrollContextType {
  scrollY: number
  scrollDirection: 'up' | 'down'
  isScrolled: boolean
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const ScrollProvider = ({ threshold = 50, children }: { threshold?: number, children: ReactNode }) => {
  const scrollState = useScroll(threshold)

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  )
}

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
} 