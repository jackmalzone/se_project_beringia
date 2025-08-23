import { Helmet } from 'react-helmet-async'

interface StructuredDataProps {
  type: 'Organization' | 'Article' | 'WebPage'
  data: Record<string, unknown>
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

// Predefined structured data for common use cases
export const OrganizationStructuredData = () => (
  <StructuredData
    type="Organization"
    data={{
      name: 'Beringia Marine',
      url: 'https://beringia-marine.com',
      logo: 'https://beringia-marine.com/assets/beringia/logo-transparent.png',
      description: 'Connecting innovative marine technology manufacturers with end users across research, defense, and ocean exploration sectors.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US'
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'info@beringia-marine.com'
      },
      sameAs: [
        'https://linkedin.com/company/beringia-marine'
      ],
      founder: {
        '@type': 'Person',
        name: 'Chris Malzone',
        jobTitle: 'Principal',
        description: 'Marine technologist and business strategist with over three decades of experience in marine technology, sales, and project management.'
      }
    }}
  />
)

export const ArticleStructuredData = ({ 
  title, 
  description, 
  author, 
  publishDate, 
  image 
}: {
  title: string
  description: string
  author: string
  publishDate: string
  image: string
}) => (
  <StructuredData
    type="Article"
    data={{
      headline: title,
      description: description,
      image: image,
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: 'Beringia Marine',
        logo: {
          '@type': 'ImageObject',
          url: 'https://beringia-marine.com/assets/beringia/logo-transparent.png'
        }
      },
      datePublished: publishDate,
      dateModified: publishDate,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://beringia-marine.com/insights/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
      }
    }}
  />
)
