import { useRef } from 'react'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { SEOHead } from '../shared/SEOHead'

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
    <>
      <SEOHead
        title="Beringia Marine | Marine Technology Consulting"
        description="Expert marine technology consulting services specializing in underwater robotics, sonar systems, and advanced marine solutions. Discover how we're revolutionizing underwater exploration."
        image={`${window.location.origin}${import.meta.env.BASE_URL}docs/assets/desktop-home.png`}
      />
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
    </>
  )
}

export default Main
