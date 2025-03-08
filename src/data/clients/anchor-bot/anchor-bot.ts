import { ClientData } from '../../types'
import headerImage from '../../../assets/clients/anchor-bot/header.jpg'
import logoTitle from '../../../assets/clients/anchor-bot/logo-title.png'
import anchorBotIcon from '../../../assets/clients/anchor-bot/favicon.png'

export const anchorBot: ClientData = {
  id: 'anchor-bot',
  name: 'Anchorbot Marine',
  slug: 'anchor-bot',
  logo: logoTitle,
  seo: {
    title: 'Anchorbot Marine | Underwater Anchor Installation ROV',
    description: 'Revolutionary underwater ROV system for precision helical anchor installation in marine infrastructure. Ideal for aquaculture, floating solar, marinas, and ocean energy projects. 100m depth capability with GPS guidance.',
    ogImage: '/images/clients/anchor-bot/og.jpg'
  },
  overview: {
    title: 'Anchorbot Marine',
    description: 'Anchorbot Marine has developed the world\'s first underwater robot for precision anchor installation. Our innovative ROV system installs helical anchors efficiently and accurately at depths up to 100m, revolutionizing marine anchoring across multiple industries.',
    headerImage: headerImage
  },
  sellingPoints: {
    title: 'Core Technology',
    points: [
      {
        id: 'anchor-bot',
        title: 'ANCHORBOT ROV',
        description: 'A revolutionary ROV system for precision underwater anchor installation, designed to transform marine infrastructure deployment.',
        features: [
          'Operates in depths up to 100m in challenging conditions',
          'No divers required - safer operations',
          'Precise GPS-guided placement',
          'Compatible with most sediment types',
          'Pre-attached anchor lines without proof-loading',
          'Real-time torque/position data monitoring',
          'All-weather capable operations',
          'Compact deployment footprint'
        ],
        icon: anchorBotIcon
      }
    ]
  },
  useCases: {
    title: 'Applications',
    description: 'Anchorbot Marine serves diverse markets with precision anchoring needs',
    cases: [
      {
        id: 'aquaculture',
        title: 'Aquaculture',
        description: 'Secure anchoring systems for fish farms and aquaculture installations, optimized for long-term reliability.',
        keyPoints: [
          'Rapid deployment for large cage arrays',
          'Engineered for high-energy sites',
          'Minimal environmental impact'
        ]
      },
      {
        id: 'floating-solar',
        title: 'Floating Solar',
        description: 'Precision anchoring systems for floating solar arrays on freshwater reservoirs and water bodies.',
        keyPoints: [
          'Optimal array positioning and stability',
          'Designed for water level fluctuations',
          'Scalable for utility-scale projects'
        ]
      },
      {
        id: 'inland-moorings',
        title: 'Marinas & Moorings',
        description: 'Professional mooring solutions for marinas, docks, and inland waterway infrastructure.',
        keyPoints: [
          'Suitable for varying bottom conditions',
          'Quick installation in restricted spaces',
          'Certified load capacity ratings'
        ]
      }
    ]
  },
  valueProposition: {
    title: 'Why Choose Anchorbot Marine',
    description: 'Anchorbot Marine delivers innovative anchoring solutions that are safer, more efficient, and more environmentally friendly than traditional methods.',
    highlights: [
      'Cost-effective alternative to traditional anchoring',
      'Reduced environmental impact',
      'Smaller vessel requirements',
      'Precise installation data logging',
      'GPS-integrated positioning system',
      'Compatible with multiple sediment types',
      'Comprehensive technical support',
      'Proven field performance'
    ]
  },
  mediaLinks: {
    website: 'https://www.anchorbotmarine.com',
    email: 'info@anchorbotmarine.com',
    linkedin: 'https://linkedin.com/company/anchorbot-marine'
  },
  gallery: [
    {
      id: 'anchor-bot-product',
      url: '/images/clients/anchor-bot/product.jpg',
      alt: 'Anchorbot ROV system',
      type: 'image'
    },
    {
      id: 'anchor-bot-deployment',
      url: '/images/clients/anchor-bot/deployment.jpg',
      alt: 'Anchorbot being deployed from vessel',
      type: 'image'
    },
    {
      id: 'anchor-bot-operation',
      url: '/images/clients/anchor-bot/operation.mp4',
      alt: 'Anchorbot installing helical anchor',
      type: 'video'
    }
  ]
}