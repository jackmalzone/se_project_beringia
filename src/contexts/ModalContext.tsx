import { createContext, useContext, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  modalContent: React.ReactNode | null
  openModal: (content: React.ReactNode) => void
  closeModal: () => void
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null)

  const openModal = (content: React.ReactNode) => {
    setModalContent(content)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
  }

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}