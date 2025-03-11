import { ClientData } from '../../types'
import { SKETCHFAB_MODEL_IDS } from '../../../utils/sketchfab'
import headerImage from '../../../assets/clients/advanced-navigation/header.jpg'
import logoTitle from '../../../assets/clients/advanced-navigation/logo-title.webp'
import hydrusIcon from '../../../assets/clients/advanced-navigation/hydrus-icon.webp'
import subsonusIcon from '../../../assets/clients/advanced-navigation/subsonus-icon.webp'
import subsonusTagIcon from '../../../assets/clients/advanced-navigation/subsonus-tag-icon.webp'
import pptxHydrus from '../../../assets/clients/advanced-navigation/pptx-hydrus.jpg'
import pptxHydrusAuv from '../../../assets/clients/advanced-navigation/pptx-hydrus-auv.jpg'
import pptxHydrusRev from '../../../assets/clients/advanced-navigation/pptx-hydrus-rev.jpg'
import pptxSubsonus from '../../../assets/clients/advanced-navigation/pptx-subsonus.jpg'
import pptxSubsonusUsbl from '../../../assets/clients/advanced-navigation/pptx-subsonus-usbl.jpg'
import pptxSubsonusSpecs from '../../../assets/clients/advanced-navigation/pptx-subsonus-specs.jpg'
import pptxSubsonusTagSpecs from '../../../assets/clients/advanced-navigation/pptx-subsonustag-specs.jpg'
import pptxAcousticNav from '../../../assets/clients/advanced-navigation/pptx-acousticnav.jpg'
import pptxAcousticNavSpecs from '../../../assets/clients/advanced-navigation/pptx-acousticnav-specs.jpg'
import pptxFeatures from '../../../assets/clients/advanced-navigation/pptx-features.jpg'
import pptxPayload from '../../../assets/clients/advanced-navigation/pptx-payload.jpg'
import pptxNavigation from '../../../assets/clients/advanced-navigation/pptx-navigation.jpg'
import pptxCurrents from '../../../assets/clients/advanced-navigation/pptx-currents.jpg'
import pptxShipwreck from '../../../assets/clients/advanced-navigation/pptx-shipwreck.jpg'
import pptxPhotogrammetry from '../../../assets/clients/advanced-navigation/pptx-photogrammatry.jpg'
import pptx3dData from '../../../assets/clients/advanced-navigation/pptx-3d-data.jpg'
import pptxSolutions from '../../../assets/clients/advanced-navigation/pptx-solutions.jpg'
import pptxTrust from '../../../assets/clients/advanced-navigation/pptx-trust.jpg'
import pptxCatalyst from '../../../assets/clients/advanced-navigation/pptx-catalyst.jpg'
import pptxHistory from '../../../assets/clients/advanced-navigation/pptx-history.jpg'

export const advancedNavigation: ClientData = {
  id: 'advanced-navigation',
  name: 'Advanced Navigation',
  slug: 'advanced-navigation',
  logo: logoTitle,
  modelId: SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK,
  seo: {
    title: 'Advanced Navigation | Marine Technology Solutions',
    description: 'Global leader in navigation and autonomous systems. Made possible with extensive research, testing and vertically integrated manufacturing, the company has progressed into deep technology fields, including robotics, underwater acoustics, inertial, photonic and quantum sensing.',
    ogImage: '/images/clients/advanced-navigation/og.jpg'
  },
  overview: {
    title: 'Advanced Navigation',
    description: 'Advanced Navigation is a global leader in navigation and autonomous systems. By leveraging capabilities in software-enhanced hardware, every solution delivers unrivalled capabilities and exceptional performance across land, air, sea and space applications where GPS is unreliable. Headquartered in Sydney, Australia, with research and production facilities nationwide and offices globally, Advanced Navigation is an Australian manufacturer exporting worldwide.',
    headerImage: headerImage
  },
  sellingPoints: {
    title: 'Core Subsea Solutions',
    points: [
      {
        id: 'hydrus',
        title: 'HYDRUS',
        description: 'Hydrus is a hovering micro autonomous underwater vehicle (AUV) revolutionising underwater data collection across reef monitoring and subsea inspections.',
        features: [
          'Fully autonomous with advanced navigation and communication systems',
          'Integrated DVL, USBL, INS and acoustic modem',
          'High-quality 4K camera for accurate, georeferenced video and imagery',
          'Compact and lightweight at 15 lbs',
          'Hand deployable from small boats',
          'Obstacle detection and collision avoidance'
        ],
        icon: hydrusIcon,
        link: 'https://www.advancednavigation.com/robotics/micro-auv/hydrus/'
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
        icon: subsonusIcon,
        link: 'https://www.advancednavigation.com/acoustic-navigation/usbl/subsonus/'
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
        icon: subsonusTagIcon,
        link: 'https://www.advancednavigation.com/acoustic-navigation/transponders/subsonus-tag/'
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
      id: 'hydrus-overview',
      url: pptxHydrus,
      alt: 'Overview of Hydrus autonomous underwater vehicle',
      type: 'image'
    },
    {
      id: 'hydrus-auv',
      url: pptxHydrusAuv,
      alt: 'Detailed specifications of Hydrus AUV system',
      type: 'image'
    },
    {
      id: 'hydrus-revolution',
      url: pptxHydrusRev,
      alt: 'Revolutionary features of Hydrus platform',
      type: 'image'
    },
    {
      id: 'subsonus-overview',
      url: pptxSubsonus,
      alt: 'Overview of Subsonus underwater positioning system',
      type: 'image'
    },
    {
      id: 'subsonus-usbl',
      url: pptxSubsonusUsbl,
      alt: 'Subsonus USBL system capabilities',
      type: 'image'
    },
    {
      id: 'subsonus-specifications',
      url: pptxSubsonusSpecs,
      alt: 'Technical specifications of Subsonus system',
      type: 'image'
    },
    {
      id: 'subsonus-tag-specs',
      url: pptxSubsonusTagSpecs,
      alt: 'Specifications of Subsonus Tag transponder',
      type: 'image'
    },
    {
      id: 'acoustic-navigation',
      url: pptxAcousticNav,
      alt: 'Acoustic navigation system overview',
      type: 'image'
    },
    {
      id: 'acoustic-nav-specs',
      url: pptxAcousticNavSpecs,
      alt: 'Acoustic navigation system specifications',
      type: 'image'
    },
    {
      id: 'hydrus-features',
      url: pptxFeatures,
      alt: 'Key features of Hydrus platform',
      type: 'image'
    },
    {
      id: 'hydrus-payload',
      url: pptxPayload,
      alt: 'Hydrus payload capabilities',
      type: 'image'
    },
    {
      id: 'navigation-capabilities',
      url: pptxNavigation,
      alt: 'Advanced navigation capabilities',
      type: 'image'
    },
    {
      id: 'current-analysis',
      url: pptxCurrents,
      alt: 'Current analysis and monitoring capabilities',
      type: 'image'
    },
    {
      id: 'shipwreck-survey',
      url: pptxShipwreck,
      alt: 'Shipwreck survey capabilities',
      type: 'image'
    },
    {
      id: 'photogrammetry',
      url: pptxPhotogrammetry,
      alt: 'Underwater photogrammetry capabilities',
      type: 'image'
    },
    {
      id: '3d-data',
      url: pptx3dData,
      alt: '3D data collection and processing',
      type: 'image'
    },
    {
      id: 'solutions-overview',
      url: pptxSolutions,
      alt: 'Overview of Advanced Navigation solutions',
      type: 'image'
    },
    {
      id: 'trust-factors',
      url: pptxTrust,
      alt: 'Why trust Advanced Navigation',
      type: 'image'
    },
    {
      id: 'catalyst-tech',
      url: pptxCatalyst,
      alt: 'Catalyst technology overview',
      type: 'image'
    },
    {
      id: 'company-history',
      url: pptxHistory,
      alt: 'Advanced Navigation company history',
      type: 'image'
    },
    {
      id: 'hydrus-3d',
      url: `https://sketchfab.com/models/${SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK}`,
      alt: 'Hydrus AUV 3D Model',
      type: 'sketchfab',
      modelId: SKETCHFAB_MODEL_IDS.HYDRUS_SHIPWRECK
    },
    {
      id: 'subsonus-3d',
      url: 'https://sketchfab.com/models/[model-id]',
      alt: 'Subsonus 3D Model',
      type: 'sketchfab',
      modelId: '[model-id]'
    }
  ],
  useCases: {
    title: 'Applications',
    description: 'Advanced Navigation provides cutting-edge solutions across multiple marine sectors',
    cases: [
      {
        id: 'subsea',
        title: 'Subsea Positioning',
        description: 'High-precision positioning solutions for ROVs, AUVs, and subsea vehicles.',
        keyPoints: [
          'Ultra-short baseline (USBL) positioning',
          'Inertial navigation systems (INS)',
          'Depth-rated solutions to 4000m'
        ]
      },
      {
        id: 'survey',
        title: 'Hydrographic Survey',
        description: 'Unprecedented performance for each class of marine survey and mapping regardless of application.',
        keyPoints: [
          'Singlebeam, multibeam, Sub-bottom profiling, magnetometer',
          'Time synchronization including 1PPS, PTP',
          '1000 Hz sampling',
          'IHO Special Order'
        ]
      },
      {
        id: 'vessel',
        title: 'Vessel & Rig Monitoring',
        description: 'Advanced navigation, positioning and monitoring for offshore vessels, rigs, FPSO\'s and more.',
        keyPoints: [
          'Dynamic positioning reference',
          'Dynamic attitude including heading, surge, sway, heave, pitch and roll',
          'Precision Navigation regardless of GNSS availability'
        ]
      }
    ]
  }
}