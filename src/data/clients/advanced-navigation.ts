import { ClientData } from '../types'

export const advancedNavigation: ClientData = {
  id: 'advanced-navigation',
  name: 'Advanced Navigation',
  slug: 'advanced-navigation',
  seo: {
    title: 'Advanced Navigation | Marine Technology Solutions',
    description: 'Global leader in navigation and autonomous systems. Made possible with extensive research, testing and vertically integrated manufacturing, the company has progressed into deep technology fields, including robotics, underwater acoustics, inertial, photonic and quantum sensing.',
    ogImage: '/images/clients/advanced-navigation/og.jpg'
  },
  overview: {
    title: 'Advanced Navigation',
    description: 'Advanced Navigation is a global leader in navigation and autonomous systems. By leveraging capabilities in software-enhanced hardware, every solution delivers unrivalled capabilities and exceptional performance across land, air, sea and space applications where GPS is unreliable. Headquartered in Sydney, Australia, with research and production facilities nationwide and offices globally, Advanced Navigation is an Australian manufacturer exporting worldwide.',
    headerImage: '/images/clients/advanced-navigation/header.jpg'
  },
  sellingPoints: {
    title: 'Core Solutions',
    points: [
      {
        id: 'hydrus',
        title: 'Hydrus',
        description: 'Hydrus is a hovering micro autonomous underwater vehicle (AUV) revolutionising underwater data collection across reef monitoring and subsea inspections.',
        features: [
          'Fully autonomous with advanced navigation and communication systems',
          'Integrated DVL, USBL, INS and acoustic modem',
          'High-quality 4K camera for accurate, georeferenced video and imagery',
          'Compact and lightweight at 15 lbs',
          'Hand deployable from small boats',
          'Obstacle detection and collision avoidance'
        ],
        icon: '/icons/hydrus.svg'
      },
      {
        id: 'subsonus',
        title: 'Subsonus',
        description: 'Subsonus is a miniature underwater acoustic positioning system that provides high accuracy position, velocity, and heading at ranges of up to 1000 meters.',
        features: [
          'Next-generation USBL2 configuration with multi-transducer architecture',
          'Integrated Inertial Navigation Systems (INS) for 6DoF accuracy',
          'Industry-leading eight-channel factory-calibrated hydrophone array',
          'Dynamic power and signal encoding for improved performance',
          'Acoustic heading transfer technology',
          'Internal speed of sound measurement',
          'Fully integrated miniature enclosure',
          'Built-in acoustic modem functionality'
        ],
        icon: '/icons/subsonus.svg'
      },
      {
        id: 'subsonus-tag',
        title: 'Subsonus Tag',
        description: 'Subsonus Tag is an acoustic positioning transponder that operates with the Subsonus USBL.',
        features: [
          'Ultra-long battery life up to 18 months',
          'Multi-track technology for multiple tag deployment',
          'Integrated pressure tolerant display for diver communication',
          'Hermetically sealed design requiring no servicing',
          'Wireless Qi charging and Bluetooth configuration'
        ],
        icon: '/icons/subsonus-tag.svg'
      }
    ]
  },
  valueProposition: {
    title: 'Why Choose Advanced Navigation',
    description: 'Built on a culture of research and discovery, Advanced Navigation merges cutting-edge technologies into simple solutions, ensuring swift delivery of capabilities to customers.',
    highlights: [
      'Extensive research and testing capabilities',
      'Vertically integrated manufacturing',
      'Deep technology expertise across multiple fields',
      'Rapid product delivery worldwide',
      'Unmatched technical field expertise',
      'Progress in robotics, underwater acoustics, and quantum sensing',
      'Comprehensive support network',
      'Australian-made quality'
    ]
  },
  mediaLinks: {
    website: 'https://www.advancednavigation.com',
    youtube: 'https://youtube.com/@advancednavigation',
    linkedin: 'https://linkedin.com/company/advanced-navigation',
    sketchfab: 'https://sketchfab.com/advanced-navigation'
  },
  gallery: [
    {
      id: 'hydrus-product',
      url: '/images/clients/advanced-navigation/hydrus-product.jpg',
      alt: 'Hydrus autonomous underwater vehicle product image',
      type: 'image'
    },
    {
      id: 'hydrus-field',
      url: '/images/clients/advanced-navigation/hydrus-field.jpg',
      alt: 'Hydrus AUV operating in the field',
      type: 'image'
    },
    {
      id: 'hydrus-footage',
      url: '/images/clients/advanced-navigation/hydrus-footage.mp4',
      alt: 'Video footage captured by Hydrus',
      type: 'video'
    },
    {
      id: 'subsonus-product',
      url: '/images/clients/advanced-navigation/subsonus-product.jpg',
      alt: 'Subsonus underwater acoustic positioning system',
      type: 'image'
    },
    {
      id: 'subsonus-tag-product',
      url: '/images/clients/advanced-navigation/subsonus-tag-product.jpg',
      alt: 'Subsonus Tag acoustic positioning transponder',
      type: 'image'
    }
  ]
}