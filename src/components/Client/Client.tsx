import { useEffect, useState, useRef, useMemo } from 'react'
import { useParams, useLocation } from 'react-router-dom'
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
import { useScrollContext } from '../../contexts/ScrollContext'
import { useScrollToSection } from '../../hooks/useScrollToSection'
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
  const { scrollDirection, isScrolled } = useScrollContext()

  // Memoize section refs to prevent unnecessary re-renders
  const sectionRefs = useMemo(() => ({
    [ROUTES.CLIENT(clientSlug || '')]: overviewRef,
    [`${ROUTES.CLIENT(clientSlug || '')}/features`]: featuresRef,
    [`${ROUTES.CLIENT(clientSlug || '')}/value`]: valueRef,
    [`${ROUTES.CLIENT(clientSlug || '')}/media`]: mediaRef,
    [`${ROUTES.CLIENT(clientSlug || '')}/interactive`]: interactiveRef,
  }), [clientSlug])

  useEffect(() => {
    if (clientSlug) {
      const data = Object.values(clients).find(client => client.slug === clientSlug)
      setClientData(data || null)
    }
  }, [clientSlug])

  // Use the scroll to section hook with optimized settings
  useScrollToSection(sectionRefs, {
    headerOffset: 80,
    navOffset: 60,
    behavior: 'smooth',
    onScrollComplete: () => {
      // Optional: Add scroll completion logic here
    }
  })

  if (!clientData) return null

  const navClasses = [
    'client__nav',
    scrollDirection === 'down' && isScrolled ? 'client__nav--header-hidden' : ''
  ].filter(Boolean).join(' ')

  return (
    <div className="client-page">
      <SEOHead {...clientData.seo} />
      <ErrorBoundary>
        <ClientNav 
          clientSlug={clientData.slug} 
        />
      </ErrorBoundary>
      
      <div ref={overviewRef} className="client-page__section">
        <ErrorBoundary>
          <Overview {...clientData.overview} />
        </ErrorBoundary>
      </div>
      <div ref={featuresRef} className="client-page__section">
        <ErrorBoundary>
          <SellingPoints {...clientData.sellingPoints} />
          <UseCases {...clientData.useCases} />
        </ErrorBoundary>
      </div>
      <div ref={interactiveRef} className="client-page__section">
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
      <div ref={valueRef} className="client-page__section">
        <ErrorBoundary>
          <ValueProposition {...clientData.valueProposition} />
        </ErrorBoundary>
      </div>
      <div ref={mediaRef} className="client-page__section">
        <ErrorBoundary>
          <MediaLinks links={clientData.mediaLinks} />
          <MediaGallery items={clientData.gallery} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default Client