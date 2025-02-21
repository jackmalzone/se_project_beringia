import { FC, useContext, useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConfigContext } from '../../contexts/ConfigContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useViewport } from '../../contexts/ViewportContext'
import { useScrollContext } from '../../contexts/ScrollContext'
import { useNavigation } from '../../contexts/NavigationContext'
import { ROUTES } from '../../utils/constants'
import logo from '../../assets/beringia/logo-bridge-white.webp'
import './Header.css'
import { clients } from '../../data/index.ts'

interface HeaderProps {
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = () => {
  const config = useContext(ConfigContext)
  const { isLoading } = useLoading()
  const { isMobile } = useViewport()
  const { scrollDirection, isScrolled } = useScrollContext()
  const location = useLocation()
  const { isHeaderVisible, setHeaderVisibility, setCurrentSection } = useNavigation()
  const [showSolutions, setShowSolutions] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const solutionsRef = useRef<HTMLDivElement>(null)
  const closeTimeoutRef = useRef<number>()

  // Update header visibility based on scroll
  useEffect(() => {
    setHeaderVisibility(!(scrollDirection === 'down' && isScrolled))
  }, [scrollDirection, isScrolled, setHeaderVisibility])

  // Update current section on route change
  useEffect(() => {
    setCurrentSection(location.pathname)
  }, [location.pathname, setCurrentSection])

  // Reset mobile menu state on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setShowSolutions(false)
  }, [location.pathname])

  // Handle clicks outside solutions menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setShowSolutions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  // Handle body overflow
  useEffect(() => {
    const body = document.body
    const scrollY = window.scrollY

    if (isMobileMenuOpen) {
      body.style.position = 'fixed'
      body.style.top = `-${scrollY}px`
      body.style.width = '100%'
    } else {
      const scrollY = body.style.top
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
      window.scrollTo(0, parseInt(scrollY || '0') * -1)
    }

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.width = ''
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setShowSolutions(false)
  }

  const handleSolutionsMouseEnter = () => {
    if (!isMobile) {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
      }
      setShowSolutions(true)
    }
  }

  const handleSolutionsMouseLeave = () => {
    if (!isMobile) {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
      }
      closeTimeoutRef.current = window.setTimeout(() => {
        setShowSolutions(false)
      }, 300) // 300ms delay before closing
    }
  }

  const handleSolutionsClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.stopPropagation()
      setShowSolutions(!showSolutions)
    }
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
    setShowSolutions(false)
  }

  const headerClasses = [
    'header',
    isLoading ? 'header--loading' : '',
    !isHeaderVisible ? 'header--hidden' : '',
    isScrolled ? 'header--scrolled' : ''
  ].filter(Boolean).join(' ')

  if (isLoading) {
    return (
      <header className={headerClasses}>
        <div className="header__loading">Loading...</div>
      </header>
    )
  }

  return (
    <header className={headerClasses} role="banner">
      <div className="header__left">
        <Link to={ROUTES.HOME} className="header__logo" aria-label="Home" onClick={handleNavClick}>
          <img 
            className="header__logo-image" 
            src={logo} 
            alt="Beringia Marine Logo" 
          />
        </Link>
        <h1 className="header__title">
          {config?.title || 'Beringia Marine'}
        </h1>
      </div>

      {isMobile && (
        <button 
          className="header__mobile-menu-button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      )}

      <div 
        className={`header__nav-overlay ${isMobileMenuOpen ? 'header__nav-overlay--visible' : ''}`}
        onClick={toggleMobileMenu}
      />

      <nav 
        className={`header__nav ${isMobileMenuOpen ? 'header__nav--expanded' : ''}`} 
        role="navigation"
      >
        <div className="header__nav-content">
          <Link 
            to={ROUTES.HOME} 
            className="header__nav-link"
            onClick={handleNavClick}
          >
            Home
          </Link>
          
          <div 
            ref={solutionsRef}
            className={`header__nav-dropdown ${showSolutions ? 'header__nav-dropdown--expanded' : ''}`}
            onClick={handleSolutionsClick}
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <div className="header__nav-link header__nav-link--solutions">Solutions</div>
            <div className="header__solutions-menu">
              {Object.values(clients).map(client => (
                <Link
                  key={client.slug}
                  to={ROUTES.CLIENT(client.slug)}
                  className="header__solutions-link"
                  onClick={handleNavClick}
                >
                  {client.name}
                </Link>
              ))}
            </div>
          </div>

          <Link 
            to={ROUTES.ABOUT} 
            className="header__nav-link"
            onClick={handleNavClick}
          >
            About
          </Link>

          <Link 
            to={ROUTES.CONTACT} 
            className="header__nav-link"
            onClick={handleNavClick}
          >
            Contact
          </Link>

          <Link 
            to={ROUTES.TERMS} 
            className="header__nav-link"
            onClick={handleNavClick}
          >
            Terms
          </Link>
        </div>

        <div className="header__end">
          <Link to={ROUTES.CONTACT} className="header__contact-button" onClick={handleNavClick}>
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header