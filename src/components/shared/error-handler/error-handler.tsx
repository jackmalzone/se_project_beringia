import type { ComponentType } from 'react'
import { useApiErrorHandler } from '../../../hooks/useApiErrorHandler'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import './error-handler.css'

interface WithErrorHandlingProps {
  onError?: (error: Error) => void
}

/**
 * Higher-Order Component that adds error handling capabilities to a component
 * @param WrappedComponent - The component to wrap with error handling
 * @param options - Configuration options for error handling
 */
export function withErrorHandler<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: WithErrorHandlingProps = {}
) {
  return function ErrorHandlerComponent(props: P) {
    const { error, handleError, clearError } = useApiErrorHandler()

    // Custom error UI for API errors
    const renderError = () => {
      if (!error) return null

      return (
        <div className="error-handler">
          <div className="error-handler__content">
            <h3 className="error-handler__title">Error</h3>
            <p className="error-handler__message">{error.message}</p>
            <button 
              className="error-handler__button"
              onClick={clearError}
            >
              Dismiss
            </button>
          </div>
        </div>
      )
    }

    return (
      <ErrorBoundary
        onError={(error) => {
          handleError(error)
          options.onError?.(error)
        }}
      >
        {error && renderError()}
        <WrappedComponent 
          {...props} 
          onError={handleError}
        />
      </ErrorBoundary>
    )
  }
} 