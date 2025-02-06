import { FC, useContext, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConfigContext } from '../../contexts/ConfigContext'
import { ROUTES } from '../../utils/constants'
import logo from '../../assets/beringia/favicon-abstract-grdnt-nobuffer.png'
import searchIcon from '../../assets/search.svg'
import './Header.css'
import { clients } from '../../data/index.ts'

interface HeaderProps {
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = ({ isLoading }) => {
  const config = useContext(ConfigContext)
  const location = useLocation()
  const [showSolutions, setShowSolutions] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  // Reset mobile menu state on route change
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setShowSolutions(false)
    setIsSearchActive(false)
  }, [location.pathname])

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

  const handleSolutionsClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowSolutions(!showSolutions)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
    setShowSolutions(false)
    setIsSearchActive(false)
  }

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive)
  }

  if (isLoading) {
    return (
      <header className="header header--loading">
        <div className="header__loading">Loading...</div>
      </header>
    )
  }

  return (
    <header className="header" role="banner">
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
      
      <button 
        className="header__mobile-menu-button"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>

      <div 
        className={`header__nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      />

      <nav className={`header__nav ${isMobileMenuOpen ? 'active' : ''}`} role="navigation">
        <div className={`header__search ${isSearchActive ? 'active' : ''}`}>
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
          <Link to={ROUTES.HOME} className="header__nav-link" onClick={handleNavClick}>
            Home
          </Link>
          
          <div 
            className={`header__nav-dropdown ${showSolutions ? 'active' : ''}`}
            onClick={handleSolutionsClick}
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

          <Link to={ROUTES.ABOUT} className="header__nav-link" onClick={handleNavClick}>
            About
          </Link>

          <Link to={ROUTES.CONTACT} className="header__nav-link" onClick={handleNavClick}>
            Contact
          </Link>

          <Link to={ROUTES.TERMS} className="header__nav-link" onClick={handleNavClick}>
            Terms
          </Link>
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