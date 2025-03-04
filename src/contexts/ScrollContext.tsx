import { ReactNode } from 'react'
import { useScroll } from '../hooks/useScroll'
import { ScrollContext } from './definitions/scrollContext'

export const ScrollProvider = ({ threshold = 50, children }: { threshold?: number, children: ReactNode }) => {
  const scrollState = useScroll(threshold)

  return (
    <ScrollContext.Provider value={scrollState}>
      {children}
    </ScrollContext.Provider>
  )
} 