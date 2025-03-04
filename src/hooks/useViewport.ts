import { useContext } from 'react'
import { ViewportContext } from '../contexts/definitions/viewportContext'

export const useViewport = () => {
  const context = useContext(ViewportContext)
  if (context === undefined) {
    throw new Error('useViewport must be used within a ViewportProvider')
  }
  return context
} 