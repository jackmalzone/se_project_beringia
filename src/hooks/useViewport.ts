import { useContext } from 'react'
import { ViewportContext, ViewportContextType } from '../contexts/definitions/viewportContext'

export const useViewport = (): ViewportContextType => {
  const context = useContext(ViewportContext)
  if (context === undefined) {
    throw new Error('useViewport must be used within a ViewportProvider')
  }
  return context
} 