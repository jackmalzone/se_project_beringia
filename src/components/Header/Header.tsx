import { FC, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConfigContext } from '../../contexts/ConfigContext'
import { ROUTES } from '../../utils/constants'
import logo from '../../assets/beringia/favicon-abstract-grdnt-nobuffer.png'
import './Header.css'
import { clients } from '../../data/index.ts'

interface HeaderProps {
  isLoading?: boolean;
}

const Header: FC<HeaderProps> = ({ isLoading = false }) => {
  const location = useLocation()
  const config = useContext(ConfigContext)

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
        {[
          { path: ROUTES.HOME, label: 'Home' },
          ...Object.values(clients).map(client => ({
            path: ROUTES.CLIENT(client.slug),
            label: client.name
          })),
          { path: ROUTES.CONTACT, label: 'Contact' },
          { path: ROUTES.TERMS, label: 'Terms' }
        ].map(({ path, label }) => (
          <Link 
            key={path}
            to={path}
            className={`header__nav-link ${
              location.pathname === path ? 'header__nav-link--active' : ''
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header