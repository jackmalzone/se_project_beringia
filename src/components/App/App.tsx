import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from '../../contexts/ModalContext'
import { ThemeProvider } from '../../contexts/ThemeContext'
import { LoadingProvider } from '../../contexts/LoadingContext'
import { NavigationProvider } from '../../contexts/NavigationContext'
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import Modal from '../Modal/Modal'
import Main from '../Main/Main'
import Terms from '../Terms/Terms.tsx'
import About from '../About/About.tsx'
import { ConfigContext } from '../../contexts/ConfigContext'
import Client from '../Client/Client'
import { ROUTES } from '../../utils/constants'
import { HelmetProvider } from 'react-helmet-async'
import { useEffect, useState } from 'react'
import { Loading } from '../shared/Loading'

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

  return (
    <HelmetProvider>
      <ConfigContext.Provider value={config}>
        <ThemeProvider>
          <LoadingProvider>
            <ModalProvider>
              <Router>
                <NavigationProvider>
                  <div className="app">
                    <Header />
                    <Routes>
                      <Route path="/terms" element={<Terms />} />
                      <Route path="/about" element={<About />} />
                      <Route path={`${ROUTES.CLIENTS}/:clientSlug/*`} element={<Client />} />
                      <Route path="*" element={<Main />} />
                    </Routes>
                    <Footer />
                    <Modal />
                  </div>
                </NavigationProvider>
              </Router>
            </ModalProvider>
          </LoadingProvider>
        </ThemeProvider>
      </ConfigContext.Provider>
    </HelmetProvider>
  )
}

export default App