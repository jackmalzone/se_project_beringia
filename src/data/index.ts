import { ClientData } from './types'
import { advancedNavigation } from './clients/advanced-navigation'

export const clients: Record<string, ClientData> = {
  'advanced-navigation': advancedNavigation,
  // Add more clients here
}
