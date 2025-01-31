import { ClientData } from './types'
import { advancedNavigation } from './clients/advanced-navigation'
import { anchorBot } from './clients/anchor-bot'

export const clients: Record<string, ClientData> = {
  'advanced-navigation': advancedNavigation,
  'anchor-bot': anchorBot
  // Add more clients here
}
