import { useEffect, useState, useRef } from 'react'
import { useParams, Routes, Route, useLocation } from 'react-router-dom'
import { ClientData } from '../../data/types.ts'
import { clients } from '../../data'
import { ROUTES } from '../../utils/constants.ts'
import { SEOHead } from '../shared/SEOHead.tsx'
import { Overview } from './Overview/Overview.tsx'
import { SellingPoints } from './SellingPoints/SellingPoints.tsx'
import { ValueProposition } from './ValueProposition/ValueProposition.tsx'
import { MediaLinks } from './MediaLinks/MediaLinks.tsx'
import { MediaGallery } from './MediaGallery/MediaGallery.tsx'
import ClientNav from './ClientNav/ClientNav.tsx'
import './Client.css'

const Client = () => {
  const { clientSlug } = useParams()
  const location = useLocation()
  const [clientData, setClientData] = useState<ClientData | null>(null)
  
  const overviewRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (clientSlug) {
      const data = Object.values(clients).find(client => client.slug === clientSlug)
      setClientData(data || null)
    }
  }, [clientSlug])

  useEffect(() => {
    const refs = {
      [ROUTES.CLIENT(clientSlug)]: overviewRef,
      [`${ROUTES.CLIENT(clientSlug)}/features`]: featuresRef,
      [`${ROUTES.CLIENT(clientSlug)}/value`]: valueRef,
      [`${ROUTES.CLIENT(clientSlug)}/media`]: mediaRef,
    }
    
    const targetRef = refs[location.pathname]
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname, clientSlug])

  if (!clientData) return null

  return (
    <div className="client-page">
      <SEOHead {...clientData.seo} />
      <ClientNav clientSlug={clientData.slug} />
      
      <div ref={overviewRef}>
        <Overview {...clientData.overview} />
      </div>
      <div ref={featuresRef}>
        <SellingPoints {...clientData.sellingPoints} />
      </div>
      <div ref={valueRef}>
        <ValueProposition {...clientData.valueProposition} />
      </div>
      <div ref={mediaRef}>
        <MediaLinks links={clientData.mediaLinks} />
        <MediaGallery items={clientData.gallery} />
      </div>
    </div>
  )
}

export default Client