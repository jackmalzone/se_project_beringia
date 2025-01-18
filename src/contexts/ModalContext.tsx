import { createContext, useContext, ReactNode, useState } from 'react'

interface ModalContextType {
  isOpen: boolean
  modalContent: ReactNode | null
  modalProps: object
  openModal: (content: ReactNode, props?: object) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const [modalProps, setModalProps] = useState({})

  const openModal = (content: ReactNode, props: object = {}) => {
    setModalContent(content)
    setModalProps(props)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
    setModalProps({})
  }

  return (
    <ModalContext.Provider value={{ isOpen, modalContent, modalProps, openModal, closeModal }}>
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