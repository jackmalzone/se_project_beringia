import { ClientData } from '../../types'
import headerImage from '../../../assets/clients/mission-robotics/header.jpeg'
import logoTitle from '../../../assets/clients/mission-robotics/logo-title.webp'
import electronicsImage from '../../../assets/clients/mission-robotics/electronics.jpg'
import lakeTahoeImage from '../../../assets/clients/mission-robotics/lake-tahoe.jpg'
import blackRovImage from '../../../assets/clients/mission-robotics/black-rov.jpg'

export const missionRobotics: ClientData = {
  id: 'mission-robotics',
  name: 'Mission Robotics',
  slug: 'mission-robotics',
  logo: logoTitle,
  seo: {
    title: 'Mission Robotics | Advanced Marine Robotics Control Systems',
    description: 'Pioneering hardware and software solutions for marine robotics. Modernizing ROV control systems with ROS2-based architecture, advanced sensor integration, and real-time teleoperation capabilities.',
    ogImage: headerImage
  },
  overview: {
    title: 'Mission Robotics',
    description: 'Founded in 2020 by veteran ROV engineers, Mission Robotics develops cutting-edge hardware and software products that accelerate innovation in marine robotics. Their platform enables faster development and deployment of ROVs, AUVs, and USVs with modern, open, and extensible architecture.',
    headerImage: headerImage
  },
  sellingPoints: {
    title: 'Core Technology',
    points: [
      {
        id: 'vehicle-os',
        title: 'Vehicle OS & Control Software',
        description: 'Advanced ROS2-based control system with real-time vehicle control, data logging, and remote operation capabilities.',
        features: [
          'Built on ROS 2 and DDS for real-time communication',
          'Supports multiple control modes including depth/attitude hold',
          'Integrated data logging with time-synchronized recording',
          'GPU-accelerated HD video processing',
          'Remote operation over WAN/internet',
          'Multi-vehicle, multi-operator support',
          'Extensible API for custom integrations'
        ],
        icon: logoTitle
      },
      {
        id: 'hardware',
        title: 'Advanced Hardware Platform',
        description: 'Integrated electronics module combining powerful computing with robust control systems.',
        features: [
          'NVIDIA Jetson Nano computing platform',
          'Next-generation flight management unit',
          'Consolidated single-board design',
          'Electronic power switching system',
          'Health monitoring sensors',
          'Multiple I/O and network interfaces',
          'Expandable with accessory boards'
        ],
        icon: logoTitle
      }
    ]
  },
  useCases: {
    title: 'Applications',
    description: 'Mission Robotics serves diverse marine sectors with advanced control solutions',
    cases: [
      {
        id: 'rov-upgrades',
        title: 'ROV Modernization',
        description: 'Drop-in replacement electronics for existing ROVs, bringing modern capabilities to legacy systems.',
        keyPoints: [
          'Plug-and-play upgrade for BlueROV2',
          'Enhanced control and stability',
          'Advanced sensor integration',
          'Improved reliability and maintainability'
        ]
      },
      {
        id: 'custom-vehicles',
        title: 'Custom Vehicle Development',
        description: 'Scalable solutions for custom ROVs and AUVs up to 600kg.',
        keyPoints: [
          'Flexible hardware configurations',
          'Customizable software stack',
          'Integration support',
          'OEM partnerships available'
        ]
      },
      {
        id: 'research',
        title: 'Marine Research',
        description: 'Advanced platform for underwater research and development.',
        keyPoints: [
          'ROS2 development environment',
          'Data collection and analysis',
          'Simulation capabilities',
          'Open API for custom algorithms'
        ]
      }
    ]
  },
  valueProposition: {
    title: 'Why Choose Mission Robotics',
    description: 'Mission Robotics provides a modern, open platform that accelerates marine robotics development and deployment.',
    highlights: [
      'Modern ROS2-based architecture',
      'Powerful computing capabilities',
      'Advanced control features',
      'Open standards and APIs',
      'Extensive sensor support',
      'Remote operation ready',
      'Professional technical support',
      'Proven field performance'
    ]
  },
  mediaLinks: {
    website: 'https://www.missionrobotics.us',
    email: 'info@missionrobotics.us',
    linkedin: 'https://linkedin.com/company/mission-robotics'
  },
  gallery: [
    {
      id: 'electronics-module',
      url: electronicsImage,
      alt: 'Mission Robotics 4-inch Electronics Module',
      type: 'image'
    },
    {
      id: 'lake-tahoe',
      url: lakeTahoeImage,
      alt: 'ROV deployment at Lake Tahoe',
      type: 'image'
    },
    {
      id: 'black-rov',
      url: blackRovImage,
      alt: 'Black ROV',
      type: 'image'
    }
  ]
}
