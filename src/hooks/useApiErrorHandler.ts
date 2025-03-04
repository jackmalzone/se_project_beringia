import { useState, useCallback } from 'react'

interface ApiError {
  message: string
  code?: string
  status?: number
}

// Type for API error responses
interface ApiErrorResponse {
  message?: string
  code?: string
  status?: number
  [key: string]: unknown
}

interface UseApiErrorHandler {
  error: ApiError | null
  handleError: (error: unknown) => void
  clearError: () => void
  isError: boolean
}

export const useApiErrorHandler = (): UseApiErrorHandler => {
  const [error, setError] = useState<ApiError | null>(null)

  const handleError = useCallback((error: unknown) => {
    if (error instanceof Error) {
      // Handle standard Error objects
      setError({
        message: error.message,
        code: 'UNKNOWN_ERROR'
      })
    } else if (typeof error === 'object' && error !== null) {
      // Handle API error responses
      const apiError = error as ApiErrorResponse
      setError({
        message: apiError.message || 'An unknown error occurred',
        code: apiError.code || 'UNKNOWN_ERROR',
        status: apiError.status || 500
      })
    } else {
      // Handle unexpected error types
      setError({
        message: 'An unexpected error occurred',
        code: 'UNKNOWN_ERROR'
      })
    }

    // Log error for debugging
    if (process.env.NODE_ENV === 'development') {
      console.error('API Error:', error)
    }
  }, [])

  const clearError = useCallback(() => {
    setError(null)
  }, [])

  return {
    error,
    handleError,
    clearError,
    isError: error !== null
  }
}

// Error message utilities
export const getErrorMessage = (error: ApiError): string => {
  switch (error.code) {
    case 'NETWORK_ERROR':
      return 'Unable to connect to the server. Please check your internet connection.'
    case 'TIMEOUT_ERROR':
      return 'The request timed out. Please try again.'
    case 'UNAUTHORIZED':
      return 'You are not authorized to perform this action.'
    case 'FORBIDDEN':
      return 'You do not have permission to access this resource.'
    case 'NOT_FOUND':
      return 'The requested resource was not found.'
    case 'VALIDATION_ERROR':
      return 'Please check your input and try again.'
    case 'SERVER_ERROR':
      return 'An internal server error occurred. Please try again later.'
    default:
      return error.message || 'An unexpected error occurred.'
  }
}

// HTTP status code to error code mapping
export const getErrorCodeFromStatus = (status: number): string => {
  switch (status) {
    case 400:
      return 'VALIDATION_ERROR'
    case 401:
      return 'UNAUTHORIZED'
    case 403:
      return 'FORBIDDEN'
    case 404:
      return 'NOT_FOUND'
    case 408:
      return 'TIMEOUT_ERROR'
    case 500:
    case 502:
    case 503:
    case 504:
      return 'SERVER_ERROR'
    default:
      return 'UNKNOWN_ERROR'
  }
} 