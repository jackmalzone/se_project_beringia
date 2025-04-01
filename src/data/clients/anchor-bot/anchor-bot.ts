import { ClientData } from '../../types'
import headerImage from '../../../assets/clients/anchor-bot/overview.jpg'
import logoTitle from '../../../assets/clients/anchor-bot/logo-title.png'
import anchorBotIcon from '../../../assets/clients/anchor-bot/favicon.png'
import promoVideo from '../../../assets/clients/anchor-bot/promo.mov'
import diagramImage from '../../../assets/clients/anchor-bot/diagrams.jpg'
import postOperationImage from '../../../assets/clients/anchor-bot/post-op.jpg'
import installationImage from '../../../assets/clients/anchor-bot/anchor-bot_install-graphic.jpg'
import drillImage from '../../../assets/clients/anchor-bot/anchor-bot_drill.png'
import renderImage from '../../../assets/clients/anchor-bot/render-ortho-top.jpeg'
import deliveryImage from '../../../assets/clients/anchor-bot/anchor-bot_delivery.jpg'
import deploymentImage from '../../../assets/clients/anchor-bot/anchor-bot_deployment.jpg'
import launchImage from '../../../assets/clients/anchor-bot/anchor-bot_launch.jpg'
import simpleGraphicImage from '../../../assets/clients/anchor-bot/anchor-bot_simple-graphic.png'


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
          'Reduction of Diver Support',
          'Precise GPS-guided placement',
          'Compatible with most sediment types',
          'Pre-attached anchor lines without proof-loading',
          'Real-time torque values reported',
          'All-weather capable operations',
          'Rapid mobilization',
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
      'Real-time torque values reported',
      'GPS-integrated positioning system',
      'Compatible with multiple sediment types',
      'Priority Technical Support',
      'Rapid mobilization'
    ]
  },
  mediaLinks: {
    website: 'https://www.anchorbotmarine.com',
    email: 'info@anchorbotmarine.com',
    linkedin: 'https://linkedin.com/company/anchorbot-marine'
  },
  demo: {
    title: 'How Anchorbot Works',
    description: 'Watch a step-by-step demonstration combining animation and live footage to showcase Anchorbot\'s underwater anchor installation process.',
    videoUrl: promoVideo
  },
  gallery: [
    {
      id: 'anchor-bot-delivery',
      url: deliveryImage,
      alt: 'Anchorbot Delivery',
      type: 'image'
    },
    {
      id: 'anchor-bot-deployment',
      url: deploymentImage,
      alt: 'Anchorbot Deployment',
      type: 'image'
    },
    {
      id: 'anchor-bot-launch',
      url: launchImage,
      alt: 'Anchorbot Launch',
      type: 'image'
    },
    {
      id: 'anchor-bot-post-operation',
      url: postOperationImage,
      alt: 'Anchorbot Post Operation',
      type: 'image'
    },
    {
      id: 'anchor-bot-installation',
      url: installationImage,
      alt: 'Anchorbot Installation',
      type: 'image'
    },
    {
      id: 'anchor-bot-render',
      url: renderImage,
      alt: 'Anchorbot Render',
      type: 'image'
    },
    {
      id: 'anchor-bot-diagram',
      url: diagramImage,
      alt: 'Anchorbot Diagram',
      type: 'image'
    },
    {
      id: 'anchor-bot-drill',
      url: drillImage,
      alt: 'Anchorbot Drill',
      type: 'image'
    },
    {
      id: 'anchor-bot-simple-graphic',
      url: simpleGraphicImage,
      alt: 'Anchorbot Simple Graphic',
      type: 'image'
    }
  ]
}