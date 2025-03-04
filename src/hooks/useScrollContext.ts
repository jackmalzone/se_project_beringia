import { useContext } from 'react'
import { ScrollContext, ScrollContextType } from '../contexts/definitions/scrollContext'

export const useScrollContext = (): ScrollContextType => {
  const context = useContext(ScrollContext)
  if (context === undefined) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
} 