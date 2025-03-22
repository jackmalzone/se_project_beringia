import { ClientData } from '../../types'
import headerImage from '../../../assets/clients/mission-robotics/header.jpeg'
import logoTitle from '../../../assets/clients/mission-robotics/logo-title.webp'
import electronicsImage from '../../../assets/clients/mission-robotics/electronics.jpg'
import lakeTahoeImage from '../../../assets/clients/mission-robotics/lake-tahoe.jpg'
import blackRovImage from '../../../assets/clients/mission-robotics/black-rov.jpg'
import { BsCode } from 'react-icons/bs'
import { BsGear } from 'react-icons/bs'

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
    description: 'Built by ROV engineers who understand the challenges of small, fast-moving teams, Mission Robotics delivers plug-and-play vehicle control systems that eliminate the need for in-house software development—getting you operational faster with tools that scale as you grow.',
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
          '24/7 Uptime via RTI DDS & diagnostics monitoring',
          'Pilot-assist controls: heading, attitude, depth',
          'Advanced controls: station keeping, altitude, velocity',
          'Vehicle stabilization at any attitude, no gimbal-lock',
          'Low-latency video streaming with camera control',
          'Time-synchronized & evented vehicle & payload data',
          'ESKF 6-DOF data fusion & state estimation',
          'Native sensor support; DVL, Altimeter, AHRS, GPS, USBL',
          'Map display with ROV and boat position and history trail',
          'Waypoint navigation',
          'Open interfaces'
        ],
        icon: BsCode
      },
      {
        id: 'hardware',
        title: 'Advanced Compute Platform',
        description: 'Consolidated "brain" centralizes cutting edge compute with the NVIDIA Jetson Edge compute platform enables robust vehicle systems, flexible expansion, and future-proofing.',
        features: [
          'NVIDIA Jetson computer',
          'Real-time microcontroller',
          'Gigabit ethernet backbone and switch',
          'Serial (TTL, isolated RS-485, isolated RS-232)',
          'USB, I2C, CAN, GPIO, A/D, PWM',
          'Supercapacitor circuit to ensure software integrity during brownouts',
          'Power conditioning for stable power to sensors',
          'Fine-grain power management'
        ],
        icon: BsGear
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
        description: 'Scalable solutions for custom ROVs and AUVs.',
        keyPoints: [
          'Deployed solutions to 250kg, 600kg+ vehicles',
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
          'Standardized DDS middleware with ROS2 bridge development environment',
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
      'Open interface standards and APIs',
      'Maximized Uptime',
      'Powerful computing capabilities',
      'Rapidly expandable sensor integration',
      'Proven field performance',
      'Sensor data fusion',
      'Advanced control features',
      'Modern compute and software',
      'Teleoperation ready'
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
