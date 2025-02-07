import { FC, useContext, useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConfigContext } from '../../contexts/ConfigContext'
import { useTheme } from '../../contexts/ThemeContext'
import { useLoading } from '../../contexts/LoadingContext'
import { useViewport } from '../../hooks/useViewport'
import { useScroll } from '../../hooks/useScroll'
import { useNavigation } from '../../contexts/NavigationContext'
import { ROUTES } from '../../utils/constants'
import logo from '../../assets/beringia/logo-bridge-white.webp'
import searchIcon from '../../assets/search.svg'
import './Header.css'
import { clients } from '../../data/index.ts'

interface HeaderProps {
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = () => {
  const config = useContext(ConfigContext)
  const { theme, toggleTheme } = useTheme()
  const { isLoading } = useLoading()
  const { isMobile } = useViewport()
  const { scrollDirection, isScrolled } = useScroll(50)
  const location = useLocation()
  const { isHeaderVisible, setHeaderVisibility, setCurrentSection } = useNavigation()
  const [showSolutions, setShowSolutions] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)
  const solutionsRef = useRef<HTMLDivElement>(null)

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
    setIsSearchActive(false)
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
    setIsSearchActive(false)
  }

  const handleSolutionsMouseEnter = () => {
    if (!isMobile) {
      setShowSolutions(true)
    }
  }

  const handleSolutionsMouseLeave = () => {
    if (!isMobile) {
      setShowSolutions(false)
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
    setIsSearchActive(false)
  }

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive)
  }

  const headerClasses = [
    'header',
    theme === 'dark' ? 'header--dark' : '',
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
        <div className={`header__search ${isSearchActive ? 'header__search--expanded' : ''}`}>
          <input
            type="text"
            className="header__search-input"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img 
            src={searchIcon} 
            className="header__search-icon" 
            onClick={toggleSearch}
            alt="Search"
          />
        </div>

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
            <span className="header__nav-link">Solutions</span>
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

          <button 
            className="header__theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <div className="header__footer">
          <Link to={ROUTES.CONTACT} className="header__contact-button" onClick={handleNavClick}>
            Get in Touch
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header