import { Link, useLocation } from 'react-router-dom'
import { FaCubes } from 'react-icons/fa'
import { ROUTES } from '../../../utils/constants'
import { clients } from '../../../data'
import { SKETCHFAB_MODEL_IDS } from '../../../utils/sketchfab'
import { useScrollContext } from '../../../contexts/ScrollContext'
import './ClientNav.css'

interface ClientNavProps {
  clientSlug: string;
}

const ClientNav = ({ clientSlug }: ClientNavProps) => {
  const location = useLocation()
  const { isScrolled } = useScrollContext()
  
  // Check if client has 3D model
  const currentClient = clients[clientSlug as keyof typeof clients]
  const has3DModel = currentClient?.modelId === SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK

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

  const navClasses = [
    'client-nav',
    isScrolled ? 'client-nav--scrolled' : ''
  ].filter(Boolean).join(' ')

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