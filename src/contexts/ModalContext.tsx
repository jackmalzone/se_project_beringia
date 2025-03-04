import { useState, ReactNode } from 'react'
import { ModalContext, ModalProps } from './definitions/modalContext'

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode | null>(null)
  const [modalProps, setModalProps] = useState<ModalProps | null>(null)

  const openModal = (content: ReactNode, props: ModalProps = {}) => {
    setModalContent(content)
    setModalProps(props)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setModalContent(null)
    setModalProps(null)
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalContent,
        modalProps,
        openModal,
        closeModal
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}