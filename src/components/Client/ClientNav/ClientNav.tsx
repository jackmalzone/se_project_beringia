import { Link, useLocation } from 'react-router-dom'
import { ROUTES } from '../../../../utils/constants'
import './ClientNav.css'

interface ClientNavProps {
  clientSlug: string;
}

const ClientNav = ({ clientSlug }: ClientNavProps) => {
  const location = useLocation()
  
  const navItems = [
    { path: ROUTES.CLIENT(clientSlug), label: 'Overview' },
    { path: `${ROUTES.CLIENT(clientSlug)}/features`, label: 'Features' },
    { path: `${ROUTES.CLIENT(clientSlug)}/value`, label: 'Value' },
    { path: `${ROUTES.CLIENT(clientSlug)}/media`, label: 'Media' },
  ]

  return (
    <nav className="client-nav">
      {navItems.map(({ path, label }) => (
        <Link
          key={path}
          to={path}
          className={`client-nav__link ${
            location.pathname === path ? 'client-nav__link--active' : ''
          }`}
          onClick={(e) => {
            if (location.pathname === path) {
              e.preventDefault()
            }
          }}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}

export default ClientNav