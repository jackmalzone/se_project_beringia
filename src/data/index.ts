import { ClientData } from './types'
import { advancedNavigation } from './clients/advanced-navigation/advanced-navigation'
import { anchorBot } from './clients/anchor-bot/anchor-bot'
import { missionRobotics } from './clients/mission-robotics/mission-robotics'

export const clients: Record<string, ClientData> = {
  'advanced-navigation': advancedNavigation,
  'anchor-bot': anchorBot,
  'mission-robotics': missionRobotics
  // Add more clients here
}
