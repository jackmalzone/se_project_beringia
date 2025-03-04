import { useState } from 'react'
import { LoadingContext } from './definitions/loadingContext'

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [loadingMessage, setLoadingMessage] = useState<string | null>(null)

  const setLoading = (loading: boolean) => {
    setIsLoading(loading)
    if (!loading) setLoadingMessage(null)
  }

  return (
    <LoadingContext.Provider 
      value={{ 
        isLoading, 
        setLoading, 
        loadingMessage, 
        setLoadingMessage 
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
} 