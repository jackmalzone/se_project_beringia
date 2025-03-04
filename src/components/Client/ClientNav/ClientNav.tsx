import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaCubes } from 'react-icons/fa'
import { ROUTES } from '../../../utils/constants'
import { clients } from '../../../data'
import { SKETCHFAB_MODEL_IDS } from '../../../utils/sketchfab'
import { useScrollContext } from '../../../hooks/useScrollContext'
import { useActiveSection } from '../../../hooks/useActiveSection'
import './ClientNav.css'

interface ClientNavProps {
  clientSlug: string;
  sectionRefs: { [key: string]: React.RefObject<HTMLElement> };
}

const ClientNav = ({ clientSlug, sectionRefs }: ClientNavProps) => {
  const { isScrolled } = useScrollContext()
  const activeSection = useActiveSection(sectionRefs)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  
  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  // Check if client has 3D model
  const currentClient = clients[clientSlug as keyof typeof clients]
  const has3DModel = currentClient?.modelId === SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK

  // Define all possible nav items in the desired order
  const navItems = [
    { path: ROUTES.CLIENT(clientSlug), label: 'Overview' },
    { path: `${ROUTES.CLIENT(clientSlug)}/features`, label: 'Features' },
    
    // Insert Interactive before Media if 3D model exists
    ...(has3DModel ? [{ 
      path: `${ROUTES.CLIENT(clientSlug)}/interactive`,
      label: windowWidth <= 1024 ? <><FaCubes /></> : <><FaCubes /> 3D Model</>,
      is3D: true
    }] : []),
    { path: `${ROUTES.CLIENT(clientSlug)}/value`, label: 'Value' },
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
            activeSection === path ? 'client-nav__link--active' : ''
          } ${is3D ? 'client-nav__link--3d' : ''}`}
          onClick={(e) => {
            if (activeSection === path) {
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