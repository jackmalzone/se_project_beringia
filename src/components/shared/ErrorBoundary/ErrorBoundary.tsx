import { Component, ErrorInfo, ReactNode } from 'react'
import './ErrorBoundary.css'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
  maxRetries?: number
  resetKeys?: unknown[]
}

interface State {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  retryCount: number
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0
    }
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ errorInfo })
    
    // Log error to console with stack trace
    console.error('ErrorBoundary caught an error:', error)
    console.error('Component Stack:', errorInfo.componentStack)
    
    // Call custom error handler if provided
    this.props.onError?.(error, errorInfo)
    
    // Here you would typically send to your error logging service
    this.logErrorToService(error, errorInfo)
  }

  componentDidUpdate(prevProps: Props) {
    // Reset error state if resetKeys change
    if (this.props.resetKeys && 
        prevProps.resetKeys && 
        JSON.stringify(prevProps.resetKeys) !== JSON.stringify(this.props.resetKeys)) {
      this.handleReset()
    }
  }

  private logErrorToService(error: Error, errorInfo: ErrorInfo) {
    // Example implementation - replace with your error logging service
    const errorLog = {
      error: {
        message: error.message,
        name: error.name,
        stack: error.stack,
      },
      componentStack: errorInfo.componentStack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    }
    
    // Send to your error logging service
    // Example: await errorLoggingService.log(errorLog)
    console.log('Error logged:', errorLog)
  }

  private handleReset = () => {
    const { maxRetries = 3 } = this.props
    const { retryCount } = this.state

    if (retryCount < maxRetries) {
      this.setState(state => ({
        hasError: false,
        error: null,
        errorInfo: null,
        retryCount: state.retryCount + 1
      }))
    } else {
      // If max retries reached, show a different message
      this.setState({
        hasError: true,
        error: new Error('Maximum retry attempts reached. Please refresh the page.'),
        errorInfo: null
      })
    }
  }

  private getErrorMessage(error: Error): string {
    // Handle specific types of errors
    if (error instanceof TypeError) {
      return 'A type error occurred. This might be due to unexpected data format.'
    }
    if (error instanceof ReferenceError) {
      return 'A reference error occurred. This might be due to missing data.'
    }
    if (error instanceof SyntaxError) {
      return 'A syntax error occurred. This might be due to invalid data format.'
    }
    if (error.name === 'NetworkError' || error.message.includes('network')) {
      return 'A network error occurred. Please check your internet connection.'
    }
    if (error.name === 'ChunkLoadError') {
      return 'Failed to load a required part of the application. Please refresh the page.'
    }
    
    // Default error message
    return error.message || 'An unexpected error occurred'
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      const errorMessage = this.getErrorMessage(this.state.error!)

      return (
        <div className="error-boundary">
          <div className="error-boundary__content">
            <h2 className="error-boundary__title">Something went wrong</h2>
            <p className="error-boundary__message">{errorMessage}</p>
            {this.state.retryCount < (this.props.maxRetries || 3) && (
              <button 
                className="error-boundary__button"
                onClick={this.handleReset}
              >
                Try Again ({(this.props.maxRetries || 3) - this.state.retryCount} attempts remaining)
              </button>
            )}
            {this.state.retryCount >= (this.props.maxRetries || 3) && (
              <button 
                className="error-boundary__button"
                onClick={() => window.location.reload()}
              >
                Refresh Page
              </button>
            )}
            {process.env.NODE_ENV === 'development' && this.state.errorInfo && (
              <details className="error-boundary__details">
                <summary>Error Details</summary>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 