import { Helmet } from 'react-helmet-async'
import { ReactNode } from 'react'

interface SEOHeadProps {
  title: string
  description: string
  image?: string
  url?: string
  type?: string
  children?: ReactNode
}

export const SEOHead = ({ 
  title, 
  description, 
  image, 
  url,
  type = 'website',
  children 
}: SEOHeadProps) => {
  const siteUrl = 'https://beringia-marine.com'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/og-image.jpeg`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Beringia Marine" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Beringia Marine" />
      <meta name="keywords" content="marine technology, autonomous underwater vehicles, ocean exploration, marine robotics, underwater systems, marine research, defense technology, ocean monitoring" />
      
      {children}
    </Helmet>
  )
}
