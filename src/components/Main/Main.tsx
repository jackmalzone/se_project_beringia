import { useRef } from 'react'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'
import { useScrollToSection } from '../../hooks/useScrollToSection'

const Main = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    '/': homeRef,
    '/contact': contactRef
  }

  useScrollToSection(sectionRefs, {
    headerOffset: 80,
    behavior: 'smooth'
  })

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
