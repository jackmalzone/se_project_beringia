import { useEffect, useState, useRef } from 'react'
import { useParams, useLocation, Link, Routes, Route } from 'react-router-dom'
import { ClientData } from '../../data/types.ts'
import { clients } from '../../data'
import { ROUTES } from '../../utils/constants.ts'
import { SKETCHFAB_MODEL_IDS } from '../../utils/sketchfab'
import { SEOHead } from '../shared/SEOHead.tsx'
import { Overview } from './Overview/Overview.tsx'
import { SellingPoints } from './SellingPoints/SellingPoints.tsx'
import { ValueProposition } from './ValueProposition/ValueProposition.tsx'
import { MediaLinks } from './MediaLinks/MediaLinks.tsx'
import { MediaGallery } from './MediaGallery/MediaGallery.tsx'
import ClientNav from './ClientNav/ClientNav.tsx'
import { UseCases } from './UseCases/UseCases'
import { Interactive } from './Interactive/Interactive'
import { useScroll } from '../../hooks/useScroll'
import './Client.css'
import ErrorBoundary from '../shared/ErrorBoundary/ErrorBoundary'

const Client = () => {
  const { clientSlug } = useParams()
  const location = useLocation()
  const [clientData, setClientData] = useState<ClientData | null>(null)
  
  const overviewRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const interactiveRef = useRef<HTMLDivElement>(null)
  const { scrollDirection, isScrolled } = useScroll(80)

  useEffect(() => {
    if (clientSlug) {
      const data = Object.values(clients).find(client => client.slug === clientSlug)
      setClientData(data || null)
    }
  }, [clientSlug])

  useEffect(() => {
    if (!clientSlug) return;
    
    const refs = {
      [ROUTES.CLIENT(clientSlug)]: overviewRef,
      [`${ROUTES.CLIENT(clientSlug)}/features`]: featuresRef,
      [`${ROUTES.CLIENT(clientSlug)}/value`]: valueRef,
      [`${ROUTES.CLIENT(clientSlug)}/media`]: mediaRef,
      [`${ROUTES.CLIENT(clientSlug)}/interactive`]: interactiveRef,
    }
    
    const targetRef = refs[location.pathname]
    if (targetRef?.current) {
      const headerHeight = 80;
      const navHeight = 60;
      const totalOffset = headerHeight + navHeight;
      
      const elementPosition = targetRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, clientSlug])

  if (!clientData) return null

  const navClasses = [
    'client__nav',
    scrollDirection === 'down' && isScrolled ? 'client__nav--header-hidden' : ''
  ].filter(Boolean).join(' ')

  return (
    <div className="client-page">
      <SEOHead {...clientData.seo} />
      <nav className={navClasses}>
        <ErrorBoundary>
          <ClientNav clientSlug={clientData.slug} />
        </ErrorBoundary>
      </nav>
      
      <div ref={overviewRef}>
        <ErrorBoundary>
          <Overview {...clientData.overview} />
        </ErrorBoundary>
      </div>
      <div ref={featuresRef}>
        <ErrorBoundary>
          <SellingPoints {...clientData.sellingPoints} />
          <UseCases {...clientData.useCases} />
        </ErrorBoundary>
      </div>
      <div ref={interactiveRef}>
        {clientData.id === 'advanced-navigation' && (
          <ErrorBoundary>
            <Interactive 
              modelId={SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK}
              title="Hydrus"
              description="Get hands-on with Hydrus. Explore every detail of this revolutionary autonomous underwater vehicle. Rotate, zoom, and discover its innovative features through interactive annotations."
            />
          </ErrorBoundary>
        )}
      </div>
      <div ref={valueRef}>
        <ErrorBoundary>
          <ValueProposition {...clientData.valueProposition} />
        </ErrorBoundary>
      </div>
      <div ref={mediaRef}>
        <ErrorBoundary>
          <MediaLinks links={clientData.mediaLinks} />
          <MediaGallery items={clientData.gallery} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Client