import { FC, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConfigContext } from '../../contexts/ConfigContext'
import { ROUTES } from '../../utils/constants'
import { SKETCHFAB_MODEL_IDS } from '../../utils/sketchfab'
import logo from '../../assets/beringia/favicon-abstract-grdnt-nobuffer.png'
import './Header.css'
import { clients } from '../../data/index.ts'

interface HeaderProps {
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = ({ isLoading }) => {
  const location = useLocation()
  const config = useContext(ConfigContext)
  const [showSolutions, setShowSolutions] = useState(false)

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
        <Link to={ROUTES.HOME} className="header__logo" aria-label="Home">
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
      
      <nav className="header__nav" role="navigation">
        <Link to={ROUTES.HOME} className="header__nav-link">
          Home
        </Link>
        
        <div 
          className="header__nav-dropdown"
          onMouseEnter={() => setShowSolutions(true)}
          onMouseLeave={() => setShowSolutions(false)}
        >
          <span className="header__nav-link">Solutions</span>
          {showSolutions && (
            <div className="header__solutions-menu">
              {Object.values(clients).map(client => (
                <Link
                  key={client.slug}
                  to={ROUTES.CLIENT(client.slug)}
                  className="header__solutions-link"
                >
                  {client.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to={ROUTES.ABOUT} className="header__nav-link">
          About
        </Link>

        <Link to={ROUTES.CONTACT} className="header__nav-link">
          Contact
        </Link>

        <Link to={ROUTES.TERMS} className="header__nav-link">
          Terms
        </Link>
      </nav>
    </header>
  )
}

export default Header