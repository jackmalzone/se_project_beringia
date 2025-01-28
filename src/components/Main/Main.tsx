import { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Home from '../Home/Home'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

const Main = () => {
  const location = useLocation()
  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const refs = {
      '/': homeRef,
      '/services': servicesRef,
      '/contact': contactRef
    }
    
    const targetRef = refs[location.pathname as keyof typeof refs]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  return (
    <main className="main">
      <section ref={homeRef} id="home">
        <Home />
      </section>
      <section ref={servicesRef} id="services">
        <Services />
      </section>
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </main>
  )
}

export default Main
