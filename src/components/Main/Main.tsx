import { useRef } from 'react'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Artist from '../Artist/Artist'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'
import { useScrollToSection } from '../../hooks/useScrollToSection'
import { SEOHead } from '../shared/SEOHead'
import { OrganizationStructuredData } from '../shared/StructuredData'

const Main = () => {
  const homeRef = useRef<HTMLDivElement>(null)
  const artistRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const sectionRefs = {
    '/': homeRef,
    '/artist': artistRef,
    '/contact': contactRef
  }

  useScrollToSection(sectionRefs, {
    headerOffset: 80,
    behavior: 'smooth'
  })

  return (
    <>
      <SEOHead
        title="Beringia Marine | Integrated Marine Technology Solutions"
        description="Connecting innovative marine technology manufacturers with end users across research, defense, and ocean exploration sectors. Specializing in autonomous underwater vehicles, marine robotics, and underwater systems."
        url="/"
        image="/og-image.jpeg"
      />
      <OrganizationStructuredData />
      <main className="main">
        <ErrorBoundary>
          <section ref={homeRef} id="home">
            <Home />
          </section>
        </ErrorBoundary>
        <ErrorBoundary>
          <section ref={artistRef} id="artist">
            <Artist />
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
