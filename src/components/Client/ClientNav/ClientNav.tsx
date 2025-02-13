import { Link, useLocation } from 'react-router-dom'
import { FaCubes } from 'react-icons/fa'
import { ROUTES } from '../../../utils/constants'
import { clients } from '../../../data'
import { SKETCHFAB_MODEL_IDS } from '../../../utils/sketchfab'
import { useScroll } from '../../../hooks/useScroll'
import './ClientNav.css'

interface ClientNavProps {
  clientSlug: string;
}

const ClientNav = ({ clientSlug }: ClientNavProps) => {
  const location = useLocation()
  const { scrollDirection, isScrolled } = useScroll(80)
  
  // Check if client has 3D model
  const currentClient = clients[clientSlug as keyof typeof clients]
  const has3DModel = currentClient?.modelId === SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK

  const navClasses = [
    'client-nav',
    scrollDirection === 'down' && isScrolled ? 'client-nav--header-hidden' : ''
  ].filter(Boolean).join(' ')

  // Define all possible nav items in the desired order
  const navItems = [
    { path: ROUTES.CLIENT(clientSlug), label: 'Overview' },
    { path: `${ROUTES.CLIENT(clientSlug)}/features`, label: 'Features' },
    { path: `${ROUTES.CLIENT(clientSlug)}/value`, label: 'Value' },
    // Insert Interactive before Media if 3D model exists
    ...(has3DModel ? [{ 
      path: `${ROUTES.CLIENT(clientSlug)}/interactive`,
      label: <><FaCubes /> 3D Model</>,
      is3D: true
    }] : []),
    { path: `${ROUTES.CLIENT(clientSlug)}/media`, label: 'Media' },
  ]

  return (
    <nav className={navClasses}>
      {navItems.map(({ path, label, is3D }) => (
        <Link
          key={path}
          to={path}
          className={`client-nav__link ${
            location.pathname === path ? 'client-nav__link--active' : ''
          } ${is3D ? 'client-nav__link-3d' : ''}`}
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