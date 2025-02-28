import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from '../../contexts/ModalContext'
import { LoadingProvider } from '../../contexts/LoadingContext'
import { NavigationProvider } from '../../contexts/NavigationContext'
import { ViewportProvider } from '../../contexts/ViewportContext'
import { ScrollProvider } from '../../contexts/ScrollContext'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'
import Main from '../Main/Main'
import Terms from '../Terms/Terms'
import About from '../About/About'
import Client from '../Client/Client'
import { ConfigContext } from '../../contexts/ConfigContext'
import { ROUTES } from '../../utils/constants'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, useState, ErrorInfo } from 'react'
import { Loading } from '../shared/Loading/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const config = {
    baseUrl: import.meta.env.PROD
      ? 'https://api.beringia-marine.com' 
      : 'http://localhost:3001'
  }

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000) // Show loading for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loading />
  }

  const handleError = (error: Error, errorInfo: ErrorInfo) => {
    console.error('App Error:', error)
    console.error('Error Info:', errorInfo)
  }

  const HeaderErrorFallback = () => (
    <header className="header">
      <div className="header__error">
        An error occurred loading the header
      </div>
    </header>
  )

  const FooterErrorFallback = () => (
    <footer className="footer">
      <div className="footer__error">
        An error occurred loading the footer
      </div>
    </footer>
  )

  return (
    <HelmetProvider>
      <ConfigContext.Provider value={config}>
        <LoadingProvider>
          <ViewportProvider>
            <Router>
              <NavigationProvider>
                <ScrollProvider threshold={50}>
                  <ModalProvider>
                    <ErrorBoundary onError={handleError}>
                      <div className="app">
                        <ErrorBoundary
                          fallback={<HeaderErrorFallback />}
                          onError={handleError}
                        >
                          <Header />
                        </ErrorBoundary>

                        <ErrorBoundary>
                          <Routes>
                            <Route path="/terms" element={
                              <ErrorBoundary>
                                <Terms />
                              </ErrorBoundary>
                            } />
                            <Route path="/about" element={
                              <ErrorBoundary>
                                <About />
                              </ErrorBoundary>
                            } />
                            <Route path={`${ROUTES.CLIENTS}/:clientSlug/*`} element={
                              <ErrorBoundary>
                                <Client />
                              </ErrorBoundary>
                            } />
                            <Route path="*" element={
                              <ErrorBoundary>
                                <Main />
                              </ErrorBoundary>
                            } />
                          </Routes>
                        </ErrorBoundary>

                        <ErrorBoundary
                          fallback={<FooterErrorFallback />}
                          onError={handleError}
                        >
                          <Footer />
                        </ErrorBoundary>

                        <Modal />
                      </div>
                    </ErrorBoundary>
                  </ModalProvider>
                </ScrollProvider>
              </NavigationProvider>
            </Router>
          </ViewportProvider>
        </LoadingProvider>
      </ConfigContext.Provider>
    </HelmetProvider>
  )
}

export default App