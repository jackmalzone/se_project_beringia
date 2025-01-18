import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ModalProvider } from '../../contexts/ModalContext'
import Header from '../Header/Header.tsx'
import Footer from '../Footer/Footer.tsx'
import Modal from '../Modal/Modal'
import Main from '../Main/Main'
import Terms from '../Terms/Terms.tsx'
import { ConfigContext } from '../../contexts/ConfigContext'
import Client from '../Client/Client'
import { ROUTES } from '../../utils/constants'
import { HelmetProvider } from 'react-helmet-async'

function App() {
  const config = {
    baseUrl: import.meta.env.PROD
      ? 'https://api.beringia-marine.com' 
      : 'http://localhost:3001'
  }

  return (
    <HelmetProvider>
      <ConfigContext.Provider value={config}>
        <ModalProvider>
          <Router>
            <div className="app">
              <Header />
              <Routes>
                <Route path="/terms" element={<Terms />} />
                <Route path={`${ROUTES.CLIENTS}/:clientSlug/*`} element={<Client />} />
                <Route path="*" element={<Main />} />
              </Routes>
              <Footer />
              <Modal />
            </div>
          </Router>
        </ModalProvider>
      </ConfigContext.Provider>
    </HelmetProvider>
  )
}

export default App