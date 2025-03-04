import { createContext } from 'react'

interface NavigationContextType {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
  isSolutionsOpen: boolean
  setIsSolutionsOpen: (isOpen: boolean) => void
  isHeaderVisible: boolean
  setHeaderVisibility: (visible: boolean) => void
  currentSection: string
  setCurrentSection: (section: string) => void
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined) 