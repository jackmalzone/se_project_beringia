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
    description: 'Founded in 2020 by veteran ROV engineers, Mission Robotics integrates cutting-edge software and hardware to redefine your vehicle\'s performance, making it the ultimate solution for demanding missions',
    headerImage: headerImage
  },
  sellingPoints: {
    title: 'Core Technology',
    points: [
      {
        id: 'vehicle-os',
        title: 'Vehicle OS & Control Software',
        description: 'Modular software framework that allows end users to capitalize on advanced computing, interfacing and customizations',
        features: [
          'Built for 24/7 uptime utilizing RTI DDS & diagnostics monitoring',
          'Pilot assisted / station keeping controls: Hold depth, altitude, attitude, position, heading',
          'Semi-autonomous operation & mission planning',
          'Physics-based thruster control allocator',
          'Teleoperations',
          'Time-synchronized vehicle & payload data with eventing',
          'On-site mission replay',
          'MP4/ CSV Export',
          'Fleet Management'
        ],
        icon: logoTitle
      },
      {
        id: 'hardware',
        title: 'Advanced Hardware Platform',
        description: 'Consolidated single board NVIDIA Jetson Nano based computing platform allowing for the combination of powerful computing with robust control systems.',
        features: [
          'Vehicle stabilization at any attitude: Quaternion-based pointing controls eliminate gimbal-lock issues',
          'Physics-based thruster control allocator',
          'ESKF 6-DOF (position & attitude) data fusion & state estimation',
          'USBL/ GNSS Drift Correction',
          'Health monitoring sensing system',
          'Multiple I/O and network interfaces',
          'Expandable'
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
          'DDS middleware with ROS2 bridge development environment',
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
      'Modern DDS middleware with ROS2 bridge',
      'Powerful computing capabilities',
      'Advanced control features',
      'Open standards and APIs',
      'Rapidly expandable sensor integration',
      'Teleoperation ready',
      'Maximized Uptime',
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
