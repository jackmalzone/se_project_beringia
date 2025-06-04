import { ClientData } from '../../types'
import { SKETCHFAB_MODEL_IDS } from '../../../utils/sketchfab'
import headerImage from '../../../assets/clients/advanced-navigation/header.jpg'
import logoTitle from '../../../assets/clients/advanced-navigation/logo-title.webp'
import hydrusIcon from '../../../assets/clients/advanced-navigation/hydrus-icon.webp'
import subsonusIcon from '../../../assets/clients/advanced-navigation/subsonus-icon.webp'
import subsonusTagIcon from '../../../assets/clients/advanced-navigation/subsonus-tag-icon.webp'
import pptx1 from '../../../assets/clients/advanced-navigation/pptx-1-hydrus.jpg'
import pptx2 from '../../../assets/clients/advanced-navigation/pptx-2-subsonus.jpg'
import pptx3 from '../../../assets/clients/advanced-navigation/pptx-3-catalyst.jpg'
import pptx4 from '../../../assets/clients/advanced-navigation/pptx-4-history.jpg'
import pptx5 from '../../../assets/clients/advanced-navigation/pptx-5-solutions.jpg'
import pptx6 from '../../../assets/clients/advanced-navigation/pptx-6-trust.jpg'
import pptx7 from '../../../assets/clients/advanced-navigation/pptx-7-acousticnav.jpg'
import pptx8 from '../../../assets/clients/advanced-navigation/pptx-8-subsonus-specs.jpg'
import pptx9 from '../../../assets/clients/advanced-navigation/pptx-9-acousticnav-specs.jpg'
import pptx10 from '../../../assets/clients/advanced-navigation/pptx-10-subsonus-usbl.jpg'
import pptx11 from '../../../assets/clients/advanced-navigation/pptx-11-subsonustag-specs.jpg'
import pptx12 from '../../../assets/clients/advanced-navigation/pptx-12-hydrus-rev.jpg'
import pptx13 from '../../../assets/clients/advanced-navigation/pptx-13-hydrus-auv.jpg'
import pptx14 from '../../../assets/clients/advanced-navigation/pptx-14-3d-data.jpg'
import pptx15 from '../../../assets/clients/advanced-navigation/pptx-15-navigation.jpg'
import pptx16 from '../../../assets/clients/advanced-navigation/pptx-16-payload.jpg'
import pptx17 from '../../../assets/clients/advanced-navigation/pptx-17-features.jpg'
import pptx18 from '../../../assets/clients/advanced-navigation/pptx-18-photogrammatry.jpg'
import pptx19 from '../../../assets/clients/advanced-navigation/pptx-19-shipwreck.jpg'
import pptx20 from '../../../assets/clients/advanced-navigation/pptx-20-currents.jpg'

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
        link: 'https://www.advancednavigation.com/robotics/micro-auv/hydrus/',
        documentation: {
          specs: 'https://www.advancednavigation.com/robotics/micro-auv/hydrus/datasheet/',
          manual: 'https://docs.advancednavigation.com/hydrus/Printed_Title.htm'
        }
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
        link: 'https://www.advancednavigation.com/acoustic-navigation/usbl/subsonus/',
        documentation: {
          specs: 'https://www.advancednavigation.com/acoustic-navigation/usbl/subsonus/datasheet/',
          manual: 'https://docs.advancednavigation.com/subsonus/Introduction.htm'
        }
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
        link: 'https://www.advancednavigation.com/acoustic-navigation/transponders/subsonus-tag/',
        documentation: {
          specs: 'https://www.advancednavigation.com/acoustic-navigation/transponders/subsonus-tag/datasheet/'
        }
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
      id: 'pptx1-overview',
      url: pptx1,
      alt: 'Overview of Hydrus autonomous underwater vehicle',
      type: 'image'
    },
    {
      id: 'pptx2-hydrus-auv',
      url: pptx2,
      alt: 'Detailed specifications of Hydrus AUV system',
      type: 'image'
    },
    {
      id: 'pptx3-hydrus-revolution',
      url: pptx3,
      alt: 'Revolutionary features of Hydrus platform',
      type: 'image'
    },
    {
      id: 'pptx4-subsonus-overview',
      url: pptx4,
      alt: 'Overview of Subsonus underwater positioning system',
      type: 'image'
    },
    {
      id: 'pptx5-subsonus-usbl',
      url: pptx5,
      alt: 'Subsonus USBL system capabilities',
      type: 'image'
    },
    {
      id: 'pptx6-subsonus-specifications',
      url: pptx6,
      alt: 'Technical specifications of Subsonus system',
      type: 'image'
    },
    {
      id: 'pptx7-subsonus-tag-specs',
      url: pptx7,
      alt: 'Specifications of Subsonus Tag transponder',
      type: 'image'
    },
    {
      id: 'pptx8-acoustic-navigation',
      url: pptx8,
      alt: 'Acoustic navigation system overview',
      type: 'image'
    },
    {
      id: 'pptx9-acoustic-nav-specs',
      url: pptx9,
      alt: 'Acoustic navigation system specifications',
      type: 'image'
    },
    {
      id: 'pptx10-hydrus-features',
      url: pptx10,
      alt: 'Key features of Hydrus platform',
      type: 'image'
    },
    {
      id: 'pptx11-hydrus-payload',
      url: pptx11,
      alt: 'Hydrus payload capabilities',
      type: 'image'
    },
    {
      id: 'pptx12-navigation-capabilities',
      url: pptx12,
      alt: 'Advanced navigation capabilities',
      type: 'image'
    },
    {
      id: 'pptx13-current-analysis',
      url: pptx13,
      alt: 'Current analysis and monitoring capabilities',
      type: 'image'
    },
    {
      id: 'pptx14-shipwreck-survey',
      url: pptx14,
      alt: 'Shipwreck survey capabilities',
      type: 'image'
    },
    {
      id: 'pptx15-photogrammetry',
      url: pptx15,
      alt: 'Underwater photogrammetry capabilities',
      type: 'image'
    },
    {
      id: 'pptx16-3d-data',
      url: pptx16,
      alt: '3D data collection and processing',
      type: 'image'
    },
    {
      id: 'pptx17-solutions-overview',
      url: pptx17,
      alt: 'Overview of Advanced Navigation solutions',
      type: 'image'
    },
    {
      id: 'pptx18-trust-factors',
      url: pptx18,
      alt: 'Why trust Advanced Navigation',
      type: 'image'
    },
    {
      id: 'pptx19-catalyst-tech',
      url: pptx19,
      alt: 'Catalyst technology overview',
      type: 'image'
    },
    {
      id: 'pptx20-company-history',
      url: pptx20,
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