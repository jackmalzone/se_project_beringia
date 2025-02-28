import { Helmet } from 'react-helmet-async'
import { ReactNode } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  image?: string
  children?: ReactNode
}

export const SEOHead = ({ title, description, image, children }: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      
      {children}
    </Helmet>
  )
}
