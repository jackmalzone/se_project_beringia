import { useEffect, useState, useRef } from 'react'
import { useParams, Routes, Route, useLocation } from 'react-router-dom'
import { ClientData } from '../../data/clients/types'
import { clients } from '../../data/clients'
import { ROUTES } from '../../utils/constants'
import { SEOHead } from '../shared/SEOHead'
import { Overview } from './sections/Overview/Overview'
import { SellingPoints } from './sections/SellingPoints/SellingPoints'
import { ValueProposition } from './sections/ValueProposition/ValueProposition'
import { MediaLinks } from './sections/MediaLinks/MediaLinks'
import { MediaGallery } from './sections/MediaGallery/MediaGallery'
import ClientNav from './sections/ClientNav/ClientNav'
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