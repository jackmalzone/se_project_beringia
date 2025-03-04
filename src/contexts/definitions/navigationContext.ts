import { createContext } from 'react'

export interface NavigationState {
  currentSection: string
  previousSection: string | null
  isNavVisible: boolean
  isHeaderVisible: boolean
}

export interface NavigationContextType extends NavigationState {
  setCurrentSection: (section: string) => void
  setPreviousSection: (section: string | null) => void
  setNavVisibility: (visible: boolean) => void
  setHeaderVisibility: (visible: boolean) => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined) 