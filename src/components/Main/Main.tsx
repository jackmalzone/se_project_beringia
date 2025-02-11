import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'

const Main = () => {
  const location = useLocation()
  const homeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const refs = {
      '/': homeRef,
      '/contact': contactRef
    }
    
    const targetRef = refs[location.pathname as keyof typeof refs]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <main className="main">
      <ErrorBoundary>
        <section ref={homeRef} id="home">
          <Home />
        </section>
      </ErrorBoundary>
      <ErrorBoundary>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </ErrorBoundary>
    </main>
  )
}

export default Main
